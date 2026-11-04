---
title: vue项目导出Xcode项目
date: 2024-03-15
category: 技术博客
tag:
  - Vue
  - 混合开发
cover: /assets/images/cover3.jpg
---

# vue 导出导出 xcode 项目

## 1.安装 node

```
brew install node
```

## 2.查看版本

```
node -v
npm -v

```

## 3

```
npm run build
```

## 4.安装 cordova

```
npm install -g cordova

cordova -v
```

## 5

```
cordova create  Project-CordovaDemo
```

## 6

```
cd Project-CordovaDemo
1.  cordova build ios
2.  cordova platform add ios
3.  npm install -g ios-deploy
4.  cordova build ios
```
