---
title: Mybatis连接数据库
date: 2024-11-15
category: 技术博客
tag:
  - Java
  - Mybatis
cover: /assets/images/cover2.jpg
---

# Mybatis连接数据库

## 大致思路
```mermaid
graph LR
    A[1.引入pom依赖] --> B[2.Mybatis配置文件]
    B --> C[3.编写映射文件]
    C --> D[4.得到SQLSession执行语句]
    D --> E[5.关闭SQLSession]
```

- 对数据库进行配置，连接数据库。（这块只需要写一次就好）
- 操作数据库，就需要有映射文件(可以是xml映射文件，也可以是注解方式)
- 然后操作SQLSession 去执行命令（这块后续可以把SQLSession直接屏蔽掉）

综合来说，Mybatis实际上就是写映射文件/注解 去告诉程序怎么操作，而映射文件/注解 其实就是写SQL。

## 步骤

