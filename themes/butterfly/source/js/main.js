document.addEventListener("DOMContentLoaded", function () {
  const $blogName = document.getElementById("site-name");
  let blogNameWidth = $blogName && $blogName.offsetWidth;
  const $menusEle = document.querySelector("#menus .menus_items");
  let menusWidth = $menusEle && $menusEle.offsetWidth;
  const $searchEle = document.querySelector("#search-button");
  let searchWidth = $searchEle && $searchEle.offsetWidth;

  const adjustMenu = (change = false) => {
    if (change) {
      blogNameWidth = $blogName && $blogName.offsetWidth;
      menusWidth = $menusEle && $menusEle.offsetWidth;
      searchWidth = $searchEle && $searchEle.offsetWidth;
    }
    const $nav = document.getElementById("nav");
    let t;
    if (window.innerWidth < 768) t = true;
    else t = blogNameWidth + menusWidth + searchWidth > $nav.offsetWidth - 120;

    if (t) {
      $nav.classList.add("hide-menu");
    } else {
      $nav.classList.remove("hide-menu");
    }
  };

  // 初始化header
  const initAdjust = () => {
    adjustMenu();
    document.getElementById("nav").classList.add("show");
  };

  // sidebar menus
  const sidebarFn = () => {
    const $toggleMenu = document.getElementById("toggle-menu");
    const $mobileSidebarMenus = document.getElementById("sidebar-menus");
    const $menuMask = document.getElementById("menu-mask");
    const $body = document.body;

    function openMobileSidebar() {
      btf.sidebarPaddingR();
      $body.style.overflow = "hidden";
      btf.fadeIn($menuMask, 0.5);
      $mobileSidebarMenus.classList.add("open");
    }

    function closeMobileSidebar() {
      $body.style.overflow = "";
      $body.style.paddingRight = "";
      btf.fadeOut($menuMask, 0.5);
      $mobileSidebarMenus.classList.remove("open");
    }

    $toggleMenu.addEventListener("click", openMobileSidebar);

    $menuMask.addEventListener("click", (e) => {
      if ($mobileSidebarMenus.classList.contains("open")) {
        closeMobileSidebar();
      }
    });

    window.addEventListener("resize", (e) => {
      if (btf.isHidden($toggleMenu)) {
        if ($mobileSidebarMenus.classList.contains("open"))
          closeMobileSidebar();
      }
    });
  };

  /**
   * 首頁top_img底下的箭頭
   */
  const scrollDownInIndex = () => {
    const $scrollDownEle = document.getElementById("scroll-down");
    $scrollDownEle &&
      $scrollDownEle.addEventListener("click", function () {
        btf.scrollToDest(
          document.getElementById("content-inner").offsetTop,
          300
        );
      });
  };

  /**
   * 代碼
   * 只適用於Hexo默認的代碼渲染
   */
  const addHighlightTool = function () {
    const isHighlightCopy = GLOBAL_CONFIG.highlight.highlightCopy;
    const isHighlightLang = GLOBAL_CONFIG.highlight.highlightLang;
    const isHighlightShrink = GLOBAL_CONFIG_SITE.isHighlightShrink;
    const isShowTool =
      isHighlightCopy || isHighlightLang || isHighlightShrink !== undefined;
    const $figureHighlight =
      GLOBAL_CONFIG.highlight.plugin === "highlighjs"
        ? document.querySelectorAll("figure.highlight")
        : document.querySelectorAll('pre[class*="language-"]');

    if (isShowTool && $figureHighlight.length) {
      const isPrismjs = GLOBAL_CONFIG.highlight.plugin === "prismjs";

      let highlightShrinkEle = "";
      let highlightCopyEle = "";
      const highlightShrinkClass = isHighlightShrink === true ? "closed" : "";

      if (isHighlightShrink !== undefined) {
        highlightShrinkEle = `<i class="fas fa-angle-down expand ${highlightShrinkClass}"></i>`;
      }

      if (isHighlightCopy) {
        highlightCopyEle =
          '<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>';
      }

      const copy = (text, ctx) => {
        if (
          document.queryCommandSupported &&
          document.queryCommandSupported("copy")
        ) {
          document.execCommand("copy");
          if (GLOBAL_CONFIG.Snackbar !== undefined) {
            btf.snackbarShow(GLOBAL_CONFIG.copy.success);
          } else {
            const prevEle = ctx.previousElementSibling;
            prevEle.innerText = GLOBAL_CONFIG.copy.success;
            prevEle.style.opacity = 1;
            setTimeout(() => {
              prevEle.style.opacity = 0;
            }, 700);
          }
        } else {
          if (GLOBAL_CONFIG.Snackbar !== undefined) {
            btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport);
          } else {
            ctx.previousElementSibling.innerText = GLOBAL_CONFIG.copy.noSupport;
          }
        }
      };

      // click events
      const highlightCopyFn = (ele) => {
        const $buttonParent = ele.parentNode;
        $buttonParent.classList.add("copy-true");
        const selection = window.getSelection();
        const range = document.createRange();
        if (isPrismjs)
          range.selectNodeContents(
            $buttonParent.querySelectorAll("pre code")[0]
          );
        else
          range.selectNodeContents(
            $buttonParent.querySelectorAll("table .code pre")[0]
          );
        selection.removeAllRanges();
        selection.addRange(range);
        const text = selection.toString();
        copy(text, ele.lastChild);
        selection.removeAllRanges();
        $buttonParent.classList.remove("copy-true");
      };

      const highlightShrinkFn = (ele) => {
        const $nextEle = [...ele.parentNode.children].slice(1);
        ele.firstChild.classList.toggle("closed");
        if (btf.isHidden($nextEle[0])) {
          $nextEle.forEach((e) => {
            e.style.display = "block";
          });
        } else {
          $nextEle.forEach((e) => {
            e.style.display = "none";
          });
        }
      };

      const highlightToolsFn = function (e) {
        const $target = e.target.classList;
        if ($target.contains("expand")) highlightShrinkFn(this);
        else if ($target.contains("copy-button")) highlightCopyFn(this);
      };

      const createEle = () => {
        const newEle = document.createElement("div");
        newEle.className = `highlight-tools ${highlightShrinkClass}`;
        newEle.addEventListener("click", highlightToolsFn);
        return newEle;
      };

      if (isHighlightLang) {
        if (isPrismjs) {
          $figureHighlight.forEach(function (item) {
            const langName =
              item.getAttribute("data-language") !== undefined
                ? item.getAttribute("data-language")
                : "Code";
            const highlightLangEle = `<div class="code-lang">${langName}</div>`;
            btf.wrap(item, "figure", "", "highlight");
            const newEle = createEle();
            newEle.innerHTML =
              highlightShrinkEle + highlightLangEle + highlightCopyEle;
            item.parentNode.insertBefore(newEle, item);
          });
        } else {
          $figureHighlight.forEach(function (item) {
            let langName = item.getAttribute("class").split(" ")[1];
            if (langName === "plain" || langName === undefined)
              langName = "Code";
            const highlightLangEle = `<div class="code-lang">${langName}</div>`;
            const newEle = createEle();
            newEle.innerHTML =
              highlightShrinkEle + highlightLangEle + highlightCopyEle;
            item.insertBefore(newEle, item.firstChild);
          });
        }
      } else {
        if (isPrismjs) {
          $figureHighlight.forEach(function (item) {
            btf.wrap(item, "figure", "", "highlight");
            const newEle = createEle();
            newEle.innerHTML = highlightShrinkEle + highlightCopyEle;
            item.parentNode.insertBefore(newEle, item);
          });
        } else {
          $figureHighlight.forEach(function (item) {
            const newEle = createEle();
            newEle.innerHTML = highlightShrinkEle + highlightCopyEle;
            item.insertBefore(newEle, item.firstChild);
          });
        }
      }
    }
  };

  /**
   * PhotoFigcaption
   */
  function addPhotoFigcaption() {
    document
      .querySelectorAll("#article-container img")
      .forEach(function (item) {
        const parentEle = item.parentNode;
        if (!parentEle.parentNode.classList.contains("justified-gallery")) {
          const ele = document.createElement("div");
          ele.className = "img-alt is-center";
          ele.textContent = item.getAttribute("alt");
          parentEle.insertBefore(ele, item.nextSibling);
        }
      });
  }

  /**
   * justified-gallery 圖庫排版
   * 需要 jQuery
   */

  let detectJgJsLoad = false;
  const runJustifiedGallery = function (ele) {
    const $justifiedGallery = $(ele);
    const $imgList = $justifiedGallery.find("img");
    $imgList.unwrap();
    if ($imgList.length) {
      $imgList.each(function (i, o) {
        if ($(o).attr("data-lazy-src"))
          $(o).attr("src", $(o).attr("data-lazy-src"));
        $(o).wrap("<div></div>");
      });
    }

    if (detectJgJsLoad) btf.initJustifiedGallery($justifiedGallery);
    else {
      $("head").append(
        `<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.justifiedGallery.css}">`
      );
      $.getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`, function () {
        btf.initJustifiedGallery($justifiedGallery);
      });
      detectJgJsLoad = true;
    }
  };

  /**
   * fancybox和 mediumZoom
   */
  const addFancybox = function (ele) {
    const runFancybox = (ele) => {
      ele.each(function (i, o) {
        const $this = $(o);
        const lazyloadSrc = $this.attr("data-lazy-src") || $this.attr("src");
        const dataCaption = $this.attr("alt") || "";
        $this.wrap(
          `<a href="${lazyloadSrc}" data-fancybox="group" data-caption="${dataCaption}" class="fancybox"></a>`
        );
      });

      $().fancybox({
        selector: "[data-fancybox]",
        loop: true,
        transitionEffect: "slide",
        protect: true,
        buttons: ["slideShow", "fullScreen", "thumbs", "close"],
        hash: false,
      });
    };

    if (typeof $.fancybox === "undefined") {
      $("head").append(
        `<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.fancybox.css}">`
      );
      $.getScript(`${GLOBAL_CONFIG.source.fancybox.js}`, function () {
        runFancybox($(ele));
      });
    } else {
      runFancybox($(ele));
    }
  };

  const addMediumZoom = () => {
    const zoom = mediumZoom(
      document.querySelectorAll("#article-container :not(a)>img")
    );
    zoom.on("open", (e) => {
      const photoBg =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "#121212"
          : "#fff";
      zoom.update({
        background: photoBg,
      });
    });
  };

  const jqLoadAndRun = () => {
    const $fancyboxEle =
      GLOBAL_CONFIG.lightbox === "fancybox"
        ? document.querySelectorAll(
            "#article-container :not(a):not(.gallery-group) > img, #article-container > img"
          )
        : [];
    const fbLengthNoZero = $fancyboxEle.length > 0;
    const $jgEle = document.querySelectorAll(
      "#article-container .justified-gallery"
    );
    const jgLengthNoZero = $jgEle.length > 0;

    if (jgLengthNoZero || fbLengthNoZero) {
      btf.isJqueryLoad(() => {
        jgLengthNoZero && runJustifiedGallery($jgEle);
        fbLengthNoZero && addFancybox($fancyboxEle);
      });
    }
  };

  /**
   * 滾動處理
   */
  const scrollFn = function () {
    const $rightside = document.getElementById("rightside");
    const innerHeight = window.innerHeight + 56;

    // 當滾動條小于 56 的時候
    if (document.body.scrollHeight <= innerHeight) {
      $rightside.style.cssText = "opacity: 1; transform: translateX(-38px)";
      return;
    }

    let initTop = 0;
    let isChatShow = true;
    const $header = document.getElementById("page-header");
    const isChatBtnHide = typeof chatBtnHide === "function";
    const isChatBtnShow = typeof chatBtnShow === "function";
    window.addEventListener(
      "scroll",
      btf.throttle(function (e) {
        const currentTop = window.scrollY || document.documentElement.scrollTop;
        const isDown = scrollDirection(currentTop);
        if (currentTop > 56) {
          if (isDown) {
            if ($header.classList.contains("nav-visible"))
              $header.classList.remove("nav-visible");
            if (isChatBtnShow && isChatShow === true) {
              chatBtnHide();
              isChatShow = false;
            }
          } else {
            if (!$header.classList.contains("nav-visible"))
              $header.classList.add("nav-visible");
            if (isChatBtnHide && isChatShow === false) {
              chatBtnShow();
              isChatShow = true;
            }
          }
          $header.classList.add("nav-fixed");
          if (
            window.getComputedStyle($rightside).getPropertyValue("opacity") ===
            "0"
          ) {
            $rightside.style.cssText =
              "opacity: 1; transform: translateX(-38px)";
          }
        } else {
          if (currentTop === 0) {
            $header.classList.remove("nav-fixed", "nav-visible");
          }
          $rightside.style.cssText = "opacity: ''; transform: ''";
        }

        if (document.body.scrollHeight <= innerHeight) {
          $rightside.style.cssText = "opacity: 1; transform: translateX(-38px)";
        }
      }, 200)
    );

    // find the scroll direction
    function scrollDirection(currentTop) {
      const result = currentTop > initTop; // true is down & false is up
      initTop = currentTop;
      return result;
    }
  };

  /**
   *  toc
   */
  const tocFn = function () {
    const $cardTocLayout = document.getElementById("card-toc");
    const $cardToc = $cardTocLayout.getElementsByClassName("toc-content")[0];
    const $tocLink = $cardToc.querySelectorAll(".toc-link");
    const $article = document.getElementById("article-container");

    // main of scroll
    window.addEventListener(
      "scroll",
      btf.throttle(function (e) {
        const currentTop = window.scrollY || document.documentElement.scrollTop;
        scrollPercent(currentTop);
        findHeadPosition(currentTop);
      }, 100)
    );

    const scrollPercent = function (currentTop) {
      const docHeight = $article.clientHeight;
      const winHeight = document.documentElement.clientHeight;
      const headerHeight = $article.offsetTop;
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
      $cardToc.setAttribute("progress-percentage", percentage);
    };

    // anchor
    const isAnchor = GLOBAL_CONFIG.isanchor;
    const updateAnchor = function (anchor) {
      if (window.history.replaceState && anchor !== window.location.hash) {
        if (!anchor) anchor = location.pathname;
        window.history.replaceState({}, "", anchor);
      }
    };

    const mobileToc = {
      open: () => {
        $cardTocLayout.style.cssText =
          "animation: toc-open .3s; opacity: 1; right: 45px";
      },

      close: () => {
        $cardTocLayout.style.animation = "toc-close .2s";
        setTimeout(() => {
          $cardTocLayout.style.cssText = "opacity:''; animation: ''; right: ''";
        }, 100);
      },
    };

    document
      .getElementById("mobile-toc-button")
      .addEventListener("click", () => {
        if (
          window
            .getComputedStyle($cardTocLayout)
            .getPropertyValue("opacity") === "0"
        )
          mobileToc.open();
        else mobileToc.close();
      });

    // toc元素點擊
    $cardToc.addEventListener("click", (e) => {
      e.preventDefault();
      const $target = e.target.classList.contains("toc-link")
        ? e.target
        : e.target.parentElement;
      btf.scrollToDest(
        btf.getEleTop(
          document.getElementById(
            decodeURI($target.getAttribute("href")).replace("#", "")
          )
        ),
        300
      );
      if (window.innerWidth < 900) {
        mobileToc.close();
      }
    });

    const autoScrollToc = function (item) {
      const activePosition = item.getBoundingClientRect().top;
      const sidebarScrollTop = $cardToc.scrollTop;
      if (activePosition > document.documentElement.clientHeight - 100) {
        $cardToc.scrollTop = sidebarScrollTop + 150;
      }
      if (activePosition < 100) {
        $cardToc.scrollTop = sidebarScrollTop - 150;
      }
    };

    // find head position & add active class
    const list = $article.querySelectorAll("h1,h2,h3,h4,h5,h6");
    let detectItem = "";
    const findHeadPosition = function (top) {
      if ($tocLink.length === 0 || top === 0) {
        return false;
      }

      let currentId = "";
      let currentIndex = "";

      list.forEach(function (ele, index) {
        if (top > btf.getEleTop(ele) - 80) {
          currentId = "#" + encodeURI(ele.getAttribute("id"));
          currentIndex = index;
        }
      });

      if (detectItem === currentIndex) return;

      if (isAnchor) updateAnchor(currentId);

      if (currentId === "") {
        $cardToc.querySelectorAll(".active").forEach((i) => {
          i.classList.remove("active");
        });
        detectItem = currentIndex;
        return;
      }

      detectItem = currentIndex;

      $cardToc.querySelectorAll(".active").forEach((item) => {
        item.classList.remove("active");
      });
      const currentActive = $tocLink[currentIndex];
      currentActive.classList.add("active");

      setTimeout(() => {
        autoScrollToc(currentActive);
      }, 0);

      let parent = currentActive.parentNode;

      for (; !parent.matches(".toc"); parent = parent.parentNode) {
        if (parent.matches("li")) parent.classList.add("active");
      }
    };
  };

  /**
   * Rightside
   */
  const rightSideFn = {
    switchReadMode: () => {
      // read-mode
      const $body = document.body;
      $body.classList.add("read-mode");
      const newEle = document.createElement("button");
      newEle.type = "button";
      newEle.className = "fas fa-sign-out-alt exit-readmode";
      $body.appendChild(newEle);

      function clickFn() {
        $body.classList.remove("read-mode");
        newEle.remove();
        newEle.removeEventListener("click", clickFn);
      }

      newEle.addEventListener("click", clickFn);
    },
    switchDarkMode: () => {
      // Switch Between Light And Dark Mode
      const nowMode =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light";
      if (nowMode === "light") {
        activateDarkMode();
        saveToLocal.set("theme", "dark", 2);
        GLOBAL_CONFIG.Snackbar !== undefined &&
          btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
      } else {
        activateLightMode();
        saveToLocal.set("theme", "light", 2);
        GLOBAL_CONFIG.Snackbar !== undefined &&
          btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
      }
      // handle some cases
      typeof utterancesTheme === "function" && utterancesTheme();
      typeof FB === "object" && window.loadFBComment();
      window.DISQUS &&
        document.getElementById("disqus_thread").children.length &&
        setTimeout(() => window.disqusReset(), 200);
    },
    showOrHideBtn: () => {
      // rightside 點擊設置 按鈕 展開
      document.getElementById("rightside-config-hide").classList.toggle("show");
    },
    scrollToTop: () => {
      // Back to top
      btf.scrollToDest(0, 500);
    },
    hideAsideBtn: () => {
      // Hide aside
      const $htmlDom = document.documentElement.classList;
      $htmlDom.contains("hide-aside")
        ? saveToLocal.set("aside-status", "show", 2)
        : saveToLocal.set("aside-status", "hide", 2);
      $htmlDom.toggle("hide-aside");
    },

    adjustFontSize: (plus) => {
      const fontSizeVal = parseInt(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--global-font-size")
      );
      let newValue = "";
      if (plus) {
        if (fontSizeVal >= 20) return;
        newValue = fontSizeVal + 1;
        document.documentElement.style.setProperty(
          "--global-font-size",
          newValue + "px"
        );
        !document.getElementById("nav").classList.contains("hide-menu") &&
          adjustMenu(true);
      } else {
        if (fontSizeVal <= 10) return;
        newValue = fontSizeVal - 1;
        document.documentElement.style.setProperty(
          "--global-font-size",
          newValue + "px"
        );
        document.getElementById("nav").classList.contains("hide-menu") &&
          adjustMenu(true);
      }

      saveToLocal.set("global-font-size", newValue, 2);
      // document.getElementById('font-text').innerText = newValue
    },
  };

  document.getElementById("rightside").addEventListener("click", function (e) {
    const $target = e.target.id || e.target.parentNode.id;
    switch ($target) {
      case "go-up":
        rightSideFn.scrollToTop();
        break;
      case "rightside_config":
        rightSideFn.showOrHideBtn();
        break;
      case "readmode":
        rightSideFn.switchReadMode();
        break;
      case "darkmode":
        rightSideFn.switchDarkMode();
        break;
      case "hide-aside-btn":
        rightSideFn.hideAsideBtn();
        break;
      case "font-plus":
        rightSideFn.adjustFontSize(true);
        break;
      case "font-minus":
        rightSideFn.adjustFontSize();
        break;
      default:
        break;
    }
  });

  /**
   * menu
   * 側邊欄sub-menu 展開/收縮
   * 解決menus在觸摸屏下，滑動屏幕menus_item_child不消失的問題（手機hover的bug)
   */
  const clickFnOfSubMenu = function () {
    document.querySelectorAll("#sidebar-menus .expand").forEach(function (e) {
      e.addEventListener("click", function () {
        this.classList.toggle("hide");
        const $dom = this.parentNode.nextElementSibling;
        if (btf.isHidden($dom)) {
          $dom.style.display = "block";
        } else {
          $dom.style.display = "none";
        }
      });
    });

    window.addEventListener("touchmove", function (e) {
      const $menusChild = document.querySelectorAll("#nav .menus_item_child");
      $menusChild.forEach((item) => {
        if (!btf.isHidden(item)) item.style.display = "none";
      });
    });
  };

  /**
   * 複製時加上版權信息
   */
  const addCopyright = () => {
    const copyright = GLOBAL_CONFIG.copyright;
    document.body.oncopy = (e) => {
      e.preventDefault();
      let textFont;
      const copyFont = window.getSelection(0).toString();
      if (copyFont.length > copyright.limitCount) {
        textFont =
          copyFont +
          "\n" +
          "\n" +
          "\n" +
          copyright.languages.author +
          "\n" +
          copyright.languages.link +
          window.location.href +
          "\n" +
          copyright.languages.source +
          "\n" +
          copyright.languages.info;
      } else {
        textFont = copyFont;
      }
      if (e.clipboardData) {
        return e.clipboardData.setData("text", textFont);
      } else {
        return window.clipboardData.setData("text", textFont);
      }
    };
  };

  /**
   * 網頁運行時間
   */
  const addRuntime = () => {
    const $runtimeCount = document.getElementById("runtimeshow");
    if ($runtimeCount) {
      const publishDate = $runtimeCount.getAttribute("data-publishDate");
      $runtimeCount.innerText =
        btf.diffDate(publishDate) + " " + GLOBAL_CONFIG.runtime;
    }
  };

  /**
   * 最後一次更新時間
   */
  const addLastPushDate = () => {
    const $lastPushDateItem = document.getElementById("last-push-date");
    if ($lastPushDateItem) {
      const lastPushDate = $lastPushDateItem.getAttribute("data-lastPushDate");
      $lastPushDateItem.innerText = btf.diffDate(lastPushDate, true);
    }
  };

  /**
   * table overflow
   */
  const addTableWrap = function () {
    const $table = document.querySelectorAll(
      "#article-container :not(.highlight) > table, #article-container > table"
    );
    if ($table.length) {
      $table.forEach((item) => {
        btf.wrap(item, "div", "", "table-wrap");
      });
    }
  };

  /**
   * tag-hide
   */
  const clickFnOfTagHide = function () {
    const $hideInline = document.querySelectorAll(
      "#article-container .hide-button"
    );
    if ($hideInline.length) {
      $hideInline.forEach(function (item) {
        item.addEventListener("click", function (e) {
          const $this = this;
          const $hideContent = $this.nextElementSibling;
          $this.classList.toggle("open");
          if ($this.classList.contains("open")) {
            if (
              $hideContent.querySelectorAll(".justified-gallery").length > 0
            ) {
              btf.initJustifiedGallery(
                $hideContent.querySelectorAll(".justified-gallery")
              );
            }
          }
        });
      });
    }
  };

  const tabsFn = {
    clickFnOfTabs: function () {
      document
        .querySelectorAll("#article-container .tab > button")
        .forEach(function (item) {
          item.addEventListener("click", function (e) {
            const $this = this;
            const $tabItem = $this.parentNode;

            if (!$tabItem.classList.contains("active")) {
              const $tabContent = $tabItem.parentNode.nextElementSibling;
              const $siblings = btf.siblings($tabItem, ".active")[0];
              $siblings && $siblings.classList.remove("active");
              $tabItem.classList.add("active");
              const tabId = $this.getAttribute("data-href").replace("#", "");
              const childList = [...$tabContent.children];
              childList.forEach((item) => {
                if (item.id === tabId) item.classList.add("active");
                else item.classList.remove("active");
              });
              const $isTabJustifiedGallery = $tabContent.querySelectorAll(
                `#${tabId} .justified-gallery`
              );
              if ($isTabJustifiedGallery.length > 0) {
                btf.initJustifiedGallery($isTabJustifiedGallery);
              }
            }
          });
        });
    },
    backToTop: () => {
      document
        .querySelectorAll("#article-container .tabs .tab-to-top")
        .forEach(function (item) {
          item.addEventListener("click", function () {
            btf.scrollToDest(btf.getEleTop(btf.getParents(this, ".tabs")), 300);
          });
        });
    },
  };

  const toggleCardCategory = function () {
    const $cardCategory = document.querySelectorAll(
      "#aside-cat-list .card-category-list-item.parent i"
    );
    if ($cardCategory.length) {
      $cardCategory.forEach(function (item) {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          const $this = this;
          $this.classList.toggle("expand");
          const $parentEle = $this.parentNode.nextElementSibling;
          if (btf.isHidden($parentEle)) {
            $parentEle.style.display = "block";
          } else {
            $parentEle.style.display = "none";
          }
        });
      });
    }
  };

  const switchComments = function () {
    let switchDone = false;
    const $switchBtn = document.querySelector("#comment-switch > .switch-btn");
    $switchBtn &&
      $switchBtn.addEventListener("click", function () {
        this.classList.toggle("move");
        document
          .querySelectorAll("#post-comment > .comment-wrap > div")
          .forEach(function (item) {
            if (btf.isHidden(item)) {
              item.style.cssText = "display: block;animation: tabshow .5s";
            } else {
              item.style.cssText = "display: none;animation: ''";
            }
          });

        if (!switchDone && typeof loadOtherComment === "function") {
          switchDone = true;
          loadOtherComment();
        }
      });
  };

  const addPostOutdateNotice = function () {
    const data = GLOBAL_CONFIG.noticeOutdate;
    const diffDay = btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);
    if (diffDay >= data.limitDay) {
      const ele = document.createElement("div");
      ele.className = "post-outdate-notice";
      ele.textContent =
        data.messagePrev + " " + diffDay + " " + data.messageNext;
      const $targetEle = document.getElementById("article-container");
      if (data.position === "top") {
        $targetEle.insertBefore(ele, $targetEle.firstChild);
      } else {
        $targetEle.appendChild(ele);
      }
    }
  };

  const lazyloadImg = () => {
    window.lazyLoadInstance = new LazyLoad({
      elements_selector: "img",
      threshold: 0,
      data_src: "lazy-src",
    });
  };

  const relativeDate = function (selector) {
    selector.forEach((item) => {
      const $this = item;
      const timeVal = $this.getAttribute("datetime");
      $this.innerText = btf.diffDate(timeVal, true);
      $this.style.display = "inline";
    });
  };

  const unRefreshFn = function () {
    window.addEventListener("resize", adjustMenu);
    window.addEventListener("orientationchange", () => {
      setTimeout(adjustMenu(true), 100);
    });

    clickFnOfSubMenu();
    GLOBAL_CONFIG.islazyload && lazyloadImg();
    GLOBAL_CONFIG.copyright !== undefined && addCopyright();
  };

  window.refreshFn = function () {
    initAdjust();

    if (GLOBAL_CONFIG_SITE.isPost) {
      GLOBAL_CONFIG_SITE.isToc && tocFn();
      GLOBAL_CONFIG.noticeOutdate !== undefined && addPostOutdateNotice();
      GLOBAL_CONFIG.relativeDate.post &&
        relativeDate(document.querySelectorAll("#post-meta time"));
    } else {
      GLOBAL_CONFIG.relativeDate.homepage &&
        relativeDate(document.querySelectorAll("#recent-posts time"));
      GLOBAL_CONFIG.runtime && addRuntime();
      addLastPushDate();
      toggleCardCategory();
    }

    sidebarFn();
    GLOBAL_CONFIG_SITE.isHome && scrollDownInIndex();
    GLOBAL_CONFIG.highlight && addHighlightTool();
    GLOBAL_CONFIG.isPhotoFigcaption && addPhotoFigcaption();
    jqLoadAndRun();
    GLOBAL_CONFIG.lightbox === "mediumZoom" && addMediumZoom();
    scrollFn();
    addTableWrap();
    clickFnOfTagHide();
    tabsFn.clickFnOfTabs();
    tabsFn.backToTop();
    switchComments();
  };

  /*
   * @Author: Weidows
   * @Date: 2020-08-19 16:42:36
   * @LastEditors: Weidows
   * @LastEditTime: 2021-02-07 13:35:52
   * @FilePath: \Weidowsd:\Game\Github\Blog-private\themes\butterfly\source\js\mine.js
   */

  /*添加图片top到返回顶部按钮下*/
  document.getElementById("go-up").innerHTML +=
    "<img class='fas fa-arrow-up' style='max-width: 300%; transform: translate(-30px,0px);' src='https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/up.png' title='芜湖起飞!' >";

  // 判断移动端设备,樱花特效
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
      img.src = "https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/Sakura.png";
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
  browserRedirect();

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
                  ((n = document.querySelector(c.elem)).style.height =
                    r + "px"),
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

  /* 实例化对象,下面操作的基础 */
  var xiaokang = new xkTool();
  /* 页脚footer养鱼 */
  xiaokang.footFish();
  /* 欺诈标题[离开时标题,回来时标题,离开时图标,回来后图标] */
  xiaokang.cheatTitle([
    "这里这里 ◕ ں ◕ ",
    "ヘ(￣ω￣ヘ)走开！",
    "https://cdn.jsdelivr.net/gh/Weidows/Images@master/Humor/ComicExpression/74ef2ed780ee230c08866adfa01dbe297b5467b4.png",
    "https://cdn.jsdelivr.net/gh/Weidows/Images@master/Humor/ComicExpression/34e594f5a6b38285aa8bc7f005861ca1b383d1e2.png",
  ]);
  //全局左下角meting
  // xiaokang.meting("5213523516", "netease", "playlist");

  refreshFn();
  unRefreshFn();
});
