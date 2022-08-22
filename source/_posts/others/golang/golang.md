---
title: 🐭从零开始-Golang
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

# 从零开始-Golang

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-08-22 18:01:40
 * @FilePath: \Blog-private\source\_posts\others\golang\golang.md
 * @Description:
 * @!: *********************************************************************
-->

{% pullquote mindmap mindmap-md %}

- [从零开始-Golang](#从零开始-golang)
  - [配置](#配置)
    - [常用命令](#常用命令)
    - [快捷键迁移](#快捷键迁移)
    - [项目热部署](#项目热部署)
  - [learning](#learning)
    - [package](#package)
      - [package-demo](#package-demo)
      - [同一包下同名方法隔离](#同一包下同名方法隔离)
    - [http-json-req](#http-json-req)
    - [名称规范](#名称规范)
    - [补充](#补充)
    - [TODO](#todo)
  - [阿里云效-go-mod](#阿里云效-go-mod)
    - [官方文档](#官方文档)
    - [Go-env](#go-env)
    - [鉴权失败问题](#鉴权失败问题)
    - [Macos](#macos)
    - [GOSUMDB-代理问题](#gosumdb-代理问题)
    - [hostname-无法解析](#hostname-无法解析)
  - [proto-compile](#proto-compile)
    - [protobuf-无法获取](#protobuf-无法获取)
  - [借物表](#借物表)

{% endpullquote %}

文章开辟于《Golang 区块链入门到实战\_以太坊/fabric》<sup id='cite_ref-01'>[\[1\]](#cite_note-01)</sup>

没成想半途真的投入 Golang 岗, 深挖亿下..

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 配置

### 常用命令

```
# windows 安装
scoop install go-cn

# 模块初始化
go mod init ProjectName

# 依赖更新
go get -u xxx
go mod tidy
```

> cannot determine module path for source directory (outside GOPATH<sup id='cite_ref-03'>[\[3\]](#cite_note-03)</sup>

### 快捷键迁移

在另一篇: [🤔Matters-found-in-IDEs](../../../tools/IDE-matters#Goland-快捷键导入)

---

### 项目热部署

这里推荐用 [air](https://github.com/cosmtrek/air/blob/master/README-zh_cn.md), 项目还比较活跃

1. 先安装上
2. 进入项目 `air init`, 会出现 `.air.toml`
3. 配置 `.air.toml`, 实际上只需要改一些 bin 和 cmd, 如下

   ```toml
   root = "."
   testdata_dir = ""
   tmp_dir = ""

   [build]
     args_bin = []
     bin = "discord-bot.exe"
     cmd = "go build -o . codeup.aliyun.com/wenuts/aimage/discord-bot"
     delay = 1000
     exclude_dir = ["assets", "tmp", "vendor", "testdata"]
     exclude_file = []
     exclude_regex = ["_test.go"]
     exclude_unchanged = false
     follow_symlink = false
     full_bin = ""
     include_dir = []
     include_ext = ["go", "tpl", "tmpl", "html"]
     kill_delay = "0s"
     log = "build-errors.log"
     send_interrupt = false
     stop_on_error = true

   [color]
     app = ""
     build = "yellow"
     main = "magenta"
     runner = "green"
     watcher = "cyan"

   [log]
     time = false

   [misc]
     clean_on_exit = false

   [screen]
     clear_on_rebuild = false
   ```

4. console 直接运行 air, 就可以热部署开发了, 缺点是不能 Debug

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## learning

基础语法可以跟着菜鸟教程学习 <sup id='cite_ref-05'>[\[5\]](#cite_note-05)</sup>

### package

#### package-demo

- `package`被误改会报错<sup id='cite_ref-06'>[\[6\]](#cite_note-06)</sup>

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
    package main

    func main() {
      fmt.Println(sum(1, 2))
    }
    ```

---

#### 同一包下同名方法隔离

比如 a.go 和 b.go 都在 package main 里, 都有 print()方法, 没隔离的情况下会报错 (同名方法重复)

- 一般常采用接口进行文件间的隔离:

  ```go
  type A struct {
  }

  func (a *A) print() {}
  ```

  ```go
  type B struct {
  }

  func (b *B) print() {}
  ```

---

### http-json-req

用 golang 做带有 JSON 格式 body 的 http 请求

> 跟[这个问题](../../../experience/dev/problem#api-request-body)同时出现的

```go
func main() {
	token := "AOEOulb6yc81T2dbV8QN2-r9-RS7BoEEGHJhHkfLp50kMB8F0fO61PzHkQUiT1qMTMQZwAqHIUlU4D89gUs_YwX1BVc5KbD1maDC2M_T0zyk8BKSKGBrsYf5bqx606Xc3vSu3qYRv-jDVcb7D52Kqpl3M-jWTeaDhcSm2CyolUMie3oyifyh3fE"

	jsonBody, _ := json.Marshal(map[string]any{
		"grantType":    "refresh_token",
		"refreshToken": token,
	})
	req := bytes.NewBuffer(jsonBody)

	//resp, _ := http.Post("", "", buff)
	resp := req

	var m any
	_ = json.NewDecoder(resp).Decode(&m)
	//	map[grantType:refresh_token refreshToken:AOEOulb6yc81T2dbV8QN2-r9-RS7BoEEGHJhHkfLp50kMB8F0fO61PzHkQUiT1qMTMQZwAqHIUlU4D89gUs_YwX1BVc5KbD1maDC2M_T0zyk8BKSKGBrsYf5bqx606Xc3vSu3qYRv-jDVcb7D52Kqpl3M-jWTeaDhcSm2CyolUMie3oyifyh3fE]
	fmt.Println(m)
}
```

---

### 名称规范

1. 源文件名不包含大写

   get.go -> × getV3.go\
   get.go -> √ get3.go

2. 驼峰命名, 公开方法/值首字母大写,否则小写

---

### 补充

> [go 语言指针符号的\*和&](https://studygolang.com/articles/7412)

---

### TODO

```
var a =

var (
  a =
)
```

接口 type Sum struct {}

方法 func GetName()

标准写法:
首字母大写为公开
首字母小写为私有

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 阿里云效-go-mod

### 官方文档

> [代码服务常见问题 FAQ](https://help.aliyun.com/document_detail/217597.html#section-515-iz5-zp0)

---

### Go-env

可以通过设置系统环境变量和使用 `go env -w` 两种形式 <sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>, 前者权限大于后者, 推荐用后者 (已经测试好的配置, 尽量别改了)

```
# 代理服务列表
[Environment]::SetEnvironmentVariable('GOPROXY', 'https://goproxy.io,direct', 'User')
# GOSUMDB 建议留空, 速度慢点总比疯狂报错好
[Environment]::SetEnvironmentVariable('GOSUMDB', '', 'User')
# 代理黑名单 - 不走代理的域名; 公司用的私有库走代理是找不找的, 需要写进黑名单; 一般只需要改 GOPRIVATE, 后两个默认取 GOPRIVATE 所以不需要动
[Environment]::SetEnvironmentVariable('GOPRIVATE', 'codeup.aliyun.com', 'User')
[Environment]::SetEnvironmentVariable('GONOPROXY', 'codeup.aliyun.com', 'User')
[Environment]::SetEnvironmentVariable('GONOSUMDB', 'codeup.aliyun.com', 'User')

go env -w GOPROXY=https://goproxy.io,direct
go env -w GOSUMDB=
go env -w GOPRIVATE=codeup.aliyun.com
```

- 通过 `go env` 查看更改后的 (有时可能要重启才生效)

  ```console
  ╰─ go env
  set GO111MODULE=
  set GOARCH=amd64
  set GOBIN=
  set GOCACHE=C:\Users\Administrator\AppData\Local\go-build
  set GOENV=C:\Users\Administrator\AppData\Roaming\go\env
  set GOEXE=.exe
  set GOEXPERIMENT=
  set GOFLAGS=
  set GOHOSTARCH=amd64
  set GOHOSTOS=windows
  set GOINSECURE=
  set GOMODCACHE=D:\Scoop\apps\go-cn\current\global_path\pkg\mod
  set GONOPROXY=codeup.aliyun.com
  set GONOSUMDB=codeup.aliyun.com
  set GOOS=windows
  set GOPATH=D:\Scoop\apps\go-cn\current\global_path
  set GOPRIVATE=codeup.aliyun.com
  set GOPROXY=https://goproxy.io,direct
  set GOROOT=D:\Scoop\apps\go-cn\current
  set GOSUMDB=goproxy.io
  set GOTMPDIR=
  set GOTOOLDIR=D:\Scoop\apps\go-cn\current\pkg\tool\windows_amd64
  set GOVCS=
  set GOVERSION=go1.18.3
  set GCCGO=gccgo
  set GOAMD64=v1
  set AR=ar
  set CC=gcc
  set CXX=g++
  set CGO_ENABLED=1
  set GOMOD=NUL
  set GOWORK=
  set CGO_CFLAGS=-g -O2
  set CGO_CPPFLAGS=
  set CGO_CXXFLAGS=-g -O2
  set CGO_FFLAGS=-g -O2
  set CGO_LDFLAGS=-g -O2
  set PKG_CONFIG=pkg-config
  set GOGCCFLAGS=-m64 -mthreads -fmessage-length=0 -fdebug-prefix-map=C:\Users\ADMINI~1\AppData\Local\Temp\go-build3698608498=/tmp/go-build -gno-record-gcc-switches
  ```

---

### 鉴权失败问题

通过 go get 下载云效的私有 Mod 时需要做鉴权

在用户目录 `~/` 下新建 `.netrc` 或者 `_netrc` (对应 Linux/Mac 与 Windows), 添加如下内容

```
machine codeup.aliyun.com
login xxx
password xxxx
```

注意这里的用户名/密码是云效->个人设置->HTTPS 密码, 不是登录云效用的用户名/密码, 否则会出现以下报错 (环境变量/文件都配置对了但鉴权失败)

![](https://www.helloimg.com/images/2022/08/12/ZNwrjv.png)

> Error: unrecognized import path "codeup.aliyun.com/wenuts/basis/pollen": parse https://codeup.aliyun.com/wenuts/basis/pollen?go-get=1: no go-import meta tags ()

```
<!doctype html>
<html>
<head>
            <meta message='鉴权失败，请确认客户端是否配置&quot;.netrc&quot;文件,traceId:707c9fc316602743714102416e4ef0'>
    </head>
</html>
```

---

### Macos

```
go: codeup.aliyun.com/wenuts/basis/gox@v0.0.0-20220802063744-4facf115cdc5: invalid version: git ls-remote -q origin in /Users/weidows/go/pkg/mod/cache/vcs/94a54894325b8a8441b8518aba18b8841ef7b2b555fe37fcd220c2d9a7755096: exit status 128:
fatal: could not read Username for 'https://codeup.aliyun.com': terminal prompts disabled
Confirm the import path was entered correctly.
If this is a private repository, see https://golang.org/doc/faq#git_https for additional information.
```

照搬 windows 上已经配好的配置还是如上报错, 实际上 macos 上还需要在 ~/.gitconfig 里面添加如下 <sup id='cite_ref-9'>[\[9\]](#cite_note-9)</sup>

```
[url "git@codeup.aliyun.com:"]
	insteadOf = https://codeup.aliyun.com/
```

---

### GOSUMDB-代理问题

```
╰─ go get -u codeup.aliyun.com/wenuts/aimage/service
go: golang.org/x/crypto@v0.0.0-20210817164053-32db794688a5: verifying go.mod: invalid GOSUMDB: malformed verifier id
```

有时 GOSUMDB 设置代理会出现上面问题, 只需要把 GOSUMDB 置空就行:

```
go env -w GOSUMDB=
```

---

### hostname-无法解析

```
ssh: Could not resolve hostname codeup.aliyun.com: Name or service not known
Ping request could not find host codeup.aliyun.com. Please check the name and try again.
```

很奇葩的问题, 通过 ssh 推代码或者 ping 时都不通, 但是网页可以访问, 清理本机 DNS 缓存也不管用

直到换了个 WIFI 试了试...

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## proto-compile

```
protoc -I . -I D:\Scoop\apps\protobuf\21.4\include\google\protobuf --go_out=. --auxo_out=. --go_opt=paths=source_relative --auxo_opt=paths=source_relative *.proto
```

### protobuf-无法获取

手动下载的话可以参照: <sup id='cite_ref-8'>[\[8\]](#cite_note-8)</sup> 另外配置好下面提到的配置+有魔法能力, 不会出现这问题

```
go env -w GOPROXY=https://goproxy.io,direct
go env -w GOSUMDB=
```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-01' href='#cite_ref-01'>[1]</a>: [《Golang 区块链入门到实战\_以太坊/fabric》](https://www.zlkt.net/book/detail/9/257)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [私有模块](https://learnku.com/docs/go-mod/1.17/private-modules/11448)

<a name='cite_note-03' href='#cite_ref-03'>[3]</a>: [go mod init 在初始化时出现 cannot determine module path for source directory (outside GOPATH](https://blog.csdn.net/ciel_yu/article/details/107847578)

<a name='cite_note-05' href='#cite_ref-05'>[5]</a>: https://www.runoob.com/go/go-tutorial.html

<a name='cite_note-06' href='#cite_ref-06'>[6]</a>: [go 语言入门：package command-line-arguments is not a main package](https://blog.csdn.net/A_java_c/article/details/120006213)

<a name='cite_note-07' href='#cite_ref-07'>[7]</a>: [golang 之 import 和 package 的使用](https://segmentfault.com/a/1190000018235929)

<a name='cite_note-8' href='#cite_ref-8'>[8]</a>: [如何解决 Golang 获取 google.golang.org/protobuf 包报错的问题](https://blog.csdn.net/u012762986/article/details/120036268)

<a name='cite_note-9' href='#cite_ref-9'>[9]</a>: [使用 go get 或 go mod download 在私人儲存庫遇到 fatal: could not read Username for ‘https://github.com’: terminal prompts disabled](https://blog.clarence.tw/2021/02/15/use-go-get-or-go-mod-download-to-encounter-fatal-could-not-read-username-for-https-github-com-terminal-prompts-disabled/)
