---
title: Javadoc使用 && 命名规范
date: 2020-10-25 17:36:12
categories:
  - Java
tags:
  - Java
  - Javadoc
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/iHZCgtN4OpsuDj5.jpg
top_img:
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:08:44
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Java\Javadoc.md
-->

- [文档注释方法](#文档注释方法)
- [常用标签](#常用标签)
- [常用@](#常用)
- [Generate](#generate)
    - [在命令行当前目录生成 JavaDoc 文档,注意存放目录最好是空的,不然会....一团乱麻!](#在命令行当前目录生成-javadoc-文档注意存放目录最好是空的不然会一团乱麻)
- [Java 命名规范](#java-命名规范)

## 文档注释方法

- 在类/方法上面写个`/**`就会出来
- 文档注释会在代码提示中显示,也可以用 Javadoc 生成文档
- 其中的标签不用闭合,比如写`<p>`的话用不着写`</p>`,但是写上也不会错

---

## 常用标签

- `<p>` Passage 段落标签

---

## 常用@

- `@author`
- `@version`
- `@since`
- `@see`
- `@link`
- `@code`
- `@param`
- `@return`
- `@exception`
- `@throws`

---

## Generate

#### 在命令行当前目录生成 JavaDoc 文档,注意存放目录最好是空的,不然会....一团乱麻!

```
javadoc -encoding UTF-8 -charset UTF-8 Path/文件名
```

---

## Java 命名规范

1. 见名知意

   1. 不要用中文/拼音命名

   2. 即使命名不规范也可能不会出 bug,但是问题很大!

2. 驼峰命名(变量,方法)
3. 类,首字母大写,驼峰命名
4. 包,全小写命名+下划线
5. 常量/枚举,全大写命名+下划线
