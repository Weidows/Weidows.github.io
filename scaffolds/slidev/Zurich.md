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
 * @LastEditTime: 2022-06-30 10:07:28
 * @FilePath: \Blog-private\scaffolds\slidev\Zurich.md
 * @Description:
 * @!: *********************************************************************
-->

# 调研报告

刘伟, 2022.6.27

---

# 基本信息

|                  |                                                                                                     |
| :--------------: | :-------------------------------------------------------------------------------------------------- |
|     论文题目     | LiDAR Snowfall Simulation for Robust 3D Object Detection                                            |
|     研究方向     | 3D 探测点云数据的增强模拟                                                                           |
| 会议/出版年/分区 | Oral at CVPR 2022 \| CCF-A \| 1 区                                                                  |
|       作者       | Martin Hahner, Christos Sakaridis, Mario Bijelic, Felix Heide, Fisher Yu, Dengxin Dai, Luc van Gool |
|     一作单位     | Computer Vision Lab of ETH Zurich                                                                   |

---
layout: new-section
---

# 场景

![](/Zurich/teaser.gif)

正常天气下自动驾驶车 3D Detection 的点云数据集 (代码适用于 SeeingThroughFog 数据集)

---

# 动机

- 由于真实场景中会遇到`不良天气` (雨雪, 沙尘, 浮尘等), 这些介质会很大程度上影响激光雷达的测量精度

- 在这种`未经处理的数据集`上训练出的模型, 雪天场景下的预测`鲁棒性偏低`

---
layout: text-image
media: '/Zurich/1656392810220.png'
---

# 拟解决的问题

在晴天下自动驾驶车 3D Detection 的点云数据集上进行`雪+湿地模拟`, 使模型在雪天场景下具有更好的鲁棒性

右面是对同一真实场景下, 无增强与增强下的 3D 预测对比

可见在数据集增强雪+湿度后, 预测能力更准确 (异常预测框数量, 真实框与预测框的重合度)

---

# 解决方案

1. 基于物理的方法
2. 模拟降雪和湿路面
3. 对晴天下激光雷达获取的点云数据进行数据增强

通俗理解就是对数据集进行`数据增强`, 使训练出的模型在天气维度对 "晴天的" 拟合度降低, 增强不良天气下的泛化能力/鲁棒性

---
layout: intro
---

# Thanks!
