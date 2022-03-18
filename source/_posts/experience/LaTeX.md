---
title: 🍹LaTeX~环形使者(?)
password: ""
tags:
  - LaTeX
  - VScode
katex: true
date: 2021-06-25 13:32:41
cover: https://www.helloimg.com/images/2022/02/27/GVLsV9.png
top_img:
---

# LaTeX~环形使者(?)

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-03-19 02:02:44
 * @FilePath: \Blog-private\source\_posts\experience\LaTeX.md
 * @Description:
 * @!: *********************************************************************
-->

```pullquote mindmap mindmap-md
- [LaTeX~环形使者(?)](#latex环形使者)
  - [链接搜集](#链接搜集)
  - [安装](#安装)
  - [报错](#报错)
  - [实际效果](#实际效果)
  - [公式渲染](#公式渲染)
  - [误区](#误区)
  - [Butterfly+KaTeX](#butterflykatex)
  - [公式](#公式)
    - [数学等号对齐-大换行-成对匹配-数学样式数字](#数学等号对齐-大换行-成对匹配-数学样式数字)
  - [借物表](#借物表)
```

- 好奇学术论文是怎么写的吗? 此文章尽做大努力把什么是 Tex 系统给你整闭环了 😁

- 一图胜千言:

  <img src="https://www.helloimg.com/images/2022/02/27/GV43eD.png" alt="分类" />

  TeX 生态的名词简直太 ☘ 了,翻阅了很多中英文文档/社区整理了这个图,差不多可以总结 TeX 生态常见/常用的引擎和发行软件.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 链接搜集

> [维基百科 - TeX](https://zh.wikipedia.org/wiki/TeX) 很详细的介绍了 TeX 是什么东西,也关联介绍了 TeX 衍生的各种引擎/软件.

> [一份其实很短的 LaTeX 入门文档](https://liam.page/2014/09/08/latex-introduction/) 强烈推荐阅读的文章,无论是介绍,生态,还是使用方面都很通俗易懂.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 安装

- 1.在 win 下推荐用 `MikTaX` 吧,主流而且比较小. scoop-main 仓库中的 latex 实际上就是 最小安装版本的 MikTaX,试了一遍这个 latex 最好,其他的要么下载失败,要么安装报错 😡😡😡.

  ```cmd
  scoop install latex
  ```

- 2.然后在 VScode 中安装 `LaTeX Workshop` 这个插件,进入 VScode 配置里复制粘贴下面配置:

  > 来源: [搭建 LaTeX 轻量级写作环境（MiKTeX+VSCode）](https://zhuanlan.zhihu.com/p/139210056)

  ```json
  //! Latex workshop
  "latex-workshop.view.pdf.viewer": "tab",
  "latex-workshop.latex.tools": [
    {
      "name": "latexmk",
      "command": "latexmk",
      "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "-pdf",
        "%DOC%"
      ]
    },
    {
      "name": "xelatex",
      "command": "xelatex",
      "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "%DOC%"
      ]
    },
    {
      "name": "pdflatex",
      "command": "pdflatex",
      "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "%DOC%"
      ]
    },
    {
      "name": "bibtex",
      "command": "bibtex",
      "args": ["%DOCFILE%"]
    }
  ],
  "latex-workshop.latex.recipes": [
    {
      "name": "xelatex",
      "tools": ["xelatex"]
    },
    {
      "name": "latexmk",
      "tools": ["latexmk"]
    },

    {
      "name": "pdflatex -> bibtex -> pdflatex*2",
      "tools": ["pdflatex", "bibtex", "pdflatex", "pdflatex"]
    }
  ],
  "latex-workshop.latex.clean.fileTypes": [
    "*.aux",
    "*.bbl",
    "*.blg",
    "*.idx",
    "*.ind",
    "*.lof",
    "*.lot",
    "*.out",
    "*.toc",
    "*.acn",
    "*.acr",
    "*.alg",
    "*.glg",
    "*.glo",
    "*.gls",
    "*.ist",
    "*.fls",
    "*.log",
    "*.fdb_latexmk"
  ]
  ```

- 3.新建一个后缀名为 `.tex` 的文件,注意路径和文件名不要有中文,测试内容如下:

  ```latex
  \documentclass[UTF8]{ctexart}
      \title{文章标题}
      \author{Weidows}
      \date{\today}
      \begin{document}
      \maketitle
      $$ \alpha^{2} + \beta = \Theta  $$
  \end{document}
  ```

- 4.VScode 右上角应该有编译标志 (或者按 `Ctrl + alt + B`),之后 MikTaX 应该会提醒你下载宏包 (因为软件本身很小,没包含进去),选择 China 的镜像源然后等它下载之后会自动编译.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 报错

- 这个情况是因为没重启,尝试重启电脑+重启 VScode

  > Recipe terminated with fatal error: spawn xelatex ENOENT.

  ***

- Hexo 导航栏点击不跳转

  一般只有启用 KaTeX 的页面会出现这个错误

  问题原因是一级标题

  ```
  # 1
  xxxx

  # 2
  xxx
  ```

- 找到作者在 issue 中回复过,行文要用二级标题而非一级,解决了跳转问题

  ```
  ## 1
  xxxx

  ## 2
  xxx
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 实际效果

- 完成上面步骤后在.tex 会生成几个文件,比如:

  ```
  1.aux
  1.log
  1.pdf
  1.synctex.gz
  1.tex
  ```

  随着 tex 的写入保存,VScode 插件会自动编译更新预览内容.

- 展示:

  <img src="https://www.helloimg.com/images/2022/02/27/GVAXjA.png" alt="20210626214236" />

## 公式渲染

- 在写 markdown 文章时可能不会注意到这个问题,因为大多数编辑器支持公式渲染 (比如 VScode 预览、CSDN 在线编辑等等),如下图 VScode 内置的 markdown 预览:

  <img src="https://www.helloimg.com/images/2022/02/27/GV4NPc.png" alt="20210626224156" />

- 但是同样的问题挪到博客上就 GG 了,上面的公式不加处理显示成这样

  <img src="https://www.helloimg.com/images/2022/02/27/GV4oB1.png" alt="20210626224035" />

---

- 如何在网页中渲染 LaTeX 公式?

  > 答: `KaTeX` 或 `MathJax`

  - 这里有个性能测试网站: [KaTeX and MathJax Comparison Demo](https://www.intmath.com/cg5/katex-mathjax-comparison.php)

  - 二者功能比较: [Mathjax 和 katex 的功能比较（VSCode+MPE）](https://zhuanlan.zhihu.com/p/381263375)

- 个人倾向在网页端用 Katex,更轻便快速.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 误区

> ### 渲染 LaTeX 文档 != 渲染公式

1. 我们上面使用 MikTaX 渲染 LaTeX 文档是为了排版获取指定样式的 PDF 文档 -> `渲染LaTeX文档`

2. 而渲染公式是渲染 LaTeX 文档的一部分子功能.

3. 为了让 markdown 中 LaTeX 格式的公式也能得到正确显示,我们抽离出渲染公式这部分引擎 -> `KaTeX/MathJax` -> `专门用来渲染公式`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Butterfly+KaTeX

> 来自官方博客的文档: [Butterfly 安裝文檔(四) 主題配置-2](https://butterfly.js.org/posts/ceeb73f/#Math-%E6%95%B8%E5%AD%B8)

- 需要更换(不换的话有冲突)和新添渲染插件:

  ```
  npm uninstall hexo-renderer-marked hexo-renderer-kramed --save
  npm install hexo-renderer-markdown-it @neilsustc/markdown-it-katex --save
  ```

- `_config.yml`中添加配置:

  ```yaml
  markdown:
    plugins:
      - plugin:
        name: "@neilsustc/markdown-it-katex"
        options:
          strict: false
  ```

- 展示效果:

  $$
  A = \begin{bmatrix}
          a_{11}    & a_{12}    & ...    & a_{1n}\\
          a_{21}    & a_{22}    & ...    & a_{2n}\\
          a_{31}    & a_{22}    & ...    & a_{3n}\\
          \vdots    & \vdots    & \ddots & \vdots\\
          a_{n1}    & a_{n2}    & ... & a_{nn}\\
      \end{bmatrix} , b = \begin{bmatrix}
          b_{1}  \\
          b_{2}  \\
          b_{3}  \\
          \vdots \\
          b_{n}  \\
      \end{bmatrix}
  $$

  $$ \alpha^{2} + \beta = \Theta $$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 公式

看看这两篇基本上可以按图索骥了:
<sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>
<sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

### 数学等号对齐-大换行-成对匹配-数学样式数字

```latex
\begin{aligned}
  o^1(0) &= sgn(W^T(0)X^1)
  \\&= sgn(2.5) = 1

  \\ \ \\

  W(1) &= W(0) + \eta \left[d^1 - o^1(0)\right]X^1
  \\&= (0.5,1,-1,0)^T + 0.1 (-1 - 1)(-1,1,-2,0)^T
  \\&= (0.7,0.8,-0.6,0)^T

  \\ \ \\

  W(2) &=W(1) + \eta \left[d^{2}-o^{2}(1)\right] X^{2}
  \\&= (0.7,0.8,-0.6,0)^{T} + 0.1 [- 1-(- 1)](-1,0,1.5,-0.5)^{T}
  \\&= \left(\mathbf{0.7,0.8,-0.6,0)^{T}}\right.
\end{aligned}
```

$$
\begin{aligned}
  o^1(0) &= sgn(W^T(0)X^1)
  \\&= sgn(2.5) = 1

  \\ \ \\

  W(1) &= W(0) + \eta \left[d^1 - o^1(0)\right]X^1
  \\&= (0.5,1,-1,0)^T + 0.1 (-1 - 1)(-1,1,-2,0)^T
  \\&= (0.7,0.8,-0.6,0)^T

  \\ \ \\

  W(2) &=W(1) + \eta \left[d^{2}-o^{2}(1)\right] X^{2}
  \\&= (0.7,0.8,-0.6,0)^{T} + 0.1 [- 1-(- 1)](-1,0,1.5,-0.5)^{T}
  \\&= \left(\mathbf{0.7,0.8,-0.6,0)^{T}}\right.
\end{aligned}
$$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [LaTeX 公式速查](http://chu-studio.com/posts/2017/LaTeX%20%E5%85%AC%E5%BC%8F%E9%80%9F%E6%9F%A5)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: ~~面向知乎学编程~~: [LaTeX 公式篇](https://zhuanlan.zhihu.com/p/110756681)
