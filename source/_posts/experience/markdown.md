---
title: Markdown中一些新奇写法.
categories:
  - experience
tags:
  - Markdown
cover: https://i.loli.net/2020/11/30/o6shLZ1G53qliBY.jpg
# top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-11-30 00:09:37
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-07 00:22:19
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog-private\source\_posts\experience\markdown.md
 * @Description:
-->

- [新奇的](#新奇的)
  - [`![]()`](#)
  - [`[]: URL`](#-url)
- [平庸的](#平庸的)
  - [`>`](#-1)
  - [`- ## 内容`](#---内容)
- [文字样式](#文字样式)
  - [`*斜体*` 或 `_斜体_`](#斜体-或-_斜体_)
  - [`**粗体**`](#粗体)
  - [`标识字`](#标识字)
  - [`~~中划线~~`](#中划线)
- [HTML 标签](#html-标签)
  - [收缩框](#收缩框)
  - [下划线](#下划线)
  - [键盘样式](#键盘样式)

# 新奇的

## `[![]()]()`

- 这样写是把图片嵌套进了链接里,如下:

[![图片](https://i.loli.net/2020/11/30/o6shLZ1G53qliBY.jpg)](https://i.loli.net/2020/11/30/o6shLZ1G53qliBY.jpg)

- 本来只是展示图片,现在点击图片跳转了.

---

## `[]: URL`

- 类似定义变量(引用)

- 上面指定,下面可以引用.

```markdown
[github-shield]: https://img.shields.io/github/stars/Weidows/vscode-weidows-theme?style=social
[github-url]: https://github.com/Weidows/vscode-weidows-theme
[vscode-shield]: https://img.shields.io/visual-studio-marketplace/r/TabNine.tabnine-vscode?logo=visual-studio-code&style=social
[vscode-url]: https://bit.ly/3pqj7o2

[![Github Repo][github-shield]][github-url]
[![VSCode Plugin][vscode-shield]][vscode-url]
```

---

# 平庸的

## `>`

- 展示:
  > 在这里做个展示.

---

## `- ## 内容`

- 段落形式的标题,如下
  - ### 这是一个段落标题,h3 字号

---

# 文字样式

## `*斜体*` 或 `_斜体_`

- 样式:
  _斜体_

---

## `**粗体**`

- 样式:
  **粗体**

## `标识字`

- 样式:
  `标识字`

---

## `~~中划线~~`

- 样式
  ~~样式演示~~

---

# HTML 标签

## 收缩框

```HTML
<details>
  <summary>收缩框标题</summary>
  这里写内容
</details>
```

- 演示
  <details>
    <summary>收缩框标题</summary>
    这里写内容
  </details>

---

## 下划线

```HTML
<u>文字</u>
```

- 样式
  <u>文字</u>

---

## 键盘样式

```
<kbd>Ctrl + shift + [</kbd>
```

- 样式
  <kbd>Ctrl + shift + [</kbd>
