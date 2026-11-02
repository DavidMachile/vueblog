---
title: pod出现CDN错误
date: 2020-01-16
category: 技术博客
---

最近在新项目添加 cocopods 时 ，pod update 时出现了 CDN: trunk Repo update failed 错误。

![](http://q3gnsl2e8.bkt.clouddn.com/picGO/20200116111503.png)

我首先想到的是，可能是 pod 版本太低了。所以查看了下 pod 版本：

```bash
$ pod --version
1.8.3
```

1.8.3 已是当时的最新版本，那就不是 pod 版本太低导致的。

然后查看了 Podfile 文件之后发现是数据源没添加上，所以在 Podfile 的最上面添加了：

```ruby
source 'https://github.com/CocoaPods/Specs.git'
```

添加之后保存 Podfile 文件，然后终端重新运行 `pod install` 命令行即可。
