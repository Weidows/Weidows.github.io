---
title: 😁IDE选用指北.
categories:
  - others
tags:
  - VScode
  - IDEA
  - HTML
  - CSS
  - JavaScript
  - 推荐
date: 2021-03-02 21:53:04
cover: https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210302215748.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-03-21 17:11:08
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\others\IDEs.md
 * @Description:
 * @!: *********************************************************************
-->

- [前言](#前言)
- [前端](#前端)
  - [网页服务器](#网页服务器)
  - [VScode](#vscode)
  - [IDEA](#idea)
- [Markdown](#markdown)
- [Tomcat](#tomcat)
  - [VScode](#vscode-1)
  - [虚拟主机/代理](#虚拟主机代理)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 前言

- 开互联网前端课程了,对于工具的选用确实有些杂乱,五花八门

- 下面简单展示两款 IDE 吧--> `VScode` 与 `IDEA`

  - VScode 全称 `Visual Studio Code`,是开源免费的,有编程界最丰富的插件市场

  - IDEA 全称 `IntelliJ IDEA`,有开源免费版,也有收费版(对大型项目有更好的支持),目前口评最好的 Java 开发工具.

---

- 工具跟随需求,首先我们先探讨下具体需要它做什么?

  - 方便编写前端(HTML,CSS,JavaScript,stylus,less),框架(React,Vue,Angular)等等

  - 能架设起网页服务器(localhost:xxxx 可以访问)

  - 最好具备一定的插件扩展性.

  - 支持读写`.md`格式的 markdown 文件.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# 前端

- 首先,编写方面没啥可说的,VScode 在前端/框架方面支持都是数一数二的,IDEA 的话,拿来写前端其实也相当出色.

## 网页服务器

- 教学老师用的是 MyEclipse+tomcat 架设的网页服务器,搭建时需要搞 MyEclipse,~~破解~~,配置 Tomcat(而且 Tomcat 需要 JDK)

  - 别提多头疼了!

  ***

- 我写这个文章就是为了解决这个问题

  - VScode 很多优秀扩展开箱即用网页服务器!

  - IDEA 原生支持网页服务器!

- 下面介绍怎么用:

  - 可供参考的测试 html 文件:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Title</title>
      <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <style>
        #divMove {
          width: 500px;
          height: 500px;
          border: 1px solid #ff0000;
          font-size: 30px;
          text-align: center;
        }
      </style>
    </head>

    <body>
      <!--要求：获取鼠标当前的一个坐标-->
      Mouse <span id="mouseMove"></span>
      <div id="divMove">在这里移动鼠标试试</div>

      <script>
        /**
         * ! 当网页元素加载完毕之后，响应事件
         * 原型: $(document).ready(function(){});
         * 简化后的: $(function (){});
         */
        $(function () {
          $("#divMove").mousemove(function (e) {
            $("#mouseMove").text("X: " + e.pageX + "Y: " + e.pageY);
          });
        });
      </script>
    </body>
  </html>
  ```

---

## VScode

- 安装,汉化,之后搜下面的插件,两个都非常不错,个人更推荐第二个

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210302223844.png" alt="20210302223844" />

  ***

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210302224003.png" alt="20210302224003" />

- 然后随便打开一个.html 文件,按照文档使用就好了

  - 比如我用的第二款,右键菜单就可以直接打开网页服务器

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210302224353.png" alt="20210302224353" />

- 效果如下

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210302224509.png" alt="20210302224509" />

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210302224806.png" alt="20210302224806" />

---

## IDEA

- 直接打开一个 HTML 文件,右上角会出现开启网页服务器的小标志

  - 有什么浏览器点什么就好

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210302225318.png" alt="20210302225318" />

- 效果

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210302225450.png" alt="20210302225450" />

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# Markdown

- 废话不多说,先展示下我写博客时的样子

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210302220625.png" alt="20210302220625" />

  - VScode 与 IDEA 原生支持读写 markdown 文件,而且支持都很不错

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210302221020.png" alt="20210302221020" />

  ***

- 个人使用 VScode 写比较多,因为有很多提升效率的扩展

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images@master/img/divider.png)

# Tomcat

- IDE 搭配 Tomcat 本体使用

## VScode

- 安装 `Tomcat for Java` 插件,配置好 Tomcat 本体路径和 `data` 路径

- 在侧边栏右键,常用命令都有

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210309155951.png" alt="20210309155951" />

- 测试

  - 新建 `index.html` 文件,放到 `tomcat/webapps/ROOT/`目录下

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      测试
    </body>
  </html>
  ```

  - 打开对应页面会有如下显示

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210309160418.png" alt="20210309160418" />

- `ROOT/`里面放的文件与浏览器 URL 相对应

  - 比如 `ROOT/000/2333.html` 浏览器就需要访问 `localhost:8080/000/2333.html`

  - 后缀名是`.html`的话 URL 后缀可以不写,比如上面写成 `localhost:8080/000/2333` 也可以.

---

## 虚拟主机/代理

- 通过修改 `Tomcat/conf/server.xml`和 hosts 文件实现虚拟主机.

- 修改 `name="localhost"` 为目标主机名,比如改为`name="weidows.com"`,下面注释处给标出了修改位置

  ```xml
  <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <Server port="8005" shutdown="SHUTDOWN">
    <Listener className="org.apache.catalina.startup.VersionLoggerListener"/>
    <Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on"/>
    <Listener className="org.apache.catalina.core.JreMemoryLeakPreventionListener"/>
    <Listener className="org.apache.catalina.mbeans.GlobalResourcesLifecycleListener"/>
    <Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener"/>
    <GlobalNamingResources>
      <Resource name="UserDatabase" auth="Container" type="org.apache.catalina.UserDatabase" description="User database that can be updated and saved" factory="org.apache.catalina.users.MemoryUserDatabaseFactory" pathname="conf/tomcat-users.xml"/>
    </GlobalNamingResources>
    <Service name="Catalina">
      <Connector port="8080" protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8443"/>
      <Engine name="Catalina" defaultHost="localhost">
        <Realm className="org.apache.catalina.realm.LockOutRealm">
          <Realm className="org.apache.catalina.realm.UserDatabaseRealm" resourceName="UserDatabase"/>
        </Realm>
        <!-- 修改这下面一行 -->
        <Host name="localhost" appBase="webapps" unpackWARs="true" autoDeploy="true">
          <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs" prefix="localhost_access_log" suffix=".txt" pattern="%h %l %u %t &quot;%r&quot; %s %b"/>
        </Host>
      </Engine>
    </Service>
  </Server>
  ```

---

- 然后修改 host,实现代理,如下图第二行即为需要添加的

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210309161039.png" alt="20210309161039" />

  - 含义就是: `在访问右边的主机时,将它指向左边的地址`

  - 比如浏览器访问 `localhost:8080` 时,实际上是访问的 `127.0.0.1:8080`,也就是本机地址

---

- 现在,打开 Tomcat 服务,他就会在本机 8080 端口监听,当在浏览器输入`weidows.com:8080`时,会被 host 指向到`127.0.0.1:8080`,Tomcat 服务器收到请求并回应

  - 结构如下图

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images@master/hpp/20210309163300.png" alt="20210309163300" />

---

- 可能会存在的疑问: 同样是指向到 `127.0.0.1`,为什么 localhost:8080 或者直接 127.0.0.1:8080 无法访问到 weidows.com:8080 页面?

  - 这就像递归式问路,首先问 host 知不知道 weidows.com,host 不直接知道,它让我们问 Tomcat,于是我们去 127.0.0.1:8080 问 Tomcat 知不知道 weidows.com;
  - 诶,Tomcat 它可以直接知道 weidows.com 在哪里,于是浏览器就这么找到 weidows.com 页面了!
  - 页面在 weidows.com 手里,你要是去找 localhost:8080 或者 127.0.0.1 的话,就是问错人了,肯定是 404
