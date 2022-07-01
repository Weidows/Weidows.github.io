---
title: 👩‍❤️‍💋‍👨Code-4-Deep-Learning
password: ""
tags:
  - 人工智能
  - 深度学习
  - python
katex: false
comments: true
aside: true
date: 2022-04-21 00:26:11
cover: https://www.helloimg.com/images/2022/04/21/RHe8xK.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-04-20 23:11:24
 * @FilePath: \Blog-private\scaffolds\post.md
 * @Description:
 * @!: *********************************************************************
-->

## 序

此文为其他文章的代码部分:

> [⚡再啃-Deep-Learning](../../AI/DL)

也提供了 notebook 形式: [代码地址](https://github.com/Weidows-projects/public-post/blob/main/notebook/DL/DL.ipynb)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>


## 神经网络

### 感知器



```python
def AND(x1, x2):
    w1, w2, theta = 0.5, 0.5, 0.7
    tmp = x1 * w1 + x2 * w2
    if tmp <= theta:
        return 0
    else:
        return 1


def OR(x1, x2):
    w1, w2, theta = 0.5, 0.5, 0.2
    tmp = x1 * w1 + x2 * w2
    if tmp <= theta:
        return 0
    else:
        return 1


# 非门只取一个输入,另一个不管
def NOT(x1, x2):
    w1, w2, theta = -1, 0, 0
    tmp = x1 * w1 + x2 * w2 + 1
    return tmp


# 异或门是非线性运算, 需要多层感知器组合
def XOR(x1, x2):
    # 异或门 = (与非门 与 或门)
    return AND(OR(x1, x2), not AND(x1, x2))


print(AND(0, 1), AND(1, 1), OR(0, 1), OR(0, 0))
print(NOT(0, 1), NOT(1, 1), NOT(0, 0), NOT(1, 0))
print(XOR(0, 1), XOR(1, 1), XOR(0, 0), XOR(1, 0))

```

    0 1 1 0
    1 0 1 0
    1 0 0 1


<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

暂无..
