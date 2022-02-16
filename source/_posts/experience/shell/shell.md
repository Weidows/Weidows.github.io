---
title: 💧一些常用终端命令.
date: 2020-09-03 17:35:04
tags:
  - shell
  - 备忘录
  - Linux
  - 计算机系统
  - 宝塔面板
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/gTyr4jImCiDKYfx.jpg
---

<!--
 * @Author: Weidows
 * @Date: 2020-09-03 17:35:04
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-17 01:56:44
 * @FilePath: \Blog-private\source\_posts\experience\shell\shell.md
-->

# 💧 一些常用终端命令.

{% pullquote mindmap mindmap-md %}

- [💧 一些常用终端命令.](#-一些常用终端命令)
  - [通用](#通用)
    - [文件末尾追加命令](#文件末尾追加命令)
    - [输出重定向](#输出重定向)
    - [启动程序](#启动程序)
    - [清垃圾(?](#清垃圾)
    - [与或-管道运算符](#与或-管道运算符)
  - [CMD/PowerShell](#cmdpowershell)
  - [Linux](#linux)
    - [查杀进程](#查杀进程)
    - [宝塔](#宝塔)
  - [Git](#git)
  - [Docker](#docker)
  - [Vim](#vim)
  - [扩展程序](#扩展程序)
    - [fzf](#fzf)
    - [tldr](#tldr)

{% endpullquote %}

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 通用

|                   指令                   |                 作用                  |
| :--------------------------------------: | :-----------------------------------: |
| `cd path` // `cd ..` // `cd /` // `cd ~` | 进入 指定 // 上层 // 根 // home 目录  |
|                `Ctrl + L`                |                 清屏                  |
|                  `exit`                  |                 退出                  |
|                  `ping`                  |           测试网络通断状态            |
|                `Ctrl + C`                |             停止当前任务              |
|                  `exit`                  |            停止任务或终端             |
|                 `mkdir`                  |              新建文件夹               |
|            `cp(xcopy)/mv/rm`             |       文件(夹)复制、移动与删除        |
|               `curl + URL`               |      访问 URL(可加参数,具体百度)      |
|                  `pwd`                   |            显示当前全路径             |
|                 `dir/ls`                 |        列出当前目录(样式不同)         |
|                  `cat`                   |     (按参数格式)输出文件所有内容      |
|                 `clear`                  |                 清屏                  |
|                  `echo`                  |          回显,常用作文本输出          |
|       `shutdown -h now` / `reboot`       |              关机 / 重启              |
|             `ls \| grep abc`             |  过滤 ls 的输出,只显示含"abc"的内容   |
|          `ls \| tee [-a] t.log`          | 显示 ls 输出同时[追加]输出到 t.log 里 |

---

### 文件末尾追加命令

|                       指令                       |                    作用                     |
| :----------------------------------------------: | :-----------------------------------------: |
|     `echo 'add content'>/home/data/test.sh`      |               覆盖原文件内容                |
|     `echo 'add content'>>/home/data/test.sh`     |                 在末尾追加                  |
| `date +"%Y-%m-%d %H:%M:%S.%N" >> keepchange.txt` | 这种写法也可以,就是把前面当成字符串输入文件 |

---

### 输出重定向

|       指令        |                                    作用                                     |
| :---------------: | :-------------------------------------------------------------------------: |
|   `ls > ls.txt`   |                         把 ls 输出内容输出到 ls.txt                         |
|   `>/dev/null`    | 把标准输出重定向到黑洞,相当于(1>/dev/null) 标准输入 0,标准输出 1,标准错误 2 |
| `>/dev/null 2>&1` |               把标准错误重定向到标准输出,也就是这俩都进了黑洞               |
| `2>&1 >/dev/null` |               把标准错误重定向到标准输出(屏幕),标准输出进黑洞               |

> [2>/dev/null 和>/dev/null 2>&1 和 2>&1>/dev/null 的区别](https://blog.csdn.net/longgeaisisi/article/details/90519690)

---

### 启动程序

> [同步(Synchronous)和异步(Asynchronous)](https://www.cnblogs.com/IT-CPC/p/10898871.html) 同步，就是调用某个东西时，调用方得等待这个调用返回结果才能继续往后执行。异步，和同步相反 调用方不会理解得到结果，而是在调用发出后调用者可用继续执行后续操作，被调用者通过状体来通知调用者，或者通过回掉函数来处理这个调用
>
> - start 异步
> - call 同步

---

### 清垃圾(?

- 写脚本时,如果遇到两种情况:

  1. 要删除某路径下所有东西

  2. 路径是变量

  那就有可能就变成删库跑路了..

  ***

- 比如

  ```bat
  set PATH=%1
  rm -rf %PATH%/*
  ```

  ***

- PATH 靠调用脚本时传入的参数来定义,没传参数的话就 undefined,以至于下一行变成大名鼎鼎的

  `rm -rf /*`

---

### 与或-管道运算符

command1 & command2 & command3: 不论成败都会执行

command1 && command2 && command3: 左边全都执行成功/返回 0 才会执行右边的命令

command1 || command2 || command2: 左边全都执行失败/返回 1 才会执行右边的命令

command1 | command2: 把左边的命令的输出结果作为右边的命令的输入,例如 `ps | grep win`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## CMD/PowerShell

> [批处理定义子程序](https://www.hxstrive.com/article/804.htm)\
> [批处理命令之 Start 的详细用法](https://www.cnblogs.com/qlqwjy/p/8445993.html)

> [bat 与 shell 互转 Appendix L. Converting DOS Batch Files to Shell Scripts](http://shouce.jb51.net/shell/dosbatch.html)

|              指令              |       作用        |
| :----------------------------: | :---------------: |
|              `md`              | 创建目录,同 mkdir |
|              `rd`              |  删除目录,同 rm   |
|             `del`              |     删除文件      |
|             `cls`              |   清屏,同 clear   |
|           `ipconfig`           |   查看网络配置    |
|         `start + exe`          |   打开应用程序    |
| `start/explore + URL/HTML文件` | 用默认浏览器打开  |
|      `microsoft-edge:URL`      | 用 edge 打开 URL  |
|            `xxx /?`            |    xxx 的帮助     |

- 注意 cmd 不支持`/`作为路径,PowerShell 支持

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Linux

|                    指令                     |                             作用                              |
| :-----------------------------------------: | :-----------------------------------------------------------: |
|                  `su root`                  |               获取最高权限(需要输入 root 密码)                |
|                 `ifconfig`                  |                         查看网络配置                          |
|                 `dhclient`                  |                       DHCP 重新配置 IP                        |
|        `./xxx.sh start/restart/xxx`         |                     启动/重启 shell 脚本                      |
|              `nohup xxx.sh &`               | 不挂起执行 xxx (退出终端不影响程序运行),需要 ps/kill 杀死进程 |
|           `tail -n 20 README.md`            |           输出 READMD 最后 20 行内容(默认是 10 行)            |
| `systemctl start/enable/status xxx.service` |                  xxx 服务-开启/开机启动/状态                  |
|                `touch a.txt`                |                        创建 a.txt 文件                        |

> [Linux nohup 命令](https://www.runoob.com/linux/linux-comm-nohup.html) \
> [Linux tail 命令](https://www.runoob.com/linux/linux-comm-tail.html) \
> [基于 VSCode 和 CMake 进行 C/C++开发「第一讲」linux 系统介绍](https://mp.weixin.qq.com/s?__biz=MzIwMjU3NDI5Ng==&mid=2247483948&idx=1&sn=6eed2f766b1a815c9bcca38cf9ccd3c2&chksm=96ddd29ba1aa5b8d240d2c7cf9902b24f48ab36b196b86f7ea6d0b987c4538108276e6e273e6&mpshare=1&scene=23&srcid=1020CNuclmVRrL4LTW9lyHwq&sharer_sharetime=1634691119252&sharer_shareid=ff6bb8cfd138294e80df076b8b76232d#rd)

---

### 查杀进程

|              指令               |                     作用                      |
| :-----------------------------: | :-------------------------------------------: |
|          `ps -ef/aux`           |    显示进程(注意多个进程用','隔开而非空格)    |
|          `kill -9 pid`          |                   杀死进程                    |
| `lsof -i:8080 / -i@12:34:56:78` | Linux 中一切皆文件,此命令可以显示指定文件信息 |

> [ps -ef 和 ps -aux 和 ps aux](https://blog.csdn.net/weixin_38756990/article/details/72638084)\
> [Linux kill 命令](https://www.runoob.com/linux/linux-comm-kill.html)\
> [Linux 命令神器：lsof](https://www.jianshu.com/p/a3aa6b01b2e1)

---

### 宝塔

|           指令           |       作用       |
| :----------------------: | :--------------: |
| `/etc/init.d/bt default` | 查看宝塔面板入口 |

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Git

|                  指令                  |   作用   |
| :------------------------------------: | :------: |
| `git remote add origin 你的远程库地址` | 添加远程 |

- Git 三连
  | 指令 | 作用 |
  | :------------------------------------: | :--------: |
  | `git add .` | 加入暂存区 |
  | `git commit -m "提交消息,可添加emoji😝"` | 提交 |
  | `git push [origin(远程名字,默认是origin) master(分支名字)]` | 推送 |

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Docker

|                    指令                     |                      作用                      |
| :-----------------------------------------: | :--------------------------------------------: |
|              `docker ps [-a]`               |                 列出[所有]容器                 |
| `docker ps --filter "abcd / status=running` |      筛选出含"abcd"/状态为 running 的容器      |
|              `docker kill xxx`              |                 关闭 xxx 容器                  |
|          `docker list\| grep abc`           | 筛选 docker list 命令中含有 abc 字符串的结果集 |

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Vim

| 指令  |                  作用                   |
| :---: | :-------------------------------------: |
| `:q!` | 如何获得一个随机字符串? >让新手退出 vim |

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 扩展程序

> [5 款超级好用的命令行工具，提升你的开发效率！](https://zhuanlan.zhihu.com/p/176277245)\
> [推荐 18 个终端命令行工具](https://mp.weixin.qq.com/s?__biz=MzIyMDkwODczNw==&mid=2247500080&idx=2&sn=64d4a8f3e4013ba7a77f25502cf945dd&chksm=97c65c9ea0b1d58881e761a4bd69fa1136b87102e94d301685a085f2c6b09670dac5f5781e6a&mpshare=1&scene=23&srcid=07058VtSWw1T2LusxMXcZtRs&sharer_sharetime=1625473567691&sharer_shareid=ff6bb8cfd138294e80df076b8b76232d#rd)

### fzf

- 与 grep 相似,不同点:

  - grep 是查找写死的东西,查找范围固定

  - fzf 可动态查找用户输入的内容,并且范围大

|    指令     |          作用          |
| :---------: | :--------------------: |
|    `fzf`    |        模糊查找        |
| `ls \| fzf` | 在 ls 的输出内容中查找 |

---

### tldr

命令帮助文档,优化版的 man,有个类似的工具 `cheat.sh`,一番角逐之下我还是用的 tldr

|   指令    |
| :-------: |
|  tldr cd  |
| tldr java |
