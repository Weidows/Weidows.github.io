---
title: 👌Hexo-SEO 搜索引擎优化
date: 2020-12-18 16:39:24
tags:
  - Hexo
  - Website
  - SEO
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/vfMgXj4aswWDh2Z.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2020-12-18 16:39:24
 * @LastEditors: Weidows
 * @LastEditTime: 2021-09-10 15:04:46
 * @FilePath: \Blog-private\source\_posts\Web\Node\Hexo\Hexo-SEO.md
 * @Description:
 * @!: *********************************************************************
-->

- [安装插件](#安装插件)
- [配置文件](#配置文件)
- [站长添加网站](#站长添加网站)
  - [注意](#注意)
  - [Hexo 标签验证网站](#hexo-标签验证网站)
- [添加站点地图](#添加站点地图)
- [注意点](#注意点)

## 安装插件

- 分别是生成百度和谷歌站点地图的插件.

  ```shell
  npm install hexo-generator-baidu-sitemap --save
  npm install hexo-generator-sitemap --save
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 配置文件

- 根目录的`_config.yml`中添加以下:

  ```yml
  sitemap:
    path: sitemap.xml
  baidusitemap:
    path: baidusitemap.xml
  ```

- xml 文件存放路径看着来,一般放在网站根目录.
- 现在`hexo generate`就会出现`public/sitemap.xml 和 baidusitemap.xml`

  - sitemap.xml 样式如下:

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
      <loc>https://weidows.github.io/post/Hexo/butterfly_modify/</loc>

      <lastmod>2020-12-18</lastmod>

    </url>

    <url>
      <loc>https://weidows.github.io/post/experience/markdown/</loc>

      <lastmod>2020-12-14</lastmod>

    </url>

    <url>
      <loc>https://weidows.github.io/post/backup/%E5%BF%AB%E6%8D%B7%E9%94%AE/</loc>

      <lastmod>2020-12-12</lastmod>

    </url>
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 站长添加网站

### 注意

- 因为 `Hexo` 会对 HTML 文件进行修改,所以`无法通过文件验证添加网站`
  - 可以通过 HTML 标签方式,比较方便.

### Hexo 标签验证网站

- 我使用的是 Butterfly 主题,主体间会有所不同,定位如下文件:
  - themes/butterfly/layout/includes/layout.pug
- 在`body`行上方添加验证标签(注意需要转换成 pug 格式)
  - [HTML=>pug 格式转换](https://html2pug.com/)
- 添加之后如下:

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/eFC3Lqbpi9xQ4Mg.png" alt="20201218170353" />

- 最后
  - hexo generate
  - hexo deploy
  - page 部署才能验证

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 添加站点地图

- 百度

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/KOl5p4gtIsBwrhE.png" alt="20201218173033" />

- 谷歌简单,略.
- 另外
  - 百度添加 sitemap 后一直处于等待状态是正常的,别在意...
  - 谷歌添加 sitemap 一般第一次会失败,删掉重新添加就好了(立即生效)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 注意点

- 不推荐文章目录使用: `<h1>` 标签也就是 `#`

  - 多个一级标题对 SEO 不友好

  - 建议使用 `<h1>` 也就是 `##`
