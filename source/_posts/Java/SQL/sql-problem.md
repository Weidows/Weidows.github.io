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
 * @LastEditTime: 2021-08-18 10:31:30
 * @FilePath: \Blog-private\source\_posts\Java\SQL\sql-problem.md
 * @Description:
 * @!: *********************************************************************
-->

- [简介](#简介)
- [模糊查询](#模糊查询)
- [where](#where)
- [多索引排序](#多索引排序)

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
