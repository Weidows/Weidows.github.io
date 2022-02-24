---
title: 🌏媒体资源加密-and-解密获取
password: ""
tags:
  - 推荐
  - 浏览器
  - 扩展
  - FFmpeg
  - 算法
katex: false
comments: true
aside: true
date: 2022-02-22 19:49:20
cover: https://api.onedrive.com/v1.0/shares/s!AlhRaqfosSZYi3C6Jb8KS5azUplh/root/content
top_img:
---

# 媒体资源加密-and-解密获取

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-24 13:26:35
 * @FilePath: \Blog-private\source\_posts\Web\get-resources.md
 * @Description:
 * @!: *********************************************************************
-->

```pullquote mindmap mindmap-md
- [媒体资源加密-and-解密获取](#媒体资源加密-and-解密获取)
  - [FFmpeg-HLS-AES_128](#ffmpeg-hls-aes_128)
    - [切片](#切片)
    - [加密](#加密)
  - [获取](#获取)
    - [视频](#视频)
    - [图片](#图片)
    - [打包带走](#打包带走)
      - [梦想资源下载器](#梦想资源下载器)
      - [网页右键](#网页右键)
  - [参照](#参照)
```

- 各类平台网页中的视频通常会被 `加密处理` 以防止别人拿走; 防盗技术还是有很多种的:<sup id='cite_ref-3'>[\[3\]](#cite_note-3)</sup>

  1. FFmpeg-HLS-AES_128 加密
  2. 验证用户身份再给链接(session,cookie)
  3. 视频加水印
  4. 限制跨域访问
  5. ...etc

下面只摸一下技术层面的 `1.`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## FFmpeg-HLS-AES_128

浅入深出,别急慢慢吃.. 推荐看一下这个库<sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

### 切片

- 切片的方式比较简单,这里我们准备好一个 `demo.mp4`, 丢给 FFmpeg 下面的命令

  ```shell
  ffmpeg -i demo.mp4 -codec copy -f segment -segment_list index.m3u8 -segment_time 30 切片_%d.ts
  ```

  执行完会出来下面这些东西 (绿色名字标记的)

  ![](https://api.onedrive.com/v1.0/shares/s!AlhRaqfosSZYi3FMEMHIj6E24jGg/root/content)

  ***

- 上面命令中 `index.m3u8` 这个文件是切片的索引文件, 指明了 ts 文件的先后顺序,时长,版本和加密等信息

  > - TS: MPEG2-Transport Stream,高清相机拍摄视频的封装格式;特点就是要求从视频流的任一片段开始都是可以独立解码的
  > - m3u8: HTTP Live Streaming（HLS） 协议格式的基础,Unicode 版本的 M3U，此文件用 UTF-8 编码<sup id='cite_ref-01'>[\[1\]](#cite_note-01)</sup>

  ```m3u8
  #EXTM3U
  #EXT-X-VERSION:3
  #EXT-X-MEDIA-SEQUENCE:0
  #EXT-X-ALLOW-CACHE:YES
  #EXT-X-TARGETDURATION:32
  #EXTINF:30.720000,
  切片_0.ts
  #EXTINF:29.280000,
  切片_1.ts
  #EXTINF:31.880000,
  切片_2.ts
  #EXTINF:29.040000,
  切片_3.ts
  #EXTINF:29.320000,
  切片_4.ts
  #EXTINF:6.280000,
  切片_5.ts
  #EXT-X-ENDLIST
  ```

- 切片可以让用户无法`直接通过链接`在浏览器获取完整的 mp4 视频

  随后插件市场出现了一些插件,可以通过 .m3u8 获取并合并.ts 间接获取 .MP4

  于是为了反破解出现了 `某些花活` 和 `视频加密`

  ***

- 花活:

  1. 把 .m3u8 文件伪装成 .mp4, 可以让大部分没有伪装识别能力的爬虫找不着北

  ![](https://api.onedrive.com/v1.0/shares/s!AlhRaqfosSZYi3I0hRWBARzrYioc/root/content)
  比如 CoCocut
  ![](https://api.onedrive.com/v1.0/shares/s!AlhRaqfosSZYi3Uo0eTjPcPV0l6L/root/content)

  2. m3u8 中嵌套另一个 m3u8 (套娃)
  3. ...etc

---

### 加密

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 获取

### 视频

> CoCocut

> QQ 浏览器手机版 -> 视频解析

### 图片

awesome..
方向转变: 有的网页中的原图并没有展示,只是给出了链接

所以通过插件/保存网页的方式没办法爬下来

---

### 打包带走

#### 梦想资源下载器

#### 网页右键

![](https://api.onedrive.com/v1.0/shares/s!AlhRaqfosSZYi2040yjiZvLETkkO/root/content)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 参照

<a name='cite_note-01' href='#cite_ref-01'>[1]</a>: [使用 openssl m3u8 解密 EXT-X-KEY:METHOD=AES-128,URI=xxx](https://blog.csdn.net/beyond706/article/details/111772810)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: https://github.com/fftt2017/hls-m3u8-sample

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [在线教育类网站视频加密视频安全的一些方法](https://zhuanlan.zhihu.com/p/32014463)
