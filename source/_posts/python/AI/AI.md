---
title: 🐊All-about-AI
password: ""
tags:
  - 人工智能
  - 机器学习
katex: true
comments: true
aside: true
date: 2022-03-19 00:13:49
cover: https://www.helloimg.com/images/2022/03/19/RaxR4K.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-04-23 00:04:41
 * @FilePath: \Blog-private\source\_posts\python\AI\AI.md
 * @Description:
 * @!: *********************************************************************
-->

- <details>

    <summary> 文章封面图 (恐怖慎看) </summary>

  ![RaxZ0b.png](https://www.helloimg.com/images/2022/03/19/RaxZ0b.png)

  ***

  </details>

此篇为本博客中 AI 领域的根, 也可以当做目录 (因为篇幅太长,就给分开了)

> 文中大量使用 LaTeX 公式, 如何写的可以看 [🍹LaTeX~环形使者(?)](../../../experience/LaTeX) \
> 强推大佬朋友的文章: [【人工智能】面试问题整理](https://discover304.top/2021/12/21/2021q4/123-ai-question-collection/)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 体系概览

- 人工智能是什么? 拿图说事 <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup><sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

  > ![](https://www.helloimg.com/images/2022/02/27/GVidNr.png)\
  > ![](https://www.helloimg.com/images/2022/03/09/RCPHaM.png)

{% pullquote mindmap mindmap-lg %}

- AI
  - 绪论
  - [机器学习](../ML#机器学习)
    - [何为机器学习](../ML#何为机器学习)
    - [学习方式](../ML#学习方式)
      - 监督学习
      - 无监督学习
      - 强化学习
    - 一般流程
      - 1.原始数据
      - [2.数据预处理](../ML#数据预处理)
        - 问题
          - 完整性
          - 噪声
          - 是否匹配
          - 重复
          - 连续/离散
          - 样本分布是否平衡
        - 方法
          - 标准化/均值移除
          - 范围缩放
          - 归一化
          - 二值化
          - 独热编码
          - 标签编码
      - 3.特征处理
        - 特征提取
          - 原始特征的线性组合获取新特征
        - 特征转换
          - 升维
          - 降维
      - 4.训练模型
      - 5.预测
      - 6.参数调整
      - 7.模型评估与优化
        - [评估方法](../ML#评估方法)
        - 优化方法
    - [基本问题](../ML#基本问题)
      - 回归问题
      - 分类问题
      - 聚类问题
      - 降维问题
      - 强化问题
    - 三要素
      - 模型
        - 线性方法
        - 非线性方法/广义线性方法
      - [学习准则](../ML#学习准则)
        - 损失函数
        - 期望风险
          - 期望风险未知,通过经验风险近似
          - 机器学习问题 -> 经验风险最小化问题
        - 过-欠拟合及处理
        - 参数学习
          - 经验风险最小化(最小二乘法)
          - 结构风险最小化(岭回归)
          - 最大似然估计
          - 最大后验估计
      - [优化算法](../ML#优化算法)
    - 研究领域
      - 感知
        - 计算机视觉
        - 语音信息处理
      - 认知
        - 知识表示
        - 推理
        - 规划
        - 决策
    - 流派
      - 符号主义(模拟人脑功能)
      - 连接主义(模拟人脑结构)
      - 融合派
    - 框架
      - sklearn
      - 飞桨
      - Tenserflow
      - Pytorch
      - ...
  - 表示学习
    - 表示
      - 为了提高机器学习系统的准确率,就需要将输入信息转换为有效的特征
    - 数据表示是机器学习的核心问题
    - 底层特征与高层语义之间存在语义鸿沟,如何在鸿沟上搭桥是表示学习的关键
    - 表示方法
      - 局部表示/离散表示/符号表示
      - 分布式表示
        - 表示能力强
        - 向量维度低
        - 相似度容易计算
    - 嵌入
      - 将一个度量空间中的一些对象映射到另一个低维的度量空间中
      - 并尽可能保持不同对象之间的拓扑关系,比如自然语言中词的分布式表示
  - 深度学习
    - 一个好的表示学习策略必须具备一定的深度
    - 特征
      - 像是宰鱼要分多步,每步使用不同方式/工具
      - 通常从底层特征开始经过多步非线性转换才能得到好的高层语义表示
    - 特点
      - 增加特征重用性,指数级增加表示能力
    - [表示学习与深度学习关系](https://www.helloimg.com/images/2022/03/10/RCdJ0c.png)
    - 关键问题: 贡献度分配
      - 不同组件/参数对系统输出结果的影响权重
  - [神经网路](#神经网路)
    - 人工神经网络
      - 由大量神经元及它们之间的有向连接构成
      - 三方面
        - [神经元的激活规则](#神经元的激活规则)
        - 网络的拓扑结构
        - 学习算法
      - [分类](https://www.helloimg.com/images/2022/03/19/Rat37q.png)
        - 单类网络
          - 前馈网络
          - 记忆网络
          - 图网络
        - 复合型网络
    - 贡献度分配问题
      - 不同 component 或 param 对最终系统输出结果的贡献
      - 利用偏导数求解贡献度
    - 发展史
      - 模型提出
      - 冰河期
      - 反向传播算法引起的复兴
      - 流行度降低
      - 深度学习崛起

{% endpullquote %}

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 神经网路

### 神经元的激活规则

#### 激活函数

![RaxGG1.png](https://www.helloimg.com/images/2022/03/18/RaxGG1.png)

- 上图为一个阶跃函数,其阈值是可以改变的,例:

  $$
  sgn(x) =
  \begin{cases}
    1 & if \ x > 0 \\
    0 & if \ x = 0 \\
    -1 & if \ x < 0
  \end{cases}
  $$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 感知器

- 感知器可以认为是最简单的人工神经网络，只有一个神经元.

  ![](https://www.helloimg.com/images/2022/03/10/RC0tEP.png)

  $$
  y = f(w1 \cdot x1 + w2 \cdot x2 + b)
  $$

  当调整 $w,b$ 时,可以得到不同的变体逻辑运算;

  给定训练数据集, $w,b$ 可以通过学习自动调整

  ***

- 学习规则核心思想: `错误驱动`

  1. 权值初始化
  2. 输入样本对
  3. 计算输出
  4. 根据感知器学习规则调整权值
  5. 返回到步骤 2. 输入下一对样本,周而复始直到对所有样本,感知器的实际输出与期望输出相等

  ***

- 例题

  ![](https://www.helloimg.com/images/2022/03/19/Raxa9S.png)

  1. 初始化向量

  $$
  W(0) = (0.5,1,-1,0)^T \rArr W^T(0) = (0.5,1,-1,0)
  $$

  2. 输入样本
  3. 计算输出

  $$
  W^T(0)X^1 = (0.5,1,-1,0) \cdot (-1,1,-2,0)^T = 2.5
  $$

  4. 调整权值,这里使用上面[#激活函数](#激活函数)的阶跃函数例子

  权向量第一个分量也就是 0.5 为阈值

  $$
  \begin{aligned}
    o^1(0) &= sgn(W^T(0)X^1) \\
    &= sgn(2.5) = 1

      \\ \ \\

      W(1) &=W(0) + \eta \left[d^{1}-o^{1}(0)\right] X^{1} \\
    &= (0.5,1,-1,0)^{T} + 0.1 (- 1- 1)(-1,1,-2,0)^{T} \\
    &= \left(\mathbf{0.7,0.8,-0.6,0)^{T}}\right.

      \\ \ \\

      W(2) &=W(1) + \eta \left[d^{2}-o^{2}(1)\right] X^{2} \\
    &= (0.7,0.8,-0.6,0)^{T} + 0.1 [- 1-(- 1)](-1,0,1.5,-0.5)^{T} \\
    &= \left(\mathbf{0.7,0.8,-0.6,0)^{T}}\right.

      \\ \ \\

      W(3) &=W(2) + \eta \left[d^{3}-o^{3}(2)\right] X^{3} \\
    &= (0.7,0.8,-0.6,0)^{T} + 0.1 [1-(- 1)](-1,-1,1,0.5)^{T} \\
    &= \left(\mathbf{0.5,0.6,-0.4,0.1)^{T}}\right.
  \end{aligned}
  $$

  5. 返回 2. 直到

  $$
  d^{P} - o^{P} = 0 \qquad (p = 1,2,3)
  $$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 待办-课程

<!--  -->

{% pullquote mindmap mindmap-md %}

- 数据分析
  - 数据类型
    - 数值 Numerical
      - 离散 discrete
      - 连续 continuous
    - 分类 Categorical
      - 无法相互度量的数据,例如颜色
    - 序数 Ordinal
      - 类似分类数据,但可以相互度量
  - 常用特殊值
    - 均值 mean
    - 中值 median
    - 众数 mode
    - 标准差 std
    - 方差 var = std \* std
    - 百分位数 percentile
      - 返回一个数 x, 这个 x >= 数组中百分之 percentile 的数

{% endpullquote %}

### GAN

![](https://www.helloimg.com/images/2022/04/08/Rsmdm0.png)

搜集大量 x 与 y 类型数据, GAN 模型可以自动学习 x 与 y 之间的关系

### 异常检测-anomaly-detection

![](https://www.helloimg.com/images/2022/04/08/Rsmvdm.png)

### Glow

Glow -> Flow-based generative model

生成网络属于 DNN,是一种常用的[无监督学习模型](#区分有-无监督学习)

{% pullquote mindmap mindmap-md %}

- 深度神经网络 DNN -> 生成网络
  - 生成对抗网络 GANs (Generative Adversarial Networks)
  - 变分自编码器 VAE (Variational Auto-Encoder)
  - Pixel RNN/CNN
  - 流模型 Glow (Generative Flow)

{% endpullquote %}

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

{% mmedia "bilibili" "bvid:BV1J94y1f7u5" "page:1" %}

{% mmedia "bilibili" "bvid:BV16L411w7oQ" %}

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [一文看懂人工智能、机器学习、深度学习与神经网络之间的区别与关系](https://zhuanlan.zhihu.com/p/86794447)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [神经网络与深度学习](https://nndl.github.io/)
