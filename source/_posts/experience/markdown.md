---
title: Markdown 中一些新奇写法.
date: 2020-11-30 00:09:37
categories:
  - experience
tags:
  - Markdown
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/o6shLZ1G53qliBY.jpg
top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-11-30 00:09:37
 * @LastEditors: Weidows
 * @LastEditTime: 2021-10-09 17:21:32
 * @FilePath: \Blog-private\source\_posts\experience\markdown.md
 * @Description:
-->

- [基本的](#基本的)
- [新奇写法](#新奇写法)
  - [`![]()`](#)
  - [`[]: URL`](#-url)
  - [对话](#对话)
  - [引用+条目](#引用条目)
  - [多行引用](#多行引用)
  - [巨号字体](#巨号字体)
- [文字样式](#文字样式)
  - [`*斜体*` 或 `_斜体_`](#斜体-或-_斜体_)
  - [`**粗体**`](#粗体)
  - [`标识字`](#标识字)
  - [`~~中划线~~`](#中划线)
- [HTML 标签](#html-标签)
  - [收缩框](#收缩框)
  - [下划线](#下划线)
  - [键盘样式](#键盘样式)
- [注意点](#注意点)

## 基本的

- `> 内容`

  - 展示:

  > 在这里做个展示.

---

- `- ### 内容`

  - 段落形式的标题,如下

  - #### 这是一个段落标题,h3 字号

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 新奇写法

### `[![]()]()`

- 这样写是把图片嵌套进了链接里,如下:

  [![图片](https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/o6shLZ1G53qliBY.jpg)](https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/o6shLZ1G53qliBY.jpg)

- 本来只是展示图片,现在点击图片跳转了.

  ```markdown
  [![图片](https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/o6shLZ1G53qliBY.jpg)](https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/o6shLZ1G53qliBY.jpg)
  ```

---

### `[]: URL`

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

### 对话

> 发现自: [Axb 的自我修养](http://blog.2baxb.me/),样式如下:

<img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210329091216.png" alt="20210329091216" />

- 写法:

  ```markdown
  比如某天...

  > 喂?是....
  ```

- 样式:

  比如某天...

  > 喂?是....

---

### 引用+条目

- 样式:

  > - 对应不同业务需求,存在 N 中不同的监听器接口可供实现.
  > - 监听器经常在 GUI 编程中使用.

  > 1. 对应不同业务需求,存在 N 中不同的监听器接口可供实现.
  > 2. 监听器经常在 GUI 编程中使用.

  ***

- 写法:

  ```markdown
  > - 对应不同业务需求,存在 N 中不同的监听器接口可供实现.
  > - 监听器经常在 GUI 编程中使用.

  > 1. 对应不同业务需求,存在 N 中不同的监听器接口可供实现.
  > 2. 监听器经常在 GUI 编程中使用.
  ```

---

### 多行引用

偶然发现的,挺实用的

- 一般引用只能一行,多行引用写成这样的话

  ```md
  > asdfghjkl
  > zxcvbnm

  > asdfghjkl zxcvbnm
  ```

  实际上长得一样

  > asdfghjkl
  > zxcvbnm

  > asdfghjkl zxcvbnm

  ***

- 改成这样就对了:

  ```md
  > asdfghjkl \
  > zxcvbnm
  ```

  > asdfghjkl \
  > zxcvbnm

---

### 巨号字体

- 上面的是巨号,下面的是一号标题,怎样,够大吧?

  <img src="https://i.loli.net/2021/10/09/CFqJIgubvXhxtrA.png" alt="20211009171608" />

- 写法: `h1 标签 + 列表 + 一级标题`

  ```markdown
  <h1 align="center">

  - # 🌈Keeper

  基于 [`GitHub-Action`](./.github/workflows/daily.yml) 的定时任务集合.

  </h1>
  ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 文字样式

### `*斜体*` 或 `_斜体_`

- 样式:
  _斜体_

---

### `**粗体**`

- 样式:
  **粗体**

### `标识字`

- 样式:

  `标识字`

---

### `~~中划线~~`

- 样式
  ~~样式演示~~

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## HTML 标签

### 收缩框

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

### 下划线

```HTML
<u>文字</u>
```

- 样式
  <u>文字</u>

---

### 键盘样式

```
<kbd>Ctrl + shift + [</kbd>
```

- 样式
  <kbd>Ctrl + shift + [</kbd>

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 注意点

1. markdown 文件写的超过 1K 行后,每次格式化和页面加载的性能损耗是恐怖的,所以尽量控制 markdown 行数别太多

2. 不同平台对 markdown 渲染不同,有可能会产生格式不对称问题. (例如 GitHub 与 Gitee 的 README 渲染就不一样)
