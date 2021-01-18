---
title: GitHub操作上的一些问题
categories:
  - GitHub
tags:
  - Github
cover: https://i.loli.net/2020/11/30/JUkiZVF8s3ne1fz.jpg
# top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-11-21 19:28:51
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-15 02:36:31
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog-private\source\_posts\GitHub\matters.md
 * @Description:
-->

- [首页绿格子](#首页绿格子)
- [License 选择](#license-选择)
- [国内时区错位问题](#国内时区错位问题)
- [博客域名](#博客域名)
- [删除远程分支](#删除远程分支)

# 首页绿格子

- Github 不显示 fork 仓库的 commit
  - 比如 Auto-green 需要独立出来

---

# License 选择

![License](https://i.loli.net/2020/11/30/46lbZztfLjkM2n7.jpg)

---

# 国内时区错位问题

- 我在东八区,布置的 GitHub Action 是 0 点执行
  - 结果是在早上八点多才执行的(大概是八点半左右,误差<5min)
  - 因为 GitHub 服务器不是在国内,时区不同,其对应的大概是欧洲伦敦那块的标准时区.
- `结论`:布置 Action 定时任务时,设置的时间要早八个小时(对应东八区)

# 博客域名

- GitHub 与 Gitee-pages 部署域名规则不同.

- github 上当且仅当 Repo 名字为`userName.github.io`时,域名为`userName.github.io`
  - 其他 Repo 名字为`userName.github.io/repoName/`
- Gitee 是当且仅当 Repo 名字为`userName.gitee.io`时,域名为`userName.gitee.io`
  - 否则类似上面

---

# 删除远程分支

- 不能删除当前默认分支.
