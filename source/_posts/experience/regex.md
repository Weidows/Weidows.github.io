---
title: 🙉修为突破灵药-正则表达式
password: ""
tags:
  - Regex
katex: false
comments: true
aside: true
date: 2022-02-23 01:34:56
cover: https://www.helloimg.com/images/2022/02/26/GVRHqY.png
top_img:
---

# 修为突破灵药-正则表达式

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-03-16 23:47:11
 * @FilePath: \Blog-private\source\_posts\experience\regex.md
 * @Description:
 * @!: *********************************************************************
-->

```pullquote mindmap mindmap-md
- [修为突破灵药-正则表达式](#修为突破灵药-正则表达式)
  - [fix-记录](#fix-记录)
  - [regex-多对多替换](#regex-多对多替换)
  - [vscode-批量替换](#vscode-批量替换)
  - [sed-替换反斜杠](#sed-替换反斜杠)
  - [借物表](#借物表)
```

> Regular Expressions，缩写为 Regex 或 Regexp

- 推荐两个学习网址:

  [手握手教你学会正则表达式](https://zhuanlan.zhihu.com/p/74136752)

  https://regexlearn.com/zh-cn

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## fix-记录

- https://github.com/bubkoo/hexo-filter-fenced-code/issues/3

  ```js
  var rFenceCode = /(\s*)(`{3,}|~{3,}) *(.*) *\n?([\s\S]+?)\s*(\2)(\n+|$)/g;
  ```

  |            regex            |                                          解释                                          |
  | :-------------------------: | :------------------------------------------------------------------------------------: |
  | `` (\s*)(`{3,} \| ~{3,}) `` |                                     \``` 或者 ~~~                                      |
  |          ` *(.*)`           |                            至少 1 个空格+至少 1 个任意字符                             |
  |           ` *\n?`           | 至少 1 个空格+可有可无换行 <br> 错误原因就是此,我习惯 trim 行尾的空格,所以无法正常匹配 |

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## regex-多对多替换

- 我在切换图床时想实现如下 `多对多替换` 的需求

  ```
  https://cdn.jsdelivr.net/gh/Weidows/Images/post/1d9Xs6ADR3MaNCy.png
  --> https://www.helloimg.com/images/2022/02/27/GVFbWK.jpg

  https://cdn.jsdelivr.net/gh/Weidows/Images/post/2C7cgeEIQNr3qLu.png
  --> https://www.helloimg.com/images/2022/02/27/GVFlgb.jpg

  https://cdn.jsdelivr.net/gh/Weidows/Images/post/2GXOS5mW8EzIT7Y.png
  --> https://www.helloimg.com/images/2022/02/27/GVFWDS.jpg

  https://cdn.jsdelivr.net/gh/Weidows/Images/post/2POdUowc3qW8DRy.png
  --> https://www.helloimg.com/images/2022/02/27/GVFTHD.jpg

  https://cdn.jsdelivr.net/gh/Weidows/Images/post/2ThkbFZmCU3QvEN.png
  --> https://www.helloimg.com/images/2022/02/27/GVF2ao.jpg

  https://cdn.jsdelivr.net/gh/Weidows/Images/post/2ThYuqlEtFfdJeK.png
  --> https://www.helloimg.com/images/2022/02/27/GVFOGC.jpg
  ```

- shell 脚本实现:

  支持同一链接在多个文件/多次出现出现的情况

  ```shell
  ###
  # @?: *********************************************************************
  # @Author: Weidows
  # @Date: 2022-02-27 01:34:37
  # @LastEditors: Weidows
  # @LastEditTime: 2022-02-27 18:29:00
  # @FilePath: \Blog-private\test.sh
  # @Description:
  # @!: *********************************************************************
  ###

  # fileArray=(
  #   1d9Xs6ADR3MaNCy
  #   2C7cgeEIQNr3qLu
  #   2GXOS5mW8EzIT7Y
  #   2POdUowc3qW8DRy
  #   2ThkbFZmCU3QvEN
  # )
  fileArray=(

  )

  # urlArray=(
  #   2022/02/27/GVFbWK.jpg
  #   2022/02/27/GVFlgb.jpg
  #   2022/02/27/GVFWDS.jpg
  #   2022/02/27/GVFTHD.jpg
  #   2022/02/27/GVF2ao.jpg
  # )
  urlArray=(

  )

  for i in "${!fileArray[@]}"; do
    # 查找
    path=`grep -rl ${fileArray[$i]} ./source`

    # 替换
    sed -i "s#cdn.jsdelivr.net/gh/Weidows/Images/post/${fileArray[$i]}\.\w\w\w#www.helloimg.com/images/${urlArray[$i]}#g" $path
  done
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## vscode-批量替换

Screenshot_20210313_171408_tv.danmaku.bili

-> Screenshot20210313171408

`Screenshot_\d+_\d+_tv.danmaku.bili`

-> Screenshot\d+\d+

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## sed-替换反斜杠

- 数据中的斜杠是脚本天敌,需要做预处理转义
  <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>

  ```
  2022/02/27/GVJOM6.jpg
  -> 2022\/02\/27\/GVJOM6.jpg
  ```

  `sed -i "s#/#\\/#g" result.txt`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [Sed 替换 内容带反斜杠（/）](https://blog.csdn.net/weixin_39031707/article/details/104065184)
