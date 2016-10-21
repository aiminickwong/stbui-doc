<style>
.pagination {
  height: 36px;
  margin: 18px 0;
}
.pagination{
  display: inline-block;
  *display: inline;
  *zoom: 1;
  margin-left: 0;
  margin-bottom: 0;
}
.pagination li {
  display: inline;
  float: left;
  position: relative;
}
.pagination li a {
  float: left;
  padding: 0 14px;
  line-height: 34px;
  text-decoration: none;
  border: 1px solid #ddd;
  margin: 0 4px;
}
.pagination li.active a {
  background-color: #f5f5f5;
  color: #999999;
  cursor: default;
}
.pagination li.disabled a,
.pagination li .disabled a:hover {
  color: #999999;
  background-color: transparent;
  cursor: default;
}
.pagination-centered {
  text-align: center;
}
.pagination-right {
  text-align: right;
}
.pagination .redirect {
  margin-left: 10px;
}
.pagination .redirect input {
  width: 34px;
  height: 22px;
}
.pagination .redirect button {
  width: 22px;
  height: 22px;
}
.pagination-default li a {
  border: 1px solid #86a6d8;
}
.pagination-default li.active a {
  color: #fff;
  background-color: #305895;
}
.pagination-primary li a {
  border: 1px solid #ffb79b;
}
.pagination-primary li.active a {
  color: #fff;
  background-color: #ff4802;
}
.pagination-sm li a {
  padding: 0 8px;
  line-height: 22px;
}

</style>
## Pagination 分页

当数据量过多时，使用分页分解数据。

:::demo
```html
<ul class="pagination pagination-default">
    <li><a>首页</a></li>
    <li><a>1</a></li>
    <li><a>2</a></li>
    <li><a>3</a></li>
    <li><a>尾页</a></li>
</ul>
```

