---
title: butterfly内部魔改记录
categories:
  - Hexo
tags:
  - butterfly
  - Hexo
  - JavaScript
  - pug
  - styl
  - CSS
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/Game/Honkai3/QQ图片20200725215845.jpeg
---

<!--
 * @Author: Weidows
 * @Date: 2020-09-03 22:49:05
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-07 20:05:31
 * @FilePath: \Weidowsd:\Desktop\新建文件夹 (2)\Hexo\butterfly_modify.md
-->

- [魔改滚动条](#魔改滚动条)
- [文章背板透明](#文章背板透明)
- [footer 类 github 小标签](#footer-类-github-小标签)
- [添加 footer 小红心](#添加-footer-小红心)
- [修改鼠标样式](#修改鼠标样式)
- [适配 Pjax](#适配-pjax)
- [优化](#优化)

![20210126213629](https://i.loli.net/2021/01/26/pXvc51LrIgexKmk.png)

# 魔改滚动条

- 找到`mine.styl`添加以下: (注意缩进格式)

  ```
  /*scrollbar*/
  ::-webkit-scrollbar
    width: 10px;
    height: 10px;

  ::-webkit-scrollbar-thumb
    background-color: rgba(255, 86, 232, 0.815);
    background-image: -webkit-linear-gradient(
      45deg,
      #34bf49 25%,
      transparent 25%,
      transparent 50%,
      #ff4c4c 50%,
      #0099e5 75%,
      transparent 75%,
      transparent
    );
    border-radius: 2em;

  ::-webkit-scrollbar-corner
    background-color: transparent;

  ::-moz-selection
    color: #fff;
    background-color: #ce70b9;
  ```

---

# 文章背板透明

- 在 mine.styl 内添加

  ```
  .layout
  & > div:first-child:not(.recent-posts)
    background: rgba(0, 45, 35, 0.5): rgba(0, 45, 35, 0.5)
  ```

---

# footer 类 github 小标签

- 在`mine.styl`在尾部添加层叠样式:

  ```styl
  /*底部信息*/
  .github-badge
    margin-left 5px
    display inline-block
    border-radius 4px
    text-shadow none
    color #fff
    line-height 15px
    background-color #abbac3
    margin-bottom 5px
    font-size 12px
    .badge-subject
      display inline-block
      background-color #4d4d4d
      padding 4px 4px 4px 6px
      border-top-left-radius 4px
      border-bottom-left-radius 4px

    .badge-value
      display inline-block
      padding 4px 6px 4px 4px
      border-top-right-radius 4px
      border-bottom-right-radius 4px

    .bg-blue
      background-color #007ec6

    .bg-brightgreen
      background-color #4dc820

    .bg-orange
      background-color orange

    .bg-gradient
      background linear-gradient(to right,#3ca5f6,#a86af9)

    .bg-blueviolet
      background-color #8833d7
  ```

- 找到`~butterfly/layout/includes/footer.pug`在尾部添加以下(这里是一个单位缩进,一定注意缩进对应上方)

  ```pug
    //- 底部信息
    .github-badge
      a(style='color:#fff', rel='external nofollow noopener noreferrer', href='https://hexo.io/', target='_blank', title='由 Hexo 强力驱动', data-pjax-state='')
        span.badge-subject Powered
        span.badge-value.bg-blue Hexo

    .github-badge
      a(style='color:#fff', rel='external nofollow noopener noreferrer', href='https://github.com/jerryc127/hexo-theme-butterfly', target='_blank', title='主题', data-pjax-state='')
        span.badge-subject Theme
        span.badge-value.bg-blueviolet Butterfly

    .github-badge
      a(style='color:#fff', rel='external nofollow noopener noreferrer', href='https://gitee.com/Weidows/Weidows', target='_blank', title='静态网页托管于 Github + Gitee', data-pjax-state='')
        span.badge-subject Hosted
        span.badge-value.bg-brightgreen Github+Gitee-Pages

    .github-badge
      a(style='color:#fff', rel='external nofollow noopener noreferrer', href='https://www.jsdelivr.com/', target='_blank', title='jsDelivr + SM.MS 提供 CDN 加速服务', data-pjax-state='')
        span.badge-subject CDN
        span.badge-value.bg-orange JsDelivr+SM.MS

    .github-badge
      a(style='color:#fff', rel='external nofollow noopener noreferrer', href='http://creativecommons.org/licenses/by-nc-sa/4.0/', target='_blank', title='本站点采用知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议进行许可', data-pjax-state='')
        span.badge-subject
          i.fa.fa-copyright
        span.badge-value.bg-gradient BY-NC-SA 4.0

    .github-badge
      a(style='color:#fff', rel='external nofollow noopener noreferrer', href='http://www.beian.miit.gov.cn/', target='_blank', title='备案', data-pjax-state='')
        span.badge-subject 冀ICP备
        span.badge-value.bg-orange 2020021936-1号

    .github-badge
      span.badge-subject BugSite上线
      a#running-time(style='text-decoration: none;color: rgb(255, 255, 255);background: rgb(77, 200, 32);padding: 4px 4px 4px 6px;--darkreader-inline-color: #ffffff;--darkreader-inline-bgimage: initial;--darkreader-inline-bgcolor: #1db000;', rel='external nofollow noopener noreferrer', href='/tags/for', target='_self', data-pjax-state, data-darkreader-inline-color, data-darkreader-inline-bgimage, data-darkreader-inline-bgcolor) 0 年 45 天 6 时 50 分 8 秒
    #running-time
      script.
        setInterval(() => {
                let create_time = Math.round(
                  new Date("2020-08-14 17:30:00").getTime() / 1000
                );
                let timestamp = Math.round(
                  (new Date().getTime() + 8 * 60 * 60 * 1000) / 1000
                );
                let second = timestamp - create_time;
                let time = new Array(0, 0, 0, 0, 0);
                if (second >= 365 * 24 * 3600) {
                  time[0] = parseInt(second / (365 * 24 * 3600));
                  second %= 365 * 24 * 3600;
                }
                if (second >= 24 * 3600) {
                  time[1] = parseInt(second / (24 * 3600));
                  second %= 24 * 3600;
                }
                if (second >= 3600) {
                  time[2] = parseInt(second / 3600);
                  second %= 3600;
                }
                if (second >= 60) {
                  time[3] = parseInt(second / 60);
                  second %= 60;
                }
                if (second > 0) {
                  time[4] = second;
                }
                currentTimeHtml =
                  time[0] +
                  " 年 " +
                  time[1] +
                  " 天 " +
                  time[2] +
                  " 时 " +
                  time[3] +
                  " 分 " +
                  time[4] +
                  " 秒";
                document.getElementById("running-time").innerHTML = currentTimeHtml;
              }, 1000);
  ```

---

# 添加 footer 小红心

- 找到`~butterfly/layout/includes/footer.pug`(同上)

  ```pug
  if theme.footer.owner.since && theme.footer.owner.since != nowYear
    .copyright!= `&copy;${theme.footer.owner.since} - ${nowYear} By ${config.author}`
  else
    .copyright!= `&copy;${nowYear} By ${config.author}`
  ```

- 替换为

  ```pug
  if theme.footer.owner.since && theme.footer.owner.since != nowYear
    .copyright!= `&copy;${theme.footer.owner.since} - ${nowYear} <i style="color:#FF6A6A" class="fa fa-heartbeat"></i> ${config.author}`
  else
    .copyright!= `&copy;${nowYear}  <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> ${config.author}`
  ```

---

# 修改鼠标样式

- 在 mine.styl 里添加以下:

  ```styl
  /* 鼠标图标 */
  body
    cursor url(https://cdn.jsdelivr.net/gh/Weidows/Images/img/cursor/1.png), auto

  a
    &:hover
      cursor url(https://cdn.jsdelivr.net/gh/Weidows/Images/img/cursor/2.png), auto

  button
    &:hover
      cursor url(https://cdn.jsdelivr.net/gh/Weidows/Images/img/cursor/2.png), auto

  i
    &:hover
      cursor url(https://cdn.jsdelivr.net/gh/Weidows/Images/img/cursor/2.png), auto

  #upj
    &:hover
      cursor url(https://cdn.jsdelivr.net/gh/Weidows/Images/img/cursor/2.png), auto

  #footer-wrap
    a
      &:hover
        text-decoration none
        cursor url(https://cdn.jsdelivr.net/gh/Weidows/Images/img/cursor/2.png), auto

  #pagination
    .page-number
      &:hover
        cursor url(https://cdn.jsdelivr.net/gh/Weidows/Images/img/cursor/2.png), auto

  #nav
    .site-page
      &:hover
        cursor url(https://cdn.jsdelivr.net/gh/Weidows/Images/img/cursor/2.png), auto
  ```

---

# 适配 Pjax

- 定位`~buttery/layout/include/third-party/pjax.pug`

  - 在`document.addEventListener('pjax:complete', function () {}`里最后插入
  - `注意缩进对齐!`

  ```js
    document.getElementById("go-up").innerHTML += "<img class='fas fa-arrow-up' style='max-width: 300%; transform: translate(-30px,0px);' src='https://cdn.jsdelivr.net/gh/Weidows/Images/img/up.png' title='芜湖起飞!' >";
    new xkTool().footFish();
  ```

---

# 优化

- 上面很多东西已被优化过,方法都还能用,优化过程:
  > [🚀 网站优化记录.](../optimize)
