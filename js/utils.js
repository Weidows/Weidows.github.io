const btf = {
  debounce: function (func, wait, immediate) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  throttle: function (func, wait, options) {
    let timeout, context, args;
    let previous = 0;
    if (!options) options = {};

    const later = function () {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
    };

    const throttled = function () {
      const now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      const remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
    };

    return throttled;
  },

  sidebarPaddingR: () => {
    const innerWidth = window.innerWidth;
    const clientWidth = document.body.clientWidth;
    const paddingRight = innerWidth - clientWidth;
    if (innerWidth !== clientWidth) {
      document.body.style.paddingRight = paddingRight + "px";
    }
  },

  snackbarShow: (text, showAction = false, duration = 2000) => {
    const { position, bgLight, bgDark } = GLOBAL_CONFIG.Snackbar;
    const bg =
      document.documentElement.getAttribute("data-theme") === "light"
        ? bgLight
        : bgDark;
    Snackbar.show({
      text,
      backgroundColor: bg,
      showAction,
      duration,
      pos: position,
      customClass: "snackbar-css",
    });
  },

  diffDate: (d, more = false) => {
    const dateNow = new Date();
    const datePost = new Date(d);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const { dateSuffix } = GLOBAL_CONFIG;

    if (!more) return parseInt(dateDiff / day);

    const monthCount = dateDiff / month;
    const dayCount = dateDiff / day;
    const hourCount = dateDiff / hour;
    const minuteCount = dateDiff / minute;

    if (monthCount > 12) return datePost.toISOString().slice(0, 10);
    if (monthCount >= 1) return `${parseInt(monthCount)} ${dateSuffix.month}`;
    if (dayCount >= 1) return `${parseInt(dayCount)} ${dateSuffix.day}`;
    if (hourCount >= 1) return `${parseInt(hourCount)} ${dateSuffix.hour}`;
    if (minuteCount >= 1) return `${parseInt(minuteCount)} ${dateSuffix.min}`;
    return dateSuffix.just;
  },

  loadComment: (dom, callback) => {
    if ("IntersectionObserver" in window) {
      const observerItem = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            callback();
            observerItem.disconnect();
          }
        },
        { threshold: [0] }
      );
      observerItem.observe(dom);
    } else {
      callback();
    }
  },

  scrollToDest: (pos, time = 500) => {
    const currentPos = window.pageYOffset;
    const isNavFixed = document
      .getElementById("page-header")
      .classList.contains("fixed");
    if (currentPos > pos || isNavFixed) pos = pos - 70;

    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        top: pos,
        behavior: "smooth",
      });
      return;
    }

    let start = null;
    pos = +pos;
    window.requestAnimationFrame(function step(currentTime) {
      start = !start ? currentTime : start;
      const progress = currentTime - start;
      if (currentPos < pos) {
        window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
      } else {
        window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
      }
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    });
  },

  animateIn: (ele, text) => {
    ele.style.display = "block";
    ele.style.animation = text;
  },

  animateOut: (ele, text) => {
    ele.addEventListener("animationend", function f() {
      ele.style.display = "";
      ele.style.animation = "";
      ele.removeEventListener("animationend", f);
    });
    ele.style.animation = text;
  },

  getParents: (elem, selector) => {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  },

  siblings: (ele, selector) => {
    return [...ele.parentNode.children].filter((child) => {
      if (selector) {
        return child !== ele && child.matches(selector);
      }
      return child !== ele;
    });
  },

  /**
   * @param {*} selector
   * @param {*} eleType the type of create element
   * @param {*} options object key: value
   */
  wrap: (selector, eleType, options) => {
    const createEle = document.createElement(eleType);
    for (const [key, value] of Object.entries(options)) {
      createEle.setAttribute(key, value);
    }
    selector.parentNode.insertBefore(createEle, selector);
    createEle.appendChild(selector);
  },

  unwrap: (el) => {
    const parent = el.parentNode;
    if (parent && parent !== document.body) {
      parent.replaceChild(el, parent);
    }
  },

  isHidden: (ele) => ele.offsetHeight === 0 && ele.offsetWidth === 0,

  getEleTop: (ele) => {
    let actualTop = ele.offsetTop;
    let current = ele.offsetParent;

    while (current !== null) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }

    return actualTop;
  },

  loadLightbox: (ele) => {
    const service = GLOBAL_CONFIG.lightbox;

    if (service === "mediumZoom") {
      mediumZoom(ele, { background: "var(--zoom-bg)" });
    }

    if (service === "fancybox") {
      ele.forEach((i) => {
        if (i.parentNode.tagName !== "A") {
          const dataSrc = i.dataset.lazySrc || i.src;
          const dataCaption = i.title || i.alt || "";
          btf.wrap(i, "a", {
            href: dataSrc,
            "data-fancybox": "gallery",
            "data-caption": dataCaption,
            "data-thumb": dataSrc,
          });
        }
      });

      if (!window.fancyboxRun) {
        Fancybox.bind("[data-fancybox]", {
          Hash: false,
          Thumbs: {
            showOnStart: false,
          },
          Images: {
            Panzoom: {
              maxScale: 4,
            },
          },
          Carousel: {
            transition: "slide",
          },
          Toolbar: {
            display: {
              left: ["infobar"],
              middle: [
                "zoomIn",
                "zoomOut",
                "toggle1to1",
                "rotateCCW",
                "rotateCW",
                "flipX",
                "flipY",
              ],
              right: ["slideshow", "thumbs", "close"],
            },
          },
        });
        window.fancyboxRun = true;
      }
    }
  },

  initJustifiedGallery: function (selector) {
    const runJustifiedGallery = (i) => {
      if (!btf.isHidden(i)) {
        fjGallery(i, {
          itemSelector: ".fj-gallery-item",
          rowHeight: i.getAttribute("data-rowHeight"),
          gutter: 4,
          onJustify: function () {
            this.$container.style.opacity = "1";
          },
        });
      }
    };

    if (Array.from(selector).length === 0) runJustifiedGallery(selector);
    else
      selector.forEach((i) => {
        runJustifiedGallery(i);
      });
  },

  updateAnchor: (anchor) => {
    if (anchor !== window.location.hash) {
      if (!anchor) anchor = location.pathname;
      const title = GLOBAL_CONFIG_SITE.title;
      window.history.replaceState(
        {
          url: location.href,
          title,
        },
        title,
        anchor
      );
    }
  },

  getScrollPercent: (currentTop, ele) => {
    const docHeight = ele.clientHeight;
    const winHeight = document.documentElement.clientHeight;
    const headerHeight = ele.offsetTop;
    const contentMath =
      docHeight > winHeight
        ? docHeight - winHeight
        : document.documentElement.scrollHeight - winHeight;
    const scrollPercent = (currentTop - headerHeight) / contentMath;
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    const percentage =
      scrollPercentRounded > 100
        ? 100
        : scrollPercentRounded <= 0
        ? 0
        : scrollPercentRounded;
    return percentage;
  },

  addModeChange: (name, fn) => {
    if (window.themeChange && window.themeChange[name]) return;
    window.themeChange = {
      ...window.themeChange,
      [name]: fn,
    };
  },
};

// ============================== 我的美化 ============================== //
const Weidows = {
  //- 添加功能性标签/输出
  appender: function () {
    // 小火箭
    // document.getElementById("go-up").innerHTML +=
    ("<img class='fas fa-arrow-up' style='max-width: 300%; transform: translate(-30px,0px);' src='data:image/png;base64,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' title='芜湖起飞!' >");
    if (
      document.getElementById("page-header-child-1") == null &&
      document.getElementById("recent-posts") != null
    ) {
      //- 添加视觉差名片
      let child1 = document.createElement("div"),
        child2 = document.createElement("div");
      child1.id = "page-header-child-1";
      child2.id = "page-header-child-2";
      document.getElementById("page-header").prepend(child1, child2);
    }

    //- sakura animation
    // if (document.getElementById("sakura") == null) {
    //   document.getElementById("web_bg").innerHTML +=
    //     "<canvas id='sakura' style='position: relative;width: 100%;height: 100vh;'></canvas>";
    // }

    //- 终端输出
    setTimeout(function () {
      console.clear();
      console.log(
        "%c  _  _  ____  __  ____   __   _  _  ____ \t齐下无贰 Listening...\n / )( \\(  __)(  )(    \\ /  \\ / )( \\/ ___) \thttps://github.com/Weidows\n \\ /\\ / ) _)  )(  ) D ((  O )\\ /\\ /\\___ \\ \thttps://gitee.com/Weidows\n (_/\\_)(____)(__)(____/ \\__/ (_/\\_)(____/ \t来这想干点啥好事⁉?😉\n",
        "color: #6aff00;background: #0c222e;"
      );
    }, 1);

    // 去掉 mindmap 滚动事件
    setTimeout(() => {
      let mindmap = document.getElementById("kity_svg_6");
      if (mindmap) {
        // console.log(mindmap);
        mindmap.addEventListener(
          "wheel",
          function (e) {
            e.preventDefault();
          },
          { passive: false }
        );
      }
    }, 1000);
  },

  //- 初始化
  all: function () {
    this.appender();

    //- 变换标题
    (() => {
      let i,
        o = document.title,
        h = document.getElementsByTagName("link")[0].href;
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          document.getElementsByTagName("link")[0].href =
            "data:image/png;base64,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";
          document.title = "❤大爷来玩呀~❤ |" + o;
          clearTimeout(i);
        } else {
          document.getElementsByTagName("link")[0].href =
            "data:image/png;base64,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";
          document.title = "🤣性感dows,在线胡说🤣 |" + o;
          i = setTimeout(function () {
            document.title = o;
            document.getElementsByTagName("link")[0].href = h;
          }, 2e3);
        }
      });
    })();

    // live2d
    addEventListener("DOMContentLoaded", function () {
      new Live2dLoader([
        {
          width: 400,
          height: 400,
          left: "-70px",
          bottom: "0px",
          role: "https://fastly.jsdelivr.net/gh/alg-wiki/AzurLaneL2DViewer@gh-pages/assets/lafei/lafei.model3.json",
          opacity: 0.75,
          scale: 0.35,
        },
        {
          width: 500,
          height: 450,
          left: "-100px",
          bottom: "0px",
          role: "https://fastly.jsdelivr.net/gh/alg-wiki/AzurLaneL2DViewer@gh-pages/assets/lafei_4/lafei_4.model3.json",
          opacity: 0.75,
          scale: 0.07,
          draggable: false,
        },
        // {
        //   width: 800,
        //   height: 500,
        //   left: "0px",
        //   bottom: "0px",
        //   role: "https://npm.elemecdn.com/live2dofatri@1.0.7/marisagai/marisa.model3.json",
        //   opacity: 0.75,
        //   scale: 0.2,
        //   draggable: true,
        // },
      ]);
    });

    // 防止恶意debug
    // (() =>  {
    //   if (
    //     window.outerHeight - window.innerHeight > 200 ||
    //     window.outerWidth - window.innerWidth > 200
    //   ) {
    //     document.body.innerHTML = "检测到非法调试,请关闭后刷新重试!";
    //   }
    //   setInterval(() => {
    //     (function () {
    //       return false;
    //     }
    //       ["constructor"]("debugger")
    //       ["call"]());
    //   }, 50);
    // })();
  },

  //- 适配pjax刷新
  re: function () {
    this.appender();
  },
};
Weidows.all();
