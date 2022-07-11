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
  - nodejs
cover: https://www.helloimg.com/images/2022/02/27/GVPL6X.png
top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-12-04 11:38:58
 * @LastEditors: Weidows
 * @LastEditTime: 2022-07-11 08:48:02
 * @FilePath: \Blog-private\source\_posts\system\system_variable.md
 * @Description:
-->

{% pullquote mindmap mindmap-md %}

- [深入环境变量](#深入环境变量)
  - [含义](#含义)
  - [系统/用户环境变量](#系统用户环境变量)
  - [环境变量与 Path](#环境变量与-path)
  - [举例](#举例)
- [各种配置](#各种配置)

{% endpullquote %}

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 深入环境变量

### 含义

- 理解含义很大程度上就能明白自己到底错在哪里,有些问题靠百度很难搜出来,但是真正解决需要的时间可能`远小于百度搜的时间`

- Windows 系统上一般使用的终端 console 是 cmd(虽然很辣鸡但还是得用它)

  - 这个终端可以直接调用启动`.cmd`/`.bat`/`.exe`这种后缀名的文件

    - (你可以在你配置的语言\bin\目录下轻易找到 XXX.exe 等等这种文件)

  - 如果不输入这种文件的具体路径,终端没法找到这个文件到底在哪里

  - 于是环境变量就相当于在 cmd 上登了记,不写路径直接写名字就能启动,比如环境变量设置为`你的JDK\bin\`,然后在 cmd 输入`java`,cmd 就是去找这个目录下有没有`java.exe`这种文件,有的话,你就配置成功了!

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 系统/用户环境变量

- 这个区别在于你的电脑是否是`多用户`

  - 如果你在用户环境变量配置好了编程环境,那么在 Windows 的另一个用户上无效

- 所以,看个人选择,一般来说是在`用户区`添加.

  - 系统环境变量配置好之后需要`重启电脑生效`.

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 环境变量与 Path

- 这个是引用关系,比如 Path 里面的`%JAVA_HOME%`会引用名为`JAVA_HOME`的环境变量值
- Path 里面从上到下为优先级,上面的优先级高.

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 举例

- 这是华为的 DevEco,安装时会询问是否添加至环境变量,那,添加到环境变量有什么用呢?
  <img src="https://www.helloimg.com/images/2022/02/27/GVsqxD.png" alt="20210307160552" />

- 比如我安装了 VScode,并把 vscode 安装目录它添加环境变量,我们打开一个终端

  - 终端打开的路径是 `D:\Desktop\` ,在这里执行`code` 指令,终端首先去找 `D:\Desktop\` 这个目录下有没有叫 `Code`的程序,没有的话再去环境变量的路径找,直到找到箭头所指的 VScode 程序本体

  - 命令后面可以跟一些参数,比如`code .`就是让 VScode 打开当前路径(就是划红线的`D:\Desktop\`)

  <img src="https://www.helloimg.com/images/2022/02/27/GVsmaQ.png" alt="20210307161139" />

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 各种配置

{% tabs Node.js %}

  <!-- tab Scoop -->

    > 详见[🙌Windows 平台软件包管理器选择-Scoop](../../tools/Scoop)

  <!-- endtab -->

  <!-- tab Node.js -->

    > 详见[⬆ Node.js 环境配置 && 使用](../../Web/Node/node)

  <!-- endtab -->

  <!-- tab Python -->

    - Path 中+

      ```
      D:\Game\Scoop\apps\python
      D:\Game\Scoop\apps\python\Scripts\
      ```

    ---

    - 建议通过 Scoop 安装 Anaconda, 然后用 Anaconda 安装有关 Python 的所有编程环境.

      > [👍Anaconda-Python-水漂浅探池深浅.](../../others/python/anaconda)

  <!-- endtab -->

  <!-- tab Git -->

    > 用 Scoop 安装自带环境变量,不用配置.

  <!-- endtab -->

  <!-- tab Maven -->

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

  <!-- endtab -->

  <!-- tab JDK -->

    > 通过 Scoop 安装会自动设置

    - 新建`JAVA_HOME`环境变量值: `D:\Game\Demo\AdoptOpenJDK\`

    - Path 里面添加: `%JAVA_HOME%\bin`

    - JDK 创建 jre: 进入 JDK 根目录管理员模式输入(正常 JDK 自带)

      ```
      bin\jlink.exe --module-path jmods --add-modules java.desktop --output jre
      ```

  <!-- endtab -->

{% endtabs %}
