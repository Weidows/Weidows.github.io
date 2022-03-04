---
title: ⬆ Node.js-环境配置-使用
date: 2020-11-24 21:59:29
password: ""
tags:
  - Node
  - npm
  - yarn
  - package
cover: https://www.helloimg.com/images/2022/02/27/GVaX2A.png
top_img:
---

# Node.js-环境配置-使用

<!--
 * @Author: Weidows
 * @Date: 2020-11-24 21:59:29
 * @LastEditors: Weidows
 * @LastEditTime: 2022-03-05 01:10:01
 * @FilePath: \Blog-private\source\_posts\Web\Node\node.md
 * @Description:
-->

```pullquote mindmap mindmap-md
- [Node.js-环境配置-使用](#nodejs-环境配置-使用)
  - [环境配置](#环境配置)
  - [安装 yarn](#安装-yarn)
  - [加速](#加速)
    - [换源](#换源)
    - [代理](#代理)
  - [依赖升级](#依赖升级)
  - [参数及常用命令](#参数及常用命令)
    - [`-g(global)`](#-gglobal)
    - [`-save`](#-save)
  - [local 全局依赖](#local-全局依赖)
  - [运行报错](#运行报错)
  - [推荐文章](#推荐文章)
  - [node 多版本管理](#node-多版本管理)
  - [版本拟定](#版本拟定)
  - [参考](#参考)
```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 环境配置

- 之前一直在乐此不疲的修改 npm 和 yarn 的 global 路径,因为每次 Node.js 更新会导致目录索引失效...

- 后来发现,Scoop 完美解决了这个问题! 它使用`Scoop/persist`这个文件夹来挂载数据,不影响程序本身,即使更新也不会影响.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 安装 yarn

- Node.js 是 JavaScript 运行环境,某个项目运行起来会需要一些依赖

- `npm/yarn/cnpm` 就是管理这些依赖的, 安装 node.js 后自带 npm,不会带 yarn/cnpm, 这三个中我比较推荐用 `yarn`

  1. yarn 比 npm 更快一些

  2. 默认锁定版本.

---

- 虽然 npm 与 yarn 是同一类东西,但是可以用 npm 安装 yarn (也可以去官网下载安装,不过那样更复杂麻烦)

  神不神奇,因为 npm 和 yarn 本身也是依赖,但是这样安装的话需要进行一些目录配置

  ```shell
  npm install -g  yarn
  ```

- `强烈推荐`: 用 Scoop 安装(`零配置`)

  ```shell
  scoop install yarn
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 加速

### 换源

- 推荐: 使用 [`yrm`](https://www.npmjs.com/package/yrm), 会同时将你的 npm 和 yarn 一起切换
  <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>

- 当然不嫌麻烦可以手动修改

  ```console
  npm config set registry https://registry.npm.taobao.org
  yarn config set registry https://registry.npm.taobao.org
  ```

  也可以直接定位 npm 和 yarn 的配置文件 -> `~/.npmrc和.yarnrc`

  ***

- 检查

  ```
  npm config get registry
  yarn config get registry
  ```

  ***

- 问题: 有时会遇到淘宝源某个文件验证失败问题 (Integrity check failed for "@types/body-parser" (computed integrity doesn't match our records)

  解决办法是: 换回官方的源,用完之后再换成淘宝源.

  ```
  npm config set registry https://registry.npmjs.org
  yarn config set registry https://registry.npmjs.org
  ```

---

### 代理

- 设置代理

  ```console
  npm config set proxy http://127.0.0.1:7890
  npm config set https-proxy http://127.0.0.1:7890
  yarn config set proxy http://127.0.0.1:7890
  yarn config set https-proxy http://127.0.0.1:7890
  ```

- 删除代理

  ```console
  npm config delete proxy
  npm config delete https-proxy
  yarn config delete proxy
  yarn config delete https-proxy
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 依赖升级

- package path 简介

  - Node.Js 的包管理器有`npm,cnpm,yarn`等,通过上面操作后咱就用`npm`
  - Node.Js 通过 npm 可以安装 hexo 模块,hexo 里面的插件也是通过 npm 安装
  - npm 安装/升级/移除的模块都在`node_modules/`里面,不会影响外面的东西

- npm check && upgrade(node 插件)

  ```shell
  npm install -g npm-check
  ```

  ```shell
  npm install -g npm-upgrade
  ```

  - 使用:直接`npm-check`/`npm-upgrade`

- 缓存清理

  - 会清空 node_cache

  ```shell
  npm cache clean --force
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 参数及常用命令

> [详见 yarn 的常用命令](https://www.cnblogs.com/lililia/p/10482169.html)

- 按照 package.json 文件的配置安装 module 到 node_modules/里面

### `-g(global)`

- 全局安装/卸载
- 注意脚手架如果是全局安装的话,卸载也要加上`-g`才能全局卸载.

---

### `-save`

- 默认直接 install 会安装进那个目录,但是不会修改 package.json 文件
- 加上-save 会修改文件,使下次 npm install 也会安装
- 写在前面和后面都可以
  - `npm install --save hexo-tag-aplayer`
  - `npm install hexo-tag-aplayer --save`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## local 全局依赖

- npm

  ```shell
  npm install -g eslint
  ```

- yarn

  ```shell
  yarn global add hexo-cli
  yarn global add vsce
  ```

---

- `全局依赖路径`: 用 Scoop 安装的,其数据挂载`摆脱了C盘!`, npm 与 yarn 管理方式并不全然一样

  - node-npm: `Scoop\persist\nodejs\bin`

  - yarn: `Scoop\persist\yarn\global`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 运行报错

```
node_modules\pascal-case\dist\index.js:21
...
```

- 有可能是依赖有故障了,其实用不着挨个排除是哪个依赖有问题

- 直接把`node_modules`整个删掉,然后`npm install`就好了.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 推荐文章

> [很多人上来就删除的 package-lock.json，还有这么多你不知道的（深度内容）](https://mp.weixin.qq.com/s?__biz=MzIyMDkwODczNw==&mid=2247496886&idx=1&sn=513b863b8468fcfaf8c8e750ce266899&chksm=97c66918a0b1e00eb920d278ae03b10ebe1d765db0e17cb8fe5bc60b737fb3c6af1d96fcf724&mpshare=1&scene=23&srcid=0327cIro7WXAp1jgObHXuKCE&sharer_sharetime=1616807246544&sharer_shareid=ff6bb8cfd138294e80df076b8b76232d#rd)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## node 多版本管理

- 主流的有 nvm / n 两种

  - n 在 mac 和 linux 上比较好装,在 win 上就别想了.

- 安装 nvm

  ```
  scoop install nvm
  ```

- 使用 nvm

  > [node 多版本管理工具——nvm](https://segmentfault.com/a/1190000021690038)

  遇到这个报错的话,是因为环境变量还没起效,重启电脑

  ```
  ERROR open \settings.txt: The system cannot find the file specified.
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 版本拟定

- 之前一直手动起草 package.json 中的 version,略显笨拙

  不知道 npm 自带 version 管理功能

- `npm version`

  > npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]

  喏,可以拟定大小版本.

  一般用这三个: major(大) -> minor(小) -> patch(补丁)

  另外需要注意,使用之前要 `git commit`,不然没法使用.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 参考

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [2222 年了，总不能还只会 npm i 吧?🔥](https://juejin.cn/post/7069701706606444551)
