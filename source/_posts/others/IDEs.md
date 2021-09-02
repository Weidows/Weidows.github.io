---
title: 😁IDE选用指北.
categories:
  - others
tags:
  - VScode
  - IDEA
  - HTML
  - CSS
  - JavaScript
  - 推荐
date: 2021-03-02 21:53:04
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210302215748.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-03-25 11:00:54
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\others\IDEs.md
 * @Description:
 * @!: *********************************************************************
-->

- [前言](#前言)
- [前端](#前端)
  - [网页服务器](#网页服务器)
  - [VScode](#vscode)
  - [IDEA](#idea)
- [Markdown](#markdown)
- [Tomcat](#tomcat)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 前言

- 开互联网前端课程了,对于工具的选用确实有些杂乱,五花八门

- 下面简单展示两款 IDE 吧--> `VScode` 与 `IDEA`

  - VScode 全称 `Visual Studio Code`,是开源免费的,有编程界最丰富的插件市场

  - IDEA 全称 `IntelliJ IDEA`,有开源免费版,也有收费版(对大型项目有更好的支持),目前口评最好的 Java 开发工具.

---

- 工具跟随需求,首先我们先探讨下具体需要它做什么?

  - 方便编写前端(HTML,CSS,JavaScript,stylus,less),框架(React,Vue,Angular)等等

  - 能架设起网页服务器(localhost:xxxx 可以访问)

  - 最好具备一定的插件扩展性.

  - 支持读写`.md`格式的 markdown 文件.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 前端

- 首先,编写方面没啥可说的,VScode 在前端/框架方面支持都是数一数二的,IDEA 的话,拿来写前端其实也相当出色.

### 网页服务器

- 教学老师用的是 MyEclipse+tomcat 架设的网页服务器,搭建时需要搞 MyEclipse,~~破解~~,配置 Tomcat(而且 Tomcat 需要 JDK)

  - 别提多头疼了!

  ***

- 我写这个文章就是为了解决这个问题

  - VScode 很多优秀扩展开箱即用网页服务器!

  - IDEA 原生支持网页服务器!

- 下面介绍怎么用:

  - 可供参考的测试 html 文件:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Title</title>
      <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <style>
        #divMove {
          width: 500px;
          height: 500px;
          border: 1px solid #ff0000;
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

---

### VScode

- 安装,汉化,之后搜下面的插件,两个都非常不错,个人更推荐第二个

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210302223844.png" alt="20210302223844" />

  ***

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210302224003.png" alt="20210302224003" />

- 然后随便打开一个.html 文件,按照文档使用就好了

  - 比如我用的第二款,右键菜单就可以直接打开网页服务器

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210302224353.png" alt="20210302224353" />

- 效果如下

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210302224509.png" alt="20210302224509" />

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210302224806.png" alt="20210302224806" />

---

### IDEA

- 直接打开一个 HTML 文件,右上角会出现开启网页服务器的小标志

  - 有什么浏览器点什么就好

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210302225318.png" alt="20210302225318" />

- 效果

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210302225450.png" alt="20210302225450" />

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## Markdown

- 废话不多说,先展示下我写博客时的样子

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210302220625.png" alt="20210302220625" />

  - VScode 与 IDEA 原生支持读写 markdown 文件,而且支持都很不错

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210302221020.png" alt="20210302221020" />

  ***

- 个人使用 VScode 写比较多,因为有很多提升效率的扩展

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## Tomcat

> 此处抽离到另一篇文章了: [🐱‍🏍Maven+Tomcat 开发 webapp.](../../tools/Tomcat)
