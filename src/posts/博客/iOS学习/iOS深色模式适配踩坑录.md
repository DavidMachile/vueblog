---
title: iOS 深色模式适配踩坑录：那些颜色反了的地方
date: 2026-11-15
category: 技术博客
tag:
  - iOS
  - UI适配
cover: /assets/images/cover2.jpg
---

# iOS 深色模式适配踩坑录：那些颜色反了的地方

深色模式上线一周年，复盘一下这条路。当年觉得"系统自动反色，白捡的功能"，实际做完花了两个迭代，一半的坑不在颜色本身，在那些"系统够不着"的角落。

## 地基：Color Assets 不是可选项

硬编码颜色在深色模式下就是灾难。全部收敛到 Asset Catalog 的 Color Set，一个颜色两个外观，代码里只用语义名：

```objective-c
// ❌ 深色模式下白底白字就是这么来的
label.textColor = [UIColor whiteColor];

// ✅ 语义化命名：关心"是什么"，不是"什么色值"
label.textColor = [UIColor labelColor];                    // 系统语义色
view.backgroundColor = [UIColor colorWithName:@"bg_card"]; // 自建语义色
```

命名纪律比色值重要：用 `text_primary / text_secondary / bg_card / line_divider` 这类语义名，禁用 `gray33 / blue_light`。前者深色模式只改资产，后者会诱导开发者继续硬编码。系统语义色（`labelColor`、`secondaryLabelColor`、`systemBackground`）能覆盖 70% 场景，优先用它们——它们是苹果设计师调过的，对比度达标。

## 系统够不着的角落一：WebView 和 H5

原生容器变黑了，内嵌 H5 还是白底，中间一条刺眼的分界线。H5 侧要做三件事：meta 声明、CSS 媒体查询、与 JSBridge 联动的主题下发：

```html
<meta name="color-scheme" content="light dark">
<style>
  :root { --bg: #fff; --text: #1a1a1a; }
  @media (prefers-color-scheme: dark) {
    :root { --bg: #111; --text: #eaeaea; }
  }
</style>
```

坑在**时机**：原生切换深浅色时，WebView 的媒体查询不一定即时重绘，尤其是前端用 JS 缓存了主题色的页面。解法是原生在 `traitCollectionDidChange:` 里通过 JSBridge 主动广播一次主题变更，前端监听后强制刷 CSS 变量。另外 WKWebView 的滚动条、键盘助理 bar 颜色，需要单独给 `scrollView.indicatorStyle` 和输入 accessoryView 配置。

## 系统够不着的角落二：图片与截图

两类图系统反不了色：**位图资源**（截图、运营图、用户头像背景）和**历史遗留截图缓存**。

位图策略按类型分：

| 图片类型 | 深色适配方案 |
|---|---|
| 图标类单色图 | Asset 开 "Any/Dark" 双外观，或用 template 渲染 |
| 产品实拍/插画 | 加自适应描边或背景垫层，两套图成本太高 |
| 运营 Banner | 要求设计出双版本，资源 key 带主题后缀 |
| 聊天/截图缓存 | 存储时不转译，渲染时按当前 trait 决定是否垫白底 |

最狠的坑来自相册选图：用户深色模式下截的图，图片本身是系统自动反色渲染的"假深色"，存进相册后再取出，颜色语义会二次反转。凡是"对屏幕内容再加工"的功能，都要在存前把图片"坐实"成当前渲染结果（`drawViewHierarchyInRect:` 重绘一遍再存）。

## 系统够不着的角落三：traitCollectionDidChange 的时机

监听主题切换不要只信 `traitCollectionDidChange:`——iOS 17 之后它多了 `previousTraitCollection:` 参数，且冷启动时不一定回调。正确姿势：

```objective-c
// 视图可见期间实时读 traitCollection，别缓存 trait
- (void)refreshTheme {
    BOOL dark = self.traitCollection.userInterfaceStyle == UIUserInterfaceStyleDark;
    [self.webView jsBroadcastTheme:dark];   // 同步 H5
    [self.collectionView reloadData];       // 重配 cell（图片垫层逻辑在 cellForRow）
}

- (void)traitCollectionDidChange:(UITraitCollection *)prev {
    [super traitCollectionDidChange:prev];
    if (prev.userInterfaceStyle != self.traitCollection.userInterfaceStyle) {
        [self refreshTheme];
    }
}
```

两个反模式：把 `userInterfaceStyle` 读一次存成全局变量（分屏场景下不同窗口可以不同主题）；用通知中心全局广播刷 UI（cell 复用后通知注册全乱，老老实实让 `cellForItemAtIndexPath` 按当前 trait 配置）。

## 测试与验收清单

深色模式的 bug 全靠肉眼过，把走查清单固化下来：冷启动直接深色进每个页面；停留中切换系统主题看当前页+返回栈里的上一页；H5 页面来回；相册选图发聊天；推送横幅文案对比度。最后一项用 Xcode Accessibility Inspector 跑 contrast 检查，正文对比度低于 4.5:1 的直接打回——深色模式最大的隐患不是不好看，是"黑底深灰字"这种对比度陷阱。

一句话总结：系统帮你反的是语义色的转义，帮不了你的是一体化体验。深色模式的完成度，取决于你把"主题"当成一个状态来管理，还是当成一次性的颜色替换。
