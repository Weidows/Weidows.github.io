---
title: 😵青年大学习跳过学习视频
date: 2020-11-30 17:50:20
password: ""
tags:
  - JavaScript
  - 推荐
cover: https://www.helloimg.com/images/2022/02/27/GVabFo.png
top_img:
---

# 青年大学习跳过学习视频

<!--
 * @Author: Weidows
 * @Date: 2020-11-30 17:50:20
 * @LastEditors: Weidows
 * @LastEditTime: 2022-03-09 13:09:35
 * @FilePath: \Blog-private\source\_posts\others\TeenagersLearning.md
 * @Description:青年大学习
-->

```pullquote mindmap mindmap-md
- [青年大学习跳过学习视频](#青年大学习跳过学习视频)
  - [前言](#前言)
  - [浏览器大法](#浏览器大法)
  - [debugx5-法](#debugx5-法)
    - [安装核心](#安装核心)
    - [进入视频](#进入视频)
  - [参考](#参考)
```

## 前言

- 只是可以跳过视频播放,题还是需要自己做

  (瞎点就行反正就只要个截图,不计成绩)

- 复制保存好下面的代码段,或者收藏网址,免得丢失下次不知道怎么做

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 浏览器大法

{% mmedia "bilibili" "bvid:BV1Ba411h7HJ" %}

新版本微信可用,需要有一个可以拖动进度条的浏览器 (比如 QQ 浏览器, Edge 浏览器不行)

浏览器拖动看完后能计入学习记录

1. 在微信进入学习视频
2. 右上角 -> 在浏览器打开
3. 拖条
4. 截图走人

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## debugx5-法

`很遗憾的表示,下面这个方法对于 微信8.0.16 后的版本失效了(2022.2)`
<sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>

老版本倒是可以照常用

### 安装核心

- 随便找个人/群给他发下面这段代码:

  > 只需要安装一次,只要不更新微信一直生效.

  ```
  debugmm.qq.com/?forcex5=true;

  http://debugtbs.qq.com

  http://debugx5.qq.com
  ```

- 示例:

  ![Screenshot20201130175729](https://www.helloimg.com/images/2022/02/27/GVJiZv.png)

  然后从上到下把链接点开一下(`点开然后关掉`就行)

  第三个链接需要打开一个东西,如下:

  ![Screenshot20201130184015](https://www.helloimg.com/images/2022/02/27/GVJxyo.png)

  如果你截图时不想让小绿格显示,在这里再关掉.

- 安装完成!

---

### 进入视频

- `照常打开学习视频`,右下角会出现上面图中那个`小绿格`

  > 那就说明你成功了! 如果没成的话再重新试试.

- 点开`小绿格vConsole`,输入下面指令:

  ```
  document.getElementById('Bvideo').currentTime=1000;
  ```

  ![Screenshot20201130185325](https://www.helloimg.com/images/2022/02/27/GVJ5LA.png)

- 点 ok

  没了,如果答完题还有视频的话,再输一遍这命令 ok 一下

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [微信更新后无法打开 debug](https://developers.weixin.qq.com/community/develop/doc/00064efd0a472086dc5d3e44e5ac00)
