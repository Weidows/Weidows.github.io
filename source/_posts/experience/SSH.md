---
title: ✨SSH远程连接.
categories:
  - experience
tags:
  - SSH
  - Linux
cover: https://i.loli.net/2020/12/07/8hkiBs34PZ2eRIu.png
# top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-12-07 00:12:52
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-28 01:38:46
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\experience\SSH.md
 * @Description:
-->

- [手动挡](#手动挡)
  - [生成公私秘钥](#生成公私秘钥)
  - [配置连通](#配置连通)
  - [测试命令](#测试命令)
- [自动挡](#自动挡)
  - [FinalShell](#finalshell)
  - [VScode 连接](#vscode-连接)
- [存在の问题](#存在の问题)

# 手动挡

## 生成公私秘钥

- 比如

  ```shell
  ssh-keygen -t rsa -C "utsuko27@qq.com" -f ~/.ssh/Gitee_rsa
  ```

- 生成后`.ssh/`文件夹下面就会出现两个文件
  - `Gitee_rsa` 私钥
  - `Gitee_rsa.pub` 公钥
- 通过`cd ~/.ssh`或者`cat ~/.ssh/Gitee_rsa.pub`的方式获取公钥
  - 一般.ssh 路径为`C:\Users\username\.ssh`
  - 把公钥复制到远程机上.

---

## 配置连通

- 在.ssh 下新建`config`文件,参照以下模板:

  ```
  # gitee
  Host gitee.com
  HostName gitee.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/Gitee_rsa
  ```

- 多个 ssh 秘钥在这个 config 文件里配置.
- 如果不想让它确认输入 yes,可以在这个文件里加上一行:

  ```
  StrictHostKeyChecking no
  ```

- 配置文件完成,现在应该是这样子:

  <img src="https://i.loli.net/2020/12/07/4slQ1hP92qxSUIW.png" alt="20201207100813" />

---

## 测试命令

- 终端进入这个.ssh 文件夹(不在这个文件夹下无法导通)

  ```
  ssh -T git@gitee.com
  ```

- 出现`git@gitee.com: Permission denied (publickey).`,说明哪里没配置好出问题了.
- 出现`Hi Weidows! You've successfully authenticated, but GITEE.COM does not provide shell access.`说明配置好了.

- 测试完成,两机处于连通状态!

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 自动挡

## FinalShell

- 连接树莓派,ip 为`192.168.43.119`,用户名为`pi`,密码为默认的`raspberry`

  <img src="https://i.loli.net/2020/12/03/9SuJxmTWczQG2oE.png" alt="20201203113101" />

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

## VScode 连接

- 安装插件`Remote-SSH`

  <img src="https://i.loli.net/2020/12/04/25reFfkbShHl9q8.png" alt="20201204202003" />

- 安装后侧边栏出现`远程资源管理器`,然后点新建,出现下面东东~

  <img src="https://i.loli.net/2021/01/28/vm3bRepxYuL4SUk.png" alt="20210128005600" />

- 照着他的提示输入就行,比如我以`pi`用户登录,树莓派`内网ip`是`192.168.2.116`,那么应该输入

  ```shell
  ssh pi@192.168.2.116 -A
  ```

- 打开 `ssh 配置文件`查看一下,可以自定义修改配置,如下.

  - 我把 Host 后面的名字改成了树莓派,其他没动.

  ```
  Host 树莓派
    HostName 192.168.2.116
    User pi
    ForwardAgent yes
  ```

- 打开输入对应用户的密码就可以登录了.

  - 如果有个`Bug`,网上尚未有解决方案==>VScode 用 ssh 连接树莓派在很短时间内断连,影响力达到无法使用的程度.那么就按照我上面重来一遍.

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 存在の问题

- 某些系统对 ssh 不开放 root,比如`Deepin`,网上有开放方法

> [深度（deepin）系统不能 ssh root 用户登录](https://blog.csdn.net/weixin_42408060/article/details/102952986)
