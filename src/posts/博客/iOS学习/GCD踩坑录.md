---
title: GCD 踩坑录：那些崩溃栈里最常见的几种死法
date: 2026-11-11
category: 技术博客
tag:
  - iOS
  - 并发
cover: /assets/images/cover2.jpg
---

# GCD 踩坑录：那些崩溃栈里最常见的几种死法

GCD 是 iOS 工程师最熟的陌生人——日常就是 `dispatch_async` 几下，真出问题时才发现它对"顺手"的容忍度是零。这篇整理我和同事们在崩溃群里见过的 GCD 死法，每一种都有真实代价。

## 死法一：主队列 + sync = 必死

```objective-c
// 主线程执行到这行，立刻 deadlock
dispatch_sync(dispatch_get_main_queue(), ^{
    NSLog(@"永远到不了这里");
});
```

原理：`dispatch_sync` 会等待 block 执行完，而主队列的 block 要等当前执行流（也就是这行 sync 本身）让位。互相等，死锁。这个坑在 iOS 历史上有过反转：早期运行时遇到这种情况直接抛 `EXC_BAD_INSTRUCTION` 崩给你看（反而友好），后来改成静默死锁，再后来 Apple 文档明确"从主线程 sync 到主队列是非法的，行为未定义"。

衍生坑：从任意队列 sync 到"当前正在执行的队列"，同样死锁。所以封装"读屏障"工具类时，`dispatch_barrier_sync` 必须确认调用方不来自那个并发队列——不然复现方式是玄学，有时崩有时不崩（取决于 block 是否被内联执行）。

## 死法二：dispatch_group 的 enter/leave 不配对

```objective-c
dispatch_group_t group = dispatch_group_create();

for (Request *req in requests) {
    dispatch_group_enter(group);
    [req startWithCompletion:^(id resp) {
        // 坑1: completion 里如果提前 return 漏了 leave，notify 永不触发
        // 坑2: completion 被回调两次，崩溃: "Unbalanced call to dispatch_group_leave"
        [self handleResp:resp];
        dispatch_group_leave(group);
    }];
}

dispatch_group_notify(group, dispatch_get_main_queue(), ^{
    [self reloadUI]; // 全部完成后才刷新
});
```

两个真实事故：一个网络库在某些错误分支提前 return，漏了 leave，页面永远转圈；另一个是超时和正常回调各触发一次 completion，leave 多调一次，直接崩在 `dispatch_group_leave`。防呆写法是把配对逻辑收进工具函数，业务只提交任务：

```objective-c
// 用 dispatch_group_async 语义自己包一层，保证 enter/leave 成对
static inline void GroupTask(dispatch_group_t g, dispatch_queue_t q, void(^block)(void)) {
    dispatch_group_enter(g);
    dispatch_async(q, ^{
        block();
        dispatch_group_leave(g);
    });
}
```

另外记住：group 被 block 捕获会自动 retain，notify 之后如果没有其他引用，group 释放。iOS 13 起可以用 `dispatch_group_wait` 的替代方案——信号量组 `DispatchGroup.wait()`（Swift 侧），但 OC 里 enter/leave 纪律仍然是唯一护身符。

## 死法三：barrier 用错队列类型

读写锁的标准姿势：并发队列 + `dispatch_barrier_async` 写、`dispatch_async` 读。但有个前提常被忽略——**barrier 只对自建的私有并发队列生效**。如果对全局并发队列（`dispatch_get_global_queue` 拿到的那种）使用 barrier，系统直接把它降级成普通 `dispatch_async`，写操作不再独占，数据竞争照旧。

```objective-c
// ❌ 全局并发队列，barrier 无效
dispatch_barrier_async(dispatch_get_global_queue(0, 0), ^{ self.dict[key] = obj; });

// ✅ 自己创建的私有并发队列
dispatch_queue_t q = dispatch_queue_create("com.daisz.cache", DISPATCH_QUEUE_CONCURRENT);
dispatch_barrier_async(q, ^{ [self.dict setObject:obj forKey:key]; });
```

## 死法四：after 不是定时器

```objective-c
// 以为是"每2秒执行一次"，实际只执行一次
dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 2 * NSEC_PER_SEC), q, block);
```

`dispatch_after` 只延迟一次。想做心跳，要么在 block 末尾再 after 一次（记得判断是否已取消），要么用 `dispatch_source` 定时器——后者记得必须 `resume`，忘了 resume 的 timer 是最难查的 bug 之一：不崩、不报错、就是不执行。

## 死法五：回调线程想当然

网络库回调在主线程？图片解码库回调在 global queue？SDK 文档没写的，一律自己实测。最狠的暗坑是"大多数时候在主线程"的回调，测试环境一切正常，线上低概率刷 UI 崩溃。防御方式是在 UI 更新入口加一道断言：

```objective-c
#define ASSERT_MAIN() NSAssert([NSThread isMainThread], @"UI 更新必须在主线程: %s", __func__)
```

开发期跑一跑，所有"想当然"的线程问题都会自己浮出来，比读源码快十倍。

## 总结成一张表

| 场景 | 正确姿势 |
|---|---|
| 主线程切主线程 | 直接执行或 `dispatch_async`，绝不 sync |
| 多任务汇聚 | enter/leave 收进工具层，completion 幂等化 |
| 读写锁 | 私有并发队列 + barrier，全局队列不行 |
| 周期任务 | dispatch_source timer，创建后 resume |
| 跨线程 UI | 入口处主线程断言，别信文档信断言 |

GCD 的 API 就那几个，坑却全是"语义没吃透 + 想当然"。判断一个 iOS 同学并发功力如何，问一句 `dispatch_sync` 到当前队列会怎样，基本就够了。
