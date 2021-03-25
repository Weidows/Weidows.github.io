---
title: 如何让Windows下的终端变得漂亮和好用起来
date: 2020-10-13 23:25:31
categories:
  - experience
  - shell
tags:
  - shell
  - PowerShell
  - 备忘录
cover: https://i.loli.net/2020/11/30/p8sZuCArYPLI93d.jpg
# top_img: https://cdn.jsdelivr.net/gh/Weidows/Images/
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-03-11 23:48:26
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\experience\shell\pwsh.md
-->

- [预览](#预览)
- [环境配置](#环境配置)
- [安装插件](#安装插件)
- [启用主题及插件](#启用主题及插件)
- [`oh-my-posh`主题](#oh-my-posh主题)
- [启用管理员模式](#启用管理员模式)

# 预览

![siDz8M1QlGIanE3](https://i.loli.net/2020/11/30/L26PcmM3KnW9YfT.jpg)

---

# 环境配置

- 不同于 Windows 自带的 Windows PowerShell,这个 PowerShell 需要另行安装(百度搜,安装上就行)
- 配置环境变量:Path 里面+ 格式参照如下:
  - `D:\Game\Demo\PowerShell\`
  - 如果用 VScode 的话,实际上不设置环境变量也行,因为在 VScode 内需要指定 powershell 路径
  - Scoop 安装全自动,不需要配置.

---

# 安装插件

- `oh-my-posh` (Posh 增强主题) && `posh-git` (用于扩展 Posh 里的 Git)

  ```
  Install-Module oh-my-posh
  ```

- 安装 `PoshFuck`

  - (不必在意格式,复制就行)

  ```
  Set-ExecutionPolicy RemoteSigned
    iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/mattparkes/PoShFuck/master/Install-TheFucker.ps1'))
  ```

---

# 启用主题及插件

> [我的配置文件链接](https://github.com/Weidows/Programming-Configuration/blob/master/PowerShell/Microsoft.PowerShell_profile.ps1)

- `启用主题`: ~/文档/PowerShell/Microsoft.PowerShell_profile.ps1 加上以下字段

  ```
  Import-Module oh-my-posh
  Import-Module posh-git
  Set-PoshPrompt -Theme powerlevel10k_classic
  ```

- `Posh中类似Linux形式补全`

  ```
  Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
  ```

- `Posh-Fuck`,类似`Zsh-theFuck`

  - 用法: `fuck` / `fuck!` / `WTF` / `Get-Fucked`

  ```
  Import-Module PoShFuck
  ```

- 这个文件实际上是 PowerShell 打开时默认加载的指令集,可以自定义添加命令
  - 清除打开时的版本信息
    - 最后一行添加: `clear`

---

# `oh-my-posh`主题

- 查看所有主题

  ```shell
  Get-PoshThemes
  ```

- 用法:

  ```shell
  Set-PoshPrompt -Theme xxx
  ```

  - (自上之下按本人推荐程度排序,`萝卜白菜各有所爱`,希望能找到您喜欢的~)

  ***

- 推荐

  ```
  Powerlevel10k-Classic (好看没的说)
  AgnosterPlus
  Paradox (最常用)
  PowerLine (上一个不换行形式)
  Avit
  Darkblood (看起来还行)
  tehrob
  Pararussel
  Material
  Zash
  ```

  ***

- 不是很推荐的

  ```
  Honukai
  Agnoster
  ys
  Sorin
  Star
  Lambda
  pure
  Powerlevel10k-Lean
  Punk
  robbyrussell
  Fish (错位)
  qwerty
  ```

---

# 启用管理员模式

- 作用就是让右键文件时出现管理员权限
  - 实际上没啥用,并不太推荐使用.
  - 这个东西与上面 PowerShell 没啥关系

```
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Kernel" /v DisableTsx /t REG_DWORD /d 0 /f
```
