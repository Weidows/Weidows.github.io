---
title: 🥳些些游戏琐事
password: ""
tags:
  - 游戏
katex: false
comments: true
aside: true
date: 2022-03-12 23:50:57
cover: https://www.helloimg.com/images/2022/03/14/RPJzc0.png
top_img:
---

# 些些游戏琐事

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-06-26 17:52:27
 * @FilePath: \Blog-private\source\_posts\life\game.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [些些游戏琐事](#些些游戏琐事)
  - [EPIC](#epic)
    - [库空了](#库空了)
  - [小小梦魇](#小小梦魇)
    - [瞎眼厨师关](#瞎眼厨师关)
  - [方舟-ARK](#方舟-ark)
    - [锁帧](#锁帧)
    - [更改物品堆叠数量](#更改物品堆叠数量)
    - [作弊代码](#作弊代码)
  - [Steam](#steam)
    - [入库代码](#入库代码)
    - [角色等级上限](#角色等级上限)
  - [借物表](#借物表)

{% endpullquote %}

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## EPIC

### 库空了

- 大概就是这么个情况:

  ![RFHXkK.png](https://www.helloimg.com/images/2022/03/12/RFHXkK.png)

- 试了如下方法:

  1. 用朋友电脑登录,库存正常显示
  2. 重装/清除 C 盘数据(program files,APPdata/Local 等都请了)/清理注册表 -> 都无效
  3. 把设置里所有选项试了个遍,无效

---

- 之后尝试用 GOG 看看库存,发现 GOG 上正常而且能调用 EPIC 安装游戏

  于是我这样试了下安装了一个游戏,装完后惊奇的发现: 我叼出来了!

  ![RFHq1b.png](https://www.helloimg.com/images/2022/03/13/RFHq1b.png)

  所以...解决办法就是随便装个游戏

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 小小梦魇

### 瞎眼厨师关

![](https://www.helloimg.com/images/2022/03/28/RqmsTz.png)

网上教程大多是先让进这个笼子<sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>,然后等 boss 走到左边后出来跟他赛跑

试了好多次都被抓

后来发现, 可以爬上这个笼子,等 boss 走到左边后从笼子右边跳下去,boss 不会追上来

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 方舟-ARK

### 锁帧

> ARKSurvivalEvolved\ShooterGame\Saved\Config\WindowsNoEditor\Engine.ini

- 在最后 append 这个:

  ```

  [/script/engine.renderersettings]
  t.maxfps=60
  ```

---

### 更改物品堆叠数量

> ARKSurvivalEvolved\ShooterGame\Saved\Config\WindowsNoEditor\GameUserSettings.ini

里面的 `ItemStackSizeMultiplier` 这一项

---

### 作弊代码

|       功能       | 代码                                                                                              |
| :--------------: | :------------------------------------------------------------------------------------------------ |
|        飞        | fly                                                                                               |
|        走        | walk                                                                                              |
|      伽马值      | gamma x.x                                                                                         |
| S+X 异性植物种子 | bug 原因,只能通过代码获取.. <br> 进此网页<sup id='cite_ref-4'>[\[4\]](#cite_note-4)</sup> 搜 seed |

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## Steam

### 入库代码

```
steam://install/xxx
```

---

### 角色等级上限

> https://tieba.baidu.com/p/7668323181

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [小小梦魇 1 图文攻略 全剧情流程+全解谜 boss 打法攻略(5)瞎眼厨子](http://www.wyaq.com/youxi/gonglue/8142_5.html)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [方舟生存进化系统自带叠加功能设置方法及效果（非模组）【方舟三分钟】](https://www.bilibili.com/video/BV1mf4y1X7na)

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [【方舟】告别显卡占用过高造成的卡顿-死机等情况，锁帧教程](https://www.bilibili.com/video/BV14V411z7NY)

<a name='cite_note-4' href='#cite_ref-4'>[4]</a>: https://docs.google.com/spreadsheets/d/e/2PACX-1vRBnQSrT5CidPWSbeIT5GK7WWBeYu9Uhu9unEkazAfytljMSe7g7qJSX5rhDtb4zI-kh1TIH2-ZNqAX/pubhtml?gid=0&single=true
