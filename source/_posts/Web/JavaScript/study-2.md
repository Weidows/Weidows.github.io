---
title: 🐱‍JavaScript学习笔记-(贰)
date: 2020-12-30 18:09:38
categories:
  - Web
  - JavaScript
tags:
  - JavaScript
  - 笔记
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/tifKj6dA92BVezU.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2020-12-30 18:09:38
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:22:44
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\JavaScript\study-2.md
 * @Description:
 * @!: *********************************************************************
-->

- [续](#续)
- [对象](#对象)
  - [调用](#调用)
  - [对象属性赋值/添加](#对象属性赋值添加)
  - [删除属性](#删除属性)
  - [判断对象是否有某属性](#判断对象是否有某属性)
- [流程控制](#流程控制)
  - [基本](#基本)
  - [forEach 循环](#foreach-循环)
  - [for-in 循环](#for-in-循环)
  - [for-of 循环](#for-of-循环)
- [Map & Set](#map--set)
  - [Map](#map)
  - [Set](#set)
- [函数](#函数)
  - [定义方式一](#定义方式一)
  - [定义方式二](#定义方式二)
  - [参数传递问题](#参数传递问题)
  - [变量作用域](#变量作用域)
  - [全局变量/函数](#全局变量函数)
  - [函数传递](#函数传递)
  - [方法](#方法)

## 续

> 上接[🐱‍🏍JavaScript 学习笔记-(壹)](../study-1)

---

## 对象

- JavaScript 中的所有的键都是`字符串`，值是任意对象！
- JavaScript 中定义对象用`{}`,定义数组用`[]`.

```js
var person = {
  name: "Tom",
  age: 3,
  email: "123456798@QQ.com",
  score: 66,
  eat: function () {},
};
```

---

### 调用

- 调用并不存在的属性,会提示 undefined,并不会报错.

```js
console.log(person.age); // 3
console.log(person.work); // undefined
```

---

### 对象属性赋值/添加

```js
person.age = 4;
console.log(person.age); // 4

// 添加一个并没有的work属性.
person.work = "student";
console.log(person.work); // student

//添加函数
person.run = function () {
  // person.run() = function ()这样写不对
  console.log("run");
};
```

---

### 删除属性

```js
delete person.age;
// delete person.eat(); 这样写是错的
delete person.eat;

person; /**
{ name: 'Tom', 
  email: '123456798@QQ.com', 
  score: 66, 
  work: 'student', 
  run: [λ] }
 */
```

---

### 判断对象是否有某属性

```js
console.log("email" in person); // true
console.log("toString" in person); //true 继承自父类

// 判断属性是否真正属于本对象
console.log(person.hasOwnProperty("toString")); // false
```

---

## 流程控制

### 基本

- 像是 if-else,for,while 跟 Java 一模一样.
- 遍历`对象用for-in`,遍历`数组用for-of`
  > 具体分析参见 [javascript 总 for of 和 for in 的区别？](https://segmentfault.com/q/1010000006658882)
- 初始化数组

  ```js
  var age = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  ```

---

### forEach 循环

- 内部是匿名函数.

```js
age.forEach(function (element, index, array) {
  // element: 指向当前元素的值
  // index:   指向当前索引
  // array:   指向Array对象本身
  console.log(element);
});
// [9, 8, 7, 6, 5, 4, 3, 2, 1]
```

---

### for-in 循环

- 与 Java 不同,java 给的是数组内指定元素的克隆体,JavaScript 给的是指定元素的索引下标.
- 跟 for 循环差别只在于数组大小是否可知.

```js
for (let index in age) {
  console.log(age[index]);
}
// [9, 8, 7, 6, 5, 4, 3, 2, 1]
```

---

### for-of 循环

- 与 Java 的 for-each 循环一样.
- 遍历数据而非 index.

```js
for (let num of age) {
  console.log(num); // 9, 8, 7, 6, 5, 4, 3, 2, 1
}
```

---

## Map & Set

### Map

- 通过 key-value 存储数据
  - key 是字符串,value 是任意数据.
  - 跟 Java 类似.

```js
// var name = ["Tom", "Jack", "haha"],
//   score = [100, 90, 80];

// 适用于创建这种索引关系
var map = new Map([
  ["Tom", 100],
  ["Jack", 90],
  ["haha", 80],
]); // Map { 'Tom' => 99, 'Jack' => 90, 'haha' => 80 }

// 获取value
console.log(map.get("Tom")); // 100
// set() 新增或修改value
console.log(map.set("Tom", 99).get("Tom")); // 99
// 删除
map.delete("Tom"); // true
// has
console.log(map.has("Tom")); // false

console.log(map); // Map { 'Jack' => 90, 'haha' => 80 }
```

---

### Set

- 无序不重复,Set 和 Map 类似，Set 只存储 key，且 key 不重复。

```js
var set = new Set([
  ["Tom", 100],
  ["haha", 80],
  ["haha", 80],
  [],
  [],
  1,
  1,
  "1",
  2,
  NaN,
  NaN,
  {},
  {},
]);

set; /*
  Set {
    [ 'Tom', 100 ], 
    [ 'haha', 80 ], 
    [ 'haha', 80 ], 
    [], 
    [],               // 即使数组内部内容一样或为空,也会视为不同key
    1, 
    '1',              // 数值与字符串不同
    2, 
    NaN,              // Set 内 NaN===NaN
    {}, 
    {},               // 跟数组一样,视为不同对象
    ... }
*/

set.add(3).delete(3);
console.log(set.has(3)); // false
```

---

## 函数

如果没有执行 return，函数执行完也会返回结果，结果是 `undefined`

### 定义方式一

```js
function abs(x) {
  let ret;
  if (x >= 0) {
    ret = x;
  } else {
    ret = -x;
  }
  return ret;
}

console.log(abs(-10)); // 10
```

---

### 定义方式二

- 好怪哦,不过跟上面等价(推荐用上面那种)

- 这是 Js 一个特性,函数体与函数名分离,函数名实际上就是那个变量`abs`,它指向后面的函数体
  - 关键字`function`是用来定义函数体的,`var`用来定义变量

```js
var abs = function (x) {
  let ret;
  if (x >= 0) {
    ret = x;
  } else {
    ret = -x;
  }
  return ret;
};

console.log(abs(-10)); // 10
```

- function(x){…}是一个匿名函数,把结果赋值给 abs，通过 abs 间接取函数返回值.

---

### 参数传递问题

- 利用关键字 argument ,它是函数传入的参数数组

- 比如传入的参数为空或者非法.

  ```js
  var abs = function (x) {
    if (arguments.length === 0) console.log("无参数传入.");
    else if (typeof x != "number") throw "参数不对.";
    let ret;
    if (x >= 0) {
      ret = x;
    } else {
      ret = -x;
    }
    return ret;
  };

  /**
   * 无参数传入.
   * NaN
   */
  console.log(abs());
  /**
   * 参数不对.
   * 函数和程序直接停止,"参数不对"是报错,不是输出
   */
  console.log(abs("123"));
  ```

- 有时传入的参数不定,缺失的话可以通过上面方法解决,如果多余呢?

  - 通过`...`解决(Java 也有类似的)
  - 可变参数

  ```js
  function func(a, b, ...c) {
    console.log(a + b);
    console.log(c);
  }

  /**
   * 123456
   * [ 7, 8, 9 ]
   */
  func("123", "456", 7, 8, 9);
  ```

---

### 变量作用域

- 跟 Java 一模一样.

- 比如

  ```js
  function A() {
    var x = 1;

    function B() {
      var x = 2;
      console.log(x); // 2
    }
    B();

    console.log(x); // 1
  }

  A();
  ```

  ***

- 自动提升作用域

  ```js
  var x = "x" + y;
  console.log(x); // xundefined
  var y = "y";
  ```

  - 相当于下面的,程序自动提升了 y 的定义,但无法提升 y 的赋值,所以 x 也无法定义.

  ```js
  var y;
  var x = "x" + y;
  console.log(x); // xundefined
  y = "y";
  ```

  ***

- 另外,`const`也是 ES6 才引入的

  - 定义常量,不可更改.

  ***

- 局部作用域

  - ES6 引入,建议用`let`定义局部作用域的变量以免冲突.

  ```js
  for (var index_1 = 0; index_1 < 10; index_1++) {
    console.log(index_1);
  }
  for (let index_2 = 0; index_2 < 10; index_2++) {
    console.log(index_2);
  }
  console.log(index_1); // 10
  console.log(index_2); // index_1 is not defined
  ```

---

### 全局变量/函数

- 所有的全局变量/函数是绑定在 windows 对象上的(浏览器中,如果是 node 中就不行)

  ```js
  //全局变量
  var x = "abc";

  console.log(x);
  console.log(window.x);
  alert(x);
  window.alert(x);
  ```

- 这就会导致一个问题:多 Js 文件执行时使用了同名的全局变量会产生冲突

  - 为了解决这冲突,我们把代码放进自己的命名空间中

  ```js
  // 全局命名空间
  var Weidows = {};

  // 使用命名空间定义全局变量(实际概念就是套了层壳)
  Weidows.name = "Weidows";
  Weidows.age = "21";
  ```

  - 后面 `JQuery` 就是做这个用的.

---

### 函数传递

- 通过[定义方法二](#定义方式二)这种,了解到函数和变量实际是互通的

- 与 Java 不同,像是 C 里面的函数指针,函数名与函数体是分离的.

- 所以以下赋值成立

```js
function func_1() {
  console.log("这里是func.");
}

var func_2 = func_1;
func_2(); // 这里是func.
```

---

### 方法

- 定义在对象里的函数

  ```js
  var Weidows = {
    name: "Weidows",
    birth: 2000,
    age: function () {
      let now = new Date().getFullYear();
      return now - this.birth;
    },
  };
  /**
   * [λ: age]
   * 注意调用方法的格式
   */
  console.log(Weidows.age); // [λ: age]
  console.log(Weidows.age()); // 21
  ```

- 利用`this`和`apply()`实现函数和方法的恰当调用.

  - JS 中可以通过`apply()`控制 this 的指向

  ```js
  function getAge() {
    let now = new Date().getFullYear();
    return now - this.birth;
  }

  var Weidows_1 = {
    name: "Weidows",
    birth: 2000,
    // age: getAge(),  这样写实质age是getAge()执行后的返回值
    age: getAge, // 这样含义是age指向getAge()函数体
  };

  var Weidows_2 = {
    name: "Weidows",
    birth: 2000,
    age: getAge,
  };

  //执行
  console.log(Weidows_1.age()); // 21
  console.log(Weidows_2.age()); // 21
  // console.log(getAge()); // Cannot read property 'birth' of undefined
  console.log(getAge.apply(Weidows_1, [])); // 21
  console.log(getAge.apply(Weidows_2, [])); // 21
  // 这里apply含义就是调用getAge()函数,并让this指向Weidows_2对象,传入getAge的参数在[]数组里,为空.
  ```
