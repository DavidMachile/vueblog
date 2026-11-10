---
title: iOS 网络层的坑：超时、重试与幂等那些事
date: 2026-11-10
category: 技术博客
tag:
  - iOS
  - 网络
cover: /assets/images/cover3.jpg
---

# iOS 网络层的坑：超时、重试与幂等那些事

网络层是 App 里最容易被"包一层就完事"的模块。项目里套 AFNetworking 或 URLSession 跑通之后，几乎没人再细想超时怎么配的、失败了要不要重试、重试几次才安全。直到线上出现"用户重复下单""弱网转圈三十秒""地铁里一进一出 App 直接炸"，才回头补课。这篇把网络层最容易埋雷的几件事一次说清。

## 超时有三个，很多人只配了一个

URLSession 的超时是三层配置，各管一段：

```objective-c
NSURLSessionConfiguration *cfg = [NSURLSessionConfiguration defaultSessionConfiguration];
cfg.timeoutIntervalForRequest = 15;   // 两次数据包之间的最大间隔（不是总时长！）
cfg.timeoutIntervalForResource = 60;  // 整个资源（含重定向、重试）的上限
// 第三层是 TCP 连接建立超时，系统固定约 30 秒，不可配
```

最常见的误解是把 `timeoutIntervalForRequest` 当"请求总超时"。它实际是**空闲超时**——只要服务器每隔 14 秒吐一个字节，一个"卡死"的请求可以永远不超时。业务想表达"15 秒内必须拿到最终结果"，就得自己再加一层总闸：

```objective-c
// 业务层总超时兜底：信号量/dispatch_after 都不如直接取消 task
__block NSURLSessionTask *task = [session dataTaskWithRequest:req completionHandler:handler];
[task resume];
dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 15 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
    if (task.state == NSURLSessionTaskStateRunning) {
        [task cancel]; // 触发 NSURLErrorCancelled，业务按超时处理
    }
});
```

一个细节：`cancel` 的回调错误码是 `kCFURLErrorCancelled(-999)`，它和"主动取消"共用同一个码。业务层要区分"用户左滑取消"和"超时兜底取消"，否则埋点数据会骗人——我们就是这么把超时率统计成接近零的。解法很简单：自己发起的取消在 task 上挂个标记位再 cancel。

## 重试不是无脑加次数

弱网下自动重试确实能救回一部分请求，但先把三个问题想清楚再写代码。

**哪些错误可以重试？** 只有幂等且属于"瞬态"的错误：DNS 解析失败（-1003）、连接超时（-1001）、服务器断连（-1005）、5xx。`400/401/403` 这些语义错误重试一万次也是错，证书校验失败（-1202）更不该重试——那可能中间人在场。

**哪些请求可以重试？** 只有幂等请求。GET 天然幂等；POST 建单不幂等，重试一次可能就是两笔订单。服务端不配合做幂等键，客户端的重试就是事故制造机。

```plaintext
┌─ 请求失败 ─┬─ 错误码在瞬态白名单？ ── 否 ─→ 直接失败
            └─ 是 ─→ 请求幂等？ ── 否 ─→ 直接失败（或转人工确认）
                       └─ 是 ─→ 已重试次数 < 上限？ ── 否 ─→ 失败
                                  └─ 是 ─→ 指数退避 + 抖动后重试
```

退避策略用 `base * 2^n + random(0, base)`，随机抖动是关键——没有它，服务器重启恢复的瞬间，所有客户端会踩着同一个节拍冲锋（惊群），刚起来又被打倒。上限次数宁小勿大，移动网络下 3 次足够，再多只是延长用户等待。

## 一个隐蔽杀手：session 的持有方式

老工程里常见的写法是每个请求现造 session：

```objective-c
// ❌ 每个请求新建 session
NSURLSession *session = [NSURLSession sessionWithConfiguration:cfg];
[[session dataTaskWithRequest:req completionHandler:handler] resume];
// 没人 release session —— 它持有 delegate（默认就是它自己创建的队列）
```

`sessionWithConfiguration:` 不配对调用 `finishTasksAndInvalidate` 就会泄漏，泄漏的 session 还占着一条连接池。更隐蔽的是：每个新 session 冷启动 TLS 握手，没有连接复用，弱网下每个请求多付一个 RTT。正确姿势是**全局共享一个 session**，只在退出时 invalidate。我们审计线上包时发现网络层同时活着 40 多个 session 实例，修成单例后，弱网下首屏请求总耗时降了约 200ms——什么都没优化，只是把连接复用还回来了。

## 前后台切换的取消风暴

App 进后台大约 30 秒后 socket 被系统掐断，所有在途请求报 `kCFURLErrorNetworkConnectionLost(-1005)`。如果网络层"逢 -1005 就重试"，就会在后台被唤醒的瞬间攒出一波重试风暴，耗电且抢资源。合理策略：`UIApplicationDidEnterBackgroundNotification` 时把非上传类请求全部主动取消，回前台后由业务层按界面可见性重新发起——**用户看不见的页面，不值得它发起网络请求**。这条规则和"页面销毁时取消请求"（vcremove 时 cancel 该页面所有 task）配合，能把无效请求砍掉三成。

## 收尾

网络层的可靠性不是靠"多试几次"堆出来的，靠的是对每个错误码、每个超时参数、每个生命周期的处置都想清楚。给自己网络层做一次体检，就问四个问题：三层超时是不是各就各位？重试白名单里有没有混进非幂等请求？session 是不是全局唯一？进后台会不会刮起取消风暴？四个都答得上来，网络层基本就不会在深夜给你打电话了。
