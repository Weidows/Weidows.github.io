---
title: 🎉IDEA魔改记录.
date: 2021-01-01 11:06:59
categories:
  - tools
  - Jetbrains
tags:
  - IDEA
  - Maven
cover: https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/UD8HeIc94LVai2v.png
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-01 11:06:59
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-29 14:12:20
 * @FilePath: \Blog-private\source\_posts\tools\Jetbrains\Modification.md
 * @Description:
 * @!: *********************************************************************
-->

- [Maven](#maven)
  - [环境变量](#环境变量)
  - [换阿里源](#换阿里源)
  - [本地仓库路径](#本地仓库路径)
  - [使用外部 Maven](#使用外部-maven)

# Maven

- 在我发现 Scoop 安装和配置 Maven 有多么便利前,我是这样想的:

  ```
  - 发现 IDEA 是自带 Maven 的,没必要自己再安装一个,直接白嫖她的!

  - 路径是 `IDEA/plugins/maven/lib/maven3`
  ```

- 后来发现随着 IDEA 更新,每次配置文件都需要改,环境变量也需要自己配,总之很麻烦...

- 于是,直接 Scoop 安装吧!

  ```shell
  scoop install maven
  ```

- 它抽离出 Maven 的内部用户配置文件`conf/settings.xml`在`persist`里面,不会被更新覆写.

  > [附上已换源和配置本地仓库的配置文件](https://github.com/Weidows/Programming-Configuration/blob/master/Maven/conf/settings.xml)

## 环境变量

> 参照[💥 系统开发环境配置](../../../system/system_variable#Maven)

---

## 换阿里源

- 找到 `~/conf/settings.xml`

  - 修改为下面依赖:

  ```xml
    <mirrors>
      <!-- mirror
      | Specifies a repository mirror site to use instead of a given repository. The repository that
      | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
      | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
      |
      <mirror>
        <id>mirrorId</id>
        <mirrorOf>repositoryId</mirrorOf>
        <name>Human Readable Name for this Mirror.</name>
        <url>http://my.repository.com/repo/path</url>
      </mirror>
      -->
      <!-- 阿里云仓库 -->
      <mirror>
        <id>alimaven</id>
        <mirrorOf>central</mirrorOf>
        <name>aliyun maven</name>
        <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
      </mirror>

      <!-- 阿里云仓库2 -->
      <mirror>
        <id>mirrorId</id>
        <mirrorOf>central</mirrorOf>
        <name>aliyun maven</name>
        <url>https://maven.aliyun.com/repository/public</url>
      </mirror>

      <!-- 中央仓库1 -->
      <!-- <mirror>
        <id>repo1</id>
        <mirrorOf>central</mirrorOf>
        <name>Human Readable Name for this Mirror.</name>
        <url>http://repo1.maven.org/maven2/</url>
      </mirror> -->

      <!-- 中央仓库2 -->
      <!-- <mirror>
        <id>repo2</id>
        <mirrorOf>central</mirrorOf>
        <name>Human Readable Name for this Mirror.</name>
        <url>http://repo2.maven.org/maven2/</url>
      </mirror> -->
    </mirrors>
  ```

---

## 本地仓库路径

- 同上

  ```xml
    <localRepository> D:/Game/Scoop/persist/maven/conf/settings.xml</localRepository>
  ```

---

## 使用外部 Maven

- IDEA 是自带捆绑 Maven 的,因为上面原因,我们使用 Scoop 又安装了一个,所以需要在 IDEA 里修改下设置

  <img src="https://cdn.jsdelivr.net/gh/Weidows/Images/hpp/rkegM7GmIxwKtyT.png" alt="20210128033817" />
