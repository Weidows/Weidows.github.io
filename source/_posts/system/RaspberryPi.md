---
title: 树莓派酱の吃灰日常.
date: 2020-12-03 10:44:06
categories:
  - system
tags:
  - 树莓派
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/HM1ew2iAGobaCRr.png
# top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-12-03 10:44:06
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-18 09:18:19
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\system\RaspberryPi.md
 * @Description:
-->

- [无屏幕(线)解决方案](#无屏幕线解决方案)
- [SSH 连接](#ssh-连接)
- [设置密码](#设置密码)
- [树莓派系统设置](#树莓派系统设置)
- [VNC 连接](#vnc-连接)
- [Screenfetch](#screenfetch)
- [花样玩法](#花样玩法)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 无屏幕(线)解决方案

- 刚到手的树莓派裸机没屏幕和 Mini-HDMI 线,用 ssh 连接.
- 首先,用手机或者电脑开热点

  - (注意 电脑的 5G 频段的可能无法连接)
  - 我的树莓派 4B-4G 版这种方法连不上 电脑的 5G 频段的 WiFi,但是手机的热点可以.

- 然后在桌面新建文件夹`树莓派`,存放今后需要的数据文件.

  - 新建文件命名为`ssh`,注意它没有后缀名和文件数据.
  - 新建文件命名为 `wpa_supplicant.conf` ,文件数据如下:

  ```
  country=GB

  ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev

  update_config=1

  network={

      ssid="你的Wifi名称，注意大小写"

      psk="你的Wifi密码"

  }
  ```

  > [文件链接](https://github.com/Weidows/Programming-Configuration/tree/master/raspberryPi/boot)

  - 预览

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/JgR8kpoTAl4q3bZ.png" alt="20201203110651" />

- 用读卡器把树莓派系统 TF 卡插进电脑,把这两个文件复制进内存卡里名叫 `boot` 的盘符根目录里.
- 开鸡,等会应该就会发现电脑或者手机连接上了,如下:

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/g2h8LQeGz145BT6.png" alt="20201203110842" />
  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/qUjClYon8P5cuZi.jpg" alt="Screenshot_20201203_112505_com.android.settings" width="50%" />

- 然后就可以用 ssh 连接这个 IP 地址了.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# SSH 连接

- 用 ssh 软件连接,我用的是 `FinalShell`与`VScode`

- 连接三要素是`IP地址 + 用户名 + 密码`

- 树莓派系统默认账号是 `pi`，密码是 `raspberry`

> 可参照 [✨SSH 远程连接.](../../experience/SSH#自动挡)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 设置密码

- 连接成功后设置 root 账户密码

  ```
  sudo passwd root
  ```

- 之后 `su root(切换到root用户)` 就需要密码验证了.

- 解锁用户密码设置

  ```
  sudo passwd --unlock root
  ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 树莓派系统设置

- (可在 ssh 中显示)
  ```
  sudo raspi-config
  ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# VNC 连接

- 没屏幕或者没 Mini-HDMI 线时最佳方案.
- 首先[下载 VNC 软件](https://www.realvnc.com/en/connect/download/viewer)
- 安装后打开搜索树莓派的内网 ip,输入用户名连接
  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/tiYkwdcTq2ZpQfl.png" alt="20201204103758" />
  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/DINsq97UmFPJbcZ.png" alt="20201204103843" />
- OK.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# Screenfetch

- 显示系统、主题信息
  ```
  sudo apt install screenfetch
  screenfetch
  ```
  > 这里不用 Neofetch 是因为树莓派 Debian8 系统的 repo 地址需要更新,安装还需要其他操作,怪麻烦~
- 显示 Linux 系统及版本信息,如下:
  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/XVzvAUq7G4tP1DO.png" alt="20201205143342" />
  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/iWXJzj5U9HyoG3R.png" alt="20201203115807" />

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 花样玩法

1. 声控可视化乐谱
2. 宝塔 Linux
3. 旁路由器
4. 作为双屏驱动器(需要一块触控屏幕)
5. 硬件:无线键盘(鼠标不用了)\摄像头(或加指纹识别)\语音识别(+AI)
6. 个人网站搭建
7. 虚拟机/远程 docker
8. 尝试多系统
9. `OpenWrt系统` (此系统支持 3,6,7,10,11,12)
10. 当梯子 NAT
11. 文件服务器
12. 内网穿透
