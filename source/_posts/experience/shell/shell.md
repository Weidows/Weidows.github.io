---
title: 💧一些常用终端命令.
date: 2020-09-03 17:35:04
categories:
  - experience
  - shell
tags:
  - shell
  - 备忘录
  - Linux
  - 计算机系统
  - 宝塔面板
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/gTyr4jImCiDKYfx.jpg
---

<!--
 * @Author: Weidows
 * @Date: 2020-09-03 17:35:04
 * @LastEditors: Weidows
 * @LastEditTime: 2021-06-21 11:32:17
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\experience\shell\shell.md
-->

- [通用](#通用)
  - [文件末尾追加命令](#文件末尾追加命令)
  - [输出重定向](#输出重定向)
- [CMD/PowerShell](#cmdpowershell)
- [Linux](#linux)
  - [查杀进程](#查杀进程)
- [宝塔](#宝塔)
- [Git](#git)
- [Docker](#docker)
- [Vim](#vim)

# 通用

|     指令     |             作用             |
| :----------: | :--------------------------: |
|     `cd`     |         打开指定目录         |
|    `cd..`    |           上层目录           |
|  `Ctrl + L`  |             清屏             |
|    `exit`    |             退出             |
|    `ping`    |       测试网络通断状态       |
|  `Ctrl + C`  |         停止当前任务         |
|   `mkdir`    |          新建文件夹          |
|  `cp/mv/rm`  |     文件复制、移动与删除     |
| `curl + URL` | 访问 URL(可加参数,具体百度)  |
|    `pwd`     |        显示当前全路径        |
|    `cat`     | (按参数格式)输出文件所有内容 |

---

## 文件末尾追加命令

|                       指令                       |                    作用                     |
| :----------------------------------------------: | :-----------------------------------------: |
|     `echo 'add content'>/home/data/test.sh`      |                删除原行内容                 |
|     `echo 'add content'>>/home/data/test.sh`     |                 在末尾追加                  |
| `date +"%Y-%m-%d %H:%M:%S.%N" >> keepchange.txt` | 这种写法也可以,就是把前面当成字符串输入文件 |

---

## 输出重定向

|       指令        |                                    作用                                     |
| :---------------: | :-------------------------------------------------------------------------: |
|   `>/dev/null`    | 把标准输出重定向到黑洞,相当于(1>/dev/null) 标准输入 0,标准输出 1,标准错误 2 |
| `>/dev/null 2>&1` |               把标准错误重定向到标准输出,也就是这俩都进了黑洞               |
| `2>&1 >/dev/null` |               把标准错误重定向到标准输出(屏幕),标准输出进黑洞               |

> [2>/dev/null 和>/dev/null 2>&1 和 2>&1>/dev/null 的区别](https://blog.csdn.net/longgeaisisi/article/details/90519690)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# CMD/PowerShell

|              指令              |       作用       |
| :----------------------------: | :--------------: |
|             `dir`              |     列出目录     |
|              `md`              |     创建目录     |
|              `rd`              |     删除目录     |
|             `cd/`              |    返回根目录    |
|             `del`              |     删除文件     |
|          `cls/clear`           |       清屏       |
|           `ipconfig`           |   查看网络配置   |
|          `copy/xcopy`          |    复制/剪切     |
|         `start + exe`          |   打开应用程序   |
| `start/explore + URL/HTML文件` | 用默认浏览器打开 |

- 注意 cmd 不支持`/`作为路径,PowerShell 支持

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# Linux

|             指令             |                             作用                              |
| :--------------------------: | :-----------------------------------------------------------: |
|           `ls/ll`            |                    列出当前目录的所有东西                     |
|          `su root`           |               获取最高权限(需要输入 root 密码)                |
|          `ifconfig`          |                         查看网络配置                          |
|          `dhclient`          |                       DHCP 重新配置 IP                        |
| `./xxx.sh start/restart/xxx` |                     启动/重启 shell 脚本                      |
|   `docker list\|grep abc`    |        筛选 docker list 命令中含有 abc 字符串的结果集         |
|       `nohup xxx.sh &`       | 不挂起执行 xxx (退出终端不影响程序运行),需要 ps/kill 杀死进程 |
|    `tail -n 20 README.md`    |           输出 READMD 最后 20 行内容(默认是 10 行)            |

> [Linux nohup 命令](https://www.runoob.com/linux/linux-comm-nohup.html)

> [Linux tail 命令](https://www.runoob.com/linux/linux-comm-tail.html)

---

## 查杀进程

|              指令               |                     作用                      |
| :-----------------------------: | :-------------------------------------------: |
|          `ps -ef/aux`           |                   显示进程                    |
|          `kill -9 pid`          |                   杀死进程                    |
| `lsof -i:8080 / -i@12:34:56:78` | Linux 中一切皆文件,此命令可以显示指定文件信息 |

> [ps -ef 和 ps -aux 和 ps aux](https://blog.csdn.net/weixin_38756990/article/details/72638084)

> [Linux kill 命令](https://www.runoob.com/linux/linux-comm-kill.html)

> [Linux 命令神器：lsof](https://www.jianshu.com/p/a3aa6b01b2e1)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 宝塔

|           指令           |       作用       |
| :----------------------: | :--------------: |
| `/etc/init.d/bt default` | 查看宝塔面板入口 |

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# Git

|                  指令                  |   作用   |
| :------------------------------------: | :------: |
| `git remote add origin 你的远程库地址` | 添加远程 |

- Git 三连
  | 指令 | 作用 |
  | :------------------------------------: | :--------: |
  | `git add .` | 加入暂存区 |
  | `git commit -m "提交消息,可添加emoji😝"` | 提交 |
  | `git push [origin(远程名字,默认是origin) master(分支名字)]` | 推送 |

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# Docker

|                   指令                    |                 作用                 |
| :---------------------------------------: | :----------------------------------: |
|             `docker ps [-a]`              |            列出[所有]容器            |
| `docker ps --filter "abcd`/status=running | 筛选出含"abcd"/状态为 running 的容器 |
|              docker kill xxx              |            关闭 xxx 容器             |

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# Vim

| 指令  |                  作用                   |
| :---: | :-------------------------------------: |
| `:q!` | 如何获得一个随机字符串? >让新手退出 vim |
