---
title: GitHub操作上的一些问题
date: 2020-11-21 19:28:51
categories:
  - tools
  - Git
tags:
  - Github
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/JUkiZVF8s3ne1fz.jpg
top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-11-21 19:28:51
 * @LastEditors: Weidows
 * @LastEditTime: 2021-08-23 10:24:20
 * @FilePath: \Blog-private\source\_posts\tools\Git\matters.md
 * @Description:
-->

- [首页绿格子](#首页绿格子)
- [License 选择](#license-选择)
- [国内时区错位问题](#国内时区错位问题)
- [博客域名](#博客域名)
- [删除远程分支](#删除远程分支)
- [凭证和权限](#凭证和权限)
  - [问题一](#问题一)
  - [问题二](#问题二)
- [被墙问题](#被墙问题)
- [版本回退](#版本回退)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 首页绿格子

- Github 不显示 fork 仓库的 commit
  - 比如 Auto-green 需要独立出来

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## License 选择

![License](https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/46lbZztfLjkM2n7.jpg)

> 感觉菜鸟教程的文章最详细: [各种开源协议介绍](https://www.runoob.com/w3cnote/open-source-license.html)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 国内时区错位问题

- 我在东八区,布置的 GitHub Action 是 0 点执行
  - 结果是在早上八点多才执行的(大概是八点半左右,误差<5min)
  - 因为 GitHub 服务器不是在国内,时区不同,其对应的大概是欧洲伦敦那块的标准时区.
- `结论`:布置 Action 定时任务时,设置的时间要早八个小时(对应东八区)

## 博客域名

- GitHub 与 Gitee-pages 部署域名规则不同.

- github 上当且仅当 Repo 名字为`userName.github.io`时,域名为`userName.github.io`
  - 其他 Repo 名字为`userName.github.io/repoName/`
- Gitee 是当且仅当 Repo 名字为`userName.gitee.io`时,域名为`userName.gitee.io`
  - 否则类似上面

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 删除远程分支

- 不能删除当前默认分支.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 凭证和权限

### 问题一

- 本地 git 有时候会遇到 github 凭证失效问题

- 在 VScode 里的 git 仓库失效后会老是催你登陆,没完没了

  - (VScode 让你登录后只是暂时性的,你关闭后就还是会失效)

  ***

- 解决办法: VScode 让登录时一次,然后保存凭证就好了!

  ```
  git config --global credential.helper store
  ```

---

### 问题二

- 推送时报:"无权限推送到 xxx 仓库"

  问题原因是`本地的认证失效了`,但是 Git 并不会自动清除让你重新认证

- 我遇到这个问题是在 Git 某次更新后, `credential.helper store` 情况下.

---

- 解决办法: 删掉 `~/.git-credentials` 这个文件,它失效了

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 被墙问题

- 有时候 github 会被墙,导致无法推送,需要挂代理

- 方案:

  ```shell
  git config --global https.proxy http://127.0.0.1:1080
  ```

- 或者直接修改`~/.gitconfig`文件

  ```
  [core]
    autocrlf = true
    longpaths = true
    editor = code.exe
  [user]
    name = Weidows
    email = utsuko27@qq.com
  [http]
    proxy = localhost://127.0.0.1:7890
  [https]
    proxy = localhost://127.0.0.1:7890
  ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 版本回退

不小心把 ssh 私钥 copy 到了 git 库里提到了 github 上,差点 GG

> [Git 恢复之前版本的两种方法 reset、revert（图文详解）](https://blog.csdn.net/yxlshk/article/details/79944535)

1. reset 到出错提交的前一个提交
2. 修改,提交
3. 强制提交(不强制的话不行): git push origin master -f
