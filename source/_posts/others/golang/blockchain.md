---
title: 🐭从零开始-Golang-blockchain
password: ""
tags:
  - 区块链
  - Golang
katex: false
comments: true
aside: true
date: 2022-02-07 00:53:07
cover: https://www.helloimg.com/images/2022/03/06/Gh2RFv.png
top_img:
---

# 从零开始-Golang-blockchain

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-04-20 23:48:24
 * @FilePath: \Blog-private\source\_posts\others\golang\blockchain.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [从零开始-Golang-blockchain](#从零开始-golang-blockchain)
  - [配置](#配置)
    - [模块代理](#模块代理)
    - [模块初始化](#模块初始化)
    - [Goland-快捷键导入](#goland-快捷键导入)
  - [Golang-learning](#golang-learning)
    - [package](#package)
  - [借物表](#借物表)

{% endpullquote %}

开辟于此课程以及《Golang 区块链入门到实战\_以太坊/fabric》<sup id='cite_ref-01'>[\[1\]](#cite_note-01)</sup>

{% mmedia "bilibili" "bvid:1jf4y1s7sZ" %}

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 配置

```
scoop install go-cn
```

### 模块代理

- 运行<sup id='cite_ref-02'>[\[2\]](#cite_note-02)</sup>

  ```shell
  go env -w GO111MODULE=on
  go env -w GOPROXY=https://goproxy.cn
  ```

---

### 模块初始化

```
go mod init ProjectName
```

> cannot determine module path for source directory (outside GOPATH<sup id='cite_ref-03'>[\[3\]](#cite_note-03)</sup>

---

### Goland-快捷键导入

在此提一嘴想用 vscode 写 go 的话,目前还是不太友好.. (2022.2); `首选 Goland`

- Jetbrains 不同 IDE 之间的快捷键是没法直接导入,一个个地改又非常费劲

  找到了一个通过修改文件来导入的方式<sup id='cite_ref-04'>[\[4\]](#cite_note-04)</sup>,比如我们想把快捷键 IDEA -> Goland

  1. 打开 idea 并导出配置到压缩包,快捷键在 `settings.zip\keymaps\`
  2. 先打开 Goland 随便改一个快捷键,不然下一步可能找不到; 然后关掉 Goland
  3. 找到 `Goland\profile\config\jba_config\win.keymaps\`,复制粘贴

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## Golang-learning

基础语法可以跟着菜鸟教程学习 <sup id='cite_ref-05'>[\[5\]](#cite_note-05)</sup>

### package

- `package main`被误改会报错<sup id='cite_ref-06'>[\[6\]](#cite_note-06)</sup>

  > package command-line-arguments is not a main package

  正确 import 法:<sup id='cite_ref-07'>[\[7\]](#cite_note-07)</sup>

  ***

- 简易例子:

  - test.go

    ```go
    package main

    func sum( a, b int ) int {
      return a + b
    }
    ```

  - main.go

    ```go
    package mian

    func main() {
      fmt.Println(sum(1, 2))
    }
    ```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-01' href='#cite_ref-01'>[1]</a>: [《Golang 区块链入门到实战\_以太坊/fabric》](https://www.zlkt.net/book/detail/9/257)

<a name='cite_note-02' href='#cite_ref-02'>[2]</a>: https://goproxy.cn/

<a name='cite_note-03' href='#cite_ref-03'>[3]</a>: [go mod init 在初始化时出现 cannot determine module path for source directory (outside GOPATH](https://blog.csdn.net/ciel_yu/article/details/107847578)

<a name='cite_note-04' href='#cite_ref-04'>[4]</a>: [JetBrains 系列 IDE 之间的快捷键相互导入](https://www.cnblogs.com/devzyc/p/14084488.html)

<a name='cite_note-05' href='#cite_ref-05'>[5]</a>: https://www.runoob.com/go/go-tutorial.html

<a name='cite_note-06' href='#cite_ref-06'>[6]</a>: [go 语言入门：package command-line-arguments is not a main package](https://blog.csdn.net/A_java_c/article/details/120006213)

<a name='cite_note-07' href='#cite_ref-07'>[7]</a>: [golang 之 import 和 package 的使用](https://segmentfault.com/a/1190000018235929)
