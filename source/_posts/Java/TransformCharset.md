---
title: 字符编码转换器
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
 * @LastEditTime: 2020-11-30 21:36:59
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog\source\_posts\Java\TransformCharset.md
-->

# 简介

- 这是个文件字符编码转换程序
- 只能支持文本文件,比如`.txt`/`.cpp`/`.java`等等,不支持二进制文件(二进制文件也用不到这个 2333)
- OK ,上源码,具体使用下面`main方法`里有简介

---

# 源码

- `TransformCharset.java`

  ```java
  /*
  * @Author: Weidows
  * @Date: 2020-10-31 14:49:51
  * @LastEditors: Weidows
  * @LastEditTime: 2020-10-31 17:46:21
  * @FilePath: \Weidows\Java\src\main\java\twenty\october\stream\TransformCharset.java
  * @Description:转换文件编码格式
  */

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
          new OutputStreamWriter(new FileOutputStream("./bufferFile.txt"), charsetName_output));

      /// 中间变量
      char[] string = new char[1024];
      int length = 0;

      while ((length = bufferReader.read(string)) != -1) {
        bufferWriteFile.write(string, 0, length);
      }
      bufferWriteFile.flush();
      bufferWriteFile.close();
      bufferReader.close();

      /// 二轮
      BufferedReader bufferReadFile = new BufferedReader(
          new InputStreamReader(new FileInputStream("./bufferFile.txt"), charsetName_output));
      BufferedWriter bufferWriter = new BufferedWriter(
          new OutputStreamWriter(new FileOutputStream(file.getPath()), charsetName_output));
      while ((length = bufferReadFile.read(string)) != -1) {
        bufferWriter.write(string, 0, length);
      }
      bufferWriter.flush();
      bufferWriter.close();
      bufferReadFile.close();
      new File("./bufferFile.txt").delete();
      System.out.println("TransformCharset done!");
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
      * 对象只有一个可供调用的入口函数.isFile()
      * 完全可以有多个path,多个对象,随便玩~
      * 因为涉及IO操作,必须有try-catch,这个不能删去.
      */
      String path = "./Java/src/main/java/twenty/october/stream/1";
      TransformCharset t = new TransformCharset(path, "UTF-8", "GBK");
      try {
        t.ifFile();
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
  }
  ```
