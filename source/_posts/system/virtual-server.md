---
title: 🟡Ubuntu-Server搞机记录.
date: 2021-02-02 02:04:38
password: ""
tags:
  - 操作系统
  - 虚拟机
  - 服务器
  - Ubuntu
cover: https://www.helloimg.com/images/2022/02/27/GV4TCR.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-02-02 02:04:38
 * @LastEditors: Weidows
 * @LastEditTime: 2021-09-02 15:47:06
 * @FilePath: \Blog-private\source\_posts\system\virtual-server.md
 * @Description:
 * @!: *********************************************************************
-->

- [下载安装](#下载安装)
- [换源](#换源)
- [配置静态 IP](#配置静态-ip)
- [软件备份](#软件备份)

## 下载安装

- 官网上下载 ISO 文件就行,挺快的

  - desktop 是桌面版,有图形界面

  - server 是服务器版,没有图形界面(也就是只有命令行界面)

  ***

- 我用的`VMware`安装的,用其他软件也可,个人比较喜欢这个.

  - 安装时可以选择附带的服务软件,比如`docker`,`k8s`等等...

  ***

- 安装完成后长这样

  <img src="https://www.helloimg.com/images/2022/02/27/GV4SqX.png" alt="20210202144325" />

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 换源

> [Ubuntu 20.04 换国内源 清华源 阿里源 中科大源 163 源](https://blog.csdn.net/xiangxianghehe/article/details/105688062)

- 安装系统过程中就有换源选项.

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 配置静态 IP

> [ubuntu 18.04 设置静态 ip 方法](https://www.cnblogs.com/yaohong/p/11593989.html)

- 初始的 Ubuntu-Server 没有`net-tools`,需要[安装](#软件备份)

- 默认情况下使用`DHCP`,连接网络会自动分配一个 IP,使用`ifconfig`查看(这个 ifconfig 就是上面 net-tools 里面的)

  ```
  weidows@ubuntu-server:~/Code$ ifconfig
  ens33: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
          inet 192.168.2.122  netmask 255.255.255.0  broadcast 192.168.2.255
          inet6 fe80::20c:29ff:fe28:c082  prefixlen 64  scopeid 0x20<link>
          ether 00:0c:29:28:c0:82  txqueuelen 1000  (Ethernet)
          RX packets 114664  bytes 143722941 (143.7 MB)
          RX errors 0  dropped 0  overruns 0  frame 0
          TX packets 52086  bytes 37199464 (37.1 MB)
          TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

  lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
          inet 127.0.0.1  netmask 255.0.0.0
          inet6 ::1  prefixlen 128  scopeid 0x10<host>
          loop  txqueuelen 1000  (Local Loopback)
          RX packets 14643  bytes 53874531 (53.8 MB)
          RX errors 0  dropped 0  overruns 0  frame 0
          TX packets 14643  bytes 53874531 (53.8 MB)
          TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

  weidows@ubuntu-server:~/Code$
  ```

- 可以看到第三行`192.168.2.122`就是分配的 ip 了,用它就行.

- 进入`/etc/netplan/`这个目录,使用`ll`查看内部有啥东西

  - 发现第六行`00-installer-config.yaml`这个文件是我们要找的(可能名字不一样,后缀是.yaml 就对了)

  - 使用`cat`查看文件内容,核实没错,然后修改它!

  ```
  weidows@ubuntu-server:~/Code$ cd /etc/netplan/
  weidows@ubuntu-server:/etc/netplan$ ll
  total 12
  drwxr-xr-x  2 root root 4096 Feb  1 17:55 ./
  drwxr-xr-x 92 root root 4096 Feb  2 06:25 ../
  -rw-r--r--  1 root root  116 Feb  1 17:55 00-installer-config.yaml
  weidows@ubuntu-server:/etc/netplan$ cat 00-installer-config.yaml
  # This is the network config written by 'subiquity'
  network:
    ethernets:
      ens33:
        dhcp4: true
    version: 2
  weidows@ubuntu-server:/etc/netplan$
  ```

- 使用`vi`修改` sudo vi /etc/netplan/00-installer-config.yaml`

  - 地址啥的按照规则设

  ```yaml
  ## This is the network config written by 'subiquity'
  network:
    ethernets:
      ens33:
        dhcp4: false
        addresses: [192.168.2.122/24]
        gateway4: 192.168.2.1
        nameservers:
          addresses:
            - 192.168.2.1
    version: 2
  ```

- 然后应用`sudo netplan apply`设置,完事!

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 软件备份

- 找软件的话可以用`apt search XXX`来找

- 个人安装的一些服务型软件(在主机上做的开发,用这个 Server 跑服务)

```
sudo apt install docker
sudo apt install net-tools
```
