---
title: ♻VScode插件开发流程.
date: 2021-01-03 15:18:46
tags:
  - VScode
  - 插件
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/mjSy1DuPknbalrv.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-03 15:18:46
 * @LastEditors: Weidows
 * @LastEditTime: 2021-06-26 02:06:38
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\tools\vscode\extension-develop.md
 * @Description:
 * @!: *********************************************************************
-->

- [前期准备](#前期准备)
- [开发](#开发)
- [打包](#打包)
- [发布](#发布)
  - [网页发布](#网页发布)
  - [命令行发布](#命令行发布)
- [结合 GitHub](#结合-github)
- [剖析 package.json](#剖析-packagejson)
- [文章推荐](#文章推荐)

## 前期准备

> 首先准备好点子(扩展,主题啥的)具体是想要做啥.

> 推荐借鉴一下的简单项目: https://github.com/Weidows-projects/vscode-weidows-theme

---

## 开发

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

## 打包

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

## 发布

### 网页发布

- 进入[https://marketplace.visualstudio.com/VSCode](https://marketplace.visualstudio.com/VSCode)

- 右上角有个`publish extension`,注册登录账号

  - 之后你的账号应该有一个组织,在组织下新建一个`publisher`

  - 然后摸索摸索,把`*.vsix`这个文件传上去就 OK 了.

> 也可以看一下[这个地方](https://github.com/marketplace/actions/vscode-plugin-release-action),介绍了怎么注册账号和 获取 PAT(Personal Access Token)

---

### 命令行发布

- 这种发布方法比较适合结合 GitHub 使用,自动化流程.

  > 访问: https://aka.ms/SignupAzureDevOps

- 按着图操作

  <img src="https://i.loli.net/2021/05/14/9JCgBdrQXALfYxu.png" alt="20210514153423" />

  <img src="https://i.loli.net/2021/05/14/bwFfqWRchLsSKmx.png" alt="20210514153615" />

- 然后复制获得的 token,下面就可以发布了

  ```
  vsce publish -p 这里写复制的token
  ```

  发布失败的话检查一下 token 是否有效.

- 这个可以结合 GitHub Action,实现自动发布.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 结合 GitHub

- 发现 package.json 中必须用 https 协议传输数据,于是 local 的 images`无法显示`

  - 意思就是`./xxx.jpg`根本显示不出来.
  - 必须使用`https://xxx.jpg`才行.

- 这导致一些图片并不需要打包在插件里(因为是引用的 URL)

  - 而且这些图片要是想显示,必须有个图床.

  ***

- 那还想啥? 肯定是 GitHub 啊!

  - 我的方案是本地 Git 开发 -> GitHub

  - 把项目中引用的图片放在 GitHub 上,通过 `.vscodeignore` 文件排除插件需要打包的内容(图片)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 剖析 package.json

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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 文章推荐

> [VS Code 插件开发入门教程](https://mp.weixin.qq.com/s?__biz=MzI0MzIyMDM5Ng==&mid=2649833093&idx=1&sn=27bc83c81db8490d52b169ab3ef3fa67&chksm=f175f446c6027d509e9ecdba48271efd51c3c057fd04d90fe8cee0720f01cf3e275d7b25df6c&mpshare=1&scene=23&srcid=0312NhWlH2sedoutfqkNpB7j&sharer_sharetime=1615557271958&sharer_shareid=ff6bb8cfd138294e80df076b8b76232d#rd)

> [sxei/vscode-plugin-demo](https://github.com/sxei/vscode-plugin-demo)
