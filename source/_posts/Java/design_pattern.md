---
title: Java设计模式
date: 2020-09-09 22:53:55
categories:
  - Java
tags:
  - Java
  - 设计模式
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/M2NCl539nTvz6Vj.jpg
---

<!--
 * @Author: Weidows
 * @Date: 2020-09-09 22:53:55
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:07:54
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Java\design_pattern.md
-->

- [单例设计模式](#单例设计模式)

## 单例设计模式

- 设计目的:
  - 当多个程序读取同一个文件的数据时,可以把配置文件封装为对象,为了使得所有程序获取的是同一个对象的数据,那么就需要保证该对象在内存中是唯一的
- 设计方法:

  1. 不开放其他程序实例化此对象的权限

  2. 在本类中实例化私有对象

  3. public 方法来使其他程序获取此对象数据

  4. 因为 new 对象需要构造器初始化,所以令构造器 private,其他程序就无法 new 对象了

- 代码实现:

```
/**
* 这种会在初始化时就创建好了静态类成员对象
*/
class Single {

  private Single() {
  } //私有化构造函数。

  private static Single s = new Single(); //创建私有并静态的本类对象。

  public static Single getInstance() { //定义公有并静态的方法，返回该对象。
    return s;
  }

}


/**
* 这种初始化时没调用构造器,对象只是null,在调用getInstance()方法时才会创建对象(懒加载)
*/
class Single2 {

  private Single2() {
  }

  private static Single2 s = null;

  public static Single2 getInstance() {

    if (s == null)

      s = new Single2();

    return s;

  }

}
```
