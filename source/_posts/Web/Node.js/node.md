---
title: Node.js环境配置 && 使用
categories:
  - Web
  - Node.js
tags:
  - Node
  - npm
cover: https://i.loli.net/2020/11/30/at4cvJXTRZw9bQH.jpg
# top_img:
---

<!--
 * @Author: Weidows
 * @Date: 2020-11-24 21:59:29
 * @LastEditors: Weidows
 * @LastEditTime: 2020-11-30 21:53:25
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog\source\_posts\Web\Node.js\node.md
 * @Description:
-->

# 环境配置

## Node 本身

- Path 中+
  ```
  D:\Game\Demo\Node.js\
  D:\Game\Demo\Node.js\node_global
  ```

## 修改全局 node_modules 路径

- 执行
  ```shell
  npm config set cache "D:\Game\Demo\Node.js\node_cache"
  npm config set prefix "D:\Game\Demo\Node.js\node_global"
  ```
- 修改的环境变量在上面

# npm 包管理器换`阿里源`

- 替换源地址

```powershell
npm config set registry https://registry.npm.taobao.org
```

- 检查
  - `npm config get registry`
  - `npm info express`

# 模块升级

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

  ```
  npm cache clean --force
  ```

---

# npm install 参数

- 按照 package.json 文件的配置安装 module 到 node_modules/里面

## `-g`

- 全局安装

## `-save`

- 默认直接 install 会安装进那个目录,但是不会修改 package.json 文件
- 加上-save 会修改文件,使下次 npm install 也会安装
- 写在前面和后面都可以
  - `npm install --save hexo-tag-aplayer`
  - `npm install hexo-tag-aplayer --save`
