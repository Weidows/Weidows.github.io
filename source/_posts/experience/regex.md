---
title: 🙉修为突破灵药-正则表达式
password: ""
tags:
  - Regex
katex: false
comments: true
aside: true
date: 2022-02-23 01:34:56
cover: https://api.onedrive.com/v1.0/shares/s!AlhRaqfosSZYi24stxXSuRIGKiQJ/root/content
top_img:
---

# 修为突破灵药-正则表达式

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-23 14:04:16
 * @FilePath: \Blog-private\source\_posts\experience\regex.md
 * @Description:
 * @!: *********************************************************************
-->

```pullquote mindmap mindmap-md
- [修为突破灵药-正则表达式](#修为突破灵药-正则表达式)
  - [fix-记录](#fix-记录)
  - [参照](#参照)
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

  `` (\s*)(`{3,}|~{3,}) ``
  \``` 或者 ~~~

  ` *(.*)`
  至少 1 个空格+至少 1 个任意字符

  ` *\n?`
  至少 1 个空格+可有可无换行; 错误原因就是此,我习惯 trim,所以无法正常匹配

## 参照

暂无.
