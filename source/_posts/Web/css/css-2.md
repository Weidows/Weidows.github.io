---
title: 🟢CSS学习笔记-(二)
date: 2020-12-20 10:22:30
tags:
  - CSS
  - 笔记
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/FDI9s7KpSGW3ELw.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2020-12-20 10:22:30
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:22:23
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\css\css-2.md
 * @Description:
 * @!: *********************************************************************
-->

- [GitHub 源码](#github-源码)
- [浮动](#浮动)
  - [元素层级分类](#元素层级分类)
  - [display](#display)
  - [float](#float)
  - [Clear](#clear)
  - [Overflow](#overflow)
  - [父级边框塌陷问题](#父级边框塌陷问题)
    - [问题](#问题)
    - [扩大父级元素](#扩大父级元素)
    - [增添空 div](#增添空-div)
    - [自动溢出](#自动溢出)
    - [添加伪类(优)](#添加伪类优)
    - [小结](#小结)
- [定位](#定位)
  - [相对定位](#相对定位)
  - [绝对定位](#绝对定位)
  - [固定定位](#固定定位)
  - [z-index](#z-index)
- [动画](#动画)
- [总结](#总结)

## [GitHub 源码](https://github.com/Weidows/Java/tree/master/Web/css)

## 浮动

### 元素层级分类

- 块级元素
  - h1~h6(markdown 中不是 )
  - p
  - div
  - ui li
- 行内元素

  - span
  - a
  - img
  - strong

- 块级元素可以包含行内元素,但反之不行.

---

### display

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!--
      display
        block 块元素
        inline 行内元素
        inline-block 行内块元素
        none 不显示
     -->
    <style>
      div {
        width: 100px;
        height: 100px;
        border: 1px solid red;
        display: inline;
      }
      span {
        width: 100px;
        height: 100px;
        border: 1px solid red;
        display: inline-block;
      }
    </style>
  </head>
  <body>
    <div>div块元素</div>
    <span>span行内元素</span>
  </body>
</html>
```

- 效果图
  ![e2tclC5Vkqm1b74](https://cdn.jsdelivr.net/gh/Weidows/Images/post/TZDOvMl9e8G6p4f.jpg)

---

### float

- float
  - left
  - right
- 浮动效果
  - (可以让元素自动排版,但是可能会使结构错位塌陷)
  - `在标准文档流之外.`
- `html`

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./style.css" />
    </head>

    <body>
      <div id="father">
        <div class="layer01">
          <img src="./images/3086109-ab66333e049109fc.webp" alt="" />
        </div>
        <div class="layer02">
          <img src="./images/3086109-e073f9a39c4bafe1.webp" alt="" />
        </div>
        <div class="layer03">
          <img src="./images/f0bcea9ca2acb59b4e97e3f9830d9c44.gif" alt="" />
        </div>
        <div class="layer04">
          浮动的盒子可以向左浮动,也可以向右浮动,直到它的外边缘碰到外层边界.
        </div>
      </div>
    </body>
  </html>
  ```

- `style.css`

  ```css
  div {
    margin: 10px;
    padding: 5px;
  }

  #father {
    border: 1px solid #000;
  }

  .layer01 {
    border: 1px dashed #f00;
    display: inline-block;
    float: left;
  }
  .layer02 {
    border: 1px dashed #00f;
    display: inline-block;
    float: left;
  }
  .layer03 {
    border: 1px dashed #0f0;
    display: inline-block;
    float: left;
  }
  .layer04 {
    border: 1px dashed #666;
    font-size: 12px;
    line-height: 23px;
    display: inline-block;
  }
  ```

- 效果图

  ![20201126004246](https://cdn.jsdelivr.net/gh/Weidows/Images/post/kJtpf73qTX1yMFg.jpg)

---

### Clear

- 清除(左/右)浮动效果,使元素像是标准文档流一样向下排布(但是并不在标准文档流).
- right
- left
- both 两侧
- none 不清除
- 两边都不能有浮动元素(图四样式)
  ```css
  .layer04 {
    clear: both;
  }
  ```
  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/svfDH412tiQGwRx.png" alt="20201205215331" />

---

### Overflow

- 溢出
- hidden 越界部分隐藏(使用多)
- scroll 越界的话显示滚动条
- auto

---

### 父级边框塌陷问题

#### 问题

- 问题就是内部的元素超出父级的边框(越界).
- float 导致漂浮元素另成一层,即使 clear 也不按照标准文档流排布.
- 像是下面这种,父级的框圈不住子级 float 的元素.

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/3VfDEqGjPYbaQMx.png" alt="20201205221642" />

- 几种解决方案参下:

---

#### 扩大父级元素

- 简单粗暴,直接把父级元素拉大,但是很拉胯.

---

#### 增添空 div

- 在漂浮元素下面(一定要是下面)添加空 div,然后设置属性 clear.

```HTML
    <div id="father">
      <div class="layer01">
        <img src="./images/3086109-ab66333e049109fc.webp" alt="" />
      </div>
      <div class="layer02">
        <img src="./images/3086109-e073f9a39c4bafe1.webp" alt="" />
      </div>
      <div class="layer03">
        <img src="./images/f0bcea9ca2acb59b4e97e3f9830d9c44.gif" alt="" />
      </div>
      <div class="layer04">
        浮动的盒子可以向左浮动,也可以向右浮动,直到它的外边缘碰到外层边界.
      </div>
      <!-- 方案二 -->
      <div id="clear"></div>
    </div>
```

```css
/* 方案二 */
#clear {
  clear: both;
  margin: 0;
  padding: 0;
}
```

- 原理就是在箭头这里设置了没有边框的空元素,然后让它的两边都不能有 float 元素,所以父级的边框框住这个空 div 的同时也框住了 float 元素.

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/8nRVkKlgtBrvI6U.png" alt="ADVVKXK0V6MX4O0GI8BE03M" />

  ***

#### 自动溢出

- 在父类里添加 `overflow` 属性
- (因为父级边框并没有设边界大小,所以其大小就是 div 可容纳的包括浮动内部元素的范围大小)

```css
#father {
  border: 1px solid #000;
  overflow: hidden;
}
```

- 效果:
  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/x9l8HK75hMS3tIO.png" alt="20201206001209" />

  ***

#### 添加伪类(优)

- 此方法类似第二个添加空 div,就是利用伪类在父类后面添加空标签后 clear

  ```css
  /* 方案四 */
  #father:after {
    content: "";
    display: block;
    clear: both;
  }
  ```

  ***

#### 小结

<img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/eO8DhqcTSmuBUYA.png" alt="20201206002751" />

---

## 定位

- `position`
  - relative
  - absolute
  - fix

### 相对定位

- `position: relative;`
  - left
  - right
  - bottom
  - top
- 注意偏移是相对那个边来说,而不是偏移向那个方向.

```css
#first {
  border: 1px dashed rgb(172, 96, 96);
  position: relative; /* 相对定位 */
  top: -20px; /* 向上偏移20px */
  left: 20px; /* 向左偏移20px */
}
```

- 元素仍在标准文档中,只不过相对原先位置做了偏移

  - 此元素的信息仍为原先位置的信息(呈现与数据不同)
  - 比如这里偏移后父级边框框的仍然是先前位置的那个元素.

    <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/xf6FoTqQU5cygvz.png" alt="20201218235557" />

- 例子

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        #box {
          width: 300px;
          height: 300px;
          padding: 10px;
          border: 1px solid currentColor;
        }
        a {
          width: 100px;
          height: 100px;
          text-decoration: none;
          background: violet;
          line-height: 100px;
          text-align: center;
          color: white;
          display: block;
        }
        a:hover {
          background: blue;
        }
        .a2,.a4{
          position: relative;
          top: -100px;
          left: 200px;
        }
        .a5{
          position: relative;
          top: -300px;
          left: 100px;
        }
      </style>
    </head>
    <body>
      <div id="box">
        <a href="#" class="a1">链接1</a>
        <a href="#" class="a2">链接2</a>
        <a href="#" class="a3">链接3</a>
        <a href="#" class="a4">链接4</a>
        <a href="#" class="a5">链接5</a>
      </div>
    </body>
  </html>
  ```

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/uRpT8YF5QIBOoqM.png" alt="20201220001521" />

---

### 绝对定位

- `position:absolute;`
- 基于上下左右进行定位.
  - 父级元素没有定位时,是相对于浏览器进行定位.
  - 父级元素定位时,是相对于父级元素进行定位.(会用到)
- 在`父级范围内偏移`(超出父级的内容不会显示)
- 原来位置不会被保留,而且不在标准文档流中.

  ***

- 例子

  ```css
  #father {
    border: 1px solid #666;
    /* 这里父级元素虽然用了相对定位了,但是并没动,子级元素用来作绝对定位. */
    position: relative;
  }
  #first {
    border: 1px dashed rgb(172, 96, 96);
    /* 相对于父级元素左端定位 */
    position: absolute;
    left: 50px;
  }
  ```

---

### 固定定位

- `position:fix;`
- 把元素固定到浏览器某个位置不动.
- 例子

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        body {
          height: 2000px;
        }
        div:nth-of-type(1) {
          width: 100px;
          height: 100px;
          background: tomato;
          /* 绝对定位 */
          position: absolute;
          right: 0;
          bottom: 0;
        }
        div:nth-of-type(2) {
          width: 50px;
          height: 50px;
          background: springgreen;
          /* 固定定位 */
          position: fixed;
          right: 0;
          bottom: 0;
        }
      </style>
    </head>
    <body>
      <div>div1</div>
      <div>div2</div>
    </body>
  </html>
  ```

- 绝对定位会随着页面滚动而移动,固定定位则不会.

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/hJnbPAH9LKIy8q4.png" alt="20201220093438" />

---

### z-index

- `z-index: 0;`
- 默认是 0,最高无限,类似 PS 的图层堆叠效果.
  - (只有使用定位效果的元素才有层级)
- 例子

  - HTML

    ```HTML
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./css/index.css" />
      </head>
      <body>
        <div id="content">
          <ul>
            <li><img src="./images/1.jpg" alt="" /></li>
            <li class="tip-text">Weidows-学习中...</li>
            <li class="tip-bg"></li>
            <li>时间: 2020年12月20日09:51:29</li>
            <li>地点: Hebau</li>
          </ul>
        </div>
      </body>
    </html>
    ```

  - css

    ```css
    #content {
      width: 720px;
      padding: 0px;
      margin: 0px;
      overflow: hidden;
      font-size: 30px;
      border: 1px solid red;
    }

    ul,
    li {
      padding: 0px;
      margin: 0px;
      list-style: none;
    }

    /* 这个的目的是让下面的子元素相对这个父级元素定位 */
    #content ul {
      position: relative;
    }

    .tip-text,
    .tip-bg {
      position: absolute;
      width: 100%;
      height: 40px;
      top: 40px;
    }

    .tip-text {
      color: aqua;
      z-index: 5;
    }

    .tip-bg {
      background: #000;
      opacity: 0.5;
    }
    ```

  - 样式

    <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/s8pAdtSjOJaKBlV.png" alt="20201220102125" />

---

## 动画

- css 一般只用来做小型动画或者渐变,复杂的一般用 JS.
- 稍作了解,需要的话网上找代码.

---

## 总结

<img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/IfeB2C4M9LuWXom.jpg" alt="20200507153758833" />
