/*
 * @Author: Weidows
 * @Date: 2020-08-19 16:42:36
 * @LastEditors: Weidows
 * @LastEditTime: 2020-11-23 23:57:53
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog\themes\butterfly\source\js\mine.js
 */


/*添加图片top到返回顶部按钮下*/
var top_up =
  "<img id='upj' class='upj' style='max-width: 300%; transform: translate(-30px,0px);' src='https://cdn.jsdelivr.net/gh/Weidows/Images/img/up.png' title='芜湖起飞!' >";
document.getElementById("go-up").innerHTML += top_up;

// 判断移动端设备,樱花特效
browserRedirect();
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (
    !(
      bIsIpad ||
      bIsIphoneOs ||
      bIsMidp ||
      bIsUc7 ||
      bIsUc ||
      bIsAndroid ||
      bIsCE ||
      bIsWM
    )
  ) {
    // 执行樱花效果
    var stop, staticx;
    var img = new Image();
    img.src = "https://cdn.jsdelivr.net/gh/Weidows/Images/img/Sakura.png";
    function Sakura(x, y, s, r, fn) {
      this.x = x;
      this.y = y;
      this.s = s;
      this.r = r;
      this.fn = fn;
    }
    Sakura.prototype.draw = function (cxt) {
      cxt.save();
      var xc = (40 * this.s) / 4;
      cxt.translate(this.x, this.y);
      cxt.rotate(this.r);
      cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s);
      cxt.restore();
    };
    Sakura.prototype.update = function () {
      this.x = this.fn.x(this.x, this.y);
      this.y = this.fn.y(this.y, this.y);
      this.r = this.fn.r(this.r);
      if (
        this.x > window.innerWidth ||
        this.x < 0 ||
        this.y > window.innerHeight ||
        this.y < 0
      ) {
        this.r = getRandom("fnr");
        if (Math.random() > 0.4) {
          this.x = getRandom("x");
          this.y = 0;
          this.s = getRandom("s");
          this.r = getRandom("r");
        } else {
          this.x = window.innerWidth;
          this.y = getRandom("y");
          this.s = getRandom("s");
          this.r = getRandom("r");
        }
      }
    };
    SakuraList = function () {
      this.list = [];
    };
    SakuraList.prototype.push = function (sakura) {
      this.list.push(sakura);
    };
    SakuraList.prototype.update = function () {
      for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].update();
      }
    };
    SakuraList.prototype.draw = function (cxt) {
      for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].draw(cxt);
      }
    };
    SakuraList.prototype.get = function (i) {
      return this.list[i];
    };
    SakuraList.prototype.size = function () {
      return this.list.length;
    };
    function getRandom(option) {
      var ret, random;
      switch (option) {
        case "x":
          ret = Math.random() * window.innerWidth;
          break;
        case "y":
          ret = Math.random() * window.innerHeight;
          break;
        case "s":
          ret = Math.random();
          break;
        case "r":
          ret = Math.random() * 6;
          break;
        case "fnx":
          random = -0.5 + Math.random() * 1;
          ret = function (x, y) {
            return x + 0.5 * random - 1.7;
          };
          break;
        case "fny":
          random = 1.5 + Math.random() * 0.7;
          ret = function (x, y) {
            return y + random;
          };
          break;
        case "fnr":
          random = Math.random() * 0.03;
          ret = function (r) {
            return r + random;
          };
          break;
      }
      return ret;
    }
    function startSakura() {
      requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame;
      var canvas = document.createElement("canvas"),
        cxt;
      staticx = true;
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      canvas.setAttribute(
        "style",
        "position: fixed;left: 0;top: 0;pointer-events: none;"
      );
      canvas.setAttribute("id", "canvas_sakura");
      document.getElementsByTagName("body")[0].appendChild(canvas);
      cxt = canvas.getContext("2d");
      var sakuraList = new SakuraList();
      for (var i = 0; i < 50; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom("x");
        randomY = getRandom("y");
        randomR = getRandom("r");
        randomS = getRandom("s");
        randomFnx = getRandom("fnx");
        randomFny = getRandom("fny");
        randomFnR = getRandom("fnr");
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
          x: randomFnx,
          y: randomFny,
          r: randomFnR,
        });
        sakura.draw(cxt);
        sakuraList.push(sakura);
      }
      stop = requestAnimationFrame(function () {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee);
      });
    }
    window.onresize = function () {
      var canvasSnow = document.getElementById("canvas_snow");
    };
    img.onload = function () {
      startSakura();
    };
    function stopp() {
      if (staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(stop);
        staticx = false;
      } else {
        startSakura();
      }
    }
  }
}

/* 小康工具库引入 */
("use strict");
!(function (u) {
  function c(e, t) {
    return new c.prototype.init(e, t);
  }
  (c.extend = (c.prototype = {
    constructor: c,
    init: function (e, t) {
      return (
        this.changeBanner(e, t),
        console.log(
          "\n %c 小康蝴蝶主题魔改工具库" +
          this.version +
          " %c https://docs.tzki.cn/xkTool/ \n",
          "color: #fff; background: #4285f4; padding:5px 0;",
          "background: #66CCFF; padding:5px 0;"
        ),
        this
      );
    },
    version: "3.1.1",
    selector: "",
    imgList: [
      "https://ae01.alicdn.com/kf/Uc32240fb1b134adc8b256577bd78b9a3j.jpg",
    ],
    bannerList: [
      "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg",
    ],
  }).extend = function (e) {
    for (var t in e) this[t] = e[t];
  }),
    c.extend({
      randomNum: function (e, t) {
        return Math.floor(Math.random() * (t - e)) + e;
      },
    }),
    c.extend({
      setColor: function (e, t) {
        var n = "--light_bg_color: rgb(255, 255, 255," + t + ");",
          a = "--dark_bg_color: rgba(18,18,18," + t + ");";
        e.setAttribute("style", n + a);
      },
      setBg: function (e) {
        $("#web_bg").css({
          backgroundImage: "url(" + e + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        });
      },
      setBanner: function (e, t) {
        t
          ? $(".full_page").css({
            backgroundImage:
              'url("https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url(' +
              e +
              ")",
          })
          : $(".full_page").css({ backgroundImage: "url(" + e + ")" });
      },
    }),
    c.prototype.extend({
      consoleAnchor: function () {
        return (
          $(".toc-link").click(function (e) {
            console.log(this.href);
          }),
          this
        );
      },
      codeFull: function () {
        return (
          $(".highlight-tools").append(
            '<i class="fas fa-fingerprint fullScreen"></i>'
          ),
          $(".highlight-tools").delegate(".fullScreen", "click", function () {
            $(this).parent().parent().toggleClass("code-block-fullscreen");
          }),
          this
        );
      },
    }),
    c.prototype.extend({
      changeBanner: function (e, t) {
        var n = 1 < arguments.length && void 0 !== t && t;
        return (
          null != e && -1 != e.search("http")
            ? c.setBanner(e, n)
            : "transparent" == e &&
            $(".full_page").css({ background: "transparent" }),
          this
        );
      },
      randomBanner: function (e, t, n, a, i) {
        var o,
          r,
          s = 4 < arguments.length && void 0 !== i && i;
        return (
          (arguments.length = 1 == e) && (s = !0),
          arguments.length < 4
            ? ((o = this.bannerList.length),
              (r = c.randomNum(0, o)),
              console.log(this.bannerList[r], r),
              c.setBanner(this.bannerList[r], s))
            : ((r = c.randomNum(n, a + 1)), c.setBanner(e + r + t, s)),
          c
        );
      },
      mobileSidebar: function () {
        for (
          var e = document.getElementById("mobile-sidebar-menus"),
          t = e.getElementsByClassName("menus_item_child"),
          n = e.getElementsByClassName("menus-expand"),
          a = 0;
          a < t.length;
          a++
        )
          (t[a].style.display = "none"), (n[a].className += " menus-closed");
        return this;
      },
      bgPage: function () {
        var e = document.getElementById("web_bg"),
          t = document.getElementById("content-inner"),
          n = Cookies.get("opacity") ? Cookies.get("opacity") : 0.5,
          a = Cookies.get("bg"),
          i = Cookies.get("animation"),
          o = Cookies.get("type");
        return (
          a &&
          ((e.style.background = a),
            e.setAttribute("data-type", o),
            i && (e.style.animation = i)),
          c.setColor(t, n),
          this
        );
      },
      randomBg: function (e, t, n, a) {
        var i, o;
        return (
          arguments.length < 4
            ? ((i = this.imgList.length),
              (o = c.randomNum(0, i)),
              c.setBg(this.imgList[o]))
            : ((o = c.randomNum(n, a + 1)), c.setBg(e + o + t)),
          c
        );
      },
    }),
    c.prototype.extend({
      appendSocial: function (e) {
        for (var t in e)
          $(".card-info-social-icons").append(
            '<a class="social-icon" href="' +
            e[t] +
            '" target="_blank"><svg class="icon" aria-hidden="true" style="width: 1em;height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;"><use xlink:href="#' +
            t +
            '"></use></svg></a>'
          );
      },
      cheatTitle: function (e, t, n, a) {
        var i,
          o = document.title;
        return (
          document.addEventListener("visibilitychange", function () {
            document.hidden
              ? ($('[rel="icon"]').attr(
                "href",
                n ||
                "https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico"
              ),
                (document.title = e || "这里这里 ◕ ں ◕ "),
                clearTimeout(i))
              : ($('[rel="icon"]').attr(
                "href",
                a ||
                "https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico"
              ),
                (document.title = t || "ヘ(￣ω￣ヘ)走开！" + o),
                (i = setTimeout(function () {
                  document.title = o;
                }, 2e3)));
          }),
          this
        );
      },
      magicCirle: function (e, t, n, a) {
        return (
          $(".scroll-down").after(
            '<canvas id="canvas" width="1700px" height="470"></canvas>'
          ),
          $(""),
          ($.fn.circleMagic = function (e) {
            var o,
              r,
              n,
              a,
              s,
              t = !0,
              i = [],
              c = $.extend(
                {
                  elem: ".header",
                  color: "rgba(255,225,225,.4)",
                  radius: 20,
                  densety: 0.3,
                  clearOffset: 0.2,
                },
                e
              );
            function l() {
              t = !(document.body.scrollTop > r);
            }
            function d() {
              (o = u.innerWidth),
                (r = u.innerHeight),
                (n.style.height = r + "px"),
                (a.width = o),
                (a.height = r);
            }
            function h() {
              if (t) for (var e in (s.clearRect(0, 0, o, r), i)) i[e].draw();
              requestAnimationFrame(h);
            }
            function g() {
              var i = this;
              function e() {
                var e, t, n, a;
                (i.pos.x = Math.random() * o),
                  (i.pos.y = r + 100 * Math.random()),
                  (i.alpha = 0.1 + Math.random() * c.clearOffset),
                  (i.scale = 0.1 + 0.3 * Math.random()),
                  (i.speed = Math.random()),
                  "random" === c.color
                    ? (i.color =
                      ((e = Math.floor(255 * Math.random())),
                        (t = Math.floor(255 * Math.random())),
                        (n = Math.floor(255 * Math.random())),
                        (a = Math.random().toPrecision(2)),
                        "rgba("
                          .concat(e, ", ")
                          .concat(t, ", ")
                          .concat(n, ", ")
                          .concat(a, ")")))
                    : (i.color = c.color);
              }
              (i.pos = {}),
                e(),
                (this.draw = function () {
                  i.alpha <= 0 && e(),
                    (i.pos.y -= i.speed),
                    (i.alpha -= 5e-4),
                    s.beginPath(),
                    s.arc(
                      i.pos.x,
                      i.pos.y,
                      i.scale * c.radius,
                      0,
                      2 * Math.PI,
                      !1
                    ),
                    (s.fillStyle = i.color),
                    s.fill(),
                    s.closePath();
                });
            }
            !(function () {
              (o = $(u).width()),
                (r = $(u).height()),
                ((n = document.querySelector(c.elem)).style.height = r + "px"),
                (function () {
                  var e = document.createElement("canvas");
                  (e.id = "canvas"), n.append(e);
                })(),
                ((a = document.getElementById("canvas")).width = o),
                (a.height = r),
                (s = a.getContext("2d"));
              for (var e = 0; e < o * c.densety; e++) {
                var t = new g();
                i.push(t);
              }
              h();
            })(),
              u.addEventListener("scroll", l),
              u.addEventListener("resize", d);
          }),
          $(".full_page")
            .css({ overflow: "hidden" })
            .circleMagic({
              elem: ".full_page",
              radius: e || 18,
              densety: t || 0.1,
              color: n || "random",
              clearOffset: a || 0.3,
            }),
          this
        );
      },
      footFish: function () {
        return (
          $("#footer-wrap").css({
            position: "absolute",
            "text-align": "center",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            "z-index": 99,
          }),
          $("footer").append(
            '<div class="container" id="jsi-flying-fish-container"></div>'
          ),
          $("body").append(
            '<script src="https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@master/lib/js/fish.js"></script>'
          ),
          this
        );
      },
      aplayer: function (n) {
        $("head").append(
          '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css" class="aplayer-style-marker">'
        ),
          $.getScript(
            "https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile/Hexo/assets/js/APlayer.min.js",
            function () {
              for (var e in ($("body").prepend(
                '<div id="xiaokang-aplayer"></div>'
              ),
                (aplayerObj = {
                  container: document.getElementById("xiaokang-aplayer"),
                }),
                n))
                "container" != e && (aplayerObj[e] = n[e]);
              var t = new APlayer(aplayerObj);
              return console.log(aplayerObj), t;
            }
          );
      },
      meting: function (e, t, n) {
        $("head").append(
          '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css" class="aplayer-style-marker">'
        );
        var a = $.getScript(
          "https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/js/APlayer.min.js"
        ),
          i = $.getScript(
            "https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"
          );
        Promise.all([a, i]).then(function () {
          $("body").append(
            "<meting-js id="
              .concat(e, " server=")
              .concat(t, " type=")
              .concat(
                n,
                ' fixed="true" mini="true" order="random" listFolded="false" ></meting-js>'
              )
          );
        });
      },
    }),
    (c.prototype.init.prototype = c.prototype),
    (u.xkTool = c);
})(window);

var xiaokang = new xkTool(); /* 实例化对象,下面操作的基础 */

/* 魔幻圆圈1.1 */
// xiaokang.magicCirle( [radius, densety, color, clearOffset] );
/* 页脚footer养鱼 */
xiaokang.footFish();
/* 欺诈标题[离开时标题,回来时标题,离开时图标,回来后图标] */
xiaokang.cheatTitle([
  "这里这里 ◕ ں ◕ ",
  "ヘ(￣ω￣ヘ)走开！",
  "https://cdn.jsdelivr.net/gh/Weidows/Images/Humor/ComicExpression/74ef2ed780ee230c08866adfa01dbe297b5467b4.png",
  "https://cdn.jsdelivr.net/gh/Weidows/Images/Humor/ComicExpression/34e594f5a6b38285aa8bc7f005861ca1b383d1e2.png",
]);

//全局左下角meting
//ID:可选为song id / playlist id / album id / search keyword
//server:music platform: netease, tencent, kugou, xiami, baidu
//type:song, playlist, album, search, artist
xiaokang.meting("5213523516", "netease", "playlist");
