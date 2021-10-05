---
title: 🚚SQL：我跌跌撞撞的奔向你~
categories:
  - Java
  - SQL
tags:
  - SQL
katex: false
comments: true
aside: true
date: 2021-08-17 17:29:17
cover: https://i.loli.net/2021/08/17/RcB8NyxtfTkGDde.png
top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2021-09-30 18:30:21
 * @FilePath: \Blog-private\source\_posts\Java\SQL\sql-problem.md
 * @Description:
 * @!: *********************************************************************
-->

- [简介](#简介)
- [模糊查询](#模糊查询)
- [where](#where)
- [多索引排序](#多索引排序)
- [Mariadb 无法远程连接](#mariadb-无法远程连接)
- [数据源连接不上](#数据源连接不上)
- [docker-databases](#docker-databases)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 简介

一顿课程下来,SQL 语法是熟悉了,但是做到业务层面,不圆滑之处暴露出来惹.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 模糊查询

- 包括模糊查询中文

- 网上文章:

  > [mysql 中模糊查询的四种用法：](https://www.cnblogs.com/-lin-x-c-/p/10375412.html)

  > [mybatis 模糊查询 中文问题](https://www.oschina.net/question/160183_36995)

---

- 中/英都可以正常查询:

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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 多索引排序

- 有时一个表中多个字段需要加索引

  但是这样导致每次添加/更新数据时排序都会变化

  前端接到的数据可以认为是无序化的,如何解决呢?

---

- 挺简单的 `order by id`

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## Mariadb 无法远程连接

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

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## 数据源连接不上

> Failed to bind properties under '' to com.zaxxer.hikari.HikariDataSource

- 这个情况大多是配置属性没写对,重点看一下标记的地方

  <img src="https://i.loli.net/2021/09/25/MJChF9w2mufaBtj.png" alt="20210925193945" />

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

## docker-databases

用 docker 跑数据库真的是太 Jier 好使了!

> 在另一篇文章: [🌈 初探 Docker.](../../system/../docker#多数据库管理)
