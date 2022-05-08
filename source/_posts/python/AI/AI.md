---
title: 🐊All-about-AI
password: ""
tags:
  - 人工智能
  - 机器学习
  - 深度学习
  - doing
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
 * @LastEditTime: 2022-05-05 23:47:03
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

- 嗟叹

  炼丹界门派好多啊, 一派一传承

  师出少林, 修行武当, 行至小河, 探头一照

  欸, 爷竟是峨眉的 🐵

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 体系概览

- 人工智能是什么? <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup><sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

  > ![](https://www.helloimg.com/images/2022/02/27/GVidNr.png)\
  > ![](https://www.helloimg.com/images/2022/03/09/RCPHaM.png)

下面包含细分文章的索引 (可点击跳转)

{% pullquote mindmap mindmap-lg %}

- AI
  - 研究领域
    - [机器学习](../ML)
      - [深度学习](../DL)
    - CV 计算机视觉
      - 图像识别
      - 机器视觉
    - 语音信息处理
      - 文本->语音
      - 语音->文本
    - 自然语言处理 NLP
      - 文本生成
      - 文本分类
      - 翻译
      - ...
    - ROS 机器人系统
  - 框架和库
    - Tenserflow
    - Pytorch
    - sklearn
    - 飞桨
    - ...
  - 表示学习
    - 表示
      - 为了提高机器学习系统的准确率,就需要将输入信息转换为有效的特征
    - 数据表示是机器学习的核心问题
    - 底层特征与高层语义之间存在语义鸿沟,如何在鸿沟上搭桥是表示学习的关键
    - 表示方法
      - 局部表示/离散表示/符号表示
        - 如: 红 绿 蓝
      - 分布式表示
        - 优点
          - 表示能力强
          - 向量维度低
          - 相似度容易计算
        - 例如: (255,0,0), (0,255,0)
    - 嵌入
      - 将一个度量空间中的一些对象映射到另一个低维的度量空间中
      - 并尽可能保持不同对象之间的拓扑关系,比如自然语言中词的分布式表示

{% endpullquote %}

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 数据分析

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

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 待办

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
