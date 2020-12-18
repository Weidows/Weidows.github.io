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
 * @LastEditTime: 2020-12-18 15:53:36
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog-private\source\_posts\Hexo\butterfly_modify.md
-->

# 魔改滚动条

- 找到`~butterfly/source/css/_global/index.styl`
  修改并覆盖以下代码:

  ```
  *::-webkit-scrollbar
    width: 8px
    height: 8px

  *::-webkit-scrollbar-thumb
    background: var(--btn-bg)

  *::-webkit-scrollbar-track
    background-color: transparent
  ```

- 改为以下: (注意缩进格式)

  ```
  ::-webkit-scrollbar
    width: 10px;
    height: 10px;

  ::-webkit-scrollbar-thumb
    background-color: #83c9d1;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 0, 0, 0.78) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 86, 232, 0.815) 50%,
      rgba(0, 76, 255, 0.4) 75%,
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

# 文章背景案板透明

- 找到`~butterfly/source/css/_page/common.styl`
- 找到并把`background: var(--card-bg)`这一行替换成

  ```
  background: rgba(0, 45, 35, 0.5)
  ```

---

# footer 类 github 小标签

- 找到`~butterfly/source/css/_global/function.styl`在尾部添加层叠样式:

  ```
  /*底部信息*/
  .github-badge {
    margin-left: 5px;
    display: inline-block;
    border-radius: 4px;
    text-shadow: none;
    color: #fff;
    line-height: 15px;
    background-color: #abbac3;
    margin-bottom: 5px;
    font-size: 12px;
    .badge-subject {
      display: inline-block;
      background-color: #4d4d4d;
      padding: 4px 4px 4px 6px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .badge-value {
      display: inline-block;
      padding: 4px 6px 4px 4px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .bg-blue {
      background-color: #007ec6;
    }
    .bg-brightgreen {
      background-color: #4dc820;
    }
    .bg-orange {
      background-color: orange;
    }
    .bg-gradient {
      background: linear-gradient(to right,#3ca5f6,#a86af9);
    }
    .bg-blueviolet {
      background-color: #8833d7;
    }
  }
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

  ```
  if theme.footer.owner.since && theme.footer.owner.since != nowYear
    .copyright!= `&copy;${theme.footer.owner.since} - ${nowYear} By ${config.author}`
  else
    .copyright!= `&copy;${nowYear} By ${config.author}`
  ```

- 替换

  ```
  if theme.footer.owner.since && theme.footer.owner.since != nowYear
    .copyright!= `&copy;${theme.footer.owner.since} - ${nowYear} <i style="color:#FF6A6A" class="fa fa-heartbeat"></i> ${config.author}`
  else
    .copyright!= `&copy;${nowYear}  <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> ${config.author}`
  ```

---

# 修改鼠标样式

- 找到`~butterfly/source/css/_third-party/normalize.min.css`定位并删除 body{xxx}添加以下:

  ```
  /* 鼠标图标 */
  body {
    cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/Jkll8I.png), auto;
  }

  /*a标签*/

  a:hover {
    cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
  }

  /*按钮*/

  button:hover {
    cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
  }

  /*i标签*/

  i:hover {
    cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
  }

  /*up酱*/

  #upj:hover {
    cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
  }

  /*页脚a标签*/

  #footer-wrap a:hover {
    text-decoration: none;
    cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
  }

  /*分页器*/

  #pagination .page-number:hover {
    cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
  }

  /*头部的导航栏*/

  #nav .site-page:hover {
    cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
  }
  ```

---

# 注入自己的 CSS 和 JS 文件

- 找到`~buttery/layout/include/layout.pug`
- 分别在 head 最后和 body 最后插入如下代码

  ```
  link(rel='stylesheet', href='/css/mine.css')
  //在这里写百度和谷歌站长验证的HTML=>pug标签
  script(src='/js/mine.js')
  ```

---

# 适配 Pjax

- 定位`~buttery/layout/include/third-party/pjax.pug`
  - 找到`typeof preloader === 'object' && preloader.endLoading()`这一行,在这一行上面插入
  - `注意缩进对齐!`
  ```
      /*添加图片top到返回顶部按钮下*/
      var top_up =
        "<img id='upj' class='upj' style='max-width: 300%; transform: translate(-30px,0px);' src='https://cdn.jsdelivr.net/gh/Weidows/Images/img/up.png' title='芜湖起飞!' >";
      document.getElementById("go-up").innerHTML += top_up;
      /* 页脚footer养鱼 */
      xiaokang.footFish();
  ```

---

# 鸣谢:

- 由衷感谢`Lete乐特`带来了多数的教程,让我此路顺畅无比^v^
