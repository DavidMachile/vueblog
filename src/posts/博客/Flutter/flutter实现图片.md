# flutter 实现图片

```
import 'dart:js_util';

import 'package:flutter/material.dart';

void main() => runApp(myApp());

class myApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'text widget',
        home: Scaffold(
          body: Center(
            child: Container(
              child: new Image.network(
                'https://blogimages.jspang.com/blogtouxiang1.jpg',
                repeat: ImageRepeat.repeatX,
              ),
              width: 300,
              height: 200,
              color: Colors.lightBlue,
            ),
          ),
        ));
  }
}

```
