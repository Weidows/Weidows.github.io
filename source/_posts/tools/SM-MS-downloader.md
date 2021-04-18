---
title: SM.MS-批量下载器
categories:
  - tools
tags:
  - 图床
  - 爬虫
  - SM.MS
date: 2021-04-18 11:54:15
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/QQ图片20210416221109.jpg
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-04-18 11:02:45
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\tools\SM-MS-downloader.md
 * @Description:
 * @!: *********************************************************************
-->

- [简介](#简介)
- [功能](#功能)
- [使用](#使用)
- [问题](#问题)
- [路标 & 技术调用](#路标--技术调用)

# 简介

> SM.MS 没有提供批量下载回图片的功能,于是写了个小爬虫

# 功能

可以把对应页面的所有图片(一般是 30 张)获取并打包为 zip 文件下载下来

---

# 使用

1. 进入 SM.MS 图片管理页面: [点这里进入](https://sm.ms/home/picture?page=1)

2. 按 `F12` 进入 Console 控制台,输入下面代码:

- <details>

    <summary> -> 查看代码 <-</summary>

  ***

  ```js
  /*
   * @?: *********************************************************************
   * @Author: Weidows
   * @Date: 2021-02-16 01:24:50
   * @LastEditors: Weidows
   * @LastEditTime: 2021-04-18 09:52:12
   * @FilePath: \Weidows\Web\JavaScript\test\index.js
   * @Description:
   * @!: *********************************************************************
   */

  // 添加样式
  function addElement() {
    let jsZip = document.createElement("script");
    jsZip.src = "https://cdn.bootcdn.net/ajax/libs/jszip/3.5.0/jszip.min.js";
    document.getElementsByTagName("head")[0].appendChild(jsZip);

    // 下载图片按钮
    let downloadButton = document.createElement("button");
    downloadButton.type = "button";
    downloadButton.innerText = "下载本页面图片";
    downloadButton.style.width = "100%";
    downloadButton.addEventListener("click", function () {
      downloadImg();
    });

    // 全选CheckBox按钮
    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerHTML = "全选CheckBox按钮";
    deleteButton.style.width = "100%";
    deleteButton.addEventListener("click", function () {
      let checkBoxes = document.getElementsByClassName("filedelete");
      for (const checkbox of checkBoxes) {
        checkbox.checked = !checkbox.checked;
      }
    });

    // 创建标签
    let downloadLi = document.createElement("li");
    let deleteLi = document.createElement("li");
    downloadLi.id = "downloader";
    deleteLi.id = "deleter";
    downloadLi.appendChild(downloadButton);
    deleteLi.appendChild(deleteButton);

    // 追加标签
    if (document.getElementById("downloader") == null) {
      document
        .getElementsByClassName("sidebar-menu tree")[0]
        .appendChild(downloadLi);
      document
        .getElementsByClassName("sidebar-menu tree")[0]
        .appendChild(deleteLi);
    }
  }
  this.addElement();

  // button点击事件
  async function downloadImg() {
    var zip = new JSZip();
    var aTagArray = document.getElementsByClassName("fancybox");

    for (const a of aTagArray) {
      let url = a.href.toString();
      let fileName = url.substring(url.lastIndexOf("/") + 1);

      let image = new Image();
      image.setAttribute("crossOrigin", "anonymous"); //需要放在图片赋值前，否则部分浏览器会报错
      image.src = url;
      let base64 = await getPromise(image);
      zip.file(fileName, base64, { base64: true });
    }

    // 生成zip文件并下载
    zip
      .generateAsync({
        type: "blob",
      })
      .then(function (content) {
        // 创建隐藏的可下载链接
        var eleLink = document.createElement("a");
        // 下载的文件名
        eleLink.download = "Compressed.zip";
        eleLink.style.display = "none";
        // 下载内容转变成blob地址
        eleLink.href = URL.createObjectURL(content);
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
      });
  }

  // 获取图片base64内容对象
  function getPromise(image) {
    return new Promise(function (resolve) {
      image.onload = function () {
        // 获取图片base64
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;

        let ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, image.width, image.height);
        let ext = image.src
          .substring(image.src.lastIndexOf(".") + 1)
          .toLowerCase();
        let base = canvas.toDataURL("image/" + ext);
        let subBase = base.substring(base.lastIndexOf(",") + 1);

        // 返回promise
        resolve(subBase);
      };
    });
  }
  ```

  </details>

3. 不出意外的话,左侧边栏会出现如下两个按钮:

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/20210418102023.png" alt="20210418102023" />

4. 现在可以使用了

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 问题

- 刷新页面或者翻页时按钮没了

  > emmm,每次页面刷新/跳转都需要重新执行一次代码,在 console 中按 `方向键↑`和 Enter

- 下载下来的压缩包是空的或者是无数据的空图片

  > 检查一下网络是否可以正常访问 `i,loli.net` 这个域名,有可能是因为网络原因导致图片未成功加载

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 路标 & 技术调用

> 博客文章地址

> [Gitee 仓库地址](https://gitee.com/Weidows/SMMS-downloader)

> [GitHub 仓库地址](https://github.com/Weidows/SM.MS-downloader)

---

> `JSZip`

> [ JS 如何在 onload 中 return](https://blog.csdn.net/weixin_38361925/article/details/95099838?utm_source=app&app_version=4.5.8)
