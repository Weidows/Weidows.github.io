---
title: ♻VScode插件开发流程.
date: 2021-01-03 15:18:46
categories:
  - tools
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
 * @LastEditTime: 2021-03-21 17:03:38
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\tools\vscode\extension-develop.md
 * @Description:
 * @!: *********************************************************************
-->

- [前期准备](#前期准备)
- [开发](#开发)
- [打包](#打包)
- [发布](#发布)
- [结合 GitHub](#结合-github)
- [剖析 package.json](#剖析-packagejson)

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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 剖析 package.json

- 借用`Git Graph`插件简单分析一下 package 中的配置 (因为文件过长,已删掉一部分)

  ```json
  {
    // 插件注册名
    "name": "git-graph",
    // 插件显示的名字
    "displayName": "Git Graph",
    // 版本
    "version": "1.29.0",
    // 发布者(只能一人)
    "publisher": "mhutchie",
    // 作者(多人)
    "author": {
      "name": "Michael Hutchison",
      "email": "mhutchie@16right.com"
    },
    // 插件描述
    "description": "View a Git Graph of your repository, and perform Git actions from the graph.",
    // 关键词(供搜索用)
    "keywords": ["git", "graph", "visualise", "diff", "action"],
    "categories": ["Other"],
    "homepage": "https://github.com/mhutchie/vscode-git-graph",
    "repository": {
      "type": "git",
      "url": "https://github.com/mhutchie/vscode-git-graph.git"
    },
    "bugs": {
      "url": "https://github.com/mhutchie/vscode-git-graph/issues"
    },
    // Question & answer
    "qna": "https://github.com/mhutchie/vscode-git-graph/wiki/Support-Resources",
    "license": "SEE LICENSE IN 'LICENSE'",
    // 插件图标
    "icon": "resources/icon.png",
    "engines": {
      "vscode": "^1.38.0"
    },
    "extensionKind": ["workspace"],
    "activationEvents": ["*"],
    // 入口文件
    "main": "./out/extension.js",
    // 对接vscode接口
    "contributes": {
      // 命令面板的命令
      "commands": [
        {
          "category": "Git Graph",
          "command": "git-graph.view",
          "title": "View Git Graph (git log)",
          "icon": {
            "light": "resources/cmd-icon-light.svg",
            "dark": "resources/cmd-icon-dark.svg"
          }
        },
        {
          "category": "Git Graph",
          "command": "git-graph.addGitRepository",
          "title": "Add Git Repository..."
        }
      ],
      // 插件的设置
      "configuration": {
        "type": "object",
        "title": "Git Graph",
        "properties": {
          "git-graph.commitDetailsView.autoCenter": {
            "type": "boolean",
            "default": true,
            "description": "Automatically center the Commit Details View when it is opened."
          },
          "git-graph.commitDetailsView.fileView.fileTree.compactFolders": {
            "type": "boolean",
            "default": true,
            "description": "Render the File Tree in the Commit Details View in a compacted form, such that folders with a single child folder are compressed into a single combined folder element."
          }
        }
      },
      // 插件在vscode界面的显示
      "menus": {
        "scm/title": [
          {
            "when": "scmProvider == git && config.git-graph.sourceCodeProviderIntegrationLocation == 'Inline'",
            "command": "git-graph.view",
            "group": "navigation"
          },
          {
            "when": "scmProvider == git && config.git-graph.sourceCodeProviderIntegrationLocation == 'More Actions'",
            "command": "git-graph.view",
            "group": "inline"
          }
        ]
      }
    },
    // 开发用的脚本
    "scripts": {
      "test": "jest --verbose",
      "test-and-report-coverage": "jest --verbose --coverage"
    },
    // 运行依赖
    "dependencies": {
      "iconv-lite": "0.5.0"
    },
    // 开发依赖
    "devDependencies": {
      "typescript": "4.0.2",
      "uglify-js": "3.10.0"
    },
    "__metadata": {
      "id": "438221f8-1107-4ccd-a6fe-f3b7fe0856b7",
      "publisherId": "996496dc-099f-469d-b89c-0d7713179365",
      "publisherDisplayName": "mhutchie"
    }
  }
  ```
