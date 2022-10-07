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
 * @LastEditTime: 2022-10-03 20:28:43
 * @FilePath: \Blog-private\source\_posts\experience\regex.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [修为突破灵药-正则表达式](#修为突破灵药-正则表达式)
  - [fix-记录](#fix-记录)
  - [regex-多对多替换](#regex-多对多替换)
  - [vscode-批量替换](#vscode-批量替换)
    - [一](#一)
    - [二](#二)
  - [sed-替换反斜杠](#sed-替换反斜杠)
  - [删除匹配多行区域](#删除匹配多行区域)
    - [多行匹配-替换模式](#多行匹配-替换模式)
    - [字符匹配-行删除模式](#字符匹配-行删除模式)
  - [报错](#报错)
    - [Invalid-cross-device-link](#invalid-cross-device-link)
  - [借物表](#借物表)

{% endpullquote %}

> Regular Expressions，缩写为 Regex 或 Regexp

- 推荐两个学习网址:

  [手握手教你学会正则表达式](https://zhuanlan.zhihu.com/p/74136752)

  https://regexlearn.com/zh-cn

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

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

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## vscode-批量替换

### 一

```
Screenshot_20210313_171408_tv.danmaku.bili
-> Screenshot20210313171408

Screenshot_\d+_\d+_tv.danmaku.bili`
-> Screenshot\d+\d+
```

### 二

- 匹配下面内容

  ```
  categories:
    - experience
    - shell
  tags:
    - experience
    - shell
  ```

1. categories:\*tags:

   行不通, 其中间含有 \n

2. categories:\n((.)+-(.)+\n)+tags:\n((.)+-(.)+\n)+

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## sed-替换反斜杠

- 数据中的斜杠是脚本天敌,需要做预处理转义
  <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>

  ```
  2022/02/27/GVJOM6.jpg
  -> 2022\/02\/27\/GVJOM6.jpg
  ```

  `sed -i "s#/#\\/#g" result.txt`

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 删除匹配多行区域

起因是写的 host 更新脚本有时会因为网络原因出错, 我想删除`<html></html>` 这部分

```
# pollen
127.0.0.1 pollen-svc

# simswap.service
127.0.0.1 simswap-service-svc

<html>
<head><title>502 Bad Gateway</title></head>
<body bgcolor="white">
<center><h1>502 Bad Gateway</h1></center>
<hr><center>nginx/1.14.0 (Ubuntu)</center>
</body>
</html>
<html>
<head><title>502 Bad Gateway</title></head>
<body bgcolor="white">
<center><h1>502 Bad Gateway</h1></center>
<hr><center>nginx/1.14.0 (Ubuntu)</center>
</body>
</html>
<html>
<head><title>502 Bad Gateway</title></head>
<body bgcolor="white">
<center><h1>502 Bad Gateway</h1></center>
<hr><center>nginx/1.14.0 (Ubuntu)</center>
</body>
</html>
# GitHub520 Host Start
140.82.113.3                  alive.github.com
140.82.113.3                  live.github.com
35.91.180.210                 github.githubassets.com
140.82.113.3                  central.github.com
35.160.167.22                 desktop.githubusercontent.com
140.82.113.3                  assets-cdn.github.com
54.218.63.240                 camo
```

### 多行匹配-替换模式

不知道为啥, 按道理 regex 没问题, 但是不起效..

```
sed -i "s/<[\w\W]*>/ /g" 1.txt
```

### 字符匹配-行删除模式

```
sed -i "/</d" 1.txt
```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 报错

### Invalid-cross-device-link

```
/d/Scoop/apps/git-all/current/usr/bin/sed: cannot rename ./sedLO8z5J: Invalid cross-device link
```

跨盘操作不允许替换文件 <sup id='cite_ref-4'>[\[4\]](#cite_note-4)</sup>

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [Sed 替换 内容带反斜杠（/）](https://blog.csdn.net/weixin_39031707/article/details/104065184)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [正则表达式如何匹配多行的所有任意字符
](https://www.jianshu.com/p/ff05d467e145)

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [sed 删除文件中含有特定字符（串）的行\_51CTO 博客\_sed 删除指定行](https://blog.51cto.com/u_15278282/4895336)

<a name='cite_note-4' href='#cite_ref-4'>[4]</a>: [sed 修改文件不成功](https://ceshiren.com/t/topic/3300)
