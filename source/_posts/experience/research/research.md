---
title: ⏲️误入科研海
password: ""
tags:
  - research
  - math
  - dataset
  - 人工智能
  - 深度学习
  - 点云
  - 自动驾驶
katex: false
comments: true
aside: true
date: 2022-07-10 21:21:09
cover: https://www.helloimg.com/images/2022/07/11/ZW7GFn.gif
top_img:
---

# 误入科研海

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-09-10 11:21:21
 * @FilePath: \Blog-private\source\_posts\experience\research\research.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [误入科研海](#误入科研海)
  - [序](#序)
  - [关于调研](#关于调研)
  - [一些经验](#一些经验)
    - [学会拆字](#学会拆字)
    - [读论文](#读论文)
  - [点云](#点云)
    - [分析工具](#分析工具)
      - [CloudCompare](#cloudcompare)
      - [PCD-Decode](#pcd-decode)
    - [某次组会分享](#某次组会分享)
      - [组成成分-数据转换分析](#组成成分-数据转换分析)
      - [VirtualLiDAR-转换和组成](#virtuallidar-转换和组成)
      - [时间同步-配准问题](#时间同步-配准问题)
      - [虚拟问题及双端任务流](#虚拟问题及双端任务流)
      - [标注问题](#标注问题)
      - [其它问题](#其它问题)
      - [欧阳老师给的提议](#欧阳老师给的提议)
  - [借物表](#借物表)

{% endpullquote %}

## 序

偶然的机会进了某大学的 Lab (简历里写了), 很感谢某位大佬 🥰

就这样, 下面记一些个人经验..

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 关于调研

师姐开会时经常提到, 要站在第三人称视角读 paper, 不要被代入读者身份或者完全顺着作者思路思考

now.clear, 意思大概就是: `how > what`

1. how they think, not what..

2. how they do, not what..

3. how they show, not what..

---

- 在做调研时着重看下:

  1.  paper 提出的问题

  2.  如何着手解决和实现 (精髓就是 1. -> 2. 中间的思路, 应该叫`问题建模`)

  对于优秀和有借鉴价值的实现, 可以看一看. 至于研究背景, 结果分析对比之类的, 是作者为了给 paper 加分, 对我们调研没啥用

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 一些经验

### 学会拆字

听到一个概念不要马上去大脑数据库搜索, 之所以叫脑海, 是因为它有乱流和旋涡

比如 `元数据` 这个词, 乍一听很抽象是吧, 脑子也能马上返回 Metadata 这个词, 但具体想解释就会云里雾里

> '元'即为'关于...的', 所以一组元数据是指'一组关于 xxx 的映射数据' <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>

---

### 读论文

入门时还是相当困难的, 拿过来一篇英文文献不知道怎么下手, 来回翻译也不知所云

所以还是建议练一下 `论文跟读` <sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 点云

没地方写了, 暂时写在这..

### 分析工具

#### CloudCompare

默认密度颜色 蓝->绿->黄->红

双击右键拖动, 按下中键上下移动会缩放

---

#### PCD-Decode

如下通过 ImHex 提取出来的 PCD 文件头, 第三行说的是含有反射率 intensity 信息

```
# .PCD v0.7 - Point Cloud Data file format
VERSION 0.7
FIELDS x y z intensity
SIZE 4 4 4 4
TYPE F F F F
COUNT 1 1 1 1
WIDTH 54298
HEIGHT 1
VIEWPOINT 0 0 0 1 0 0 0
POINTS 54298
DATA binary_compressed
5�
```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 某次组会分享

#### 组成成分-数据转换分析

此数据集并没很清晰的给出制作流程/数据流向, 分析起来难在这里, 就像是分析饭店里的菜是怎么做的一样, 知道原料和结果但不知道过程

下面通过数据流形式做的分析, 下图全流程为核心, 本质上是 `两个跨模态融合系统+一个通信系统`

![](https://www.helloimg.com/images/2022/08/03/Z0AQzP.png)

```json
{
  "images": [
    {
      "file_name": "/root/DataSets/DAIR-V2X/cooperative-vehicle-infrastructure//infrastructure-sideimage/000009.jpg",
      "calib": {
        "cam_intrinsic": [
          2186.359688, 0.0, 968.712906, 0.0, 2332.160319, 542.356703, 0.0, 0.0,
          1.0
        ],
        "Tr_velo_to_cam": {
          "translation": [
            [-5.779144404715124],
            [6.037615758600886],
            [1.0636424034755758]
          ],
          "rotation": [
            [-0.0638033225610772, -0.9910914864003576, -0.04429948490729328],
            [-0.2102873406178483, 0.043997692433495696, -0.7987692871343754],
            [0.97575114561348, -0.06031492538699515, -0.17158543199893228]
          ]
        }
      }
    }
  ]
}
```

上面是 annos 内的文件格式, 为图像的内/外参, 下面是分析 (`->`所指向的为"原料")

```
# annotations 标注
annos
  # 图片文件
  "file_name" -> image

  # 相机内参
  "cam_intrinsic" -> calib/camera_intrinsic."cam_K"

  # LiDAR 到 Camera 的外参矩阵, 反过来就是 Camera 到 LiDAR 的 (相机外参)
  "Tr_velo_to_cam"-> calib/virtuallidar_to_camera
```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### VirtualLiDAR-转换和组成

![](https://www.helloimg.com/images/2022/08/03/Z0ADvR.png)

image + annos + label/camera => 图像的 3D 标注

velodyne(点云 pcd 文件) + label/virtuallidar => 点云的 3D 标注

虚拟 LiDAR 坐标系到虚拟世界坐标系的转换就简单了, 只需要通过 `calib/virtuallidar_to_world` 就可以

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 时间同步-配准问题

路端/车端分别有个 GPS 管位置和时间同步, 同一端内 Camera 和 LiDAR 的时间通过 GPS 授时应该是一致的

所以在硬件不出问题的情况下, 同一端的时间问题可以不用考虑, 可以考虑跨端问题 (但是个人感觉, 在 GPS 授时准确的情况下, 车端与路端通信距离最远也就几十米, 也不用考虑跨端导致的时差问题)

插一嘴, 感觉文档里所说的 "分别以 Camera 和 LiDAR 时间戳为基准" 有歧义, 他想表达的应该是 "同一时间戳下的 Camera 与 LiDAR 是一对", 而不是说 Camera 与 LiDAR 各自为政分别计时

在时间方面, 需要考虑的应该是车-路两端的通信时延, 几十 ms 的短时延是没问题的, 可以视为软实时, 车端的决策可以滞后一些来等待路端的指示

从经验上来看, 难点应该是如何让车-路两端设备 `迅速匹配连接`, 日常用的手机 4G/5G 网正常就是几十 ms 延迟, 但是手机与基站在匹配连接阶段需要耗费好几秒 (不知道在设备选用方面能不能解决这问题)

---

> 提出问题: 车端接收到路端给的数据, 必然是几十 ms 之前的, 我们可以考虑做这个配准

1. 决策滞后, 比如设置阈值 100ms, 如未收到路端返回的数据,就只用车端的进行决策
2. 让路端进行路线预测, 逼近实时

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 虚拟问题及双端任务流

GPS 是精准到经纬度位置的, 为了防止路端信息泄露/侵犯隐私权(车端数据自用所以不用转换), 路端设备需要把绝对位置通过 GPS 转为相对位置 (也就是虚拟化)

![](https://www.helloimg.com/images/2022/08/03/Z0ANiM.png)

- 车端做的是:

  1. 探测到前方 xx 米处有辆车, 记下来路况
  2. 连接路端告诉路端本车 GPS, 等待并接收路端传回的虚拟世界坐标系, 对路况查漏补缺
  3. 根据记下的路况规划行驶

---

- 路端做的是:

  1. 探测到周围有车 A 和 B, 以路端设备 GPS 位置为中心构建虚拟世界坐标系
  2. 收到某车 GPS 实时定位/relative pose (比如 A 车的), 把虚拟世界坐标系中心转为 A 车的 GPS, 并传给 A

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 标注问题

下面分别为图像与 LiDAR 的标注文件, 我原以为的精度问题以及数据转换是误解, 实际上是两模态都做了标注

```json
{
  "type": "Car",
  "truncated_state": "0",
  "occluded_state": "0",
  "alpha": "0",
  "2d_box": {
    "xmin": 768.12085,
    "ymin": 747.97583,
    "xmax": 1002.4884040000001,
    "ymax": 1021.312134
  },
  "3d_dimensions": { "h": 0.955531, "w": 2.036715, "l": 4.234148 },
  "3d_location": { "x": "20.233591", "y": "-6.118915", "z": "-1.906110" },
  "rotation": 0.02090169484402715
}
```

```json
{
  "type": "Car",
  "truncated_state": "0",
  "occluded_state": "0",
  "alpha": "0",
  "2d_box": {
    "xmin": 768.12085,
    "ymin": 747.97583,
    "xmax": 1002.4884040000001,
    "ymax": 1021.312134
  },
  "3d_dimensions": { "h": 1.688849, "w": 1.804866, "l": 4.234148 },
  "3d_location": {
    "x": 20.22032661649286,
    "y": -6.165649086415965,
    "z": -0.8846375190174429
  },
  "rotation": 0.02090180743721963
}
```

图像做的是 2D+3D, 点云只做了 3D 标注, 2D 标注一模一样所以不用分析

关于两模态的 3D 标注框重合度问题, 暂且认为是点云标注质量不好 (点云下车辆形状大小需要人为估量)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 其它问题

annos.images.file_name 存在格式问题

"/root/DataSets/DAIR-V2X/cooperative-vehicle-infrastructure//infrastructure-sideimage/000028.jpg"

<!-- TODO -->

fix_require

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

#### 欧阳老师给的提议

(有待商榷)

清标签/找一个工具改一下

图像到点云不准, 过滤地面可以降低标注难度
有可能外参有问题

一波人做数据清洗/标注修正
另一拨人, 做一下 IoU 统计, 融合分析

寻找问题所在: 什么噪声导致 3D 框重合度有问题

欧阳老师提到的 `Cloud Compare` 可以对比两点云之间的差别

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [元数据（MetaData）](http://www.ruanyifeng.com/blog/2007/03/metadata.html)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [【论文必读 ResNet】residual 如此多娇，引无数英雄竞折腰](https://www.bilibili.com/video/BV1XU4y1X7b5/)
