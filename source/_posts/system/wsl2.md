---
title: 🎇尝试转投wsl生态.
categories:
  - system
tags:
  - wsl2
  - 计算机系统
  - Windows
cover: https://i.loli.net/2021/02/01/oXzU4HnQvdJPS5f.png
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-02-01 13:54:10
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-01 17:52:09
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\system\wsl2.md
 * @Description:
 * @!: *********************************************************************
-->

- [小吐槽](#小吐槽)
- [指南](#指南)
- [安装步骤](#安装步骤)
  - [系统](#系统)
  - [功能](#功能)
  - [配置 wsl2](#配置-wsl2)
- [安装完成](#安装完成)
- [VScode+wsl](#vscodewsl)
  - [Terminal](#terminal)
  - [Remote 开发](#remote-开发)
- [地址映射](#地址映射)

# 小吐槽

- 搜文章头图时发现...百度和谷歌差距有点大...

- 我用谷歌时间肯定没百度长,看起来谷歌更了解我 🤣

  <img src="https://i.loli.net/2021/02/01/pOXAbKUQ5MaW2c9.png" alt="20210201140021" />

  <img src="https://i.loli.net/2021/02/01/wgzIP2QA3qrnHpR.png" alt="20210201140048" />

- 虽然并不想吹捧或贬低哪个,但是这...(看来我是老双标怪了~)

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 指南

- 这个微软是官方的,讲的很详细.

  > [适用于 Linux 的 Windows 子系统安装指南 (Windows 10)](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#update-to-wsl-2)

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 安装步骤

## 系统

- 首先 Windows64 位系统版本号必须大于等于 `1903`.

- 系统类型只有专业版(消费者版才能装)

---

## 功能

- [x] 文档里没说,需要打开`hyper-v`

- [x] 启用适用于 Linux 的 Windows 子系统

- [x] 启用虚拟机功能

  ***

- 如图勾选的这几个

  <img src="https://i.loli.net/2021/02/01/A2jzxWdCoIRfJ8h.png" alt="20210201160810" />

---

## 配置 wsl2

- 下载并安装

  > [下载适用于 x64 计算机的 WSL2 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

- 然后,将 WSL 2 设置为默认版本

  - 在 PowerShell 输入

    ```
    wsl --set-default-version 2
    ```

  - 没出问题的话会提示 `有关与 WSL 2 的主要区别的信息，请访问 https://aka.ms/wsl2`

- 最后,打开`Microsoft Store`,安装想安装的 Linux 系统

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

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 安装完成

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

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# VScode+wsl

## Terminal

- 网上大多数人推荐`Windows Terminal`,我觉得也不错,不过没用,直接用的`VScode`

- 如图,点`选择默认shell`里面就可以选择`wsl`了

  <img src="https://i.loli.net/2021/02/01/6D1J9yq5EMuXQVx.png" alt="20210201165532" />

---

## Remote 开发

- wsl 相当于在内网开了一台电脑,会有一个`内网ip`

- 我们不需要获取这个 IP,直接在 VScode 里安装`Remote - WSL`这个插件

- 甚至都不需要配置,直接点左下角打开就行了

  <img src="https://i.loli.net/2021/02/01/KlHZ74Obe8zEgVf.png" alt="20210201173024" />

- 当然,如果不嫌麻烦拿 ssh 连接 wsl 也可以,需要在 wsl 系统内配置静态 ip,但是很多功能性上不如上面那个插件.

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 地址映射

- 安装 wsl 之后就可以通过`\\wsl$`访问到自己的虚拟机

  <img src="https://i.loli.net/2021/02/01/DBd9HOUPhSMtgNo.png" alt="20210201173448" />

- 映射

  <img src="https://i.loli.net/2021/02/01/XMjQTWpiznhlIV7.png" alt="20210201174422" />

- 映射之后出现新盘符

  <img src="https://i.loli.net/2021/02/01/k3htJvZ1CKrSmbO.png" alt="20210201174646" />

- 有个奇妙的事是`mnt/`目录下会反过来映射你的所有本地盘符

  - 看上面那个图,我有四个盘符,然后 mnt 目录下就有`c,d,e,f`四个文件夹

  - 这几个映射文件夹在 Windows 文件管理器无法打开,但是在终端里可以进入

  <img src="https://i.loli.net/2021/02/01/tQcB8vpzZIKoEeH.png" alt="20210201174957" />
