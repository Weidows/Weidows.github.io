---
title: 匿名对象 && 使用
date: 2020-09-10 17:34:47
password: ""
tags:
  - Java
  - 对象
cover: https://www.helloimg.com/images/2022/02/27/GVJorc.png
---

<!--
 * @Author: Weidows
 * @Date: 2020-09-10 17:34:47
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:07:38
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Java\anonymous_object.md
-->

- [匿名对象一 (Test.java)](#匿名对象一-testjava)
- [匿名对象二 (Circle.java)](#匿名对象二-circlejava)

## 匿名对象一 (Test.java)

![anonymous_object_1](https://www.helloimg.com/images/2022/02/27/GVa3Xz.png)

<details>

```java
package twenty.september.anonymous_object;

public class Test {
int count = 0;

public void test(int count) {
System.out.println("这是个测试" + count);
}

public static void main(String[] args) {
    /**
    * 这里new了一个匿名对象,可以直接调用此对象的方法.
    * 如果一个对象只需要进行一次方法调用,可以使用匿名对象
    * 常使用匿名对象作为实参传递给一个方法调用
    */
    new Test().test(new Test().count);
  }
}

```

</details>

---

## 匿名对象二 (Circle.java)

![anonymous_object_2](https://www.helloimg.com/images/2022/02/27/GVEDIv.png)

<details>

```java
package twenty.september.anonymous_object;

public class Circle {
  private double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  public double getArea() {
    double ret = 3.14 * radius * radius;
    return ret;
  }
  public static void main(String[] args) {
    /**
    * 可以同时使用构造器初始化类属性然后再调用方法
    */
    System.out.println(new Circle(5).getArea());
  }
}
```

</details>
