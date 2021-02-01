---
title: 🌈初探Docker.
categories:
  - system
tags:
  - Docker
cover: https://i.loli.net/2021/01/31/GYBrOKiMjNlC3ap.jpg
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-31 00:08:20
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-01 00:37:55
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\system\docker.md
 * @Description:
 * @!: *********************************************************************
-->

- [名词引入](#名词引入)
  - [docker-Dockerfile](#docker-dockerfile)
  - [docker-compose](#docker-compose)
  - [docker-machine](#docker-machine)
- [安装启动](#安装启动)

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 名词引入

- 首先`Docker`是啥就不解释了.

- 初探尝试安装时出现下面好几个选择,于是搜了搜~

  <img src="https://i.loli.net/2021/01/31/jhuS34tCPsd8qzO.png" alt="20210131002505" />

- 找到 docker 家族有几个特殊的工具`docker-Dockerfile`,`docker-compose`,`docker-machine`

  - 这几个工具不需要单另安装,docker 内部自带.

  <img src="https://i.loli.net/2021/01/31/ylYzZV2vthOpcsW.png" alt="20210131004332" />

---

## docker-Dockerfile

> [Docker Dockerfile](https://www.runoob.com/docker/docker-dockerfile.html)

> Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。

---

## docker-compose

> [docker 与 docker-compose 区别](https://blog.csdn.net/weixin_43165750/article/details/106108234)

> docker 是一个容器，你如果要是安装服务也是要单独一个一个的安装，如果你使用了 docker-compose 的话 就可以使用一个 docker-compose.yml 脚本一键安装

- 说来其是管理同一个 docker 下多个服务的.

---

## docker-machine

> [Docker 三剑客之 docker-machine](https://zhuanlan.zhihu.com/p/93459073)

- 这个是用来管理多个 docker 的.

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 安装启动

- 需要注意电脑需要开启`虚拟化技术`,而且 Windows 需要开启`hyper-v`

- 去官网上找 `Docker Desktop for Windows`,下载安装,或者在 Scoop 上安装`docker`
