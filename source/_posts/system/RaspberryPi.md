---
title: 树莓派酱の吃灰日常.
categories:
  - system
tags:
  - 树莓派
cover: https://i.loli.net/2020/12/03/HM1ew2iAGobaCRr.png
# top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-12-03 10:44:06
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-07 00:55:48
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog-private\source\_posts\system\RaspberryPi.md
 * @Description:
-->

- [无屏幕(线)解决方案](#无屏幕线解决方案)
- [SSH 连接](#ssh-连接)
- [树莓派系统设置](#树莓派系统设置)
- [VNC 连接](#vnc-连接)
- [VScode 连接](#vscode-连接)
- [Screenfetch](#screenfetch)

# 无屏幕(线)解决方案

- 刚到手的树莓派裸机没屏幕和 Mini-HDMI 线,用 ssh 连接.
- 首先,用手机或者电脑开热点

  - (注意 电脑的 5G 频段的可能无法连接)
  - 我的树莓派 4B-4G 版这种方法连不上 电脑的 5G 频段的 WiFi,但是手机的热点可以.

- 然后在桌面新建文件夹`树莓派`,存放今后需要的数据文件.

  - 新建文件命名为`ssh`,注意它没有后缀名和文件数据.
  - 新建文件命名为`wpa_supplicant.conf`,文件数据如下:

  ```
  country=GB

  ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev

  update_config=1

  network={

      ssid="你的Wifi名称，注意大小写"

      psk="你的Wifi密码"

  }
  ```

  - 预览

  <img src="https://i.loli.net/2020/12/03/JgR8kpoTAl4q3bZ.png" alt="20201203110651" />

- 用读卡器把树莓派系统 TF 卡插进电脑,把这两个文件复制进内存卡里名叫 `boot` 的盘符根目录里.
- 开鸡,等会应该就会发现电脑或者手机连接上了,如下:

  <img src="https://i.loli.net/2020/12/03/g2h8LQeGz145BT6.png" alt="20201203110842" />
  <img src="https://i.loli.net/2020/12/03/qUjClYon8P5cuZi.jpg" alt="Screenshot_20201203_112505_com.android.settings" width="50%" />

- 然后就可以用 ssh 连接这个 IP 地址了.

---

# SSH 连接

- 用 ssh 软件连接,我用的是 `FinalShell`
  - 默认账号是 `pi`，密码是 `raspberry`
    <img src="https://i.loli.net/2020/12/03/9SuJxmTWczQG2oE.png" alt="20201203113101" />
- 连接成功后设置 root 账户密码
  ```
  sudo passwd root
  ```
  - 之后 `su root(切换到root用户)` 就需要密码验证了.
  - 解锁用户密码设置
  ```
  sudo passwd --unlock root
  ```

---

# 树莓派系统设置

- (可在 ssh 中显示)
  ```
  sudo raspi-config
  ```

---

# VNC 连接

- 没屏幕或者没 Mini-HDMI 线时最佳方案.
- 首先[下载 VNC 软件](https://www.realvnc.com/en/connect/download/viewer)
- 安装后打开搜索树莓派的内网 ip,输入用户名连接
  <img src="https://i.loli.net/2020/12/04/tiYkwdcTq2ZpQfl.png" alt="20201204103758" />
  <img src="https://i.loli.net/2020/12/04/DINsq97UmFPJbcZ.png" alt="20201204103843" />
- OK.

---

# VScode 连接

- 安装插件`Remote-SSH`
  <img src="https://i.loli.net/2020/12/04/25reFfkbShHl9q8.png" alt="20201204202003" />
- 打开 ssh 配置文件(也可以自定义),修改配置
  <img src="https://i.loli.net/2020/12/04/vKyw1MIxNG7pelO.png" alt="20201204212009" />
- 打开输入对应用户的密码就可以登录了.
  - 但是有个`Bug`,网上尚未有解决方案==>VScode 用 ssh 连接树莓派在很短时间内断连,影响力达到无法使用的程度.

---

# Screenfetch

- 显示系统、主题信息
  ```
  sudo apt install screenfetch
  screenfetch
  ```
  > 这里不用 Neofetch 是因为树莓派 Debian8 系统的 repo 地址需要更新,安装还需要其他操作,怪麻烦~
- 显示 Linux 系统及版本信息,如下:
  <img src="https://i.loli.net/2020/12/05/XVzvAUq7G4tP1DO.png" alt="20201205143342" />
  <img src="https://i.loli.net/2020/12/03/iWXJzj5U9HyoG3R.png" alt="20201203115807" />
