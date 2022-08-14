---
title: 🤔Matters-found-in-IDEs
password: ""
tags:
  - PyCharm
  - VScode
  - Goland
  - IDEA
katex: false
comments: true
aside: true
date: 2021-07-29 14:11:07
cover: https://www.helloimg.com/images/2022/02/27/GVPokK.png
top_img:
---

# Matters-found-in-IDEs

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-08-14 16:16:26
 * @FilePath: \Blog-private\source\_posts\tools\IDE-matters.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [Matters-found-in-IDEs](#matters-found-in-ides)
  - [vscode](#vscode)
    - [vscode-源代码管理不显示](#vscode-源代码管理不显示)
    - [关闭更新提示](#关闭更新提示)
  - [Jetbrains](#jetbrains)
    - [Goland-快捷键导入](#goland-快捷键导入)
    - [插件无法卸载](#插件无法卸载)
  - [借物表](#借物表)

{% endpullquote %}

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## vscode

### vscode-源代码管理不显示

- 问题就是这里的"源代码管理"无法显示出来

  <img src="https://www.helloimg.com/images/2022/02/27/GVAlkD.png" alt="20220125012150" />

  经各路探索 (改配置/清空数据重装...etc), 发现此问题只局限在我的某个项目,而且即使 fully restore 问题尚在

  ***

- 所以我认为这个问题存在于 vscode 可以同步的数据中

  <img src="https://www.helloimg.com/images/2022/02/27/GVSbPS.png" alt="20220125012636" />

  那么,凶手比较明显了: `UI状态`

  ***

- 查找了一番,其定位在 `C:\Users\utsuk\AppData\Roaming\Code\User\globalStorage\state.vscdb`

  打开这个文件,查找关键词 `null` 替换为 `""`

OK 了,虽然项目的 UI 配置似乎会被重置,但是确实修好了!

---

### 关闭更新提示

这个烦得很, 每次打开都会提示

设置里搜 `update: mode`, 改下

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## Jetbrains

### Goland-快捷键导入

在此提一嘴想用 vscode 写 go 的话,目前还是不太友好.. (2022.2); `首选 Goland`

- Jetbrains 不同 IDE 之间的快捷键是没法直接导入,一个个地改又非常费劲

  找到了一个通过修改文件来导入的方式<sup id='cite_ref-04'>[\[4\]](#cite_note-04)</sup>,比如我们想把快捷键 IDEA -> Goland

  1. 打开 idea 并导出配置到压缩包,快捷键在 `settings.zip\keymaps\`
  2. 先打开 Goland 随便改一个快捷键,不然下一步可能找不到; 然后关掉 Goland
  3. 找到 `Goland\profile\config\jba_config\win.keymaps\`,复制粘贴

---

### 插件无法卸载

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

  <a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-04' href='#cite_ref-04'>[4]</a>: [JetBrains 系列 IDE 之间的快捷键相互导入](https://www.cnblogs.com/devzyc/p/14084488.html)
