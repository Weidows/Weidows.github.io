---
title: 关于在不会PHP的情况下调用PHP API
categories:
  - experience
tags:
  - 备忘录
  - PHP
  - Website
cover: https://i.loli.net/2020/11/30/Dxy6jwQotKsIEX5.jpg
---

<!--
 * @Author: Weidows
 * @Date: 2020-08-25 09:50:37
 * @LastEditors: Weidows
 * @LastEditTime: 2020-11-30 21:41:50
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog\source\_posts\experience\PHP_interface.md
-->

# 简单调用

- 他会提供相应接口给你的，具体调用方法就相当于讲求某个链接,如：
  `http://localhost/operate.php?act=get_user_list&type=json`
- 在这里 operate.php 相当于一个接口，其中 get_user_list 是一个 API（获取用户列表），讲求返回的数据类型为 JSON 格式。
- 你只需要在你 PHP 代码中执行这条链接他就会返回。

# GET 方式的直接使用

\$file_contents = file_get_content('http://localhost/operate.php?act=get_user_list&type=json')

POST 方式得用下面的(需要开启 PHP curl 支持)。

```
  $url = 'http://localhost/operate.php?act=get_user_list&type=json';

  $ch = curl_init ();

  curl_setopt ( $ch, CURLOPT_URL, $url );

  curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );

  curl_setopt ( $ch, CURLOPT_CONNECTTIMEOUT, 10 );

  curl_setopt ( $ch, CURLOPT_POST, 1 ); //启用POST提交

  $file_contents = curl_exec ( $ch );

  curl_close ( $ch );
```
