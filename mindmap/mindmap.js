(function () {
  var MM_FUNCS = {
    li2jsonData: function(liNode) {
      var liData;
      var aNodes = liNode.querySelectorAll(':scope > a');
      if (aNodes.length !== 0) {
        liData = {
          "data": {
            "text": aNodes[0].text,
            "hyperlink": aNodes[0].href
          }
        };
      } else {
        liData = {
          "data": {
            "text": liNode.childNodes[0].nodeValue.trim()
          }
        };
      }

      var childLiNodes = liNode.querySelectorAll(':scope > ul > li');
      for (var i = 0; i < childLiNodes.length; i++) {
        if (!liData.hasOwnProperty("children")) {
          liData.children = [];
        }
        liData.children.push(MM_FUNCS.li2jsonData(childLiNodes[i]));
      }

      return liData;
    },
    drawMindMap: function(ulParent) {
      if (ulParent._minderInited) {
        return;
      }
      ulParent._minderInited = true;

      var ulElements = ulParent.querySelectorAll(':scope > ul');
      var ulElement = ulElements.length ? ulElements[0] : null;
      if (!ulElement) {
        return;
      }

      // 初始隐藏原始列表，防止闪烁
      ulElement.style.display = 'none';
      ulElement.style.visibility = 'hidden';

      var mmData = {"root": {}};
      var minder = new kityminder.Minder({
        renderTo: ulParent
      });

      mmData.root = MM_FUNCS.li2jsonData(ulElement.getElementsByTagName('li')[0]);

      minder.importData('json', JSON.stringify(mmData));
      minder.disable();
      minder.execCommand('hand');
    }
  };

  function initAll() {
    var mindMapElements = document.getElementsByClassName('mindmap');
    for (var i = 0; i < mindMapElements.length; i++) {
      MM_FUNCS.drawMindMap(mindMapElements[i]);
    }
  }

  // 初始加载
  if (document.readyState === 'complete') {
    initAll();
  } else {
    window.addEventListener('load', initAll);
  }

  // PJAX 兼容（butterfly 主题使用 MoOx/pjax）
  document.addEventListener('pjax:complete', initAll);
})();
