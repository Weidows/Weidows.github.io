---
title: 😡一次解决CORS经验记录.
password: ""
tags:
  - JavaScript
  - CORS
  - 大前端
  - 面试
  - 爬虫
katex: false
date: 2021-07-08 17:48:32
cover: https://www.helloimg.com/images/2022/02/27/GVSiWo.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-11 19:49:07
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Web\JavaScript\CORS.md
 * @Description:
 * @!: *********************************************************************
-->

- [关联项目](#关联项目)
- [简介](#简介)
- [剖析原料](#剖析原料)
- [问题展示](#问题展示)
  - [图片显示](#图片显示)
  - [fetch 获取数据](#fetch-获取数据)
  - [Canvas 操作](#canvas-操作)
- [需求](#需求)
- [解决方案](#解决方案)
- [收尾](#收尾)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## [关联项目](https://github.com/Weidows/awesome-image-collector)

## 简介

跨域资源共享 CORS (Cross-origin resource sharing)

从一个 `协议-子域名-主域名` 访问另一个 `协议-子域名-主域名` 下的资源就是 CORS,这三项有任何一项不同就判定为跨域.

- 下面的主角是 `图片`,从三个层次剖析,逐渐变难.

  1. 图片显示
  2. fetch 获取数据
  3. canvas 操作

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 剖析原料

- 现在我这有两个网站,每个网站对应一个图片域名

  |   网站\域名    |     主站域名      |  图片域名   | 图片跨域访问 | access-control-allow-origin |
  | :------------: | :---------------: | :---------: | :----------: | :-------------------------: |
  |     SM.MS      |       sm.ms       | i.loli.net  |      ✔       |             \*              |
  | 网页版 QQ 收藏 | sharechain.qq.com | shp.qpic.cn |      ❌      |             ❌              |

---

- 如何查看图片域名是否允许跨域,以及允许跨域域名范围

  1. 在主站域名网页下打开`控制台-网页` 然后刷新网页,找到图片的请求

  2. 然后看请求的标头 -> 响应头,是否含有 `access-control-allow-origin` 这一项

  3. 没有的话就是没开启 CORS,有的话右面的参数就是允许 CORS 的域名范围.

  <img src="https://www.helloimg.com/images/2022/02/27/GVLBQT.png" alt="20210709232207" />

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 问题展示

### 图片显示

- 图片显示不受 CORS 是否开启影响,这两个图片域名在任何域名下都可以显示

  如图本地域名可以显示这两个域名下的图片 (各一张) 🥵

  <img src="https://www.helloimg.com/images/2022/02/27/GV4xFQ.png" alt="20210709222815" />

### fetch 获取数据

- `i.loli.net` 这个域名开启了 CORS

  并允许任何域名都可以跨域获取数据 (access-control-allow-origin: \*)

- 如下,在两个主站域名测试都可以得到如下结果:

  <img src="https://www.helloimg.com/images/2022/02/27/GVPMJn.png" alt="20210709221705" />

- 变个卦:

  如果服务端修改 access-control-allow-origin 为 `https://sm.ms`

  这个情况下,只能在 https://sm.ms 网页内可以 fetch 成功.

---

- 服务端没开启 CORS 的 `shp.qpic.cn`

  除了本身域名 shp.qpic.cn,任何域名都 `没有权限获取数据` (可以显示但是无法 fetch)

  ```
  Access to image at 'xxx' from origin 'xxx' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  ```

  <img src="https://www.helloimg.com/images/2022/02/27/GV4Jzu.png" alt="20210709222317" />

---

### Canvas 操作

- Canvas 操作 img 要求最严格

  1. 要求图片域名开启 CORS,并在 CORS 允许的域名下,服务端才可以响应数据

  2. img 标签设置属性 `crossorigin='anonymous'`,表示想要跨域,否则会报错 canvas 被污染

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 需求

- 现在有一个需求:

  在 `sharechain.qq.com` 下获取 `shp.qpic.cn` 的图片数据并通过 canvas 处理

  -> 跨域,而且服务端不允许 CORS

  -> 需要解决 canvas 跨域污染.

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 解决方案

- 寻找了很多资料,这里贴上优秀文章

  > [前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)

  > [将在线图片转换成 base64 踩坑记录及静态资源跨域及缓存的处理](http://t.zoukankan.com/goloving-p-12857575.html)

---

- 最终答案:

  `纯前端无法解决跨域资源获取问题`

  最快捷方案还是需要服务端开启.... (显然是不可能)

---

- `但是`,找到了捷径: 浏览器插件可以直接解决跨域问题

  > [CORS Unblock](https://microsoftedge.microsoft.com/addons/detail/cors-unblock/hkjklmhkbkdhlgnnfbbcihcajofmjgbh?hl=zh-CN)

  > [Allow CORS: Access-Control-Allow-Origin](https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag?hl=zh-CN)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 收尾

现在,可以成功 fetch 跨域图片数据了,再把 img 设置 crossorigin="anonymous"就完事了 `\>A</`
