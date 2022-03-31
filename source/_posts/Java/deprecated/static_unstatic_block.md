---
title: Java(非)静态代码块及其作用
date: 2020-09-04 10:49:16
password: ""
tags:
  - Java
cover: https://www.helloimg.com/images/2022/02/27/GVJmcS.png
---

<!--
 * @Author: Weidows
 * @Date: 2020-09-04 10:49:16
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:14:27
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Java\static_unstatic_block.md
-->

- [就俩文件,谨此](#就俩文件谨此)
- [Person.java](#personjava)
- [Test.java](#testjava)

## 就俩文件,谨此

图片下方给出了源代码,折叠起来了.

---

## Person.java

![UpRI1nOdso2Z4ak](https://www.helloimg.com/images/2022/02/27/GVa9vt.png)
{% hideToggle 源代码 %}

```java
/*
* @Author: Weidows
* @Date: 2020-09-04 17:39:50
* @LastEditors: Weidows
* @LastEditTime: 2020-09-07 11:11:06
* @FilePath: \Weidows\Java\src\main\java\twenty\september\new_object\Person.java
*/
package twenty.september.new_object;

/**
* ! 在new Person()时,执行顺序是
*    1.name这种成员变量的初始化
*    2.执行代码块(多个代码块会按照从上到下顺序执行)
*    3.执行构造函数
*
*  两种代码块都可以用输出语句,可以对类的成员变量做初始化操作
*/
public class Person {
  String name;
  static TestPerson tp = new TestPerson();

  public Person() {
    this.name = "张三";
    System.out.println("执行的是构造方法");
  }

  public void test() {
    System.out.println("这是Person的test方法");
  }

  // ! 非静态的代码块
  {
    System.out.println("执行的是非静态的代码块1");
  }
  {
    System.out.println("执行的是非静态的代码块2");
  }
  {
    System.out.println("执行的是非静态的代码块3");
  }

  /**
  * ! 静态代码块
  * 里面只能放/调用static变量/方法
  * static代码块在程序运行周期只能被执行一次(new多次对象时共用一个静态类变量,不能被重复调用)
  * 静态代码块运行优先于非静态代码块
  *  实际开发中常用,用来初始化类的静态对象属性(成员对象变量),比如tp那样,或者用在内部类替代构造器使用
  */
  static {
    System.out.println("执行的是静态的代码块");
    tp.age = 1;
    tp.name = "张三";
  }
}

class TestPerson {
  int age;
  String name;
}
```

{% endhideToggle %}

---

## Test.java

![Q9r36pXoBen4Hcy](https://www.helloimg.com/images/2022/02/27/GVJL6u.png)
{% hideToggle 源代码 %}

```java
/*
* @Author: Weidows
* @Date: 2020-09-04 17:42:06
* @LastEditors: Weidows
* @LastEditTime: 2020-09-07 11:10:02
* @FilePath: \Weidows\Java\src\main\java\twenty\september\new_object\test.java
*/
package twenty.september.new_object;

import java.util.Scanner;

public class Test {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    in.close();
    // new Person();
    // new Person();
    Person p = new Person() {
      /**
      * ! 这是一个匿名内部类
      * 因为这种内部类没有类名,也就无法搞一个新的构造器(用的还是原来Person的)
      * 也就是这个类初始化后的成员变量还是跟原来的Person类的一样
      *  这里就会用到代码块来初始化类的属性
      */
      { ///这里这种代码块就可以替代构造器使用
        this.name = "李四";
        /**
        * 这里无论写this.name/name/super.name都会变为"李四"
        */
      }

      @Override
      public void test() {
        System.out.println("执行的是被Override的Person");
      }
    };
    System.out.println("这个类里面的name是:\t" + p.name);
    p.test();
  }
}
```

{% endhideToggle %}

---
