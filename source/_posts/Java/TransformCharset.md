---
title: 字符编码转换器
date: 2020-10-31 17:51:12
categories:
  - Java
tags:
  - Java
  - 编码
cover: https://i.loli.net/2020/11/30/iIfQXvTEkuFobNr.jpg
# top_img: https://cdn.jsdelivr.net/gh/Weidows/Images/
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:15:08
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Java\TransformCharset.md
-->

- [简介](#简介)
- [源码](#源码)

# 简介

- 这是个文件字符编码转换程序
- 只能支持文本文件,比如`.txt`/`.cpp`/`.java`等等,不支持二进制文件(二进制文件也用不到这个 2333)
- OK ,上源码,具体使用下面`main方法`里有简介

---

# 源码

- `TransformCharset.java`

```java
/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2020-10-31 14:49:51
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-02 13:33:25
 * @FilePath: \Weidows\Java\src\main\java\twenty\october\stream\TransformCharset.java
 * @Description:转换文件编码格式
 * 原理:
 *    1.把文件读入并转换格式,输出到./bufferFile这个中间文件内
 *    2.把原文件删除并把中间文件回传
 * Java对象层面的操作使单一文件改写困难,而且多对象同时操作同一文件会覆写.
 * @!: *********************************************************************
 */

// package twenty.october.stream;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class TransformCharset {
  private String path = null, charsetName_input = null, charsetName_output = null;

  private void ifFile() throws Exception {
    File file = new File(path);
    if (!file.exists()) {
      System.out.println("File/Path not found: " + path);
    } else {
      runCircle(file);
    }
  }

  /**
   * @description: 通过递归获取所有文件
   * @param {File} file
   * @return {*}
   */
  public void runCircle(File file) throws Exception {
    if (file.isFile()) {
      transformCharset(file);
    } else {
      File[] files = file.listFiles(); //获取目录下的东西
      if (files != null && files.length > 0) {
        for (File f : files) {
          runCircle(f);
        }
      }
    }
  }

  private void transformCharset(File file) throws Exception {
    BufferedReader bufferReader = new BufferedReader(
        new InputStreamReader(new FileInputStream(file.getPath()), charsetName_input));
    BufferedWriter bufferWriteFile = new BufferedWriter(
        new OutputStreamWriter(new FileOutputStream("./bufferFile"), charsetName_output));

    /// 中间变量
    char[] string = new char[1024];
    int length = 0;

    /// 把字符格式转换并传入中间文件
    while ((length = bufferReader.read(string)) != -1) {
      bufferWriteFile.write(string, 0, length);
    }
    bufferReader.close();
    bufferWriteFile.flush();
    bufferWriteFile.close();

    /// 把中间文件再回传
    BufferedReader bufferReadFile = new BufferedReader(
        new InputStreamReader(new FileInputStream("./bufferFile"), charsetName_output));
    BufferedWriter bufferWriter = new BufferedWriter(
        new OutputStreamWriter(new FileOutputStream(file.getPath()), charsetName_output));
    while ((length = bufferReadFile.read(string)) != -1) {
      bufferWriter.write(string, 0, length);
    }
    bufferReadFile.close();
    bufferWriter.flush();
    bufferWriter.close();
    new File("./bufferFile").delete();
    System.out.println("TransformCharset done:\t" + file.getPath());
  }

  private TransformCharset(String path, String charsetName_input, String charsetName_output) {
    this.path = path;
    this.charsetName_input = charsetName_input;
    this.charsetName_output = charsetName_output;
  }

  public static void main(String[] args) {
    /**
     * 程序入口:
     * path是文件/文件夹路径
     * TransformCharset()构造器第一个参数是path,第二个是文件原编码形式,第三个参数是想要改成的编码形式.
     * 对象只有一个可供调用的入口方法.isFile()
     * 完全可以有多个path,多个对象,随便玩~
     * 因为涉及IO操作,必须有try-catch,这个不能删去.
     */
    String path = "./Java/src/main/java/twenty/october/stream/1";
    TransformCharset t = new TransformCharset(path, "GB2312", "UTF-8");
    try {
      t.ifFile();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}

/**
 * ! 附:
 * Java中。GBK和GB2312都是1个汉字占2个字节，UTF-8是1个汉字占3个字节。而ISO编码则是1上汉字1个字节。
 *
 * 测试成功:
 *    UTF-8转GBK/GB2312没有问题
 *
 * 实际转化中会存在很多问题:
 *    比如UTF-8 -> GBK/GB2312 -> UTF-8 回转会有问题(或需要中间编码中转)
 *    想要转为GBK有些文件却识别为为GB2312
 *
 * 详见参考:https://www.cnblogs.com/clnchanpin/p/6892870.html
 */
```
