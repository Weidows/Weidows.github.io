---
title: 😍Manjaro虚拟机充当服务器记录.
date: 2021-02-03 14:00:21
categories:
  - system
tags:
  - Manjaro
  - 计算机系统
  - 服务器
  - 虚拟机
cover: https://i.loli.net/2021/02/03/YqH4ru9kGy5UdLt.jpg
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-02-03 14:00:21
 * @LastEditors: Weidows
 * @LastEditTime: 2021-03-07 00:18:55
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\system\Manjaro-Server.md
 * @Description:
 * @!: *********************************************************************
-->

- [系统选择](#系统选择)
  - [我的需求](#我的需求)
- [启用 ssh 服务](#启用-ssh-服务)
  - [故障排除](#故障排除)
- [换源](#换源)
  - [自动](#自动)
  - [手动](#手动)
  - [更新](#更新)
- [配置 docker](#配置-docker)
- [软件安装](#软件安装)

# 系统选择

- 关于我为什么最后选择了作为 Server 来说比较冷门的 `Manjaro`

|    系统     |                                                                                     特性                                                                                      |
| :---------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   CentOS    |                                        系统特别稳健,bug 少,出了问题解决方案多,服务型软件丰富;标准 server,不怎么需要特殊配置,维护难度低                                        |
|   Ubuntu    | 跟 CentOS 差不多,但是因为生态惯性问题确实比 CentOS 用得少,现在由 CentOS 转向 Ubuntu 的很多;server 安装后需要做很多配置才能使用,维护性难度中等;server 安装后默认没有 root 用户 |
|   Manjaro   |    Arch 分支的 Linux 发行版,desktop-KDE,内核滚动更新很快,更新比 Arch 慢但更稳定,软件生态很丰富,图形化好维护;定位并非 Server,是桌面操作系统所以功耗稍大;默认不启用 ssh 服务    |
| RaspberryPi |                                                               树莓派定制化系统,可以说啥都干得了,但是啥都干不好                                                                |
|   Deepin    |                       生态正在逐步扩大,但是对于服务器端还是太差了,毕竟它的定位也是桌面操作系统;图形化卡顿比较严重,有些无解决方案的 bug;不开放 root 用户                       |

---

## 我的需求

- 我想让服务器比较稳定,因为在主机上用`VMware` 开的虚拟机,所以性能消耗要求不高.

- 最好是带有图形界面,这样维护比较方便

- 与`VScode-ssh`连接必须稳定!

  - 有些服务需要把代码拉到服务器上

  > 已经有解决方案了,参见 [✨SSH 远程连接.#VScode-ssh-断开连接](../../experience/SSH#VScode-ssh-断开连接)

- 有且要开放 root

  - 有的系统不带 root 账户,有的不开放.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 启用 ssh 服务

> [Manjaro Linux 系统 ssh：connect to host localhost port 22: Connection refused 解决方法](https://blog.csdn.net/SUDDEV/article/details/85314469)

- 默认情况下 manjaro 有 ssh 但是不开启.

- 用 ssh 连接它会出现以下报错:

  ```
  connect to host localhost port 22: Connection refused
  ```

- 开启 ssh 服务

  ```shell
  systemctl enable sshd.service
  ```

- 开启后需要`重启`下才能生效.

---

## 故障排除

- 如果 ssh 服务开启了,连接步骤也没错,但是就是连不上,有可能是 ssh 旧记录的问题

- 报错信息包含如下

  ```
  WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
  > @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  ```

- 去主机电脑上找到`~/.ssh/known_hosts`,这里面有过去连接的 ip 记录和公钥,删除对应的就可.

  - Windows 上那个位置就是`C:\Users\你的用户名\.ssh`

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 换源

> [arch/Manjaro 添加国内源以及社区源](https://blog.csdn.net/weixin_43968923/article/details/86349914)

## 自动

```
sudo pacman-mirrors -i -c China -m rank
```

---

## 手动

- 找到`/etc/pacman.d/mirrorlist`,备份之后修改:

  - 越靠上优先级越高.

  ```
  ## 中科大
  Server = https://mirrors.ustc.edu.cn/manjaro/stable/$repo/$arch

  ##  清华大学
  Server = https://mirrors.tuna.tsinghua.edu.cn/manjaro/stable/$repo/$arch

  ## 上海交通大学
  Server = https://mirrors.sjtug.sjtu.edu.cn/manjaro/stable/$repo/$arch

  ## 浙江大学
  Server = https://mirrors.zju.edu.cn/manjaro/stable/$repo/$arch
  ```

---

## 更新

- 更新软件包

  ```
  pacman -Sy
  ```

- 更新所有

  ```
  pacman -Syu
  ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 配置 docker

> 详见 [🌈 初探 Docker.](../../system/docker)

> [在 Manjaro Linux 系统使用 Docker](https://blog.huangz.me/2020/docker-on-linux.html)

# 软件安装

> [msys2 pacman 常用命令以及添加国内源加速 pacman](https://blog.csdn.net/john_bh/article/details/104652224)

```
sudo pacman -S docker
```
