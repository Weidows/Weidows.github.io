---
title: 🎇尝试转投wsl生态.
date: 2021-02-01 13:54:10
password: ""
tags:
  - wsl2
  - 计算机系统
  - Windows
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/oXzU4HnQvdJPS5f.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-02-01 13:54:10
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:20:29
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\system\wsl2.md
 * @Description:
 * @!: *********************************************************************
-->

- [小吐槽](#小吐槽)
- [指南](#指南)
  - [官方的](#官方的)
  - [名词解释](#名词解释)
- [安装步骤](#安装步骤)
  - [系统](#系统)
  - [功能](#功能)
  - [配置](#配置)
- [安装完成](#安装完成)
- [VScode+wsl](#vscodewsl)
  - [Terminal](#terminal)
  - [Remote 开发](#remote-开发)
- [地址映射](#地址映射)
- [IDEA+wsl](#ideawsl)
  - [terminal](#terminal-1)
- [后记](#后记)
- [wsl 软件安装](#wsl-软件安装)
  - [apt?](#apt)
  - [dpkg](#dpkg)
- [痛点解决](#痛点解决)

## 小吐槽

- 搜文章头图时发现...百度和谷歌差距有点大...

- 我用谷歌时间肯定没百度长,看起来谷歌更了解我 🤣

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/pOXAbKUQ5MaW2c9.png" alt="20210201140021" />

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/wgzIP2QA3qrnHpR.png" alt="20210201140048" />

- 虽然并不想吹捧或贬低哪个,但是这...(看来我是老双标怪了~)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 指南

### 官方的

- 这个微软是官方的,讲的很详细.

  > [适用于 Linux 的 Windows 子系统安装指南 (Windows 10)](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#update-to-wsl-2)

---

### 名词解释

- 下面牵扯到很多名词,乍一看会`蒙圈`.

- 放一个关系网络

  ```
  - hyper-v
    |- Docker(hype-v引擎)
    |- Windows
      |- wsl2
        |- wsl-linux
        |- Docker(wsl引擎)
          |- Nginx
          |- Node.js
          |- 各种系统和服务
  ```

- `hyper-v`是微软家的虚拟机平台,定位于`VMware`相同,虽然它看起来是 Windows 内部的软件,但是开启 hyper-v 后 Windows 本身也会成为其内部的虚拟机.

- wsl 是基于 Windows 下实现的 Linux 虚拟化技术,全称`Windows Subsystem for Linux`,所以这里面装的系统肯定是各种 linux,`2`只是版本号,一般 wsl2 简称 wsl,两个版本功能上有些差别.

  - `wsl-linux`就是指在 Store 里面像是 Ubuntu,Debian 等等的 linux 系统

> Docker 的话详见 [🌈 初探 Docker.](../docker)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 安装步骤

### 系统

- 首先 Windows64 位系统版本号必须大于等于 `1903`.

- 系统类型只有专业版(好像家庭版和企业版不行)

---

### 功能

- [x] 启用适用于 Linux 的 Windows 子系统

- [x] 启用虚拟机功能

  ***

- 如图上面两个`必须开启`,其他的您看着来~

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/A2jzxWdCoIRfJ8h.png" alt="20210201160810" />

---

### 配置

- 下载并安装

  > [下载适用于 x64 计算机的 WSL2 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

- 然后,将 WSL 2 设置为默认版本

  - 在 PowerShell 输入

    ```
    wsl --set-default-version 2
    ```

  - 没出问题的话会提示 `有关与 WSL 2 的主要区别的信息，请访问 https://aka.ms/wsl2`

- `最后`,打开`Microsoft Store`,安装想安装的 Linux 系统

  - Ubuntu 16.04 LTS

  - Ubuntu 18.04 LTS

  - Ubuntu 20.04 LTS (主流推荐)

  - openSUSE Leap 15.1

  - SUSE Linux Enterprise Server 12 SP5

  - SUSE Linux Enterprise Server 15 SP1

  - Kali Linux

  - Debian GNU/Linux

  - Fedora Remix for WSL

  - Pengwin

  - Pengwin Enterprise

  - Alpine WSL

- 小插曲,如果 Store 加载不出来数据,报错`0x80131500`,那么,请关掉你的科学上网软件 🤣

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 安装完成

- 第一次打开时他会先安装一小会儿,然后让你输入用户名和密码,创建新用户

  - 注意 Linux 系统输入密码时不会显示`****`

  ```
  Installing, this may take a few minutes...
  Please create a default UNIX user account. The username does not need to match your Windows username.
  For more information visit: https://aka.ms/wslusers
  Enter new UNIX username: weidows
  New password:
  Retype new password:
  passwd: password updated successfully
  Installation successful!
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## VScode+wsl

### Terminal

- 网上大多数人推荐`Windows Terminal`,我觉得也不错,不过没用,直接用的`VScode`

- 如图,点`选择默认shell`里面就可以选择`wsl`了

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/6D1J9yq5EMuXQVx.png" alt="20210201165532" />

---

### Remote 开发

- wsl 相当于在内网开了一台电脑,会有一个`内网ip`

- 我们不需要获取这个 IP,直接在 VScode 里安装`Remote - WSL`这个插件

- 甚至都不需要配置,直接点左下角打开就行了

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/KlHZ74Obe8zEgVf.png" alt="20210201173024" />

- 当然,如果不嫌麻烦拿 ssh 连接 wsl 也可以,需要在 wsl 系统内配置静态 ip,但是很多功能性上不如上面那个插件.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 地址映射

- 安装 wsl 之后就可以通过`\\wsl$`访问到自己的虚拟机

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/DBd9HOUPhSMtgNo.png" alt="20210201173448" />

- 映射

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/XMjQTWpiznhlIV7.png" alt="20210201174422" />

- 映射之后出现新盘符

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/k3htJvZ1CKrSmbO.png" alt="20210201174646" />

- 有个奇妙的事是`mnt/`目录下会反过来映射你的所有本地盘符

  - 看上面那个图,我有四个盘符,然后 mnt 目录下就有`c,d,e,f`四个文件夹

  - 这几个映射文件夹在 Windows 文件管理器无法打开,但是在终端里可以进入

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/tQcB8vpzZIKoEeH.png" alt="20210201174957" />

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## IDEA+wsl

### terminal

- 设置里打开 `File -> Settings -> Tools -> Terminal`

- shell path 填上

  ```
  "cmd.exe" /k "wsl.exe"
  ```

- 如图

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/RxpgAbjuDSGivym.png" alt="20210201221447" />

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 后记

- 本来开始想的是开发环境转到 wsl 内部

- 折腾了大半天发现 wsl 生态并不很讨喜,只有部分特性值得使用

  - 比如跑 `Docker`,`zsh` 终端,`SQL` 服务等等...

  - 尝试了一下,直白点说,`用它做开发不行!`

  - 但是拿它来`替代虚拟机`倒是还可以,它的 CPU 闲时占用很低(不到 1%),内存占用半个 G,还好~

  ***

- 为啥呢? 说一下我遇到的痛点:

  - 首先,`生态问题`,下图是我的开发环境,想要移植到 Linux 难度很大,肯定要放弃一些,,所以我放弃移植了...

    <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/xMkL83vV9iIKB6u.png" alt="20210201215547" />

  - 其次,有些小问题需要解决,比如路径问题`"/"与"\"`不一样,还有换行符问题,会导致 git 认为你的项目全绿`(就是所有文件的所有行都有修改)`,令人窒息...

  - 再次,`性能问题`,这个虚拟化毕竟是虚拟,上手试了一下会有迟钝(CPU 和网络问题都有),另外,开启了虚拟后就连 Windows 多多少少也会损耗一些性能.

  - 其实我认为最难受的是`IDE适配`,我用的`IntelliJ IDEA`和`VScode`,它们需要`Git,Node.js,openjdk,maven,python`等等,这些并不能通过 wsl 直通,除非直接用 linux 系统把这些全装进 linux 里面.

---

- 不过倒也没有白安装,一些东西还是需要 wsl 的

  - 比如`bash`,`zsh`,`docker`等等...

  - 害,算了,`VMware`真香!

---

- 还有一个比较上头的问题:

  - 开启 wsl 后因为虚拟化,window 系统开机后`无法自动连接 WiFi`,可能是个 bug,但是劝退了!
  - 经测试,开启 hyper-v 也会造成这后果.
  - 有可能只是我这么一个个例,硬件兼容性问题.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## wsl 软件安装

### apt?

> [Linux 中 apt 与 apt-get 命令的区别与解释](https://www.sysgeek.cn/apt-vs-apt-get/)

> 简单来说就是：apt = apt-get、apt-cache 和 apt-config 中最常用命令选项的集合。

---

### dpkg

> [怎么理解 ubuntu 中的软件包管理器 apt 和 dpkg](https://blog.csdn.net/LEON1741/article/details/85127000)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 痛点解决

> [本篇文章会介绍 win10 中 wsl2 的安装和使用以及遇到的常见问题比如如何固定 wsl2 地址等问题的总结。](https://www.cnblogs.com/kuangdaoyizhimei/p/14175143.html#_label2_0)
