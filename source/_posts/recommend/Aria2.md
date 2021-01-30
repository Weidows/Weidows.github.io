---
title: ✨炒鸡好用的下载器-Aria2
categories:
  - recommend
tags:
  - Aria2
  - 工具
cover: https://i.loli.net/2021/01/29/VD9X6TrFWc5yCfi.png
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-29 12:59:50
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-30 10:26:31
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\recommend\Aria2.md
 * @Description:
 * @!: *********************************************************************
-->

- [简介](#简介)
- [需求](#需求)
- [横向对比](#横向对比)
  - [IDM](#idm)
  - [Motrix](#motrix)
  - [迅雷](#迅雷)
  - [FFmpeg](#ffmpeg)
  - [Aria2+AriaNg](#aria2ariang)
- [配置 Aria2](#配置-aria2)
- [配置浏览器](#配置浏览器)
- [启动 Aria2-RPC](#启动-aria2-rpc)
- [开机自启/后台运行](#开机自启后台运行)
- [参考](#参考)

# 简介

- `Aria2`是一个命令行下载器,没有 UI 界面

- 支持多线程下载,各种协议导入.

- 通过下面知乎问答可以了解下下载协议和目前主流下载器运行方式.

> [为什么很多人都推荐 IDM 下载 说这才是下载神器 不限速的 比迅雷下载和百度网盘下载好多了？](https://www.zhihu.com/question/61896660)

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 需求

- 1. 个人需要一个`多线程`下载器,其实也不用强调,因为目前大多数下载器都是多线程的

- 2. 可以替换掉浏览器默认下载(浏览器默认下载太反人类了)

- 3. 个人比较看重的一点,我有时会需要`批量下载`B 站上的分 P 视频(防止视频下架)

  - 我用的脚本只能导出如下几个下载方式

  <img src="https://i.loli.net/2021/01/29/xi3DPVzARd8nWYt.png" alt="20210129155515" />

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 横向对比

## IDM

- 支持的协议太少了,而且不太好用,优点是它可以抓取网页中的音视频下载,但是对于我来说,下载音乐并不靠这个,下载视频(B 站和油管的),它都不支持,不过倒是支持个上面的批量下载.
- 总的来说是我的第二选择.

---

## Motrix

- 底层就是用的 Aria2,所以说支持的协议挺多的,确实不错但是奈何我用不着...
  - 现在`Aria2+AriaNg`已经足够满足我了.

---

## 迅雷

- Emmm 跟我的需求有点不一样,排除.

---

## FFmpeg

- 哈哈哈,没用过,不了解

---

## Aria2+AriaNg

- 这个就是主角,也就是我正在用的.

- Aria2 可以通过 Scoop 安装,而且 Scoop 可以通过调用 aria2 实现加速下载.

- 我需要做的就是安装浏览器插件:`Aria2 for Chrome`或者`Aria Manager`之类的,让他连通作为 Aria2 的 UI 界面

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 配置 Aria2

- 用过 Scoop 的应该都知道 Aria2,一般安装 Scoop 时都会装上

- 找到`Aria2c.exe`这个文件,只需要这一个,其他的一切都不需要!

- 再找个合适的位置(比如跟 Aria2.exe 放在一起)新建两个文件`aria2.session`和`conf`,其实名字随意起,第一个文件空着就行,conf 是配置文件,在这里面可以自定义 Aria2 的配置,我的如下:

  ```
  ## '#'开头为注释内容, 选项都有相应的注释说明, 根据需要修改 ##
  ## 被注释的选项填写的是默认值, 建议在需要修改时再取消注释  ##

  ## 文件保存相关 ##

  # 文件的保存路径(可使用绝对路径或相对路径), 默认: 当前启动位置
  dir=D:/Downloads
  # 启用磁盘缓存, 0为禁用缓存, 需1.16以上版本, 默认:16M
  #disk-cache=32M
  # 文件预分配方式, 能有效降低磁盘碎片, 默认:prealloc
  # 预分配所需时间: none < falloc ? trunc < prealloc
  # falloc和trunc则需要文件系统和内核支持
  # NTFS建议使用falloc, EXT3/4建议trunc, MAC 下需要注释此项
  file-allocation=none
  # 断点续传
  continue=true

  ## 下载连接相关 ##

  # 最大同时下载任务数, 运行时可修改, 默认:5
  max-concurrent-downloads=5
  # 同一服务器连接数, 添加时可指定, 默认:1
  max-connection-per-server=16
  # 最小文件分片大小, 添加时可指定, 取值范围1M -1024M, 默认:20M
  # 假定size=10M, 文件为20MiB 则使用两个来源下载; 文件为15MiB 则使用一个来源下载
  min-split-size=1M
  # 单个任务最大线程数, 添加时可指定, 默认:5
  split=32
  # 整体下载速度限制, 运行时可修改, 默认:0
  #max-overall-download-limit=0
  # 单个任务下载速度限制, 默认:0
  #max-download-limit=0
  # 整体上传速度限制, 运行时可修改, 默认:0
  #max-overall-upload-limit=0
  # 单个任务上传速度限制, 默认:0
  #max-upload-limit=0
  # 禁用IPv6, 默认:false
  disable-ipv6=true

  ## 进度保存相关 ##

  # 从会话文件中读取下载任务
  input-file=D:\Game\Scoop\persist\aria2\aria2.session
  # 在Aria2退出时保存`错误/未完成`的下载任务到会话文件
  save-session=D:\Game\Scoop\persist\aria2\aria2.session
  # 定时保存会话, 0为退出时才保存, 需1.16.1以上版本, 默认:0
  save-session-interval=60

  ## RPC相关设置 ##

  # 启用RPC, 默认:false
  enable-rpc=true
  # 允许所有来源, 默认:false
  rpc-allow-origin-all=true
  # 允许非外部访问, 默认:false
  rpc-listen-all=true
  # 事件轮询方式, 取值:[epoll, kqueue, port, poll, select], 不同系统默认值不同
  #event-poll=select
  # RPC监听端口, 端口被占用时可以修改, 默认:6800
  #rpc-listen-port=6800
  # 设置的RPC授权令牌, v1.18.4新增功能, 取代 --rpc-user 和 --rpc-passwd 选项
  #rpc-secret=12345678
  # 设置的RPC访问用户名, 此选项新版已废弃, 建议改用 --rpc-secret 选项
  #rpc-user=<USER>
  # 设置的RPC访问密码, 此选项新版已废弃, 建议改用 --rpc-secret 选项
  #rpc-passwd=<PASSWD>

  ## BT/PT下载相关 ##

  # 当下载的是一个种子(以.torrent结尾)时, 自动开始BT任务, 默认:true
  #follow-torrent=true
  # BT监听端口, 当端口被屏蔽时使用, 默认:6881-6999
  listen-port=51413
  # 单个种子最大连接数, 默认:55
  #bt-max-peers=55
  # 打开DHT功能, PT需要禁用, 默认:true
  enable-dht=false
  # 打开IPv6 DHT功能, PT需要禁用
  #enable-dht6=false
  # DHT网络监听端口, 默认:6881-6999
  #dht-listen-port=6881-6999
  # 本地节点查找, PT需要禁用, 默认:false
  #bt-enable-lpd=false
  # 种子交换, PT需要禁用, 默认:true
  enable-peer-exchange=false
  # 每个种子限速, 对少种的PT很有用, 默认:50K
  #bt-request-peer-speed-limit=50K
  # 客户端伪装, PT需要
  peer-id-prefix=-TR2770-
  user-agent=Transmission/2.77
  # 当种子的分享率达到这个数时, 自动停止做种, 0为一直做种, 默认:1.0
  seed-ratio=0
  # 强制保存会话, 即使任务已经完成, 默认:false
  # 较新的版本开启后会在任务完成后依然保留.aria2文件
  #force-save=false
  # BT校验相关, 默认:true
  #bt-hash-check-seed=true
  # 继续之前的BT任务时, 无需再次校验, 默认:false
  bt-seed-unverified=true
  # 保存磁力链接元数据为种子文件(.torrent文件), 默认:false
  bt-save-metadata=true
  ```

- 注意 40 行后面的`路径`和`文件名`的对应关系.

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 配置浏览器

- 上面提到了,需要安装`Aria2 for Chrome`或者`Aria Manager`之类的插件

- 安装完之后出现插件设置界面

  <img src="https://i.loli.net/2021/01/29/8mAJSw7gyiUNXKP.png" alt="20210129162937" />

- 或者在`AriaNg`管理页面,这两个页面一样

  <img src="https://i.loli.net/2021/01/29/BJfCuaNyeSTEWvg.png" alt="20210129164251" />

- 必须填写的是画圈的部分,也就是上面`conf`文件第 62 行填的,我写的是`12345678`

- 其他的配置随意,这样,浏览器就配置好了.

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 启动 Aria2-RPC

- 实现原理是让`Aria2.exe`程序读取`conf`文件跑起来`RPC服务`,然后浏览器插件连接这个 RPC 实现界面化管理.

- 运行程序

  - 没配置环境变量的话需要指定`aria2.exe`路径,用 Scoop 安装的不用配置.

  ```shell
  aria2c --conf-path="D:\Game\Scoop\persist\aria2\conf"
  ```

- 在命令行中服务跑起来了,显示如下

  ```
  ❯ aria2c --conf-path="D:\Game\Scoop\persist\aria2\conf"

  01/29 16:38:59 [WARN] Neither --rpc-secret nor a combination of --rpc-user and --rpc-passwd is set. This is insecure. It is extremely recommended to specify --rpc-secret with the adequate secrecy or now deprecated --rpc-user and --rpc-passwd.

  01/29 16:38:59 [NOTICE] IPv4 RPC: listening on TCP port 6800
  ```

  <img src="https://i.loli.net/2021/01/29/pJtLQdBWcvgeb9T.png" alt="20210129164430" />

- 但是有个问题,一旦这个终端关闭,aria.exe 也会跟着被关闭,这个服务就会断了(连接失败)

  - 通俗来说任务管理器中必须有个`aria.exe`在运行着.

  - 解决办法如下.

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 开机自启/后台运行

- Aria2 本身特别小,后台一直开着没影响,我们让他开机自启,在后台一直挂着.

- 新建一个`start.vbs`,内容如下

  ```vbs
  CreateObject("WScript.Shell").Run "aria2c --conf-path=D:\Game\Scoop\persist\aria2\conf",0
  ```

- 把这个 vbs 文件想个法挂到开机启动程序中,相信你能办到!

- `搞腚!`

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 参考

- 本篇文章介绍不是很平滑,建议结合参照文章一同食用.

> [Aria2 新手入门教程](https://p3terx.com/archives/aria2-started-guide.html)

> [下载工具系列——Aria2 (几乎全能的下载神器)](https://www.jianshu.com/p/7c030484ac90)

> [几种隐藏批处理运行窗口的方法](https://blog.csdn.net/jeefchen/article/details/5644450?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control)
