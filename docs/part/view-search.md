section: view
id: comment
description: 搜索视图
icon: icon-comments
filter: pinglun pl
---

# 搜索

<style>
.search {
    position: relative;
    font-size: 14px;
    z-index: 1000
}

.search-drop {
    float: left;
    width: 59px;
    border: 1px solid #305895;
    height: 20px;
    line-height: 20px;
    padding: 5px;
    cursor: pointer;
    background: url(/page/common/images/tool.png) 55px -340px no-repeat;
    background-position-y: -838px;
    padding-left: 15px
}

.search-droplist {
    position: relative;
    background: #fff;
    left: 0;
    top: 5px;
    width: 79px;
    margin-left: -16px;
    border-left: 1px solid #305895;
    border-right: 1px solid #305895;
    font-size: 14px;
    font-family: "宋体",Arial;
    display: none
}

.search-droplist li {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #305895
}

.search-droplist li a {
    color: #484848;
    text-decoration: none;
    display: block;
    padding-left: 15px
}

.search-droplist li a:hover {
    background-color: #cde2f8
}

.search-input {
    float: left
}

.search-input input {
    font-size: 14px;
    color: #666;
    padding-left: 14px;
    font-family: Arial,SimSun,"宋体";
    height: 30px;
    width: 196px;
    border: 0;
    border-top: 1px solid #305895;
    border-bottom: 1px solid #305895
}

.search .btn-search {
    color: #fff;
    background-color: #4F78BD;
    border-color: #4F78BD;
    height: 32px;
    font-size: 16px
}
</style>

## 结构

一般 HTML 结构如下：

```html
<div class="search js-search" id="js-search">
  <div class="search-drop">资讯
    <ul class="search-droplist">
      <li><a>行情</a></li>
      <li><a>股吧</a></li>
      <li><a>博客</a></li>
      <li><a>资讯</a></li>
    </ul></div>
  <div class="search-input"><input type="text" value="" placeholder="请输入查询内容"></div>
  <button class="btn btn-default btn-search">搜索</button>
</div>
```

<div class="search js-search" id="js-search">
  <div class="search-drop">资讯
    <ul class="search-droplist">
      <li><a>行情</a></li>
      <li><a>股吧</a></li>
      <li><a>博客</a></li>
      <li><a>资讯</a></li>
    </ul></div>
  <div class="search-input"><input type="text" value="" placeholder="请输入查询内容"></div>
  <button class="btn btn-default btn-search">搜索</button>
</div>
