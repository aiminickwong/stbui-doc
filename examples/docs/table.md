<style>
.table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin-top: 10px;
  font-size: 12px;
  font-family: "Arial", "SimSun", sans-serif;
}
.table thead tr th,
.table thead tr td,
.table tbody tr td {
  padding: 7px;
}
.table thead tr th,
.table thead tr td {
  text-align: center;
  border-bottom: 1px solid #bbd4e8;
}
.table tbody tr td {
  text-align: center;
}
.table-hover tbody tr:hover {
  background-color: #bbd4e8;
}
.table-border {
  border: 1px solid #bbd4e8;
}
.table-border thead th,
.table-border thead td {
  color: #333;
  line-height: 1.4;
  padding: 5px;
}
.table-border th,
.table-border td {
  border: 1px solid #bbd4e8;
}
.table-hover tbody tr td.default:hover,
.table-hover tbody tr.default:hover td,
.table-hover tbody tr:hover .default {
  background-color: #adc3e4;
}
.table tbody tr td.default,
.table tbody tr.default td {
  background-color: #adc3e4;
}
.table-default {
  border: 1px solid #305895;
}
.table-default thead th,
.table-default thead td {
  background-color: #adc3e4;
}
.table-default th,
.table-default td {
  border: 1px solid #305895;
}
.table-hover tbody tr td.primary:hover,
.table-hover tbody tr.primary:hover td,
.table-hover tbody tr:hover .primary {
  background-color: #ffdcce;
}
.table tbody tr td.primary,
.table tbody tr.primary td {
  background-color: #ffdcce;
}
.table-primary {
  border: 1px solid #ff4802;
}
.table-primary thead th,
.table-primary thead td {
  background-color: #ffdcce;
}
.table-primary th,
.table-primary td {
  border: 1px solid #ff4802;
}

</style>

## Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础表格

基础的表格展示用法。

:::demo
```html
<table class="table">
    <thead>
    <tr>
        <td>排名</td>
        <td>名称</td>
        <td>相关链接</td>
        <td>涨跌幅</td>
        <td>今日主力净流入</td>
        <td>今日超大单净流入</td>
        <td>今日大单净流入</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    </tbody>
</table>
```
:::

### 带边框表格

:::demo
```html
<table class="table table-border">
    <thead>
    <tr>
        <td>排名</td>
        <td>名称</td>
        <td>相关链接</td>
        <td>涨跌幅</td>
        <td>今日主力净流入</td>
        <td>今日超大单净流入</td>
        <td>今日大单净流入</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    </tbody>
</table>
```
:::


### 有颜色倾向

:::demo
```html
<table class="table table-default">
    <thead>
    <tr>
        <td>排名</td>
        <td>名称</td>
        <td>相关链接</td>
        <td>涨跌幅</td>
        <td>今日主力净流入</td>
        <td>今日超大单净流入</td>
        <td>今日大单净流入</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    </tbody>
</table>

<table class="table table-primary">
    <thead>
    <tr>
        <td>排名</td>
        <td>名称</td>
        <td>相关链接</td>
        <td>涨跌幅</td>
        <td>今日主力净流入</td>
        <td>今日超大单净流入</td>
        <td>今日大单净流入</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    </tbody>
</table>
```
:::

### 带hover表格

:::demo
```html
<table class="table table-hover">
    <thead>
    <tr>
        <td>排名</td>
        <td>名称</td>
        <td>相关链接</td>
        <td>涨跌幅</td>
        <td>今日主力净流入</td>
        <td>今日超大单净流入</td>
        <td>今日大单净流入</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="" target="_blank">工程建设</a></td>
        <td><a href="" target="_blank">股吧</a> <a href="" target="_blank">详情</a></td>
        <td class="text-red">1.76%</td>
        <td class="text-green">8.39亿</td>
        <td class="text-green">4.17%</td>
        <td class="text-red">8.76</td>
    </tr>
    </tbody>
</table>
```
:::