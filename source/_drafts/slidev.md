---
title: 🦭slidev
password: ""
tags:
  - markdown
  - slidev
katex: false
comments: true
aside: true
date: 2022-06-29 17:31:36
cover:
top_img:
---

# slidev

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-06-30 00:57:11
 * @FilePath: \Blog-private\source\_drafts\slidev.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [slidev](#slidev)
  - [安装-使用](#安装-使用)
  - [报错](#报错)
    - [初始化](#初始化)
    - [依赖问题](#依赖问题)
  - [借物表](#借物表)

{% endpullquote %}

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 安装-使用

```shell
npm install --save @slidev/cli

# 这里个人不建议全局安装, 有时会遇到依赖问题
# npm install -g @slidev/cli
```

可以用 scripts 来运行, 比较便捷 (没全局安装@slidev/cli 的话, slidev 无法在终端调用)

```json
  "scripts": {
    "slides": "slidev slides.md --remote --open",
  },
```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 报错

### 初始化

```console
D:\Scoop\persist\nvm\nodejs\v18.4.0\node_modules\@slidev\cli\dist\chunk-IP7ZGKHI.js:121
    throw new Error(`Failed to resolve package "${importName}"`);
          ^

Error: Failed to resolve package "D:\Repos\Weidows\Blog-private\scaffolds\slidev/package.json"
    at resolveImportPath (D:\Scoop\persist\nvm\nodejs\v18.4.0\node_modules\@slidev\cli\dist\chunk-IP7ZGKHI.js:121:11)
    at getPackageJson (D:\Scoop\persist\nvm\nodejs\v18.4.0\node_modules\@slidev\cli\dist\chunk-LIMOCTLS.js:9516:51)
    at getAddons (D:\Scoop\persist\nvm\nodejs\v18.4.0\node_modules\@slidev\cli\dist\chunk-LIMOCTLS.js:9522:33)
    at resolveOptions (D:\Scoop\persist\nvm\nodejs\v18.4.0\node_modules\@slidev\cli\dist\chunk-LIMOCTLS.js:9604:24)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async initServer (D:\Scoop\persist\nvm\nodejs\v18.4.0\node_modules\@slidev\cli\dist\cli.js:82:21)

Node.js v18.4.0
```

文档并没说, slidev 需要在目录内有个 `package.json`, 也就是需要 `npm init`

---

### 依赖问题

> Error: Cannot find module 'windicss/colors'

这种是依赖问题, 即使安装时 success 了; 需要清缓存重装依赖

```
npm cache clean --force
npm install
```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: https://cn.sli.dev/
