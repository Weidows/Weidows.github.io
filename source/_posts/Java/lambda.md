---
title: 🍔Lambda表达式
categories:
  - Java
tags:
  - Java
  - Lambda
date: 2021-02-18 18:16:55
cover: https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/src=http___cdn.zimug.com_java-lambda-expressions-tutorial.jpg&refer=http___cdn.zimug.jpg
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-19 17:19:40
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Java\lambda.md
 * @Description:
 * @!: *********************************************************************
-->

- [参照](#参照)
- [简单讲解](#简单讲解)
- [快速上手](#快速上手)
- [进一步](#进一步)
- [作用域](#作用域)
- [forEach](#foreach)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 参照

> [Java Lambda 表达式](https://www.runoob.com/java/java8-lambda-expressions.html)

> [关于 Java Lambda 表达式看这一篇就够了](https://objcoding.com/2019/03/04/lambda/)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 简单讲解

- Lambda 是函数话编程,Java8 引入的特性,有广泛使用.

- 主要是用作解决匿名内部类 `overwrite` 的问题,替代可函数化的 `interface` 作为参数进行传递

---

# 快速上手

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

# 进一步

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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 作用域

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

# forEach

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
