---
title: 💔JavaScript学习笔记-(叁)
categories:
  - Web
  - JavaScript
tags:
  - JavaScript
  - 笔记
cover: https://i.loli.net/2021/01/20/lu7MVrgdPExk6Rc.png
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-20 01:47:21
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-22 01:07:49
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\JavaScript\study-3.md
 * @Description:
 * @!: *********************************************************************
-->

# 对象

- 几种标准对象

```js
console.log(typeof 123); // number
console.log(typeof "123"); // string
console.log(typeof true); // boolean
console.log(typeof NaN); // number
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof Math.max); // function
console.log(typeof undefined); // undefined
```

---

## Date

```js
var time = new Date();

// 输出
console.log(time); //  Wed Jan 20 2021 21:21:32 GMT+0800 (中国标准时间)
console.log(time.getFullYear()); // 2021
console.log(time.getMonth()); // 0  (注意这个月份是0~11,不是1~12)
console.log(time.getDate()); // 20
console.log(time.getHours()); // 21
console.log(time.getMinutes()); // 19
console.log(time.getSeconds()); // 4

/**
 * 1611148746727
 * 返回的是自1970年开始计时,到现在为止的毫秒数
 * 这就产生了2038问题,因为到那时候这个计数单位就溢出了,成为无效的负数
 */
console.log(time.getTime());

//记录时间,通过时间戳转换.
var log_time = new Date(1611148746727);
console.log(log_time); //  Wed Jan 20 2021 21:19:06 GMT+0800 (中国标准时间)

// 转换格式
console.log(log_time.toLocaleString()); //  2021/1/20下午9:19:06
console.log(log_time.toUTCString()); //  Wed, 20 Jan 2021 13:19:06 GMT
```

---

## Json

- 目前网络数据传输最主要格式.

  <img src="https://i.loli.net/2021/01/20/cOoznNlKMv7yLd6.png" alt="20210120222429" />

- Json 的使用

  ```js
  var Weidows = {
    name: "Weidows",
    age: 21,
    gender: "男",
    work: "student",
  };

  /**
   * 转换为Json格式
   *  {"name":"Weidows","age":21,"gender":"男","work":"student"}
   */
  var JsonWeidows = JSON.stringify(Weidows);
  console.log(JsonWeidows);

  /**
   * 解析Json
   *  { name: 'Weidows', age: 21, gender: '男', work: 'student' }
   */
  var Weidows_2 = JSON.parse(JsonWeidows);
  console.log(Weidows_2);
  ```

---

## AJAX

- 三种请求方法:

  - 原生的 js 写法 xhr 异步请求

  - jQuery 封装好的方法$(#name).ajax("")

  - axios 请求

- 挂起,后期学.

---

# 面向对象

- 与 Java 中`类-对象`有些不同.

## 原型

- 通过原型创建对象

  ```js
  var people = {
      name: "people",
      run: function () {
        console.log(this.name + "Running...");
      },
    },
    bird = {
      name: "bird",
      fly: function () {
        console.log(this.name + "Flying...");
      },
    },
    xiaoming = {
      name: "小明",
    };

  xiaoming.__proto__ = people;
  xiaoming.run(); //  小明Running...
  xiaoming.__proto__ = bird;
  xiaoming.fly(); //  小明Flying...

  // 给原型新增方法
  xiaoming.prototype.hello = function () {
    console.log("Hello.");
  };
  ```

- 太恶心了,所以 ES6 引入 `class`,参下.

---

## 类和继承

- 跟 Java 几乎一模一样了!

```js
class Student {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log("hello.");
  }
}

class XiaoStudent extends Student {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  getGrade() {
    console.log(this.grade);
  }
}

var xiaoming = new Student("xiaoming"),
  xiaohong = new XiaoStudent("xiaohong", 1);

console.log(xiaoming); //  Student { name: 'xiaoming' }
console.log(xiaohong); //  XiaoStudent { name: 'xiaohong', grade: 1 }
```

- 原理上还是利用原型

  - 原型链结构

  <img src="https://i.loli.net/2021/01/20/KwIm1Ac7azCg9jO.png" alt="20210120233527" />

---

# BOM 对象

- `browser object model`

## window

- 这个对象代表浏览器窗口

  <img src="https://i.loli.net/2021/01/20/7ZRyrIQuXA4vxzL.png" alt="20210120234923" />

---

## ~~Navigator~~

- Navigator 封装了浏览器的信息

- 可用来判断平台和浏览器信息,但是不建议使用,这个信息<u>可被修改/伪造.</u>

<img src="https://i.loli.net/2021/01/20/zQsycWFrXZjeMxH.png" alt="20210120235844" />

---

## screen

- 屏幕信息

```js
screen.width; // 1920
screen.height; // 1080
```

---

## `location`

- location 代表当前页面的 URL 信息
- 重要,常用!

<img src="https://i.loli.net/2021/01/21/15STonbQRlxi9O8.png" alt="20210121000604" />

---

## document

- document 代表当前的页面，HTML DOM 文档树
- 获取/更改标题

  ```js
  document.title; // "【狂神说Java】JavaScript学习笔记_pan_h1995的博客-CSDN博客"

  document.title = "Weidows"; // "Weidows"
  ```

  ***

- 获取具体的文档树节点

  ```js
  var app = document.getElementById("app");
  ```

  ***

- 获取 cookie

  <img src="https://i.loli.net/2021/01/21/uN3HXrPyiwJT9Cn.png" alt="20210121101945" />

  - 劫持 cookie
    - 通过获取 cookie 就可以在另一台机器上在不输密码的情况下登录
    - 比如`Bilibili-helper`,获取一些 cookie 就可以伪造登录(确认安全情况下妥善利用)

  ***

- history
  - 前进 history.forward()
  - 后退 history.back()

---

# DOM 对象‼

- `document object model` 浏览器网页就是一个 Dom 树形结构！

- 常用操作

  - 遍历 Dom 节点：得到 Dom 节点
  - 更新：更新 Dom 节点
  - 删除：删除一个 Dom 节点
  - 添加：添加一个新的节点

  ***

- 获得 DOM 节点

  - 要操作一个 Dom 节点，必须要先获得这个 Dom 节点.
  - 之后尽量都使用 jQuery()

  ```js
  var h1 = document.getElementsByTagName("h1"),
    class_1 = document.getElementsByClassName("class-1"),
    app = document.getElementById("app");
  var children = app.children;
  ```

  ***

- 更新节点

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body id="body">
      <div>123</div>

      <script>
        var body = document.getElementById("body");
        // 会覆盖掉所有文档树,比如上面的div被覆写
        body.innerHTML = "<em>这里是body标签.</em>";

        // 修改css样式
        body.style.color = "red";
        body.style.fontSize = "20px";
      </script>
    </body>
  </html>
  ```

  ***

- 删除节点

  - 需要先获取父节点,在通过父节点删除目标子节点.

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <!-- 删除这个 -->
      <div id="here">123</div>

      <script>
        var self = document.getElementById("here");
        var father = self.parentElement;
        father.removeChild(self);

        // 动态删除,删除后子节点index会自动改变.
        console.log(father.children[0]); // <div>1</div>
        father.removeChild(father.children[0]);
        console.log(father.children[0]); // <div>2</div>
      </script>
    </body>
  </html>
  ```

- 插入节点
