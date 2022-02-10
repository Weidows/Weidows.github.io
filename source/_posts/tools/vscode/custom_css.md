---
title: VScode撞上赛博朋克风!赛高!
date: 2020-10-17 23:16:13
tags:
  - VScode
  - CSS
  - 美化
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/u9COBmdHbrgSakQ.jpg
top_img:
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-03-21 17:03:29
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\tools\vscode\custom_css.md
-->

- [简介](#简介)
- [需要的东西](#需要的东西)
- [CSS 引入](#css-引入)
- [源码链接](#源码链接)

## 简介

- 大半夜水群,发现群友扯皮发了一张美照(就是代码)
- 惊艳老夫一整天! 赶紧想办法把他整出来!
  ![23XdzqSlUGZPcym](https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/jkVQ7r2LuKMx8EB.jpg)
- 这种荧光效果是 CSS 渲染成的,VScode 插件商店有现成的主题可供使用
  - 想广泛了解可以搜索关键词`SynthWave`,会有不少主题可供使用,但是需要注意如果你想应用这种荧光主题必须舍弃现在你所喜欢的某个主题了...
  - 于是,对我们魔改狂来说,这只是开始!

---

## 需要的东西

- `Custom CSS and JS Loader`

  - 这是 VScode 商店里的一个插件,用来引入用户想引入的 CSS/JS 文件
  - 这篇文章只需要下载这一个插件,其他的用不着~~~

  ***

- 我们想引入的 CSS 渲染文件
  - 这个由于不同人,不同审美,在此只放下我个人的 CSS 源码
  - 如果你想找其他版本可以搜`SynthWave`来寻找符合心意的主题,并定位其中的 CSS,拿过来供自己使用(不违法:)

---

## CSS 引入

- 在 VScode 设置文件里加入下面的代码

  ```json
  "vscode_custom_css.imports": ["[file:///D:/Game/Demo/Weidows/.vscode/lights-on.css](https://cdn.jsdelivr.net/gh/Weidows/Weidows/.vscode/lights-on.css)"]
  ```

- 注意`路径`和`文件名`对应好,`必须修改`
- 上面步骤完成并引入下面 CSS 后,就会产生如下效果:

  - 初版

    ![20201124011913](https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/Mue7ZD5zR1vCkLf.jpg)

  - 二版

    <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210308184630.png" alt="20210308184630" />

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 源码链接

> [源码链接](https://github.com/Weidows-projects/weidows-beautify-pack/blob/main/css/lights-on.css)
