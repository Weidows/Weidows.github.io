---
title: 🉑极致专攻-Shell-Optimize
date: 2020-10-13 23:25:31
password: ""
tags:
  - shell
  - PowerShell
  - 备忘录
  - zsh
cover: https://www.helloimg.com/images/2022/02/27/GVEz1t.png
top_img:
---

# 极致专攻-Shell-Optimize

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-10-03 21:29:01
 * @FilePath: \Blog-private\source\_posts\experience\shell\optimize.md
-->

{% pullquote mindmap mindmap-md %}

- [极致专攻-Shell-Optimize](#极致专攻-shell-optimize)
  - [pwsh](#pwsh)
    - [预览](#预览)
    - [安装](#安装)
    - [插件-配置](#插件-配置)
      - [oh-my-posh](#oh-my-posh)
      - [PoshFuck](#poshfuck)
      - [posh-git](#posh-git)
      - [PSReadline](#psreadline)
    - [启用管理员模式](#启用管理员模式)
    - [报错](#报错)
      - [参数数量问题](#参数数量问题)
  - [zsh](#zsh)
    - [安装](#安装-1)
    - [主题](#主题)
  - [借物表](#借物表)

{% endpullquote %}

## pwsh

### 预览

![](https://www.helloimg.com/images/2022/10/03/ZUZaLQ.png)

![siDz8M1QlGIanE3](https://www.helloimg.com/images/2022/02/27/GV3nLD.png)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 安装

- 不同于 Windows 自带的 Windows PowerShell,这个 PowerShell(也叫 posh/pwsh) 需要另行安装

  配置环境变量:Path 里面+ `D:\Game\Demo\PowerShell\`

  如果用 VScode 的话,实际上不设置环境变量也行,因为在 VScode 内需要指定 powershell 路径

- Scoop 安装全自动,不需要配置.

  ```
  scoop install pwsh
  ```

---

### 插件-配置

> [我的配置文件链接](https://github.com/Weidows-projects/Programming-Configuration/blob/master/others/PowerShell/Microsoft.PowerShell_profile.ps1)

#### oh-my-posh

> [oh-my-posh](https://ohmyposh.dev/) (增强主题)

  <img src="https://www.helloimg.com/images/2022/02/27/GVFbWK.png" alt="20211029164044" />

- [官方给的安装方式:](https://ohmyposh.dev/docs/installation/windows)

  ```
  scoop install oh-my-posh
  ```

  已经废弃的方式

  ```
  Install-Module oh-my-posh
  ```

- [查看主题](https://ohmyposh.dev/docs/themes) / 使用

  ```shell
  Get-PoshThemes
  Get-PoshThemes $env:SCOOP\persist\oh-my-posh\themes
  ```

  用法: 在 pwsh 执行如下可以得到 pwsh 配置文件路径

  ```
  $profile
  ```

  在配置文件里面填写如下 (对应的 JSON 文件名就是想要启用的主题)

  ```shell
  oh-my-posh init pwsh --config "$env:SCOOP/persist/oh-my-posh/themes/powerlevel10k_classic.omp.json" | Invoke-Expression
  ```

  ***

#### PoshFuck

> [PoshFuck](https://github.com/mattparkes/PoShFuck), the fuck 的 pwsh 实现

  <img src="https://www.helloimg.com/images/2022/02/27/GVA1AR.png" alt="20211029164014" />

- 安装: 不必在意格式,复制就行

  ```
  Set-ExecutionPolicy RemoteSigned
    iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/mattparkes/PoShFuck/master/Install-TheFucker.ps1'))
  ```

  ```
  Import-Module PoShFuck
  ```

用法: `fuck` / `fuck!` / `WTF` / `Get-Fucked`

---

#### posh-git

> `posh-git` (用于扩展 Posh 里的 Git 自动补全)

  <img src="https://www.helloimg.com/images/2022/02/27/GVP41Y.png" alt="20211029163651" />

```
scoop install posh-git
# 或
Install-Module posh-git
```

```
Import-Module posh-git
```

---

#### PSReadline

> `PSReadline` (Windows 自带,可以直接使用)

- 预测显示历史命令 / 上下左右高级补全

  <img src="https://www.helloimg.com/images/2022/02/27/GVLnS6.png" alt="20210703123813" />

  ```
  # Enable Prediction History
  Set-PSReadLineOption -PredictionSource History
  ### Advanced Autocompletion for arrow keys
  Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
  Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward
  ```

- `Posh中类似Linux形式补全` (按 Tab 自动补,非常实用)

  <img src="https://www.helloimg.com/images/2022/02/27/GVLO2m.png" alt="MouseInc 122640" />

  ```
  Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
  ```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 启用管理员模式

```
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Kernel" /v DisableTsx /t REG_DWORD /d 0 /f
```

- 作用就是让右键文件时出现管理员权限

  实际上没啥用,并不太推荐使用

  这个东西与上面 PowerShell 没啥关系

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

### 报错

#### 参数数量问题

```
ERROR Cannot process argument transformation on parameter 'ApplicationQuery'. Cannot convert value to type System.String.
ERROR This application failed to install: posh-git
```

在写 powershell 脚本时遇到的, 需要把 args 遍历使用, 不然即使实际传进来的只有一个也会报错

```powershell
function sci{ scoop install $args}


function sci{
  Foreach($argv in $args) {
    scoop install $argv
    echo ========================================================================
  }
}
```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## zsh

### 安装

```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 主题

在 `~/.zshrc` 里面找到并更改:

```
ZSH_THEME="jonathan"
```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

暂无..
