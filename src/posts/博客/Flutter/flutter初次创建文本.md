---
title: flutter初次创建文本
date: 2024-10-25
category: 技术博客
tag:
  - Flutter
  - 教程
cover: /assets/images/cover3.jpg
---

# flutter 创建文本

```
import 'package:flutter/material.dart';

void main() => runApp(myApp());

class myApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'text widget',
      home: Scaffold(
        body: Center(
          child: Text(
            '能开发网页、能开发鸿蒙系统和IOS系统。',
            textAlign: TextAlign.right,
            // overflow: Stack(clipBehavior),
            style: TextStyle(
              fontSize: 16,
              color: Color.fromARGB(255, 222, 125, 125),
              decoration: TextDecoration.underline,
              decorationStyle: TextDecorationStyle.solid,
            ),
          ),
        ),
      ),
    );
  }
}

```
