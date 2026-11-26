---
title: 鸿蒙 Stage 模型迁移实战：Ability 生命周期与通信的那些坑
date: 2026-11-26
category: 技术博客
tag:
  - 鸿蒙
  - ArkTS
cover: /assets/images/cover3.jpg
---

# 鸿蒙 Stage 模型迁移实战：Ability 生命周期与通信的那些坑

从 FA 模型转到 Stage 模型，官方文档写得体面："推荐迁移"。真迁过一次才知道，坑不在 API 改名，在心智模型换血：AbilitySlice 没了，UIAbility 把"进程"和"窗口"拆开管，跨设备迁移从一个 SDK 函数变成了一堆你要自己设计的数据协议。这篇记录迁移中生命周期和通信两块踩出来的坑。

## 生命周期：一次"换脑子"

FA 时代一个 Page 就是一个 AbilitySlice，onShow/onHide 就是页面显隐，简单粗暴。Stage 模型变成三层：

```typescript
// UIAbility 生命周期 —— 注意：这是"组件实例"级，不是"页面"级
onCreate(want, launchParam)          // 实例创建
onWindowStageCreate(windowStage)     // 窗口创建，loadContent 在这
onForeground() / onBackground()      // 应用级前后台
onWindowStageDestroy()               // 窗口销毁
onDestroy()                          // 实例销毁
```

**坑一：把初始化逻辑放错层。** `onCreate` 时窗口还没有，`windowStage.getMainWindow()` 拿到的是空。曾在 `onCreate` 里做窗口级主题设置，真机偶现首帧闪白——FA 习惯用 slice 创建当"首帧前"，Stage 的首帧时机在 `onWindowStageCreate` 的 `loadContent` 回调里。

**坑二：onBackground 不等于马上能杀。** 应用退后台系统给一小段挂起时间，想"退后台就保存草稿"的，逻辑必须同步或限步完成——挂起后还在等异步 Promise 的，数据就这么丢了。正确姿势：`onBackground` 同步触发持久化，别 `await` 网络。

**坑三：一个 Ability 多个窗口（折叠屏/悬停/平板分屏）。** UIAbility 实例数和窗口数不是一比一，`onWindowStageCreate` 可能被调多次。全局单例里若缓存了 windowStage 或 UIContext，后创建的窗口会把先前的覆盖掉——按窗口维度存 Map，key 用 `windowStage.getMainWindowSync().getWindowName()`。

## 通信：Want 传值的三条隐形红线

Ability 间通信用 Want，看似就是字典，实际有红线：

```typescript
// 发起
const want: Want = {
  bundleName: 'com.daisz.app',
  abilityName: 'OrderDetailAbility',
  parameters: {
    orderId: '20261126001',
    from: 'list'
  }
};
startAbility(want);

// 返回结果
// onResult / wantConstant.ParamsKey 约定好，别自由发挥
```

**红线一：parameters 只能放可序列化基础类型。** 传了带函数的对象、类实例，轻则丢字段重则序列化失败。复杂数据走"引用"：数据放 AppStorage/全局单例，Want 只传 id。

**红线二：跨设备迁移（continuous task transfer）时 Want 里的一切都会被序列化传过去。** 顺手塞了个 2MB 的对象，跨设备时才发现"迁移失败"——文档里一句"parameters 需支持跨设备序列化"，工程上等于"给 Want 瘦身专项"。

**红线三：结果码只有三态，别指望异常透传。** 目标 Ability 内部抛的错，调用方只会收到通用失败。业务错误码要显式放 `terminateSelfWithResult` 的 parameters 里带回，这是一次改造里补得最多的代码——FA 时代同进程直接调对象方法的"顺手"，在 Stage 时代全要换成显式协议。

## EventHub 与全局通信的度

进程内解耦事件用 `abilityStageContext.eventHub`，API 就三个（on/off/emit），但两个老毛病又会犯：

1. **忘了 off。** listener 持有闭包引用，Ability 销毁了监听还在——和 iOS 的 NotificationCenter 一个病。规则：谁 on 谁 off，成对出现在生命周期对称点（onForeground/onBackground 或组件 aboutToAppear/aboutToDisappear）。
2. **事件满天飞变成黑盒。** eventHub 是字符串协议，三个月后没人知道"orderChanged"谁在发谁在听。解法是把事件名和 payload 类型收进一个常量+类型文件，禁止裸字符串，lint 可查。

## 数据共享：AppStorage 不是银弹

`AppStorage`/`LocalStorage` 解决跨 Ability 状态共享，但它的同步是"值语义"——存进去的对象被序列化，引用关系没了；改深层属性不会触发刷新（像不像 ArkTS 状态装饰器的一层观察？是同一套设计哲学）。实践口径：**AppStorage 只放"小、平、低频变更"的全局状态**（主题、登录态、语言），业务数据该查库查库，别拿它当总线。

## 迁移验收清单

| 项 | 验证方式 |
|---|---|
| 折叠屏双窗口 | 悬停态开两个窗口，各自导航互不串 |
| 后台保存 | 编辑页退后台，杀进程重进数据完整 |
| 跨设备接续 | 手机发起迁移，平板恢复页面与数据 |
| Want 体积 | 大参数专项扫描，超 50KB 改引用传递 |
| eventHub 泄漏 | 反复进出页面 50 次，监听器数量不涨 |

Stage 模型的迁移，表面上是把类名和生命周期方法换一遍，实质上是被迫把 FA 时代"同进程随便调"的隐性耦合显式化——Want 协议、结果码、存储分层，全是把原来糊在一起的东西拆开。拆的过程疼，但拆开之后，多设备、窗口化这些新能力才真的接得住。这笔账，提前算比事后算划算。
