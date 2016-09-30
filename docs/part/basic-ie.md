section: basic
id: ie
description: 为IE单独准备的内容
icon: icon-ie
filter: jianrongieliulanqi jriellq
---

# 兼容IE浏览器

因为IE浏览器与各大浏览器区别太大，为了尽可能的保证在所有浏览器中有一致的体验，很多时候需要单独对待IE浏览器。stbui 支持最早的IE浏览器为IE6。

## 禁用IE兼容模式

为了保证IE能够使用最新渲染模式而不是兼容模式，在html文档头部应加入以下代码：

```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  ...
```

## 提示IE7及更早版本的用户

针对IE7及更早的版本，应该给出提示，让用户升级浏览器。在`body`之后加入以下代码可以有选择性的出现浏览器升级提示，并给出链接引导用户访问[browsehappy.com](http://browsehappy.com/)：

```html
<body>
  <!--[if lt IE 8]>
    <div class="alert alert-danger">您正在使用 <strong>过时的</strong> 浏览器. 是时候 <a href="http://browsehappy.com/">更换一个更好的浏览器</a> 来提升用户体验.</div>
  <![endif]-->
  ...
```

如果你准备支持的IE浏览器最低版本为IE9，也建议为早期用户准备一个提示，只需要将以上代码中的 `[if lt IE 8]` 更改为 `[if lt IE 9]`。

<div class="alert alert-primary-inverse">
  <h4>提示</h4>
  <p>现在开始，你可以使用stbui内置的浏览器兼容辅助插件来展示这样的提示。</p>
</div>
