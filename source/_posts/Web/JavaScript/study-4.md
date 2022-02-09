---
title: 👌JavaScript学习笔记-(肆)
date: 2021-01-26 21:19:27
tags:
  - JavaScript
  - 笔记
  - JQuery
cover: https://47i7-my.sharepoint.com/personal/utsuko27_bilibili_hk_cn/Documents/Pictures/bed/post/qg3OyNzScKB5aHh.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-26 21:19:27
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:23:10
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\JavaScript\study-4.md
 * @Description:
 * @!: *********************************************************************
-->

- [开头](#开头)
- [JQuery](#jquery)
  - [使用](#使用)
  - [选择器](#选择器)
  - [事件](#事件)
  - [操作 DOM](#操作-dom)
  - [Ajax](#ajax)
- [巩固](#巩固)

## 开头

- 写在一开始.
- 批判思维开场 - `JQuery` 过时了吗?
- 于是找了篇文章看看...

> [2019 年了 ，jQuery 过时了吗？](https://blog.csdn.net/wojiushiwo945you/article/details/90719714)

- 多看文章就是好,hh,这次又收获了个`美美哒分割线`,如下

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## JQuery

> [JQuery API 中文文档](https://jquery.cuishifeng.cn/)

### 使用

- JQuery 是个 JavaScript 函数库,使用方法:
  - `$(selector).action()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="../lib/jquery-3.5.1.min.js"></script>
  </head>
  <body>
    <a href="#" id="test-jquery">点我</a>

    <script>
      //选择器就是css选择器
      $("#test-jquery").click(function () {
        alert("hello,jQuery!");
      });
    </script>
  </body>
</html>
```

---

### 选择器

```js
//原生js，选择器少，麻烦不好记
//标签
document.getElementByTagName();
//id
document.getElementById();
//class
document.getElementByClassName();

//jQuery css中的选择器它全部都能用！
//标签选择器
$("p").click();
//id选择器
$("#id1").click();
//class选择器
$(".class1").click;
```

---

### 事件

- 鼠标事件

  <img src="https://47i7-my.sharepoint.com/personal/utsuko27_bilibili_hk_cn/Documents/Pictures/bed/post/DalS38jyRX9wT6V.png" alt="20210126224938" />

- 案例

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Title</title>
      <script src="../lib/jquery-3.5.1.min.js"></script>
      <style>
        #divMove {
          width: 500px;
          height: 500px;
          border: 1px solid red;
          font-size: 30px;
          text-align: center;
        }
      </style>
    </head>

    <body>
      <!--要求：获取鼠标当前的一个坐标-->
      Mouse <span id="mouseMove"></span>
      <div id="divMove">在这里移动鼠标试试</div>

      <script>
        /**
         * ! 当网页元素加载完毕之后，响应事件
         * 原型: $(document).ready(function(){});
         * 简化后的: $(function (){});
         */
        $(function () {
          $("#divMove").mousemove(function (e) {
            $("#mouseMove").text("X: " + e.pageX + "Y: " + e.pageY);
          });
        });
      </script>
    </body>
  </html>
  ```

- 展示

  <img src="https://47i7-my.sharepoint.com/personal/utsuko27_bilibili_hk_cn/Documents/Pictures/bed/post/ZeyS3BvOJYs7ouR.png" alt="20210127000346" />

---

### 操作 DOM

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../lib/jquery-3.5.1.min.js"></script>
  </head>
  <body>
    <ul id="test-ul">
      <li class="js">JavaScript</li>
      <li name="python">Python</li>
    </ul>

    <script>
      // 操作DOM文本
      $("#test-ul li[class=js]").text(); //获得值
      $("#test-ul li[class=js]").text("设置值"); //设置值
      $("#test-ul").html(); //获得值
      $("#test-ul li[name=python").html("<strong>123</strong>"); //设置值

      // 操作css
      $("#test-ul li").css({ color: "red" });

      // 控制元素显示,本质display:none
      $("#test-ul li[name=python]").hide();
      $("#test-ul li[name=python]").show();
    </script>
  </body>
</html>
```

---

### Ajax

后面有后端对接时再讲.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 巩固

1. 找一些美化比较好的网站,扒下来 HTML

2. `源码之家` 找一些小游戏,瞅瞅源码.
