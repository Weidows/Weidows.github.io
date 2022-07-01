---
title: 💔JavaScript学习笔记-(叁)
date: 2021-01-20 01:47:21
password: ""
tags:
  - JavaScript
  - 笔记
cover: https://www.helloimg.com/images/2022/02/27/GVAvuE.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-20 01:47:21
 * @LastEditors: Weidows
 * @LastEditTime: 2021-03-01 22:55:35
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\JavaScript\study-3.md
 * @Description:
 * @!: *********************************************************************
-->

- [对象](#对象)
  - [Date](#date)
  - [Json](#json)
  - [AJAX](#ajax)
- [面向对象](#面向对象)
  - [原型](#原型)
  - [类和继承](#类和继承)
- [BOM 对象](#bom-对象)
  - [window](#window)
  - [~~Navigator~~](#navigator)
  - [screen](#screen)
  - [`location`](#location)
  - [document](#document)
- [DOM 对象‼](#dom-对象)
  - [获得节点](#获得节点)
  - [更新节点](#更新节点)
  - [删除节点](#删除节点)
  - [插入节点](#插入节点)
  - [排列节点](#排列节点)
- [操作表单](#操作表单)
  - [获得表单信息](#获得表单信息)
  - [提交表单](#提交表单)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 对象

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

### Date

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

### Json

- 目前网络数据传输最主要格式.

  <img src="https://www.helloimg.com/images/2022/02/27/GV4Gir.png" alt="20210120222429" />

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

### AJAX

- 三种请求方法:

  - 原生的 js 写法 xhr 异步请求

  - jQuery 封装好的方法$(#name).ajax("")

  - axios 请求

- 挂起,后期学.

---

## 面向对象

- 与 Java 中`类-对象`有些不同.

### 原型

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

### 类和继承

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

  <img src="https://www.helloimg.com/images/2022/02/27/GVAHEb.png" alt="20210120233527" />

---

## BOM 对象

- `browser object model`

### window

- 这个对象代表浏览器窗口

  <img src="https://www.helloimg.com/images/2022/02/27/GVPiRg.png" alt="20210120234923" />

---

### ~~Navigator~~

- Navigator 封装了浏览器的信息

- 可用来判断平台和浏览器信息,但是不建议使用,这个信息<u>可被修改/伪造.</u>

<img src="https://www.helloimg.com/images/2022/02/27/GVi7lD.png" alt="20210120235844" />

---

### screen

- 屏幕信息

```js
screen.width; // 1920
screen.height; // 1080
```

---

### `location`

- location 代表当前页面的 URL 信息
- 重要,常用!

<img src="https://www.helloimg.com/images/2022/02/27/GVPI3K.png" alt="20210121000604" />

---

### document

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

  <img src="https://www.helloimg.com/images/2022/02/27/GVSGnP.png" alt="20210121101945" />

  - 劫持 cookie
    - 通过获取 cookie 就可以在另一台机器上在不输密码的情况下登录
    - 比如`Bilibili-helper`,获取一些 cookie 就可以伪造登录(确认安全情况下妥善利用)

  ***

- history
  - 前进 history.forward()
  - 后退 history.back()

---

## DOM 对象‼

- `document object model` 浏览器网页就是一个 Dom 树形结构！

- 常用操作

  - 遍历 Dom 节点：得到 Dom 节点
  - 更新：更新 Dom 节点
  - 删除：删除一个 Dom 节点
  - 添加：添加一个新的节点

  ***

### 获得节点

- 要操作一个 Dom 节点，必须要先获得这个 Dom 节点.
- 之后尽量都使用 jQuery()

```js
var h1 = document.getElementsByTagName("h1"),
  class_1 = document.getElementsByClassName("class-1"),
  app = document.getElementById("app");
var children = app.children;
```

---

### 更新节点

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

---

### 删除节点

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

---

### 插入节点

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body id="body">
    <div>1</div>
    <div>2</div>
    <div>3</div>

    <script>
      // var body = document.getElementById("body");
      // ByTagName返回的是数组,这句等同于上面
      var body = document.getElementsByTagName("body")[0];

      //创建一个新的节点
      var newP = document.createElement("p"); //创建一个p标签
      newP.id = "newP";
      newP.innerText = "Hello World";
      body.appendChild(newP);

      //创建一个script标签
      var myScript = document.createElement("script");
      myScript.setAttribute("type", "text/javascript");

      //创建一个style标签
      var myStyle = document.createElement("style"); //创建了一个空style标签
      myStyle.setAttribute("type", "text/css");
      myStyle.innerHTML = "body{background-color:chartreuse;}"; //设置标签内容

      //多种方法注入
      // body.appendChild(myStyle);
      // body.style.backgroundColor = "chartreuse";
      // document.getElementByTagName("body")[0].appendChild(myStyle);
      document.body.appendChild(myStyle);
    </script>
  </body>
</html>
```

---

### 排列节点

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body id="body">
    <div id="div-1">1</div>
    <div id="div-2">2</div>

    <script>
      var div1 = document.getElementById("div-1");
      var div2 = document.getElementById("div-2");
      document.body.insertBefore(div2, div1);
      // 这样就把div2插到div1前面了.
    </script>
  </body>
</html>
```

- 除此之外还有.replace 等等,不再赘述,用时看文档就行.

---

## 操作表单

- 表单主要用来提交信息
  - 文本框----text
  - 下拉框----select
  - 单选框----radio
  - 多选框----checkbox
  - 隐藏域----hidden
  - 密码框----password

---

### 获得表单信息

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="post">
      <p><span>用户名：</span><input type="text" id="username" /></p>
      <!--多选框的值就是定义好的value-->
      <p>
        <span>性别：</span>
        <input type="radio" name="sex" value="man" id="boy" />男
        <input type="radio" name="sex" value="woman" id="girl" />女
      </p>
    </form>

    <script>
      var input_text = document.getElementById("username");
      var boy_radio = document.getElementById("boy");
      var girl_radio = document.getElementById("girl");

      //获取输入框的值
      input_text.value;
      //修改输入框的值
      input_text.value = "Weidows";

      //对于单选框，多选框等等固定的值，boy_radio.value只能取到当前的值man/woman
      boy_radio.checked; //查看返回的结果，是否为true，如果为true，则被选中。
      girl_radio.checked = true; //赋值
    </script>
  </body>
</html>
```

- 效果

  <img src="https://www.helloimg.com/images/2022/02/27/GVLJmE.png" alt="20210124093813" />

---

### 提交表单

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <!--MD5加密工具类-->
    <script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js"></script>
  </head>
  <body>
    <!--
      表单绑定提交事件
      οnsubmit= 绑定一个提交检测的函数:true，false
      将这个结果返回给表单，使用onsubmit接收
    -->
    <form action="" method="post" onsubmit="return aaa()">
      <!--
        表单提交抓取的是带有name属性的input标签的value,不带的不会抓
      -->
      <p>
        <span>用户名：</span>
        <input type="text" id="username" name="username" required />
      </p>
      <p><span>密码：</span> <input type="password" id="password" /></p>
      <input type="hidden" id="md5-password" name="password" />

      <!--
        <button type="submit">提交</button> 与下面等效
        绑定事件 onclick 被点击
        <input type="submit" onclick="aaa()" />
      -->
      <input type="submit" />
    </form>

    <script>
      function aaa() {
        var username = document.getElementById("username");
        var pwd = document.getElementById("password");
        var md5pwd = document.getElementById("md5-password");

        /**
         * 这里可以校验判断或处理表单内容，true就是通过提交，false就是阻止提交
         * 上面username是用required来判空
         * password是用下面的if判空
         */
        if (pwd.value === "") {
          alert("请填写全.");
          return false;
        } else {
          md5pwd.value = md5(pwd.value); // 加密
          return true;
        }
      }
    </script>
  </body>
</html>
```

- 效果

  <img src="https://www.helloimg.com/images/2022/02/27/GVS5Kg.png" alt="20210126211616" />

  <img src="https://www.helloimg.com/images/2022/02/27/GVSNPg.png" alt="20210126211801" />
