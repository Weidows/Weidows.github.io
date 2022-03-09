---
title: 😶‍🌫️Markdown-中一些新奇写法.
date: 2020-11-30 00:09:37
password: ""
tags:
  - Markdown
  - HTML
katex: false
cover: https://www.helloimg.com/images/2022/02/27/GVENOC.png
top_img:
---

# Markdown-中一些新奇写法.

<!--
 * @Author: Weidows
 * @Date: 2020-11-30 00:09:37
 * @LastEditors: Weidows
 * @LastEditTime: 2022-03-07 14:19:12
 * @FilePath: \Blog-private\source\_posts\others\markdown\markdown.md
 * @Description:
-->

```pullquote mindmap mindmap-md
- [Markdown-中一些新奇写法.](#markdown-中一些新奇写法)
  - [注意点](#注意点)
  - [基本的](#基本的)
  - [新奇写法](#新奇写法)
    - [`![]()`](#)
    - [`[]: URL`](#-url)
    - [对话](#对话)
    - [引用+条目](#引用条目)
    - [多行引用](#多行引用)
    - [巨号字体](#巨号字体)
  - [文字样式](#文字样式)
  - [HTML 标签](#html-标签)
    - [收缩框](#收缩框)
    - [下划线](#下划线)
    - [键盘样式](#键盘样式)
    - [文字遮盖](#文字遮盖)
    - [论文脚注](#论文脚注)
    - [中英文切换](#中英文切换)
    - [markdown-表格内换行](#markdown-表格内换行)
  - [参考](#参考)
```

## 注意点

1. markdown 文件写的超过 1K 行后,每次格式化/页面加载的性能损耗是恐怖的,而且不利于观看,所以尽量控制 markdown 行数别太多 (我是超过 500~600 行会分页)

2. 不同平台对 markdown 渲染不同,有可能会产生格式不对称问题. (例如 GitHub / Gitee / CSDN 对 README 渲染就不一样)

3. 严格统一格式,不然以后重构时复杂度极其之高,甚至比写的时候还难; `食之无味,弃之可惜`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 基本的

- `> 内容`

  - 展示:

  > 在这里做个展示.

---

- `- ### 内容`

  - 段落形式的标题,如下

  - #### 这是一个段落标题,h3 字号

---

- 模拟 console 输出

  ````
  ```console
  ╰─ ls
          Directory: D:\Repo\Weidows\Blog-private

  Mode                LastWriteTime         Length Name
  ----                -------------         ------ ----
  d----         2021/2/13     16:16                  .github
  d----        2021/11/21     14:32                  .vscode
  d----        2021/11/25      0:30                  node_modules
  d----        2021/11/30     14:45                  Others
  d----        2021/11/26     21:00                  out
  d----        2021/11/25      0:17                  public
  d----         2021/5/23      0:07                  scaffolds
  d----         2021/11/6     10:33                  source
  d----        2021/11/25      9:46                  themes
  -a---        2021/11/24     16:04           8324   _config.yml
  -a---        2021/11/25      0:28             87   .gitignore
  -a---        2021/11/25      9:46            436   .gitmodules
  -a---        2021/11/25      0:19       55039465   db.json
  -a---         2020/9/16     23:32          35184   LICENSE
  -a---        2021/11/25      0:30         544859   package-lock.json
  -a---        2021/11/25      0:09           1168   package.json
  ```
  ````

  样式:

  ```console
  ╰─ ls
          Directory: D:\Repo\Weidows\Blog-private

  Mode                LastWriteTime         Length Name
  ----                -------------         ------ ----
  d----         2021/2/13     16:16                  .github
  d----        2021/11/21     14:32                  .vscode
  d----        2021/11/25      0:30                  node_modules
  d----        2021/11/30     14:45                  Others
  d----        2021/11/26     21:00                  out
  d----        2021/11/25      0:17                  public
  d----         2021/5/23      0:07                  scaffolds
  d----         2021/11/6     10:33                  source
  d----        2021/11/25      9:46                  themes
  -a---        2021/11/24     16:04           8324   _config.yml
  -a---        2021/11/25      0:28             87   .gitignore
  -a---        2021/11/25      9:46            436   .gitmodules
  -a---        2021/11/25      0:19       55039465   db.json
  -a---         2020/9/16     23:32          35184   LICENSE
  -a---        2021/11/25      0:30         544859   package-lock.json
  -a---        2021/11/25      0:09           1168   package.json
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 新奇写法

### `[![]()]()`

- 这样写是把图片嵌套进了链接里,如下:

  [![图片](https://www.helloimg.com/images/2022/02/27/GVENOC.png)](https://www.helloimg.com/images/2022/02/27/GVENOC.png)

- 本来只是展示图片,现在点击图片跳转了.

  ```markdown
  [![图片](https://www.helloimg.com/images/2022/02/27/GVENOC.png)](https://www.helloimg.com/images/2022/02/27/GVENOC.png)
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

<img src="https://www.helloimg.com/images/2022/02/27/GVtaMP.png" alt="20210329091216" />

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

  <img src="https://www.helloimg.com/images/2022/02/27/GV4CFq.png" alt="20211009171608" />

- 写法: `h1 标签 + 列表 + 一级标题`

  ```markdown
  <h1 align="center">

  - # 🌈Keeper

  基于 [`GitHub-Action`](./.github/workflows/daily.yml) 的定时任务集合.

  </h1>
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 文字样式

|    样式    | 写法                 |
| :--------: | :------------------- |
|   _斜体_   | \*斜体\* 或 \_斜体\_ |
|  **粗体**  | \*\*粗体\*\*         |
|  `标识字`  | \`标识字`            |
| ~~中划线~~ | \~~中划线~~          |

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## HTML 标签

<span style="background: grey; color: grey">遮盖体-select</span>
<span style="background: grey; color: grey" onmouseout="this.style.background='grey';this.style.color='grey'" onmouseover="this.style=''">遮盖体-hove</span>

### 收缩框

```HTML
<details>
  <summary>收缩框标题</summary>
  这里写内容
</details>
```

- <details>
    <summary>演示: 收缩框标题</summary>
    这里写内容
  </details>

---

### 下划线

```HTML
<u>文字</u>
```

- 样式 <u>文字</u>

---

### 键盘样式

```
<kbd>Ctrl + shift + [</kbd>
```

- 样式 <kbd>Ctrl + shift + [</kbd>

---

### 文字遮盖

```
<span style="background: grey; color: grey">遮盖体-select</span>
<span style="background: grey; color: grey" onmouseout="this.style.background='grey';this.style.color='grey'" onmouseover="this.style=''">遮盖体-hove</span>
```

- 样式:

  <span style="background: grey; color: grey">遮盖体-select</span>
  <span style="background: grey; color: grey" onmouseout="this.style.background='grey';this.style.color='grey'" onmouseover="this.style=''">遮盖体-hove</span>

---

### 论文脚注

- 可正反双向跳转

  ```html
  <sup id="cite_ref-01">[\[1\]](#cite_note-01)</sup>

  <a name="cite_note-01" href="#cite_ref-01">[1]</a>
  ```

  ***

论文脚注测试处 <sup id="cite_ref-01">[\[1\]](#cite_note-01)</sup>。 `<sup id="cite_ref-01">[\[1\]](#cite_note-01)</sup>`

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

论文脚注测试处 <sup id="cite_ref-02">[\[2\]](#cite_note-02)</sup>。 `<sup id="cite_ref-02">[\[2\]](#cite_note-02)</sup>`

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000

---

### 中英文切换

- Repo-README 中常常需要中英文切换 <sup id='cite_ref-03'>[\[3\]](#cite_note-03)</sup>

  <div align="right">

  Language: 🇺🇸 | [cn](/README_CN.md)
  </div>

  ```
  <div align="right">

  Language: 🇺🇸 | [cn](/README_CN.md)
  </div>
  ```

---

### markdown-表格内换行

- 找了很多办法来实现换行,后来发现实现原理简单粗暴: `<br>`

  | 列 1             | 列 2             | 列 3             |
  | ---------------- | ---------------- | ---------------- |
  | 列 1 <br> 列 1.1 | 列 2 <br> 列 2.1 | 列 3 <br> 列 3.1 |
  | 列 1 <br> 列 1.2 | 列 2 <br> 列 2.2 | 列 3 <br> 列 3.2 |

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

<a name="cite_note-01" href="#cite_ref-01">[1]</a>：`<a name="cite_note-01" href="#cite_ref-01">[1]</a>` (测试)

<a name="cite_note-02" href="#cite_ref-02">[2]</a>：`<a name="cite_note-02" href="#cite_ref-02">[2]</a>` (测试)

<a name='cite_note-03' href='#cite_ref-03'>[3]</a>: https://raw.githubusercontent.com/jerryc127/hexo-theme-butterfly/dev/README.md
