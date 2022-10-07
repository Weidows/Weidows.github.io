---
title: buffer
password: ""
tags:
katex: false
comments: true
aside: true
date: 2022-04-16 00:38:40
cover:
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2022-04-16 00:38:40
 * @LastEditors: Weidows
 * @LastEditTime: 2022-10-05 13:08:13
 * @FilePath: \Blog-private\source\_drafts\buffer.md
 * @Description:
 * @!: *********************************************************************
-->

重新下载了游戏打入 mod 还是跳红字, 解决方法如下, up 看着该更新了
1、warning: unrecognised entry: run = commandlist\guicvm_modcountinc、shader not found: ...\draw_2d.hlsl
无效入口关于 guicvm, 这玩意红字跳了五页多, 去 loverslab 下载 GUICVM_base_package_v1.3 放入 Mods 文件夹和 ShaderFixes 文件夹即可
2、warning: unrecognised entry: resource\mods\costumes\costumecustomizer\marie.ini\...
无效入口关于 ccmod 下的 marie.ini, 红字跳了两页多, 经查最新的 ccmod 是 v2.4, 把除文件夹以外的 ccmod 各种.dll、.ini、.bin 等等都覆盖到目录下更新即可, v2.4 的.ini 还要求 241-480 文件夹, 还跳红字就把 241-480 文件夹粘贴补上, 懒得改.ini 了
3、shaderoverrule 的一些冲突, 到对应的.ini 里加上 allow_duplicate_hash=overrule 即可
4、最后打开游戏只跳四行红字即正常, preset=active 的什么什么

快捷键 ctrl+z, x, c 可以切换部分 mod 衣服模式 F2 开关全部 mod 表情 mod, 按键是 alt+1K 调眼睛 L 调口红 A/S 微表情（微笑 沮丧等） D/F 吐舌 M+1 调纹身 M+2 开关
ctrl+h 发色
ctrl+z 褪色
ctrl+x 褪色
ctrl+q 换脸
高雄 mod 使用前要穿上命叫高雄的衣服按 F3 出现菜单

[Python 中文注释报错解决方法 | Python | 小望云北屋](https://www.xiaowangyun.com/wyblog/detail/?id=261)

## GNN

[https://www.bilibili.com/video/BV1nu411e7yb](https://www.bilibili.com/video/BV1nu411e7yb)

GCN (graph convolutional network)

GraphSAGE (graph sample and aggregate approach)

GAN (graph attention network)

GAE (graph auto-encoder)

GGN (graph generative network)

GSTN (graph spatial-temporal network)

---

[颠覆认知——Redis 会遇到的 15 个「坑」，你踩过几个？](http://kaito-kidd.com/2021/03/14/redis-trap/)

context 不复用, 调用一次方法生成一次
