---
title: 🎉IDEA魔改记录.
categories:
  - IDEA
tags:
  - IDEA
cover: https://i.loli.net/2021/01/01/UD8HeIc94LVai2v.png
# top_img:
---

<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-01-01 11:06:59
 * @LastEditors: Weidows
 * @LastEditTime: 2021-01-17 23:51:00
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\IDEA\Modification.md
 * @Description:
 * @!: *********************************************************************
-->

- [Maven](#maven)
  - [环境变量](#环境变量)
  - [换阿里源](#换阿里源)
  - [本地仓库路径](#本地仓库路径)

# Maven

- 发现 IDEA 是自带 Maven 的,没必要自己再安装一个,直接白嫖她的!

- 路径是 `IDEA/plugins/maven/lib/maven3`

> [附上配置文件](https://github.com/Weidows/Programming-Configuration/blob/master/Maven/conf/settings.xml)

## 环境变量

> 参照[💥 系统开发环境配置](../../system/system_variable#Maven)

---

## 换阿里源

- 找到 `IDEA/plugins/maven/lib/maven3/conf/settings.xml`

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
    <localRepository> D:\Game\Scoop\apps\idea-ultimate\current\plugins\maven\mvn-repository </localRepository>
  ```
