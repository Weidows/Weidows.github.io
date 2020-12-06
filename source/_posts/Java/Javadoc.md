---
title: Javadoc使用 && 命名规范
categories:
  - Java
tags:
  - Java
  - Javadoc
cover: https://i.loli.net/2020/11/30/iHZCgtN4OpsuDj5.jpg
# top_img:
---

<!--
 * @Author: Weidows
 * @LastEditors: Weidows
 * @LastEditTime: 2020-11-30 21:30:08
 * @FilePath: \Weidowsd:\Game\Demo\Github\Blog\source\_posts\Java\Javadoc.md
-->

# 文档注释方法

- 在类/方法上面写个`/**`就会出来
- 文档注释会在代码提示中显示,也可以用 Javadoc 生成文档
- 其中的标签不用闭合,比如写`<p>`的话用不着写`</p>`,但是写上也不会错

---

# 常用标签

- `<p>` Passage 段落标签

---

# 常用@

- `@author`
- `@version`
- `@since`
- `@see`
- `@link`
- `@code`
- `@param`
- `@return`
- `@exception`
- `@throws`

---

# Generate

### 在命令行当前目录生成 JavaDoc 文档,注意存放目录最好是空的,不然会....一团乱麻!

```
javadoc -encoding UTF-8 -charset UTF-8 Path/文件名
```

---

# Java 命名规范

- 1.见名知意
  - 1.1 不要用中文/拼音命名
  - 1.2 即使命名不规范也可能不会出 bug,但是问题很大!
- 2.驼峰命名(变量,方法)
- 3.类,首字母大写,驼峰命名
- 4.包,全小写命名+下划线
- 5.常量/枚举,全大写命名+下划线
