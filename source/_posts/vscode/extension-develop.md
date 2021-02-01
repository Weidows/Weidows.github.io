---
title: ♻VScode插件开发流程.
categories:
  - vscode
tags:
  - VScode
  - extension
cover: https://i.loli.net/2021/01/03/mjSy1DuPknbalrv.png
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-03 15:18:46
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-07 00:56:39
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog-private\source\_posts\vscode\extension-develop.md
 * @Description:
 * @!: *********************************************************************
-->

- [前期准备](#前期准备)
- [开发](#开发)
- [打包](#打包)
- [发布](#发布)
- [结合 GitHub](#结合-github)

# 前期准备

> 首先准备好点子(扩展,主题啥的)具体是想要做啥.

---

# 开发

- 可以照葫芦画瓢,反正基本都是开源的,别乱复制粘贴就好.

- vscode 插件开发可以用`Yeoman`:

  ```
  npm install -g yo generator-code
  ```

- 使用:

  ```
  yo code
  ```

- 具体怎么使用,暂时不造,先记着.

---

# 打包

- 安装`vsce`

  ```
  npm install -g vsce
  ```

- 使用

  ```
  vsce package
  ```

- 使用后会把当前目录下所有东西打包成`*.vsix`

---

# 发布

- 网上一些其他教程忒老了,还在用 vsce 发布(官方都已经停用了...)

- 进入[https://marketplace.visualstudio.com/VSCode](https://marketplace.visualstudio.com/VSCode)

- 右上角有个`publish extension`,注册登录账号

  - 之后你的账号应该有一个组织,在组织下新建一个`publisher`

  - 然后摸索摸索发布插件.

---

# 结合 GitHub

- 发现 package.json 中必须用 https 协议传输数据,于是 local 的 images`无法显示`

  - 意思就是`./xxx.jpg`根本显示不出来.
  - 必须使用`https://xxx.jpg`才行.

- 这导致一些图片并不需要打包在插件里(因为是引用的 URL)

  - 而且这些图片要是想显示,必须有个图床.

- 那还想啥? 肯定是 GitHub 啊!

  - 我的方案是 Git -> GitHub
  - 在 Git 项目中建立`pack/`目录专门用来打包`*.vsix`
  - 在 pack 同级目录建立`images/`传到 github 当图床.(因为使用私人图床管理太乱)

- 项目结构

  <img src="https://i.loli.net/2021/01/03/UbD9VspYcdH7Ojn.png" alt="20210103160252" />
