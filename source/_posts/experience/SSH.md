---
title: SSH远程连接
categories:
  - experience
tags:
  - SSH
cover: https://i.loli.net/2020/12/07/8hkiBs34PZ2eRIu.png
# top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-12-07 00:12:52
 * @LastEditors: Weidows
 * @LastEditTime: 2020-12-07 22:05:23
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog-private\source\_posts\experience\SSH.md
 * @Description:
-->

# 生成公私秘钥

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

# 配置连通

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

# 测试命令

- 终端进入这个.ssh 文件夹(不在这个文件夹下无法导通)

  ```
  ssh -T git@gitee.com
  ```

- 出现`git@gitee.com: Permission denied (publickey).`,说明哪里没配置好出问题了.
- 出现`Hi Weidows! You've successfully authenticated, but GITEE.COM does not provide shell access.`说明配置好了.

---

# 完成

- 测试完成后两机处于连通状态!
