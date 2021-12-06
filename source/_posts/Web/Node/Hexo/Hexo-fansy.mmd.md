---
title: Hexo-pages里一些奇奇怪怪的写法
date: 2020-08-27 01:13:03
categories:
  - Web
  - Node
  - Hexo
tags:
  - Hexo
  - 备忘录
  - Website
  - Markdown
  - HTML
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/grPxjQIqvA8mWtT.jpg
---

<!--
 * @Author: Weidows
 * @Date: 2020-08-27 01:13:03
 * @LastEditors: Weidows
 * @LastEditTime: 2021-12-05 23:50:15
 * @FilePath: \Blog-private\source\_posts\Web\Node\Hexo\Hexo-fansy.mmd.md
-->

- [文章标题-格式](#文章标题-格式)
  - [肯定要背过的](#肯定要背过的)
  - [以下是没用过或无效的](#以下是没用过或无效的)
- [标签外挂](#标签外挂)
- [Gallery 相册图库](#gallery-相册图库)
  - [div 式写法](#div-式写法)
  - [效果:](#效果)
  - [另一种相册形式(自动排列)](#另一种相册形式自动排列)
- [tag-hide](#tag-hide)
  - [inline(一行内)](#inline一行内)
  - [Block(块)](#block块)
  - [toggle(收缩框)](#toggle收缩框)
- [mermaid](#mermaid)
- [tabs(标签块)](#tabs标签块)
- [Button](#button)
  - [写法:](#写法)
  - [好康的-demo](#好康的-demo)
- [\_config.yml](#_configyml)
- [图片引入](#图片引入)

## 文章标题-格式

在 markdown 文章里面最开头(如果不是开头的话报错),弄上如下框框

```
---
下面的格式标签写在这里
---
```

### 肯定要背过的

```
title: # 网站标题
categories: # 分类(只能单线)
  - category_1
  - category_1_1
  - category_1_1_1
tags:  # 标签(可以多标)
  - tag_1
  - tag_2
type: "" # 指定这个页面的类型(比如categories/tags)
cover: # 封面图片,注意不能用../命令,双引号有无均可
comments: # 评论开关 true/false
date: # 创建时间
updated:  # 更新时间
description: # 网站描述
aside: # 侧边栏开关
top_img: # 文章banner图,如果有cover的话默认用的是cover(这个可以给_post之外的用),其隐藏前缀目录为Website/public/注意格式应为:images/xxx,但是这样会使_posts里文章的相关文章封面失效,需要用URL
```

### 以下是没用过或无效的

```
keywords: # 网站关键词
author: # 网站作者
language: # 语言, 一般填 'zh-CN'
timezone: # 时区, 可以不填
```

---

## 标签外挂

- 写法:

```
{% note default %}
default 提示块标籤
{% endnote %}

{% note primary no-icon %}
primary 提示块标籤
{% endnote %}

{% note success %}
success 提示块标籤
{% endnote %}

{% note info %}
info 提示块标籤
{% endnote %}

{% note warning %}
warning 提示块标籤
{% endnote %}

{% note danger %}
danger 提示块标籤
{% endnote %}
```

- 显示效果:
  {% note default %}
  default 提示块标籤
  {% endnote %}

  {% note primary no-icon %}
  primary 提示块标籤
  {% endnote %}

  {% note success %}
  success 提示块标籤
  {% endnote %}

  {% note info %}
  info 提示块标籤
  {% endnote %}

  {% note warning %}
  warning 提示块标籤
  {% endnote %}

  {% note danger %}
  danger 提示块标籤
  {% endnote %}

---

## Gallery 相册图库

### div 式写法

```
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>

name：图库名字
description：图库描述
link：连接到对应相册的地址
img-url：图库封面的地址

例如:
<div class="gallery-group-main">
{% galleryGroup PrettyGreen 一些养眼的绿色植物 tags/gallery/PrettyGreen https://cdn.jsdelivr.net/gh/Weidows/Images/Fantasy/PrettyGreen/Nu9RF1.jpg %}
</div>
```

### 效果:

  <div class="gallery-group-main">
  {% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/T7Mu8Aod3egmC4Q.png %}
  {% galleryGroup '漫威' '关于漫威的图片' '/Gallery/marvel' https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/8t97aVlp4hgyBGu.jpg %}
  {% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/hOqbQ3BIwa6KWpo.jpg %}
  </div>

### 另一种相册形式(自动排列)

```
{% gallery %}
![图片描述](图片地址)
![图片描述](图片地址)
![图片描述](图片地址)
{% endgallery %}
```

---

## tag-hide

### inline(一行内)

```
{% hideInline content,display,bg,color %}

  content: 文本内容
  display: 按钮显示的文字 (可选)
  bg: 按钮的背景颜色 (可选)
  color: 按钮文字的颜色 (可选)
```

- 例如 1:

  `我是谁:{% hideInline Weidows,查看答案,#FF7242,#fff %}`

  我是谁:{% hideInline Weidows,查看答案,#FF7242,#fff %}

### Block(块)

```
{% hideBlock display,bg,color %}
content
{% endhideBlock %}
```

- 例如 2:

  ```markdown
  {% hideBlock 我是谁 %}
  爷是:
  Weidows
  {% endhideBlock %}
  ```

  {% hideBlock 我是谁 %}
  爷是:
  Weidows
  {% endhideBlock %}

### toggle(收缩框)

```
{% hideToggle display,bg,color %}
content
{% endhideToggle %}
```

- 例如 3:

  ```markdown
  {% hideToggle 我是谁 %}
  爷是:
  Weidows
  {% endhideToggle %}
  ```

  {% hideToggle 我是谁 %}
  爷是:
  Weidows
  {% endhideToggle %}

- tag-hide 内的标签外挂 content 内都不建议有 h1 - h6 等标题。因为 Toc 会把隐藏内容标题也显示出来，而且当滚动屏幕时，如果隐藏内容没有显示出来，会导致 Toc 的滚动出现异常。

---

## mermaid

- 写法:

  ```markdown
  {% mermaid %}
  内容
  {% endmermaid %}
  ```

- 例如:

  ```mermaid
  {% mermaid %}
  pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" : 5
  {% endmermaid %}
  ```

- 显示:

  {% mermaid %}
  pie
  title Key elements in Product X
  "Calcium" : 42.96
  "Potassium" : 50.05
  "Magnesium" : 10.01
  "Iron" : 5
  {% endmermaid %}

- 官方原文:

  > - mermaid 标籤不允许嵌套于一些隐藏属性的标籤外挂，例如: tag-hide 内的标籤外挂和 tabs 标籤外挂，这会导致 mermaid 图示无法正常显示，使用时请留意。
  > - 请不要压缩 html 代码，不然会导致 mermaid 显示异常

- 压缩 HTML 很有必要,如何排除这种添加了 mermaid 的 HTML 文件呢?

  > 我用的如下方式: 把添加了 mermaid 的 markdown 文件命名为 `xxx.mmd.md`,这样 neat 时就会被排除了.

  ```yaml
  neat_html:
    enable: true
    exclude:
      - "**/*.mmd/*"
  ```

---

## tabs(标签块)

- 写法:

  ```
  {% tabs Unique name, [index] %}
  <!-- tab [Tab caption] [@icon] -->
  markdown内容(inline)
  <!-- endtab -->
  {% endtabs %}

  Unique name   : Unique name of tabs block tag without comma.
                  Will be used in #id's as prefix for each tab with their index numbers.
                  If there are whitespaces in name, for generate #id all whitespaces will replaced by dashes.
                  Only for current url of post/page must be unique!
  [index]       : Index number of active tab.
                  If not specified, first tab (1) will be selected.
                  If index is -1, no tab will be selected. It's will be something like spoiler.
                  Optional parameter.
  [Tab caption] : Caption of current tab.
                  If not caption specified, unique name with tab index suffix will be used as caption of tab.
                  If not caption specified, but specified icon, caption will empty.
                  Optional parameter.
  [@icon]       : FontAwesome icon name (full-name, look like 'fas fa-font')
                  Can be specified with or without space; e.g. 'Tab caption @icon' similar to 'Tab caption@icon'.
                  Optional parameter.
  ```

- 例如: (test2 标签为预选状态,找不到的话就是第一个)

  ```
  {% tabs test2 %}
  <!-- tab 第一个Tab -->
  **tab名字为第一个Tab**
  <!-- endtab -->

  <!-- tab @fab fa-apple-pay -->
  **只有图标 没有Tab名字**
  <!-- endtab -->

  <!-- tab 炸弹@fas fa-bomb -->
  **名字+icon**
  <!-- endtab -->
  {% endtabs %}
  ```

- 显示:
  {% tabs test2 %}
  <!-- tab 第一个Tab -->

  **tab 名字为第一个 Tab**
  <!-- endtab -->

  <!-- tab @fab fa-apple-pay -->

  **只有图标 没有 Tab 名字**
  <!-- endtab -->

  <!-- tab 炸弹@fas fa-bomb -->

  **名字+icon**
  <!-- endtab -->

  {% endtabs %}

---

## Button

### 写法:

```
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

  [url]         : 链接
  [text]        : 按钮文字
  [icon]        : [可选] 图标
  [color]       : [可选] 按钮背景顔色(默认style时）
                        按钮字体和边框顔色(outline时)
                        default/blue/pink/red/purple/orange/green
  [style]       : [可选] 按钮样式 默认实心
                        outline/留空
  [layout]      : [可选] 按钮佈局 默认为line
                        block/留空
  [position]    : [可选] 按钮位置 前提是设置了layout为block 默认为左边
                        center/right/留空
  [size]        : [可选] 按钮大小
                        larger/留空
```

### 好康的-demo

```
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline blue larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline pink larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline red larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline purple larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline orange larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline green larger %}
```

- 演示:
  {% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline blue larger %}
  {% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline pink larger %}
  {% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline red larger %}
  {% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline purple larger %}
  {% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline orange larger %}
  {% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline green larger %}

---

## \_config.yml

- 合并:把 themes/xxx/\_config.yml 移动到 source/\_data/里,并改名为 xxx.yml
- 我所遇到的各种问题
  - 这里面 inject js/css 功能只能插入本地的,而且必须是./形式
  - css 的 inject 在 head,js 的 inject 在 body,不能改变位置(失效)
  - valine 设置处的 placeholder 不能写带单引号的内容,会导致整个 valine 评论崩溃不显示

---

## 图片引入

- 引入图片,在 source 里面当路径正确出现图片时,还需要再加一层
- 因为在 Hexo generate 时会多出现一层路径,需要在 source 里多一个../
