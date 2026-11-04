---
title: flutter实现tabbar
date: 2024-10-29
category: 技术博客
tag:
  - Flutter
  - 教程
cover: /assets/images/cover3.jpg
---

# flutter AppBar 设置

## 1.appBar 官方 api 声明

```
    AppBar({
        Key? key,
        this.leading,
        this.automaticallyImplyLeading = true,
        this.title,
        this.actions,
        this.flexibleSpace,
        this.bottom,
        this.elevation,
        this.shadowColor,
        this.shape,
        this.backgroundColor,
        this.foregroundColor,
        this.brightness,
        this.iconTheme,
        this.actionsIconTheme,
        this.textTheme,
        this.primary = true,
        this.centerTitle,
        this.excludeHeaderSemantics = false,
        this.titleSpacing,
        this.toolbarOpacity = 1.0,
        this.bottomOpacity = 1.0,
        this.toolbarHeight,
        this.leadingWidth,
        this.backwardsCompatibility,
        this.toolbarTextStyle,
        this.titleTextStyle,
        this.systemOverlayStyle,
      })
```

每个属性的作用，建议自写 demo 尝试，这里只做常用的属性测试。

## 2.设置标题

```
    appBar: new AppBar(
                title: Text('标题'),
                textTheme: TextTheme(
                    title: TextStyle(
                  color: Colors.black,
                  fontSize: 20,
                )),
                brightness: Brightness.light,
                backgroundColor: Colors.white,
              ),
```
