---
title: 🥵OpenGL-蚌埠之路
categories:
  - others
  - python
tags:
  - Python
  - OpenGL
katex: false
comments: true
aside: true
date: 2021-09-19 22:37:25
cover: https://i.loli.net/2021/09/19/u7wXjUH6bPNnMaL.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-09-24 08:55:24
 * @FilePath: \Blog-private\source\_posts\others\python\OpenGL.md
 * @Description:
 * @!: *********************************************************************
-->

- [简介](#简介)
- [配置环境](#配置环境)
  - [报错](#报错)
  - [测试](#测试)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 简介

- 大三了,学校开了图形学这门课程,让我们配置下环境

  老师给的是 VS + OpenGL + C/C++ 的方式

  我...做 Java 的,没怎么接触过 VS,也没装; C/C++功底也不强

  转 `VScode + Python + pyopengl 库` 这条路,好装好写好调试.

  ***

- 网上找了找,并不是能很顺畅的捅下来

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 配置环境

- 先装 vscode 和 Python/anaconda,这俩没问题

- 通过 pip (conda 不行) 安装 `pyopengl` 库

  - 有的教程装的是 `pyglet`,这个库官方解释是 "pyglet is a cross-platform games and multimedia package."

  - 虽然 pyglet.gl 可以调 OpenGL API,但是鉴于 Ctrl CV 工作,还是老老实实用 pyopengl 库吧

  ***

### 报错

直接通过 pip 在线安装的话是装的 32 位的库,在 64 位机子上跑不起来

> 报错 [“OpenGL.error.NullFunctionError: Attempt to call an undefined function”解决方案](https://blog.csdn.net/feilong_csdn/article/details/61421002)

必须去下载适合本机的离线包安装: [下载地址](https://www.lfd.uci.edu/~gohlke/pythonlibs/#pyopengl)

比如我是 win_64,py_3.8 ; 需要下载的是: `PyOpenGL-3.1.5-cp38-cp38-win_amd64.whl`,然后安装

```
# 把之前的版本先卸载,否则安装也无效
pip uninstall pyopengl
pip install PyOpenGL-3.1.5-cp38-cp38-win_amd64.whl
```

---

### 测试

画个静态茶壶

```python
from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *


def drawFunc():
    glClear(GL_COLOR_BUFFER_BIT)
    glutWireTeapot(0.5)
    glFlush()


glutInit()
glutInitDisplayMode(GLUT_SINGLE | GLUT_RGBA)
glutInitWindowSize(400, 400)

#参数为b类型而不是string
glutCreateWindow(b"Teapot")
glutDisplayFunc(drawFunc)
glutMainLoop()
```
