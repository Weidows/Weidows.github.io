---
title: 🚀网站优化记录.
date: 2021-02-07 01:11:24
categories:
  - Web
  - Node
  - Hexo
tags:
  - Hexo
  - 优化
  - Website
  - 魔改
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/inlt356CXhAOExo.jpg
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-02-07 01:11:24
 * @LastEditors: Weidows
 * @LastEditTime: 2021-05-12 17:13:46
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\Node\Hexo\optimize.md
 * @Description:
 * @!: *********************************************************************
-->

- [Why?](#why)
  - [`Why do this?`](#why-do-this)
- [概览](#概览)
- [契合](#契合)
- [优化 css](#优化-css)
- [优化 js](#优化-js)
  - [再次魔改](#再次魔改)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# Why?

## `Why do this?`

- 这网站有太多需要简化的东西了,很多样式是`直接引入的css和js`

- 巨耗费渲染性能和时间(可以感觉出来加载这网站挺费劲的)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 概览

- 对于 css 的所有修改,全部整合进`mine.styl`

  - 编译时就已经做好美化,额外资源负载几乎降为 0

  - 注入到`index.styl`末尾.

  ***

- js 的美化,追加到 `main.js`

  - 请求数加 0,加载策略优化,时间降低.

  - 只加一行调用代码.

  ***

- pug 的修改降低为 3 处,方便升级换代,都在此目录下: `themes\butterfly\layout\includes\`

  - `footer.pug`- 标签

  - `head.pug` - 打包 js 美化代码

  - `third-party\pjax.pug` - 适配 pjax 刷新.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 契合

> 结合 [butterfly 内部魔改记录](./butterfly_modify)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 优化 css

- 以往的 css 是直接引入的文件,在客户端加载时还是会耗费一些不菲时间加载+渲染出来

- 优化思路就是把 css 变成`styl`,使之在编译生成 HTML 文件时就把样式改了,节省客户端耗费.

---

- 如下:

  - 新建一个名为 `mine.styl` 的文件.

  - 原 css 文件就是`mine.css`,用[`css2styl`](https://html5beta.com/tools/css2stylus.html)转换为 styl 格式,粘贴到 `mine.styl`

  - 注意这个网站转换成的 styl 有很多 bug(包括缩进和括号,需要人工检验)

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/2C7cgeEIQNr3qLu.png" alt="20210207134449" />

- 包括原先`source/css/_global/function.styl`之类的内添加或修改的样式,也可以转入 mine.styl.

- 然后在`index.styl`中引入:

  - 在末尾加上

  ```styl
  //mine
  @import '_mine/mine.styl'
  ```

---

- 用 `hexo server` 测试一下,应该没问题~

- 这样 css 优化就完成了

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 优化 js

- 跟 css 一样,我原先也是直接一个`mine.js`引入的

- 虽然没啥问题,但是会导致页面第二次加载渲染,而且多了一个请求数

- 于是,我想直接把它淦进`main.js`中!

  - 操作不复杂,直接复制`mine.js`内容,粘贴进`main.js`最后
  - 注意不是最末尾

  ```js
    // 粘贴到这里
    refreshFn();
    unRefreshFn();
  })
  ```

## 再次魔改

- 因为某些美化函数会被 pjax 功能搞失效,直接把函数放进 main.js 的话,pjax 无法再次使用

- 所以我把美化 js 打包并弄进 `butterfly/layout/head.pug` 中,在页面编译时就会被添加到 `<head>` 内,加载时间和请求数不增加!

  现在,加载逻辑是: js 美化代码在 HTML 文件的 head 中,然后在 main.js 最后写一句调用命令; 在页面用了 pjax 加载时,pjax.pug 中的重渲染函数会被调用.