---
title: 💢Windows中一些奇奇怪怪逸事.
date: 2020-12-28 13:49:19
tags:
  - Windows
  - 计算机系统
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/VKmoJbNALH7PqrC.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2020-12-28 13:49:19
 * @LastEditors: Weidows
 * @LastEditTime: 2022-01-26 19:51:04
 * @FilePath: \Blog-private\source\_posts\system\Windows.md
 * @Description:
 * @!: *********************************************************************
-->

- [窗口逸出](#窗口逸出)
  - [解决方案](#解决方案)
- [终端](#终端)
  - [打开方式](#打开方式)
    - [方法一](#方法一)
    - [方法二](#方法二)
    - [方法三](#方法三)
  - [切换路径](#切换路径)
- [压缩包内容异常](#压缩包内容异常)
- [office](#office)
  - [diff-office2019-office365](#diff-office2019-office365)
  - [网页版 office](#网页版-office)
  - [举栗](#举栗)
  - [推荐文章](#推荐文章)
- [各种路径](#各种路径)
- [颜色配置](#颜色配置)
  - [NVIDIA](#nvidia)
  - [AMD](#amd)
- [虚拟机代理不通](#虚拟机代理不通)
- [数据迁移](#数据迁移)
- [OneDrive](#onedrive)
  - [打不开](#打不开)
  - [硬盘错误](#硬盘错误)
- [声音配置](#声音配置)
  - [驱动](#驱动)
  - [酷狗](#酷狗)
  - [系统设置](#系统设置)

## 窗口逸出

- 之前弄了个副屏,有些应用窗口在副屏中打开

- 于是,在不装副屏时,那些窗口打开时还是在那个位置,而且摸不到他们没法拖过来...

### 解决方案

- <kbd>alt</kbd> + <kbd>Tab</kbd> 切换到那个窗口.

- <kbd>alt</kbd> + <kbd>space</kbd> 切出窗口菜单,选择最大化

- => `解决`!

## 终端

### 打开方式

#### 方法一

`Windows + R`,输入 cmd,回车就出来了.

#### 方法二

在文件夹空白处按住`shift + 右键`,会出来`在此处打开PowerShell窗口`

<img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/4HflJZPK8W95i1A.png" alt="20210103142309" />

#### 方法三

直接在路径栏中输入 cmd 回车.

<img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/jvCbW19uq6ohExN.png" alt="20210103142458" />

---

### 切换路径

- 秃然一天,发现 cmd 路径无法切换??!!

  > 百度了一下找到了原因: [cmd 下无法切换路径问题](https://blog.csdn.net/weixin_38089515/article/details/76339030)

  如下,需要先切换一下盘符..

  ```cmd
  C:\Users\29845>cd D:\Game\Github\Programming-Configuration\lists
  C:\Users\29845>

  C:\Users\29845>cd D:
  D:\

  C:\Users\29845>d:
  D:\>
  ```

- 再次找了一下,发现 powershell 不会遇到这问题,cmd 有另一个方法: 加上 `/d`

  ```
  D:\Game\Github\Blog-private>cd /d C:\Users
  C:\Users>
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 压缩包内容异常

- 今天下载了一个压缩包(原本大小 163M,带密码),打开之后是这样：

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/kHyT5PwOSBltR3n.png" alt="20210627201846" />

- 尝试解压,没问我密码,解压出来也是长这样的,我以为是下载时数据传输错误,重新下载了一遍,结果仍然是这样...

- 于是尝试换软件打开压缩包 -> `7z`,太对了,正常打开了!(所以应该是系统自带的解压功能有问题)

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/62gOc1xLjyQfSVa.png" alt="20210627202415" />

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## office

### diff-office2019-office365

1. 像是 office2015,office2017,office2019 这种的一般是买电脑时就预装在电脑里的

   这种是一次性购买激活码(算在买电脑的钱里了),是正版的话可以登录微软账号,把 office2019 绑定到账号上.

   会更新修复一些 bug 但并不会更新功能,简单讲就是随着电脑购买这个 office 也是买死的.

2. office365 是按年续订购买的套餐

   分为家庭版/个人版/商业版/教育版(需要学校购买),不同版本其中还含有不同价位的套餐

   根据版本和套餐的不同,office 提供不同的服务(比如 office 桌面应用使用权,5T OneDrive 空间等等)

3. 服务性的差别:

   office2019 锁死在一台电脑上,只有 word,Excel,PowerPoint 等桌面软件的永久使用权,没有云服务.

   office365 使用权限有订阅期,可提供的权限比 office2019 更多; 根据订阅套餐不同,有的不如 office2019,有的远超 office2019

---

### 网页版 office

网页版 office 任何 Microsoft 账号都可以免费使用,域名也一样: `www.office.com` ,但是分为 office 和 office365 两种界面

- 如下图是 office: [https://www.office.com/?auth=1](https://www.office.com/?auth=1)

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/KrxdhIADz6l4uSE.png" alt="20210704100501" />

- office365: [https://www.office.com/?auth=2](https://www.office.com/?auth=2)

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/jFnAHYlXwmf4Ka1.png" alt="20210704100827" />

---

### 举栗

- 我的一个微软账号订阅是 `Microsoft Office365 A1` ,就是最普通的教育版,学校通过申请但没购买更高级的服务.

  1. 并没有桌面 office 使用权,只能用上图那种网页版的 (A1 pro 可以用桌面版)

  2. 有 1~5T OneDrive 空间(具体多大没试过),上面有管理员管着,账号好坏存亡得看管理员和母账号是否安稳.

---

### 推荐文章

> [Office2019 与 office365 有什么区别？有些人还蒙在鼓里！](https://baijiahao.baidu.com/s?id=1629077774897211140&wfr=spider&for=pc)

> [OFFICE365 各版本、A1、A1P、E3、E5 等版本科普](https://shikey.com/2019/12/24/office365-versions-a1-a1p-e3-etc.html)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 各种路径

- 字体

  - `~\AppData\Local\Microsoft\Windows\Fonts`

- 壁纸/主题

  - `~\AppData\Local\Microsoft\Windows\Themes`

- 开始菜单

  - `C:\ProgramData\Microsoft\Windows\Start Menu\Programs`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 颜色配置

LSP mode : on

改进多次的色板 (HDR:OFF，开了的话色彩很怪

离人类默认视角越来越远了。。

### NVIDIA

- <details>

    <summary> 前后对比一下 </summary>

  ***

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/BqtgHf8aNvOolLx.jpg" alt="1633272756273" />
  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/iPN5wTS9bLX8vAl.jpg" alt="1633272761799" />
  </details>

- 面板

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/xvO7Uia6nql81Z2.jpg" alt="1633272772176" />

---

### AMD

<img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/tVBIDOuSivQdPna.png" alt="20220126193700" />

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 虚拟机代理不通

- win 下开了个虚拟机,本想着让本机代理虚拟机网络,结果不知为什么一直不通:

  本机能连到虚拟机,但是虚拟机连不到本机,一直 ping 不通

- 那么,有可能是下面这个问题:

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/ml7LUWTfPMzaEhA.png" alt="20210805182546" />

- 坑了好久啊!!!

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 数据迁移

- 想把电脑里的歌复制进手机里,拿数据线连上了之后复制

  总是会卡死在某个进度,还得重新开始

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/S9AokmK7MsqTIxw.png" alt="20211012102328" />

  一番查找发现是因为歌名有的含有特殊字符

  在`跨设备迁移`或者`压缩(Win自带)`时文件名无法被正常解析

  ***

- 这样的话可以试试换个压缩软件 (7z)

  在电脑上压缩后复制到手机,然后手机解压就可以获取到这种怪名文件了.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## OneDrive

### 打不开

> [Win10 Onedrive 打不开无法访问怎么办](https://zhidao.baidu.com/question/684463771223457772.html)

---

### 硬盘错误

> 在重分析点缓冲区中的标记无效 0x80071129

- 在 OneDrive 同步时网咯出了问题,然后这个文件夹就卡 bug 了,尝试过一下方法删除:

  - 直接删

  - 垃圾清理

  - 各种解除占用,文件夹粉碎

  - 右键硬盘 -> 属性 -> 工具 -> 查错 -> 重启 ([win10 系统在重分析点缓冲区中的标记无效 的解决方法](https://blog.csdn.net/COCO56/article/details/108634554))

  - 进安全模式删除

  - 进 PE 删除

  - 修复模式命令行删除

  ***

- 通通不行,后来发现 Windows 有自带修复命令,试了试:

  > [在 Windows 中使用磁盘修复命令 CHKDSK 检查并修复磁盘错误](https://www.disktool.cn/content-center/command-prompt-check-disk-6540.html)

  ```
  chkdsk E: /f
  ```

  然后会问占用问题,直接输 Y,很快就好了!

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 声音配置

关于如何获得动听的声音..

### 驱动

- 如果你更新了一下驱动或者换了个耳机后,音效不堪入耳,那么检查一下这里是不是 `耳机`

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/8ybYHpIVDs5TMna.png" alt="20211126204114" />

### 酷狗

- 这个品牌当然会有很多诟病的地方,但是它的音效增强是在是强,尤其可以全局

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/C9Wpe6v5HgmBzE2.png" alt="20211126204303" />

### 系统设置

<img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/SH5AEKa2sk4TcNU.png" alt="20211126204420" />

音质格式
