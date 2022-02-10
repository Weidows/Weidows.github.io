---
title: 🤔Matters found in IDEs.
tags:
  - PyCharm
  - VScode
katex: false
comments: true
aside: true
date: 2021-07-29 14:11:07
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/3nziTa5eU1CN9bG.jpg
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-01-25 01:36:56
 * @FilePath: \Blog-private\source\_posts\tools\matters.md
 * @Description:
 * @!: *********************************************************************
-->

- [插件无法卸载](#插件无法卸载)
- [VScode-源代码管理不显示](#vscode-源代码管理不显示)

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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## VScode-源代码管理不显示

- 问题就是这里的"源代码管理"无法显示出来

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/L8rqen43hGBOoyF.png" alt="20220125012150" />

  经各路探索 (改配置/清空数据重装...etc), 发现此问题只局限在我的某个项目,而且即使 fully restore 问题尚在

  ***

- 所以我认为这个问题存在于 vscode 可以同步的数据中

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/WzhfPclbnYUg4R9.png" alt="20220125012636" />

  那么,凶手比较明显了: `UI状态`

  ***

- 查找了一番,其定位在 `C:\Users\utsuk\AppData\Roaming\Code\User\globalStorage\state.vscdb`

  打开这个文件,查找关键词 `null` 替换为 `""`

OK 了,虽然项目的 UI 配置似乎会被重置,但是确实修好了!
