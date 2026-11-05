---
title: iOS 冷启动优化：把启动时间从 2.8 秒砍到 1.4 秒的全过程
date: 2026-11-05
category: 技术博客
tag:
  - iOS
  - 性能
cover: /assets/images/cover3.jpg
---

# iOS 冷启动优化：把启动时间从 2.8 秒砍到 1.4 秒的全过程

老工程维护久了，启动越来越慢是常态。之前给主 App 做性能专项，冷启动从 2.8 秒优化到 1.4 秒，过程比结果有意思，记下来。

## 先搞清楚时间花在哪

冷启动的耗时不是玄学，它有一条清晰的分界线——`main()` 函数。苹果把 `main()` 之前的阶段叫 pre-main，之后的叫 post-main，两段的问题完全是两回事。

```plaintext
点击图标
  ├─ pre-main
  │   ├─ exec 加载可执行文件
  │   ├─ dyld 加载动态库、递归依赖
  │   ├─ rebase / binding（修复指针，ASLR 越严重越多）
  │   └─ runtime initialize（+load、静态初始化器、C++ 全局对象）
  └─ post-main
      ├─ UIApplicationMain → didFinishLaunching
      ├─ 根控制器构建、首屏数据拉取
      └─ 第一帧渲染上屏
```

度量方式：pre-main 用 Instruments 的 App Launch 模板，看 Stage Hardware Time 和 Stage System Time；post-main 在 `main()` 第一行和首屏 `viewDidAppear` 各打一个时间戳，线上大盘用 metric-kit 的 `LPSTapToFirstDraw` 上报 P50/P90。别只在本机测，低端机上瓶颈会放大两倍以上。

## pre-main：三刀

**第一刀砍 +load。** 老工程里有 40 多个 `+load` 方法——路由注册、埋点 SDK 自检、分类补丁，全靠 `+load` 自动触发。`+load` 是串行的，在 dyld 阶段逐个调用，还会拖住 runtime 初始化。改造成两级方案：能延后的挪到 `+initialize`（首次用到才触发），必须启动注册的改成集中式二段注册，一个 `+load` 只做一件事——把自己登记进数组：

```objective-c
// 改造前：每个模块各自一个 +load
+ (void)load {
    [Router registerURL:@"order/detail" handler:^(NSDictionary *p){ /*...*/ }];
}

// 改造后：模块只登记元数据，真正注册在 didFinishLaunching 后异步批量做
#define AUTO_REGISTER(sym) \
__attribute__((used, section("__DATA,daisz_reg"))) \
static const char *sym = __FILE__

AUTO_REGISTER(_order_module) = "order/detail,OrderHandler";
```

链接器会把 `__DATA,daisz_reg` 段里的字符串原样带进二进制，启动时一次 `getsectiondata` 全部读出，40 多次 `+load` 合并成一次段扫描。pre-main 从 1.1s 降到 0.6s。

**第二刀砍动态库。** 工程挂了 11 个 dynamic framework，每个都要 dyld 递归加载加 rebase。把其中 8 个纯代码的私有库改成静态库（podspec 里 `static_framework = true`），只保留 3 个真正需要动态的。这一步省了约 300ms，副作用是产物合并链接、编译变慢，需要跟团队交代清楚。

**第三刀是二进制重排。** 启动阶段实际执行的函数在二进制里是散落的，每个未命中的页都会触发一次 page fault 加解压。用 libAnalyzer（clang 的 instrumentation 插件）录制启动路径的函数序列，生成 order file 交给链接器按调用顺序排列。原理是把启动要碰的页提前拉齐，减少缺页次数。这刀收益不算大（百毫秒级，随版本衰减，order file 要定期重录），但对冷启动敏感的场景值得做。

## post-main：两刀

**首页渲染与网络解耦。** `didFinishLaunching` 里同步拉首页接口的逻辑改成先展示缓存渲染，网络回来后 diff 刷新。首屏时间立刻从"网络往返"里解放出来——这一刀收益最大，因为 post-main 的大头经常是"等接口回来才让首屏可见"。

**启动任务清单化。** 把所有启动后的初始化列成表格逐项审查，只留三档：

| 档位 | 时机 | 例子 | 原则 |
|---|---|---|---|
| 首屏必需 | didFinishLaunching 同步 | 路由表、崩溃上报 | 越少越好 |
| 首帧后 | firstFrame 回调异步 | 推送注册、AB 配置 | 可感知延迟容忍 |
| 闲时 | 空闲队列 / 首次用到 | 分享 SDK、升级检查 | 按需加载 |

判断标准就一句话：这个任务不做，首屏会不会错？不会，就挪走。

## 收尾的几点体会

启动优化是典型的"测量驱动"工作，没有 Instruments 和线上分位数上报，所有优化都是瞎猜。顺序也基本是固定的：先任务清单化（收益最大、风险最小），再砍 `+load` 和动态库，最后才轮到二进制重排这种精细活。

另外，优化后的成果很容易被回潮吃掉——新人加个 SDK 顺手写个 `+load`，三个月的努力就没了。我们把"新增 `+load` 必须走审批"写进了 CI 检查（一条 grep 正则的事），比任何文档都管用。
