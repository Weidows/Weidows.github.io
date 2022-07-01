---
title: JVM内存模型
date: 2020-08-25 19:14:35
password: ""
tags:
  - Java
  - JVM
cover: https://www.helloimg.com/images/2022/02/27/GVadev.png
---

<!--
 * @Author: Weidows
 * @Date: 2020-08-25 19:14:35
 * @LastEditors: Weidows
 * @LastEditTime: 2021-12-20 21:19:30
 * @FilePath: \Blog-private\source\_posts\Java\jvm_model.md
-->

- [子父类加载](#子父类加载)
- [JVM 内存模型](#jvm-内存模型)
  - [`堆heap`:](#堆heap)
  - [`栈stack`:](#栈stack)
  - [`方法区method`:](#方法区method)
- [举个栗子](#举个栗子)
- [`重点!`](#重点)
  - [在 Student stu = new Student(); 过程中,子类对象的实例化过程:](#在-student-stu--new-student-过程中子类对象的实例化过程)
  - [Java 引用变量有两个类型:`编译时类型` && `运行时类型`](#java-引用变量有两个类型编译时类型--运行时类型)
- [虚拟方法调用例子](#虚拟方法调用例子)
- [JVM Errors](#jvm-errors)
    - [1.AWT 错误](#1awt-错误)
    - [2.JVM 错误](#2jvm-错误)
- [深浅-clone](#深浅-clone)

## 子父类加载

- 最近发现的一个知识漏洞

  > [Java 多态之 Father f=new Son();](https://www.cnblogs.com/zxcoder/p/12250210.html)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## JVM 内存模型

### `堆heap`:

所有的对象(包括定义的对象和字符串对象)

### `栈stack`:

基础数据类型,以及对象的引用(对象在堆内部的地址)

### `方法区method`:

所有的 class 和 static 变量

---

## 举个栗子

Person p = new Person();
栈里面存的就是 p,这个 p 指向堆里面 new Person()出来的那个对象地址

---

## `重点!`

### 在 Student stu = new Student(); 过程中,子类对象的实例化过程:

- `方法区`:

  1. 先加载 Person.class,然后是 Student.class (先父类后子类)

- `堆内存`:

  3. 开辟对象空间,分配地址

  4. 在对象空间对对象的属性(包括父类的属性)进行默认初始化

  5. 显示初始化父类属性

  6. 显示初始化子类属性

- `栈内存`:

  2. 申请空间,声明变量 stu

  3. 子类构造函数方法进栈

  4. 父类构造方法进栈,执行后出栈

  5. 初始化完毕后,将堆内存中的地址赋给引用变量,子类构造方法出栈

### Java 引用变量有两个类型:`编译时类型` && `运行时类型`

- 编译时类型有声明该变量是使用的类型决定
- 运行时类型由实际赋给该变量的对象决定
- 如果二者类型不一致,就出现(对象的)多态
  - 子类的对象可以替代父类的对象使用
  - 一个引用类型变量可以指向不同类型的对象
- 成员变量:不具备多态性,只看引用变量所属的类(其指向的堆内的具体对象)是否存在该成员

---

## 虚拟方法调用例子

```
Person e = new Student();
e.getInfo();
```

- 编译时 e 为 Person 类型,调用时是用的 Student 类的(动态绑定)

---

## JVM Errors

#### 1.AWT 错误

#### 2.JVM 错误

- StackOverflow
- OutOfMemory

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 深浅-clone

<img src="https://www.helloimg.com/images/2022/02/27/GVPOM5.png" alt="20211220211918" />

<img src="https://www.helloimg.com/images/2022/02/27/GVtgin.png" alt="20211220211958" />
