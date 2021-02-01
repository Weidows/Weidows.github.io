---
title: VScode用户代码片段设置 && 使用
categories:
  - vscode
tags:
  - snippet
  - VScode
cover: https://i.loli.net/2020/11/30/SuYiVEyqvkWDAB6.jpg
---

<!--
 * @Author: Weidows
 * @Date: 2020-08-25 19:14:35
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-31 22:27:56
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\vscode\snippet.md
-->

- [开启 snippet](#开启-snippet)
- [增添代码片段](#增添代码片段)
- [我的模板](#我的模板)

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 开启 snippet

- 首先需要打开 markdown 文件的 `quickSuggestions`,因为其默认是未开启状态

  <img src="https://i.loli.net/2021/01/31/til5Vdxys4ocjkC.png" alt="20210131221250" />

- 在设置文件里加上以下设置

  ```
  "[markdown]": {
    "editor.quickSuggestions": true
  }
  ```

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 增添代码片段

<img src="https://i.loli.net/2021/01/31/r19TEcwA3GxNpVk.png" alt="20210131221522" />

- 点小齿轮找到用户代码片段设置,进入设置文件,在大括号里添加自定义的代码片段,比如下面我的:

  ```json
    "hexo模板": {
      "scope": "markdown",
      "prefix": "title",
      "body": [
        "---",
        "title: ",
        "categories:",
        "  - ",
        "tags:",
        "  - ",
        "cover: ",
        "# top_img: ",
        "---",
        "",
        ""
      ]
    },

  ```

- 这个片段就可以在 markdown 文件内输入`title`快速生成上面的模板,省去复制的麻烦了.

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 我的模板

> [源码 Github 链接](https://gist.github.com/Weidows/a9d0949b9a8e2c75e5177789a9eb71e8#file-snippets-mine-json-code-snippets)
