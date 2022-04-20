---
title: 🍔Lambda表达式
password: ""
tags:
  - Java
  - Lambda
date: 2021-02-18 18:16:55
cover: https://www.helloimg.com/images/2022/02/27/GVEhln.jpg
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-27 16:24:21
 * @FilePath: \Blog-private\source\_posts\Java\lambda.md
 * @Description:
 * @!: *********************************************************************
-->

- [参照](#参照)
- [简单讲解](#简单讲解)
- [快速上手](#快速上手)
- [进一步](#进一步)
- [作用域](#作用域)
- [forEach](#foreach)
- [多线程](#多线程)
  - [创建新类](#创建新类)
  - [匿名内部类](#匿名内部类)
  - [Lambda](#lambda)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

> 在此文章记录了: [😍Weidows-の成长路线#lambda](../../others/LearnWay#lambda)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 简单讲解

- Lambda 是函数话编程,Java8 引入的特性,有广泛使用.

- 主要是用作解决匿名内部类 `overwrite` 的问题,替代可函数化的 `interface` 作为参数进行传递

---

## 快速上手

- 比如这里有如下代码,写线程时很常见,Runnable 是一个函数化的接口,可以用 Lambda 简化

  - `函数化接口,就是内部只有一个抽象方法的接口.`

  ```Java
  new Thread(new Runnable() { // 接口名
    @Override
    public void run() { // 方法名
      System.out.println("Thread run()");
    }
  }).start();
  ```

- 如下

  - 省略接口名和方法名

  ```Java
  new Thread(() -> System.out.println("新的线程")).start();
  ```

---

## 进一步

```Java
public class Lambda {
  public static void main(String[] args) {
    Lambda tester = new Lambda();

    // 类型声明
    MathOperation addition = (int a, int b) -> a + b;

    // 不用类型声明
    MathOperation subtraction = (a, b) -> a - b;

    // 大括号中的返回语句
    MathOperation multiplication = (int a, int b) -> {
      return a * b;
    };

    // 没有大括号及返回语句
    MathOperation division = (int a, int b) -> a / b;

    System.out.println("10 + 5 = " + tester.operate(10, 5, addition));
    System.out.println("10 - 5 = " + tester.operate(10, 5, subtraction));
    System.out.println("10 x 5 = " + tester.operate(10, 5, multiplication));
    System.out.println("10 / 5 = " + tester.operate(10, 5, division));

    // 不用括号
    GreetingService greetService1 = message -> System.out.println("Hello " + message);

    // 用括号
    GreetingService greetService2 = (message) -> System.out.println("Hello " + message);

    greetService1.sayMessage("Runoob");
    greetService2.sayMessage("Google");

  }

  private int operate(int a, int b, MathOperation mathOperation) {
    return mathOperation.operation(a, b);
  }

  /**
    10 + 5 = 15
    10 - 5 = 5
    10 x 5 = 50
    10 / 5 = 2
    Hello Runoob
    Hello Google
   */
}

interface MathOperation {
  int operation(int a, int b);
}

interface GreetingService {
  void sayMessage(String message);

  // void sayMessage1(String message, String message1); // 比如这里出现第二个抽象方法,这个接口就不是函数化接口了.无法使用lambda表达式
}
```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 作用域

```Java
public class Lambda2 {
  public static void main(String args[]) {
    /**
     * 这里的局部变量就算不声明final也可以被Lambda表达式引用
     * 但是无论声不声明,被引用后后续都不可修改,会报错
     */
    final int num = 1;

    Converter<Integer, String> s = (param) -> System.out.println(String.valueOf(param + num));

    // Lambda表达式参数不能与外部变量同名,编译报错
    // Converter<Integer, String> s1 = (num) -> System.out.println(num);

    s.convert(2); // 输出结果为 3
  }

  public interface Converter<T1, T2> {
    void convert(int i);
  }
}
```

---

## forEach

```Java
public class ForEach {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>(Arrays.asList("I", "love", "you", "too"));

    // 使用增强for循环迭代
    for (String str : list) {
      if (str.length() > 3)
        System.out.println(str);
    }

    // implement Consumer interface
    list.forEach(new Consumer<String>() {
      @Override
      public void accept(String t) {
        if (t.length() > 3)
          System.out.println(t);
      }
    });

    // Lambda implement Consumer
    list.forEach(s -> {
      if (s.length() > 3)
        System.out.println(s);
    });
  }
}
```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 多线程

- 例如我们需要一个实现 Runnable 接口的名为 `myYield`的对象

- 下面是三种方法:

---

### 创建新类

- 复杂,对于像是 Runnable 这种函数化接口,这样实现起来麻烦

```Java
public class TestYield {
  public static void main(String[] args) {
    MyYield myYield = new MyYield();

    new Thread(myYield, "a").start();
    new Thread(myYield, "b").start();
  }
}

class MyYield implements Runnable {
  @Override
  public void run() {
    System.out.println(Thread.currentThread().getName() + "线程开始执行");
    Thread.yield(); //礼让
    System.out.println(Thread.currentThread().getName() + "线程停止执行");
  }
}
```

---

### 匿名内部类

- 比上面的简单些,但还可以用 Lambda 更简化

```Java
public class TestYield {
  public static void main(String[] args) {
    Runnable myYield = new Runnable() {
      @Override
      public void run() {
        System.out.println(Thread.currentThread().getName() + "线程开始执行");
        Thread.yield(); //礼让
        System.out.println(Thread.currentThread().getName() + "线程停止执行");
      }
    };

    new Thread(myYield, "a").start();
    new Thread(myYield, "b").start();
  }
}
```

---

### Lambda

- 在会用 Lambda 情况下,代码可读性和简洁度大于匿名内部类

```Java
public class TestYield {
  public static void main(String[] args) {
    Runnable myYield = () -> {
      System.out.println(Thread.currentThread().getName() + "线程开始执行");
      Thread.yield(); //礼让
      System.out.println(Thread.currentThread().getName() + "线程停止执行");
    };

    new Thread(myYield, "a").start();
    new Thread(myYield, "b").start();
  }
}
```
