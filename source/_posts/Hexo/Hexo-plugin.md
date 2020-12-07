---
title: 淦翻Hexo各种插件安装+调试
categories:
  - Hexo
tags:
  - Hexo
  - 备忘录
  - Website
  - Node.Js
  - npm
cover: https://i.loli.net/2020/11/30/kMeomhHj91xn6T2.jpg
---

<!--
 * @Author: Weidows
 * @Date: 2020-08-25 00:05:52
 * @LastEditors: Weidows
 * @LastEditTime: 2020-12-06 19:29:40
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog-private\source\_posts\Hexo\Hexo-plugin.md
-->

# 常用的 Hexo 自身命令

- 安装 Hexo-cli(命令行支持插件,它自动包含 hexo 本身)

  ```
  npm install -g hexo-cli
  ```

- 查看版本

  ```
  hexo version
  ```

- 升级

  ```
  npm update hexo
  ```

- 初始化博客

  ```
  hexo init 博客名
  ```

- 删除插件

  ```
  npm uninstall hexo-xxx
  ```

- 新建页面

  ```
  Hexo new page page 名
  ```

- 安装过的插件会在 root/package.json 里显示

---

# 安装渲染器

- pug 和 stylus 渲染器

  ```shell
  npm install hexo-renderer-pug hexo-renderer-stylus
  ```

---

# 添加标签 tags/分类 categories/友链 link 页面

## tags

```
hexo new page tags
```

## categories

```
hexo new page categories
```

## link

```
hexo new page link
```

- 另外还需要在 `source/_data/link.yml` 里添加数据,如:

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
        avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
        descr: 視頻網站
      - name: Weibo
        link: https://www.weibo.com/
        avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
        descr: 中國最大社交分享平台
      - name: Twitter
        link: https://twitter.com/
        avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
        descr: 社交分享平台
  ```

- 最后,还可以在 link.md 中自定义样式(写的内容显示在友链下方)

---

# 安装 deployer

- (这个不能用阿里源) && 编译部署三部曲(GitHub 需要,Gitee 不用)
- 安装:

  ```
  npm install hexo-deployer-git --save
  ```

- [官方配置文档(必要)](https://github.com/hexojs/hexo-deployer-git)

  - 个人配置

  ```yml
  deploy:
    - type: git
      repo: https://gitee.com/Weidows/Weidows.git
      branch: main
    - type: git
      repo: https://github.com/Weidows/Weidows.github.io.git
      branch: main
  ```

- 使用:在博客根目录使用命令`hexo deploy`
  - 也可以参照下面一条龙服务自行添加快捷方式.

---

# 一条龙服务

- 正常的测试流程为

  - hexo clean
  - hexo generate
  - hexo server

- 每次生成需要等一段时间,怎么把它们合成为一条指令呢?参下:

- 定位博客根目录下的`package.json`
  - 修改`"scripts"`,如下`"all"`就是新添加的:
  ```
  "scripts": {
    "build": "hexo generate",
    "clean": "hexo clean",
    "deploy": "hexo deploy",
    "server": "hexo server",
    "all": "hexo clean && hexo generate && hexo server"
  }
  ```
- 然后就可以一键使用了.

  <img src="https://i.loli.net/2020/12/05/CP6l7n1HmQ3uKaU.png" alt="20201205150401" />

---

# 安装 Live2D

- 安装:(不能用 npm 这俩二选一)
  - `npm install --save hexo-helper-live2d`
- 导入模型:
  - 白猫:npm install live2d-widget-model-tororo
  - 黑猫:npm install live2d-widget-model-hijiki
- 启用模型:
  在`/_config.yml` 里找到 model.use 改成想用的模型文件夹名

---

# 启用 comment && search && 字数统计

- 依次都装上:
  - `npm install hexo-generator-search --save`
  - `npm install hexo-wordcount --save`
- 然后把主题里的\_config.yml 改改
- 需要注意 comment 插件有些主题自带,不需要安装(butterfly)
- 在 source/data/里新建 valine.json,里面可以添加表情包了,格式如下:

```
{
  "表情1": "URL",
  "表情2": "URL"
}
```

---

# 添加 bilibili 番剧页面

- 安装 `npm install hexo-bilibili-bangumi --save`
- 配置: 写入`_config.yml` 里(root/里的)

  ```yml
  bangumi:
    enable: true
    path: #页面路径
    vmid: # 哔哩哔哩番剧页面的 vmid(uid)
    title: "追番列表" # 页面的标题
    quote: "生命不息，追番不止！" # 写在页面开头的一段话，支持 html 语法
    show: 1 # 初始显示页面：0: 想看 , 1: 在看 , 2: 看过，默认为 1
    loading: "https://cdn.jsdelivr.net/gh/Weidows/Images/img/loading.gif" # 图片加载完成前的 loading 图片
    metaColor: #  meta 部分(简介上方)字体颜色
    color: # 简介字体颜色
    webp:
    progress: # 获取番剧数据时是否显示进度条，默认true
  ```

- 创建页面,进入 root/命令行,执行: `hexo new page bangumis` ;当然也可以直接在 source/直接新建一个 markdown,然后把文件头 type 写为这样:`type: "bangumis"` ,亲自尝试过可以不用.md,在\_data 里只放上数据文件 bangumis.json 就可以在指定路径生成了
- 另外,Hexo g 之前最好更新下数据,防止请求过多: `hexo bangumi -u` 再者删除数据: `hexo bangumi -d`

---

# 添加站点地图

- 百度专用

  ```shell
  npm install hexo-generator-baidu-sitemap --save
  ```

- 通用的

  ```shell
  npm install hexo-generator-sitemap --save
  ```

## 配置文件 `root/_config.yml`

```yml
Plugins:
  - hexo-generator-baidu-sitemap
  - hexo-generator-sitemap

baidusitemap:
  path: sitemap/baidusitemap.xml
sitemap:
  path: sitemap/sitemap.xml
```

- _需要注意的是如果访问路径带中文,或许无法 generate(报错),需要在\_config 里找到 category_map 和 tag_map 修改映射,根据需要自行修改,我的样式如下:_
  - 现在 butterfly 支持中文路径了,不太需要改
  ```yml
  default_category: uncategorized
  category_map:
    GitHub: github
  tag_map:
    备忘录: memorandum
    计算机系统: operating_system
    Hexo: hexo
    Java: java
    PHP: php
    VScode: vscode
    Website: website
  ```

---

# Steam 游戏页面

## 安装(经常被其他插件干扰误删)

```
npm install hexo-steam-games --save
```

## 配置

```yml
steam:
  enable: true
  steamId: "76561198321099712" # steam64位Id(需要放在引号里),将steam库设置为公开
  path: tags/games.html # 页面路径，默认steamgames/index.html
  title: ⭐️养鸡场⭐️
  quote: "Steam给爷爬!别让我家EPIC误会" # 写在页面开头的一段话,支持html语法
  tab: all # all或recent, all: 所有游戏, recent: 最近游玩的游戏
  length: 1000
  imgUrl: "https://cdn.jsdelivr.net/gh/Weidows/Images/img/Avatar/avatar.jpg" # 图片链接，在quote下面放一张图片，图片链接到Steam个人资料，可留空
  proxy: # 如果无法访问steam社区的话请使用代理
    host: # 代理ip或域名
    port: # 代理端口
```

## 使用

- `Hexo g` 之前 `hexo steam -u` (如果失败需要手动)
- 浏览器打开`https://steamcommunity.com/profiles/76561198321099712/games/?tab=all` {steamId}和{tab}分别替换为上面配置中提到的 steamId 和 tab
- F12 控制台 console 输入下面内容执行:

  ```
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

- 生成的内容复制到`root/node_modules/hexo-steam-games/data/games.json`
- 这个不用 new 页面(但是数据文件路径无法改)

---

# 安装音乐 aplayer(已弃用)

## 安装

```
npm install --save hexo-tag-aplayer
```

## 使用

- 如果 per_page 关了的话在需要开启的页面 Front-matter 添加
  ```
  aplayer: true
  ```

## 全局吸底 mini 播放器

- 需要导入 js 并通过导入 css 修改 Aplayer 缩进样式
- 在\_config.yml 里修改有一定限制,inject 只能搞腚 source 中文章的其中某一层目录,多层需要不同层级目录各引用一次,如下:

  ```yml
  inject:
    head:
      # - <link rel="stylesheet" href="./css/mine.css">
    bottom:
      # - <script src="./js/mine.js"></script>
      # - <script src="../js/mine.js"></script>
      # - <script src="../../js/mine.js"></script>
      # - <script src="../../../js/mine_post.js"></script>
  ```

- 这里介绍另一种全局 inject 的方法:
  - 找到 theme/xxx/layout/includes/layout.pug
  - 在最后添加如下字段:
  ```
  script(src='js/mine.js')
  link(rel='stylesheet', href='css/mine.css')
  ```
  - 按照上面可以自行修改 JS/CSS 的引入,全局生效(注意有可能 PJAX 会使这种引入的 Js 无效化)

---

# 安装豆瓣电影

## 安装

```
npm install hexo-douban --save
```

## 使用

```yml
douban:
  user: userID
  builtin: true
  timeout: 10000
  book:
    title: "My book title"
    quote: "My book quote"
  movie:
    title: "My movie title"
    quote: "My movie quote"
  game:
    title: "My game title"
    quote: "My game quote"
```

- user: 你的豆瓣 ID.打开豆瓣，登入账户，然后在右上角点击 "个人主页" ，这时候地址栏的 URL 大概是这样："https://www.douban.com/people/xxxxxx/" ，其中的"xxxxxx"就是你的个人 ID 了。
- builtin: 是否将生成页面的功能嵌入 hexo s 和 hexo g 中，默认是 false,另一可选项为 true(1.x.x 版本新增配置项)。
- title: 该页面的标题.
- quote: 写在页面开头的一段话,支持 html 语法.
- timeout: 爬取数据的超时时间，默认是 10000ms ,如果在使用时发现报了超时的错(ETIMEOUT)可以把这个数据设置的大一点。
- 如果只想显示某一个页面(比如 movie)，那就把其他的配置项注释掉即可。

---

# Gulp(未完成)

- Cli 和插件

  ```shell
  npm install gulp-cli -g
  npm install gulp --save
  npm install gulp-htmlclean gulp-htmlmin gulp-imagemin gulp-minify-css gulp-uglify --save
  ```

- 在博客根目录新建`gulpfile.js`

  ```js
  const gulp = require("gulp");
  const cssClean = require("gulp-clean-css");
  const htmlMin = require("gulp-htmlmin");
  const htmlClean = require("gulp-htmlclean");
  const terser = require("terser");
  const composer = require("gulp-uglify/composer");
  const pump = require("pump");
  const terserMinify = composer(terser, console);
  const autoprefixer = require("gulp-autoprefixer");
  const cssnano = require("gulp-cssnano");

  const htmlMinify = () =>
    gulp
      .src("./public/**/*.html")
      .pipe(htmlClean())
      .pipe(
        htmlMin({
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        })
      )
      .pipe(gulp.dest("./public"));

  const jsMinify = (cb) =>
    pump(
      [
        gulp.src(["./public/**/*.js", "!./public/**/*.min.js"]),
        terserMinify({}),
        gulp.dest("./public"),
      ],
      cb
    );

  const cssMinify = () =>
    gulp
      .src("./public/**/*.css")
      .pipe(
        cssClean({
          compatibility: "ie9",
        })
      )
      .pipe(
        cssnano({
          zindex: false,
          reduceIdents: false,
        })
      )
      .pipe(autoprefixer())
      .pipe(gulp.dest("./public"));

  module.exports = {
    htmlMinify: htmlMinify,
    cssMinify: cssMinify,
    jsMinify: jsMinify,
  };

  gulp.task(
    "dist",
    gulp.parallel(
      // 异步压缩
      htmlMinify,
      cssMinify,
      jsMinify
    )
  );

  gulp.task("default", gulp.series("dist"));
  ```

- 然后`gulp`就可以压缩了.

---

# Random 页面

- 安装依赖和插件
  ```
  npm install object-assign --save
  npm install hexo-generator-random --save
  ```
- 应用
  插件会在根目录生成 `random.html`.

---

# hexo-neat(压缩)

- ## 安装
  ```
  npm install hexo-neat --save
  ```
- ## 配置
  ```
  # hexo-neat
  # 博文压缩
  neat_enable: true
  # 压缩html
  neat_html:
    enable: true
    exclude:
  # 压缩css
  neat_css:
    enable: true
    exclude:
      - '**/*.min.css'
  # 压缩js
  neat_js:
    enable: true
    mangle: true
    output:
    compress:
    exclude:
      - '**/*.min.js'
      - '**/jquery.fancybox.pack.js'
      - '**/index.js'
  ```

---

# 注意事项 & 常见问题

- 注意如果 repo 命名时没加.github.io 的后缀,那么只能 deploy 到 gh-pages 分支(否则出错)

- workflow 作用只是把 public/ deploy 到 gh-pages 分支上,generate 出 public/仍需要在本地进行

- 如果打开 Hexo Server 后报错(extends includes/layout.pug block content #recent-posts.recent-posts include includes/recent-posts.pug include includes/pagination.pug)是因为没有安装渲染插件
- 导航栏中的项目不能打 tag 和 categories(编译报错),也不能进行 cover 更改(无效)
- 注意修改 source 的 css 或者 js 后进行 generate 不会刷新状态,需要删掉重新 generate
- theme/xxx/\_config.yml 可以放在 source/\_data/xxx.yml 来当主题配置文件,原先的可以删去
