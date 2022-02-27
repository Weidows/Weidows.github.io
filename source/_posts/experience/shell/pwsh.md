---
title: 🉑pwsh极致专攻
date: 2020-10-13 23:25:31
password: ""
tags:
  - shell
  - PowerShell
  - 备忘录
cover: https://www.helloimg.com/images/2022/02/27/GVEz1t.png
top_img:
---

# pwsh 极致专攻

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-23 03:22:48
 * @FilePath: \Blog-private\source\_posts\experience\shell\pwsh.md
-->

```pullquote mindmap mindmap-md
- [pwsh 极致专攻](#pwsh-极致专攻)
  - [预览](#预览)
  - [环境配置](#环境配置)
  - [安装插件](#安装插件)
  - [启用主题及插件](#启用主题及插件)
  - [oh-my-posh](#oh-my-posh)
  - [启用管理员模式](#启用管理员模式)
```

## 预览

![siDz8M1QlGIanE3](https://www.helloimg.com/images/2022/02/27/GV3nLD.png)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 环境配置

- 不同于 Windows 自带的 Windows PowerShell,这个 PowerShell(也叫 posh/pwsh) 需要另行安装(百度搜,安装上就行)

  - 配置环境变量:Path 里面+ `D:\Game\Demo\PowerShell\`

  - 如果用 VScode 的话,实际上不设置环境变量也行,因为在 VScode 内需要指定 powershell 路径

- Scoop 安装全自动,不需要配置.

  ```
  scoop install pwsh
  ```

---

## 安装插件

- `oh-my-posh` (Posh 增强主题)

  ```
  Install-Module oh-my-posh
  ```

  <img src="https://www.helloimg.com/images/2022/02/27/GVFbWK.png" alt="20211029164044" />

  ***

- `PoshFuck`

  不必在意格式,复制就行

  ```
  Set-ExecutionPolicy RemoteSigned
    iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/mattparkes/PoShFuck/master/Install-TheFucker.ps1'))
  ```

  <img src="https://www.helloimg.com/images/2022/02/27/GVA1AR.png" alt="20211029164014" />

  ***

- `posh-git` (用于扩展 Posh 里的 Git 自动补全)

  ```
  Install-Module posh-git
  ```

  <img src="https://www.helloimg.com/images/2022/02/27/GVP41Y.png" alt="20211029163651" />

  ***

- `PSReadline` (Windows 自带,可以直接使用)

  - 预测显示历史命令

  - 上下左右高级补全

  <img src="https://www.helloimg.com/images/2022/02/27/GVLnS6.png" alt="20210703123813" />

---

## 启用主题及插件

> [我的配置文件链接](https://github.com/Weidows-projects/Programming-Configuration/blob/master/others/PowerShell/Microsoft.PowerShell_profile.ps1)

- `启用主题`: ~/文档/PowerShell/Microsoft.PowerShell_profile.ps1 / $profile 加上以下字段

  ```
  Import-Module oh-my-posh
  Import-Module posh-git
  Set-PoshPrompt -Theme powerlevel10k_classic
  ```

- `Posh中类似Linux形式补全` (按 Tab 自动补,非常实用)

  <img src="https://www.helloimg.com/images/2022/02/27/GVLO2m.png" alt="MouseInc 122640" />

  ```
  Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
  ```

  ***

- `Posh-Fuck`,类似`Zsh-theFuck`

  - 用法: `fuck` / `fuck!` / `WTF` / `Get-Fucked`

  ```
  Import-Module PoShFuck
  ```

  ***

- `PSReadline`

  ```
  # Enable Prediction History
  Set-PSReadLineOption -PredictionSource History
  ## Advanced Autocompletion for arrow keys
  Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
  Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward
  ```

- 这个文件实际上是 PowerShell 打开时默认加载的指令集,可以自定义添加命令,如:

  - 清除打开时的版本信息,在最后一行添加: `clear`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## oh-my-posh

- 查看所有主题

  ```shell
  Get-PoshThemes
  ```

- 用法:

  ```shell
  Set-PoshPrompt -Theme xxx
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 启用管理员模式

- 作用就是让右键文件时出现管理员权限
  - 实际上没啥用,并不太推荐使用.
  - 这个东西与上面 PowerShell 没啥关系

```
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Kernel" /v DisableTsx /t REG_DWORD /d 0 /f
```
