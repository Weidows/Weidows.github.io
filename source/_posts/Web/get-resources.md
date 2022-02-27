---
title: 🌏媒体资源加密-and-解密获取
password: ""
tags:
  - 推荐
  - 浏览器
  - 扩展
  - FFmpeg
  - 算法
  - hexdump
  - HLS
  - openssl
  - shell
  - hexdump
  - 密码学
  - QQ
katex: false
comments: true
aside: true
date: 2022-02-22 19:49:20
cover: https://www.helloimg.com/images/2022/02/26/GVRlgX.png
top_img:
---

# 媒体资源加密-and-解密获取

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-26 17:40:40
 * @FilePath: \Blog-private\source\_posts\Web\get-resources.md
 * @Description:
 * @!: *********************************************************************
-->

```pullquote mindmap mindmap-md
- [媒体资源加密-and-解密获取](#媒体资源加密-and-解密获取)
  - [FFmpeg-HLS-AES_128_CBC](#ffmpeg-hls-aes_128_cbc)
    - [分片](#分片)
    - [分片作用-引子](#分片作用-引子)
    - [花活](#花活)
    - [加解密流程图](#加解密流程图)
    - [openssl-手动加密](#openssl-手动加密)
      - [encrypt-without-iv](#encrypt-without-iv)
      - [encrypt-with-iv](#encrypt-with-iv)
    - [FFmpeg-分片加密一条龙](#ffmpeg-分片加密一条龙)
    - [解密-合并](#解密-合并)
  - [获取](#获取)
    - [视频](#视频)
    - [网页图片](#网页图片)
    - [QQ-群图片](#qq-群图片)
  - [参照](#参照)
```

- 各类平台网页中的视频通常会被 `加密处理` 以防止别人拿走; 防盗技术还是有很多种的:<sup id='cite_ref-3'>[\[3\]](#cite_note-3)</sup>

  1. FFmpeg-HLS-AES_128_CBC 加密
  2. 验证用户身份再给链接(session,cookie)
  3. 视频加水印
  4. 限制跨域访问
  5. ...etc

下面只摸一下技术层面的 `1.`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## FFmpeg-HLS-AES_128_CBC

- 这么一坨 💩,什么意思嘛?

  FFmpeg 是最强大的视频编解码器, 可以把输入的视频处理成符合 HLS 规范的流媒体, 同时通过 AES-128-CBC 格式的秘钥加密视频

  浅入深出,别急慢慢吃.. 下面结合这个库动动手就明白了:<sup id='cite_ref-4'>[\[4\]](#cite_note-4)</sup>

  ***

### 分片

- 分片的方式比较简单,这里我们准备好一个 `demo.mp4`, 丢给 FFmpeg 下面的命令

  ```shell
  ffmpeg -i demo.mp4 -codec copy -f segment -segment_list index.m3u8 -segment_time 30 %d.ts
  ```

  执行完会出来下面这些东西,这些 ts 文件就是分成片的小段视频,此处没加密可以直接播放

  ![](https://www.helloimg.com/images/2022/02/26/GVRd0R.png)

  有些播放器支持的话 index.m3u8 也是可以播放的, 其实就是引用的这些 ts

  ***

- 上面命令中 `index.m3u8` 这个文件是分片的索引文件, 指明了 ts 文件的先后顺序,时长,版本和加密等信息

  > - TS: MPEG2-Transport Stream,高清相机拍摄视频的封装格式;特点就是要求从视频流的任一片段开始都是可以独立解码的
  > - m3u8: HTTP Live Streaming（HLS） 协议格式的基础,Unicode 版本的 M3U，此文件用 UTF-8 编码<sup id='cite_ref-01'>[\[1\]](#cite_note-01)</sup> \
  >   下图 index 就是 m3u8,作用就是索引 ts
  >   ![](https://www.helloimg.com/images/2022/02/26/GVRc4n.png)

  ***

- 喏,index.m3u8 文件内容应该能看懂

  ```m3u8
  #EXTM3U
  #EXT-X-VERSION:3
  #EXT-X-MEDIA-SEQUENCE:0
  #EXT-X-ALLOW-CACHE:YES
  #EXT-X-TARGETDURATION:32
  #EXTINF:30.720000,
  0.ts
  #EXTINF:29.280000,
  1.ts
  #EXTINF:31.880000,
  2.ts
  #EXTINF:29.040000,
  3.ts
  #EXTINF:29.320000,
  4.ts
  #EXTINF:6.280000,
  5.ts
  #EXT-X-ENDLIST
  ```

  ***

### 分片作用-引子

1. 分段加载视频而不是一口气加载到底

   大部分视频用户不会完完整整的看,分段加载减轻服务器压力,也使用户体验好

   (好几 G 的电影,一口气加载到底, 内存/缓存遭不住...)

2. 分片可以让用户无法`直接通过链接`在浏览器获取`完整的 mp4 视频`

   但,可以通过获取所有 ts 文件合并为 mp4

   插件市场的一些插件可以通过 .m3u8 获取并合并.ts 间接获取完整的 .MP4

于是为了反破解出现了 `某些花活` 和 `视频加密`

---

### 花活

1. 把 .m3u8 文件伪装成 .mp4, 可以让大部分没有伪装识别能力的爬虫找不着北 (比如 CoCocut)

   ![](https://www.helloimg.com/images/2022/02/26/GVRSwv.png)
   ![](https://www.helloimg.com/images/2022/02/26/GVRTHM.png)

2. m3u8 中多层嵌套 m3u8 (套娃), 有些爬虫是支持的, 有的 G 了

   ```
   #EXTM3U
   #EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1064000
   1000kbps.m3u8
   #EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=564000
   500kbps.m3u8
   #EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=282000
   250kbps.m3u8
   #EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2128000
   2000kbps.m3u8
   ```

3. ...etc

---

### 加解密流程图

原创哦,转载请标记

![](https://www.helloimg.com/images/2022/02/26/GVRvhz.png)

---

### openssl-手动加密

#### encrypt-without-iv

此处通过 shell 脚本分析,墙裂建议结合仓库学习:<sup id='cite_ref-4'>[\[4\]](#cite_note-4)</sup>

```shell
workPath="2.encrypted-without-iv"

# 清除原先的
rm -rf $workPath/*

# 分片
ffmpeg -i demo.mp4 -codec copy -f segment -segment_list $workPath/index.m3u8 -segment_time 30 $workPath/%d.ts

# 获取加密秘钥
# openssl rand 16
#   随机生成 16B 二进制数据 (16*8=128 位, 对应AES-128-CBC名称)
#
# tee -a $workPath/enc.key
#   将生成的数据输出到秘钥文件 enc.key, 同时把数据交给 hexdump 处理
#
# hexdump -e '16/1 "%02x"'
#   hexdump -e 'a/b format1 format2'
#     a个字节/8位 -> format2 (a可省,默认为1)
#     b个字节/8位 -> format1
#     详见: https://blog.csdn.net/bytxl/article/details/43738103
#
#   每1字节/8位 -> %02x -> 2位16进制
#     也就是二进制转16进制,每4位合1位, 128/4=32位16进制
#   每16字节的结果为1行, 那去掉这个16可以吗?
#     应该是不行的,结果会出错,例如:
#     4a6afd460c84c498b8a817ad66392ef2 √
#     46fd6a4a98c4840cad17a8b8f22e3966 ×
encryptionKey=`openssl rand 16 | tee -a $workPath/enc.key | hexdump -e '16/1 "%02x"'`

# ts 文件数
numberOfTsFiles=`ls $workPath/*.ts | wc -l`

for ((i=0; i<$numberOfTsFiles; i ++)) do
    # without-iv也就是默认iv为32位文件序列号
    #   如 5.ts -> 00000000000000000000000000000005
    initializationVector=`printf '%032x' $i`

    # 对每个分片加密
    openssl aes-128-cbc -e -in $workPath/$i.ts -out $workPath/enc_$i.ts -nosalt -iv $initializationVector -K $encryptionKey
done

# 寻找并添加加密方法和秘钥URL
#   找 "#EXT-X-TARGETDURATION:" 这一段,并在下一行添加
#   #EXT-X-KEY:METHOD=AES-128,URI="enc.key"
sed '/#EXT-X-TARGETDURATION:/a #EXT-X-KEY:METHOD=AES-128,URI="enc.key"' $workPath/index.m3u8 > $workPath/index_new.m3u8

# 覆盖
mv $workPath/index_new.m3u8 $workPath/index.m3u8
```

- 如图,加密后的 ts 就不能直接播放了

  ![](https://www.helloimg.com/images/2022/02/26/GVRzam.png)

---

#### encrypt-with-iv

这个 iv (initialisation vector,初始化向量) 有点迷, 作用是增强随机性

```shell
workPath="3.encrypted-with-iv"

rm -rf $workPath/*

ffmpeg -i demo.mp4 -codec copy -f segment -segment_list $workPath/index.m3u8 -segment_time 30 $workPath/%d.ts

encryptionKey=`openssl rand 16 | tee -a $workPath/enc.key | hexdump -e '16/1 "%02x"'`

# ivKey 偏移量,32位16进制数据,如: f86b5decdb6359cb1023e308651dccfb
# 不需要另存文件, 只需要写在 m3u8 文件里
ivKey=`openssl rand -hex 16`

numberOfTsFiles=`ls $workPath/*.ts | wc -l`

for ((i=0; i<$numberOfTsFiles; i ++)) do
    openssl aes-128-cbc -e -in $workPath/$i.ts -out $workPath/enc_$i.ts -nosalt -iv $ivKey -K $encryptionKey
done

# 下面 ${ivKey} 需要获取变量,所以字符串要用""而不能是''
sed "/#EXT-X-TARGETDURATION:/a #EXT-X-KEY:METHOD=AES-128,URI=\"enc.key\",IV=0x${ivKey}" $workPath/index.m3u8 > $workPath/index_new.m3u8

mv $workPath/index_new.m3u8 $workPath/index.m3u8
```

---

### FFmpeg-分片加密一条龙

```shell
workPath="4.encrypt-with-FFmpeg"
urlPrefix="weidows.com"

rm -rf $workPath/*

# enc.keyinfo
#   写到 m3u8 里的 keyURL | https://hlsbook.net/enc.key
#   加密用的 key 文件地址  | enc.key
#   IV值 (可选)          | ecd0d06eaf884d8226c33928e87efa33
#   详见: https://hlsbook.net/how-to-encrypt-hls-video-with-ffmpeg/

openssl rand 16 > $workPath/enc.key

tmpfile=`mktemp`
echo $urlPrefix/enc.key > $tmpfile
echo $workPath/enc.key >> $tmpfile
echo `openssl rand -hex 16` >> $tmpfile
mv $tmpfile $workPath/enc.keyinfo

ffmpeg -y -i demo.mp4 -c copy -hls_time 30 -hls_key_info_file $workPath/enc.keyinfo -hls_playlist_type vod -hls_segment_filename $workPath/enc_%d.ts $workPath/index.m3u8
```

- index.m3u8

  可见生成的没什么问题,而且可以通过下面的方法正常解密

  ```
  #EXTM3U
  #EXT-X-VERSION:3
  #EXT-X-TARGETDURATION:32
  #EXT-X-MEDIA-SEQUENCE:0
  #EXT-X-PLAYLIST-TYPE:VOD
  #EXT-X-KEY:METHOD=AES-128,URI="./enc.key",IV=0x2b5cc8a84648ed8ce5f64e5845d3cb7c
  #EXTINF:30.720000,
  enc_0.ts
  #EXTINF:29.280000,
  enc_1.ts
  #EXTINF:31.880000,
  enc_2.ts
  #EXTINF:29.040000,
  enc_3.ts
  #EXTINF:29.320000,
  enc_4.ts
  #EXTINF:6.280000,
  enc_5.ts
  #EXT-X-ENDLIST
  ```

---

### 解密-合并

上面加密会了的话,解密就简单了,完全就是反过来

合并方法取自: <sup id='cite_ref-6'>[\[6\]](#cite_note-6)</sup>

这篇文章<sup id='cite_ref-5'>[\[5\]](#cite_note-5)</sup>简单介绍了下如何手动解密,其文中把 key 和 iv 位数标错为 16 了,别误解

```shell
# inputPath="2.encrypted-without-iv"
# ivKey=""

# inputPath="3.encrypted-with-iv"
# ivKey="0d5cce6d9fbfae9dcc86cb3f12d4eb4b"

# 加密 enc_*.ts 输入路径
inputPath="4.encrypt-with-FFmpeg"
ivKey="36bb7a1e43e1d3d88b779243817a67bc"

# 解密 dec_*.ts 和合并后 mp4 输出路径
outputPath="5.decrypt"

rm -rf $outputPath/*

encryptionKey=$(hexdump -e '16/1 "%02x"' $inputPath/enc.key)

numberOfTsFiles=`ls $inputPath/enc_*.ts | wc -l`

for ((i=0; i<$numberOfTsFiles; i ++)) do
    if [[ $ivKey == "" ]]; then
        ivKey=$(printf '%032x' $i)
    fi

    openssl aes-128-cbc -d -in $inputPath/enc_$i.ts -out $outputPath/dec_$i.ts -nosalt -iv $ivKey -K $encryptionKey
done

# 合并
ffmpeg -allowed_extensions ALL -i $inputPath/index.m3u8 -acodec copy -vcodec copy -f mp4 $outputPath/combine.mp4
```

- 如图 `dec_*.ts` 为解密后的文件,可以直接播放了

  ![](https://www.helloimg.com/images/2022/02/26/GVR0xA.png)

  可以看项目中的 `5.`, 合并后的 mp4 也没有问题

  但 原视频 != 分片加解密合并后的视频, 大小差不多但是会有差异 (9.87MB vs 9.95MB)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 获取

下面就是对资源获取方式的 `推荐` 了

### 视频

> CoCocut: 这个插件官方直接说了不支持爬加密视频,但是大部分平台用起来~~还是很棒的~~,插件中最棒的\
> 有个小弊病, 它不开会员的话是超慢的单线程下载.... 我常用它获取 m3u8 地址让下面这伙计下载

> [N_m3u8DL-CLI](https://github.com/nilaoda/N_m3u8DL-CLI): 这家伙可以通过 m3u8 下载加密视频; 支持多线程,很快

> QQ 浏览器手机 app, 直接进对应网页就可以爬下来视频,加密的也可以,速度拉满 (小母牛倒立 🐄🍺

---

### 网页图片

下面两个差不多,都是把页面现有的图片都扒下来, `按域名分类`,很容易筛选出来

这方法并不适用于获取视频.

> 梦想资源下载器

> 网页右键另存为
> ![](https://www.helloimg.com/images/2022/02/26/GVRbW9.png)

### QQ-群图片

经常有老哥在群里发图,苦于一张张保存手抽筋,发现了此方法:

1. 打开电脑版消息管理器,找到那些聊天记录

   ![](https://www.helloimg.com/images/2022/02/26/GVRQg0.png)

2. 选择,复制

   ![](https://www.helloimg.com/images/2022/02/26/GVRN95.png)

3. 发送给 `我的手机`

   ![](https://www.helloimg.com/images/2022/02/26/GVR7Hh.png)

4. 然后就无了, 这手段对于保存好几十/上百张图十分便利

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 参照

<a name='cite_note-01' href='#cite_ref-01'>[1]</a>: [HLS 协议介绍](https://www.jianshu.com/p/426425cad08a)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: https://github.com/fftt2017/hls-m3u8-sample

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [在线教育类网站视频加密视频安全的一些方法](https://zhuanlan.zhihu.com/p/32014463)

<a name='cite_note-4' href='#cite_ref-4'>[4]</a>: https://github.com/Weidows-projects/hls-m3u8-sample, 此库是在<sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>的基础上改进的

<a name='cite_note-5' href='#cite_ref-5'>[5]</a>: [解密 m3u8 文件, ts 文件解密, hls 解密.](https://www.52pojie.cn/thread-971265-1-1.html)

<a name='cite_note-6' href='#cite_ref-6'>[6]</a>: [ffmpeg-简单 AES 加解密记录](https://blog.csdn.net/Yao_2333/article/details/82910560)
