---
title: ▶️SM.MS-批量下载器
password: ""
tags:
  - 图床
  - 爬虫
  - SM.MS
  - JavaScript
  - HTML
date: 2021-04-18 11:54:15
cover: https://www.helloimg.com/images/2022/02/27/GVEKN9.jpg
top_img:
---

# SM.MS-批量下载器

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-04-20 23:47:17
 * @FilePath: \Blog-private\source\_posts\tools\SM-MS-downloader.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [SM.MS-批量下载器](#smms-批量下载器)
  - [使用](#使用)
  - [问题](#问题)
  - [借物表](#借物表)

{% endpullquote %}

[⏩ 文章地址](https://weidows.github.io/post/tools/SM-MS-downloader/) | [✔️ 仓库地址](https://github.com/Weidows-projects/awesome-image-collector) 欢迎提交 pr !

SM.MS 没有提供批量下载回图片的功能,于是写了个小爬虫

可以把对应页面的所有图片(一般是 30 张)获取并打包为 zip 文件下载下来

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 使用

1. 进入 SM.MS 图片管理页面: [点这里进入](https://sm.ms/home/picture?page=1)

2. 按 `F12` 进入 Console 控制台,输入下面代码: [-> 查看代码 <-](https://fastly.jsdelivr.net/gh/Weidows-projects/awesome-image-collector/implements/SM.MS-collector.js)

3. 不出意外的话,左侧边栏会出现如下两个按钮:
   <img src="https://www.helloimg.com/images/2022/02/27/GVt2do.png" alt="20210418102023" />

4. 现在可以使用了 => 下载本页面图片 => 全选 => 删除, 这样就导出了!

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 问题

- 刷新页面或者翻页时按钮没了

  > emmm,每次页面刷新/跳转都需要重新执行一次代码,在 console 中按 `↑` 然后 `Enter`

- 下载下来的压缩包是空的或者是无数据的空图片

  > 检查一下网络是否可以正常访问 `i.loli.net` 这个域名,有可能是因为网络原因导致图片未成功加载

<a>![分割线](https://fastly.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

> `JSZip`

> [ JS 如何在 onload 中 return](https://blog.csdn.net/weixin_38361925/article/details/95099838?utm_source=app&app_version=4.5.8)
