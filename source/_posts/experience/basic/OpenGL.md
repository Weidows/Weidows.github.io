---
title: 🥵OpenGL-xmake-蚌埠住了
password: ""
tags:
  - Python
  - OpenGL
  - C
  - conan
katex: false
comments: true
aside: true
date: 2021-09-19 22:37:25
cover: https://www.helloimg.com/images/2022/02/27/GVLyTX.png
top_img:
---

# OpenGL-xmake-蚌埠住了

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-04-20 23:48:47
 * @FilePath: \Blog-private\source\_posts\experience\basic\OpenGL.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [OpenGL-xmake-蚌埠住了](#opengl-xmake-蚌埠住了)
  - [代码仓库](#代码仓库)
  - [Python](#python)
    - [报错](#报错)
    - [测试](#测试)
  - [C](#c)
    - [xmake-引入库](#xmake-引入库)
    - [测试](#测试-1)
    - [实例代码库](#实例代码库)

{% endpullquote %}

- 学校开了图形学这门课程,让我们配置下环境

  老师给的是 VS + OpenGL + C/C++ + 复制库文件 的方式

- 转路

  1. `VScode + Python + pyopengl 库`

  2. `Vscode + C++ + xmake(需要VisualStudio) + 各种库` (推荐方法)

  ***

- 网上找了找,并不是能很顺畅的捅下来 (因为依赖项比较杂)

## [代码仓库](https://github.com/Weidows/C--/tree/master/src/OpenGL)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Python

- 先装 vscode 和 Python / anaconda,这俩没问题

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

画个静态茶壶, 就是文章封面图

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

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## C

如果你喜欢 VScode 调试 C/C++,而不想用比较复杂的 Visual Studio

如果你想通过简单的配置就让 VScode 能调试 OpenGL

恭喜,马上就好!

首先,按照我另一篇文章: [👌 茅塞顿开之 C/C++-VScode-xmake](../../../others/cpp/C_Configuration) 配置好 `vscode + C/C++` 的开发环境

---

### xmake-引入库

xmake 自带的 xrepo 可以安装 xrepo/vcpkg/conan 的库

- 需要注意一下:

  虽然我这里使用 vscode + xmake,但是安装依赖时仍需要调用 visualstudio,必须安装

  需要安装的有两个: `buildtools + visualstudio community`

  <img src="https://www.helloimg.com/images/2022/02/27/GVLoVo.png" alt="20211120115814" />

  buildtools 也就是生成工具只有那一个,裸装就好,里面的东西不用装

  visualstudio community 的话什么版本都行,xmake 都支持了,它里面必须装 `C++ 桌面开发`,不能装成其他的

  <img src="https://www.helloimg.com/images/2022/02/27/GVA21S.png" alt="20211120115909" />

  语言包记得选中+英! 不然识别不到

  <img src="https://www.helloimg.com/images/2022/02/27/GVSD4n.png" alt="20211120120254" />

---

### 测试

- xmake.lua

  ```lua
  -- 引用.lib形式的静态库会报错,所以要用shared动态链接库版本
  add_requires("freeglut",{configs = {shared = true}})

  -- 全局添加依赖
  add_packages("freeglut")

  target("MazeGame")
      set_kind("binary")
      add_files("test.cpp")
  target_end()
  ```

- test.cpp

  ```c
  #include <GL/glut.h>
  #include <stdlib.h>
  void Initial(void)
  {
    glMatrixMode(GL_PROJECTION); //设置投影参数，表示下面进行投影变换。若改GL_PROJECTION为GL_MODEVIEW则进行视图变换。
    glLoadIdentity();            //通常我们在需要进行投影变换时要把当前矩形设置为单位矩阵，即glLoadIdentity()
    gluOrtho2D(0.0, 200.0, 0.0, 200.0);
  }

  void Display(void)
  {
    glClear(GL_COLOR_BUFFER_BIT);
    glPushMatrix(); //操作矩阵堆栈,调用函数，相当于把矩阵放到堆栈上
    glColor3f(1.0f, 1.0f, 1.0f);
    glTranslated(100, 100, 0);
    glTranslated(70, 0, 0);
    glRotated(-90, 0, 0, 1);
    glScaled(0.25, 0.25, 0.0);
    glTranslated(-100, -100, 0);
    glBegin(GL_POLYGON);
    glVertex2f(50, 50);
    glVertex2f(150, 50);
    glVertex2f(100, 150);
    glEnd();
    glPopMatrix();

    glBegin(GL_POLYGON); //opengl要求指定顶点的位置必须在glBegin()后面，同时在glEnd()后面。
    glVertex2f(50, 50);
    glVertex2f(150, 50);
    glVertex2f(100, 150);
    glEnd();
    glFlush();
  }

  int main(int argc, char **argv)
  {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB); //使用单缓存模式，如果GLUT_DOUBLE则为双缓存模式
    glutInitWindowSize(600, 600);                //设置窗口大小
    glutInitWindowPosition(100, 100);            //设置窗口位置
    glutCreateWindow("Triangle");
    glutDisplayFunc(Display);
    Initial();
    glutMainLoop();
  }
  ```

---

### [实例代码库](https://github.com/Weidows/C--)
