---
title: ⬆ Node.js环境配置 && 使用
date: 2020-11-24 21:59:29
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
 * @LastEditTime: 2021-02-14 16:49:34
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\Node.js\node.md
 * @Description:
-->

- [环境配置](#环境配置)
- [安装 yarn](#安装-yarn)
- [换阿里源](#换阿里源)
- [依赖升级](#依赖升级)
- [参数及常用命令](#参数及常用命令)
  - [`-g(global)`](#-gglobal)
  - [`-save`](#-save)
- [local 全局依赖](#local-全局依赖)
- [运行报错](#运行报错)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 环境配置

- 之前一直在乐此不疲的修改 npm 和 yarn 的 global 路径,因为每次 Node.js 更新会导致目录索引失效...

- 后来发现,Scoop 完美解决了这个问题!

- 它使用`Scoop/persist`这个文件夹来挂载数据,不影响程序本身,即使更新也不会影响.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 安装 yarn

- Node.js 是 JavaScript 运行环境,某个项目运行起来可能会需要一些依赖
- npm 和 yarn 就是管理这些依赖的
- 安装 node.js 后自带 npm,并不会带 yarn(但是建议使用 yarn)
- 虽然 npm 与 yarn 是同一类东西,但是可以用 npm 安装 yarn(神不神奇,因为 npm 和 yarn 本身就是依赖)
- 用 Scoop 安装(`零配置`)

  ```shell
  scoop install yarn
  ```

  - (也可以去官网下载安装,不过那样更复杂麻烦)

  - 或者用 npm 安装(这样的话需要进行一些目录配置)

    ```shell
    npm install -g  yarn
    ```

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

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

- 也可以直接定位 npm 和 yarn 的配置文件 -> `C:\Users\用户名`

  - 这个目录下的`.npmrc和.yarnrc`

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 依赖升级

- package path 简介

  - Node.Js 的包管理器有`npm,cnpm,yarn`等,通过上面操作后咱就用`npm`
    - (因为 cnpm 会可能会出现包中包现象,导致很多模块冲突报错)
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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 参数及常用命令

> [详见 yarn 的常用命令](https://www.cnblogs.com/lililia/p/10482169.html)

- 按照 package.json 文件的配置安装 module 到 node_modules/里面

## `-g(global)`

- 全局安装/卸载
- 注意脚手架如果是全局安装的话,卸载也要加上`-g`才能全局卸载.

---

## `-save`

- 默认直接 install 会安装进那个目录,但是不会修改 package.json 文件
- 加上-save 会修改文件,使下次 npm install 也会安装
- 写在前面和后面都可以
  - `npm install --save hexo-tag-aplayer`
  - `npm install hexo-tag-aplayer --save`

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# local 全局依赖

- npm

```shell
npm install -g eslint
```

---

- yarn

```shell
yarn global add hexo-cli
yarn global add vsce
```

---

- 路径

  - 用 Scoop 安装的,其数据挂载`摆脱了C盘!`

  - npm 与 yarn 管理方式并不全然一样

  - npm: `Scoop\persist\nodejs\bin`

  - yarn: `D:\Game\Scoop\persist\yarn\global`

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 运行报错

- 有可能是依赖有故障了,其实用不着挨个排除是哪个依赖有问题

- 直接把`node_modules`整个删掉,然后`npm install`就好了.
