# flutter 横向列表

```
    import 'dart:js_util';

    import 'package:flutter/material.dart';

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
              body: Center(
                child: Container(
                  height: 200,
                  child: mylist(),
                ),
              ),
            ));
      }
    }

    class mylist extends StatelessWidget {
      @override
      Widget build(BuildContext context) {
        return ListView(
          scrollDirection: Axis.horizontal,
          children: [
            new Container(
              width: 200,
              color: Colors.black87,
            ),
            new Container(
              width: 200,
              color: Colors.lightGreen,
            ),
            new Container(
              width: 200,
              color: Colors.cyan,
            ),
            new Container(
              width: 200,
              color: Colors.deepPurple,
            )
          ],
        );
      }
    }

```
