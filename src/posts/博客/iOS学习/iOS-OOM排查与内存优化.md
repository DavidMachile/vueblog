---
title: iOS 内存超标怎么办：OOM 排查与优化清单
date: 2026-03-12
category: 技术博客
tag:
  - iOS
  - 内存
cover: /assets/images/cover2.jpg
---

# iOS 内存超标怎么办：OOM 排查与优化清单

OOM 是我接手老工程时最不想碰的一类问题：用户说"App 闪退"，崩溃平台一条记录都没有；本地跑一下午，内存曲线平得像心电图停机。后来才想明白，问题不在能力，在目标定错了——一直试图"复现 OOM"，而这件事大部分时候根本做不到。

这篇把这两年攒的方法记一遍：先看系统到底在杀什么，再看怎么让内存变得可归因，最后是一份能直接打勾的清单。

## OOM 难复现，是因为现场不留证据

App 因内存被杀，走的是 jetsam 机制：系统内存紧张时挑一个进程直接终止。它不是野指针那种"当前线程访问非法地址"，没有异常类型，没有崩溃线程，信号也没有。进程死得干净， crash 日志平台自然收不到东西。

复现条件更麻烦。单开一个页面几乎不可能超，线上超的往往是用户真实路径的叠加：首页缓存了一屏列表图，进直播间又开了摄像头，退出来 push 到商品详情，前面两处的图片还没释放。QA 按用例走一遍，峰值可能只有线上的六成。

所以我把目标换成了两件能做的事：**让内存峰值可观测，让每一块内存能归因**。做到这两点之后，OOM 就从"玄学"退化成了普通的性能优化任务。

## footprint 和 dirty memory，该看哪个

Xcode 调试条上显示的是 Physical Footprint，系统判杀也主要看这个值。它大致等于 dirty memory 加上被压缩的那部分内存，再算上少量 GPU 侧分配。共同点是：这些内存要腾出来，系统得花真金白银。

代码段、mmap 进来的文件、只读资源属于 clean memory，可以随时丢掉再从磁盘读回来，不计入 footprint。有同事看到 Instruments 里总占用几百兆就慌了，其实里面有一大块是可丢弃的。**判断有没有危险，只该盯 footprint 这一个数。**

读它的代码就几行：

```objective-c
#import <mach/mach.h>

- (double)currentPhysFootprintMB {
    task_vm_info_data_t info;
    mach_msg_type_number_t count = TASK_VM_INFO_COUNT;
    kern_return_t ret = task_info(mach_task_self(), TASK_VM_INFO,
                                  (task_info_t)&info, &count);
    if (ret != KERN_SUCCESS) { return -1; }
    return info.phys_footprint / 1024.0 / 1024.0;
}
```

我把它包了个采样器：进页面采一次、退页面采一次、退到后台采一次，超过阈值就地写日志。本地开发把阈值定在 300 MB，很容易在提测前就主动撞线，比等用户反馈体面得多。

## 内存警告只有几百毫秒，别指望它做 cleanup

`didReceiveMemoryWarning` 是很老的接口，但很多人对它的期待超出了它的容量。

```objective-c
- (void)applicationDidReceiveMemoryWarning:(UIApplication *)application {
    [[DSCoreCache sharedCache] removeAllObjects];
    [[NSURLCache sharedURLCache] removeAllCachedResponses];
    [DSImagePipeline cancelAllPendingTasks];
    // 这里只做内存侧的动作，主线程等不起磁盘 IO
}
```

系统的耐心很短，实测几百毫秒内必须返回，否则清理动作本身就会成为被杀的理由。所以这个回调里只干两件事：清空内存缓存、取消进行中的加载任务。要落盘、要重建索引的，丢到异步队列，或者干脆等下次冷启动再做。

页面级也建议实现 `UIViewController` 的 `didReceiveMemoryWarning`，把当前不可见的播放器、大列表的数据源主动降级。`NSCache` 的自动清退发生在这个时机，不用自己再订阅通知。

## 线上数据：MetricKit 补不齐的那一半

iOS 13 之后 MetricKit 是正规入口，`MXMemoryExceptionDiagnostic` 会给事件窗口内的 footprint 峰值、系统给的上限，以及一份调用栈。但要用 realistic 的预期去接它：栈的完整度看机型和系统版本，我这边大约三成事件只有 footprint 数字，栈是空的。

所以自建上报的那一半才是主力。我维护的很朴素：一条内存曲线（每 5 秒一个点，只保留最近 3 分钟）加一个"最近访问页面栈"，退到后台或者下次冷启时上传。真出问题时看到的不是"某个用户闪退了"，而是"从直播页退出后 footprint 涨了 120 MB 且没有回落"。这种线索比一份残缺的堆栈好用太多。

## 图片是绝对大头，先学会算账

一张图解码后占多少内存，公式朴素到不需要工具：像素宽 × 像素高 × 4。RGBA 每通道 1 字节，一个像素 4 字节。

坑在"点"和"像素"不是一回事。1000 × 1000 点的图在 3x 屏上解码是 3000 × 3000 像素，约 36 MB。列表里十个这种 cell 滚一遍，什么缓存策略都救不回来。

组里现在图片相关的需求要先回答三个问题：源图多大、展示区多大、要不要 downsample。三者不一致，就用 ImageIO 按目标尺寸解码（`kCGImageSourceThumbnailMaxPixelSize`），而不是整图解出来再缩小。改完之后首页内存峰值降了大概 40%，这是清单里性价比最高的一项。

## 缓存：NSCache 和字典各管一段

| 场景 | 选择 | 原因 |
| --- | --- | --- |
| 图片内存缓存 | NSCache | 收到内存警告自动清退，线程安全，不用自己加锁 |
| 配置、开关类小对象 | 字典 | 需要确定性命中，体积可控，不该被随机淘汰 |
| 列表数据源 | 字典 + 手动淘汰 | 生命周期跟页面走，页面销毁就该归零 |
| 大对象持久化 | 磁盘（LRU） | 内存只放最近若干条，超出落盘 |

NSCache 不是银弹：它的淘汰时机和数量都不保证精确，`totalCostLimit` 在实测里经常晚一步生效。真正要卡死上限的地方，还是得自己写淘汰逻辑，用字典加计数器。反过来，把一堆可变对象塞进 `NSDictionary` 当缓存又不处理内存警告，是线上最常见的隐形泄漏。

## 本地定位：Memory Graph 怎么点

Xcode 调试区的三个圆环按钮，按下之后左侧是全部存活对象，按类型分组；选中一个对象，右侧会画出它的引用链，箭头从持有者指向被持有者。

几个习惯：

1. 进可疑页面前先拍一张图，退出后再拍一张，对比同一类型的数量差，比单看一张图直观。
2. 打开 Product Scheme 里的 Malloc Stack Logging（Live Allocation），选中对象能看到它的分配堆栈，这一步能把"谁 new 的"直接钉死。
3. 循环引用在图上表现为闭环，两个对象互相指着对方；配合 `weak` 改造后闭环消失，是很好的验收标准。
4. 左侧列表顶部有 Caches 分组，`NSURLCache`、`NSFileManager` 的缓存都在里面，容易捞出意外常驻的东西。

## 一份可以直接打勾的优化清单

| 方向 | 动作 | 验收方式 |
| --- | --- | --- |
| 图片 | 按展示尺寸 downsample 解码；列表 cell 复用前清空 `image` | 峰值 footprint 对比，滚动时不应持续上涨 |
| 图片 | 大图（长图、海报）走磁盘，不进内存缓存 | NSCache 的 memoryCapacity 固定不变 |
| 缓存 | 内存缓存统一走 NSCache，设 cost；页面级数据随页面销毁 | 退页面后对象数归零 |
| 循环引用 | block 内引用 self 一律 weak/strong 成对；delegate 用 weak | Memory Graph 无闭环 |
| Timer | NSTimer 的 target 会被强持有，改用 block 版或 GCD 定时器 | 页面 dealloc 有日志 |
| Timer | 退后台 invalidate，回前台重建 | Instruments 里定时器数量不累积 |
| 生命周期 | 播放器、相机、传感器在 `viewDidDisappear` 释放 | 同类对象数不随进出次数增长 |
| 观测 | 关键页进出打 footprint 采样，退后台上报曲线 | 后台能看到曲线和页面栈 |

清单里 Timer 那两行值得单独说。`NSTimer scheduledTimerWithTimeInterval:target:selector:` 会强引用 target，页面 pop 出去之后 dealloc 不执行，页面上所有东西都跟着活着——这是"没泄漏但一直涨"的典型形态。iOS 10 之后用 block 版本，在里面 weak 一下 self，或者干脆换 `dispatch_source` 定时器。

## 一点总结

内存问题的规律性很强：九成的大头是图片，剩下的是缓存不清和该释放的对象没释放。真正让人难受的是没有现场，而对抗"没有现场"的办法不是更强的调试技巧，是把观测做进线上。

先把 footprint 采样和曲线上传接了，再去做优化。顺序反过来，你永远不知道自己优化的到底是什么。
