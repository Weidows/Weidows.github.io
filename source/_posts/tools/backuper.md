---
title: 🎃backuper~开发环境备份.
password: ""
tags:
  - 工具
date: 2021-06-25 11:16:51
cover: https://www.helloimg.com/images/2022/02/27/GVSsBr.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-23 02:20:22
 * @FilePath: \Blog-private\source\_posts\tools\backuper.md
 * @Description:
 * @!: *********************************************************************
-->

- [仓库地址](#仓库地址)
- [问题](#问题)
- [解决方案](#解决方案)
- [实现](#实现)
- [解析](#解析)
- [敏感信息](#敏感信息)
- [结束](#结束)

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## [仓库地址](https://github.com/Weidows-projects/Programming-Configuration)

## 问题

- 大概...我们经常会遇到这种问题:

  > 我这为什么运行不了呢>

  > 帮帮我装下环境!!!

- 或者这样:

  > 嗯?刚刚把什么东西删除了???

  > 卧槽,这配置没错啊,为啥 xxx?

- 以及:

  > 系统崩了,重装个系统吧... --> 重新配置环境 --> `RNM退钱!!!`

  > 装完东西后经常忘记装了什么,比如 [我的环境清单](https://github.com/Weidows-projects/Programming-Configuration/blob/master/lists/scoop/scoop-apps.bak), 让我回顾装过什么东西简直是不可能 de

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 解决方案

- 以上遇到的问题我们可以借助 `名单备份 & 配置备份` 解决,因为只要知道软件名字和配置,就可以全部恢复

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 实现

> 这里只是提供一个思路,具体怎么备份还需要根据系统、需求、位置来决定.

- 仅仅需要一个脚本 [我的备份脚本](https://github.com/Weidows-projects/Programming-Configuration/blob/master/local/utils.bat)

  ```bat
  @REM 开机后设置备份,使用start是在新的终端同时进行的,call是按顺序依次

  set HOME_PATH=C:\Users\29845
  set BACKUP_DIR=D:\Game\Github\Programming-Configuration

  @REM 备份ssh 目录后都必须加个'\' (比如.ssh有可能是目录,也可能是文件,而.ssh\只可能是目录)
  mkdir %BACKUP_DIR%\backup & cd %BACKUP_DIR%\backup
  xcopy %HOME_PATH%\.ssh\ .ssh\ /e/y/d

  @REM 备份lists
  mkdir %BACKUP_DIR%\lists & cd %BACKUP_DIR%\lists
  call scoop list > scoop-apps.bak
  call scoop bucket list > scoop-buckets.bak
  call yarn global list > yarn-global.bak
  call npm -g list > npm-global.bak

  @REM 备份其他
  mkdir %BACKUP_DIR%\others & cd %BACKUP_DIR%\others
  xcopy C:\Windows\System32\drivers\etc\hosts hosts\ /e/y/d
  xcopy D:\Game\Scoop\persist\maven\conf\settings.xml maven\conf\ /e/y/d
  xcopy D:\Documents\PowerShell\Microsoft.PowerShell_profile.ps1 .\PowerShell\ /e/y/d

  @REM 备份 ~\
  mkdir %BACKUP_DIR%\user-config & cd %BACKUP_DIR%\user-config
  xcopy %HOME_PATH%\.conda\ .conda\ /e/y/d
  xcopy %HOME_PATH%\.config\ .config\ /e/y/d
  xcopy %HOME_PATH%\pip\ pip\ /e/y/d
  xcopy %HOME_PATH%\.npmrc . /y/d
  xcopy %HOME_PATH%\.yarnrc . /y/d
  xcopy %HOME_PATH%\.condarc . /y/d
  xcopy %HOME_PATH%\.gitconfig . /y/d
  ```

- 下面开始解析.

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 解析

- 1.首先需要指定 `HOME_PATH`用户配置目录 和 `BACKUP_DIR`备份到的位置

  ```bat
  set HOME_PATH=C:\Users\29845
  set BACKUP_DIR=D:\Game\Github\Programming-Configuration
  ```

---

- 2.创建子备份文件夹并进入

  ```bat
  mkdir %BACKUP_DIR%\backup & cd %BACKUP_DIR%\backup
  ```

`mkdir` 有个妙处: 默认情况下不会覆盖已有的文件夹.

---

- 3.然后把需要备份的内容 copy 进去

  ```bat
  xcopy %HOME_PATH%\.ssh\ .ssh\ /e/y/d
  ```

  > 详细介绍 xcopy 命令: [cmd 复制文件命令 copy 复制目录树命令 xcopy](https://blog.csdn.net/qq_21808961/article/details/86749733)

  注意如果 xcopy 的是文件而不是目录的话,`要去掉 /e`, 不然会把要 copy 文件的同级目录全都 copy (`简单讲就是 bug`) ,比如如下:

  ```bat
  xcopy %HOME_PATH%\.npmrc . /y/d
  ```

---

- 4.至于如何备份装过的软件,之前想通过递归目录名来获取,后来发现完全可以通过 `list` 来输出到文件

  需要注意当执行 `scoop list` 时,命令行会进入到 scoop 程序而不会回来 (走错路了)

  需要用 `call` 来获取外部程序 `scoop list` 的执行结果

  ```bat
  call scoop list > scoop-apps.bak
  ```

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 敏感信息

- 有些敏感信息我们想备份但并不想让 Git 存储,比如`.ssh`中的秘钥

  > 这时可以在.gitignore 中添加一个目录,用来备份敏感信息.

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 结束

- 至此备份脚本就可以了,可以 [看看备份结果](https://github.com/Weidows-projects/Programming-Configuration)

- 如何运行脚本? 可以手动或者添加进开机运行程序 [我的运行程序](https://github.com/Weidows-projects/Keeper/blob/main/utils.bat)
