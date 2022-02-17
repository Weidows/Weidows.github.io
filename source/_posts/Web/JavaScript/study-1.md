---
title: 🐱‍🏍JavaScript学习笔记-(壹)
date: 2020-12-20 21:26:24
password: ""
tags:
  - JavaScript
  - 笔记
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/LUZ3oTm6ynYBGvN.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2020-12-20 21:26:24
 * @LastEditors: Weidows
 * @LastEditTime: 2021-09-02 15:32:44
 * @FilePath: \Blog-private\source\_posts\Web\JavaScript\study-1.md
 * @Description:
 * @!: *********************************************************************
-->

- [借鉴(抄袭 2333)](#借鉴抄袭-2333)
- [前端知识体系](#前端知识体系)
  - [css 预处理器](#css-预处理器)
  - [JavaScript 框架](#javascript-框架)
  - [UI 框架](#ui-框架)
  - [JavaScript 构建工具](#javascript-构建工具)
  - [三端统一](#三端统一)
- [Hello-World](#hello-world)
  - [内部开撸](#内部开撸)
  - [外部引入](#外部引入)
  - [type](#type)
  - [demo](#demo)
- [浏览器调试](#浏览器调试)
- [数据类型](#数据类型)
  - [变量](#变量)
  - [字符串](#字符串)
  - [布尔值](#布尔值)
  - [逻辑运算](#逻辑运算)
  - [比较运算符](#比较运算符)
  - [浮点数](#浮点数)
  - [null && undefined](#null--undefined)
  - [数组](#数组)
  - [对象](#对象)
  - [严格检查模式](#严格检查模式)
- [字符串](#字符串-1)
  - [转义字符](#转义字符)
  - [多行字符串](#多行字符串)
  - [模板字符串](#模板字符串)
  - [函数调用](#函数调用)
  - [字符串的可变性](#字符串的可变性)
  - [大小写转换](#大小写转换)
  - [子串](#子串)
- [数组](#数组-1)
  - [长度](#长度)
  - [indexOf()](#indexof)
  - [slice()](#slice)
  - [push(),pop(),unshift(),shift()](#pushpopunshiftshift)
  - [reverse(),sort()](#reversesort)
  - [concat()](#concat)
  - [join()](#join)
  - [多维数组](#多维数组)
  - [fill()](#fill)

## 借鉴(抄袭 2333)

> [【狂神说 Java】JavaScript 学习笔记](https://blog.csdn.net/pan_h1995/article/details/105974385)

## 前端知识体系

想要成为真正的“互联网 Java 全栈工程师”还有很长的一段路要走，其中前端是绕不开的一门必修课。

- HTML（结构）：决定网页的结构和内容
- CSS（表现）：设定网页的表现样式。
- JavaScript（行为）：是一种弱类型脚本语言，其源码不需经过编译，而是由浏览器解释运行，用于控制网页的行为.

  ***

### css 预处理器

- SASS：基于 Ruby ，通过服务端处理，功能强大。解析效率高。需要学习 Ruby 语言，上手难度高于 LESS。
- LESS：基于 NodeJS，通过客户端处理，使用简单。功能比 SASS 简单，解析效率也低于 SASS，但在实际开发中足够了，所以如果我们后台人员如果需要的话，`建议使用 LESS。`

  ***

### JavaScript 框架

- `JQuery`:大家熟知的 JavaScript 库，优点就是简化了 DOM 操作，缺点就是 DOM 操作太频繁，影响前端性能；在前端眼里使用它`仅仅是为了兼容 IE6，7，8`
- `Angular`:Google 收购的前端框架，由一群 Java 程序员开发，其特点是将后台的 MVC 模式搬到了前端并增加了模块化开发的理念，与微软合作，采用了 TypeScript 语法开发；对后台程序员友好，对前端程序员不太友好；最大的缺点是版本迭代不合理（如 1 代–>2 代，除了名字，基本就是两个东西
- `React`:Facebook 出品，一款高性能的 JS 前端框架；特点是提出了新概念 【虚拟 DOM】用于减少真实 DOM 操作，在内存中模拟 DOM 操作，有效的提升了前端渲染效率；缺点是使用复杂，因为需要额外学习一门【JSX】语言；
- `Vue`:一款渐进式 JavaScript 框架，所谓渐进式就是逐步实现新特性的意思，如实现模块化开发、路由、状态管理等新特性。其特点是综合了 Angular（模块化）和 React(虚拟 DOM) 的优点；
- `Axios`:前端通信框架；因为 Vue 的边界很明确，就是为了处理 DOM，所以并不具备通信能力，此时就需要额外使用一个通信框架与服务器交互；当然也可以直接选择使用 jQuery 提供的 AJAX 通信功能

  ***

### UI 框架

- `Ant-Design`：阿里巴巴出品，基于 React 的 UI 框架
- `ElementUI、iview、ice`：饿了么出品，基于 Vue 的 UI 框架
- `BootStrap`：Teitter 推出的一个用于前端开发的开源工具包
- `AmazeUI`：又叫“妹子 UI”，一款 HTML5 跨屏前端框架

  ***

### JavaScript 构建工具

- `Babel`：JS 编译工具，主要用于浏览器不支持的 ES 新特性，比如用于编译 TypeScript
- `WebPack`：模块打包器，主要作用就是打包、压缩、合并及按序加载

  ***

### 三端统一

- 混合开发（Hybrid App）
  - 云打包：HBuild -> HBuildX，DCloud 出品；API Cloud
  - 本地打包： Cordova（前身是 PhoneGap）
- 微信小程序:微信小程序 UI 开发的框架：WeUI

---

## Hello-World

### 内部开撸

- 放在 head 或者 body 里面都可以,一般放在 head 中.
  - 需要注意如果 js 对 DOM 进行操作,标签位置会影响加载顺序以导致对 DOM 的操作可能无效.
  - 比如要对 body 里的内容进行修改,js 放在 head 里就会无效(因为先加载的 js 后加载的 body),这种情况就需要 js 放在 body 的末尾.
  ```html
  <script>
    alert("HelloWorld");
  </script>
  ```

---

### 外部引入

```html
<script src="js/1.js"></script>
```

> 注意 script 不是单标签,`<script src="js/1.js" />`这样写会出错.

---

### type

```HTML
<!--不用显示定义type，也默认就是javaScript-->
  <script type="text/javascript"></script>
```

---

### demo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>

    <!--! JavaScript严格区分大小写-->
    <script>
      // 1. 定义变量   变量类型 变量名 = 变量值
      var score = 1;
      //alert(num);

      // 2. 条件控制
      // if (score > 60 && score < 70) {
      //   alert("60~70");
      // } else if (score > 70 && score < 80) {
      //   alert("70~80");
      // } else {
      //   alert("other");
      // }
    </script>
  </head>
  <body></body>
</html>
```

---

## 浏览器调试

<img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/Q8tygmLE41kB6pX.png" alt="20201220232055" />

- 调试 HTML 和 css 一般在 Element
- console 控制台一般用来调试 JavaScript.
- 检查文件和网络连接分别用 Source 和 Network
- 最后的 Application 用来存储网络数据.

> 摸摸就会了,不同特意学习.

---

## 数据类型

### 变量

```
123       //整数123
123.1     //浮点数123.1
1.123e3   //科学计数法
-99       //负数
NaN	      //not a number
Infinity  // 表示无限大
```

---

### 字符串

‘abc’ “abc”

---

### 布尔值

true，false

---

### 逻辑运算

- && 两个都为真，结果为真

- || 一个为真，结果为真

- ! 真即假，假即真

---

### 比较运算符

- = 赋值

- == 等于（类型不一样，值一样比如:`1 与"1"`，也会判断为 true）
  > 这是一个 JS 的缺陷，坚持不要使用 == 比较
- === 绝对等于（类型一样，值一样，结果为 true）

  ***

- NaN === NaN
  - // false
  - 只能通过 isNaN（NaN）来判断这个数是否是 NaN

---

### 浮点数

- 跟 C 语言一样,某些浮点数运算存在一定的精度损失.

  - 尽量避免使用浮点数运算.

  ```js
  console.log(1 / 3 === 1 - 2 / 3);
  ```

- 函数调用类似 Java

  ```js
  Math.abs(1 / 3 - (1 - 2 / 3)) < 0.00000001;
  ```

---

### null && undefined

- null 定义了但是事空的
- undefined 未定义的

---

### 数组

- 定义,跟 Java 异曲同工.

  ```js
  //保证代码的可读性，尽量使用[]
  var arr = [1, 2, 3, 4, 5, "hello", null, true];
  //第二种定义方法
  var arr = new Array(1, 2, 3, 4, 5, "hello");
  ```

- 差别
  - JavaScript 的数组内可以存放不同类型的数据.
  - 数组越界报错 undefined

---

### 对象

- 对象是大括号，数组是中括号
- 每个属性之间使用逗号隔开，最后一个属性不需要逗号
- 与 Java 相同,变量和对象名完全可以用中文(但是不建议).

- 定义

  ```js
  // Person person = new Person(1,2,3,4,5);

  var person = {
    name: "Tom",
    age: 3,
    tags: ["js", "java", "web", "..."],
  };
  ```

- 取值

  ```
  person.name
  > "Tom"

  person.age
  > 3
  ```

---

### 严格检查模式

- js 里定义变量几种方法:

  ```js
  // 默认全局变量(严禁这样写)
  i1 = 1;
  // 全局变量(不建议写法,可能引发问题)
  var i2 = 2;
  // 局部变量(建议)
  let i3 = 3;
  ```

- 严格检查

  ```js
  "use strict";
  //全局变量 (严格检查,会报错)
  i = 1;
  ```

---

## 字符串

### 转义字符

- (基本跟 Java 一样)

```
\'
\n
\t
\u4e2d    \u*** Unicode字符
\x41	Ascall字符
```

---

### 多行字符串

```js
//tab上面 esc下面
var msg = `hello
            world
            你好呀
            nihao
            `;
```

---

### 模板字符串

```js
let name = "Tom";
let age = 3;
var msg = `你好，${name} + ${age}`;
console.log(msg);
```

---

### 函数调用

```js
let str = `123`;
// str.函数名

// 例如
console.log(str.length); //字符串长度 3
console.log(str.indexOf(2)); //2的下标 1
console.log(str[1]); // 2
```

---

### 字符串的可变性

- 同 Java 的 String 对象,其本身不可变

```
str[1] = 0; // 这样会报错,因为字符串是read-only的.
```

---

### 大小写转换

- 跟 Java 一样

```js
str.toUpperCase();
str.toLowerCase();
```

---

### 子串

- `[)` 左闭右开区间

```js
student.substring(1); //从第一个字符串截取到最后一个字符串
student.substring(1, 3); //[1,3)
```

---

## 数组

```js
var arr = [1, 2, 3, 4, 5, 6]; //通过下标取值和赋值
```

### 长度

- 支持动态扩容,扩出来的元素位置是 undefined,如果缩小 length 的话,超出部分元素会丢失.

```
arr.length = 1;
arr.length = 2; // 扩容
arr.length = 0; // 缩小
```

---

### indexOf()

- 获取元素位置
- `1` 与 `"1"` 是不同元素.

```
arr.indexOf(1);
arr.indexOf("1");
```

---

### slice()

- 等同于 subString()
- 截取数组并返回子数组

```js
var arr = [1, 2, 3, 4, 5, 6];
arr = arr.slice(1, 5);
console.log(arr); // [ 2, 3, 4, 5 ]
```

---

### push(),pop(),unshift(),shift()

- 分别是尾部添加/删除,头部添加/删除.

```js
var arr = [1, 2, 3, 4, 5, 6];

arr.push("a");
console.log(arr); // [1, 2, 3, 4, 5, 6, "a"];

arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

arr.unshift("b");
console.log(arr); // [ 'b', 1, 2, 3, 4, 5, 6 ]

arr.shift();
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
```

---

### reverse(),sort()

```js
var arr = [1, 2, 3, 4, 5, 6];

arr.reverse();
console.log(arr); // [ 6, 5, 4, 3, 2, 1 ]

arr.sort();
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
```

---

### concat()

- 数组连接
- 并没有修改原来的数组,只是返回了一个新的数组.

```js
var arr1 = ["a", "b", "c"],
  arr2 = [1, 2, 3];

console.log(arr1.concat(arr2)); // [ 'a', 'b', 'c', 1, 2, 3 ]
```

---

### join()

- 打印拼接数组，使用特定的字符串连接

```js
var arr = ["a", "b", "c"];
arr.join("-"); // 并无效果
console.log(arr.join("-")); // a-b-c
```

---

### 多维数组

- 没啥花活.

```js
var arr = [
  ["a", "b", "c"],
  [1, 2, 3],
];

arr; // [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
```

---

### fill()

```js
var arr = [];
arr.length = 10;
arr.fill(0);
arr; // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
```
