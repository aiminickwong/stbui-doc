section: basic
id: file
description: 预编译文件和源码结构
icon: icon-sitemap
filter: wenjianmulujiegou wjmljg
---

# 文件目录结构

## 预编译的内容

下载预编译压缩包解压后将会得到以下目录结构：

```
stbui/
├── pkg/
│   ├── frameword_xxx.css
│   ├── frameword_xx.js
│   ├── app_xxx.css
│   └── app_xxx.js
├── page/
│   ├── xxx
│   └── xxx
├── frameword/
│   ├── xxx
│   └── xxx
└── lib
```

## 源码目录结构

可以随时从Github上下载ZUI的源码。不仅仅包含所有开发源码文件，而且包含完整的文档和示例。如果你需要定制的编译版本更应该下载源码。以下简要说明源码目录结构。

```
stbui/
├── page/                         stbui的源码目录
│   ├── /
│   ├── js/
│   ├── fonts/
│   └── apps/                    一些自定义的编译配置
├── dist/                        预编译输出目录
├── docs/                        文档
```
