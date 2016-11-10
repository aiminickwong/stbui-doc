<style>
.navbar {
  height: 35px;
  overflow: hidden;
}
.navbar:after,
.navbar:before {
  content: " ";
  display: table;
}
.navbar li {
  position: relative;
  display: inline;
  float: left;
  white-space: nowrap;
  line-height: 35px;
}
.navbar li.active a,
.navbar li.active a:focus,
.navbar li.active a:hover {
  text-decoration: none;
}
.navbar li.disabled a,
.navbar li.disabled a:focus,
.navbar li.disabled a:hover {
  color: #999;
  text-decoration: none;
  background-color: transparent;
  cursor: not-allowed;
}
.navbar li a {
  display: block;
  padding-left: 11px;
  padding-right: 11px;
  font-size: 14px;
  text-align: center;
}
.navbar li a:focus,
.navbar li a:hover {
  text-decoration: none;
}
.navbar li b {
  float: left;
  margin: 11px 0;
  width: 1px;
  height: 14px;
  background-color: #3A5E95;
  border-right: 1px solid #758FB5;
}
.navbar-title {
  background: #525252;
  border-right: 2px solid white;
  font-weight: bold;
}
.navbar-title a:hover {
  color: #ffffff !important;
}
.navbar-inline {
  display: inline-block;
}
.navbar-default {
  background-color: #305895;
}
.navbar-default li a {
  color: #ffffff;
}
.navbar-default li a:focus,
.navbar-default li a:hover {
  color: #ff0000;
}
.navbar-border {
  border: 1px solid #3A5E95;
  border-top: 0;
}
.navbar-border li:first-child {
  border-right: 1px solid #3A5E95;
}
.navbar-border li:first-child a {
  color: #000000;
  font-weight: 900;
}
.navbar-brand li:first-child {
  border-right: 1px solid #fff;
}
.navbar-brand li:first-child a {
  font-weight: 900;
}
.navbar-links {
  height: 30px;
}
.navbar-links li {
  line-height: normal;
  padding: 5px 0;
}
.navbar-links li a {
  padding-left: 8px;
  padding-right: 9px;
  background: url(/framework/navbar/images/element.png) no-repeat -90px -188px;
  color: #000000;
  font-size: 12px;
  font-family: sans-serif, "Microsoft YaHei";
}
.navbar-links li a:hover {
  text-decoration: underline;
  color: #ff4900;
}
.navbar-links li.first {
  margin-left: -1px;
}
.navbar-links li .red a {
  color: #ff0000;
}
</style>

## 通用页头

### 基本结构
::: demo
```html
<div class="wrapper">
    <div class="grid">
        <div class="g-24">
            <iframe width="1000" height="60" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="http://same.eastmoney.com/s?z=eastmoney&amp;c=1068&amp;op=1"></iframe>
        </div>
    </div>

    <div class="navbar navbar-links">
        <ul>
            <li class="first"><a target="_blank" href="http://finance.eastmoney.com/">财经</a></li>
            <li><a target="_blank" href="http://finance.eastmoney.com/yaowen.html">要闻</a></li>
            <li><a target="_blank" href="http://stock.eastmoney.com/">股票</a></li>
            <li><span class="red"><a target="_blank" href="http://stock.eastmoney.com/newstock.html">新股</a></span></li>
            <li><a target="_blank" href="http://stock.eastmoney.com/gzqh.html">期指</a></li>
            <li><a target="_blank" href="http://option.eastmoney.com/">期权</a></li>
            <li><span class="red"><a target="_blank" href="http://quote.eastmoney.com/flash/sz300059.html">行情</a></span>
            </li>
            <li><a target="_blank" href="http://data.eastmoney.com/">数据</a></li>
            <li><a target="_blank" href="http://stock.eastmoney.com/global.html">全球</a></li>
            <li><a target="_blank" href="http://stock.eastmoney.com/america.html">美股</a></li>
            <li><a target="_blank" href="http://hk.eastmoney.com/">港股</a></li>
            <li><a target="_blank" href="http://futures.eastmoney.com/">期货</a></li>
            <li><a target="_blank" href="http://forex.eastmoney.com/">外汇</a></li>
            <li><a target="_blank" href="http://gold.eastmoney.com">黄金</a></li>
            <li><a target="_blank" href="http://bank.eastmoney.com/">银行</a></li>
            <li><a target="_blank" href="http://www.1234567.com.cn/">基金</a></li>
            <li><a target="_blank" href="http://money.eastmoney.com/">理财</a></li>
            <li><a target="_blank" href="http://insurance.eastmoney.com/">保险</a></li>
            <li><a target="_blank" href="http://bond.eastmoney.com/">债券</a></li>
            <li><a target="_blank" href="http://video.eastmoney.com/">视频</a></li>
            <li><span class="red"><a target="_blank" href="http://guba.eastmoney.com/">股吧</a></span></li>
            <li><a target="_blank" href="http://fund2.eastmoney.com/">基金吧</a></li>
            <li><a target="_blank" href="http://blog.eastmoney.com/">博客</a></li>
            <li><a target="_blank" href="http://so.eastmoney.com/">搜索</a></li>
        </ul>
    </div>
</div>
```
:::