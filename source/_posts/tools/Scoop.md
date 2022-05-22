---
title: 🙌Windows平台软件包管理器选择-Scoop
date: 2021-01-14 23:09:52
password: ""
tags:
  - Windows
  - Scoop
  - package
  - 工具
  - 推荐
cover: https://www.helloimg.com/images/2022/02/27/GVSXT0.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-14 23:09:52
 * @LastEditors: Weidows
 * @LastEditTime: 2022-01-14 16:50:24
 * @FilePath: \Blog-private\source\_posts\tools\Scoop.md
 * @Description:
 * @!: *********************************************************************
-->

- [引入变量](#引入变量)
- [各个优缺点](#各个优缺点)
- [安装](#安装)
  - [Scoop](#scoop)
  - [Chocolatey](#chocolatey)
- [功能提升](#功能提升)
  - [scoop-completion](#scoop-completion)
  - [加速下载](#加速下载)
- [Scoop 绝活](#scoop-绝活)
- [配置文件](#配置文件)
  - [Scoop](#scoop-1)
  - [Chocolatey](#chocolatey-1)
- [好文传送](#好文传送)
- [报错异常](#报错异常)
  - [网络原因](#网络原因)
  - [环境原因](#环境原因)
  - [内核更换报错](#内核更换报错)
  - [scoop-search](#scoop-search)
- [更新&备份&推荐](#更新备份推荐)

## 引入变量

- 软件包管理器: 就像是 360 软件管家,腾讯软件管家之类的

- 此文章要介绍的是`Scoop`- 横向简单对比`Chocolatey`和`WinGet`

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 各个优缺点

- Scoop

  - 软件少
  - 安装它需要`科学上网`
  - 官方只收留非 GUI 软件(不带图形界面的),但是有第三方拓展库
  - 安装/卸载干净,可指定性,可拓展第三方软件仓库
  - 不污染环境变量,软件目录清晰
  - _面向程序员_.

- Chocolatey

  - 软件多
  - 有的软件安装位置不定
  - 面向大众.

  > [软件包管理工具选 Scoop 还是 Chocolatey？看完这篇就知道了](https://www.cnbeta.com/articles/tech/874537.htm?utm_source=tuicool&utm_medium=referral)

- WinGet

  - preview 中(2021 年初为止)
  - `只能安装不能卸载`
  - 只能装.exe,.msi 等,差不多就是个下载+安装的工具
  - 还非常青涩,**不推荐!**

  > [WinGet 介绍](https://sspai.com/post/60592)

- 个人选择了 `Scoop`,下面主要讲 Scoop.

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 安装

### Scoop

- 安装前先设置下 Scoop 的`安装路径`
- 下面操作需要在 pwsh 中进行,没有的话可以手动操作.
- 如下,在 user 栏新建`SCOOP`,值为`D:\Game\Scoop`

  ```powershell
  $env:SCOOP='D:\Game\Scoop'
  [Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')
  ```

- 另外,如果想添加到系统环境变量栏,只需把`User`修改为`Machine`

  ```powershell
  [Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'Machine')
  ```

- 配置好了如下

  <img src="https://www.helloimg.com/images/2022/02/27/GVSttT.png" alt="20210115232840" />

- 安装

  ```shell
  iwr -useb get.scoop.sh | iex
  ```

- 测试

  - 终端输入

    ```shell
    scoop
    ```

  - 输出

    ```
    ❯ scoop
    Usage: scoop <command> [<args>]

    Some useful commands are:

    alias       Manage scoop aliases
    bucket      Manage Scoop buckets
    cache       Show or clear the download cache
    checkup     Check for potential problems
    cleanup     Cleanup apps by removing old versions
    config      Get or set configuration values
    create      Create a custom app manifest
    depends     List dependencies for an app
    export      Exports (an importable) list of installed apps
    help        Show help for a command
    hold        Hold an app to disable updates
    home        Opens the app homepage
    info        Display information about an app
    install     Install apps
    list        List installed apps
    prefix      Returns the path to the specified app
    reset       Reset an app to resolve conflicts
    search      Search available apps
    status      Show status and check for new app versions
    unhold      Unhold an app to enable updates
    uninstall   Uninstall an app
    update      Update apps, or Scoop itself
    virustotal  Look for app's hash on virustotal.com
    which       Locate a shim/executable (similar to 'which' on Linux)

    Type 'scoop help <command>' to get help for a specific command.
    ```

---

### Chocolatey

- 首先设置环境变量 `ChocolateyInstall` ,值为要安装的位置,如下

  - 如果不设置的话 Chocolatey 会自动安装进 C 盘

  - 设置完环境变量后一定要`重启`,否则不会生效,还是跟没设置一样.

  <img src="https://www.helloimg.com/images/2022/02/27/GVsWIn.png" alt="20210314001245" />

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 功能提升

### scoop-completion

- scoop 命令按 tab 自动补全

- 安装

  - 需要先添加 dorado 库[(备份&推荐)](#备份&推荐),然后才能安装.

  ```
  scoop install scoop-completion
  ```

---

### 加速下载

- 通过 aria2,配置:

  ```shell
  scoop config aria2-split 32
  scoop config aria2-max-connection-per-server 16
  scoop config aria2-min-split-size 1M
  ```

---

- 通过代理:

  ```
  scoop config proxy localhost:7890
  choco config set proxy localhost:7890
  ```

  移除代理:

  ```
  scoop config rm proxy
  choco config unset proxy
  ```

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Scoop 绝活

- 他把当前版本的目录创建了一个`伪目录:current`,这个伪目录指向当前版本号的目录
- 比如这里的`current/node.exe`实际上指向`15.5.1/node.exe`

  <img src="https://www.helloimg.com/images/2022/02/27/GVL62D.png" alt="20210115011742" />

- 这就类似 URL 永久化,使得软件更新后即使目录版本号变更,你的路径引用也不会失效!
- 这个功能太赞了!

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 配置文件

### Scoop

> 在 `C:\Users\用户名\.config\scoop\config.json` 这个文件里.

---

### Chocolatey

> 在 `Chocolatey\config\chocolatey.config` 这个文件里.

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 好文传送

> [Windows 下 Scoop 安装、配置与使用](https://blog.csdn.net/luoyooi/article/details/102990113)

> [scoop——强大的 Windows 命令行包管理工具](https://www.jianshu.com/p/50993df76b1c)

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 报错异常

### 网络原因

- 比如我在用 scoop 安装 pwsh 时,会遇到 MD5 不匹配或者与 GitHub 连接异常的情况,安装失败
- 举例:
  - 我安装`gitkraken`时,不开 aria2 下载出错,开了的话下载特慢,而且下载时间趋近无穷..
  - 于是我采用方案一,直接用浏览器下载的,带宽跑满,几秒就下载好了.
  - 然后改文件名->复制进 cache->install->successfully.
- 另外还有一种情况,比如我安装`gcc`时遇到 scoop 提供的 URL 是 404 状态,这是服务器的问题了,无法解决.

> 注意,如果安装失败,在 Scoop 内部记录实际是`已安装`,所以需要卸载再重新安装

---

- 解决方案一

  - 安装失败报错时会显示下载地址,去那里手动下载目标文件

    - 或者进入 cache,找到有个叫`(要安装的软件名).txt`这个文件,比如我要安装`gitkraken`,就去找到`cache/gitkraken.txt`
    - 内容如下

      ```
      https://release.gitkraken.com/win64/gitkraken-7.4.1-full.nupkg
      referer=https://release.gitkraken.com/win64/
      dir=D:\Game\Scoop\cache
      out=gitkraken#7.4.1#https_release.gitkraken.com_win64_gitkraken-7.4.1-full.nupkg
      ```

    - 第一行就是`下载地址`,最后一行`out=`后面是目标文件名

  - 进入 cache,按照他的命名,把我们自己下载的重命名后复制进来
  - 再进行 install,安装时 scoop 首先检查 cache 中是否有符合的包,没有才会去下载.

  ***

- 解决方案二

  - 把 aria2 关闭以下就好

  ```shell
  scoop config aria2-enabled false
  ```

  - 事后再开启(毕竟它对于某些下载速度提升非常高)

  ```shell
  scoop config aria2-enabled true
  ```

---

### 环境原因

- 这是个让人费解的报错,什么都没告诉你还怼了句不明不白的话.

  > ERROR Shovel flavour of scoop is required

- 去看看这个项目:

  > https://github.com/Ash258/Scoop-Core

  大概意思: shovel 是 scoop-core 替换增强版,你需要安装这家伙 (虽然用的人并不是很多)

### 内核更换报错

- 把内核换成了 Gitee 上的,出现了报错:

  ```
  Updating Scoop...
  Your configuration specifies to merge with the ref 'refs/heads/main'
  from the remote, but no such ref was fetched.
  ERROR Update failed.
  ```

- 仔细检查了下是分支问题

  远程上是 master 分支,而本地配置为 main 分支 (配置文件在 ~/.config/scoop/config.yml)

### scoop-search

```console
╰─ scoop search 7 ─╯
panic: runtime error: index out of range [1] with length 1

goroutine 20 [running]:
main.matchingManifests(0xc000102060, 0x21, 0xf1b3b8, 0x1, 0xc000052000, 0x10, 0x10)
        /home/runner/work/scoop-search/scoop-search/main.go:133 +0x106b
main.main.func1(0xc000092140, 0x15, 0xf1b3b8, 0x1, 0x0, 0xc000088270, 0xc000094150, 0xe92f00, 0xc0000d6070)
        /home/runner/work/scoop-search/scoop-search/main.go:70 +0x185
created by main.main
        /home/runner/work/scoop-search/scoop-search/main.go:63 +0x253
```

排查了一遍,出现这种问题一般是因为`软件库有问题`, 而不是 scoop/scoop-search 的问题

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 更新&备份&推荐

- 备份方法可见: [🎃backuper~开发环境备份.](../backuper)

  > - 库: https://github.com/Weidows-projects/Programming-Configuration/blob/master/lists/scoop/scoop-buckets.bak
  > - 软件: https://github.com/Weidows-projects/Programming-Configuration/blob/master/lists/scoop/scoop-apps.bak
