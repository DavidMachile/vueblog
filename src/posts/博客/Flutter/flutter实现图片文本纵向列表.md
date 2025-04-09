# flutter 实现图片文本纵向列表布局

```
import 'dart\:js\_util';

import 'package\:flutter/material.dart';

void main() => runApp(myApp());

class myApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
    title: 'flutter 学习',
    home: Scaffold(
    appBar: new AppBar(
    title: new Text('list view widget'),
),
body: new ListView(
    children: \[
        new Image.network('<https://newimg.jspang.com/Vue3_logo.jpg>'),
        new Image.network('<https://newimg.jspang.com/web111111.jpg>'),
    new Image.network('<https://blogimages.jspang.com/vue_koa2_ad.jpg>'),
    new Image.network('<https://newimg.jspang.com/vscode_blog_logo.jpg>'),
    ],
    ),
),
);
}
}
```
