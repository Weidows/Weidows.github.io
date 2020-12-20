---
title: shell的一些常用命令
categories:
  - experience
  - shell
tags:
  - shell
  - 备忘录
  - Linux
  - 计算机系统
  - 宝塔面板
cover: https://i.loli.net/2020/11/30/gTyr4jImCiDKYfx.jpg
---

<!--
 * @Author: Weidows
 * @Date: 2020-09-03 17:35:04
 * @LastEditors: Weidows
 * @LastEditTime: 2020-12-19 23:41:07
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog-private\source\_posts\experience\shell\shell.md
-->

# 通用

|     指令     |            作用             |
| :----------: | :-------------------------: |
|     `cd`     |        打开指定目录         |
|    `cd..`    |          上层目录           |
|  `Ctrl + L`  |            清屏             |
|    `exit`    |            退出             |
|    `ping`    |      测试网络通断状态       |
|  `Ctrl + C`  |        停止当前任务         |
|   `mkdir`    |         新建文件夹          |
|  `cp/mv/rm`  |    文件复制、移动与删除     |
| `curl + URL` | 访问 URL(可加参数,具体百度) |

- 文件末尾追加命令

```shell
echo 'add content'>/home/data/test.sh   # 删除原行内容
echo 'add content'>>/home/data/test.sh  # 在末尾追加
date +"%Y-%m-%d %H:%M:%S.%N" >> keepchange.txt  # 这种写法也可以,就是把前面当成字符串输入文件
```

---

# DOS/CMD/PowerShell

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

---

# Linux

|    指令    |               作用               |
| :--------: | :------------------------------: |
|    `ls`    |      列出当前目录的所有东西      |
| `su root`  | 获取最高权限(需要输入 root 密码) |
| `ifconfig` |           查看网络配置           |
| `dhclient` |         DHCP 重新配置 IP         |

---

# 宝塔

|           指令           |       作用       |
| :----------------------: | :--------------: |
| `/etc/init.d/bt default` | 查看宝塔面板入口 |

---

# Git

|                  指令                  |    作用    |
| :------------------------------------: | :--------: |
|              `git add .`               | 加入暂存区 |
|     `git commit -m "first commit"`     |    提交    |
| `git remote add origin 你的远程库地址` |  添加远程  |
|        `git push origin master`        |    推送    |
