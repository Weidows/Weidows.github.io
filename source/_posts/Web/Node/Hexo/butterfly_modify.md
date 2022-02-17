---
title: butterfly内部魔改记录
date: 2020-09-03 22:49:05
password: ""
tags:
  - butterfly
  - Hexo
  - JavaScript
  - pug
  - styl
  - CSS
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/QQ图片20200725215845.jpeg
---

<!--
 * @Author: Weidows
 * @Date: 2020-09-03 22:49:05
 * @LastEditors: Weidows
 * @LastEditTime: 2022-02-11 17:47:56
 * @FilePath: \Blog-private\source\_posts\Web\Node\Hexo\butterfly_modify.md
-->

1. [魔改滚动条](#魔改滚动条)
2. [文章背板透明](#文章背板透明)
3. [footer 类 github 小标签](#footer-类-github-小标签)
4. [添加 footer 小红心](#添加-footer-小红心)
5. [修改鼠标样式](#修改鼠标样式)
6. [适配 Pjax](#适配-pjax)
7. [优化](#优化)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 魔改滚动条

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

## 文章背板透明

- 在 mine.styl 内添加

  ```
  .layout
  & > div:first-child:not(.recent-posts)
    background: rgba(0, 45, 35, 0.5): rgba(0, 45, 35, 0.5)
  ```

---

## footer 类 github 小标签

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
      a(style='color:#fff', rel='external nofollow noopener noreferrer', href='https://www.jsdelivr.com/', target='_blank', title='jsDelivr 提供 CDN 加速服务', data-pjax-state='')
        span.badge-subject CDN
        span.badge-value.bg-orange JsDelivr

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

## 添加 footer 小红心

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

## 修改鼠标样式

- 在 mine.styl 里添加以下:

  ```styl
  /* 鼠标图标 */
  body
    cursor url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAADHklEQVRIia2WyWtTURSHv/veS8wzVpMmdjApxSIKdQJpS4ili1orijgP4MbpTxBEdKEgLqwLF9qVBcWFqOAILaLUjQsXVqUWbMUU0ZrW0smWaGPa5LnIu+mzdkjSHHjcd7nn/j7OucO5gn9NTOsb5NBEQUFt/Y4dX7/t3j08Egjcve/xVFTNAM1M1NLqO3eGu3V9RZEcNIxE4suXm7c7O8+c/f178AdZRKTItrCwbqtVHEAIRSkrO3msvv5zZ2np0ROmf0YRyQmqxxPcPJuTzeZaVlV1q6m6uqVF11f4M4HICLS8vNWr53MuLt6+ra7u7ZuCgtqt6UJkBJrD4S9OZ4LDUVRYU/O8Ze3aCxcBbT6QBCg2m2tZOgAAIVS1vPz8uWDw4QNgyVyQ1CJrmu5IFyDN59u7q7b2davTubxwNogECFXNHADg8QQqg8HWWSESgKo67NkAAFyu9eWBQHMzuJdOh1giWJxVBNLy8ys3BQLXbwCqFZICKIrdthAAQEnJkYN+/4HD0wECQAixoDtH2oYNly8BTqmrTA0pOQE4nWWlPt/+fVJbmcc/KyspObQP8xCm1kAIJWcwl2vjesBmBeTUnM6V/v8Ak5OR8VwB4vFojOR2Ta2BEY2GB3IFiEZ7B7DsIgMwhobefcwVYHi47SOQkACAeF/f49ZcAfr6nrZaAQYw0dPzuDkSCYUXKh6JdPf29Dx5BkwARgoAsbGOjtPXFgpobz91FWI/JUC1jImxsa6wpi3xer3BddmId3VdvtPd3dgEDANRIGEFGIDo73/xQdOcLq93c0aQT58a7nV0nLkCDAIRYBLMvWoBxAGjv//F+9HR9rDbXbHGbs/Pm0s4Egn1trUdbwiFGm8CA8BPIGbq/VMcBMlFdwAuwA2ax+fbs8Xv31Ptdles0nWfF2B8PDw4MtIWCocfvfr+/clLmBwy0zIqUzMTQPYFsIjklbuUZFHXMY++JdoJYNxMxxjwC/hjjhlWwZlMkLwN7SbMYf7LlMbNNERN0RjJnP/3tJyrBshoFPNTmTqYCROSYCodM75b0y0ys/nN+xj+C/Mh4eoX0xP+AAAAAElFTkSuQmCC"), auto

  a,button,i,#upj
  #footer-wrap a
  #pagination .page-number,
  #nav .site-page
    &:hover
      cursor url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAdCAYAAAC0T3x2AAADVUlEQVRIibWWXWgUVxTHfzOTZDe7mzHZbGIIIqTaJKxCNMYi9UEwEkkEUdSXFvoUX1of6ge+CIotRehjLbRgXypIiQhRfCkVfLCNokkkqZu0hl0/1qRJzGqS3SUfuztz+7AzcViiMzu2f7gw986d87vnnnPPHXAuyWj/m6Tq6raPurqePO3sjMbWrNna5gao2EEAZceOnquVlS2by8qCVaraFH727OfLgCgGJDuY462qam0xO8Hgtq2ApxiIE5AMeBXFV74yIPvLDZCTRToGwerba7flrkD/iZyAVsswiSLT3ZVHjY0nPt+//+VUe/uD/oqKxmYnYLsVKUDNkSNi0joohK5LkiwDjI9fu5HJvEqsW3f44Ph4z9XBwS+OAbp1umuQVbqezclyaYnZv3fv0KcbNhw7qqrNTcPDJ0/H479cAUQhqLAv24EKtbycmPV4QlUAS0uT0zdv1q8HsmaMpNra3R2dnWNje/eOjIbDZ88B5auAbWVCABTF5yN/5iTZMFbS1nbpx0Dgw42qGm7etOn8ua6uWERVW1rdwEwlkyNPgFITBFA2PHzqW01bWDIn+f0fNOzZ03e7rm5fh1vQ3NzQY/PZ9EiamOi9dedOx3FNW1w2XyqK379zZ+9PbkHz85Ex8hkoZPLplwGSiUTf7/39n30jhL5Sma0ZVaxmZ/+MABq8qVk6kAO0ZHL0hSSVBGpqdrW8zYAzCfHo0ZdfaVrmFZAzY7TiFZAYGfn6u0Tij8j7YFKpx/FMJv0awyNrCbLAsjP3739yJpOZTbsFTU39ehfIYomRVTqwDMwtLLwYHRjovuAGIoQuYrFLPRbQW+8VHRCp1F8TXm9tfTC4vbkYUDT6/bV4/PIV8qHIvgskMPZ2cvLWUCi0vTUQ2FjvBDI9/dvAw4dHz+h69iWwgI1HFpiuP3/e06co3opQ6OMwSKtWCiF0EY1evD442H02l1v8B5gnH3PH1dsHBIFqVW0KNzR0H1i7tn2Lz9dQJ0mlSjr9dHpm5vZQLPZDbyr1dwRIAK8NbzTTkB1IMmAeQAUqAb/RN3dDM1aeNrxIAkvGuLAaspN5c5YCXqN5gBJjPEc+UxcNQNYAiEIjTiWRP3ey4Y31sOfIB10vBLgB2X3zzj/XfwGZgTBog2BRwgAAAABJRU5ErkJggg=="), auto
  ```

---

## 适配 Pjax

- 定位`~butterfly/layout/include/third-party/pjax.pug`

  - 在`document.addEventListener('pjax:complete', function () {}`里最后插入
  - `注意缩进对齐!`

  ```js
    document.getElementById("go-up").innerHTML += "<img class='fas fa-arrow-up' style='max-width: 300%; transform: translate(-30px,0px);' src='https://cdn.jsdelivr.net/gh/Weidows/Images/img/up.png' title='芜湖起飞!' >";
    new xkTool().footFish();
  ```

---

## 优化

- 上面很多东西已被优化过,方法都还能用,优化过程:
  > [🚀 网站优化记录.](../optimize)
