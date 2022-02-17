---
title: 一篇扫清:GitHub-Pages自动化部署 + github/gitee选择
date: 2020-08-23 10:54:41
password: ""
tags:
  - 备忘录
  - Hexo
  - Website
  - Github
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/ZN45JO19SVRihG8.png
---

<!--
 * @Author: Weidows
 * @Date: 2020-08-23 10:54:41
 * @LastEditors: Weidows
 * @LastEditTime: 2021-12-15 19:49:54
 * @FilePath: \Blog-private\source\_posts\tools\Git\GitHub-Pages-deploy.md
-->

- [GitHub/Gitee 选择](#githubgitee-选择)
- [解决方案](#解决方案)
- [开启](#开启)
- [GitHub 自动化部署](#github-自动化部署)
  - [安装 Hexo-deployer](#安装-hexo-deployer)
- [另一种更加方便完美的解决方案](#另一种更加方便完美的解决方案)
- [github-action 自动化部署](#github-action-自动化部署)
  - [解释:](#解释)

## GitHub/Gitee 选择

- 速度来看,GitHub 在加载速度上略超 Gitee,部署速度 Gitee 略快(但是这项几乎不影响体验)
- 但是就图片加载来看,GitHub 还是远不如 Gitee,可以考虑图床或者 JsDelivr 做 CDN 来解决
- 功能上,都支持 Hexo 部署和选择分支部署
  - GitHub 只能识别并部署根目录`/`或者`/docs/`,而 Gitee 支持`自定义要部署的路径`

---

## 解决方案

- 如果你想部署在 GitHub 上但是却因为它不识别那个路径
  - 尝试修改博客根目录下的`_config.yml`,把`public_dir: public`改为`public_dir: docs`
  - 这样在博客 generate 时会把需要部署的文件生成到 docs/里,可供 GitHub 识别
  - 注意在 GitHub 的这个仓库的 Settings 里要把 source 的分支,目录对应修改好

---

## 开启

- `Gitee`
  ![20201122112033](https://cdn.jsdelivr.net/gh/Weidows/Images/post/dpIgQvz93ltRCPD.jpg)
- `Github`
  ![20201122112109](https://cdn.jsdelivr.net/gh/Weidows/Images/post/Ep8oz6eMxPadQ3s.jpg)

---

## GitHub 自动化部署

### 安装 Hexo-deployer

- (注意 cnpm 好像不行)

  ```shell
  `npm install hexo-deployer-git --save`
  ```

- 在`_config.yml` 里添加以下内容(注意缩进不要错)

  ```
  deploy:
  type: git # 用本项目的 git 进行提交 & 推送
  repo: 这里填入 GitHub 仓库 URL
  branch: master # 这里写想要部署到的分支名(没有对应分支的话会自动新建)
  ```

- 在对应仓库的设置里找到 github-pages 然后选择对应分支,系统就会自动部署并发出你的博客链接了

---

## 另一种更加方便完美的解决方案

- 因为搭建这个博客的工作目录可能并不是一个独立的 git 仓库
- (就是它被包含在其他仓库里,而非自己是一个独立仓库)
- 这种情况下上面的 deployer 就鸡鸡了(没法用了,除非自己改),有没有解决方案呢?
- 有,使用 github-action 自动化部署!

## github-action 自动化部署

文件目录: `Blogroot/.github/workflows/deploy.yml`
(简单点就是.github 跟 public,source 等等同级目录),写入下面内容:

```yml
name: Build and Deploy

on: [push] # 触发条件(git 推送时)

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2 # 下面这个最好设成 false
        with:
          persist-credentials: false

      - name: Install and Build 🔧
        run: |
          cd Website
          npm install
          npm run build
        env:
          CI: false

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # 把下面这个文件夹部署到哪个分支(不能是本分支,会覆盖掉)
          FOLDER: Website/public # 想部署的文件夹
```

### 解释:

- name 随意起
- on:[push]意思是在推送时触发 action
- Build and Deploy 就是触发的 job 名称
- run-on 是运行环境(其自带一些基础的环境,Exp:Node.JS,但是更具体的比如 Hexo 就不会自带了)
- steps 就是步骤了,可以看出下面有三个步骤(步骤内的操作就不细讲了...)
- 这样我们写完博客 generate 之后 push 这个仓库,github-action 会自动执行找到你指定的文件夹把它部署到你指定的分支上,然后设置下让 github-pages 部署这个分支,博客就出来了!
