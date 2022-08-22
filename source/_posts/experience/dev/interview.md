---
title: 🐔凉经-面试题
password: ""
tags:
  - 面试
katex: false
comments: true
aside: true
date: 2022-03-29 16:25:57
cover: https://www.helloimg.com/images/2022/08/06/Z0I1NC.png
top_img:
---

# 凉经-面试题

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-08-21 23:08:46
 * @FilePath: \Blog-private\source\_posts\experience\dev\interview.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [凉经-面试题](#凉经-面试题)
  - [列表](#列表)
  - [具体细节点](#具体细节点)
    - [collection-map](#collection-map)
    - [悲观锁-乐观锁](#悲观锁-乐观锁)
      - [上锁业务与读写性能分析](#上锁业务与读写性能分析)
      - [行锁与表锁](#行锁与表锁)
    - [排序算法](#排序算法)
      - [推荐文章](#推荐文章)
      - [快排](#快排)
      - [时间复杂度及对应情况](#时间复杂度及对应情况)
      - [稳定性及其意义](#稳定性及其意义)
  - [借物表](#借物表)

{% endpullquote %}

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 列表

1. [MetaAPP 部分笔试题](https://blog.csdn.net/weixin_38607253/article/details/114154414)
2. [什么是“堆”,"栈","堆栈","队列",它们的区别](https://www.cnblogs.com/guoxiaoyan/p/8664150.html)
3. [到底产生几个 String 对象](https://www.cnblogs.com/timecloud/p/6555868.html)
4. [浅谈 Java 中的 equals 和==](https://www.cnblogs.com/dolphin0520/p/3592500.html)
5. [字节终面：两个文件的公共 url 怎么找？](https://mp.weixin.qq.com/s/SytfnrsYqequ2M7CnSY-IA) / [小米面试：孔融找梨](https://mp.weixin.qq.com/s/TdJWFxrDAadK9UXar4WiRA)

   通过 hash 降低时间复杂度, 以及通过 hash 分治降低空间复杂度

6. [详解 TCP 三次握手、四次挥手，附带精美图解和超高频面试题](https://segmentfault.com/a/1190000022410446)
7. [图文详解两种算法：深度优先遍历（DFS）和广度优先遍历（BFS）](https://developer.51cto.com/article/614590.html)
8. [异或的用途](https://blog.csdn.net/qq_39705793/article/details/81237005)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 具体细节点

### collection-map

> ![](https://www.helloimg.com/images/2022/03/29/RqkWHh.png)
> 取自菜鸟教程并 AI 放大 <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>

---

### 悲观锁-乐观锁

对数据库中同一数据进行多个操作 (如 update),需要加锁来保证数据/操作正确 <sup id='cite_ref-4'>[\[4\]](#cite_note-4)</sup>

- 这里拿 Git 举例子:

  有一个 Git 仓库, A,B,C 三个开发者负责不同开发任务

  `悲观锁`就是保证某一时刻只能一人进行一个任务,无论谁先开始,其他人必须等到前一位完成后,在前一位的提交结果上再做操作

  `乐观锁`就是让开发者可以同起点同时进行任务,第一位完成的可以正常提交,但是后续其他人的提交会产生合并冲突,把他们打回重做(在第一位提交后的基础上)

  > ![R13Vcg.png](https://www.helloimg.com/images/2022/03/22/R13Vcg.png)

  ***

- 原理: <sup id='cite_ref-5'>[\[5\]](#cite_note-5)</sup>

  悲观锁实际上就是尝试加个排它锁,能加上锁就可以操作,不然说明数据正在被操作,等着

  乐观锁是通过添加数据版本(版本号/时间戳)来校验,提交时数据版本一致就可以提交,否则是有冲突打回

  ***

- 适用场景:

  在高并发场景下, 乐观锁会大量打回,提交率不如悲观锁

  低并发场景下, 不同任务同时操作同一数据概率低时, 乐观锁可以发挥多线程的性能优势

---

#### 上锁业务与读写性能分析

- 悲观锁

  在某一事务 for update 上锁后,其他所有线程 `不能读/写` 被锁数据直到 commit 后

  ```sql
  begin;
  Select...For Update; # InnoDB 中用于加悲观锁的命令
  update...
  commit;
  ```

- 乐观锁

  乐观锁是个概念锁, 不影响任何线程读写, 只是在更新数据/提交时校验与先前版本是否一致, 不一致的话不做更改

  ```sql
  prev_version = select version from ...
  begin;
  update...where version = prev_version;
  commit;
  ```

- 综上来看

  高频写 -> 悲观锁

  高频读 -> 乐观锁

---

#### 行锁与表锁

当 `select...where...for update` 中 where 条件用了 `index / primary key`, 就会锁行,否则会锁表 <sup id='cite_ref-6'>[\[6\]](#cite_note-6)</sup>

- 我的理解:

  含有 index / primary key 条件的查询结果一般只有一行,索引快,上锁性能损耗低

  而不含的, 查出来的结果数据量庞大, 逐行加锁性能损耗太大, 不如直接锁表

---

### 排序算法

#### 推荐文章

> [IOS 排序算法之冒泡排序、插入排序、选择排序、希尔排序](https://www.jianshu.com/p/ba57f02aa9db)\
> [IOS 排序算法之归并排序、快速排序](https://www.jianshu.com/p/de09fa026ce1) \
> [IOS 排序算法之桶排序、计数排序、基数排序](https://www.jianshu.com/p/8d2f484b803c)

---

#### 快排

- 思路一

  ```
  arr[10]={49, 38, 10, 97, 76, 13, 27, 49, 8, 65}
  ```

  1. 选择第一位 arr[0]:49 为基准数
  2. 从左往右找比它大的或相等的,从右往左找比它小的或相等的,找到了两方交换 (比如 97-8, 76-49)

  ![](https://www.helloimg.com/images/2022/03/04/GhApPX.png)

  3. 直到两方碰头结束,取碰头位置与基准数交换 (49-27); 没有的话就退出循环且不交换基准数
  4. 每轮结束后划分出左右两边子范围

  ![](https://www.helloimg.com/images/2022/03/04/GhAzng.png)

  比如第一轮确定 49 之后,分出 [27-8],[13-65]两个子范围

  第二轮确定 27 之后,分出 [8-10],[49-38]两个子范围

  ![](https://www.helloimg.com/images/2022/03/04/GhAICP.png)

  当子范围只有一个数时,不用遍历就可以直接确定位置了 (如上图框起来的数,在其旁边的数确定位置时就可以同时确定位置)

  ***

- 思路二

  [上厕所的功夫，学会了快速排序算法](https://mp.weixin.qq.com/s?__biz=Mzg5MzgwOTgzMg==&mid=2247503394&idx=1&sn=d0b4b1d86dbea63401d6f0b7723b9163&source=41#wechat_redirect)

  在某区间中取最左/最右为基准,并给定左右两边移动指针

  左边有坑的话右指针向左遍历找比基准小的, 右边有坑的话左指针向右遍历找比基准大的, 找到的话就填坑, 两指针相遇就把基准填在相遇位置, 然后子序列再排序

---

#### 时间复杂度及对应情况

面试中被问到了, 只粗浅答出来了时间复杂度, 至于如何推理/在什么场景下会出现就不知道了..

> 比如: 快排什么情况下最快, 什么情况下最慢 \
> [排序算法总结](https://www.jianshu.com/p/742d0a19d933)

---

#### 稳定性及其意义

稳定性指的是对序列中相同的值, 排序后会不会顺序改变

对于多个相同序列, 我们使用同一排序算法得到的结果`肯定相同`

如果使用不同排序算法, 或者用同一算法把序列排序多次, 结果`不一定相同`, 取决于稳定性

> 举个例子，一个班的学生已经按照学号大小排好序了，我现在要求按照年龄从小到大再排个序，如果年龄相同的，必须按照学号从小到大的顺序排列。那么问题来了，你选择的年龄排序方法如果是不稳定的，是不是排序完了后年龄相同的一组学生学号就乱了，你就得把这组年龄相同的学生再按照学号拍一遍。如果是稳定的排序算法，我就只需要按照年龄排一遍就好了。 <sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

- 另外一个题: 什么导致了快排不稳定?

  这个问题不好解释, 其实看个例子就知道了:

  ```
  5  6 2 6*  4* 8 4
  ```

  比如上面为待排序的数组, 以 5 为 pivot, 第一轮 6/4 和 6*/4*位置会调换, 然后 5/4\*位置调换

  ```
  4*  4 2 5  6* 8 6
  ```

  喏, 6/6\* 调换位置了

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: https://www.runoob.com/java/java-arraylist.html

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [如果我问你：排序算法的「稳定性」有何意义？你怎么回答？](https://bbs.huaweicloud.com/blogs/127449)

<a name='cite_note-4' href='#cite_ref-4'>[4]</a>: [什么是悲观锁和乐观锁](https://zhuanlan.zhihu.com/p/31537871)

<a name='cite_note-5' href='#cite_ref-5'>[5]</a>: [乐观锁与悲观锁深入学习](https://zhuanlan.zhihu.com/p/85803908)

<a name='cite_note-6' href='#cite_ref-6'>[6]</a>: [字节一面：select......for update 会锁表还是锁行？](https://mp.weixin.qq.com/s/5bSLAhIATj89fFQ4uAc-Ww)
