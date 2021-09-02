---
title: 🤔Matters found in Jetbrains.
categories:
  - tools
  - Jetbrains
tags:
  - PyCharm
katex: false
comments: true
aside: true
date: 2021-07-29 14:11:07
cover: https://i.loli.net/2021/08/01/3nziTa5eU1CN9bG.jpg
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-08-01 10:11:48
 * @FilePath: \Blog-private\source\_posts\tools\Jetbrains\matters.md
 * @Description:
 * @!: *********************************************************************
-->

- [插件无法卸载](#插件无法卸载)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 插件无法卸载

- 问题说明:

  我用的设置同步,所以 IDEA 上的插件也被同步到 PyCharm 上了

  但是有个 MyBatis 插件 PyCharm 不支持,安装后重启直接报错,而且插件面板也找不到它,没法卸载 (于是每次启动 Pycharm 都会报错,如下:)

  > 14:07 插件错误: 插件 'Free MyBatis plugin' 之所以与 IntelliJ IDEA 兼容，只是因为它没有定义任何显式模块依赖项

---

- 解决办法:

  进入: (用户名和版本号需要注意一下)

  ```
  C:\Users\29845\AppData\Roaming\JetBrains\PyCharm2021.1\plugins
  ```

  应该很容易就能找到那个残留的导致报错的家伙了,直接 `delete` !

---

- 再重开就没报错了.
