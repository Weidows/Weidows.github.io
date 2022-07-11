---
# https://github.com/alvarosabu/slidev-theme-penguin#text-window-text-window
theme: penguin
layout: intro
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2022-06-27 11:53:30
 * @LastEditors: Weidows
 * @LastEditTime: 2022-07-05 15:56:30
 * @FilePath: \Blog-private\scaffolds\slidev\Zurich.md
 * @Description:
 * @!: *********************************************************************
-->

# 调研报告

刘伟, 2022.7.5

---

# 基本信息-1

|                  |                                                                                                                                       |
| :--------------: | :------------------------------------------------------------------------------------------------------------------------------------ |
|     论文题目     | [Fog Simulation on Real LiDAR Point Clouds for 3D Object Detection in Adverse Weather](https://github.com/MartinHahner/LiDAR_fog_sim) |
|     研究方向     | 3D 探测点云数据的增强模拟                                                                                                             |
| 会议/出版年/分区 | ICCV 2021 \| CCF-A \| 1/2 区                                                                                                          |
|       作者       | Martin Hahner, Christos Sakaridis, Dengxin Dai, Luc van Gool                                                                          |
|     一作单位     | [Computer Vision Lab of ETH Zurich](https://www.trace.ethz.ch/publications.html)                                                      |

---
layout: new-section
---

# 场景

![](/Zurich/1656991893875.png)

- 雾天下, 水粒子使雷达返回的数据中掺杂虚假数据
- the sensor cannot fully “see through fog”.

---

# 动机

近年来已经出现用于3D对象检测的LIDAR数据集, 但它们都不能应对不良天气的评估

导致在这些数据集上训练出的模型, 在不良天气下表现鲁棒性差

此论文针对 `雾` 进行模拟, 对数据集进行增强

---
layout: text-image
media: '/Zurich/1656994342093.png'
---

# 拟解决的问题

- 数据采集:

   收集和标记大规模数据集时间, 劳动和成本消耗高

   在不利的天气条件下更加难以完成

- 雾天鲁棒性

  强度: red (low) -> cyan (high)

  左下的图中, 由于雾粒子影响, 产生浅蓝色异常标记

  右下的图为增强后, 雾粒子的影响被降低甚至消弭

- 雾噪声的一个特征: 它`不是`在传感器周围`均匀分布`的。

  相反，噪声的存在取决于传感器一定范围以下视线中是否存在目标

  如图中, 靠山一侧噪声影响明显小于空旷的一侧

---

# 解决方案

建模光学系统模型, 在雷达探测角度对雾粒子进行物理模拟

并引入一个简单的线性系统模型，以描述激光雷达接收器的接收信号功率

通俗理解就是对数据集进行`数据增强`, 使训练出的模型在天气维度对 "晴天的" 拟合度降低, 增强不良天气下的泛化能力/鲁棒性


---
layout: new-section
---

# 结果展示

![](/Zurich/1656996444113.png)

- 使用增强后的数据集训练出的模型的评估
- 对比可见, 在多数情况下, AP均有一定提升

---

---

# 基本信息-2

|                  |                                                                                                     |
| :--------------: | :-------------------------------------------------------------------------------------------------- |
|     论文题目     | [LiDAR Snowfall Simulation for Robust 3D Object Detection](https://github.com/SysCV/LiDAR_snow_sim) |
|     研究方向     | 3D 探测点云数据的增强模拟                                                                           |
| 会议/出版年/分区 | Oral at CVPR 2022 \| CCF-A \| 1 区                                                                  |
|       作者       | Martin Hahner, Christos Sakaridis, Mario Bijelic, Felix Heide, Fisher Yu, Dengxin Dai, Luc van Gool |
|     一作单位     | [Computer Vision Lab of ETH Zurich](https://www.trace.ethz.ch/publications.html)                    |

---
layout: new-section
---

# 场景

![](/Zurich/teaser.gif)

- 正常天气下自动驾驶车 3D Detection 的点云数据集 (代码适用于 SeeingThroughFog 数据集)
- 添加雪粒子与潮湿路面数据, 以模拟雪天路面环境

---

# 动机

1. 由于真实场景中会遇到`不良天气` (雨雪, 沙尘, 浮尘等), 这些介质会很大程度上影响激光雷达的测量精度与真实度

2. 种种原因导致, `不良天气数据采集困难`

3. 在这种`未经处理的`正常天气数据集上训练出的模型, 雪天场景下的预测`鲁棒性偏低`

---
layout: text-image
media: '/Zurich/1656392810220.png'
---

# 拟解决的问题

在晴天下自动驾驶车 3D Detection 的点云数据集上进行`雪+湿地模拟`, 使模型在雪天场景下具有更好的鲁棒性

右面是对同一真实场景下, 无增强与增强下的 3D 预测对比:

  - 左图, 有多个异常预测框, 正确结果中预测精度也欠佳

  - 右图, 数据集增强雪+湿度后, 预测能力更准确 (无异常预测框, 真实框与预测框的重合度高)

---

# 解决方案

对雪粒子进行显式采样并将其建模为不透明球体来模拟降雪

1. 基于物理的方法
2. 模拟降雪和湿路面(反射因素)
3. 对晴天下激光雷达获取的点云数据进行数据增强

---

左侧Clear为未受干扰的输入。右图显示了我们的降雪模拟（顶部）和Lisa（底部）中的降雪模拟。

模拟了散射，并且仅衰减受单个雪花影响的点，而不是根据其距离衰减所有点。

![](/Zurich/1657007250634.png)

---
layout: intro
---

# Thanks!
