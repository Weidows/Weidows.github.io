---
title: 💥系统开发环境配置
date: 2020-12-04 11:38:58
password: ""
tags:
  - 操作系统
  - 备忘录
  - Scoop
  - Maven
  - Git
  - Python
  - Node
cover: https://www.helloimg.com/images/2022/02/27/GVPL6X.png
top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-12-04 11:38:58
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-07 01:05:13
 * @FilePath: \Blog-private\source\_posts\system\system_variable.md
 * @Description:
-->

- [深入环境变量](#深入环境变量)
- [Scoop](#scoop)
- [JDK](#jdk)
- [Maven](#maven)
- [Git](#git)
- [Python](#python)
- [Node.js](#nodejs)

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 深入环境变量

> [🎇 深入解析 Window 环境变量.](../深入环境变量)

## Scoop

> 详见[🙌Windows 平台软件包管理器选择-Scoop](../../tools/Scoop)

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## JDK

> 通过 Scoop 安装会自动设置

- 新建`JAVA_HOME`环境变量值
  - `D:\Game\Demo\AdoptOpenJDK\`
- Path 里面添加
  - `%JAVA_HOME%\bin`
- JDK 创建 jre: 进入 JDK 根目录管理员模式输入(正常 JDK 自带)

  - `bin\jlink.exe --module-path jmods --add-modules java.desktop --output jre`

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Maven

> 内部修改耦合 [🎉IDEA 魔改记录.](../../tools/IDEA/Modification#maven)

- 环境变量: 用 Scoop 安装不需要手动配置!

- 检查

  ```shell
  mvn -v
  ```

- VScode 中设置:

  ```json
  "java.configuration.maven.globalSettings": "D:/Game/Scoop/persist/maven/conf/settings.xml",
  ```

- IDEA 中设置也需要覆盖

  <img src="https://www.helloimg.com/images/2022/02/27/GVshlQ.png" alt="20210325105220" />

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Git

> 用 Scoop 安装自带环境变量,不用配置.

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Python

> 通过 Scoop 安装会自动设置

- Path 中+
  ```
  D:\Game\Scoop\apps\python
  D:\Game\Scoop\apps\python\Scripts\
  ```

---

- 建议通过 Anaconda 安装有关 Python 的所有编程环境.

  > [👍Anaconda-Python-水漂浅探池深浅.](../../others/python/anaconda)

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Node.js

> 详见[⬆ Node.js 环境配置 && 使用](../../Web/Node/node)
