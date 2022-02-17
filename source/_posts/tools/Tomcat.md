---
title: 🐱‍🏍Maven+Tomcat开发webapp.
password: ""
tags:
  - Tomcat
  - Maven
  - Java
  - VScode
  - IDEA
  - 服务器
  - 笔记
  - Website
date: 2021-03-25 10:39:26
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210325113158.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-03-30 12:50:22
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\tools\Tomcat.md
 * @Description:
 * @!: *********************************************************************
-->

- [配置](#配置)
- [VScode](#vscode)
- [创建项目](#创建项目)
- [IDEA](#idea)
- [虚拟主机/代理](#虚拟主机代理)
- [乱码问题](#乱码问题)
  - [终端乱码](#终端乱码)
  - [网页中文乱码](#网页中文乱码)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 配置

> [💥 系统开发环境配置](../../system/system_variable#maven)

> Maven 的核心思想：约定大于配置

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## VScode

- 安装 `Tomcat for Java` 插件,配置好 Tomcat 本体路径和 `data` 路径

- 在侧边栏右键,常用命令都有

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210309155951.png" alt="20210309155951" />

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

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210309160418.png" alt="20210309160418" />

- `ROOT/`里面放的文件与浏览器 URL 相对应

  - 比如 `ROOT/000/2333.html` 浏览器就需要访问 `localhost:8080/000/2333.html`

  - 后缀名是`.html`的话 URL 后缀可以不写,比如上面写成 `localhost:8080/000/2333` 也可以.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 创建项目

> 解释一下为什么要用 Maven,还需要创建项目: `Tomcat 只能运行 Maven 创建的类型为 webapp 的这种项目`,

- 推荐直接用 IDEA 创建 web 项目 (不用再导入 Servlet 包)

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210323233425.png" alt="20210323233425" />

- 然后创建 `webapp` 子模块,在`source/main/`下再新建两个目录(java 和 resources),结构如下

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210323112637.png" alt="20210323112637" />

- `JavaWeb\src\main\webapp\WEB-INF\web.xml` 是 web 项目核心应用

> [点这里参考项目结构](https://github.com/Weidows/Java/tree/master/JavaWeb/demo-0)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## IDEA

- IDEA 配置连接 Tomcat 需要在创建完 webapp 项目之后,否则连不上

  - 点'+'找到 Tomcat Server 并配置,如图

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210325110519.png" alt="20210325110519" />

- 现在 IDEA 已经认识 Tomcat 了,但还需要配置部署,否则 Tomcat 不知道运行哪里

  - 这些工件就是这个项目用 Maven 构建之后产生的

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210325110722.png" alt="20210325110722" />

- 现在配置好了之后,IDEA 会自动完成项目`构建->部署->打开网页` (VScode 的话也可以手动做到)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

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

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210309161039.png" alt="20210309161039" />

  - 含义就是: `在访问右边的主机时,将它指向左边的地址`

  - 比如浏览器访问 `localhost:8080` 时,实际上是访问的 `127.0.0.1:8080`,也就是本机地址

---

- 现在,打开 Tomcat 服务,他就会在本机 8080 端口监听,当在浏览器输入`weidows.com:8080`时,会被 host 指向到`127.0.0.1:8080`,Tomcat 服务器收到请求并回应

  - 结构如下图

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210309163300.png" alt="20210309163300" />

---

- 可能会存在的疑问: 同样是指向到 `127.0.0.1`,为什么 localhost:8080 或者直接 127.0.0.1:8080 无法访问到 weidows.com:8080 页面?

  - 这就像递归式问路,首先问 host 知不知道 weidows.com,host 不直接知道,它让我们问 Tomcat,于是我们去 127.0.0.1:8080 问 Tomcat 知不知道 weidows.com;
  - 诶,Tomcat 它可以直接知道 weidows.com 在哪里,于是浏览器就这么找到 weidows.com 页面了!
  - 页面在 weidows.com 手里,你要是去找 localhost:8080 或者 127.0.0.1 的话,就是问错人了,肯定是 404

- 最后附一张图,根据序号来看,条理比较清晰.

  > <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210322100531.png" alt="20210322100531" />

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 乱码问题

### 终端乱码

- 在启动 Tomcat 时,终端内中文乱码:

  - 虽然这个对程序运行没有影响,但是有些影响观瞻,一般只会在 Window 遇到,修改如下:

  - 找到 `Tomcat/conf/logging.properties` 里面的-> `java.util.logging.ConsoleHandler.encoding`这一行 ,把 `UTF-8`换为`GBK`

- 另一种方法: 把终端显示设置为 UTF-8

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/post/20210330125008.png" alt="20210330125008" />

---

### 网页中文乱码

- 我们开发的页面,无论是动/静态,只要不指定编码格式,中文肯定乱码

- 需要做的就是在开发网页时,指定 `CharacterEncoding = UTF-8`
