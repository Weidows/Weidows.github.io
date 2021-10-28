---
title: 🥵OpenGL-conan-蚌埠之路
categories:
  - experience
  - basic
tags:
  - Python
  - OpenGL
  - C
  - conan
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
 * @LastEditTime: 2021-10-28 16:03:07
 * @FilePath: \Blog-private\source\_posts\experience\basic\OpenGL.md
 * @Description:
 * @!: *********************************************************************
-->

- [简介](#简介)
- [Python](#python)
  - [报错](#报错)
  - [测试](#测试)
- [C](#c)
  - [下载-引入库](#下载-引入库)
  - [改配置](#改配置)
  - [注意点](#注意点)
  - [测试](#测试-1)
- [依赖管理](#依赖管理)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 简介

- 大三了,学校开了图形学这门课程,让我们配置下环境

  老师给的是 VS + OpenGL + C/C++ 的方式

  我...一向写 Java 的,没怎么接触过 VS,装了几次不好用卸载了

- 转路

  1. `VScode + Python + pyopengl 库`

  2. `Vscode + C++ + opengl 库`

  ***

- 网上找了找,并不是能很顺畅的捅下来 (因为依赖项比较杂)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## C

如果你喜欢 VScode 调试 C/C++,而不想装体型庞大的 Visual Studio

如果你想通过简单的配置就让 VScode 能调试 OpenGL

恭喜,马上就好!

首先,按照我另一篇文章: [👌茅塞顿开之C/C++-VScode-xmake](../../C/C_Configuration.md) 配置好 `vscode + C/C++` 的开发环境

---

### 下载-引入库

> 下载压缩包: [OpenGL-library](https://github.com/Weidows-projects/Programming-Configuration/releases/tag/1.0.0) \
> 在 Vscode 里调试的话,用的是 `glut.64.zip` ,另一个 32.zip 是给 Visual Studio 用的 \
> 把压缩包里的文件,严格按照目录名复制到你的编译器里 (MinGW64 / Clang / gcc 里面都会有对应目录) \
> 参照: [Win10 + VSCode + GLUT 配置](http://t.zoukankan.com/cralor-p-14015063.html)

---

### 改配置

- 在编译时需要加上 `-l glut32 -l glu32 -l opengl32` 这一段才行, 需要做两个修改

- .vscode/tasks.json

  ```json
  {
    "version": "2.0.0",
    "tasks": [
      {
        //这是我的g++环境配置
        "type": "shell",
        "label": "C/C++: gcc.exe build active file",
        "command": "g++", //就是在shell里输入的gcc
        "args": [
          "-g",
          "${file}",
          "-o",
          "${fileDirname}\\${fileBasenameNoExtension}.exe",
          "-l",
          "glut32",
          "-l",
          "glu32",
          "-l",
          "opengl32"
        ],
        "problemMatcher": ["$gcc"],
        "group": {
          "kind": "build",
          "isDefault": true
        }
      } //gcc配置到这里结束
    ]
  }
  ```

- .vscode/tasks.json

  ```json
  {
    "C_Cpp.errorSquiggles": "Enabled",
    "files.associations": {
      "stdlib.h": "c",
      "stdio.h": "c",
      "string.h": "c",
      "math.h": "c",
      "glut.h": "c",
      "windows.h": "c"
    },
    "code-runner.executorMap": {
      "c": "chcp 65001 && gcc *.c -o $fileNameWithoutExt -l glut32 -l glu32 -l opengl32 && ./$fileNameWithoutExt",
      "cpp": "chcp 65001 && g++ *.cpp -o $fileNameWithoutExt -l glut32 -l glu32 -l opengl32 && ./$fileNameWithoutExt",
      "pde": "processing-java --force --sketch=$dir --output=$dir/out --run"
    }
  }
  ```

> 完整链接: https://github.com/Weidows-projects/Programming-Configuration/tree/master/others/.vscode

---

### 注意点

有点小遗憾,VScode 的调试器并不能很好的兼容中文,意思就是如果 C/Cpp `文件路径/文件名有中文` 的话 debug 会报错

不过通过 Code Runner 直接运行的话就算有中文也没问题

---

### 测试

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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 依赖管理

- 起因

  搞到的 C/C++代码头文件总是会缺少某些库 (比如 glux,glaux 这种)

  硬从网上找 binary 复制进编译器格外的不优雅,而且需要的库一旦多起来十分繁琐

  ***

- 于是,找了一下 C/C++的依赖管理工具:

  比较流行的是 vcpkg / conan

  [vspkg 安装必须需要 visualstudio](https://github.com/microsoft/vcpkg/blob/master/README_zh_CN.md#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B-windows),劝退我了
