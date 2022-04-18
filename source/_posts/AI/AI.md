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

# All-about-AI

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-04-18 23:29:25
 * @FilePath: \Blog-private\source\_posts\AI\AI.md
 * @Description:
 * @!: *********************************************************************
-->

```pullquote mindmap mindmap-md
- [All-about-AI](#all-about-ai)
  - [代码](#代码)
  - [体系概览](#体系概览)
  - [机器学习](#机器学习)
    - [何为机器学习](#何为机器学习)
    - [学习方式](#学习方式)
      - [区分有-无监督学习](#区分有-无监督学习)
      - [强化学习-RL](#强化学习-rl)
    - [数据预处理](#数据预处理)
      - [均值移除](#均值移除)
      - [范围缩放](#范围缩放)
      - [归一化](#归一化)
      - [二值化](#二值化)
      - [OneHot-独热编码](#onehot-独热编码)
      - [标签编码](#标签编码)
    - [评估方法](#评估方法)
    - [基本问题](#基本问题)
      - [回归问题](#回归问题)
        - [线性回归](#线性回归)
        - [多项式回归](#多项式回归)
        - [Lasso-岭回归](#lasso-岭回归)
      - [决策树-随机森林](#决策树-随机森林)
        - [简化概念](#简化概念)
        - [分类](#分类)
        - [信息增益](#信息增益)
        - [深度与过拟合](#深度与过拟合)
        - [随机森林](#随机森林)
      - [分类问题](#分类问题)
        - [逻辑回归](#逻辑回归)
        - [支持向量机-SVM](#支持向量机-svm)
          - [target](#target)
          - [线性可分-不可分](#线性可分-不可分)
          - [核函数](#核函数)
        - [朴素贝叶斯](#朴素贝叶斯)
      - [聚类问题-cluster](#聚类问题-cluster)
        - [相似度度量](#相似度度量)
          - [欧氏距离](#欧氏距离)
          - [曼哈顿距离](#曼哈顿距离)
          - [余弦相似度](#余弦相似度)
          - [以上对比](#以上对比)
          - [闵可夫斯基距离](#闵可夫斯基距离)
          - [杰卡德相似系数](#杰卡德相似系数)
          - [相对熵](#相对熵)
    - [学习准则](#学习准则)
      - [损失函数-loss](#损失函数-loss)
        - [均方差损失函数](#均方差损失函数)
        - [交叉熵损失函数](#交叉熵损失函数)
      - [过-欠拟合及处理](#过-欠拟合及处理)
        - [正则化](#正则化)
    - [优化算法](#优化算法)
      - [梯度下降法](#梯度下降法)
      - [学习率](#学习率)
  - [神经网路](#神经网路)
    - [神经元的激活规则](#神经元的激活规则)
      - [激活函数](#激活函数)
      - [感知器](#感知器)
  - [待办-课程](#待办-课程)
    - [GAN](#gan)
    - [异常检测-anomaly-detection](#异常检测-anomaly-detection)
    - [Glow](#glow)
  - [借物表](#借物表)
```

- <details>

    <summary> 文章封面图 (恐怖慎看) </summary>

  ![RaxZ0b.png](https://www.helloimg.com/images/2022/03/19/RaxZ0b.png)

  ***

  </details>

> 文中大量使用 LaTeX 公式, 如何写的可以看 [🍹LaTeX~环形使者(?)](../../experience/LaTeX) \
> 强推大佬朋友的文章: [【人工智能】面试问题整理](https://discover304.top/2021/12/21/2021q4/123-ai-question-collection/)

## 代码

[👀Code-4-ML-Learning](../../public-post/notebook/ML)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 体系概览

- 人工智能是什么? 拿图说事 <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup><sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

  > ![](https://www.helloimg.com/images/2022/02/27/GVidNr.png)\
  > ![](https://www.helloimg.com/images/2022/03/09/RCPHaM.png)

<!--  -->

```pullquote mindmap mindmap-lg
- AI
  - 绪论
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
  - [机器学习](#机器学习)
    - [何为机器学习](#何为机器学习)
    - [学习方式](#学习方式)
      - 监督学习
      - 无监督学习
      - 强化学习
    - 一般流程
      - 1.原始数据
      - [2.数据预处理](#数据预处理)
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
      - 3.特征提取
        - 原始特征的线性组合获取新特征
      - 4.特征转换
        - 升维
        - 降维
          - PCA
            - 主成分分析
            - 二维数据类比分析
            - PCA将数据整体映射到包含最多原始数据信息的低维空间中
              - 映射不包含任何数据内部的分类信息
              - 因此一般PCA降维后数据表示更有效但或许分类更加困难
          - LDA
            - 线性判断分析
            - 可视为有监督的降维算法,实际无监督
            - LDA充分利用数据的标签信息
              - 将数据按照标签根据同类数据间距离最小
              - 不同类数据间距离最大的原则映射
              - 一般LDA降维后可以直接分类
      - 5.预测
      - 6.模型评估与优化
        - [评估方法](#评估方法)
        - 优化方法
      - 7.结果
    - [基本问题](#基本问题)
      - 回归问题
      - 分类问题
      - 聚类问题
        - 相似度度量方式
        - KMeans算法
        - 均值漂移
        - 凝聚层次
        - 聚类评价指标
        - 噪声密度
      - 降维问题
    - 三要素
      - 模型
        - 线性方法
        - 非线性方法/广义线性方法
      - [学习准则](#学习准则)
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
      - [优化算法](#优化算法)
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
```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 机器学习

### 何为机器学习

- 随机取市场上芒果样本

  `训练数据为芒果特征`: 颜色,大小,形状,产地,品牌

  `输出变量为芒果品质`: 甜蜜,多汁,成熟度

  ***

设计`学习算法`学习`训练数据`生成 `特征<->品质` 之间的相关性`模型`

下次买芒果时可以根据要购买芒果的特征,使用此模型预测芒果的品质

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

### 学习方式

#### 区分有-无监督学习

三方面区别: <sup id='cite_ref-3'>[\[3\]](#cite_note-3)</sup>

|          |        监督学习(supervised)         | 无监督学习(self-supervised) |
| :------: | :---------------------------------: | :-------------------------: |
| 训练数据 |       $(x_{样本}, y_{标签})$        |         $x_{样本}$          |
| 学习目标 |        映射关系 $x \rArr y$         |        x 的内在结构         |
| 适用场景 | 分割/检测/回归(标签连续)/分类(离散) |  聚类、特征学习或密度估计   |

无监督学习需要 pre-training, 在训练数据上训练一个模型, 在测试数据上使用这个模型

也有混合形式的半监督学习

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 强化学习-RL

- Reinforcement Learning:

  我们不清楚如何标记样本/无法说明什么样本数据特征是更好的,但是可以指明什么是好的终点

  比如围棋,没啥可标记的数据, 也很难说明哪一步更好,只能指明`快点赢`为最终结果

  对不同决策结果进行赏罚,使结果趋近期望结果

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

### 数据预处理

#### 均值移除

把一组数据的`均值和标准差`由 `x, y -> 0, 1`

例如有一组数据 sample = [a,b,c]

$$
\begin{aligned}
  均值 m
  &= \frac{a+b+c}{3} = x

  \\ \ \\

  标准差 s
  &= \sqrt{\frac{(a-m)^2 + (b-m)^2 + (c-m)^2}{3}} = y

  \\ \ \\

  令std\_sample
  &= [a',b',c']
  \\ &= [ \frac{a - m}{s} , \frac{b - m}{s} , \frac{c - m}{s} ]

  \\ \ \\

  数据标准化后 m'
  &= \frac{a' + b' + c' }{3} = \frac{(a-m) + (b -m) + (c - m) }{3s} = 0

  \\ \ \\

  s'
  &= \sqrt{\frac{(a'-m')^2 + (b'-m')^2 + (c'-m')^2}{3}} = 1
\end{aligned}
$$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 范围缩放

对于 sample = [a,b,c] , min=a, max=c

1. 兜底,让 min=0

   $$
   sample' = [a' , b' , c' ] = [a-a, b-a, c-a]
   $$

2. 缩放,把范围控制在 [0,1]

   $$
   \begin{aligned}
   sample'' &= [\frac{a'}{c'}, \frac{b'}{c'}, \frac{c'}{c'} ]
   \\ &= [\frac{a-a}{c-a}, \frac{b-a}{c-a}, \frac{c-a}{c-a} ]
   \\ &= [0, \frac{b-a}{c-a}, 1 ]
   \end{aligned}
   $$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 归一化

转化后的数据在 [0,1] , 反应某数据在当前行所占比重

例:对于 sample 某 row 中的值 a

$$
a' = \frac{a}{\sum_{i=1}^n |row[i]|}
$$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 二值化

设置阈值,大于阈值的设为 1,小于阈值的设为 0

没啥可说的...不举例了

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### OneHot-独热编码

$$
\begin{bmatrix}
  男 & 足球 & 10\\
  女 & 篮球 & 20\\
  男 & 桌球 & 30\\
  女 & 网球 & 10\\
\end{bmatrix}
$$

- 对于离散数据的分类任务, 我们常需要做`特征数字化`: <sup id='cite_ref-4'>[\[4\]](#cite_note-4)</sup>

  对于某一列数据中有 n 种类型, 就用 n 位编码表示,不同类型使用不同激活位,如下:

  $$
  \begin{bmatrix}
    10 & 1000 & 100\\
    01 & 0100 & 010\\
    10 & 0010 & 001\\
    01 & 0001 & 100\\
  \end{bmatrix}
  $$

- 关于为什么这么做? 直接[0,0,0], [0,1,2] 这种表示不行吗?

  上面 row1 和 row3 都是男, 问题在于我们无法单纯通过 1 和 3 这俩数字来判断他俩是否是同一类型的

  对于编码后的,想找'男'这个类型,只需要查找第一位是'1'的数据

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 标签编码

可以理解为上面独热编码的子步骤,一言以蔽之:

[红,黄,蓝,黄] -> [1,2,3,2]

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

### 评估方法

- 平均绝对误差
- 均方误差
- 中位数绝对误差
- R2 决定系数

  $$
  令 y_i 表示真实值, \hat y_i 表示预测值, \overline y 为平均值

  \\ \ \\

  \begin{aligned}
    回归平方和 SSR
    &= \sum_{i=1}^n (\hat y_i - \overline y)^2 \\

    残差平方和 SSE
    &= \sum_{i=1}^n (y_i - \hat y_i)^2 \\

    总离差平方和 SST
    &= SSR + SSE \\
    &= \sum_{i=1}^n (y_i - \overline y)^2

    \\ \ \\

    R2决定系数: R^2
    &= 1 - \frac{SSE}{SST}
  \end{aligned}
  $$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

### 基本问题

- 回归-分类问题

  ![](https://www.helloimg.com/images/2022/04/08/RsMidr.png)

  回归: 输出连续, 例如预测房价股价

  分类: 输出离散, 例如产品质量好坏检测,手写体识别

- 聚类: 把输入数据相似度高的堆一起

  例如把各种水果照片聚类出来,分出品种

  对于购物网站, 可以根据用户对商品的喜好度, 搞出`推荐算法`

---

#### 回归问题

##### 线性回归

对于输入的属性 $x=(x_1,x_2,x_3...x_n)$,输出 y 为:

$$
\begin{aligned}
  y
  &= w_1 x_1 + w_2 x_2 + ... w_n x_n + b & (多项式形式) \\
  &= w^T x + b & (向量形式)
\end{aligned}
$$

其中 权重 w 与 b 是通过学习后模型确定的

学习: 寻找最小的损失函数 loss -> 最优线性模型

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

##### 多项式回归

从几何角度理解就是把直线变成了曲线

$$
\begin{aligned}
  y
  &= w_0 + w_1 x + w_2 x^2 + ... w_n x^n \\
  &= \sum_{i=1}^{n} w_i x^i
\end{aligned}
$$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

##### Lasso-岭回归

Lasso 和 岭 这两种都是在线性回归基础上对损失函数正则化的回归算法, 降低了偏差大的样本权重, `防止过拟合`

- Lasso (Least absolute shrinkage and selection operator, 最小绝对值收敛和选择算法/套索算法), 使用 L1 正则

  $$
  \mathcal{L} = \frac{1}{2} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
  + \lambda ||w||_1
  $$

  ***

- 岭回归 (Ridge regression), 用 L2 正则

  $$
  \mathcal{L} = \frac{1}{2} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
  + \lambda ||w||_2
  $$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 决策树-随机森林

decision tree, 决策树可用于 classification + regression; 学习决策树需要用到[信息论知识](../../experience/basic/通信技术#信息熵-如何度量信息) 参考课程: <sup id='cite_ref-6'>[\[6\]](#cite_note-6)</sup>

##### 简化概念

- CART 决策树选择算法

  ![](https://www.helloimg.com/images/2022/04/11/RtsbJ9.png)

- 随机森林

  不同的特征选择方式产生不同的决策树,组在一起就是随机森林

  ![](https://www.helloimg.com/images/2022/04/11/RtsWMP.png)

---

##### 分类

- 我们想对一组 iris 数据做花种分类

  有 setosa,versicolor,virginica 三类

  鉴于 2d 展示图易观察,我们只取前两列 (花萼长度,宽度) 作为输入,最后一列作为输出,训练模型

  ```
  4.8,3.0,1.4,0.3,Iris-setosa
  5.1,3.8,1.6,0.2,Iris-setosa
  4.6,3.2,1.4,0.2,Iris-setosa
  5.0,3.3,1.4,0.2,Iris-setosa
  7.0,3.2,4.7,1.4,Iris-versicolor
  6.4,3.2,4.5,1.5,Iris-versicolor
  6.2,2.9,4.3,1.3,Iris-versicolor
  5.1,2.5,3.0,1.1,Iris-versicolor
  5.7,2.8,4.1,1.3,Iris-versicolor
  5.8,2.7,5.1,1.9,Iris-virginica
  7.1,3.0,5.9,2.1,Iris-virginica
  6.3,2.9,5.6,1.8,Iris-virginica
  6.5,3.0,5.8,2.2,Iris-virginica
  ```

  下图为训练数据(点) 和 测试数据(星) 的分布

  ![](https://www.helloimg.com/images/2022/04/13/R4evt0.png)

  模型的决策树如下 (颜色表示类别, 颜色深度表示确定程度)

  ![](https://www.helloimg.com/images/2022/04/13/R4edC5.png)

  ***

- 下面来分析一下决策树如何分类的:

  ![](https://www.helloimg.com/images/2022/04/13/R4eQqc.png)

  根节点选取了 105 个输入, 其中最多的是 virginica 37 个, class=virginica

  暂且不看每个节点的熵 entropy 是怎么计算的,看一下比较:

  $$
  \begin{aligned}
    H_差
    &= H(X)_{根节点熵} - H(X|Y)_{子节点条件熵和} \\
    &= 1.582_{根节点熵} - \left( \frac{33+4+1}{105} \cdot 0.657 + \frac{3+28+36}{105} \cdot 1.208 \right)_{子节点条件熵和} \\
    &= 0.573
  \end{aligned}
  $$

  决策树就是通过一层层的 `条件 Y` (如 sepal lenth <= 5.45) 来减小熵,增大确定性来解决分类确定度问题

  ![](https://www.helloimg.com/images/2022/04/13/R4tSlC.png)

  最后的叶子节点的熵会趋近于 0 (非常确定) 和 1 (非常不确定) 的两点分布

---

##### 信息增益

$$
杜撰一个概念: 信息增益 gain(X,Y) = H(X) - H(X|Y)
$$

- 通过上面分类的例子可知, `gain(X,Y)` 就是熵下降/确定度增加的关键

  回过头来,条件 Y (如 sepal lenth <= 5.45) 是怎么选取的?

  遍历特征组和取值区间,找到 max( gain(X,Y) ),即为熵下降最多的条件;

  (当然也需要考虑到类似贪心-DP 的区别, 全是贪心的话会让模型单一化, 所以很多时候需要`随机筛掉一部分条件`来使得条件`较优`而不是`最优`)

---

##### 深度与过拟合

深度增加虽然能降低训练集错误率,但泛化能力会减弱->过拟合

![](https://www.helloimg.com/images/2022/04/13/R4453D.png)

---

##### 随机森林

- 自动聚合-BootStrap

  对训练数据集进行多次有放回的随机采样 (有的样本可能从未采样,有的可能采样多次) -> 随机森林 [DT1, DT2... DTn]

- 如何 roll 出来数据集中部分随机数据? (比如取 80%)

  1. for i in dataset

  2. if Math.random() < 0.8: random_set.append(i)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 分类问题

- 二元分类
- 多元分类
- 朴素贝叶斯分类
- 决策树分类
- 支持向量机
- 逻辑回归

##### 逻辑回归

虽然叫回归,但其实是`二分类模型`,是在线性回归输出基础上使用 Sigmoid/逻辑函数,将线性回归输出 $(-\infty,\infty)$ 映射到 $(0,1)$

$$
\begin{aligned}
  线性回归 y
  &= w^Tx + b \\
  &= w_1x_1 + w_2x_2 + w_3x_3 + ... +  b

  \\ \ \\
  逻辑回归 y'
  &= Sigmoid(y) \\
  &= \frac{1}{1 + e^{-y}}
\end{aligned}
$$

逻辑回归也是可以做多分类的, 原理就是多个二分类叠加起来

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

##### 支持向量机-SVM

###### target

SVM 目标就是找到如下红色实线 (与线两边样本点距离最大的线)

两条虚线上的点叫做 `support vector / 支持向量`, 通过支持向量构造出的分类器就是 `支持向量机 SVM`

![](https://www.helloimg.com/images/2022/04/15/RSmQRP.png)

$$
如有直线 2x_1 + 5x_2 - 10 = 0 可转换为向量形式 \\
\vec{w} = (2,5) \\
\vec{x} = (x_1,x_2) \\
\vec{w} \cdot \vec{x} + b = 0
$$

---

###### 线性可分-不可分

如上面的图示, 样本可被直线/超平面分开 (线性可分), 支持向量所在两虚线之间没有其他向量,即为 `线性可分 SVM`

如果两虚线间存在样本, 即为 `线性 SVM`; 如果样本无法被直线/超平面分开 (线性不可分), 即为 `非线性 SVM`

![](https://www.helloimg.com/images/2022/04/15/Riakiv.png)

对于线性不可分问题,可通过 `核函数` 进行特征变换来 `升维`

---

###### 核函数

常用的有为 1 和 3, 多项式核函数用处较少

1. 线性核函数 Linear

   不做升维,直接找直线/超平面; 类似美国地图,分割直来直去的

   ![](https://www.helloimg.com/images/2022/04/16/RiXoc0.png)

2. 多项式核函数 poly (Polynomial Kernel)

   通过增加高次项升维, 此函数复杂度升的很快

3. 径向基核函数-高斯核函数 rbf (Radial Basis Function Kernel)

   相对于多项式核函数,大多数情况下参数更少性能更高; 直线分不了的无脑冲 rbf

   ![](https://www.helloimg.com/images/2022/04/16/RiXFVm.png)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

##### 朴素贝叶斯

Naive Bayes classification,理论基础是大学必修课-概率论知识

- "朴素"指的是 A,B 为独立事件, 有贝叶斯公式:

  $$
  P(A|B) = \frac{P(A)P(B|A)}{P(B)}
  $$

  `先验概率` P(A) : 已知或可推断出事件 A 发生的概率

  `后验概率` P(A|B) : 已知 B 发生条件下,A 发生的概率

  ***

- 对于样本特征 $[w_1, w_2, w_3 ... w_n]$ 得出每个特征的概率 $[W_1, W_2, W_3 ... W_n]$, 判断所属分类 $[A, B, C ...]$ 的概率:

  $$
  P(A | W_1 W_2 W_3 ... W_n)
  = \frac{P(A) \cdot P(W_1|A) \cdot P(W_2|A) ... P(W_n|A)  }{P(W_1 W_2 W_3 ... W_n)} \\

  P(B | W_1 W_2 W_3 ... W_n)
  = \frac{P(B) \cdot P(W_1|B) \cdot P(W_2|B) ... P(W_n|B)  }{P(W_1 W_2 W_3 ... W_n)} \\

  P(C | W_1 W_2 W_3 ... W_n)
  = \frac{P(C) \cdot P(W_1|C) \cdot P(W_2|C) ... P(W_n|C)  }{P(W_1 W_2 W_3 ... W_n)} \\

  ......
  $$

  ***

- 特点

  必要的前提条件是特征间互不相关 (相互独立), 很多情况下难以满足,无法对特征关联性强的样本进行分类

  逻辑简单,性能起伏小且稳定,特征独立性越强分类效果越好

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 聚类问题-cluster

就像是人群根据 hobby 扎堆, 输入的数据根据某些特征的相似度分出多个"簇"

聚类问题属于无监督学习 (无需指明训练样本所属类别)

---

##### 相似度度量

对于两点 $(x_1,y_1,...n_1),(x_2,y_2,...n_2)$

###### 欧氏距离

无视路径阻碍的空间绝对 distance

$$
\begin{aligned}
  d
  &= \left| (x_1, y_1, ..., n_1), (x_2, y_2, ..., n_2) \right| \\
  &= \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2 + ... + (n_1 - n_2)^2} \\
  &= \sqrt{\sum_{i=x}^n (i_1 - i_2)^2}
\end{aligned}
$$

###### 曼哈顿距离

计量阻碍,可以理解为寻路问题,同一曼哈顿距离可有多种路径解法

$$
\begin{aligned}
  d
  &= |x_1 - x_2| + |y_1 - y_2| + ... + |n_1 - n_2| \\
  &= \sum_{i=x}^n | i_1 - i_2 |
\end{aligned}
$$

###### 余弦相似度

cosine similarity, $cos 在 [0, \pi]$ 上为减函数, 在 [45°, 135°] 区间下降快

余弦相似度对向量敏感度: 方向 > 长度

$$
cos(\theta) = \frac{\vec a \cdot \vec b}{|\vec a| \cdot |\vec b|}
$$

###### 以上对比

如下欧氏距离(绿色直线) 与哈曼顿距离(褐色折现) 与余弦相似度(红色向量) 对比

![](https://www.helloimg.com/images/2022/04/18/RnsRZm.png)

###### 闵可夫斯基距离

$$
\begin{aligned}
  d
  &= \left( \sum_{i=1}^n |i_1 - i_2|^p \right)^{\frac{1}{p}}
\end{aligned}
$$

- 改变 p 的值,可以转化为其他距离:

  p=1 : 哈曼顿距离

  p=2 : 欧氏距离

  $p \rArr \infty$ : 切比雪夫距离

###### 杰卡德相似系数

Jaccard 相似系数就是 `交并比`, 可用于目标检测中 `目标位置-预测位置` 的相似度分析

$$
A = [a_1, a_2, ..., a_n] \qquad B = [b_1, b_2, ..., b_n]
\\ \ \\
J(A,B) = \frac{A \cap B}{A \cup B}
$$

![](https://www.helloimg.com/images/2022/04/18/Rnm1a9.png)

上面假定的是 A,B 中样本权重相同, 实际聚类中需要考量样本的权重

###### 相对熵

> 参见 [👽通信-信息论-开坑自埋](../../experience/basic/通信技术#相对熵)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

### 学习准则

#### 损失函数-loss

用于衡量样本给出的 `真实值` 与 模型输出的 `预测值` 之间的差异

下为几种常见的, 还有很多, 适用性不同

- 0-1 损失函数
  - 缺点是数学性质不好,不连续且导数为 0,难以优化
- 平方损失函数
- 交叉熵损失函数
- 均方差损失函数

---

##### 均方差损失函数

常用于回归问题, 对于真实值$\hat{y}$ 和预测值 $y$,其均方差

$$
\mathcal{L} = \frac{1}{2} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

均方差在几何意义上对应欧几里得距离 (欧氏距离)

- 基于 min(均方差 loss) 寻找最优模型的方法叫 `最小二乘法`

  在线性回归中应用的解释为: 寻找一条距所有真实值样本点 几何距离之和 最小的直线

  如何求 min(均方差 loss) ? -> 一种方法是求导,令导函数 = 0 求解

---

##### 交叉熵损失函数

- 分类问题常用交叉熵作为损失函数

  $$
  \begin{aligned}
    \mathcal{L}(\boldsymbol{y}, f(\boldsymbol{x} ; \theta))
    &=-\boldsymbol{y}^{\top} \log f(\boldsymbol{x} ; \theta) \\
    &=-\sum_{c=1}^{C} y_{c} \log f_{c}(\boldsymbol{x} ; \theta)

    \\ \ \\

    二分类loss: \mathcal{L}(y, \hat{y})
    &= - \left[ y \log \hat y + (1  - y) \log (1 - \hat y) \right]
  \end{aligned}
  $$

- 例题

  对于期末考试三种结果,假设 one-hot 标签编码:

  优秀 [1,0,0]\
  合格 [0,1,0]\
  不合格 [0,0,1]

  假设优秀,合格,不合格概率分别为:

  甲 [0.2,0.5,0.3]\
  乙 [0.2,0.2,0.6]

  实际二位都不合格

  ***

  分别求交叉熵:

  $$
  loss(甲) = -\left[0 \cdot \ln(0.2) + 0 \cdot \ln(0.5) + 1 \cdot \ln(0.3)\right] = 1.2
  \\ \ \\
  loss(乙) = -\left[0 \cdot \ln(0.2) + 0 \cdot \ln(0.2) + 1 \cdot \ln(0.6)\right] = 0.51
  $$

  预测值越接近真实标签,损失函数越小

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 过-欠拟合及处理

![](https://www.helloimg.com/images/2022/04/10/RtRLGQ.png)

一种是啥都没背过; 一种是背过了但只会死记硬背,不会其他的

- 可以用泛化误差来衡量拟合程度 <sup id='cite_ref-5'>[\[5\]](#cite_note-5)</sup>

  ![](https://www.helloimg.com/images/2022/04/10/RtRSAt.png)

  ***

- 过拟合处理:

  - 训练数据++
  - 降维
  - 正则化
  - 集成学习方法

- 欠拟合处理:
  - 添加新特征
  - 增加模型复杂度
  - 减小正则化系数

---

##### 正则化

保留所有特征 x,减少参数 w 大小 (给高次项或者所有项加上系数$\theta$来压制)

$$
y = w_1 x + w_2 x^2 + \theta x^3 + \theta w_4 x^4 \qquad 0 < \theta <= 1
$$

- 实际操作就是在目标函数(如损失函数)后加上一个范数:

  $$
  \begin{Vmatrix} x \end{Vmatrix}_p
  = \left( \sum_{i=1}^{n} |x|^p \right)^{\frac{1}{p}}
  $$

  p = 1 时为 `L1 范数`,所有系数绝对值之和

  $$
  \sum_{i=1}^{n} |x|
  $$

  p = 2 时为 `L2 范数`,所有系数平方和的开方

  $$
  \left( \sum_{i=1}^{n} |x|^2 \right)^{\frac{1}{2}}
  $$

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

### 优化算法

#### 梯度下降法

在使用最小二乘法计算 min(均方差 loss) 时,有可能会遇到逆矩阵不存在或者计算量巨大的情况

这时就可以用梯度下降法求 loss 极小值,进而找最小值

- 分类

  - 批量梯度下降法 BGD
  - 随机剃度下降法 SGD
  - 小批量随机梯度下降法 MBSGD

- 步骤: 对于 梯度$w$ 和其对应的 loss

  1. loss 是否足够小/迭代次数是否达到? -> 如果不够,就更新参数,继续迭代
  2. 梯度下降

     $$
     \begin{aligned}
     w_{t+1}
     &=w_{t}-\alpha \frac{\partial \mathcal{R}(w)}{\partial w_{t}} \\
     &=w_{t}-\alpha \frac{1}{N} \sum_{i=1}^{N} \frac{\partial \mathcal{L}\left(w_{t} ; x^{(i)}, y^{(i)}\right)}{\partial w}
     \end{aligned}
     $$

  3. 循环 1.

  ***

- 例题

  $$
  假设函数: J(w)=w^2 \quad
  假设起点: w^0=1 \quad
  学习率为: \alpha = 0.4 \\
  根据梯度下降公式迭代寻优
  $$

  $$
  \begin{aligned}
  w^0
    &= 1 \\
  w^1
    &= w^0 - \alpha \cdot J'(w^0) \\
    &= 1 - 0.4 \cdot 2 \\
    &= 0.2 \\
  w^2
    &= w^1 - \alpha \cdot J'(w^1) \\
    &= 0.04 \\
  w^3
    &= 0.008 \\
  w^4
    &= 0.0016 \\
  ...
  \end{aligned}
  $$

  ![](https://www.helloimg.com/images/2022/04/10/Rsusaq.png)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

#### 学习率

![](https://www.helloimg.com/images/2022/03/21/Ra66vc.png)

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

```pullquote mindmap mindmap-md
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
```

### GAN

![](https://www.helloimg.com/images/2022/04/08/Rsmdm0.png)

搜集大量 x 与 y 类型数据, GAN 模型可以自动学习 x 与 y 之间的关系

### 异常检测-anomaly-detection

![](https://www.helloimg.com/images/2022/04/08/Rsmvdm.png)

### Glow

Glow -> Flow-based generative model

生成网络属于 DNN,是一种常用的[无监督学习模型](#区分有-无监督学习)

<!--  -->

```pullquote mindmap mindmap-md
- 深度神经网络 DNN -> 生成网络
  - 生成对抗网络 GANs (Generative Adversarial Networks)
  - 变分自编码器 VAE (Variational Auto-Encoder)
  - Pixel RNN/CNN
  - 流模型 Glow (Generative Flow)
```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

{% mmedia "bilibili" "bvid:BV1J94y1f7u5" "page:1" %}

{% mmedia "bilibili" "bvid:BV16L411w7oQ" %}

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [一文看懂人工智能、机器学习、深度学习与神经网络之间的区别与关系](https://zhuanlan.zhihu.com/p/86794447)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [神经网络与深度学习](https://nndl.github.io/)

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [05-生成网络总结（VAE, GAN）](https://zhuanlan.zhihu.com/p/146600360)

<a name='cite_note-4' href='#cite_ref-4'>[4]</a>: [独热编码（One-Hot）及其代码](https://blog.csdn.net/qq_38651469/article/details/121100275)

<a name='cite_note-5' href='#cite_ref-5'>[5]</a>: [欠拟合、过拟合及如何防止过拟合](https://zhuanlan.zhihu.com/p/72038532)

<a name='cite_note-6' href='#cite_ref-6'>[6]</a>: [【上海交大】【腾讯】强强联合 机器学习+深度学习](https://www.bilibili.com/video/BV16L411w7oQ?p=6)
