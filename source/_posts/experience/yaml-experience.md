---
title: 仅仅是一篇关于yaml文件语法虐待我后的小诟病
categories:
  - experience
tags:
  - yaml
cover: https://i.loli.net/2020/11/30/rJLfcmTERGvAti4.jpg
---

<!--
 * @Author: Weidows
 * @Date: 2020-08-25 00:44:40
 * @LastEditors: Weidows
 * @LastEditTime: 2020-12-04 23:43:11
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog\source\_posts\experience\yaml-experience.md
-->

# 冒号 :

- yaml 元素标签后加个冒号表示结束,这俩要紧挨着,但是与冒号后跟着的值要空出一个空格
  这样 `keyword: value`

---

# 连字符(减号) -

- 在 keyword 下面用-连续赋值,一定要注意缩进,连字符与 value 之间也需要有空格
- 另外不能保证这一排 value 是同一级的
- 比如下面的 Blog 是 backup 的下一级,backup 是 categories 的下一级

```
  categories:
    - backup
    - Blog
```

---

# 单引号 '

- 这魂淡肯定是成对出现,但又不是跟双引号一样可有可无
- 当 generate 时报错(一长溜)但又不知道啥原因时,尝试寻找一下这个的错
- 该来的地儿不来,不该来的却总是在 2333

---

# GitHub-Action

- ## 集成化任务
  - 集成化任务一般形式
    ```yml
    - name: Setup PHP Action
      uses: shivammathur/setup-php@2.9.0
    ```
  - 这种任务 uses 与 run 不能共存,可以有 with...
