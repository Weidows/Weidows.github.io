---
title: 🥸VScode-snippet-用户代码片段
password: ""
date: 2020-08-25 19:14:35
tags:
  - snippet
  - VScode
  - markdown
cover: https://www.helloimg.com/images/2022/02/27/GVJZOh.png
katex: false
comments: true
aside: true
top_img:
---

# VScode-snippet-用户代码片段

<!--
 * @Author: Weidows
 * @Date: 2020-08-25 19:14:35
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-27 21:23:56
 * @FilePath: \Blog-private\source\_posts\tools\vscode\snippet.md
-->

```pullquote mindmap mindmap-md
- [VScode-snippet-用户代码片段](#vscode-snippet-用户代码片段)
  - [开启-snippet](#开启-snippet)
  - [入门代码片段](#入门代码片段)
  - [深入-位置匹配](#深入-位置匹配)
  - [参照](#参照)
```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 开启-snippet

- 首先需要打开 markdown 文件的 `quickSuggestions`,因为其默认是未开启状态

  <img src="https://www.helloimg.com/images/2022/02/27/GVLUFC.png" alt="20210131221250" />

- 在设置文件里加上以下设置

  ```
  "editor.snippetSuggestions": "top",
  "[markdown]": {
    "editor.quickSuggestions": true
  }
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 入门代码片段

<img src="https://www.helloimg.com/images/2022/02/27/GVLl5R.png" alt="20210131221522" />

- 点小齿轮找到用户代码片段设置,进入设置文件,在大括号里添加自定义的代码片段,比如下面我的:

  这个片段就可以在 markdown 文件内输入`divider`快速生成模板,省去复制的麻烦了.

  ```json
  "Divider": {
    "scope": "markdown",
    "prefix": "divider",
    "body": [
      "",
      "<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>",
      ""
    ]
  }
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 深入-位置匹配

- tab stops: 当按下 tab 补全后光标所跳转到的位置,第一个位置完成后再按 tab 切到第二个位置,以此类推<sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>

  $1 : 第一个位置

  $2 : 第二个位置

  $3 : 第三个位置

  ............

  $0 : 补全上面所有位置后光标停留位置

---

- 这样一个场景: 想打一个 mermaid,然后出来下面这样

  ![](https://www.helloimg.com/images/2022/02/26/GVRDDc.gif)

  ***

  可以这样:   (抱歉贴代码会报错,贴图吧)

  ![](https://www.helloimg.com/images/2022/02/27/GVOQB9.png)

---

- 接下来, 我们想对多个位置同时操作:

  ![](https://www.helloimg.com/images/2022/02/26/GVRWDP.png)



  当输入 paper-footnote 后按下 tab, 所有$1 处都会出现光标,可以同时操作

  ![](https://www.helloimg.com/images/2022/02/26/GVR2Pg.png)

---

- 对于上面例子, 操作完所有$1 位置后,我们想跳到中间那行位置

  下面两种都是可以的,操作完$1 后再按 tab 就会跳转, 只不过$2 概念上来说是下一步位置, $0 概念上是最后位置

  ![](https://www.helloimg.com/images/2022/02/26/GVROC6.png)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [VS Code 代码片段完全入门指南](https://chinese.freecodecamp.org/news/definitive-guide-to-snippets-visual-studio-code/)
