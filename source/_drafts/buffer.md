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

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2022-04-16 00:38:40
 * @LastEditors: Weidows
 * @LastEditTime: 2022-08-15 11:02:26
 * @FilePath: \Blog-private\source\_drafts\buffer.md
 * @Description:
 * @!: *********************************************************************
-->

## 点云

### CloudCompare

默认密度颜色 蓝->绿->黄->红

双击右键拖动, 按下中键上下移动会缩放

---

### PCD

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
