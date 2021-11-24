---
layout: post
title: "gcc常用选项"
date:	2021-11-24 17:50:16 +0800
categories: jekyll update
---

<strong>目录</strong>

{:toc}

## gcc目录搜索选项

```shell
-I[dir]
```

添加`dir`目录作为头文件搜索路径，这个`dir`目录比系统头文件搜索的早，可以使用多个`-I`选项，搜索优先级为从左到右，系统头问价排在最后

> sample
>
> ```shell
> -iquotedir
> ```
>
> 