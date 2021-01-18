---
title: 💥系统开发环境配置
categories:
  - system
tags:
  - 计算机系统
  - 备忘录
cover: https://i.loli.net/2020/12/04/6XQhlDpwVMmnG4H.png
top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-12-04 11:38:58
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-17 23:59:12
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\system\system_variable.md
 * @Description:
-->

- [环境变量含义:](#环境变量含义)
  - [环境变量含义](#环境变量含义-1)
  - [系统/用户环境变量](#系统用户环境变量)
  - [环境变量与 Path](#环境变量与-path)
- [Scoop](#scoop)
- [JDK](#jdk)
- [Maven](#maven)
- [Git](#git)
- [ssh](#ssh)
- [Python](#python)
- [Node.js](#nodejs)

# 环境变量含义:

## 环境变量含义

- 理解含义很大程度上就能明白自己到底错在哪里,有些问题靠百度很难搜出来,但是真正解决需要的时间可能远小于百度搜的时间
- Windows 系统上一般使用的终端 console 是 cmd(虽然很辣鸡但还是得用它)
  - 这个终端可以直接调用启动`.cmd`/`.bat`/`.exe`这种后缀名的文件
    - (你可以在你配置的语言\bin\目录下轻易找到 XXX.exe 等等这种文件)
  - 如果不输入这种文件的具体路径,终端没法找到这个文件到底在哪里
  - 于是环境变量就相当于在 cmd 上登了记,不写路径直接写名字就能启动,比如环境变量设置为`你的JDK\bin\`,然后在 cmd 输入`java`,cmd 就是去找这个目录下有没有`java.exe`这种文件,有的话,你就配置成功了!
  ***

## 系统/用户环境变量

- 这个区别在于你的电脑是否是多用户

  - 如果你在用户环境变量配置好了编程环境,那么在 Windows 的另一个用户上无效

- 所以,劝你在系统环境变量框里配置

  - 有些环境变量配置好之后需要重启电脑生效.

  ***

## 环境变量与 Path

- 这个是引用关系,比如 Path 里面的`%JAVA_HOME%`会引用名为`JAVA_HOME`的环境变量值
- Path 里面从上到下为优先级,上面的优先级高.

---

# Scoop

> 详见[🙌Windows 平台软件包管理器选择-Scoop](../Scoop.md)

---

# JDK

> 通过 Scoop 安装会自动设置

- 新建`JAVA_HOME`环境变量值
  - `D:\Game\Demo\AdoptOpenJDK\`
- Path 里面添加
  - `%JAVA_HOME%\bin`
- JDK 创建 jre: 进入 JDK 根目录管理员模式输入(正常 JDK 自带)

  - `bin\jlink.exe --module-path jmods --add-modules java.desktop --output jre`

---

# Maven

> 耦合 [🎉IDEA 魔改记录.](../../IDEA/Modification#Maven)

- Path 中+

  ```
  D:\Game\Scoop\apps\idea-ultimate\current\plugins\maven\lib\maven3\bin
  ```

- 检查

  ```shell
  mvn -v
  ```

- VScode 中设置:
  - 经测试,无论是 Maven 插件,还是 Maven-settings,在 vscode 中都
  - 不需要再设置了!

---

# Git

> 用 Scoop 安装自带环境变量,不用配置.

---

# ssh

- Path 中+

  ```
  D:\Game\Scoop\apps\git\current\usr\bin
  ```

- 白嫖 git 的 ssh 环境,注意要写在 Windows 默认的`C:\Windows\System32\OpenSSH\`上面(优先级问题).
  <img src="https://i.loli.net/2020/12/04/LJnhekugtUyHOaC.png" alt="20201204110727" />
- 为什么要白嫖 git 的?
  - window 10 自带的是 7.7 版本的,git 带的是 OpenSSH_8.4 版本的,为什么不用呢?

---

# Python

> 通过 Scoop 安装会自动设置

- Path 中+
  ```
  D:\Game\Scoop\apps\python
  D:\Game\Scoop\apps\python\Scripts\
  ```

---

# Node.js

> 详见[⬆ Node.js 环境配置 && 使用](../../Web/Node.js/node.md)
