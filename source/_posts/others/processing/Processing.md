---
title: 用VScode编写调试Processing.pde程序
date: 2020-10-2 23:56:50
password: ""
tags:
  - Processing
  - VScode
  - 备忘录
cover: https://www.helloimg.com/images/2022/02/27/GVJHQY.png
top_img:
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-10-28 15:41:52
 * @FilePath: \Blog-private\source\_posts\experience\processing\Processing.md
-->

- [环境需求](#环境需求)
- [编译环境](#编译环境)
- [进阶玩法](#进阶玩法)
  - [结合 Code Runner](#结合-code-runner)
  - [安装`Processing中文助手`](#安装processing中文助手)

## 环境需求

- 需要在电脑里下载好 Processing 主程序.

  - 这个 processing 主程序可以由 Scoop 安装(免去配置环境变量).

  - 不然需要在 Path 里添加上主程序目录,如 `D:\\Game\\Scoop\\apps\\processing\\current\\processing-java`

- 在 VScode 里安装`Processing Language`插件,它支持语法高亮和代码补全

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 编译环境

- 找到工作区目录下的 `.vscode/tasks.json` ,添加以下代码(已优化过:)

  ```
    {
      "label": "Run Sketch",
      "type": "shell",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "command": "${config:processing.path}",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "dedicated"
      },
      "args": [
        "--force",
        "--sketch=${fileDirname}",
        "--output=${fileDirname}\\out",
        "--run"
      ],
      "windows": {
        "args": [
          "--force",
          "--sketch=${fileDirname}",
          "--output=${fileDirname}\\out",
          "--run"
        ]
      }
    }
  ```

- 上面的代码是在 tasks:[]层级内部,为避免覆盖其他环境配置(比如 gcc),需要格外注意,可以参考我的如下配置

---

- 现在就可以按`Ctrl + shift + B`编译运行了.
  - 注意! .pde 文件必须放在一个同名的文件夹中,而且名字不能是纯数字(`尽量按着 Java 起名`),举个大栗子

```
- root
  - project_1
    - project_1.pde         正确
    - project_2.pde         名字与文件夹不匹配,不会被编译,无效
  - project_2
    - 1.pde                 名字不合法
  - a.pde                   路径不对
```

## 进阶玩法

### 结合 Code Runner

- 找到`VScode-Code Runner`插件配置文件里的`code-runner.executorMap`,参照其他语言在{}里添加如下代码
  ```
  "pde": "processing-java --force --sketch=$dir --output=$dir\\out --run",
  ```
- 现在,写完.pde 按上面的快捷键或 Code Runner 的`小三角`都可以运行了!

### 安装`Processing中文助手`

- 装上就对了,反正挺好用的
