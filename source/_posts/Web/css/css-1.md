---
title: CSS学习笔记-(一)
date: 2020-11-10 00:49:54
categories:
  - Web
  - css
tags:
  - CSS
  - 笔记
cover: https://i.loli.net/2020/11/30/2WiEbNR47TznHcC.jpg
# top_img: https://cdn.jsdelivr.net/gh/Weidows/Images@master/
---

<!--
 * @Author: Weidows
 * @Date: 2020-11-10 00:49:54
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:22:11
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\css\css-1.md
 * @Description:CSS学习笔记
-->

- [GitHub 源码](#github-源码)
- [需要了解的](#需要了解的)
- [样式引入](#样式引入)
  - [内部样式](#内部样式)
  - [外部样式](#外部样式)
  - [行内样式](#行内样式)
- [选择器](#选择器)
  - [基本选择器](#基本选择器)
    - [标签选择器](#标签选择器)
    - [类选择器](#类选择器)
    - [id 选择器](#id-选择器)
  - [层次选择器](#层次选择器)
    - [后代选择器](#后代选择器)
    - [子选择器](#子选择器)
    - [相邻(兄弟)选择器](#相邻兄弟选择器)
    - [通用(兄弟)选择器](#通用兄弟选择器)
  - [结构伪类选择器](#结构伪类选择器)
  - [属性选择器(常用)](#属性选择器常用)
- [网页美化](#网页美化)
  - [字体样式](#字体样式)
  - [文本样式](#文本样式)
  - [超链接伪类](#超链接伪类)
  - [列表](#列表)
  - [盒子模型](#盒子模型)
  - [圆角边框](#圆角边框)
  - [阴影](#阴影)

# [GitHub 源码](https://github.com/Weidows/Weidows/tree/master/Web/css)

# 需要了解的

- 前端分离有利于 SEO 优化,便于搜索引擎收录
  - Vue 框架极其难被收录
  - 因为 Vue 框架加载时需要执行 JavaScript 来引入 HTML,CSS 或者 JavaScript,而搜索引擎的爬虫并不会执行,所以像是这种框架写出来的页面,本身就是个空壳,爬虫爬不到关键性的内容,所以 SEO 比较弱.

---

# 样式引入

- 优先级: 行内样式>内部样式>外部样式

## 内部样式

```css
<style>

</style>
```

---

## 外部样式

- 链接式(css3)

```css
<link rel="stylesheet" href="CSS/1.css" />
```

- 导入式(不建议使用,css2 中的)

```css
<style>
  @import url("CSS/1.css");
</style>
```

## 行内样式

```css
<h1 style="color:aqua">行内样式</h1>
```

---

# 选择器

## 基本选择器

- 优先级: id > class > 标签

### 标签选择器

```css
div {
  color: aqua;
}
```

### 类选择器

```css
.Span {
  color: chartreuse;
}
```

### id 选择器

- id 必须保证全局唯一

```css
#Div-3 {
  color: blueviolet;
}
```

---

## 层次选择器

### 后代选择器

- 在某个元素的后面所有

```css
/* 对于ul后面的所有p标签 */
ul p {
  background: red;
}
```

### 子选择器

- 只选择后面的一代

```css
/* 对于body里面第一代的p标签 */
body > p {
  background: green;
}
```

### 相邻(兄弟)选择器

- 对于选中的标签的下一个同级标签

```css
#action + p {
  background: tomato;
}
```

- 类似上面,这个是选择后面所有的同级标签

### 通用(兄弟)选择器

```css
#action ~ p {
  background: orange;
}
```

---

## 结构伪类选择器

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- 避免使用class,id选择器 -->
    <style>
      /* ul的第一个子元素 */
      ul li:first-child {
        background: violet;
      }

      /* ul的最后一个子元素 */
      ul li:last-child {
        background: yellow;
      }

      /* 选中父级第一个元素(p1) */
      p:nth-child(1) {
        background: rgb(255, 0, 255);
      }

      /* 选中父级第二个类型为p的元素 */
      p:nth-of-type(2) {
        background: wheat;
      }

      /* 鼠标悬浮 */
      p:hover {
        background: black;
      }
    </style>
  </head>
  <body>
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>
    <ul>
      <li>li1</li>
      <li>li2</li>
      <li>li3</li>
    </ul>
  </body>
</html>
```

---

## 属性选择器(常用)

- 相当于 class + id 选择器

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* 选中demo类下的a标签
      这个不是讲解,这个只是页面初始化,好看些 */
      .demo a {
        float: left;
        display: block;
        height: 50px;
        width: 50px;
        border-radius: 10px;
        background: violet;
        text-align: center;
        color: gainsboro;
        text-decoration: none;
        margin-right: 10px;
        font: bold 20px/50px Arial;
      }

      /*
      = 是绝对等于
      *= 是包含
      ^= 以这个开头
      $= 以这个结尾
      */

      /* 选中存在id属性的元素 */
      a[id] {
        /* background: yellow; */
      }

      /* 选中对应属性的元素(属性值可以使用正则表达式!!!) */
      a[id="first"] {
        /* background: yellow; */
      }

      /* 选中class中有links的元素 */
      a[class*="links"] {
        /* background: yellow; */
      }

      /* 以http开头的元素 */
      a[herf^="http"] {
        /* background: yellow; */
      }

      /* 以pdf结尾 */
      a[herf$="pdf"] {
        /* background: yellow; */
      }
    </style>
  </head>
  <body>
    <p class="demo">
      <a href="https://www.baidu.com" class="links item first" id="first">1</a>
      <a
        href="http://blog.kuangstudy.com"
        class="links item active"
        target="_blank"
        title="test"
        >2</a
      >
      <a here="images/123.html" class="links item">3</a>
      <a here="images/123.png" class="links item">4</a>
      <a here="images/123.jpg" class="links item">5</a>
      <a here="abc" class="links item">6</a>
      <a here="/a.pdf" class="links item">7</a>
      <a here="/abc.pdf" class="links item">8</a>
      <a here="abc.doc" class="links item">9</a>
      <a here="abcd.doc" class="links item">10</a>
    </p>
  </body>
</html>
```

---

# 网页美化

## 字体样式

```css
* {
  /* 从左到右依次检查是否有指定字体,有的话就使用.注意像是第一个T罗马字体这种分段的要用单引号括起来,常用字体一般是微软雅黑,宋体,T罗马 */
  font-family: "Times New Roman", Times, serif;

  /* 谷歌浏览器字体默认16px(会根据屏幕大小略有变动) */
  font-size: 16px;

  /* 跟VScode一样,实际开发中常用实际数字表示加粗/变细(100-900)m默认宽度是400/normal,bold是加粗(700),不用常变细 */
  font-weight: 500;

  /* 文字样式 正常/斜体italic,一般不给文字加倾斜,常用的是把倾斜字体(em,i)正过来*/
  font-style: normal;

  /* 行高 */
  line-height: 20px;

  /*复合属性font:font-style font-weight font-size/line-height font-family,中间空格分隔开,顺序不能颠倒,除了font-size和-family之外其他的可以省略取默认值 */
  font: italic 700 16px/20px "Times New Roman";
}
```

---

## 文本样式

- 颜色 `color`
- 对齐方式 `text-align`
- 首行缩进 `text-indent`
- 行高 `line-height`
- 装饰 `text-decoration`

> [CSS 总结 div 中的内容垂直居中的五种方法](https://www.cnblogs.com/xiaocaiyuxiaoniao/p/10407830.html)

```HTML
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>textStyle</title>
    <style>
      /* 约定俗成的,把比较重点的内容一般用span修饰便于修改 */
      #span1 {
        /*
        color指定方法:
          1.red
          2.#FF0000
          3.rgb(255,0,0)/rgb(100%,0%,0%)
          4.rgba(255,0,0,0.9)
          开发中最常用的是2.十六进制方式
        */
        color: red;
      }
      .p1 {
        /* 首行缩进2字符 */
        text-indent: 2em;

        /* 居中对齐 */
        text-align: center;

        /* 块高 && 行高(这两个高度一致就可以上下居中) */
        height: 100px;
        line-height: 100px;
        background: green;

        /* 上中下划线(这三个只能同时生效一个) */
        /* text-decoration: overline; */
        /* text-decoration: line-through; */
        text-decoration: underline;
      }

      /* 文本相对图片垂直居中 */
      img,
      #span2 {
        vertical-align: middle;
      }
    </style>
  </head>

  <body>
    <p class="p1">欢迎学习<span id="span1">Java</span></p>

    <img src="./assets/2020-11-17-22-38-18.png" alt="" />
    <span id="span2">djaowidjalwdjaoidj</span>
  </body>
</html>
```

---

## 超链接伪类

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      a {
        text-decoration: none;
        color: black;
      }
      a:hover {
        color: orange;
        font-size: 30px;
      }
      a:active {
        color: green;
      }
      #QQ {
        /* 文字阴影,水平偏移,垂直偏移,阴影半径 */
        text-shadow: aqua 0px 0px 10px;
      }
    </style>
  </head>
  <body>
    <p><a href="#">秦疆老师的CSS教程，快速上手CSS必备</a></p>
    <p><a href="#">从基础到进阶，每一个小知识都带有小案例，学习不枯燥</a></p>
    <p><a href="#">狂神说Java系列，努力打造通俗易懂的教程</a></p>
    <p id="QQ">QQ交流群 : 664386224</p>
  </body>
</html>
```

---

## 列表

- HTML

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>列表样式</title>
      <link rel="stylesheet" href="css/style.css" />
    </head>
    <body>
      <div id="nav">
        <h2 class="title">全部商品分类</h2>

        <ul>
          <li>
            <a href="#">图书</a>
            <a href="#">音像</a>
            <a href="#">数字商品</a>
          </li>
          <li>
            <a href="#">家用电器</a>
            <a href="#">手机</a>
            <a href="#">数码</a>
          </li>
          <li>
            <a href="#">电脑</a>
            <a href="#">办公</a>
          </li>
          <li>
            <a href="#">家居</a>
            <a href="#">家装</a>
            <a href="#">厨具</a>
          </li>
          <li>
            <a href="#">服饰鞋帽</a>
            <a href="#">个性化妆</a>
          </li>
          <li>
            <a href="#">礼品箱包</a>
            <a href="#">钟表</a>
            <a href="#">珠宝</a>
          </li>
          <li>
            <a href="#">食品饮料</a>
            <a href="#">保健食品</a>
          </li>
          <li>
            <a href="#">彩票</a>
            <a href="#">旅行</a>
            <a href="#">充值</a>
            <a href="#">票务</a>
          </li>
        </ul>
      </div>
    </body>
  </html>
  ```

- css

  ```css
  #nav {
    width: 300px;
    background: rgba(245, 245, 245, 0);
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    text-indent: 2em;
    line-height: 35px;
    background: red;
  }

  ul li {
    height: 30px;
    /* list-style
      none 去掉圆点
      circle 空心圆
      decimal 序号
      square 正方形
    */
    list-style: none;
    text-indent: 1em;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    color: #000;
  }

  a:hover {
    color: orange;
    text-decoration: underline;
  }
  ```

---

## 盒子模型

![RaeLiJknrlFpfYQ](https://i.loli.net/2020/11/30/D94Uxjch8gsEJAm.jpg)

## 圆角边框

- 美化常用,比如头像都是方形的图片,用这个来把头像框变成圆形

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 300px;
        height: 200px;
        border: 5px solid red;
        border-radius: 10px 50px;
        /* 顺序: 左上,右上,右下,左下(顺时针方向) */
      }
      img {
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <div></div>
    <img src="./image/8096a62be4c90b28aac3b3c59333a81e.gif" alt="" />
  </body>
</html>

```

- 效果图

  ![coJYANqxg8vXuM2](https://i.loli.net/2020/11/30/PV6nfAx3vTCarDc.jpg)
  ![NniKVFIq9AuBhts](https://i.loli.net/2020/11/30/v7gMKXbcIkBi4wF.jpg)

---

## 阴影

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 100px;
        height: 100px;
        border: 10px solid red;
        box-shadow: 0 0 100px yellow;
      }
      img {
        border-radius: 100%;
        box-shadow: 0 0 100px yellow;
      }
    </style>
  </head>
  <body>
    <div></div>
    <img src="./image/8096a62be4c90b28aac3b3c59333a81e.gif" alt="" />
  </body>
</html>
```

- 效果图
  ![tNEI4Mk93qx5HCv](https://i.loli.net/2020/11/30/HxtyER4QW7IJa9q.jpg)
