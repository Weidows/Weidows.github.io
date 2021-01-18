---
title: ⬆ Node.js环境配置 && 使用
categories:
  - Web
  - Node.js
tags:
  - Node
  - npm
  - yarn
  - package
cover: https://i.loli.net/2020/11/30/at4cvJXTRZw9bQH.jpg
# top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-11-24 21:59:29
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-16 03:03:35
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\Node.js\node.md
 * @Description:
-->

- [环境配置](#环境配置)
  - [修改 node_modules 路径](#修改-node_modules-路径)
  - [预览](#预览)
- [安装 yarn](#安装-yarn)
- [换阿里源](#换阿里源)
- [依赖升级](#依赖升级)
- [参数及常用命令](#参数及常用命令)
  - [`-g` / `-global`](#-g---global)
  - [`-save`](#-save)
- [local 全局依赖](#local-全局依赖)

# 环境配置

## 修改 node_modules 路径

- 我发现 Node.js 根目录本身就可以作为`npm的node_global`,安装默认路径是在 C 盘里面,改一哈!
  - (即使 node.js 升级也不用再重新修改)
  - 但是有个问题,Scoop 更新 Node.js 会新建一个版本目录,于是我们的依赖还在老版本目录里,会无法使用
  - 解决办法:要么重新装依赖,要么把下面这几个目录移动过来(这个比较容易)
- 执行

  ```shell
  npm config set prefix "D:\Game\Scoop\apps\nodejs\current"
  npm config set cache "D:\Game\Scoop\apps\nodejs\current\cache"
  yarn config set global-folder "D:\Game\Scoop\apps\nodejs\current\yarn_modules"
  yarn config set cache-folder "D:\Game\Scoop\apps\nodejs\current\yarn_cache"
  ```

- 另外,yarn 和 npm 绝对不能用同一个`node_modules`目录,yarn 会把 npm 的`所有`依赖覆写掉.

  ***

## 预览

- 于是,像这样,所有 global 的脚手架都安装到了 Node.js 目录下
  <img src="https://i.loli.net/2021/01/15/8GbUaKRMfoHkNvh.png" alt="20210115020940" />
- 全局 node_modules 管理也更直观(放在 C 盘的话贼难受,而且经常会忘记之前装过什么.)

  - yarn 的

    <img src="https://i.loli.net/2021/01/15/qac2fyhICB8oN1P.png" alt="20210115021019" />

  - npm 的

    <img src="https://i.loli.net/2021/01/15/9CzfHjrKWgD4cuZ.png" alt="20210115021057" />

---

# 安装 yarn

- Node.js 是 JavaScript 运行环境,某个项目运行起来可能会需要一些依赖
- npm 和 yarn 就是管理这些依赖的
- 安装 node.js 后自带 npm,并不会带 yarn(但是建议使用 yarn)
- 虽然 npm 与 yarn 是同一类东西,但是可以用 npm 安装 yarn(神不神奇,因为 npm 和 yarn 本身就是依赖)
- 用 npm 安装(也可以去官网下载安装,不过那样更复杂麻烦)

  ```shell
  npm install -g  yarn
  ```

- 配置
  [在上面](#修改全局-node_modules-路径)
- 这样配置好之后,npm 与 yarn 共享 node_modules 和 node_cache,而且都在 node.js 目录下不在 C 盘,层级清晰.

---

# 换阿里源

- 替换源地址

  ```powershell
  npm config set registry https://registry.npm.taobao.org
  yarn config set registry https://registry.npm.taobao.org
  ```

- 检查

  ```
  npm config get registry
  yarn config get registry
  ```

# 依赖升级

- package path 简介

  - Node.Js 的包管理器有`npm,cnpm,yarn`等,通过上面操作后咱就用`npm`
    - (因为 cnpm 会可能会出现包中包现象,导致很多模块冲突报错)
  - Node.Js 通过 npm 可以安装 hexo 模块,hexo 里面的插件也是通过 npm 安装
  - npm 安装/升级/移除的模块都在`node_modules/`里面,不会影响外面的东西

- npm check && upgrade(node 插件)

  ```
  npm install -g npm-check
  ```

  ```
  npm install -g npm-upgrade
  ```

  - 使用:直接`npm-check`/`npm-upgrade`

- 缓存清理

  - 会清空 node_cache

  ```
  npm cache clean --force
  ```

---

# 参数及常用命令

> [详见 yarn 的常用命令](https://www.cnblogs.com/lililia/p/10482169.html)

- 按照 package.json 文件的配置安装 module 到 node_modules/里面

## `-g` / `-global`

- 全局安装/卸载
- 注意脚手架如果是全局安装的话,卸载也要加上`-g`才能全局卸载.

## `-save`

- 默认直接 install 会安装进那个目录,但是不会修改 package.json 文件
- 加上-save 会修改文件,使下次 npm install 也会安装
- 写在前面和后面都可以
  - `npm install --save hexo-tag-aplayer`
  - `npm install hexo-tag-aplayer --save`

---

# local 全局依赖

- npm

```shell
npm install -g yarn
```

- yarn

```shell
yarn global add hexo-cli
yarn global add vsce
```
