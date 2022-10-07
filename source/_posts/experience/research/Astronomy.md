---
title: 🔭再度窥探天文
password: ""
tags:
  - 天文学
  - 物理
katex: true
comments: true
aside: true
date: 2022-10-05 17:45:43
cover: https://www.helloimg.com/images/2022/10/05/ZUtaSu.png
top_img:
---

# 再度窥探天文

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-10-07 13:34:17
 * @FilePath: \Blog-private\source\_posts\experience\research\Astronomy.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [再度窥探天文](#再度窥探天文)
  - [基础概念](#基础概念)
    - [计量单位](#计量单位)
    - [绝对星等-视星等](#绝对星等-视星等)
    - [普森公式](#普森公式)
  - [恒星演化](#恒星演化)
    - [赫罗图](#赫罗图)
    - [简易生命周期](#简易生命周期)
  - [星体](#星体)
    - [矮星](#矮星)
    - [中子星](#中子星)
    - [脉冲星](#脉冲星)
  - [TODO](#todo)
  - [借物表](#借物表)

{% endpullquote %}

> 要来看看吗......天象仪....无论何时.....都不会消逝的美景。 --<<星之梦>>

> ![](https://www.helloimg.com/images/2022/10/07/ZUvTgP.png) \
> ![](https://www.helloimg.com/images/2022/10/07/ZUv9P6.png)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 基础概念

### 计量单位

> ![](https://www.helloimg.com/images/2022/10/06/ZUTzWn.png)

|    名词     |                                                                  概念                                                                   |
| :---------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
| 天文单位 AU |                                                          1AU = 地-日轨道半长轴                                                          |
|    角秒     |                                              $1^{\prime\prime} = \frac{1}{60 \cdot 60}$ 度                                              |
|  秒差距 ps  | 1 秒差距 = $\frac{1AU}{tan1^{\prime \prime}} = \frac{648000AU}{\pi} \approx 3.26 光年$ <sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup> |
|     M⊙      |                                               单位太阳质量 $M⊙ = 1.989 \cdot 10^{30} kg$                                                |

---

### 绝对星等-视星等

> ![](https://www.helloimg.com/images/2022/10/06/ZUWS1R.png)

- 视星等是在地球上观测到星体的相对亮度, 亮度越高值越小, 人眼能看到的最暗的星大概为 6 星等 <sup id='cite_ref-4'>[\[4\]](#cite_note-4)</sup>

  视星等的基准最初是按织女星为 0 等, 之后变成了其他衡量方案, 织女星变成了 0.03 星等

  星等与光强单位勒克斯的关系, 还是百家争鸣...同一百科上都不一致

  ![](https://www.helloimg.com/images/2022/10/07/ZUwakM.png)

  ***

- 绝对星等是在距离星体 10 秒差距观测到星体的亮度 <sup id='cite_ref-3'>[\[3\]](#cite_note-3)</sup>, 计算上是用视星等 m 与距离 d 进行转换:

  $$
  \begin{align}
    M
    &= m + 5 log_{10} \frac{10ps}{d} \\
    &= m + 5(1+log_{10} p) &(p为视差角)
  \end{align}
  $$

  函数图大概如下, 横轴是 d, 纵轴是 M

  ![](https://www.helloimg.com/images/2022/10/07/ZUOsUn.png)

  至于距离与星等这个公式怎么推算出来的, 诶嘿没找到...

---

### 普森公式

已知每差 5 星等, 亮度差 100 倍, 也就是每一星等差 $^5\sqrt{100} = 10^{\frac{2}{5}} = 2.512$ 倍

得出普森公式: <sup id='cite_ref-5'>[\[5\]](#cite_note-5)</sup>

$$
\begin{align}
  \frac{E1}{E2} &= 10^{\frac{2 (m_2 - m_1)}{5}} \\
  两边求10为底的对数 lg \frac{E1}{E2} &= \frac{2 (m_2 - m_1)}{5} \\
  整理得: 2.5lg \frac{E1}{E2} &= m_2 - m_1
\end{align}
$$

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 恒星演化

### 赫罗图

> ![ZUOnt0.gif](https://www.helloimg.com/images/2022/10/07/ZUOnt0.gif) \
> ![](https://www.helloimg.com/images/2022/10/06/ZUTTUv.png) \
> <sup id='cite_ref-7'>[\[7\]](#cite_note-7)</sup> 光谱性简记: Oh Be A Fine Girl Kiss Me <sup id='cite_ref-6'>[\[6\]](#cite_note-6)</sup>

温度越高, 光谱靠蓝那边的强度越高, 太阳是目前是 G 型

---

### 简易生命周期

![](https://www.helloimg.com/images/2022/10/06/ZU2Wpm.png)

- 恒星质量与演化

  1. M < 8M⊙

     主序星 -> 红巨星 -> 行星星云 -> 矮星 -> 黑矮星(真正意义的死星)

  2. 8M⊙ <= M < 25M⊙

     主序星 -> 超红巨星 -> 超新星 -> 中子星

  3. 25M⊙ <= M

     主序星 -> 超红巨星 -> 超新星 -> 黑洞(>2.5M⊙ 就会形成, 比如中子星吞噬其他天体突破临界)

  ***

- 太阳

  ![ZUv005.gif](https://www.helloimg.com/images/2022/10/07/ZUv005.gif)

  可见太阳符合第一条演化路线

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 星体

### 矮星

M<=1.44M⊙/钱德拉塞卡极限, 常见的有白矮星/褐矮星/黑矮星

白矮星与中子星自身亮度很高, 但是个体太小所以星等很低或者观测不到

---

### 中子星

M>=3.2M⊙/奥本海默极限的脉冲星/宁静态中子星, 又名波霎

由于角动量守恒, 在超新星爆发后产生的中子星/脉冲星自转速度非常快

(比如恒定功率的电风扇, 在甩飞扇叶后, 电机转速将攀升很多)

又由于自身转速抵消掉部分引力, 所以中子星极限质量并不固定

---

### 脉冲星

两级放射电磁波+星体旋转 -> 导致在地球上能捕获到脉冲波的星体

emmm, 对于其所属星体, 网上资料有出入

![](https://www.helloimg.com/images/2022/10/07/ZUvUG1.png)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## TODO

泡利不相容原理/电子简并压力

间并中子压

造父变星星等观测

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: 封面图源: https://www.coolapk.com/feed/32525501?shareKey=NDYwNzQzZDE5Y2RjNjFkMWQzNDc~&shareUid=3214693&shareFrom=com.coolapk.market_11.4.7

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [秒差距 - 維基百科，自由的百科全書](https://zh.wikipedia.org/zh-mo/%E7%A7%92%E5%B7%AE%E8%B7%9D)

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [絕對星等 - 維基百科，自由的百科全書](https://zh.wikipedia.org/zh-mo/%E7%B5%95%E5%B0%8D%E6%98%9F%E7%AD%89)

<a name='cite_note-4' href='#cite_ref-4'>[4]</a>: [視星等 - 維基百科，自由的百科全書](https://zh.wikipedia.org/zh-mo/%E8%A7%86%E6%98%9F%E7%AD%89)

<a name='cite_note-5' href='#cite_ref-5'>[5]</a>: [天文竞赛考点讲解星等的计算（2）——普森公式的推导](https://www.bilibili.com/video/BV1aP4y1M7b3/)

<a name='cite_note-6' href='#cite_ref-6'>[6]</a>: [3.5 赫罗图：恒星演化的研究工具 - 恒星一生的故事 | Coursera](https://zh.coursera.org/lecture/intro-astronomy-nju/3-5-he-luo-tu-heng-xing-yan-hua-de-yan-jiu-gong-ju-wJLFR)

<a name='cite_note-7' href='#cite_ref-7'>[7]</a>: [【E.N 科普专栏】赫罗图——浓缩恒星的一生](https://weibo.com/ttarticle/p/show?id=2309404249849112478959&sudaref=www.google.com)

<a name='cite_note-8' href='#cite_ref-8'>[8]</a>: [现身吧，“闷声发大财”的中子星](https://www.bilibili.com/video/BV1Kt4y1P7rh/)
