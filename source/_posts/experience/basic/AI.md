---
title: 🐊人工智能笔记
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

# 人工智能笔记

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-04-02 22:25:33
 * @FilePath: \Blog-private\source\_posts\experience\basic\AI.md
 * @Description:
 * @!: *********************************************************************
-->

```pullquote mindmap mindmap-md
- [人工智能笔记](#人工智能笔记)
  - [体系概览](#体系概览)
  - [引例](#引例)
    - [little-sample](#little-sample)
    - [区分有-无监督学习](#区分有-无监督学习)
    - [激活函数](#激活函数)
    - [感知器](#感知器)
      - [例题](#例题)
    - [交叉熵损失函数](#交叉熵损失函数)
      - [例题](#例题-1)
    - [梯度下降法](#梯度下降法)
      - [例题](#例题-2)
  - [拓展-Glow](#拓展-glow)
  - [借物表](#借物表)
```

- <details>

    <summary> 文章封面图 (恐怖慎看) </summary>

  ![RaxZ0b.png](https://www.helloimg.com/images/2022/03/19/RaxZ0b.png)

  ***

  </details>

> 文中大量使用 LaTeX 公式, 如何写的可以看 [🍹LaTeX~环形使者(?)](../../LaTeX) \
> 强推大佬朋友的文章: [【人工智能】面试问题整理](https://discover304.top/2021/12/21/2021q4/123-ai-question-collection/)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 体系概览

- 人工智能是什么? 拿图说事 <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup><sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

  > ![](https://www.helloimg.com/images/2022/02/27/GVidNr.png)\
  > ![](https://www.helloimg.com/images/2022/03/09/RCPHaM.png)

<!--  -->

```pullquote mindmap mindmap-lg
- 绪论
  - 人工智能
    - 研究领域
      - 感知
        - 计算机视觉
        - 语音信息处理
      - 认知
        - 知识表示
        - 推理
        - 规划
        - 决策
      - 机器学习
        - [有]监督学习
          - 回归 (标签连续)
          - 分类 (标签离散)
        - 无监督学习
          - 聚类
        - 强化学习
    - 流派
      - 符号主义(模拟人脑功能)
      - 连接主义(模拟人脑结构)
      - 融合派
  - 机器学习
    - [何为机器学习: little-sample](#little-sample)
    - 流程
      - 1.原始数据
      - 2.数据预处理
        - 完整性
        - 噪声
        - 是否匹配
        - 重复
        - 连续/离散
        - 样本分布是否平衡
      - 3.特征提取
        - 原始特征的线性组合获取新特征
      - 4.特征转换
        - 升维
        - 降维
          - PCA
            - 主成分分析
            - 二维数据类比分析
            - LDA充分利用数据的标签信息
              - 将数据按照标签根据同类数据间距离最小
              - 不同类数据间距离最大的原则映射
              - 一般LDA降维后可以直接分类
          - LDA
            - 线性判断分析
            - 可视为有监督的降维算法,实际无监督
            - PCA将数据整体映射到包含最多原始数据信息的低维空间中
              - 映射不包含任何数据内部的分类信息
              - 因此一般PCA降维后数据表示更有效但或许分类更加困难
      - 5.预测
      - 6.结果
      - 数据预处理
    - 三要素
      - 模型
        - 线性方法
        - 非线性方法/广义线性方法
      - 学习准则
        - 两种表述
        - 期望风险
        - 损失函数
          - 0-1损失函数
            - 缺点是数学性质不好,不连续且导数为0,难以优化
          - 平方损失函数
          - [交叉熵损失函数](#交叉熵损失函数)
        - 期望风险
          - 期望风险未知,通过经验风险近似
          - 机器学习问题 -> 经验风险最小化问题
        - 分类精度的处理
          - 过拟合
            - 训练数据++
            - 降维
            - 正则化
              - 保留特征,减少参数大小
            - 集成学习方法
          - 欠拟合
            - 添加新特征
            - 增加模型复杂度
            - 减小正则化系数
      - 优化算法
        - [梯度下降法](#梯度下降法)
          - 批量梯度下降法BGD
          - 随机剃度下降法SGD
          - 小批量随机梯度下降法MBSGD
        - [学习率](https://www.helloimg.com/images/2022/03/21/Ra66vc.png)
    - 线性回归
      - 参数学习
        - 经验风险最小化(最小二乘法)
        - 结构风险最小化(岭回归)
        - 最大似然估计
        - 最大后验估计
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
  - 神经网路
    - 人工神经网络
      - 由大量神经元及它们之间的有向连接构成
      - 三方面
        - 神经元的激活规则
          - [激活函数](#激活函数)
          - [感知器](#感知器)
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
```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 引例

### little-sample

- 随机取市场上芒果样本

  `训练数据为芒果特征`: 颜色,大小,形状,产地,品牌

  `输出变量为芒果品质`: 甜蜜,多汁,成熟度

  ***

设计`学习算法`学习`训练数据`生成 `特征<->品质` 之间的相关性`模型`

下次买芒果时可以根据要购买芒果的特征,使用此模型预测芒果的品质

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

### 区分有-无监督学习

三方面区别: <sup id='cite_ref-3'>[\[3\]](#cite_note-3)</sup>

|          | 监督学习               |        无监督学习        |
| :------: | :--------------------- | :----------------------: |
| 训练数据 | $(x_{样本}, y_{标签})$ |        $x_{样本}$        |
| 学习目标 | 映射关系 $x \rArr y$   |       x 的内在结构       |
| 适用场景 | 分割、检测或者分类     | 聚类、特征学习或密度估计 |

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

### 激活函数

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

---

### 感知器

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

#### 例题

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

### 交叉熵损失函数

$$
\begin{aligned}
\mathcal{L}(\boldsymbol{y}, f(\boldsymbol{x} ; \theta))
&=-\boldsymbol{y}^{\top} \log f(\boldsymbol{x} ; \theta) \\
&=-\sum_{c=1}^{C} y_{c} \log f_{c}(\boldsymbol{x} ; \theta)
\end{aligned}
$$

#### 例题

- 对于期末考试三种结果,假设 one-hot 标签编码:

  优秀 [1,0,0]\
  合格 [0,1,0]\
  不合格 [0,0,1]

  假设优秀,合格,不合格概率分别为:

  甲 [0.2,0.5,0.3]\
  乙 [0.2,0.2,0.6]

  实际二位都不合格

  ***

- 分别求交叉熵:

  $$
  loss(甲) = -\left[0 \cdot \ln(0.2) + 0 \cdot \ln(0.5) + 1 \cdot \ln(0.3)\right] = 1.2
  \\ \ \\
  loss(乙) = -\left[0 \cdot \ln(0.2) + 0 \cdot \ln(0.2) + 1 \cdot \ln(0.6)\right] = 0.51
  $$

  预测值越接近真实标签,损失函数越小

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

### 梯度下降法

$$
\begin{aligned}
\theta_{t+1}
&=\theta_{t}-\alpha \frac{\partial \mathcal{R}(\theta)}{\partial \theta_{t}} \\
&=\theta_{t}-\alpha \frac{1}{N} \sum_{i=1}^{N} \frac{\partial \mathcal{L}\left(\theta_{t} ; x^{(i)}, y^{(i)}\right)}{\partial \theta}
\end{aligned}
$$

#### 例题

$$
假设函数: J(\theta)=\theta^2 \quad
假设起点: \theta^0=1 \quad
学习率为: \alpha = 0.4
$$

- 根据梯度下降公式迭代寻优

  $$
  \begin{aligned}
  \theta^0
    &= 1 \\
  \theta^1
    &= \theta^0 - \alpha \cdot J'(\theta^0) \\
    &= 1 - 0.4 \cdot 2 \\
    &= 0.2 \\
  \theta^2
    &= \theta^1 - \alpha \cdot J'(\theta^1) \\
    &= 0.04 \\
  \theta^3
    &= 0.008 \\
  \theta^4
    &= 0.0016
  \end{aligned}
  $$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 拓展-Glow

生成网络属于 DDL,是一种常用的[无监督学习模型](#区分有-无监督学习)

<!--  -->

```pullquote mindmap mindmap-md
- 深度神经网络 DDL -> 生成网络
  - 生成对抗网络 GANs (Generative Adversarial Networks)
  - 变分自编码器 VAE (Variational Auto-Encoder)
  - Pixel RNN/CNN
  - 流模型 Glow (Generative Flow)
```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [一文看懂人工智能、机器学习、深度学习与神经网络之间的区别与关系](https://zhuanlan.zhihu.com/p/86794447)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [神经网络与深度学习](https://nndl.github.io/)

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [05-生成网络总结（VAE, GAN）](https://zhuanlan.zhihu.com/p/146600360)
