---
title: 一篇文章帮你装好C/C++和VScode环境
categories:
  - experience
  - C
tags:
  - C
  - VScode
  - 备忘录
cover: https://i.loli.net/2020/11/30/fsj7FMhOw2WpigX.jpg
# top_img: https://cdn.jsdelivr.net/gh/Weidows/Images/
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2020-11-30 22:04:49
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog\source\_posts\experience\C\C_Configuration.md
-->

# 配置 `C/C++`语言环境

- 下载`MinGW64编译器`,这个应该不用安装,解压到想放的位置就行(注意存放路径不要出现中文)
- 然后打开`MinGW64\bin`并复制其路径,比如:
  `D:\Game\Demo\Dev-Cpp\MinGW64\bin`
- 打开系统属性配置`环境变量`,在`Path`中新建添加以上路径
- 好了,现在 gcc/g++编译器可以正常使用了

---

# VScode 内插件配置

- 下载`C/C++`插件,这个是必须的,功能支持很全面
- 再下载`Code Runner`,用于直接通过一条指定指令来编译运行程序(除非不嫌麻烦想敲又臭又长的命令行执行,否则这个插件是最优选择)

---

# VScode 工作区配置

- 以上配置还不能使用 VScode 直接编译运行 C/Cpp 文件,需要配置工作区的编译运行逻辑(各个工作区分别配置),其配置文件是在名为.vscode 的文件夹下,结构参下:
  - 注意如果已存在其他语言配置(如 Java,Python 等),需要结合内容`谨慎插入`,以免原有配置失效!
  - C/C++运行调试环境仅需`launch.json`和`task.json`
  - 注意如果代码源文件取名`包含中文`肯定会导致调试程序`报错`(但是可以用 Code Runner 运行)

```
- .vscode
  - launch.json
  - setting.json
  - task.json
```

## `launch.json`

```
{
  "version": "0.2.0",
  "configurations": [
    {
      //C/C++配置开始
      "name": "C/C++", // 配置名称，将会在启动配置的下拉菜单中显示
      "type": "cppdbg", // 配置类型，这里只能为cppdbg
      "request": "launch", // 请求配置类型，可以为launch（启动）或attach（附加）
      "program": "${fileDirname}//${fileBasenameNoExtension}.exe", // 将要进行调试的程序的路径
      "args": [], // 程序调试时传递给程序的命令行参数，一般设为空即可
      "stopAtEntry": false, // 设为true时程序将暂停在程序入口处，一般设置为false
      "cwd": "${workspaceFolder}", // 调试程序时的工作目录，一般为${workspaceRoot}即代码所在目录 workspaceRoot已被弃用，现改为workspaceFolder
      "environment": [],
      "externalConsole": true, // 调试时是否显示控制台窗口，一般设置为true显示控制台
      "MIMode": "gdb",
      "miDebuggerPath": "gdb.exe", // miDebugger的路径，注意这里要与MinGw的路径对应
      "preLaunchTask": "C/C++: gcc.exe build active file",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ]
    } //配置结束
  ]
}
```

## `task.json`

```
{
  "version": "2.0.0",
  "tasks": [
    {
      //这是我的g++环境配置
      "type": "shell",
      "label": "C/C++: gcc.exe build active file",
      "command": "g++", //就是在shell里输入的gcc
      "args": ["-g", "${file}", "-o", "${fileDirname}\\${fileBasenameNoExtension}.exe"],
      "problemMatcher": ["$gcc"],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    } //gcc配置到这里结束
  ]
}
```

## [源码 Github 链接](https://github.com/Weidows/Programming-Configuration/blob/master/.vscode)

---

# `重头戏!`--解决乱码问题

- 接下来,个人找到了一个解决方案,不敢说全网独一份,但是咱确实没见到过.
- 因为 MinGW64 编译器并不能指定源文件编码,而且 Windows 系统下终端默认使用的是`GBK`显示,于是只能用 GBK 保存运行才不乱码(但是 VScode 调试使用的是 UTF-8 编码),于是,种种冲突`乱码了`...

## 解决方案:

- 源文件`使用UTF-8`编码,改写 Code Runner 运行规则(找到配置文件里面的`code-runner.executorMap`),修改如下:

```
"c": "chcp 65001 && gcc *.c -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
"cpp": "chcp 65001 && g++ *.cpp -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
```

- 其原理就是让 Windows 下的 Console 在运行时转到 UTF-8 代码页 65001 显示(因为默认情况下为 GBK936 页会使 UTF-8 输出数据乱码)
  - `提倡任何语言都使用UTF-8`编码,当然如果是 Linux/Mac 系统下不需要更改代码页,需要把上面相应的`chcp 65001 &&`去掉.

## 另外一个问题---多文件编译

- 默认的 Code Runner 执行的命令只能编译运行一个 C/C++源文件,但是很多情况下需要编译链接多文件的项目,上面我提供的命令支持编译同一目录下的所有 C/C++源文件
  - 但是需要注意修改后此目录下所有源文件都参与编译(不管项目是不是需要它),所以需要格外注意源文件所属的目录及层级结构.
