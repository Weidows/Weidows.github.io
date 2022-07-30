---
title: 树莓派酱の吃灰日常
date: 2020-12-03 10:44:06
password: ""
tags:
  - 树莓派
  - 服务器
cover: https://www.helloimg.com/images/2022/02/27/GV4VHQ.png
top_img:
---

# 树莓派酱の吃灰日常

<!--
 * @Author: Weidows
 * @Date: 2020-12-03 10:44:06
 * @LastEditors: Weidows
 * @LastEditTime: 2022-07-28 00:10:04
 * @FilePath: \Blog-private\source\_posts\system\RaspberryPi.md
 * @Description:
-->

{% pullquote mindmap mindmap-md %}

- [树莓派酱の吃灰日常](#树莓派酱の吃灰日常)
  - [无屏幕操作指南](#无屏幕操作指南)
  - [SSH 连接](#ssh-连接)
  - [树莓派系统设置](#树莓派系统设置)
  - [VNC 连接](#vnc-连接)
  - [Screenfetch](#screenfetch)
  - [彩色灯带](#彩色灯带)
    - [硬件连接](#硬件连接)
    - [安装工具链](#安装工具链)
    - [安装驱动](#安装驱动)
    - [修改配置文件](#修改配置文件)
    - [测试运行](#测试运行)
    - [增强-音乐频谱](#增强-音乐频谱)
      - [装环境](#装环境)
      - [测试运行](#测试运行-1)
    - [灯带检测](#灯带检测)
  - [花样玩法](#花样玩法)

{% endpullquote %}

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 无屏幕操作指南

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

  <img src="https://www.helloimg.com/images/2022/02/27/GVAZaM.png" alt="20201203110651" />

- 用读卡器把树莓派系统 TF 卡插进电脑,把这两个文件复制进内存卡里名叫 `boot` 的盘符根目录里.
- 开鸡,等会应该就会发现电脑或者手机连接上了,如下:

  <img src="https://www.helloimg.com/images/2022/02/27/GV4wUh.png" alt="20201203110842" />
  <img src="https://www.helloimg.com/images/2022/02/27/GVEkEg.png" alt="Screenshot20201203112505" width="50%" />

- 然后就可以用 ssh 连接这个 IP 地址了.

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## SSH 连接

- 用 ssh 软件连接,我用的是 `FinalShell`与`VScode`

- 连接三要素是`IP地址 + 用户名 + 密码`

- 树莓派系统默认账号是 `pi`，密码是 `raspberry`

> 可参照 [✨SSH 远程连接.](../../experience/SSH#自动挡) \
> 连接后记得改下密码: [💧 一些常用终端命令](../../experience/shell/shell#用户管理)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 树莓派系统设置

- (可在 ssh 中显示)
  ```
  sudo raspi-config
  ```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## VNC 连接

- 没屏幕或者没 Mini-HDMI 线时最佳方案.
- 首先[下载 VNC 软件](https://www.realvnc.com/en/connect/download/viewer)
- 安装后打开搜索树莓派的内网 ip,输入用户名连接
  <img src="https://www.helloimg.com/images/2022/02/27/GVLgiQ.png" alt="20201204103758" />
  <img src="https://www.helloimg.com/images/2022/02/27/GV4eUC.png" alt="20201204103843" />
- OK.

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## Screenfetch

- 显示系统、主题信息
  ```
  sudo apt install screenfetch
  screenfetch
  ```
  > 这里不用 Neofetch 是因为树莓派 Debian8 系统的 repo 地址需要更新,安装还需要其他操作,怪麻烦~
- 显示 Linux 系统及版本信息,如下:
  <img src="https://www.helloimg.com/images/2022/02/27/GVSdqY.png" alt="20201205143342" />
  <img src="https://www.helloimg.com/images/2022/02/27/GVAC9X.png" alt="20201203115807" />

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 彩色灯带

### 硬件连接

本人用的 派 4B, WS2812B 型号灯带,分三根线(颜色可能并不一致,红黑绿白)

有能力的话可以改成杜邦母口,我没有,直接拿小刀豁开绝缘皮插的,也行

- 这里只是做的临时序号,GPIO 并不是这么排的,`此处只用第一排`

  ```树莓派GPIO抽象画
  _____________________
  | 1 2 3 4 5 6 7 ....
  | 1 2 3 4 5 6 7 ....
  |
  |        CPU
  |
  _____________________
  ```

- 接线

  一般都有红线,+5V, 接 1

  中间的线是信号线,接 6

  另一根是 GND,接 3

---

### 安装工具链

```
sudo apt -y install scons swig
```

### 安装驱动

```
sudo pip3 install rpi_ws281x
```

- 很有可能并不能生效 (ModuleNotFoundError: No module named 'rpi_ws281x'),需要下载编译源码

  ```
  git clone https://github.com/jgarff/rpi_ws281x.git
  cd rpi_ws281x
  scons
  cd ./python/
  sudo python3 ./setup.py install
  ```

  ***

  - 上面不要这样写,会报错 : ~~sudo python ./python/setup.py install~~

    ```
    running install
    running bdist_egg
    running egg_info
    creating rpi_ws281x.egg-info
    writing rpi_ws281x.egg-info/PKG-INFO
    writing top-level names to rpi_ws281x.egg-info/top_level.txt
    writing dependency_links to rpi_ws281x.egg-info/dependency_links.txt
    writing manifest file 'rpi_ws281x.egg-info/SOURCES.txt'
    file neopixel.py (for module neopixel) not found
    reading manifest file 'rpi_ws281x.egg-info/SOURCES.txt'
    writing manifest file 'rpi_ws281x.egg-info/SOURCES.txt'
    installing library code to build/bdist.linux-armv7l/egg
    running install_lib
    running build_py
    file neopixel.py (for module neopixel) not found
    file neopixel.py (for module neopixel) not found
    running build_ext
    building '_rpi_ws281x' extension
    swigging rpi_ws281x.i to rpi_ws281x_wrap.c
    swig -python -o rpi_ws281x_wrap.c rpi_ws281x.i
    Unable to find file 'rpi_ws281x.i'.
    error: command 'swig' failed with exit status 1
    ```

---

### 修改配置文件

- 用 nano/vim 或者 Kate 打开修改

  ```
  sudo nano ./examples/strandtest.py
  ```

  需要改两处:

  1. 依赖 import 处添加

  ```
  from neopixel import *
  ```

  2. LED 灯珠数(根据灯带实际数量)

  ***

- 把这个文件复制出来 (不然不能运行)

  ```
  sudo cp ./examples/strandtest.py .
  ```

### 测试运行

```
sudo python3 ./strandtest.py
```

- 在公司第一次跑起来的样子

  <img src="https://www.helloimg.com/images/2022/02/27/GV3c6Y.png" alt="1632587136736" />

---

### 增强-音乐频谱

首先搞一下硬件: 树莓派没有板载输入声卡,`需要 USB 免驱声卡 + 3.5mm有线可录音耳机` (调查了一番没有替代方案)

可以去买一个拓展坞,有的会附带 (当时我都缺,正好可以一刀切)

#### 装环境

```
sudo apt-get install portaudio19-dev libatlas-base-dev
// 一定注意是pip3安装! 不是pip; 运行时也必须是 python3
sudo pip3 install numpy scipy pyqtgraph pyaudio
```

#### 测试运行

```
git clone https://github.com/scottlawsonbc/audio-reactive-led-strip.git
sudo python3 audio-reactive-led-strip/python/visualization.py
```

---

### 灯带检测

灯带是否损坏可以一头接上+5V + GND, 在另一头短接试试

如果树莓派重启,则说明灯带电源没问题,要是不能亮的话就是信号线有问题或者电压不足

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 花样玩法

0. 可以参考一下,防止吃灰
1. 声控可视化乐谱
2. 宝塔 Linux
3. 旁路由器
4. 作为双屏驱动器(需要一块触控屏幕)
5. 硬件:无线键盘(鼠标不用了)\摄像头(或加指纹识别)\语音识别(+AI)
6. 个人网站搭建
7. 虚拟机/远程 docker
8. 尝试多系统
9. OpenWrt
10. 当梯子 NAT
11. 文件服务器
12. 内网穿透
