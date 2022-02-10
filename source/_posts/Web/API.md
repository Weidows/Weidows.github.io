---
title: 自用 && 收藏的一些API
date: 2020-11-30 19:28:08
tags:
  - 备忘录
  - API
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/U2VkeYvoMaXIsEp.jpg
top_img:
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:38:41
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\API.md
-->

- [My URL 前缀: Gitee && GitHub (旁人没啥用...)](#my-url-前缀-gitee--github-旁人没啥用)
  - [Gitee](#gitee)
  - [JsDelivr](#jsdelivr)
  - [GitHub](#github)
- [横屏 API](#横屏-api)
  - [必应壁纸](#必应壁纸)
  - [风景图](#风景图)
  - [二次元 coser](#二次元-coser)
  - [小心身体-推女郎](#小心身体-推女郎)
- [竖屏](#竖屏)
  - [二刺螈涩图](#二刺螈涩图)
- [未知图](#未知图)
- [在线生成二维码](#在线生成二维码)
  - [百度网盘(可使用 https)](#百度网盘可使用-https)
  - [iClick 接口 (无 https)](#iclick-接口-无-https)
  - [JiaThis 接口(无 https)](#jiathis-接口无-https)
  - [联图网(无 https)](#联图网无-https)
  - [K780 数据网(支持 https 和 http)](#k780-数据网支持-https-和-http)
  - [QR Code Generator(https 接口)](#qr-code-generatorhttps-接口)
- [鼠标点击/跟随特效 js](#鼠标点击跟随特效-js)
  - [小心心特效](#小心心特效)
  - [社会主义核心价值观](#社会主义核心价值观)
  - [花花特效](#花花特效)
  - [跟随特效](#跟随特效)
- [获取网页截图](#获取网页截图)
- [获取区域时间](#获取区域时间)

## My URL 前缀: Gitee && GitHub (旁人没啥用...)

### Gitee

- 图/文件: `https://gitee.com/Weidows/Weidows/raw/master/Website/public`
- 链接: `https://gitee.com/Weidows/Weidows/blob/master`
- 博客: `https://weidows.gitee.io`

### JsDelivr

- GitHub 图床 CDN: `https://cdn.jsdelivr.net/gh/Weidows/Images/`

### GitHub

- 链接: `https://github.com/Weidows/Weidows/tree/master`
- 图片: `https://raw.githubusercontent.com/Weidows/Weidows.github.io/master/`
- GitHub Chart API: `http://ghchart.rshah.org/409ba5/Weidows`
  - 其中`/409ba5/`是颜色的十六进制表示,#409ba5(使格子颜色变为蓝色)如下图
    ![GitHub Chart](http://ghchart.rshah.org/409ba5/Weidows)

---

## 横屏 API

### 必应壁纸

- 一位大佬写的接口,必应返回图片需要用户数据授权,URL 不固定,所以这个大佬当中介做了个 PHP 接口.
  `http://fly.atlinker.cn/api/bing/1920.php`
  ![](http://fly.atlinker.cn/api/bing/1920.php)

---

- 必应官方 API

```
https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN
```

- 返回数据参下,需要浏览器处理才可呈现图像.

```
{
  "images": [
    {
      "startdate": "20201201",
      "fullstartdate": "202012011600",
      "enddate": "20201202",
      "url": "/th?id=OHR.PorcupineBay_ZH-CN2252758146_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "urlbase": "/th?id=OHR.PorcupineBay_ZH-CN2252758146",
      "copyright": "基奈峡湾国家公园的尖顶湾，阿拉斯加 (© Sekar B/Shutterstock)",
      "copyrightlink": "https://www.bing.com/search?q=%E5%9F%BA%E5%A5%88%E5%B3%A1%E6%B9%BE%E5%9B%BD%E5%AE%B6%E5%85%AC%E5%9B%AD&form=hpcapt&mkt=zh-cn",
      "title": "",
      "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20201201_PorcupineBay%22&FORM=HPQUIZ",
      "wp": true,
      "hsh": "4b729291a1259dbc3355d68efe6de423",
      "drk": 1,
      "top": 1,
      "bot": 1,
      "hs": []
    }
  ],
  "tooltips": {
    "loading": "正在加载...",
    "previous": "上一个图像",
    "next": "下一个图像",
    "walle": "此图片不能下载用作壁纸。",
    "walls": "下载今日美图。仅限用作桌面壁纸。"
  }
}
```

![](https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN)

---

### 风景图

```
api.ixiaowai.cn/gqapi/gqapi.php
```

### 二次元 coser

```
https://uploadbeta.com/api/pictures/random/?key=二次元
https://uploadbeta.com/api/pictures/random/?key=动漫
```

### 小心身体-推女郎

```
https://uploadbeta.com/api/pictures/random/?key=推女郎
```

---

## 竖屏

### 二刺螈涩图

```
http://setu.awsl.ee/setu
```

---

<!-- TODO -->

## 未知图

```
风景随机图：http://pic.tsmp4.net/api/fengjing/img.php
女神随机图：http://pic.tsmp4.net/api/nvsheng/img.php
影视随机图：http://pic.tsmp4.net/api/yingshi/img.php
二次元随机图：http://pic.tsmp4.net/api/erciyuan/img.php
二次元随机图:http://www.dmoe.cc/random.php
```

---

## 在线生成二维码

### 百度网盘(可使用 https)

```
http://pan.baidu.com/share/qrcode?w=150&h=150&url=
```

### iClick 接口 (无 https)

```
http://bshare.optimix.asia/barCode?site=weixin&url=
```

### JiaThis 接口(无 https)

```
http://s.jiathis.com/qrcode.php?url=
```

### 联图网(无 https)

```
http://qr.liantu.com/api.php?text=
```

### K780 数据网(支持 https 和 http)

```
http://api.k780.com:88/?app=qr.get&data=
```

### QR Code Generator(https 接口)

```
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
```

---

## 鼠标点击/跟随特效 js

### 小心心特效

```
https://cdn.jsdelivr.net/gh/Sanarous/files@1.151/js/clicklove.js
```

### 社会主义核心价值观

```
https://cdn.jsdelivr.net/gh/Sanarous/files@1.151/js/clicksocialvalue.js
```

### 花花特效

```
https://cdn.jsdelivr.net/gh/Sanarous/files@1.151/js/click.min.js
```

### 跟随特效

```
https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/Hexo/js/mouse_snow.min.js
```

---

## 获取网页截图

- 链接
  ```
  https://image.thum.io/get/width/1024/crop/768/https://github.com/Weidows
  ```
- 展示
  ![](https://image.thum.io/get/width/1024/crop/768/https://github.com/Weidows)

---

## 获取区域时间

- time.js
  ```
  https://time.is
  ```
