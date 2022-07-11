---
title: 🐍Hexo-一篇概全
date: 2020-08-25 00:05:52
password: ""
tags:
  - Hexo
  - 备忘录
  - Website
  - nodejs
  - npm
  - Pjax
  - HTML
  - CSS
  - doing
cover: https://www.helloimg.com/images/2022/02/27/GVJnSE.png
---

# Hexo-淦翻各种插件安装-调试

<!--
 * @Author: Weidows
 * @Date: 2020-08-25 00:05:52
 * @LastEditors: Weidows
 * @LastEditTime: 2022-07-11 08:49:25
 * @FilePath: \Blog-private\source\_posts\Web\Node\Hexo\Hexo-all.md
-->

{% pullquote mindmap mindmap-md %}

- [Hexo-淦翻各种插件安装-调试](#hexo-淦翻各种插件安装-调试)
  - [初始化](#初始化)
    - [常用命令](#常用命令)
    - [安装渲染器](#安装渲染器)
    - [page-页面](#page-页面)
  - [各种插件](#各种插件)
  - [一键三连](#一键三连)
  - [自定义渲染注入](#自定义渲染注入)
    - [通过主题文件注入](#通过主题文件注入)
    - [通过修改内部文件注入](#通过修改内部文件注入)
  - [常见问题](#常见问题)
    - [bangumis-steam-页面图片无法加载](#bangumis-steam-页面图片无法加载)
    - [Pjax-渲染失效解决方案](#pjax-渲染失效解决方案)
  - [借物表](#借物表)

{% endpullquote %}

## 初始化

### 常用命令

```shell
# 安装 Hexo-cli (需要全局安装)
npm install -g hexo-cli

# 初始化博客
hexo init 博客名

# 安装/删除插件
# 安装过的插件会在 root/package.json 里显示
npm install hexo-xxx --save
npm uninstall hexo-xxx

# 新建文章/页面
Hexo new post 名
Hexo new page 名
```

---

### 安装渲染器

pug 和 stylus 渲染器, 如下报错是因为没安装

> extends includes/layout.pug block content #recent-posts.recent-posts include includes/recent-posts.pug include includes/pagination.pug

```shell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

---

### page-页面

可以通过修改 top_img 来更换头图 (cover 是针对 post 文章的,在此无效)

不能打 tag 和 categories(编译报错)

- tags / categories

  ```
  hexo new page tags
  hexo new page categories
  ```

- link

  ```
  hexo new page link
  ```

  在 `source/_data/link.yml` 里添加数据,如下:

  还可以在 link.md 中自定义样式 (写的内容显示在友链下方)

  ```yml
  - class_name: 友情鏈接
    class_desc: 那些人，那些事
    link_list:
      - name: JerryC
        link: https://jerryc.me/
        avatar: https://jerryc.me/image/avatar.png
        descr: 今日事,今日畢
      - name: Hexo
        link: https://hexo.io/zh-tw/
        avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
        descr: 快速、簡單且強大的網誌框架

  - class_name: 網站
    class_desc: 值得推薦的網站
    link_list:
      - name: Youtube
        link: https://www.youtube.com/
        avatar: https://fastly.jsdelivr.net/gh/Weidows/Images/post/9ZkGg8v3azHJfM1.png
        descr: 視頻網站
      - name: Weibo
        link: https://www.weibo.com/
        avatar: https://fastly.jsdelivr.net/gh/Weidows/Images/post/TLJBum386vcnI1P.png
        descr: 中國最大社交分享平台
      - name: Twitter
        link: https://twitter.com/
        avatar: https://fastly.jsdelivr.net/gh/Weidows/Images/post/5VyHPQqR6LWF39a.png
        descr: 社交分享平台
  ```

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 各种插件

{% tabs deployer %}

  <!-- tab deployer -->

    - 安装:

      ```
      npm install hexo-deployer-git --save
      ```

    - 官方配置文档(必要)<sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>, 个人配置

      ```yml
      deploy:
        - type: git
          repo: https://gitee.com/Weidows/Weidows.git
          branch: main
        - type: git
          repo: https://github.com/Weidows/Weidows.github.io.git
          branch: main
      ```

    - 使用:

      ```
      hexo deploy
      ```

      也可以参照下面一条龙服务自行添加快捷方式.

  <!-- endtab -->

  <!-- tab Live2D -->

    ```shell
    npm install --save hexo-helper-live2d
    ```

    白猫 / 黑猫

    ```
    npm install --save live2d-widget-model-tororo live2d-widget-model-hijiki
    ```

    - 启用模型: 在`/_config.yml` 里找到 model.use 改成想用的模型文件夹名

  <!-- endtab -->

  <!-- tab Steam-游戏页面 -->

    - 安装

      ```
      npm install hexo-steam-games --save
      ```

    - 配置

      ```yml
      steam:
        enable: true
        steamId: "xxx" # steam64位Id(需要放在引号里),将steam库设置为公开
        path: tags/games.html # 页面路径，默认steamgames/index.html
        title: ⭐️养鸡场⭐️
        quote: "Steam给爷爬!别让我家EPIC误会" # 写在页面开头的一段话,支持html语法
        tab: all # all或recent, all: 所有游戏, recent: 最近游玩的游戏
        length: 1000
        imgUrl: "https://www.helloimg.com/images/2022/07/01/ZMNK9R.png" # 图片链接，在quote下面放一张图片，图片链接到Steam个人资料，可留空
        proxy: # 如果无法访问steam社区的话请使用代理
          host: # 代理ip或域名
          port: # 代理端口
      ```

      ***

    - 使用:

      `Hexo g` 之前 `hexo steam -u`, 如果失败需要手动:

      浏览器打开`https://steamcommunity.com/profiles/76561198321099712/games/?tab=all` {steamId}和{tab}分别替换为上面配置中提到的 steamId 和 tab

      F12 控制台 console 输入下面内容执行:

      ```js
      let script = jQuery('script[language="javascript"]');
      var games = [];
      for (let i = 0; i < script.length; i++) {
        if (script.eq(i).html().includes("rgGames")) {
          let rgGames = script.eq(i).html().match(/var.*?rgGames.*?=.*?(\[[\w\W]*?\}\}\]);/);
          if (rgGames) {
            games = JSON.parse(rgGames[1]);
            break;
          }
        }
      }
      document.write(JSON.stringify(games))
      ```

      生成的内容复制到`root/node_modules/hexo-steam-games/data/games.json`

      这个不用 new 页面(但是数据文件路径无法改)

  <!-- endtab -->

  <!-- tab bilibili-番剧 -->

    - 安装:

      ```
      npm install hexo-bilibili-bangumi --save
      ```

    - 配置: 写入`root/_config.yml`

      ```yml
      bangumi:
        enable: true
        path: #页面路径
        vmid: ## 哔哩哔哩番剧页面的 vmid(uid)
        title: "追番列表" ## 页面的标题
        quote: "生命不息，追番不止！" ## 写在页面开头的一段话，支持 html 语法
        show: 1 ## 初始显示页面：0: 想看 , 1: 在看 , 2: 看过，默认为 1
        loading: ## 图片加载完成前的 loading 图片
        metaColor: ##  meta 部分(简介上方)字体颜色
        color: ## 简介字体颜色
        webp:
        progress: ## 获取番剧数据时是否显示进度条，默认true
      ```

    - 可选创建页面,进入 root/命令行,执行: `hexo new page bangumis` ;当然也可以直接在 source/直接新建一个 markdown,然后把文件头 type 写为:`type: "bangumis"`

      尝试过可以不用.md,在\_data 里只放上数据文件 bangumis.json 就可以在指定路径生成了

    - 更新/删除数据:

      ```
      hexo bangumi -u
      hexo bangumi -d
      ```

  <!-- endtab -->

  <!-- tab Meting -->

    > 吸底 mini 播放器

    - 需要导入 js 并通过导入 css 修改 Aplayer 缩进样式:

      在\_config.yml 里修改有一定限制,inject 只能搞腚 source 中文章的其中某一层目录,多层需要不同层级目录各引用一次,如下:

      ```yml
      inject:
        head:
          ## - <link rel="stylesheet" href="./css/mine.css">
        bottom:
          ## - <script src="./js/mine.js"></script>
          ## - <script src="../js/mine.js"></script>
          ## - <script src="../../js/mine.js"></script>
          ## - <script src="../../../js/mine_post.js"></script>
      ```

    - 这里介绍另一种全局 inject 的方法:

      找到 theme/xxx/layout/includes/layout.pug, 在最后添加如下字段:

      ```
      script(src='js/mine.js')
      link(rel='stylesheet', href='css/mine.css')
      ```

      按照上面可以自行修改 JS/CSS 的引入,全局生效(注意有可能 PJAX 会使这种引入的 Js 无效化)

  <!-- endtab -->

  <!-- tab Gulp -->

    > 用于压缩文件, 参考文章 <sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

    - Cli 和模块

      ```shell
      npm install gulp -g
      npm install gulp-htmlclean gulp-htmlmin gulp-imagemin gulp-minify-css gulp-uglify --save
      ```

    - 在博客根目录新建`gulpfile.js`

      ```js
      var gulp = require("gulp");
      var minifycss = require("gulp-minify-css");
      var uglify = require("gulp-uglify");
      var htmlmin = require("gulp-htmlmin");
      var htmlclean = require("gulp-htmlclean");
      var imagemin = require("gulp-imagemin");

      // 压缩html
      gulp.task("minify-html", function () {
        return gulp
          .src("./public/**/*.html")
          .pipe(htmlclean())
          .pipe(
            htmlmin({
              removeComments: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            })
          )
          .pipe(gulp.dest("./public"));
      });

      // 压缩css
      gulp.task("minify-css", function () {
        return gulp
          .src("./public/**/*.css")
          .pipe(
            minifycss({
              compatibility: "ie8",
            })
          )
          .pipe(gulp.dest("./public"));
      });

      // 压缩js
      gulp.task("minify-js", function () {
        return gulp
          .src("./public/js/**/*.js")
          .pipe(uglify())
          .pipe(gulp.dest("./public"));
      });

      // 压缩图片
      gulp.task("minify-images", function () {
        return gulp
          .src("./public/images/**/*.*")
          .pipe(
            imagemin(
              [
                imagemin.gifsicle({ optimizationLevel: 3 }),
                imagemin.jpegtran({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 7 }),
                imagemin.svgo(),
              ],
              { verbose: true }
            )
          )
          .pipe(gulp.dest("./public/images"));
      });

      // 默认任务
      gulp.task("default", [
        "minify-html",
        "minify-css",
        "minify-js",
        "minify-images",
      ]);
      ```

    - 然后`gulp`就可以压缩了.

  <!-- endtab -->

  <!-- tab 豆瓣(已停用) -->

    - 安装

      ```
      npm install hexo-douban --save
      ```

    - 使用

      ```yml
      douban:
        user: userID # 你的豆瓣 ID.打开豆瓣，登入账户，然后在右上角点击 "个人主页" ，这时候地址栏的 URL 大概是这样："https://www.douban.com/people/xxxxxx/" ，其中的"xxxxxx"就是你的个人 ID 了。
        builtin: true # 是否将生成页面的功能嵌入 hexo s 和 hexo g 中，默认是 false,另一可选项为 true(1.x.x 版本新增配置项)。
        timeout: 10000 # 爬取数据的超时时间，默认是 10000ms ,如果在使用时发现报了超时的错(ETIMEOUT)可以把这个数据设置的大一点。
        # 如果只想显示某一个页面(比如 movie)，那就把其他的配置项注释掉即可。
        book:
          title: "My book title" # 该页面的标题
          quote: "My book quote" # 写在页面开头的一段话,支持 html 语法.
        movie:
          title: "My movie title"
          quote: "My movie quote"
        game:
          title: "My game title"
          quote: "My game quote"
      ```

  <!-- endtab -->

  <!-- tab Random-页面 -->

    - 安装依赖和插件

      ```
      npm install object-assign hexo-generator-random --save
      ```

    - 应用

      插件会在根目录生成 `random.html`.

  <!-- endtab -->

  <!-- tab neat-压缩 -->

    - 安装

      ```
      npm install hexo-neat --save
      ```

    - 配置

      ```yml
      # 博文压缩
      neat_enable: true
      neat_html:
        enable: true
        exclude:
      neat_css:
        enable: true
        exclude:
          - "**/*.min.css"
      neat_js:
        enable: true
        mangle: true
        output:
        compress:
        exclude:
          - "**/*.min.js"
          - "**/jquery.fancybox.pack.js"
          - "**/index.js"
      ```

  <!-- endtab -->

{% endtabs %}

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 一键三连

- 正常的测试流程为

  1. hexo clean
  2. hexo generate
  3. hexo server

- 每次生成需要等一段时间,怎么把它们合成为一条指令呢?参下:

  定位博客根目录下的`package.json`, 修改`"scripts"`

  ```
  "scripts": {
    "all": "hexo clean && hexo generate && hexo server"
  }
  ```

- 然后就可以一键使用了.

  <img src="https://www.helloimg.com/images/2022/02/27/GVty2h.png" alt="20201205150401" />

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 自定义渲染注入

### 通过主题文件注入

- 一般是写在`theme/xxx/source/`里的`js/css`里面

  随便起个名字,比如我的叫 mine.js 和 mine.css,里面写上需要的内容

  在主题配置文件`_config.yml`里找到`inject:`字段,一般 css 在 head,js 在 bottom 里,如下:

  ```
  inject:
    head:
      - <link rel="stylesheet" href="./css/mine.css">
    bottom:
      - <script src="./js/mine.js"></script>
  ```

- 但是务必注意这样引入只对`某一层`目录生效,比如上面只对 public/第一层目录生效,其中子目录无效,如果想使其生效:

  ```
  inject:
    head:
      - <link rel="stylesheet" href="./css/mine.css">
      - <link rel="stylesheet" href="../css/mine.css">
      - <link rel="stylesheet" href="../../css/mine.css">
    bottom:
      - <script src="./js/mine.js"></script>
      - <script src="../js/mine.js"></script>
      - <script src="../../js/mine.js"></script>
  ```

- 喏,这样是让第一二三层生效了,以此类推.

---

### 通过修改内部文件注入

- 首先操作如上面一样新建文件并写好 js 和 css 文件,只是注入方式不同

  找到`theme/xxx/layout/include/layout.pug`,在内部添加如下:

  ```
  script(src='js/mine.js')
  link(rel='stylesheet', href='css/mine.css')
  ```

  这两个分别是引入 js 和 css,可以分别在 body 和 head 里加入,注意缩进格式!

  ***

- 解释:
  在 Hexo generate 时会把`theme/xxx/source/`里你写的文件复制到`public/`对应目录里

  一般 Hexo 在引用时根目录是`public/`,所以上面找的是`public/js/mine.js`和`public/css/mine.css`

  这样注入可能因为渲染位置和时机不对而未生效,需要酌情使用

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 常见问题

### bangumis-steam-页面图片无法加载

![](https://www.helloimg.com/images/2022/06/30/ZMAUSX.png)

可能是 lazyload-field 设置为 site 了 (全局), 把它改为 post 就行了

```yml
lazyload:
  enable: true
  field: post # site/post
```

---

### Pjax-渲染失效解决方案

用过的都知道 Pjax 可以让网页在非跳转的情况下局部刷新来使网页加载速度提升

但是会带来非常多的 Bug,比如某些依赖 JS 渲染和加载的插件无效化,或者监听和交互不奏效

网上搜的有些是让各种插件本身屈服 Pjax 各种修改渲染策略

这里提出一个虽然不是新方法但是也是个不错的解决方案:

---

- 文件定位:

  这里修改的是 Butterfly 自带的 Pjax 第三方 pug,如有不同需要自行查找

  1. 找到`themes/butterfly/layout/includes/third-party/pjax.pug`,打开开始修改

  2. 定位 `document.addEventListener('pjax:complete', function ()`这一行,这是监听 Pjax 跳转页面是否完成的函数,并执行跳转完成后的指令

  3. 复制需要重载的 JS,粘贴到这个函数括号内部,并 Hexo Server 测试一下

- 原理就是让 Pjax 加载完成页面后再让 JS 渲染一遍(但是可能有些局部渲染还是无法生效)

<a>![分割线](https://www.helloimg.com/images/2022/07/01/ZM0SoX.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: https://github.com/hexojs/hexo-deployer-git

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [Hexo 博客之速度优化](https://blog.csdn.net/fengdi_yuxi/article/details/94402350)
