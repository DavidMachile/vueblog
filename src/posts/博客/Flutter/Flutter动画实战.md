---
title: Flutter 动画实战：Implicit、Explicit 与掉帧自救
date: 2026-11-22
category: 技术博客
tag:
  - Flutter
  - 动画
cover: /assets/images/cover3.jpg
---

# Flutter 动画实战：Implicit、Explicit 与掉帧自救

Flutter 的动画体系文档很全，但真做业务时的问题从来不是"会不会写 AnimatedContainer"，而是三个更工程的事：什么时候该用哪一档动画、动画和列表滚动抢帧怎么办、动画引起的重建范围怎么控制。这篇按这三问整理。

## 三档动画，按需升舱

Flutter 动画的演进线是 Implicit → Explicit → 自定义 AnimationController 编排，本质是"控制权换复杂度"。

**第一档：隐式动画。** 属性变了自动补间，适合"值变了要动一下"的场景：

```dart
// 宽高、颜色、圆角变化自动过渡，零控制器
AnimatedContainer(
  duration: const Duration(milliseconds: 220),
  curve: Curves.easeOutCubic,
  width: expanded ? 240 : 96,
  decoration: BoxDecoration(
    color: expanded ? Colors.blue : Colors.grey,
    borderRadius: BorderRadius.circular(expanded ? 16 : 8),
  ),
)
```

**第二档：显式动画。** 需要循环、反向、暂停、序列时，AnimationController 出场：

```dart
class _PulseState extends State<Pulse> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl = AnimationController(
    vsync: this, duration: const Duration(seconds: 1))
    ..repeat(reverse: true);

  @override
  Widget build(BuildContext context) {
    return ScaleTransition(
      scale: Tween<double>(begin: 1.0, end: 1.15).animate(
        CurvedAnimation(parent: _ctrl, curve: Curves.easeInOut)),
      child: const RedDot(),
    );
  }

  @override
  void dispose() {   // 控制器必须释放，忘了就是页面销毁后的"越权 setState"
    _ctrl.dispose();
    super.dispose();
  }
}
```

**第三档：编排。** 多控制器联动用 `AnimationController.forward` 链式监听或 `Future.wait`，入场序列建议直接上 `flutter_animate` 这类声明式库，手写 `addPostFrameCallback` 串动画是可维护性地雷。

升级判断就一句：**隐式动画表达"状态差异"，显式动画表达"过程本身"。** 转圈 loading、轮播、呼吸灯是过程，其余多半是状态差异，别一上来就 controller。

## 掉帧自救：动画的账要算在渲染上

Flutter 每帧两道工序：UI 线程跑 build/layout/paint（Dart 代码），Raster 线程把图层光栅化上屏。动画掉帧，九成是下面四种病：

**病一：动画期间整棵子树 rebuild。** AnimatedBuilder 的 child 参数是防重建的关键——把不参与动画的部分挪出去：

```dart
// ❌ 每帧重建 Text（文本还参与了动画值的字符串化）
AnimatedBuilder(
  animation: _ctrl,
  builder: (context, _) => Column(children: [
    Opacity(opacity: _ctrl.value, child: const HeavyHeader()),
    Text('${_ctrl.value}'), // HeavyHeader 每帧白建
  ]),
)

// ✅ 静态子树交给 child 参数，每帧只走动画路径
AnimatedBuilder(
  animation: _ctrl,
  child: const HeavyHeader(),
  builder: (context, child) => Column(children: [
    Opacity(opacity: _ctrl.value, child: child),
  ]),
)
```

**病二：每帧触发 saveLayer。** `Opacity`（非 0/1 值）、ShaderMask、带 blur 的 ImageFiltered 都会开离屏缓冲区，列表里每行一个 Opacity 动画，Raster 线程直接爆炸。解法：透明度动画尽量收敛到容器级；必须逐行时用 `FadeTransition` + 固定 alpha 的 CustomPainter 或干脆换设计（淡入用尺寸+位移替代）。

**病三：大阴影和圆角叠加。** `boxShadow` + `borderRadius` 在每帧尺寸变化时反复重算离屏路径。长列表里的卡片动画，阴影用切图假阴影（一张带阴影的九宫格 PNG）是行业常规操作，不丢人。

**病四：动画与列表滚动同时跑。** 快速滑动时启动行内动画 = 每帧给滚动加私活。给列表动画加一个"仅静止时播"的门槛：监听 scrollEnd 再起播，滚动中一律显示静态终态。

## 曲线和时长是体验的一半

技术账算完，还得算人因账。工程团队常见的动画病灶不是卡，是"怪"：

| 参数 | 建议值 | 依据 |
|---|---|---|
| 微交互（按压反馈/开关） | 100~150ms | 低于 100ms 感知不到过渡 |
| 元素位移/尺寸（面板展开） | 200~300ms | Material 规范的运动时长区间 |
| 大面积转场 | 300~400ms | 再大就显得迟钝 |
| 曲线默认选择 | `easeOutCubic` / `easeOutQuart` | 起步快收尾缓，"响应快"的错觉 |
| 循环动画（呼吸/骨架屏） | ≥1s + `reverse` | 短循环显得焦虑 |

一个自查技巧：录一段 120fps 慢动作回放自己 App 的动画，再录主流大厂的同样场景逐帧对比——"哪里怪"在逐帧画面对比下无所遁形，比读十篇设计规范有用。

## 收尾

Flutter 动画的性能模型其实比原生友好：声明式 UI 把"哪些像素在动"说得清清楚楚，DevTools 的 Performance Overlay 直接把 UI/Raster 两条线摆你面前。所以它的动画工程心法只有一句话——**让动的部分尽量小，让不动的部分坚决不动**。child 参数、RepaintBoundary、假阴影、静止起播，全是这句话的变体。动画的最高境界不是炫，是用户觉得"本来就该这样动"。
