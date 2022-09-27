---
title: 🏗️企业管理与架构设计
password: ""
tags:
  - 设计
  - 架构
  - 公司
  - 管理
  - doing
katex: true
comments: true
aside: true
date: 2021-11-28 23:18:29
cover: https://www.helloimg.com/images/2022/02/27/GVmo5Y.png
top_img:
---

# 企业管理与架构设计

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-09-26 00:29:35
 * @FilePath: \Blog-private\source\_posts\design\architecture.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [企业管理与架构设计](#企业管理与架构设计)
  - [管理设计](#管理设计)
    - [开源软件-付费服务的选择](#开源软件-付费服务的选择)
    - [少开会](#少开会)
    - [经典例子](#经典例子)
      - [胖布丁游戏](#胖布丁游戏)
      - [皇权制衡](#皇权制衡)
  - [架构设计](#架构设计)
    - [目录结构问题](#目录结构问题)
    - [互联网后台架构](#互联网后台架构)
  - [产品设计](#产品设计)
  - [借物表](#借物表)

{% endpullquote %}

本章起草于一篇关于企业选择 '开源软件 or 付费服务' 的讨论 <sup id='cite_ref-01'>[\[1\]](#cite_note-01)</sup>

思考如何进行组织/企业化的管理, 以及应对 ToB/ToC 产品的人员管理/技术架构 `起底设计`

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 管理设计

### 开源软件-付费服务的选择

实际上就是 `人力资源成本-服务价值` 之间的衡量

- 开源软件弊病:

  配置,维护,摸索学习的成本高

  开发者说不定拍拍屁股 -> `deprecated`

  资源调度方面,兼容性差: 比如想搞一个企业级图床,需要购置大宽带,服务器,cdn,硬盘等; 自己搞性价比低不稳定,不如直接上云服务.

  > This is where the maxim of open source being 'free as in puppies not free as in beer/lunch' comes from.<sup id='cite_ref-01'>[\[1\]](#cite_note-01)</sup>

  `免费的是最贵的`

- 人力时间成本往往被忽视的很厉害

  按时薪 50 RMB/per h 计算, 2 天/人次就是 $50 * 2 * 8 = 800 RMB$

  所以说一旦涉及 `机器服务`,买付费服务绝对是性价比更高的.

---

### 少开会

遇到的很多上级喜欢开会 (尤其是不碰代码的人), 以为互相沟通进展能提高效率

实际上很多工作也就两三个人合作起来, 微信沟通足够了, 开会只是走个形式和浪费不相关人的时间

> 建议的方案是: 最勤一周一次, 对于同一工作可以选代表轮流参会, 非必要内容闲人不需参会

---

### 经典例子

#### 胖布丁游戏

[我第一家公司做倒闭了 胖布丁游戏小棉花 钱从哪来系列 游戏纪录片 S01E02](https://www.bilibili.com/video/BV14r4y1Y77K)

一百个人一百个哈姆雷特, 定会有所收获

---

#### 皇权制衡

[为什么皇帝明知道谁是奸臣却不除掉他？](https://www.bilibili.com/video/BV1Bv411p7uz/)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 架构设计

### 目录结构问题

- 今天整理文件夹时遇到的小问题:

  我的目录如下,因为在整理时发现在 Audio/Image 下也有要整理的素材

  如果每个里面都搞一个"素材"文件夹又显得多余,于是动手开始合并 Audio,Image,Video 这三个文件夹

  ```
  |> Audio
    |> 素材
  |> Image
    |> 素材
  |> Video
    |> 素材
  ```

  ***

- but

  整理过程中发现简单粗暴地合并会给我的人为检索带来困难:

  大多东西 (比如歌/MV/涩图) 都是`单方面的内容`,不涉及另外两方面

  所以一旦合并,人为检索复杂度会 1 -> 2~3

  ***

- 最终选择:

  运用 `解耦` 思想,把"素材"抽离出来;

  尽管你可能人为"素材"应该是那三个的子分类,但是这种结构应该才是最优解

  ```
  |> Audio
  |> Image
  |> Video
  |> 素材
  ```

> 🤔🤣 是不是很傻的问题呢? 我倒是感觉这种抽象化思维很有帮助.

---

### 互联网后台架构

> [张力柯：从技术演变的角度看互联网后台架构(附视频回顾）](https://mp.weixin.qq.com/s/U4htId6IvjsXLqr4kAEEdw)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 产品设计

[SaaS 产品设计，从 0 到 1 案例实操](https://www.woshipm.com/pd/4395305.html)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-01' href='#cite_ref-01'>[1]</a>: https://news.ycombinator.com/item?id=27917069

https://www.36kr.com/p/1723330929851395

https://www.36dianping.com/dianping/4783401210

https://github.com/easychen/one-person-businesses-methodology

https://github.com/lazyparser/minimalist-team-leader
