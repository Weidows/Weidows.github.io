---
title: buffer
password: ""
tags:
katex: false
comments: true
aside: true
date: 2022-04-16 00:38:40
cover:
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2022-04-16 00:38:40
 * @LastEditors: Weidows
 * @LastEditTime: 2022-09-09 16:09:18
 * @FilePath: \Blog-private\source\_drafts\buffer.md
 * @Description:
 * @!: *********************************************************************
-->

## 点云

### CloudCompare

默认密度颜色 蓝->绿->黄->红

双击右键拖动, 按下中键上下移动会缩放

---

### PCD-Decode

如下通过 ImHex 提取出来的 PCD 文件头, 第三行说的是含有反射率 intensity 信息

```
# .PCD v0.7 - Point Cloud Data file format
VERSION 0.7
FIELDS x y z intensity
SIZE 4 4 4 4
TYPE F F F F
COUNT 1 1 1 1
WIDTH 54298
HEIGHT 1
VIEWPOINT 0 0 0 1 0 0 0
POINTS 54298
DATA binary_compressed
5�
```

重新下载了游戏打入 mod 还是跳红字，解决方法如下，up 看着该更新了
1、warning: unrecognised entry: run = commandlist\guicvm_modcountinc、shader not found: ...\draw_2d.hlsl
无效入口关于 guicvm，这玩意红字跳了五页多，去 loverslab 下载 GUICVM_base_package_v1.3 放入 Mods 文件夹和 ShaderFixes 文件夹即可
2、warning: unrecognised entry: resource\mods\costumes\costumecustomizer\marie.ini\...
无效入口关于 ccmod 下的 marie.ini，红字跳了两页多，经查最新的 ccmod 是 v2.4，把除文件夹以外的 ccmod 各种.dll、.ini、.bin 等等都覆盖到目录下更新即可，v2.4 的.ini 还要求 241-480 文件夹，还跳红字就把 241-480 文件夹粘贴补上，懒得改.ini 了
3、shaderoverrule 的一些冲突，到对应的.ini 里加上 allow_duplicate_hash=overrule 即可
4、最后打开游戏只跳四行红字即正常，preset=active 的什么什么

快捷键 ctrl+z，x，c 可以切换部分 mod 衣服模式 F2 开关全部 mod 表情 mod，按键是 alt+1K 调眼睛 L 调口红 A/S 微表情（微笑 沮丧等） D/F 吐舌 M+1 调纹身 M+2 开关
ctrl+h 发色
ctrl+z 褪色
ctrl+x 褪色
ctrl+q 换脸
高雄 mod 使用前要穿上命叫高雄的衣服按 F3 出现菜单

golang string 转 \*string

比如"abc"
无法直接通过 &"abc" 取到 \*string, 需要先出个变量

v := "abc"

&v 就可以取到了

pacman -Syu

> :: File /var/cache/pacman/pkg/gnupg-2.2.38-1-x86_64.pkg.tar.zst is corrupted (invalid or corrupted package (PGP signature)).
> https://www.cnblogs.com/zhuxiaoxi/p/7630834.html
> pacman -S archlinux-keyring

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

![](https://www.helloimg.com/images/2022/09/05/Z7DeQY.png)

```
import (
	_ "codeup.aliyun.com/wenuts/aimage/api/handler"
	_ "codeup.aliyun.com/wenuts/aimage/api/security"
	"github.com/cuigh/auxo/app"
	"github.com/cuigh/auxo/app/flag"
	"github.com/cuigh/auxo/app/ioc"
	_ "github.com/cuigh/auxo/cache/memory"
	_ "github.com/cuigh/auxo/cache/redis"
	"github.com/cuigh/auxo/config"
	"github.com/cuigh/auxo/data/valid"
	"github.com/cuigh/auxo/errors"
	_ "github.com/cuigh/auxo/net/rpc/codec/proto"
	_ "github.com/cuigh/auxo/net/rpc/resolver/dns"
	"github.com/cuigh/auxo/net/web"
	"github.com/cuigh/auxo/net/web/filter"
	"net/http"
	"os"
)
```

get CKG:alive_limit-18330785221@get CKG:verify_code: rhu63d: 602199

![](https://www.helloimg.com/images/2022/09/08/ZDfGKY.png)

netstat -ano |findstr "8000"
ps | grep 17348

https://www.cnblogs.com/luckyplj/p/11843688.html


```
# github.com/sbinet/go-python
In file included from D:\Scoop\apps\go-cn\current\global_path\pkg\mod\github.com\sbinet\go-python@v0.1.0\capi.go:3:
./go-python.h:4:10: fatal error: Python.h: No such file or directory
    4 | #include "Python.h"
      |          ^~~~~~~~~~
compilation terminated.
```

github.com/sbinet/go-python
因为 go-python 调的是 python2, 不兼容 python3
github.com/go-python/cpy3

pkg-config: exec: "pkg-config": executable file not found in %PATH%
没装这个软件
