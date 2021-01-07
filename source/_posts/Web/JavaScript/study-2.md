---
title: 🐱‍JavaScript学习笔记-(贰)
categories:
  - Web
  - JavaScript
tags:
  - JavaScript
  - 笔记
cover: https://i.loli.net/2020/12/30/tifKj6dA92BVezU.png
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2020-12-30 18:09:38
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-07 11:05:38
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog-private\source\_posts\Web\JavaScript\study-2.md
 * @Description:
 * @!: *********************************************************************
-->

- [续](#续)
- [对象](#对象)
  - [调用](#调用)
  - [对象属性赋值/添加](#对象属性赋值添加)
  - [删除属性](#删除属性)
  - [判断对象是否有某属性](#判断对象是否有某属性)

# 续

> 上接[🐱‍🏍JavaScript 学习笔记-(壹)](./study-1)

---

# 对象

- JavaScript 中的所有的键都是`字符串`，值是任意对象！

```js
var person = {
  name: "Tom",
  age: 3,
  email: "123456798@QQ.com",
  score: 66,
};
```

## 调用

- 调用并不存在的属性,会提示 undefined,并不会报错.

```js
console.log(person.age); // 3
console.log(person.work); // undefined
```

## 对象属性赋值/添加

```js
person.age = 4;
console.log(person.age); // 4

// 添加一个并没有的work属性.
person.work = "student";
console.log(person.work); // student
```

## 删除属性

```js
delete person.age;
person; // { name: 'Tom', email: '123456798@QQ.com', score: 66 }
```

## 判断对象是否有某属性

```js
console.log("email" in person); // true
console.log("toString" in person); //true 继承自父类

// 判断属性是否真正属于本对象
console.log(person.hasOwnProperty("toString")); // false
```
