---
title: ✨炒鸡好用的下载器-Aria2
date: 2021-01-29 12:59:50
password: ""
tags:
  - Aria2
  - 工具
cover: https://www.helloimg.com/images/2022/02/27/GVSafA.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-29 12:59:50
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-09 01:41:08
 * @FilePath: \Blog-private\source\_posts\tools\Aria2.md
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
  - [Aria2-AriaNg](#aria2-ariang)
- [配置](#配置)
  - [配置 Aria2](#配置-aria2)
  - [配置浏览器](#配置浏览器)
- [问题-配置中已集成解决](#问题-配置中已集成解决)
  - [启动 Aria2-RPC](#启动-aria2-rpc)
  - [开机自启/后台运行](#开机自启后台运行)
  - [自动更新 tracker](#自动更新-tracker)
- [参考](#参考)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 简介

- `Aria2`是一个命令行下载器,没有 UI 界面

- 支持多线程下载,各种协议导入.

- 通过下面知乎问答可以了解下下载协议和目前主流下载器运行方式.

> [为什么很多人都推荐 IDM 下载 说这才是下载神器 不限速的 比迅雷下载和百度网盘下载好多了？](https://www.zhihu.com/question/61896660)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 需求

1. 个人需要一个`多线程`下载器,其实也不用强调,因为目前大多数下载器都是多线程的

2. 可以替换掉浏览器默认下载(浏览器默认下载太反人类了)

3. 个人比较看重的一点,我有时会需要`批量下载`B 站上的分 P 视频以防止视频下架 (~~已弃用~~)

- 我用的脚本只能导出如下几个下载方式

  <img src="https://www.helloimg.com/images/2022/02/27/GVSM7Q.png" alt="20210129155515" />

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 横向对比

### IDM

- 支持的协议太少了,而且不太好用,优点是它可以抓取网页中的音视频下载,但是对于我来说,下载音乐并不靠这个,下载视频(B 站和油管的),它都不支持,不过倒是支持个上面的批量下载.
- 总的来说是我的第二选择.

---

### Motrix

- 底层就是用的 Aria2,所以说支持的协议挺多的,确实不错但是奈何我用不着...

  现在`Aria2+AriaNg`已经足够满足我了.

---

### 迅雷

- Emmm ~~跟我的需求有点不一样,排除.~~

  后来用了一下,发现它下载 p2p 资源还是比 aria2 强不少的; 于是我两个都用~

---

### FFmpeg

- 这个主业是音视频处理,比如 B 站视频源格式是 `flv`, 可以通过 FFmpeg 转为 `mp4`

---

### Aria2-AriaNg

- 这个就是主角,也就是我正在用的.

- Aria2 可以通过 Scoop 安装,而且 Scoop 可以通过调用 aria2 实现加速下载.

- 我需要做的就是安装浏览器插件:`Aria2 for Chrome`或者`Aria Manager`之类的,让他连通作为 Aria2 的 UI 界面

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 配置

### 配置 Aria2

- 用过 Scoop 的应该都知道 Aria2,一般安装 Scoop 时都会装上

  ```
  scoop install aria2
  ```

  ***

- 如果你有幸折腾过这家伙,那么下面应该是全网最精简/完美的配置方案了:

  1. 新建一个 `随意名称.bat` 复制下面东西粘贴进去,每次需要启动时点一下 (或者直接弄进开机启动项)

  2. aria2 所需要的 conf 配置,任务连接 session,启动脚本 vbs,tracker; 全都~堆进这里面了,不需要任何其他配置,想配置的话可以修改一下第二行的 `BACKUP_DIR`

  ```bat
  @REM aria2: 直接通过shell启动会被它占用,所以另开
  set BACKUP_DIR=
    if not defined BACKUP_DIR set BACKUP_DIR=%~dp0Programming-Configuration

  @REM 下载目录, 默认为 D:\Download
  set DOWNLOAD_DIR=
    if not defined DOWNLOAD_DIR set DOWNLOAD_DIR=D:\Download

  @REM 调用链: utils.bat -> aria2.vbs -> aria2.exe -> aria2.conf -> aria2.session

  @REM aria2.session
  touch %BACKUP_DIR%\others\aria2\aria2.session

  @REM 括号内命令的标准输出会重定向到 aria2.conf
  (
    echo ## # 开头为注释内容, 选项都有相应的注释说明, 根据需要修改 ##
    echo ## 被注释的选项填写的是默认值, 建议在需要修改时再取消注释  ##
    echo.
    echo ## 文件保存相关 ##
    echo.
    echo # 文件的保存路径 （可使用绝对路径或相对路径）, 默认: 当前启动位置
    echo dir=%DOWNLOAD_DIR%
    echo # 启用磁盘缓存, 0 为禁用缓存, 需 1.16 以上版本, 默认:16M
    echo #disk-cache=
    echo # 文件预分配方式, 能有效降低磁盘碎片, 默认:prealloc
    echo # 预分配所需时间: none 《 falloc ? trunc 《 prealloc
    echo # falloc 和 trunc 则需要文件系统和内核支持
    echo # NTFS 建议使用 falloc, EXT3/4 建议 trunc, MAC 下需要注释此项
    echo file-allocation=none
    echo # 断点续传
    echo continue=true
    echo.
    echo ## 下载连接相关 ##
    echo.
    echo # 最大同时下载任务数, 运行时可修改, 默认:5
    echo max-concurrent-downloads=5
    echo # 同一服务器连接数, 添加时可指定, 默认:1
    echo max-connection-per-server=16
    echo # 最小文件分片大小, 添加时可指定, 取值范围 1M -1024M, 默认:20M
    echo # 假定 size=10M, 文件为 20MiB 则使用两个来源下载; 文件为 15MiB 则使用一个来源下载
    echo # min-split-size=1M
    echo # 单个任务最大线程数, 添加时可指定, 默认:5
    echo # split=32
    echo # 整体下载速度限制, 运行时可修改, 默认:0
    echo #max-overall-download-limit=0
    echo # 单个任务下载速度限制, 默认:0
    echo #max-download-limit=0
    echo # 整体上传速度限制, 运行时可修改, 默认:0
    echo #max-overall-upload-limit=0
    echo # 单个任务上传速度限制, 默认:0
    echo #max-upload-limit=0
    echo # 禁用 IPv6, 默认:false
    echo # disable-ipv6=true
    echo.
    echo ## 进度保存相关 ##
    echo.
    echo # 从会话文件中读取下载任务
    echo input-file=%BACKUP_DIR%\others\aria2\aria2.session
    echo # 在 Aria2 退出时保存 ` 错误 / 未完成 ` 的下载任务到会话文件
    echo save-session=%BACKUP_DIR%\others\aria2\aria2.session
    echo # 定时保存会话, 0 为退出时才保存, 需 1.16.1 以上版本, 默认:0
    echo save-session-interval=60
    echo.
    echo ## RPC 相关设置 ##
    echo.
    echo # 启用 RPC, 默认:false
    echo enable-rpc=true
    echo # 允许所有来源, 默认:false
    echo rpc-allow-origin-all=true
    echo # 允许非外部访问, 默认:false
    echo rpc-listen-all=true
    echo # 事件轮询方式, 取值:[epoll, kqueue, port, poll, select], 不同系统默认值不同
    echo #event-poll=select
    echo # RPC 监听端口, 端口被占用时可以修改, 默认:6800
    echo #rpc-listen-port=6800
    echo # 设置的 RPC 授权令牌, v1.18.4 新增功能, 取代 --rpc-user 和 --rpc-passwd 选项
    echo #rpc-secret=12345678
    echo # 设置的 RPC 访问用户名, 此选项新版已废弃, 建议改用 --rpc-secret 选项
    echo #rpc-user=《USER》
    echo #rpc-passwd=《PASSWD》
    echo.
    echo ## BT/PT 下载相关 ##
    echo.
    echo # 当下载的是一个种子（以.torrent 结尾） 时, 自动开始 BT 任务, 默认:true
    echo #follow-torrent=true
    echo # BT 监听端口, 当端口被屏蔽时使用, 默认:6881-6999
    echo listen-port=51413
    echo # 单个种子最大连接数, 默认:55
    echo #bt-max-peers=55
    echo # 打开 DHT 功能, PT 需要禁用, 默认:true
    echo enable-dht=false
    echo # 打开 IPv6 DHT 功能, PT 需要禁用
    echo #enable-dht6=false
    echo # DHT 网络监听端口, 默认:6881-6999
    echo #dht-listen-port=6881-6999
    echo # 本地节点查找, PT 需要禁用, 默认:false
    echo #bt-enable-lpd=false
    echo # 种子交换, PT 需要禁用, 默认:true
    echo enable-peer-exchange=false
    echo # 每个种子限速, 对少种的 PT 很有用, 默认:50K
    echo #bt-request-peer-speed-limit=50K
    echo # 客户端伪装, PT 需要
    echo peer-id-prefix=-TR2770-
    echo user-agent=Transmission/2.77
    echo # 当种子的分享率达到这个数时, 自动停止做种, 0 为一直做种, 默认:1.0
    echo seed-ratio=0
    echo # 强制保存会话, 即使任务已经完成, 默认:false
    echo # 较新的版本开启后会在任务完成后依然保留.aria2 文件
    echo #force-save=false
    echo # BT 校验相关, 默认:true
    echo #bt-hash-check-seed=true
    echo # 继续之前的 BT 任务时, 无需再次校验, 默认:false
    echo bt-seed-unverified=true
    echo # 保存磁力链接元数据为种子文件（.torrent 文件）, 默认:false
    echo bt-save-metadata=true
  )> %BACKUP_DIR%\others\aria2\aria2.conf
    call curl -s https://trackerslist.com/best_aria2.txt>%BACKUP_DIR%\others\aria2\trackerslist.txt
    set /p trackerslist=<%BACKUP_DIR%\others\aria2\trackerslist.txt
    echo bt-tracker=%trackerslist%>>%BACKUP_DIR%\others\aria2\aria2.conf

  @REM aria2.vbs
  echo CreateObject("WScript.Shell").Run "aria2c --conf-path=%BACKUP_DIR%\others\aria2\aria2.conf",0 > %BACKUP_DIR%\others\aria2\aria2.vbs
  cscript //Nologo %BACKUP_DIR%\others\aria2\aria2.vbs
  ```

> [我的日常启动脚本](https://github.com/Weidows-projects/Keeper/blob/main/utils.bat)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

### 配置浏览器

- 上面提到了,需要安装`Aria2 for Chrome`或者`Aria Manager`之类的插件

- 安装完之后出现插件设置界面

  <img src="https://www.helloimg.com/images/2022/02/27/GVPHQP.png" alt="20210129162937" />

- 或者在`AriaNg`管理页面,这两个页面一样

  <img src="https://www.helloimg.com/images/2022/02/27/GVtkzR.png" alt="20210129164251" />

- 必须填写的是画圈的部分,也就是上面`conf`文件第 62 行填的,我写的是`12345678`

- 其他的配置随意,这样,浏览器就配置好了.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 问题-配置中已集成解决

### 启动 Aria2-RPC

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

  <img src="https://www.helloimg.com/images/2022/02/27/GVLP3D.png" alt="20210129164430" />

- 但是有个问题,一旦这个终端关闭,aria.exe 也会跟着被关闭,这个服务就会断了(连接失败)

  - 通俗来说任务管理器中必须有个`aria.exe`在运行着.

  - 解决办法如下.

---

### 开机自启/后台运行

- Aria2 本身特别小,后台一直开着没影响,我们让他开机自启,在后台一直挂着.

- 新建一个`start.vbs`,内容如下

  ```vbs
  CreateObject("WScript.Shell").Run "aria2c --conf-path=D:\Game\Scoop\persist\aria2\conf",0
  ```

- 把这个 vbs 文件想个法挂到开机启动程序中,相信你能办到!

- `搞腚!`

---

### 自动更新 tracker

- 时不时需要网上找 tracker 然后复制进 config 里

  实在不够优雅,直接上 bat 脚本

  ```bat
  call curl -s https://trackerslist.com/best_aria2.txt>%BACKUP_DIR%\others\aria2\trackerslist.txt
  set /p trackerslist=<%BACKUP_DIR%\others\aria2\trackerslist.txt
  echo bt-tracker=%trackerslist%>>%BACKUP_DIR%\others\aria2\aria2.conf
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

- 本篇文章介绍不是很平滑,建议结合参照文章一同食用.

  > [Aria2 新手入门教程](https://p3terx.com/archives/aria2-started-guide.html) \
  > [下载工具系列——Aria2 (几乎全能的下载神器)](https://www.jianshu.com/p/7c030484ac90) \
  > [几种隐藏批处理运行窗口的方法](https://blog.csdn.net/jeefchen/article/details/5644450?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control)

> https://github.com/XIU2/TrackersListCollection/
