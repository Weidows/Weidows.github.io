---
title: 🌈初探Docker.
date: 2021-01-31 00:08:20
categories:
  - system
tags:
  - Docker
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/GYBrOKiMjNlC3ap.jpg
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-31 00:08:20
 * @LastEditors: Weidows
 * @LastEditTime: 2021-03-24 11:51:22
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\system\docker.md
 * @Description:
 * @!: *********************************************************************
-->

- [名词引入](#名词引入)
  - [docker-Dockerfile](#docker-dockerfile)
  - [docker-compose](#docker-compose)
  - [docker-machine](#docker-machine)
- [安装启动](#安装启动)
  - [Ubuntu-Server](#ubuntu-server)
  - [Windows](#windows)
- [解决权限问题](#解决权限问题)
- [启动 docker](#启动-docker)
- [加速](#加速)
  - [镜像加速](#镜像加速)
    - [Windows](#windows-1)
    - [Manjaro](#manjaro)
  - [设置代理](#设置代理)
- [命令行执行](#命令行执行)
- [VScode+docker](#vscodedocker)
- [Portainer](#portainer)
- [容器自启](#容器自启)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 名词引入

- 首先`Docker`是啥就不解释了.

- 初探尝试安装时出现下面好几个选择,于是搜了搜~

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/jhuS34tCPsd8qzO.png" alt="20210131002505" />

- 找到 docker 家族有几个特殊的工具`docker-Dockerfile`,`docker-compose`,`docker-machine`

  - 这几个工具不需要单另安装,docker 内部自带.

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/ylYzZV2vthOpcsW.png" alt="20210131004332" />

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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 安装启动

## Ubuntu-Server

- `Ubuntu-Server`装系统时就带有`Docker`安装选项,直接安装即可,但是会遇到下面[权限问题及解决办法](#解决权限问题)

- <details>
    <summary>安装后开机检测</summary>

  ```
  weidows@ubuntu-server:~$ docker

  Usage: docker [OPTIONS] COMMAND

  A self-sufficient runtime for containers

  Options:
  --config string Location of client config files (default "/home/weidows/snap/docker/471/.docker")
  -c, --context string Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default context set with "docker context use")
  -D, --debug Enable debug mode
  -H, --host list Daemon socket(s) to connect to
  -l, --log-level string Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
  --tls Use TLS; implied by --tlsverify
  --tlscacert string Trust certs signed only by this CA (default "/home/weidows/snap/docker/471/.docker/ca.pem")
  --tlscert string Path to TLS certificate file (default "/home/weidows/snap/docker/471/.docker/cert.pem")
  --tlskey string Path to TLS key file (default "/home/weidows/snap/docker/471/.docker/key.pem")
  --tlsverify Use TLS and verify the remote
  -v, --version Print version information and quit

  Management Commands:
  builder Manage builds
  config Manage Docker configs
  container Manage containers
  context Manage contexts
  engine Manage the docker engine
  image Manage images
  network Manage networks
  node Manage Swarm nodes
  plugin Manage plugins
  secret Manage Docker secrets
  service Manage services
  stack Manage Docker stacks
  swarm Manage Swarm
  system Manage Docker
  trust Manage trust on Docker images
  volume Manage volumes

  Commands:
  attach Attach local standard input, output, and error streams to a running container
  build Build an image from a Dockerfile
  commit Create a new image from a container's changes
  cp Copy files/folders between a container and the local filesystem
  create Create a new container
  deploy Deploy a new stack or update an existing stack
  diff Inspect changes to files or directories on a container's filesystem
  events Get real time events from the server
  exec Run a command in a running container
  export Export a container's filesystem as a tar archive
  history Show the history of an image
  images List images
  import Import the contents from a tarball to create a filesystem image
  info Display system-wide information
  inspect Return low-level information on Docker objects
  kill Kill one or more running containers
  load Load an image from a tar archive or STDIN
  login Log in to a Docker registry
  logout Log out from a Docker registry
  logs Fetch the logs of a container
  pause Pause all processes within one or more containers
  port List port mappings or a specific mapping for the container
  ps List containers
  pull Pull an image or a repository from a registry
  push Push an image or a repository to a registry
  rename Rename a container
  restart Restart one or more containers
  rm Remove one or more containers
  rmi Remove one or more images
  run Run a command in a new container
  save Save one or more images to a tar archive (streamed to STDOUT by default)
  search Search the Docker Hub for images
  start Start one or more stopped containers
  stats Display a live stream of container(s) resource usage statistics
  stop Stop one or more running containers
  tag Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top Display the running processes of a container
  unpause Unpause all processes within one or more containers
  update Update configuration of one or more containers
  version Show the Docker version information
  wait Block until one or more containers stop, then print their exit codes

  Run 'docker COMMAND --help' for more information on a command.
  weidows@ubuntu-server:~$

  ```

  </details>

---

## Windows

- 在 `Windows` 上安装就比较复杂了,牵扯到很多东西.

- Docker 基于 Linux 系统实现,所以无法直接安装在 Windows 上,需要虚拟化支持.

  - 这就需要借助`wsl`或者`Virtual box`或者`hyper-v`了(建议用 wsl)

  > 详见 [🎇 尝试转投 wsl 生态.#名词解释](../wsl2#名词解释)

  - 这里提一下,如果想用 hyper-v 引擎,只需要勾选`hyper-v`功能就行,wsl 的那两个不用开(当然开了对 docker 也没影响)

---

- 安装 docker 前,需要装好 wsl,下面文章到`最后`安装系统之前,都需要过一遍才能装好 wsl2

  > [🎇 尝试转投 wsl 生态.#配置](../wsl2#配置)

- 装好 wsl 后去 docker 官网下载 `Docker desktop for window`,安装.

- 装好 docker 之后 `重启` 才能正常使用!

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 解决权限问题

> [解决 Ubuntu18.04 启动 Docker“Got permission denied while trying to connect to the Docker daemon socket“问题](https://blog.csdn.net/liangllhahaha/article/details/92077065)

- 我安装的`Ubuntu-Server`没有`root`用户,会导致 docker 启动异常.

- 用`docker version`检查

  - 最后一行会报错这样

  ```
  Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.26/images/json: dial unix /var/run/docker.sock: connect: permission denied
  ```

---

- 解决方案

  ```
  sudo groupadd docker          #添加docker用户组
  sudo gpasswd -a $USER docker  #将当前用户添加至docker用户组
  newgrp docker                 #更新docker用户组
  ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 启动 docker

> [在 Manjaro Linux 系统使用 Docker](https://blog.huangz.me/2020/docker-on-linux.html)

- 启动服务

  ```
  sudo systemctl start docker.service
  ```

- 开机自动启动 docker 服务

  ```
  sudo systemctl enable docker.service
  ```

- 重新载入配置

  ```
  sudo systemctl daemon-reload
  ```

- 重启 docker

  ```
  sudo systemctl restart docker
  ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 加速

## 镜像加速

- 登录阿里云并找到[`容器镜像服务`](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)

- 阿里会给一个加速地址,把地址复制到 Docker 设置里就可.

### Windows

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/wG1JgIPTof5yN6b.png" alt="20210205010825" />

---

### Manjaro

- 新建或者修改`/etc/docker/daemon.json`

  ```json
  {
    "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
  }
  ```

- 然后重启 docker 服务

  ```shell
  sudo systemctl daemon-reload
  sudo systemctl restart docker
  ```

---

## 设置代理

> 参考: [docker docs](https://docs.docker.com/config/daemon/systemd/)

- 国内网络环境拉取镜像非常慢,挂代理可以快很多.

1. 新建文件夹

```
sudo mkdir -p /etc/systemd/system/docker.service.d
```

2. 新建文件 `/etc/systemd/system/docker.service.d/http-proxy.conf`,添加内容:

```conf
[Service]
Environment="HTTP_PROXY=http://192.168.2.109:7890"
```

3. 如果需要其他协议的代理,可以再添加,如下:

```conf
[Service]
Environment="HTTP_PROXY=http://192.168.2.109:7890"
Environment="HTTPS_PROXY=https://192.168.2.109:7890"
```

4. [重新载入配置 & 重启 docker](#启动-docker)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 命令行执行

- 有些文档为了观看性写成如下格式,无法直接执行,需要弄成一行.

  - 前

  ```
  docker run -d \
    -p 8088:8088 \
    --name next-terminal \
    --restart always ghcr.io/dushixiang/next-terminal:latest
  ```

  - 后

  ```
  docker run -d -p 8088:8088 --name next-terminal --restart always ghcr.io/dushixiang/next-terminal:latest
  ```

- 最后重启 docker,用 `docker info` 检查一下就好了

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# VScode+docker

- 在 Manjaro 虚拟机中启动 docker 服务,然后用 vscode-ssh 连接 manjaro

- 安装 docker 插件,就可以享受比较方便的可视化了(个人非常喜欢这种方式)

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/AF6QcV3elqXPR2t.png" alt="20210206153528" />

- 另外再安装`Resource Monitor`这个插件可以监控远程机资源消耗(如上图最下方)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# Portainer

> [Docker 安装管理面板--Portainer](https://blog.csdn.net/tian330726/article/details/102987572)

- docker 的可视化工具,可连接本地和远程,支持集群,有很多部署方式,这里选择直接在 docker 部署.

- 首先它需要一个`volume(数据卷)`,新建

  ```
  docker volume create portainer_data
  ```

- 然后拉取并运行

  - 需要保证 9000 端口没被占用,不然无法运行

  ```
  docker run -d --name portainer --restart always -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
  ```

- 浏览器打开 `localhost:9000`

- 官网上的版本要比 github 的 tag 慢一些,左下角提示更新可以无视~

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 容器自启

```
# 开启
docker update --restart=always <CONTAINER ID>

# 关闭
docker update --restart=no <CONTAINER ID>
```
