const btf = {
  debounce: function (func, wait, immediate) {
    let timeout
    return function () {
      const context = this
      const args = arguments
      const later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  },

  throttle: function (func, wait, options) {
    let timeout, context, args
    let previous = 0
    if (!options) options = {}

    const later = function () {
      previous = options.leading === false ? 0 : new Date().getTime()
      timeout = null
      func.apply(context, args)
      if (!timeout) context = args = null
    }

    const throttled = function () {
      const now = new Date().getTime()
      if (!previous && options.leading === false) previous = now
      const remaining = wait - (now - previous)
      context = this
      args = arguments
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        func.apply(context, args)
        if (!timeout) context = args = null
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining)
      }
    }

    return throttled
  },

  sidebarPaddingR: () => {
    const innerWidth = window.innerWidth
    const clientWidth = document.body.clientWidth
    const paddingRight = innerWidth - clientWidth
    if (innerWidth !== clientWidth) {
      document.body.style.paddingRight = paddingRight + 'px'
    }
  },

  snackbarShow: (text, showAction, duration) => {
    const sa = (typeof showAction !== 'undefined') ? showAction : false
    const dur = (typeof duration !== 'undefined') ? duration : 2000
    const position = GLOBAL_CONFIG.Snackbar.position
    const bg = document.documentElement.getAttribute('data-theme') === 'light' ? GLOBAL_CONFIG.Snackbar.bgLight : GLOBAL_CONFIG.Snackbar.bgDark
    Snackbar.show({
      text: text,
      backgroundColor: bg,
      showAction: sa,
      duration: dur,
      pos: position
    })
  },

  initJustifiedGallery: function (selector) {
    if (!(selector instanceof jQuery)) {
      selector = $(selector)
    }
    selector.each(function (i, o) {
      if ($(this).is(':visible')) {
        $(this).justifiedGallery({
          rowHeight: 220,
          margins: 4
        })
      }
    })
  },

  diffDate: (d, more = false) => {
    const dateNow = new Date()
    const datePost = new Date(d)
    const dateDiff = dateNow.getTime() - datePost.getTime()
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const month = day * 30

    let result
    if (more) {
      const monthCount = dateDiff / month
      const dayCount = dateDiff / day
      const hourCount = dateDiff / hour
      const minuteCount = dateDiff / minute

      if (monthCount > 12) {
        result = datePost.toLocaleDateString().replace(/\//g, '-')
      } else if (monthCount >= 1) {
        result = parseInt(monthCount) + ' ' + GLOBAL_CONFIG.date_suffix.month
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + ' ' + GLOBAL_CONFIG.date_suffix.day
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + ' ' + GLOBAL_CONFIG.date_suffix.hour
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + ' ' + GLOBAL_CONFIG.date_suffix.min
      } else {
        result = GLOBAL_CONFIG.date_suffix.just
      }
    } else {
      result = parseInt(dateDiff / day)
    }
    return result
  },

  loadComment: (dom, callback) => {
    if ('IntersectionObserver' in window) {
      const observerItem = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback()
          observerItem.disconnect()
        }
      }, { threshold: [0] })
      observerItem.observe(dom)
    } else {
      callback()
    }
  },

  scrollToDest: (pos, time) => {
    if (pos < 0 || time < 0) {
      return
    }

    const currentPos = window.scrollY || window.screenTop
    if (currentPos > pos) pos = pos - 70

    if ('CSS' in window && CSS.supports('scroll-behavior', 'smooth')) {
      window.scrollTo({
        top: pos,
        behavior: 'smooth'
      })
      return
    }

    let start = null
    time = time || 500
    window.requestAnimationFrame(function step (currentTime) {
      start = !start ? currentTime : start
      if (currentPos < pos) {
        const progress = currentTime - start
        window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos)
        if (progress < time) {
          window.requestAnimationFrame(step)
        } else {
          window.scrollTo(0, pos)
        }
      } else {
        const progress = currentTime - start
        window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time))
        if (progress < time) {
          window.requestAnimationFrame(step)
        } else {
          window.scrollTo(0, pos)
        }
      }
    })
  },

  fadeIn: (ele, time) => {
    ele.style.cssText = `display:block;animation: to_show ${time}s`
  },

  fadeOut: (ele, time) => {
    ele.addEventListener('animationend', function f () {
      ele.style.cssText = "display: none; animation: '' "
      ele.removeEventListener('animationend', f)
    })
    ele.style.animation = `to_hide ${time}s`
  },

  getParents: (elem, selector) => {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem
    }
    return null
  },

  siblings: (ele, selector) => {
    return [...ele.parentNode.children].filter((child) => {
      if (selector) {
        return child !== ele && child.matches(selector)
      }
      return child !== ele
    })
  },

  /**
   *
   * @param {*} selector
   * @param {*} eleType the type of create element
   * @param {*} options object key: value
   */
  wrap: (selector, eleType, options) => {
    const creatEle = document.createElement(eleType)
    for (const [key, value] of Object.entries(options)) {
      creatEle.setAttribute(key, value)
    }
    selector.parentNode.insertBefore(creatEle, selector)
    creatEle.appendChild(selector)
  },

  unwrap: el => {
    const elParentNode = el.parentNode
    if (elParentNode !== document.body) {
      elParentNode.parentNode.insertBefore(el, elParentNode)
      elParentNode.parentNode.removeChild(elParentNode)
    }
  },

  isJqueryLoad: fn => {
    if (typeof jQuery === 'undefined') {
      getScript(GLOBAL_CONFIG.source.jQuery).then(fn)
    } else {
      fn()
    }
  },

  isHidden: ele => ele.offsetHeight === 0 && ele.offsetWidth === 0,

  getEleTop: ele => {
    let actualTop = ele.offsetTop
    let current = ele.offsetParent

    while (current !== null) {
      actualTop += current.offsetTop
      current = current.offsetParent
    }

    return actualTop
  }

}

//- 我的美化
var Weidows = {
  //- 判断移动端设备
    // device: function () {
    //   var sUserAgent = navigator.userAgent.toLowerCase();
    //   var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    //   var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    //   var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    //   var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    //   var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    //   var bIsAndroid = sUserAgent.match(/android/i) == "android";
    //   var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    //   var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    //   if (
    //     !(
    //       bIsIpad ||
    //       bIsIphoneOs ||
    //       bIsMidp ||
    //       bIsUc7 ||
    //       bIsUc ||
    //       bIsAndroid ||
    //       bIsCE ||
    //       bIsWM
    //     )
    //   ) {
    //     //- this.footFish();
    //   }
    // },
  //- 页脚footer养鱼
    //- footFish: function () {
    //-   $("#footer-wrap").css({
    //-     position: "absolute",
    //-     "text-align": "center",
    //-     top: 0,
    //-     right: 0,
    //-     left: 0,
    //-     bottom: 0,
    //-     // "z-index": 99,
    //-   }),
    //-     $("footer").append(
    //-       '<div class="container" id="jsi-flying-fish-container"></div>'
    //-     );
    //-   var RENDERER = {
    //-     POINT_INTERVAL: 5,
    //-     FISH_COUNT: 3,
    //-     MAX_INTERVAL_COUNT: 50,
    //-     INIT_HEIGHT_RATE: 0.5,
    //-     THRESHOLD: 50,

    //-     init: function () {
    //-       this.setParameters();
    //-       this.reconstructMethods();
    //-       this.setup();
    //-       this.bindEvent();
    //-       this.render();
    //-     },
    //-     setParameters: function () {
    //-       this.$window = $(window);
    //-       this.$container = $("#jsi-flying-fish-container");
    //-       this.$canvas = $("<canvas />");
    //-       this.context = this.$canvas
    //-         .appendTo(this.$container)
    //-         .get(0)
    //-         .getContext("2d");
    //-       this.points = [];
    //-       this.fishes = [];
    //-       this.watchIds = [];
    //-     },
    //-     createSurfacePoints: function () {
    //-       var count = Math.round(this.width / this.POINT_INTERVAL);
    //-       this.pointInterval = this.width / (count - 1);
    //-       this.points.push(new SURFACE_POINT(this, 0));

    //-       for (var i = 1; i < count; i++) {
    //-         var point = new SURFACE_POINT(this, i * this.pointInterval),
    //-           previous = this.points[i - 1];

    //-         point.setPreviousPoint(previous);
    //-         previous.setNextPoint(point);
    //-         this.points.push(point);
    //-       }
    //-     },
    //-     reconstructMethods: function () {
    //-       this.watchWindowSize = this.watchWindowSize.bind(this);
    //-       this.jdugeToStopResize = this.jdugeToStopResize.bind(this);
    //-       this.startEpicenter = this.startEpicenter.bind(this);
    //-       this.moveEpicenter = this.moveEpicenter.bind(this);
    //-       this.reverseVertical = this.reverseVertical.bind(this);
    //-       this.render = this.render.bind(this);
    //-     },
    //-     setup: function () {
    //-       this.points.length = 0;
    //-       this.fishes.length = 0;
    //-       this.watchIds.length = 0;
    //-       this.intervalCount = this.MAX_INTERVAL_COUNT;
    //-       this.width = this.$container.width();
    //-       this.height = this.$container.height();
    //-       this.fishCount =
    //-         (((this.FISH_COUNT * this.width) / 500) * this.height) / 500;
    //-       this.$canvas.attr({ width: this.width, height: this.height });
    //-       this.reverse = false;

    //-       this.fishes.push(new FISH(this));
    //-       this.createSurfacePoints();
    //-     },
    //-     watchWindowSize: function () {
    //-       this.clearTimer();
    //-       this.tmpWidth = this.$window.width();
    //-       this.tmpHeight = this.$window.height();
    //-       this.watchIds.push(
    //-         setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL)
    //-       );
    //-     },
    //-     clearTimer: function () {
    //-       while (this.watchIds.length > 0) {
    //-         clearTimeout(this.watchIds.pop());
    //-       }
    //-     },
    //-     jdugeToStopResize: function () {
    //-       var width = this.$window.width(),
    //-         height = this.$window.height(),
    //-         stopped = width == this.tmpWidth && height == this.tmpHeight;

    //-       this.tmpWidth = width;
    //-       this.tmpHeight = height;

    //-       if (stopped) {
    //-         this.setup();
    //-       }
    //-     },
    //-     bindEvent: function () {
    //-       this.$window.on("resize", this.watchWindowSize);
    //-       this.$container.on("mouseenter", this.startEpicenter);
    //-       this.$container.on("mousemove", this.moveEpicenter);
    //-       this.$container.on("click", this.reverseVertical);
    //-     },
    //-     getAxis: function (event) {
    //-       var offset = this.$container.offset();

    //-       return {
    //-         x: event.clientX - offset.left + this.$window.scrollLeft(),
    //-         y: event.clientY - offset.top + this.$window.scrollTop(),
    //-       };
    //-     },
    //-     startEpicenter: function (event) {
    //-       this.axis = this.getAxis(event);
    //-     },
    //-     moveEpicenter: function (event) {
    //-       var axis = this.getAxis(event);

    //-       if (!this.axis) {
    //-         this.axis = axis;
    //-       }
    //-       this.generateEpicenter(axis.x, axis.y, axis.y - this.axis.y);
    //-       this.axis = axis;
    //-     },
    //-     generateEpicenter: function (x, y, velocity) {
    //-       if (
    //-         y < this.height / 2 - this.THRESHOLD ||
    //-         y > this.height / 2 + this.THRESHOLD
    //-       ) {
    //-         return;
    //-       }
    //-       var index = Math.round(x / this.pointInterval);

    //-       if (index < 0 || index >= this.points.length) {
    //-         return;
    //-       }
    //-       this.points[index].interfere(y, velocity);
    //-     },
    //-     reverseVertical: function () {
    //-       this.reverse = !this.reverse;

    //-       for (var i = 0, count = this.fishes.length; i < count; i++) {
    //-         this.fishes[i].reverseVertical();
    //-       }
    //-     },
    //-     controlStatus: function () {
    //-       for (var i = 0, count = this.points.length; i < count; i++) {
    //-         this.points[i].updateSelf();
    //-       }
    //-       for (var i = 0, count = this.points.length; i < count; i++) {
    //-         this.points[i].updateNeighbors();
    //-       }
    //-       if (this.fishes.length < this.fishCount) {
    //-         if (--this.intervalCount == 0) {
    //-           this.intervalCount = this.MAX_INTERVAL_COUNT;
    //-           this.fishes.push(new FISH(this));
    //-         }
    //-       }
    //-     },
    //-     render: function () {
    //-       requestAnimationFrame(this.render);
    //-       this.controlStatus();
    //-       this.context.clearRect(0, 0, this.width, this.height);
    //-       this.context.fillStyle = "hsl(0, 0%, 95%)";

    //-       for (var i = 0, count = this.fishes.length; i < count; i++) {
    //-         this.fishes[i].render(this.context);
    //-       }
    //-       this.context.save();
    //-       this.context.globalCompositeOperation = "xor";
    //-       this.context.beginPath();
    //-       this.context.moveTo(0, this.reverse ? 0 : this.height);

    //-       for (var i = 0, count = this.points.length; i < count; i++) {
    //-         this.points[i].render(this.context);
    //-       }
    //-       this.context.lineTo(this.width, this.reverse ? 0 : this.height);
    //-       this.context.closePath();
    //-       this.context.fill();
    //-       this.context.restore();
    //-     },
    //-   };
    //-   var SURFACE_POINT = function (renderer, x) {
    //-     this.renderer = renderer;
    //-     this.x = x;
    //-     this.init();
    //-   };
    //-   SURFACE_POINT.prototype = {
    //-     SPRING_CONSTANT: 0.03,
    //-     SPRING_FRICTION: 0.9,
    //-     WAVE_SPREAD: 0.3,
    //-     ACCELARATION_RATE: 0.01,

    //-     init: function () {
    //-       this.initHeight =
    //-         this.renderer.height * this.renderer.INIT_HEIGHT_RATE;
    //-       this.height = this.initHeight;
    //-       this.fy = 0;
    //-       this.force = { previous: 0, next: 0 };
    //-     },
    //-     setPreviousPoint: function (previous) {
    //-       this.previous = previous;
    //-     },
    //-     setNextPoint: function (next) {
    //-       this.next = next;
    //-     },
    //-     interfere: function (y, velocity) {
    //-       this.fy =
    //-         this.renderer.height *
    //-         this.ACCELARATION_RATE *
    //-         (this.renderer.height - this.height - y >= 0 ? -1 : 1) *
    //-         Math.abs(velocity);
    //-     },
    //-     updateSelf: function () {
    //-       this.fy += this.SPRING_CONSTANT * (this.initHeight - this.height);
    //-       this.fy *= this.SPRING_FRICTION;
    //-       this.height += this.fy;
    //-     },
    //-     updateNeighbors: function () {
    //-       if (this.previous) {
    //-         this.force.previous =
    //-           this.WAVE_SPREAD * (this.height - this.previous.height);
    //-       }
    //-       if (this.next) {
    //-         this.force.next =
    //-           this.WAVE_SPREAD * (this.height - this.next.height);
    //-       }
    //-     },
    //-     render: function (context) {
    //-       if (this.previous) {
    //-         this.previous.height += this.force.previous;
    //-         this.previous.fy += this.force.previous;
    //-       }
    //-       if (this.next) {
    //-         this.next.height += this.force.next;
    //-         this.next.fy += this.force.next;
    //-       }
    //-       context.lineTo(this.x, this.renderer.height - this.height);
    //-     },
    //-   };
    //-   var FISH = function (renderer) {
    //-     this.renderer = renderer;
    //-     this.init();
    //-   };
    //-   FISH.prototype = {
    //-     GRAVITY: 0.4,

    //-     init: function () {
    //-       this.direction = Math.random() < 0.5;
    //-       this.x = this.direction
    //-         ? this.renderer.width + this.renderer.THRESHOLD
    //-         : -this.renderer.THRESHOLD;
    //-       this.previousY = this.y;
    //-       this.vx = this.getRandomValue(4, 10) * (this.direction ? -1 : 1);

    //-       if (this.renderer.reverse) {
    //-         this.y = this.getRandomValue(
    //-           (this.renderer.height * 1) / 10,
    //-           (this.renderer.height * 4) / 10
    //-         );
    //-         this.vy = this.getRandomValue(2, 5);
    //-         this.ay = this.getRandomValue(0.05, 0.2);
    //-       } else {
    //-         this.y = this.getRandomValue(
    //-           (this.renderer.height * 6) / 10,
    //-           (this.renderer.height * 9) / 10
    //-         );
    //-         this.vy = this.getRandomValue(-5, -2);
    //-         this.ay = this.getRandomValue(-0.2, -0.05);
    //-       }
    //-       this.isOut = false;
    //-       this.theta = 0;
    //-       this.phi = 0;
    //-     },
    //-     getRandomValue: function (min, max) {
    //-       return min + (max - min) * Math.random();
    //-     },
    //-     reverseVertical: function () {
    //-       this.isOut = !this.isOut;
    //-       this.ay *= -1;
    //-     },
    //-     controlStatus: function (context) {
    //-       this.previousY = this.y;
    //-       this.x += this.vx;
    //-       this.y += this.vy;
    //-       this.vy += this.ay;

    //-       if (this.renderer.reverse) {
    //-         if (
    //-           this.y >
    //-           this.renderer.height * this.renderer.INIT_HEIGHT_RATE
    //-         ) {
    //-           this.vy -= this.GRAVITY;
    //-           this.isOut = true;
    //-         } else {
    //-           if (this.isOut) {
    //-             this.ay = this.getRandomValue(0.05, 0.2);
    //-           }
    //-           this.isOut = false;
    //-         }
    //-       } else {
    //-         if (
    //-           this.y <
    //-           this.renderer.height * this.renderer.INIT_HEIGHT_RATE
    //-         ) {
    //-           this.vy += this.GRAVITY;
    //-           this.isOut = true;
    //-         } else {
    //-           if (this.isOut) {
    //-             this.ay = this.getRandomValue(-0.2, -0.05);
    //-           }
    //-           this.isOut = false;
    //-         }
    //-       }
    //-       if (!this.isOut) {
    //-         this.theta += Math.PI / 20;
    //-         this.theta %= Math.PI * 2;
    //-         this.phi += Math.PI / 30;
    //-         this.phi %= Math.PI * 2;
    //-       }
    //-       this.renderer.generateEpicenter(
    //-         this.x + (this.direction ? -1 : 1) * this.renderer.THRESHOLD,
    //-         this.y,
    //-         this.y - this.previousY
    //-       );

    //-       if (
    //-         (this.vx > 0 &&
    //-           this.x > this.renderer.width + this.renderer.THRESHOLD) ||
    //-         (this.vx < 0 && this.x < -this.renderer.THRESHOLD)
    //-       ) {
    //-         this.init();
    //-       }
    //-     },
    //-     render: function (context) {
    //-       context.save();
    //-       context.translate(this.x, this.y);
    //-       context.rotate(Math.PI + Math.atan2(this.vy, this.vx));
    //-       context.scale(1, this.direction ? 1 : -1);
    //-       context.beginPath();
    //-       context.moveTo(-30, 0);
    //-       context.bezierCurveTo(-20, 15, 15, 10, 40, 0);
    //-       context.bezierCurveTo(15, -10, -20, -15, -30, 0);
    //-       context.fill();

    //-       context.save();
    //-       context.translate(40, 0);
    //-       context.scale(0.9 + 0.2 * Math.sin(this.theta), 1);
    //-       context.beginPath();
    //-       context.moveTo(0, 0);
    //-       context.quadraticCurveTo(5, 10, 20, 8);
    //-       context.quadraticCurveTo(12, 5, 10, 0);
    //-       context.quadraticCurveTo(12, -5, 20, -8);
    //-       context.quadraticCurveTo(5, -10, 0, 0);
    //-       context.fill();
    //-       context.restore();

    //-       context.save();
    //-       context.translate(-3, 0);
    //-       context.rotate(
    //-         (Math.PI / 3 + (Math.PI / 10) * Math.sin(this.phi)) *
    //-           (this.renderer.reverse ? -1 : 1)
    //-       );

    //-       context.beginPath();

    //-       if (this.renderer.reverse) {
    //-         context.moveTo(5, 0);
    //-         context.bezierCurveTo(10, 10, 10, 30, 0, 40);
    //-         context.bezierCurveTo(-12, 25, -8, 10, 0, 0);
    //-       } else {
    //-         context.moveTo(-5, 0);
    //-         context.bezierCurveTo(-10, -10, -10, -30, 0, -40);
    //-         context.bezierCurveTo(12, -25, 8, -10, 0, 0);
    //-       }
    //-       context.closePath();
    //-       context.fill();
    //-       context.restore();
    //-       context.restore();
    //-       this.controlStatus(context);
    //-     },
    //-   };
    //-   $(function () {
    //-     RENDERER.init();
    //-   });
    //- },
  //- 添加功能性标签/输出
  appender: function () {
    // 小火箭
    document.getElementById("go-up").innerHTML +=
      "<img class='fas fa-arrow-up' style='max-width: 300%; transform: translate(-30px,0px);' src='data:image/png;base64,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' title='芜湖起飞!' >";
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
    if (document.getElementById("sakura") == null) {
      document.getElementById("web_bg").innerHTML +=
        "<canvas id='sakura' style='position: relative;width: 100%;height: 100vh;'></canvas>";
    }

    //- 终端输出
    setTimeout(function () {
      console.clear();
      console.log(
        "%c  _  _  ____  __  ____   __   _  _  ____ \t齐下无贰 Listening...\n / )( \\(  __)(  )(    \\ /  \\ / )( \\/ ___) \thttps://github.com/Weidows\n \\ /\\ / ) _)  )(  ) D ((  O )\\ /\\ /\\___ \\ \thttps://gitee.com/Weidows\n (_/\\_)(____)(__)(____/ \\__/ (_/\\_)(____/ \t来这想干点啥好事⁉?😉\n",
        "color: #6aff00;background: #0c222e;"
      );
    }, 1);
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
            "https://cdn.jsdelivr.net/gh/Weidows/Images/Humor/ComicExpression/74ef2ed780ee230c08866adfa01dbe297b5467b4.png";
          document.title = "❤大爷来玩呀~❤ |" + o;
          clearTimeout(i);
        } else {
          document.getElementsByTagName("link")[0].href =
            "https://cdn.jsdelivr.net/gh/Weidows/Images/Humor/ComicExpression/34e594f5a6b38285aa8bc7f005861ca1b383d1e2.png";
          document.title = "🤣性感dows,在线胡说🤣 |" + o;
          i = setTimeout(function () {
            document.title = o;
            document.getElementsByTagName("link")[0].href = h;
          }, 2e3);
        }
      });
    })();

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
  }
};
Weidows.all();
