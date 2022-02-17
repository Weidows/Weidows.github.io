---
title: 一些字体和VScode字体设置
date: 2020-10-18 23:18:10
password: ""
tags:
  - Font
  - VScode
  - 推荐
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/Xx1sQuZiCoPKAfD.jpg
top_img:
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-03-21 17:10:56
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\others\font.md
-->

- [等宽字体](#等宽字体)
- [非等宽字体](#非等宽字体)
- [中文字体](#中文字体)
- [VScode 中字体系列设置](#vscode-中字体系列设置)
- [VScode 中定义关键字体样式](#vscode-中定义关键字体样式)
- [`连字效果`](#连字效果)
  - [简单介绍](#简单介绍)
  - [VScode 中开启连字](#vscode-中开启连字)

## 等宽字体

- `Fira Code`(Most popular)
- `Operator Mono`(Very strange && beautiful)
- `Victor Mono`
- `Hactor`(Operator+Victor)
- `Dank Mono`(Operator Like)
- `Jetbrains Mono`
- `Source Code Pro`
- `Consolas`(Windows 自带,备用货)

  ***

- Operator Mono 字体
  ![jhKmYOnMX1pecEI](https://cdn.jsdelivr.net/gh/Weidows/Images/post/NceHJmuqKvM4XUL.jpg)

## 非等宽字体

- `Comic Sans MS`
- `Candara`
- `Lemon`
- `Gen Jyuu Gothic Normal`(思源柔黑)

  ***

## 中文字体

- `问藏书房`
- `汉仪楷体简`
- `米开飘逸行楷`
- `思源柔黑`

---

## VScode 中字体系列设置

```
"editor.fontFamily": "'Operator Mono Lig','问藏书房'"
```

- 字体系列从左到右依次为显示优先级,比如上面`Operator Mono Lig`为英文字体,而`问藏书房`为中文字体,这样设置后,VScode 英文显示为前者,中文显示为后者
- 如果某类型字体重复设置,则优先取左边的(比如字体系列为`Operator Mono Lig`和`Fira Code`,则优先选择显示`Operator Mono Lig`)
- 字体系列只能填入字体集的名字,比如`Fira Code`,不能填其中的某个分类,如`Fira Code Bold`
  - 另外,VScode 默认选择使用的是字体集里面`Book`/`Medium`类型字体,如果在系统字体库中没安装这种默认类型的,VScode 才会去找`Bold`/`Italic`类型的
  - 所以,如果想要把 VScode 默认字体改成`Italic(斜体)`,需要把对应字体集中的`Book`/`Medium`等默认类型字体删除.

---

## VScode 中定义关键字体样式

- 在 VScode 设置中加入如下配置(可以根据需要酌情调整)

```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {//监视下面关键词换成斜体字
      "name": "italic font",
      "scope": [
        "keyword",
        "storage",
        "keyword.control.import",
        "keyword.control.default",
        "keyword.control.from",
        "keyword.operator.new",
        "keyword.control.export",
        "keyword.control.flow",
        "storage.type.class",
        "storage.type.function",
        "storage.type",
        "storage.type.class",
        "variable.language",
        "variable.language.super",
        "variable.language.this",
        "meta.class",
        "meta.var.expr",
        "constant.language.null",
        "support.type.primitive",
        "entity.name.method.js",
        "entity.other.attribute-name",
        "punctuation.definition.comment",
        "text.html.basic entity.other.attribute-name.html",
        "text.html.basic entity.other.attribute-name",
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js",
        "source.js constant.other.object.key.js string.unquoted.label.js"
      ],
      "settings": {
        "fontStyle": "italic",
      }
    },
    {//监视下面关键词换成粗体字
      "name": "bold font",
      "scope": [
      // "text",
        "comment",
      ],
      "settings": {
        "fontStyle": "bold",
      }
    }
  ]
}
```

## `连字效果`

### 简单介绍

- 连字效果是将`>=`,`<=`,`==`等等连接起来的效果,编程方面比较好看,`需要使用的字体支持`.
- 下载的字体文件一般有`.ttf` / `.otf`,分别对应 True Type Font 和 Open Type Font
  - 其中只有 otf 支持开启连字效果(它支持,但是.otf 的字体不一定带有连字效果)
  - .ttf 肯定打不开,.otf 有的字体支持有的不支持(而且同一种字体的.otf 有可能也存在"带有连字效果和不带有连字效果"两种文件)
  - font 文件带有`Lig`/`Ligatures`的话`有可能`是带有连字效果的字体

### VScode 中开启连字

- "editor.fontLigatures": true
