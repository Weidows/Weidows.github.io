---
title: 🥵硬啃-Machine-Learning
password: ""
tags:
  - 人工智能
  - 机器学习
  - math
  - 信息论
  - python
  - doing
katex: true
comments: true
aside: true
date: 2022-04-20 20:21:09
cover: https://www.helloimg.com/images/2022/04/20/RHZuZ1.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-08-28 23:08:27
 * @FilePath: \Blog-private\source\_posts\python\AI\ML.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-lg %}

- 机器学习
  - [何为机器学习](#何为机器学习)
  - [学习方式](#学习方式)
    - 深度学习
    - 监督
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
      - [评估方法](#评估方法)
      - 优化方法
  - [基本问题](#基本问题)
    - 回归问题
    - 分类问题
    - 聚类问题
    - 降维问题
    - 强化问题
  - 三要素
    - 模型
      - 线性方法
      - 非线性方法/广义线性方法
    - [超参的学习-更新](#超参的学习-更新)
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

{% endpullquote %}

## 代码

> 本篇所用到的代码在这: [👀Code-4-Machine-Learning](../../code/ML)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 何为机器学习

- 随机取市场上一些芒果样本为训练数据,教给机器怎么判断好坏

  $$
  品质 = func([特征])
  $$

  `输入为特征`: [颜色, 大小, 形状, 产地, 品牌]

  `输出为品质`: [好, 坏]

  ***

训练模型时, 输入输出都告诉它, 让它自动学会建立 `特征<->品质` 之间的关系

下次买芒果时可以根据要购买芒果的特征,使用此模型预测芒果的品质

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 学习方式

### 区分有-无监督学习

三方面区别: <sup id='cite_ref-3'>[\[3\]](#cite_note-3)</sup>, 也有混合形式的半监督学习

|          |        监督学习(supervised)         | 无监督学习(self-supervised) |
| :------: | :---------------------------------: | :-------------------------: |
| 训练数据 |       $(x_{样本}, y_{标签})$        |         $x_{样本}$          |
| 学习目标 |        映射关系 $x \rArr y$         |        x 的内在结构         |
| 适用场景 | 分割/检测/回归(标签连续)/分类(离散) |  聚类、特征学习或密度估计   |

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 强化学习-RL

- Reinforcement Learning:

  我们不清楚如何标记样本/无法说明什么样本数据特征是更好的,但是可以指明什么是好的终点

  比如围棋,没啥可标记的数据, 也很难说明哪一步更好,只能指明`快点赢`为最终结果

  对不同决策结果进行赏罚,使结果趋近期望结果

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 数据预处理

### 均值移除

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 范围缩放

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 归一化

转化后的数据在 [0,1] , 反应某数据在当前行所占比重

例:对于 sample 某 row 中的值 a

$$
a' = \frac{a}{\sum_{i=1}^n |row[i]|}
$$

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 二值化

设置阈值,大于阈值的设为 1,小于阈值的设为 0

没啥可说的...不举例了

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### OneHot-独热编码

独热编码是稀疏矩阵的一种应用 <sup id='cite_ref-8'>[\[8\]](#cite_note-8)</sup>

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 标签编码

可以理解为上面独热编码的子步骤,一言以蔽之:

[红,黄,蓝,黄] -> [1,2,3,2]

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 评估方法

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 基本问题

- 回归-分类问题

  ![](https://www.helloimg.com/images/2022/04/08/RsMidr.png)

  回归: 输出连续, 例如预测房价股价

  分类: 输出离散, 例如产品质量好坏检测,手写体识别

- 聚类: 把输入数据相似度高的堆一起

  例如把各种水果照片聚类出来,分出品种

  对于购物网站, 可以根据用户对商品的喜好度, 搞出`推荐算法`

- 降维问题

> 借个图 <sup id='cite_ref-6'>[\[6\]](#cite_note-6)</sup> > ![](https://www.helloimg.com/images/2022/04/26/RlX7Tb.png)

---

### 回归问题

#### 线性回归

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 多项式回归

从几何角度理解就是把直线变成了曲线

$$
\begin{aligned}
  y
  &= w_0 + w_1 x + w_2 x^2 + ... w_n x^n \\
  &= \sum_{i=1}^{n} w_i x^i
\end{aligned}
$$

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### Lasso-岭回归

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 决策树-随机森林

decision tree, 决策树可用于 classification + regression; 学习决策树需要用到[信息论知识](../../experience/basic/通信技术#信息熵-如何度量信息) 参考课程: <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>

#### 简化概念

- CART 决策树选择算法

  ![](https://www.helloimg.com/images/2022/04/11/RtsbJ9.png)

- 随机森林

  不同的特征选择方式产生不同的决策树,组在一起就是随机森林

  ![](https://www.helloimg.com/images/2022/04/11/RtsWMP.png)

---

#### 分类

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

#### 信息增益

$$
杜撰一个概念: 信息增益 gain(X,Y) = H(X) - H(X|Y)
$$

- 通过上面分类的例子可知, `gain(X,Y)` 就是熵下降/确定度增加的关键

  回过头来,条件 Y (如 sepal lenth <= 5.45) 是怎么选取的?

  遍历特征组和取值区间,找到 max( gain(X,Y) ),即为熵下降最多的条件;

  (当然也需要考虑到类似贪心-DP 的区别, 全是贪心的话会让模型单一化, 所以很多时候需要`随机筛掉一部分条件`来使得条件`较优`而不是`最优`)

---

#### 深度与过拟合

深度增加虽然能降低训练集错误率,但泛化能力会减弱->过拟合

![](https://www.helloimg.com/images/2022/04/13/R4453D.png)

---

#### 随机森林

- 自动聚合-BootStrap

  对训练数据集进行多次有放回的随机采样 (有的样本可能从未采样,有的可能采样多次) -> 随机森林 [DT1, DT2... DTn]

- 如何 roll 出来数据集中部分随机数据? (比如取 80%)

  1. for i in dataset

  2. if Math.random() < 0.8: random_set.append(i)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 分类问题

从思想和实现角度看, 有下面很多种分类

- 线性模型 (Linear Models)
  - 逻辑回归 (Logistic Regression)
- 朴素贝叶斯 (Naive Bayes)
- 决策树 (Decision Trees)
- 支持向量机 (Support Vector Machines)
- 随机梯度下降 (Stochastic Gradient Descent)
- 最近邻 (Nearest Neighbors)
- 高斯过程 (Gaussian Processes)
- 集成方法/投票分类器 (Ensemble methods / voting classifier)
- 多类别多输出 / 多类别多标签分类 (Multiclass and multioutput algorithms / multiclass and multilabel classification)

---

#### 逻辑回归

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 支持向量机-SVM

##### target

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

##### 线性可分-不可分

如上面的图示, 样本可被直线/超平面分开 (线性可分), 支持向量所在两虚线之间没有其他向量,即为 `线性可分 SVM`

如果两虚线间存在样本, 即为 `线性 SVM`; 如果样本无法被直线/超平面分开 (线性不可分), 即为 `非线性 SVM`

![](https://www.helloimg.com/images/2022/04/15/Riakiv.png)

对于线性不可分问题,可通过 `核函数` 进行特征变换来 `升维`

---

##### 核函数

常用的有为 1 和 3, 多项式核函数用处较少

1. 线性核函数 Linear

   不做升维,直接找直线/超平面; 类似美国地图,分割直来直去的

   ![](https://www.helloimg.com/images/2022/04/16/RiXoc0.png)

2. 多项式核函数 poly (Polynomial Kernel)

   通过增加高次项升维, 此函数复杂度升的很快

3. 径向基核函数-高斯核函数 rbf (Radial Basis Function Kernel)

   相对于多项式核函数,大多数情况下参数更少性能更高; 直线分不了的无脑冲 rbf

   ![](https://www.helloimg.com/images/2022/04/16/RiXFVm.png)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 朴素贝叶斯

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 聚类问题-cluster

就像是人群根据 hobby 扎堆, 输入的数据根据某些特征的相似度分出多个"簇"

聚类问题属于无监督学习 (无需指明训练样本所属类别)

---

#### 样本-相似度度量

对于两点 $(x_1,y_1,...n_1),(x_2,y_2,...n_2)$

##### 欧氏距离

无视路径阻碍的空间绝对 distance

$$
\begin{aligned}
  d
  &= \left| (x_1, y_1, ..., n_1), (x_2, y_2, ..., n_2) \right| \\
  &= \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2 + ... + (n_1 - n_2)^2} \\
  &= \sqrt{\sum_{i=x}^n (i_1 - i_2)^2}
\end{aligned}
$$

##### 曼哈顿距离

计量阻碍,可以理解为寻路问题,同一曼哈顿距离可有多种路径解法

$$
\begin{aligned}
  d
  &= |x_1 - x_2| + |y_1 - y_2| + ... + |n_1 - n_2| \\
  &= \sum_{i=x}^n | i_1 - i_2 |
\end{aligned}
$$

##### 余弦相似度

cosine similarity, $cos 在 [0, \pi]$ 上为减函数, 在 [45°, 135°] 区间下降快

余弦相似度对向量敏感度: 方向 > 长度

$$
cos(\theta) = \frac{\vec a \cdot \vec b}{|\vec a| \cdot |\vec b|}
$$

##### 以上对比

如下欧氏距离(绿色直线) 与哈曼顿距离(褐色折现) 与余弦相似度(红色向量) 对比

![](https://www.helloimg.com/images/2022/04/18/RnsRZm.png)

##### 闵可夫斯基距离

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

##### 交并比-IOU-杰卡德相似系数

Jaccard 相似系数/交并比可用于目标检测中 `目标位置-预测位置` 的相似度分析

$$
A = [a_1, a_2, ..., a_n] \qquad B = [b_1, b_2, ..., b_n]
\\ \ \\
J(A,B) = \frac{A \cap B}{A \cup B}
$$

![](https://www.helloimg.com/images/2022/04/18/Rnm1a9.png)

![](https://www.helloimg.com/images/2022/05/21/ZCYX1g.png)

上面假定的是 A,B 中样本权重相同, 实际聚类中需要考量样本的权重

##### 相对熵

> 参见 [👽 通信-信息论-开坑自埋](../../../experience/basic/通信技术#相对熵)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 聚类算法划分

##### 原型-K-Means

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

##### 层次-AGNES

hierarchical clustering, 通过分层 -> 树形聚类结构 -> 聚类结果

- 可采用 `自顶向下DIANA / 自底向上AGNES` 的划分方式

  AGNES (AGglomerative NESting)最初将每个对象作为一个簇,然后这些簇一步步地合并。两个簇间的距离由这两个不同簇中距离最近的数据点对的相似度来确定；聚类的合并过程反复进行直到所有的对象最终满足簇数目。

  DIANA (DIvisive ANAlysis)算法是上述过程的反过程,属于分裂的层次聚类,首先将所有的对象初始化到一个簇中,然后根据一些原则(比如最大的欧式距离),将该簇分类。直到到达用户指定的簇数目或者两个簇之间的距离超过了某个阈值。

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

    使得簇内距离平方和最小,簇间平方和最大

  ***

  如下为以上四类对于含噪点样本的聚类效果,最小距离聚类效果最好

  ![](https://www.helloimg.com/images/2022/04/18/RnHSln.png)

---

##### 密度-DBSCAN

density-based clustering, 通过样本分布密度来考察样本间的可连接性, 逐步拓展连接成最终聚类结果

- 几种密度聚类实现算法:

  噪声密度 DBSCAN 聚类算法

  密度最大值聚类

  AP (Affinity Propagation)

  谱聚类

- 常用 `噪声密度 / DBSCAN 算法`

  允许噪声的基于密度的空间聚类 DBSCAN (Density-Based Spatial Clustering of Applications with Noise)

  只要样本点的密度大于某阈值,则将该样本添加到最近的簇中。这类算法能克服基于距离的算法只能发现 `高斯分布/类圆形(凸)` 的聚类缺点,可发现任意形状的聚类,且对噪声数据不敏感。但计算密度单元的计算复杂度大,需要建立空间索引来降低计算量

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 模型-衡量指标

##### 均一性-homogeneity

一个簇中只包含一个类别的样本

##### 完整性-completeness

同类别样本被归类到相同簇中

##### V-measure

均一性与完整性的加权平均

$$
V(\beta) = \frac{(1+\beta)hc}{\beta h +c}
$$

##### ARI-AMI

![](https://www.helloimg.com/images/2022/04/18/RnnlxC.png)

##### 轮廓系数-Silhouette

a: 当前样本与簇内样本距离均值

b: min(当前样本与其他簇样本距离均值)

![](https://www.helloimg.com/images/2022/04/18/RnndCY.png)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 降维问题

比如在 3 维空间 xyz 内有一条线段, 我们只想知道线段的 x 信息, 可以把线段映射到 x-axis 上 (损失 yz-axis 上的信息)

降维作用: 降低时间-空间复杂度,使数据易于分析展示 (维度越高的图人类越难理解) <sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 缺失值比率

Missing Value Ratio, 去掉缺失值大于某一阈值的特征列

---

#### 低方差过滤

Low Variance Filter, 对于某些列, 所有值的方差很小/样本没啥区别, 可以不用其做特征

---

#### 随机森林

Random Forest, 随机森林可以自动计算各个特征的重要性, 便于寻找最优+最小的特征子集

---

#### 反向特征消除

Backward Feature Elimination, 用数据集中 n 个样本训练模型, 每次删除一个样本, 找出对模型影响最小的样本删除

---

#### 前向特征选择

Forward Feature Selection,前向特征选择其实就是反向特征消除的相反过程,即找到能改善模型性能的最佳特征,而不是删除弱影响特征.它背后的思路如下所述：

1. 选择一个特征,用每个特征训练模型 n 次,得到 n 个模型.
2. 选择模型性能最佳的变量作为初始变量.
3. 每次添加一个变量继续训练,重复上一过程,最后保留性能提升最大的变量.
4. 一直添加,一直筛选,直到模型性能不再有明显提高.

---

#### 因子分析

Factor Analysis, 因子分析是一种常见的统计方法,它能从多个变量中提取共性因子,并得到最优解.

在因子分析中,我们将变量按其相关性分组,即特定组内所有变量的相关性较高,组间变量的相关性较低.我们把每个组称为一个因子,它是多个变量的组合.和原始数据集的变量相比,这些因子在数量上更少,但携带的信息基本一致.

---

#### 主成分分析-PCA

通过正交变换将原始的 n 维数据集变换到一个新的被称做主成分的数据集中,即从现有的大量变量中提取一组新的变量.下面是关于 PCA 的一些要点：

1. 主成分是原始变量的线性组合.
2. 第一个主成分具有最大的方差值.
3. 第二主成分试图解释数据集中的剩余方差,并且与第一主成分不相关 (正交).
4. 第三主成分试图解释前两个主成分等没有解释的方差.

映射不包含任何数据内部的分类信息, 因此一般 PCA 降维后数据表示更有效但或许分类更加困难

---

#### LDA

Linear Discriminant Analysis / Fisher Linear Discriminant 是一种有监督的 supervised 线性降维算法

LDA 充分利用数据的标签信息, 一般 LDA 降维后可以直接分类

假设原始数据集表示为 X,(m\*n 矩阵,m 是维度,n 是 sample 的数量), 目标是找到映射向量 a, 使得 a‘X 后的数据点能够保持以下两种性质：

1. 同类的数据点尽可能的接近 (within class)

2. 不同类的数据点尽可能的分开 (between class)

---

#### 局部线性嵌入-LLE

非线性降维, 可使数据降维后较好的保持 `流形结构` ,适用于 flow-learninh

---

#### 拉普拉斯特征映射-LE

Laplacian-Eigenmaps, 也是一种常用的流形降维算法, 思想也近似 LLE

<!-- TODO 暂时搁置
https://zhuanlan.zhihu.com/p/100002630 -->

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 超参的学习-更新

### 损失函数-loss

loss function, 也叫代价函数 cost function

用于衡量样本给出的 `真实值` $\hat{y}$ 与 模型输出的 `预测值`y 之间的差异

> 损失函数将 `寻找最优参数` 问题转换为了 `寻找损失函数最小值` 问题

---

#### 均方差损失函数-MSE

mean squared error, 常用于回归问题, 对于真实值$\hat{y}$ 和预测值 $y$,其均方差

$$
\mathcal{L} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

均方差在几何意义上对应欧几里得距离 (欧氏距离)

- 基于 min(均方差 loss) 寻找最优模型的方法叫 `最小二乘法`

  在线性回归中应用的解释为: 寻找一条距所有真实值样本点 几何距离之和 最小的直线

  如何求 min(均方差 loss) ? -> 一种方法是求导,令导函数 = 0 求解

---

#### 交叉熵损失函数

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

- 比如下图的二分类模型 <sup id='cite_ref-9'>[\[9\]](#cite_note-9)</sup>

  ![](https://www.helloimg.com/images/2022/08/28/ZzsJYR.png)

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 过-欠拟合及处理

![](https://www.helloimg.com/images/2022/04/10/RtRLGQ.png)

一种是啥都没背过; 一种是背过了但只会死记硬背,不会其他的

- 可以用泛化误差来衡量拟合程度 <sup id='cite_ref-5'>[\[5\]](#cite_note-5)</sup>

  ![](https://www.helloimg.com/images/2022/04/10/RtRSAt.png)

  ***

{% pullquote mindmap mindmap-md %}

- 处理
  - 过拟合
    - 训练数据++, 数据增广
    - 早停
    - 降维
    - 正则化
    - 集成学习方法
  - 欠拟合
    - 添加新特征
    - 增加模型复杂度
    - 减小正则化系数

{% endpullquote %}

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 早停

Early Stopping <sup id='cite_ref-7'>[\[7\]](#cite_note-7)</sup>

![](https://www.helloimg.com/images/2022/05/19/Ry4m8h.png)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 优化算法

### 梯度下降法

在使用最小二乘法计算 min(均方差 loss) 时,有可能会遇到逆矩阵不存在或者计算量巨大的情况

这时就可以用梯度下降法求 loss 极小值,进而找最小值

- 分类

  - 批量梯度下降法 BGD
  - 随机剃度下降法 SGD
  - 小批量随机梯度下降法 MBSGD

![](https://www.helloimg.com/images/2022/05/14/R7AFVm.png)

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

- <details>

    <summary> 例题 </summary>

  ***

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

  </details>

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 学习率

![](https://www.helloimg.com/images/2022/05/19/Ry4edA.png)

- 学习率退火

  如果学习率不变,对于初期来说学习率偏低, 收敛慢 loss 下降慢

  对于后期来说又偏大,导致难以收敛, loss 止步不降

  ![](https://www.helloimg.com/images/2022/05/19/Ry4EX0.png)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 正则化

保留所有特征 x,减少参数 w 大小 (给高次项或者所有项加上系数$\theta$来压制)

$$
y = w_1 x + w_2 x^2 + \theta x^3 + \theta w_4 x^4 \qquad 0 < \theta <= 1
$$

- 实际操作就是在目标函数(如损失函数)后加上一个范数:

  $$
  \begin{Vmatrix} x \end{Vmatrix}_p
  = \sqrt{\sum_{i=1}^{n} |x_i|^p}
  $$

  p = 1 时为 `L1 范数 (曼哈顿范数)`,所有系数绝对值之和

  $$
  \sum_{i=1}^{n} |x|
  $$

  p = 2 时为 `L2 范数 (欧几里得范数)`,所有系数平方和的开方

  $$
  \sqrt{\sum_{i=1}^{n} |x_i|^2}
  $$

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 权重初始化

就像是 KMeans 一样, $w,b$ 的初始化对训练的性能和结果也会有很大影响

- 一种方法是随机初始化

  ![](https://www.helloimg.com/images/2022/05/19/Ry4J2m.png)

- 另一种就是参考已经训练好的优秀模型的调参

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 图像增广-DataAugmentation

![](https://www.helloimg.com/images/2022/05/19/Ry4toc.png)

1. 防止过拟合
2. 增强模型泛化能力

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [【上海交大】【腾讯】强强联合 机器学习+深度学习](https://www.bilibili.com/video/BV16L411w7oQ?p=6)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [12 种降维方法终极指南 (含 Python 代码)](https://zhuanlan.zhihu.com/p/43225794)

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [05-生成网络总结 (VAE, GAN)](https://zhuanlan.zhihu.com/p/146600360)

<a name='cite_note-4' href='#cite_ref-4'>[4]</a>: [独热编码 (One-Hot)及其代码](https://blog.csdn.net/qq_38651469/article/details/121100275)

<a name='cite_note-5' href='#cite_ref-5'>[5]</a>: [欠拟合、过拟合及如何防止过拟合](https://zhuanlan.zhihu.com/p/72038532)

<a name='cite_note-6' href='#cite_ref-6'>[6]</a>: https://scikit-learn.org/stable/tutorial/machine_learning_map/

<a name='cite_note-7' href='#cite_ref-7'>[7]</a>: [4 小时入门深度学习+实操 MMDetection 第一课](https://www.bilibili.com/video/BV1ou411k7fD?p=6)

<a name='cite_note-8' href='#cite_ref-8'>[8]</a>: [一篇关于机器学习中的稀疏矩阵的介绍](https://zhuanlan.zhihu.com/p/34534763)

<a name='cite_note-9' href='#cite_ref-9'>[9]</a>: [“交叉熵”如何做损失函数？打包理解“信息量”、“比特”、“熵”、“KL 散度”、“交叉熵”](https://www.bilibili.com/video/BV15V411W7VB/?t=1499.6)
