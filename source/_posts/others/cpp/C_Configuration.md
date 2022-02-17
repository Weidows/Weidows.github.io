---
title: 👌茅塞顿开之C/C++-VScode-xmake
date: 2020-10-3 22:46:17
password: ""
tags:
  - C
  - VScode
  - Cmake
  - 备忘录
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/fsj7FMhOw2WpigX.jpg
top_img:
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-07 01:04:03
 * @FilePath: \Blog-private\source\_posts\others\cpp\C_Configuration.md
-->

- [编译器介绍](#编译器介绍)
- [环境安装](#环境安装)
- [多种运行方式](#多种运行方式)
  - [所用代码](#所用代码)
  - [方法一](#方法一)
  - [方法二](#方法二)
  - [方法三](#方法三)
  - [方法四](#方法四)
- [参考-推荐](#参考-推荐)
  - [C/C++开发模板](#cc开发模板)

## 编译器介绍

C/C++编译器好多种(因为编译依赖平台),而且名字起得特别扭,列几个常见的理理思路.

> 有一定基础的话可以根据此网页了解,并且推荐下此编译器集合: [WinLibs standalone build of GCC and MinGW-w64 for Windows](https://winlibs.com/)

- gcc + MinGW-w64

  - `gcc`(GNU Compiler Collection),多种语言(C/C++,Object-c,Fortran,D)的编译器

  - gdb(GNU Project debugger),调试器

  - MinGW , `MinGW-w64` (常叫做 `MinGW64`),win 平台的 C 库

    ```
    MinGW-w64是一套可自由使用和自由发布的Windows特定头文件和使用GNU工具集导入库的集合，它支持GCC编译器在Windows系统上创建的。它有分叉的。2007年，为了支持64位和新的api，此后被广泛使用和分布。

    MinGW 的全称是：Minimalist GNU on Windows 。它实际上是将经典的开源 C语言 编译器 GCC 移植到了 Windows 平台下，并且包含了 Win32API ，因此可以将源代码编译为可在 Windows 中运行的可执行程序。而且还可以使用一些 Windows 不具备的，Linux平台下的开发工具。一句话来概括：MinGW 就是 GCC 的 Windows 版本

    以上是 MinGW 的介绍，MinGW-w64 与 MinGW 的区别在于 MinGW 只能编译生成32位可执行程序，而 MinGW-w64 则可以编译生成 64位 或 32位 可执行程序。

    正因为如此，MinGW 现已被 MinGW-w64 所取代，且 MinGW 也早已停止了更新
    ```

  - 这几个结合起来就是 win 平台的 gcc 编译器了,一般在网上找的 mingw64 编译器会包含上面的三个 (你可以在 Dev C++中找到 mingw64 编译器)

---

- llvm

  - Clang
  - LLDB
  - OpenMP

  ```
  LLVM 是伊利诺伊大学的一个开源项目，LLVM 提供了完整的 C/C++工具链，Clang 属于其中的一个子项目，是 LLVM 原生的 ” C/C++/Objective-C” 编译器前端，Clang 负责完成词法分析和语法分析，并将分析结果转换为 Abstract Syntax Tree ( 抽象语法树 ) ，最后使用 LLVM 作为后端代码的生成器。

  Clang 的开发目标是提供一个可以替代 GCC 的前端编译器。与 GCC 相比，Clang 是一个重新设计的编译器前端，具有一系列优点，例如模块化，代码简单易懂，占用内存小以及容易扩展和重用等。由于 Clang 在设计上的优异性，使得 Clang 非常适合用于设计源代码级别的分析和转化工具。Clang 也已经被应用到一些重要的开发领域，如 Static Analysis 是一个基于 Clang 的静态代码分析工具。还有 vim 中的插件 YouCompleteMe 就是利用 Clang 完成语法分析并给出精确的自动补全和语法错误提示（即静态分析）。

  作者：衣介书生
  链接：https://www.jianshu.com/p/861c1a630059
  来源：简书
  ```

- msvc

  微软家的编译器, visual studio 内置的,通用性不强.

---

- 到这里再提一嘴这个工具: [WinLibs standalone build of GCC and MinGW-w64 for Windows](https://winlibs.com/)

  它内置了上面提到的 gcc/llvm 等工具,比较大所以库很丰富

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 环境安装

可以先去看下面的`多种运行方式`,再来找合适的环境.

- 编译器

  安装上面提到的 `winlibs` 或者 `mingw64 / msvc / llvm`...

  太过基础,不会百度.

- 编译工具

  这里选用 `xmake`,不用 cmake

  依赖管理工具用 xmake 自带的 xrepo,需要的话可以另装 `vcpkg`

- VScode 内插件

  必须: `C/C++`

  方法二: `Code Runner`

  方法四: `xmake`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 多种运行方式

排序: 简单 -> 困难

### 所用代码

- 单文件 `main.cpp`

  ```cpp
  #include <stdio.h>

  int main()
  {
    printf("hello");
    return 0;
  }
  ```

  ***

- 多文件

  - `0.cpp`

    ```cpp
    int a(){
      return 0;
    }
    ```

  - `0.h`

    ```cpp
    int a();
    ```

  - `1.cpp`

    ```cpp
    #include <stdio.h>
    #include <0.h>

    int main()
    {
      printf("hello-1,我,%d", a());
      return 0;
    }
    ```

---

### 方法一

最原始的运行方式,用不着解释:

```
g++ main.cpp -o main.exe
```

---

### 方法二

- 上面的虽简单但是繁琐

  于是 vscode 里有个插件 `code runner` 可以自动产生上面的命令,而且可以自定义,下面逐步讲解完善:

  ***

- 比如中文乱码问题:

  win 系统中终端默认按照 GBK 编码显示,但是程序输出是 UTF-8 编码的(除非源文件是 GBK 编码,但是不建议这么做)

  可以在代码运行前把终端编码页转到 utf-8 就行了

  修改 vscode 配置文件,`chcp 65001`就是转到 utf-8 页

  ```json
  "code-runner.executorMap": {
    "c": "chcp 65001 && gcc $fileName -o $fileNameWithoutExt && ./$fileNameWithoutExt",
    "cpp": "chcp 65001 && g++ $fileName -o $fileNameWithoutExt && ./$fileNameWithoutExt",
  }
  ```

  ***

- 转移生成文件

  默认生成的 xxx.exe 在同级目录,很影响观瞻,把它挪到 `workspaceRoot/build/`

  ```json
  "code-runner.executorMap": {
    "c": "chcp 65001 && gcc $fileName -o $workspaceRoot\\build\\$fileNameWithoutExt && $workspaceRoot\\build\\$fileNameWithoutExt",
    "cpp": "chcp 65001 && g++ $fileName -o $workspaceRoot\\build\\$fileNameWithoutExt && $workspaceRoot\\build\\$fileNameWithoutExt",
  }
  ```

  ***

- 再如多文件编译链接问题:

  默认的 Code Runner 执行的命令只能编译运行一个 C/C++源文件

  但是很多情况下需要编译链接多文件的项目,可以修改成这样:

  ```json
  "code-runner.executorMap": {
    "c": "chcp 65001 && gcc *.c -I . -o $workspaceRoot\\build\\$fileNameWithoutExt && $workspaceRoot\\build\\$fileNameWithoutExt",
    "cpp": "chcp 65001 && g++ *.cpp -I . -o $workspaceRoot\\build\\$fileNameWithoutExt && $workspaceRoot\\build\\$fileNameWithoutExt",
  }
  ```

  需要注意修改后目录下所有源文件都参与编译(不管项目是不是需要它)

- 再如编译时链接库 (可以这么干,但是并不好)

  ```json
  "code-runner.executorMap": {
    "c": "chcp 65001 && gcc *.c -I . -l glut32 -l glu32 -l opengl32 -o $workspaceRoot\\build\\$fileNameWithoutExt && $workspaceRoot\\build\\$fileNameWithoutExt",
    "cpp": "chcp 65001 && g++ *.cpp -I . -l glut32 -l glu32 -l opengl32 -o $workspaceRoot\\build\\$fileNameWithoutExt && $workspaceRoot\\build\\$fileNameWithoutExt",
  }
  ```

- 此项配置适用性很广

  文件堆放可以随意,文件名/目录名中`可以含有中文`

  缺点是无法调试,对需要依赖库的工程性项目不友好

---

### 方法三

- 通过 vscode 本身,也是可以 run/debug 的

  在 vscode 内右键文件内容,有个`生成和调试活动文件`,不用动回车几下

  会生成下面两个文件,然后应该就能 run/debug 了

  ```
  |> .vscode
    |> launch.json
    |> task.json
  ```

  - <details>

      <summary> 默认生成文件内容 </summary>

    ***

    ```json
    {
      // 使用 IntelliSense 了解相关属性。
      // 悬停以查看现有属性的描述。
      // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
      "version": "0.2.0",
      "configurations": [
        {
          "name": "g++.exe - 生成和调试活动文件",
          "type": "cppdbg",
          "request": "launch",
          "program": "${workspaceRoot}\\build\\${fileBasenameNoExtension}.exe",
          "args": [],
          "stopAtEntry": false,
          "cwd": "${fileDirname}",
          "environment": [],
          "externalConsole": false,
          "MIMode": "gdb",
          "miDebuggerPath": "gdb.exe",
          "setupCommands": [
            {
              "description": "为 gdb 启用整齐打印",
              "text": "-enable-pretty-printing",
              "ignoreFailures": true
            }
          ],
          "preLaunchTask": "C/C++: g++.exe 生成活动文件"
        }
      ]
    }
    ```

    ```json
    {
      "tasks": [
        {
          "type": "cppbuild",
          "label": "C/C++: g++.exe 生成活动文件",
          "command": "D:\\Game\\Scoop\\apps\\winlibs-mingw-llvm\\current\\bin\\g++.exe",
          "args": [
            "-fdiagnostics-color=always",
            "-g",
            "${file}",
            "-o",
            "${fileDirname}\\${fileBasenameNoExtension}.exe"
          ],
          "options": {
            "cwd": "${fileDirname}"
          },
          "problemMatcher": ["$gcc"],
          "group": {
            "kind": "build",
            "isDefault": true
          },
          "detail": "调试器生成的任务。"
        }
      ],
      "version": "2.0.0"
    }
    ```

    </details>

- 介绍一下其调用流程:

  按 F5 调试 -> launch.json -> preLaunchTask -> tasks.json -> g++ -> main.cpp -> main.exe

  反过来看,最先执行的是 task.json 里的 g++.exe (看 args 那里跟上面的第二种运行方式里很像)

  g++ 生成了 main.exe 文件,然后 launch.JSON 中的 gdb.exe 接过来 main.exe 开始调试

- 跟上面方法二类似,可以修改参数来添加功能

- launch.json

  ```json
  {
    // 使用 IntelliSense 了解相关属性。
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "name": "g++.exe - 生成和调试活动文件",
        "type": "cppdbg",
        "request": "launch",
        "program": "${workspaceRoot}\\build\\${fileBasenameNoExtension}.exe",
        "args": [],
        "stopAtEntry": false,
        "cwd": "${fileDirname}",
        "environment": [],
        "externalConsole": false,
        "MIMode": "gdb",
        "miDebuggerPath": "gdb.exe",
        "setupCommands": [
          {
            "description": "为 gdb 启用整齐打印",
            "text": "-enable-pretty-printing",
            "ignoreFailures": true
          }
        ],
        "preLaunchTask": "C/C++: g++.exe 生成活动文件"
      }
    ]
  }
  ```

- tasks.json

  ```json
  {
    "version": "2.0.0",
    "tasks": [
      {
        "type": "cppbuild",
        "label": "C/C++: g++.exe 生成活动文件",
        "command": "g++",
        "args": [
          "-g",
          "*.cpp",
          "-I",
          ".",
          "-o",
          "${workspaceRoot}\\build\\${fileBasenameNoExtension}.exe"
        ],
        "options": {
          "cwd": "${fileDirname}"
        },
        "problemMatcher": ["$gcc"],
        "group": {
          "kind": "build",
          "isDefault": true
        }
      }
    ]
  }
  ```

  ***

- 再介绍一下利弊

  比第二个方法自定义性更强,`可以直接输出中文不乱码`

  缺点也很上头,`源文件名字/路径中不能带中文` (不信可以试试,直接报错)

---

### 方法四

- 上面的几个方法比较面向小 demo,最后这个是`面向工程性`的 (需要一定能力基础)

  使用 `xmake.lua` 替换了上面方法中的拼接参数行为,而且可以通过 xmake 管理链接库/编译器等,比如:

  ```lua
  -- 引用.lib形式的静态库会报错,所以要用shared动态链接库版本
  add_requires("freeglut",{configs = {shared = true}})

  -- 全局添加依赖
  add_packages("freeglut")

  -- 同一 target 只能有一个 main(),否则需要另起名字
  target("test")
      set_kind("binary")
      add_files("src/test/*.cpp")

      -- 单个添加依赖,当已经全局添加时,会产生歧义,添加静态版本
      add_packages("freeglut")

      -- 更改编译器,比如 gcc/clang/msvc...
      add_toolchains("gcc")
  ```

  ***

- 深入过程中试过其他的工具链: cmake / vcpkg / conan, 为什么选用的 `xmake + xrepo + vcpkg` ? 对比一下吧

  cmake 语法很怪,学习成本高配置难,尤其是与其搭配的 vcpkg/conan 安装的依赖引入比较棘手,网上对它的诟病很多

  conan 库少,而且结合 cmake 体验起来并不如 xmake+xrepo

  xmake 自带 xrepo,而且 xrepo 可以装 vcpkg/conan/brew 的库,而且支持中文路径/文件名

  再装个 vcpkg 用来搜索库以及提供给 xrepo 调用安装库 (这个需要安装 visualstudio buildtools 英文版本)

- 坏处

  网上用 cmake 的人/项目很多,对于 xmake 的教程还是比较稀缺

  不过能走到这步的大都可以自行探索了..

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 参考-推荐

### [C/C++开发模板](https://github.com/Weidows/C--)

参考了很多文章/教程,迭代了数个版本,下面是脚印

> [xmake 从入门到精通 10：多个子工程目标的依赖配置](https://tboox.org/cn/2019/12/13/quickstart-10-target-deps/)\
> [基于 VSCode 和 CMake 实现 C/C++开发 | Linux 篇](https://www.bilibili.com/video/BV1fy4y1b7TC?p=23)\
> [xmake vs cmake 对比分析](https://zhuanlan.zhihu.com/p/67854244)\
> [SFUMECJF/cmake-examples-Chinese](https://github.com/SFUMECJF/cmake-examples-Chinese)\
> [打包一沓开源的 C/C++ 包管理工具送给你！](https://zhuanlan.zhihu.com/p/79872095)
