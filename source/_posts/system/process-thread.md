---
title: 🤷‍♂️进程线程-CPU-并行并发大杂碎!
password: ""
tags:
  - 操作系统
  - 多线程
  - 进程
  - CPU
date: 2021-03-05 21:08:33
cover: https://www.helloimg.com/images/2022/02/27/GVsZaq.png
top_img:
---

# 进程线程-CPU-并行并发大杂碎!

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-04-20 23:43:50
 * @FilePath: \Blog-private\source\_posts\system\process-thread.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [进程线程-CPU-并行并发大杂碎!](#进程线程-cpu-并行并发大杂碎)
  - [引子](#引子)
  - [进程与线程](#进程与线程)
    - [进程](#进程)
    - [线程](#线程)
  - [几核几线程](#几核几线程)
  - [并行与并发](#并行与并发)
  - [借物表](#借物表)

{% endpullquote %}

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 引子

- 谈操作系统会了解到`进程与线程`
- 谈 CPU 会听到`几核几线程`
- 谈 CPU 调度会存疑`并行与并发`

---

## 进程与线程

- 简单层级关系: `应用程序->一至多个进程->一至多个线程`

> 线程是调度的基本单位，而进程则是资源拥有的基本单位。

### 进程

<img src="https://www.helloimg.com/images/2022/02/27/GVsaG1.png" alt="20210305222645" />

---

- 在前台显示的(有图形窗口的)程序,叫做`"应用"`

  - 比如 IDEA,酷狗,Edge,QQ 这些都是应用.
  - 同一个程序,打开多个窗口,其产生的进程也会被归到一个应用下
    - 比如打开两个 VScode 窗口,其产生的新进程也会列在 VScode 栏下,并不会出现两个 VScode 栏
    - 另外,新建窗口不一定会产生新进程(比如打开两个 IDEA 窗口,IDEA 栏下的进程数没变)
  - 关闭窗口后,应用要么被全然关闭,要么转入后台进程
    - 就比如 QQ 可以选择整个关掉或者后台挂着,后台挂着时 QQ 不会在`"应用"`列表出现,会被归到后台进程

  ***

- 每个应用会有一个至多个进程

  - 至少有一个`"应用"`进程和若干`"后台进程"`.
  - 比如 IDEA 下面的一排,六个进程
  - 一个进程 = `.exe`之类的可执行文件 + 运行时数据
    - 也就是说同一个程序运行在不同数据环境下会产生不同进程(比如 IDEA 下的两个 TabNine 进程)

  ***

- 不同进程之间数据隔离

  - 也就是说一个进程挂掉只影响这个进程,对其他进程无影响
  - 比如浏览器,`一个页面就是一个进程`(如果两个页面相同会共享同一进程),脚本插件另行计算,一个页面崩溃一般只影响这个页面.

  ***

- 后台进程

  - 现在我们可以理解没有界面的程序运行时肯定会被归到`后台进程`
    - 比如 `aria2c.exe`,没有界面,只可能出现在后台进程.
  - 但是,有些程序会`两面吃`,比如 vscode 运行时,`"应用"`栏有它,`后台进程`栏也有它!
    - "应用"栏会归并对当前程序窗口有影响的进程,没影响的叫做`"守护进程"`
    - 也就是说这些后台进程有他们的作用,但是这作用并不依赖于程序运行(比如说发光发热,对程序没影响,但这个进程有它存在的意义),它们就被归到`后台进程`去了.

---

### 线程

- 轮到线程了:

  <img src="https://www.helloimg.com/images/2022/02/27/GVs14K.png" alt="20210305231739" />

- 这个比较简单了,线程是进程内部的,如上图两个 aria2c 进程中,分别有一个和三个线程

- 一个进程至少一个线程.

  - 不同线程之间共享同一个进程内的资源.

  - 一个线程崩溃会牵连所有,整个进程会崩溃.

  ***

- 多线程主要为了`提升性能`

  - 比如一个进程只有一个线程,那它只能同时靠一个 CPU 逻辑处理器处理

  - 如果是多线程,比如 9 个线程,那么在 8 个逻辑处理器的 CPU 上,这个进程可以占有 8 个逻辑处理器的算力,提升运行速度

- 如果线程数大于 CPU 逻辑处理器数,其他的线程排队等待.

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 几核几线程

<img src="https://www.helloimg.com/images/2022/02/27/GVsFDT.png" alt="20210305210405" />

- 如上图,一个插槽对应一块结结实实的 CPU

  - 这块 CPU 里面被划分出四个隔离的核心 -> `四核`

  - 每个核心,又可以分为两个逻辑处理器,一个逻辑处理器只能同时处理一个任务(线程) -> `八线程`

  - 上面八个线形图就是每个逻辑处理器的使用率

  ***

- 运行速度标的是每个核心(core)而非逻辑处理器(processor)的速度

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 并行与并发

- 实际上,网上对这两个词义一定程度上在混用~

  <img src="https://www.helloimg.com/images/2022/02/27/GVs30b.png" alt="20210306000528" />

- 有个词叫`"并行不悖"`,记住这个就不会弄混了.

- `多进程并发,多线程并行.`

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

> [进程和线程基础知识全家桶，30 张图一套带走](https://mp.weixin.qq.com/s?__biz=Mzk0NzE4NTk4Ng==&mid=2247486625&idx=1&sn=f35d340727b0e8e23f82ff7c5182c893&chksm=c37bfc8cf40c759a084effb4c5b253ad50ad0be02b8b8dea073fa333ca6adefce6ef8cb6db9f&mpshare=1&scene=23&srcid=0305mrfN5sGJ1jI9aPxUFqjU&sharer_sharetime=1614936389002&sharer_shareid=ff6bb8cfd138294e80df076b8b76232d#rd)

> [基础知识：线程，进程。多进程，多线程。并发，并行的区别](https://blog.csdn.net/cherrycheng_/article/details/51384657)

> [cpu 核心数与线程数](https://zhuanlan.zhihu.com/p/86855590)

> [为什么 Chrome 在任务管理器里有 4 个进程？](https://blog.51cto.com/14462329/2427415)

> [程序，进程，线程的区别和联系](https://blog.csdn.net/a3192048/article/details/82085422?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_baidulandingword-1&spm=1001.2101.3001.4242)
