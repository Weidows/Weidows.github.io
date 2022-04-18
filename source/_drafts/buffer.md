---
title: buffer
password: ""
tags:
katex: false
comments: true
aside: true
date: 2022-04-16 00:38:40
cover:
top_img:
---

##### 聚类算法划分

###### 原型-K-Means

prototype-based clustering, 用原型表示聚类结构, 然后通过对原型的更新来完善聚类算法

- 常用 `K-均值 / K-Means 算法`: 若干样本聚类为 k 个簇, k 为指定参数

  1. 随机挑选 k 个样本, 计算其他所有样本与此 k 个样本的欧氏距离,离谁近就归为哪一簇

  2. 对每一个簇, 计算其中所有样本的均值中心, 并将这 k 个均值中心作为 1. 中的样本再次重复

  3. 直到均值中心不再变化/变化小于阈值

  ![](https://www.helloimg.com/images/2022/04/18/RntO7D.png)

- K-Means 对 `距离很远的异常点` 和 `初始样本点的选择` 是敏感的

  遇到影响大的异常点时可以换为 `K-中位数/ K-Mediods 算法`

  当初始样本点选择不当时,会使聚类结果不好,如下图

  ![](https://www.helloimg.com/images/2022/04/18/Rn4BGm.png)

  ***

- 改良 -> K-Means++

  初始样本点的选取: 要选择的样本点与已选择样本点距离越远越好

  方案: 每选择样本点后计算 `未选择样本` 与 `已选择样本组` 的距离, 使未选择样本下一次的选择概率与距离成正比

- 数据分布对 K-Means 的影响:

  数据分布不平衡几乎没影响

  但是数据`几何畸变`对聚类影响很大; K-Means 对符合高斯/正态分布的样本 (大致是圈的样子) 的聚类效果最好, 对带状样本聚类效果差

  ![](https://www.helloimg.com/images/2022/04/18/Rn44kv.png)

  无论如何调参, K-Means 都不适用于如下情况:

  ![](https://www.helloimg.com/images/2022/04/18/Rnn4H1.png)

- Mini-Batch K-Means:

  对所有样本求均值计算量还是蛮大的, Mini-Batch 思想大致是抽取一部分样本求均值来近似总均值

- 特点:

  简单快速, 可解决大批量聚类,对于符合高斯分布的数据聚类效果较优

  需要预先给出聚类簇数量 k; 对于异常点和初始样本选取敏感; 对非高斯分布样本聚类效果差

---

###### 层次-AGNES

hierarchical clustering, 通过分层 -> 树形聚类结构 -> 聚类结果

- 可采用 `自顶向下DIANA / 自底向上AGNES` 的划分方式

  AGNES (AGglomerative NESting)最初将每个对象作为一个簇，然后这些簇一步步地合并。两个簇间的距离由这两个不同簇中距离最近的数据点对的相似度来确定；聚类的合并过程反复进行直到所有的对象最终满足簇数目。

  DIANA (DIvisive ANAlysis)算法是上述过程的反过程，属于分裂的层次聚类，首先将所有的对象初始化到一个簇中，然后根据一些原则(比如最大的欧式距离)，将该簇分类。直到到达用户指定的簇数目或者两个簇之间的距离超过了某个阈值。

  ![](https://www.helloimg.com/images/2022/04/18/RnH3bu.png)

  常用 `凝聚层次AGNES算法`.

- AGNES 簇间距离不同定义/合并策略

  - 最小距离 prime

    两个集合中最近的两个样本的距离

    容易形成链状结构

  - 最大距离 complete

    两个集合中最远的两个样本的距离

    若存在异常值则不稳定

  - 平均距离 average

    两个集合中样本间两两距离的平均值

  - 方差 Ward

    使得簇内距离平方和最小，簇间平方和最大

  ***

  如下为以上四类对于含噪点样本的聚类效果,最小距离聚类效果最好

  ![](https://www.helloimg.com/images/2022/04/18/RnHSln.png)

---

###### 密度-DBSCAN

density-based clustering, 通过样本分布密度来考察样本间的可连接性, 逐步拓展连接成最终聚类结果

- 常用 `噪声密度 / DBSCAN 算法`

  允许噪声的基于密度的空间聚类 DBSCAN (Density-Based Spatial Clustering of Applications with Noise)

  只要样本点的密度大于某阈值，则将该样本添加到最近的簇中。这类算法能克服基于距离的算法只能发现 `高斯分布/类圆形(凸)` 的聚类缺点，可发现任意形状的聚类，且对噪声数据不敏感。但计算密度单元的计算复杂度大，需要建立空间索引来降低计算量

  使用方面, DBSCAN 不仅可以避免噪声影响,也可以专门找噪声/剔除噪声

  ***

- 概念

  |        学名        | 概念                                                                                           |
  | :----------------: | :--------------------------------------------------------------------------------------------- |
  | $\varepsilon$-邻域 | 样本点在$\varepsilon$ 半径内的区域                                                             |
  |      核心对象      | 对于给定的阈值 m, 如果某样本点$\varepsilon$-邻域中其他样本点数量 n>=m,那么此样本点就是核心对象 |
  |    直接密度可达    | 对于核心对象 q, p 在其圈内, 那么 p 从 q 出发是直接密度可达的                                   |
  |      密度相连      | 一串密度可达对象的串联                                                                         |
  |         簇         | 最大的密度相连对象集合                                                                         |

- 半径$\varepsilon$ 与 阈值 m 的影响 (调参侠石锤)

  ![](https://www.helloimg.com/images/2022/04/18/RnTRWm.png)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

##### 衡量指标

###### 均一性-homogeneity

一个簇中只包含一个类别的样本

###### 完整性-completeness

同类别样本被归类到相同簇中

###### V-measure

均一性与完整性的加权平均

$$
V(\beta) = \frac{(1+\beta)hc}{\beta h +c}
$$

###### ARI-AMI

![](https://www.helloimg.com/images/2022/04/18/RnnlxC.png)

###### 轮廓系数-Silhouette

a: 当前样本与簇内样本距离均值

b: min(当前样本与其他簇样本距离均值)

![](https://www.helloimg.com/images/2022/04/18/RnndCY.png)
