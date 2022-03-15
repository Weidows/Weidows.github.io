---
title: 🚚开发之旅~
password: ""
tags:
  - SQL
  - 前端
  - JSON
  - Docker
  - Mariadb
katex: false
comments: true
aside: true
date: 2021-08-17 17:29:17
cover: https://www.helloimg.com/images/2022/02/27/GVL2dA.png
top_img:
---

# 开发之旅~

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2022-03-15 16:39:57
 * @FilePath: \Blog-private\source\_posts\experience\dev\sql-problem.md
 * @Description:
 * @!: *********************************************************************
-->

```pullquote mindmap mindmap-md
- [开发之旅~](#开发之旅)
  - [简介](#简介)
  - [模糊查询](#模糊查询)
  - [where](#where)
  - [多索引排序](#多索引排序)
  - [Mariadb-无法远程连接](#mariadb-无法远程连接)
  - [数据源连接不上](#数据源连接不上)
  - [docker-databases](#docker-databases)
  - [接口数据速览](#接口数据速览)
  - [外键-数据-导出入](#外键-数据-导出入)
  - [map-and-](#map-and-)
  - [借物表](#借物表)
```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 简介

一顿课程下来,SQL 语法是熟悉了,但是做到业务层面,不圆滑之处暴露出来惹.

不只是 SQL,包括工作中常用的技巧.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 模糊查询

- 包括模糊查询中文
  <sup id='cite_ref-1'>[\[1\]](#cite_note-1)</sup>
  <sup id='cite_ref-2'>[\[2\]](#cite_note-2)</sup>

  中/英都可以正常查询:

  ```xml
  <select id="selectByBean" resultMap="BaseResultMap">
    select
    <include refid="Base_Column_List"/>
    from test
    <where>
      <if test="name != null and name != ''">
        and name like concat('%',#{name},'%')
      </if>
      <if test="url != null and url != ''">
        and cut_url like concat('%',#{url},'%')
      </if>
    </where>
  </select>
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## where

- 开发中可能经常见到: `where 1 = 1` ,这是干什么用的?

- 拿上面的举例子,把它变成下面这样子:

  ```xml
  <select id="selectByBean" resultMap="BaseResultMap">
    select
    <include refid="Base_Column_List"/>
    from test
    where
    <if test="name != null and name != ''">
      name like concat('%',#{name},'%')
    </if>
    <if test="url != null and url != ''">
      and cut_url like concat('%',#{url},'%')
    </if>
  </select>
  ```

- 如果 name == null,那么 SQL 会是这样:

  where and cut_url like concat('%',#{url},'%')

  肯定会报错

- 改成这样子就没问题了:

  ```xml
  <select id="selectByBean" resultMap="BaseResultMap">
    select
    <include refid="Base_Column_List"/>
    from test
    where 1 = 1
    <if test="name != null and name != ''">
      name like concat('%',#{name},'%')
    </if>
    <if test="url != null and url != ''">
      and cut_url like concat('%',#{url},'%')
    </if>
  </select>
  ```

- 在 SQL 支持的情况下,还是套`<where>`标签更好,它能处理 `where and` 这种情况.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 多索引排序

- 有时一个表中多个字段需要加索引

  但是这样导致每次添加/更新数据时排序都会变化

  前端接到的数据可以认为是无序化的,如何解决呢?

---

- 挺简单的 `order by id`

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## Mariadb-无法远程连接

- 在 manjaro 虚拟机装了个 mariadb

  主机与虚拟机已经连通,但是 mariadb 无法连接上 (授权失败)

  > Host '192.168.114.1' is not allowed to connect to this MariaDB server

  因为 mariadb 默认只允许 localhost 连接

  ***

- 网上找了一堆文章,大多是 `grant 授权` , `改配置文件` 之类的

  试了下,各种碰壁 , 这里给个简单方法

  ***

- 直接 `新建一个用户`

  用户名随意 , host 填 `%` (也就是允许所有)

  远程连接时连这个用户就行了.

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 数据源连接不上

> Failed to bind properties under '' to com.zaxxer.hikari.HikariDataSource

- 这个情况大多是配置属性没写对,重点看一下标记的地方

  <img src="https://www.helloimg.com/images/2022/02/27/GVAKQR.png" alt="20210925193945" />

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## docker-databases

用 docker 跑数据库真的是太 Jier 好使了!

> 在另一篇文章: [🌈 初探 Docker.](../../system/../docker#多数据库管理)

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 接口数据速览

- 前端接到 JSON 数据总是需要看一下,通过 postman 那种不是很便捷

  于是之前我一直是找到响应->复制->粘贴到 vscode 格式化

  <img src="https://www.helloimg.com/images/2022/02/27/GVAj6c.png" alt="20211015130205" />

- 偶然发现有个更方便的手段: 浏览器`前端助手插件`

  安装后直接双击请求,跳出的新页面就是已经格式化好的

  <img src="https://www.helloimg.com/images/2022/02/27/GVtIXg.png" alt="20211015130109" />

  <img src="https://www.helloimg.com/images/2022/02/27/GVS6hz.png" alt="20211015130815" />

---

## 外键-数据-导出入

- 结组做数据库课设时发现,含有外键的表,create table 时会报错.

  解决办法呢,比如下面的三个表

  <img src="https://www.helloimg.com/images/2022/02/27/GVA0EY.png" alt="20211204085119" />

  先把 player 和 technology 两个表创建好,再创建 good_at 就不会报错了

  (`也就是需要先创建外键指向的表,再创建含有外键的表`)

  ***

- insert 时还是会遇到问题,跟上面类似

  > Error: SQLSTATE[23000]: Integrity constraint violation: 1452 Cannot add or update a child row: a foreign key constraint fails (`test`.`test_user`, CONSTRAINT `fk_test_user_test_user_id` FOREIGN KEY (`test_user_id`) REFERENCES `test_user` (`id`))

  先插入 player / technology 表,再插入 good_at 表

  ***

  实则还有种变相解决方法是在插入前 foreign_key_checks,插入后再打开:

  ```sql
  set
    FOREIGN_KEY_CHECKS = 0;

  INSERT INTO game(id,name,score,player) VALUES(1,'aggdm',0,2),(2,'cmera',10,10),(3,'hzxgy',10,14),(4,'ihqti',5,12),(5,'hozmy',5,6),(6,'wrcux',1,12),(7,'mlijv',1,9),(8,'qmnij',10,11),(9,'vswdc',7,14),(10,'gebit',6,11);

  set
    FOREIGN_KEY_CHECKS = 1;
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## map-and-

- 开发时遇到此问题:

  > Required request body is missing:请求体为空

  纳闷,把前端数据正常传给后端了,为什么触发此错误?

  后来发现是 .map() 的坑,被这个问答糊脸了:
  <sup id='cite_ref-3'>[\[3\]](#cite_note-3)</sup>

  ***

- map 是映射,必然会 return 一个值 (没 return 的话就是 undefined)

  filter 是过滤,可以过滤掉某些结果不 return

  虽然这两个都有 transform 能力但是在返回值上不同

  ```mermaid
  graph LR
    subgraph filter
      A2(A) --filter--> A3(A')
      B2(B) --filter--> B3(B)
      C2(C) --filter--> C3(无)
    end

    subgraph map
      A --map--> A'
      B --map--> B4(B)
      C --map--> undefined
    end
  ```

<a>![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)</a>

## 借物表

<a name='cite_note-1' href='#cite_ref-1'>[1]</a>: [mysql 中模糊查询的四种用法：](https://www.cnblogs.com/-lin-x-c-/p/10375412.html)

<a name='cite_note-2' href='#cite_ref-2'>[2]</a>: [mybatis 模糊查询 中文问题](https://www.oschina.net/question/160183_36995)

<a name='cite_note-3' href='#cite_ref-3'>[3]</a>: [为什么 javascript map 函数返回 undefined？(Why does javascript map function return undefined?)](https://www.dovov.com/javascript-mapundefined.html)
