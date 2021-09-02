---
title: VScode中Java出现"none-project"错误(无法识别Java-Maven项目)
date: 2020-10-16 22:24:25
categories:
  - Java
tags:
  - Java
  - VScode
  - Maven
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/xiSTXMhqsgzD7UP.jpg
top_img:
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-09-02 15:30:55
 * @FilePath: \Blog-private\source\_posts\Java\VScode_project_errors.md
-->

- [问题](#问题)
- [解决](#解决)

## 问题

- 在打开 VScode 后 Java 虚拟机已经启动,但是并没有识别工作区里面 Maven 的项目
- 所以 Java 只能提供语法上的错误检查,无法基于项目提供开发环境(包括编译)
- 总之就是--->`报错(none-project)`,而且大部分功能无法使用

## 解决

- 经过一番折腾发现这是 Project 检测机制的问题,如下

```
- 工作区文件夹
  - 文件夹A
    - Maven项目A
  - 文件夹B
    - Maven项目B
```

- 上面那种层级结构会使得 Java 虚拟机在启动构建时 `Maven 项目不被识别`.

---

- VScode 只能识别`工作区本身`或者`工作区向内一层目录`是 Maven 项目,这样才能使 Java 项目运行环境成功构建启动.
- 按照以下方法可以解决此问题:

  - 解决方案层级一

  ```
  - 工作区文件夹A
    - Maven项目A
  - 工作区文件夹B
    - Maven项目B
  ```

  - 解决方案层级二

  ```
  - 工作区文件夹
    - Maven项目A
    - Maven项目B
  ```

  - 解决方案层级三

  ```
  - 工作区为Maven项目A
  - 工作区为Maven项目B
  ```
