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
 * @LastEditTime: 2022-09-06 23:27:30
 * @FilePath: \Blog-private\source\_posts\life\game.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [些些游戏琐事](#些些游戏琐事)
  - [EPIC](#epic)
    - [库空了](#库空了)
  - [Steam](#steam)
    - [入库代码](#入库代码)
    - [Wallpaper-Engine](#wallpaper-engine)
      - [订阅取消无法删除壁纸](#订阅取消无法删除壁纸)
  - [游戏](#游戏)
    - [小小梦魇](#小小梦魇)
      - [瞎眼厨师关](#瞎眼厨师关)
    - [方舟-ARK](#方舟-ark)
      - [锁帧](#锁帧)
      - [更改物品堆叠数量](#更改物品堆叠数量)
      - [作弊代码](#作弊代码)
      - [角色等级上限](#角色等级上限)
  - [Discord](#discord)
    - [登录验证](#登录验证)
    - [无法接受邀请](#无法接受邀请)
    - [删除临时消息](#删除临时消息)
  - [网盘](#网盘)
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

## Steam

### 入库代码

```
steam://install/xxx
```

---

### Wallpaper-Engine

#### 订阅取消无法删除壁纸

> https://help.steampowered.com/zh-cn/faqs/view/0C48-FCBD-DA71-93EB <sup id='cite_ref-5'>[\[5\]](#cite_note-5)</sup>

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 游戏

### 小小梦魇

#### 瞎眼厨师关

![](https://www.helloimg.com/images/2022/03/28/RqmsTz.png)

网上教程大多是先让进这个笼子<sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>,然后等 boss 走到左边后出来跟他赛跑

试了好多次都被抓

后来发现, 可以爬上这个笼子,等 boss 走到左边后从笼子右边跳下去,boss 不会追上来

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 方舟-ARK

#### 锁帧

> ARKSurvivalEvolved\ShooterGame\Saved\Config\WindowsNoEditor\Engine.ini

- 在最后 append 这个:

  ```

  [/script/engine.renderersettings]
  t.maxfps=60
  ```

---

#### 更改物品堆叠数量

> ARKSurvivalEvolved\ShooterGame\Saved\Config\WindowsNoEditor\GameUserSettings.ini

里面的 `ItemStackSizeMultiplier` 这一项

---

#### 作弊代码

|       功能       | 代码                                                                                              |
| :--------------: | :------------------------------------------------------------------------------------------------ |
|        飞        | fly                                                                                               |
|        走        | walk                                                                                              |
|      伽马值      | gamma x.x                                                                                         |
| S+X 异性植物种子 | bug 原因,只能通过代码获取.. <br> 进此网页<sup id='cite_ref-4'>[\[4\]](#cite_note-4)</sup> 搜 seed |

---

#### 角色等级上限

> https://tieba.baidu.com/p/7668323181

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## Discord

嘛, 有的是开发 Bot 过程中遇到的问题, 也记在这里吧..

### 登录验证

通过 Gmail 注册的账号, 可能因为梯子 IP 变动触发风控了, 让我验证手机号

![](https://www.helloimg.com/images/2022/08/18/ZQcEVo.png)

然后在电脑上死都验证不过去, 换到手机端就直接通过了...(用的国内号)

![](https://www.helloimg.com/images/2022/08/18/ZQcAZQ.jpg)

---

### 无法接受邀请

![](https://www.helloimg.com/images/2022/08/18/ZQccS6.png)

这个设计很坑爹...正确接受邀请方式是点侧边栏的加号, 把链接粘贴在这里加入, 而不是直接访问链接

![](https://www.helloimg.com/images/2022/08/18/ZQc0mz.png)

---

### 删除临时消息

![](https://www.helloimg.com/images/2022/08/19/ZQz5k1.png)

如上图, 开发中 ephemeral message 只能被 edit 无法删除; 而且只能通过用户的斜杠指令 `/` 触发唯一一条 Interaction <sup id='cite_ref-6'>[\[6\]](#cite_note-6)</sup> <sup id='cite_ref-7'>[\[7\]](#cite_note-7)</sup>

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 网盘

在小破站总见到云盘的连接, 但苦于没有前缀

> for SEO: 百度网盘 天翼网盘 前缀

|    盘    | 前缀                                                                         |
| :------: | :--------------------------------------------------------------------------- |
| 百度云盘 | [https://pan.baidu.com/s/](https://pan.baidu.com/s/)                         |
| 天翼云盘 | [https://cloud.189.cn/web/share?code=](https://cloud.189.cn/web/share?code=) |

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [小小梦魇 1 图文攻略 全剧情流程+全解谜 boss 打法攻略(5)瞎眼厨子](http://www.wyaq.com/youxi/gonglue/8142_5.html)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [方舟生存进化系统自带叠加功能设置方法及效果（非模组）【方舟三分钟】](https://www.bilibili.com/video/BV1mf4y1X7na)

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [【方舟】告别显卡占用过高造成的卡顿-死机等情况，锁帧教程](https://www.bilibili.com/video/BV14V411z7NY)

<a name='cite_note-4' href='#cite_ref-4'>[4]</a>: https://docs.google.com/spreadsheets/d/e/2PACX-1vRBnQSrT5CidPWSbeIT5GK7WWBeYu9Uhu9unEkazAfytljMSe7g7qJSX5rhDtb4zI-kh1TIH2-ZNqAX/pubhtml?gid=0&single=true

<a name='cite_note-5' href='#cite_ref-5'>[5]</a>: https://steamcommunity.com/app/431960/discussions/2/1745646405802281630/

<a name='cite_note-6' href='#cite_ref-6'>[6]</a>: https://www.reddit.com/r/Discord_Bots/comments/vv9n1q/is_it_possible_to_delete_an_ephemeral_message_in/

<a name='cite_note-7' href='#cite_ref-7'>[7]</a>: https://github.com/discord/discord-api-docs/discussions/3291
