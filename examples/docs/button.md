<style>
  .demo-box.demo-button {
    .el-row {
      margin-bottom: 10px;
    }
    .el-button + .el-button {
      margin-left: 10px;
    }
    .el-button-group {
      margin-bottom: 20px;

      .el-button + .el-button {
        margin-left: 0;
      }
    }
  }

  .demo-box.demo-button .intro-block {
    padding: 0;
  }

  .demo-button .intro-block .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;      
    }
  }

  .demo-button .intro-block .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demo-button .intro-block .wrapper {
    float: right;
    margin-right: 20px;
  }

  .btn {
    display: inline-block;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #E1E1E1;
    background: #E1E1E1;
    cursor: pointer;
    box-sizing: border-box;
  }
  .btn-block {
    display: block;
    width: 100%;
  }
  .btn-lg {
    padding: 6px 22px;
  }
  .btn-default {
    color: #ffffff;
    background-color: #305895;
    border-color: #305895;
  }
  .btn-default:hover,
  .btn-default:focus,
  .btn-default:active,
  .btn-default.active {
    color: #ffffff;
    background-color: #2a4d82;
    border-color: #2a4d82;
  }
  .btn-primary {
    color: #ffffff;
    background-color: #ff4802;
    border-color: #ff4802;
  }
  .btn-primary:hover,
  .btn-primary:focus,
  .btn-primary:active,
  .btn-primary.active {
    color: #ffffff;
    background-color: #e84000;
    border-color: #e84000;
  }
  .btn-success {
    color: #ffffff;
    background-color: #008000;
    border-color: #008000;
  }
  .btn-success:hover,
  .btn-success:focus,
  .btn-success:active,
  .btn-success.active {
    color: #ffffff;
    background-color: #006700;
    border-color: #006700;
  }
  .btn-warning {
    color: #ffffff;
    background-color: #ff9212;
    border-color: #ff9212;
  }
  .btn-warning:hover,
  .btn-warning:focus,
  .btn-warning:active,
  .btn-warning.active {
    color: #ffffff;
    background-color: #f88600;
    border-color: #f88600;
  }
  .btn-sm {
    font-size: 12px;
  }
  .btn-md {
    font-size: 14px;
  }
  .btn-lg {
    font-size: 18px;
  }

</style>

## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo
```html
<button class="btn" type="button">默认按钮</button>
<button class="btn btn-default" type="button">主题按钮</button>
<a class="btn btn-default" href="#">链接按钮</a>
```
:::


### 有颜色倾向

不同的颜色倾向代表不同的提示

:::demo
```html
<button class="btn btn-default" type="button">主题按钮</button>
<button class="btn btn-primary" type="button">主要按钮</button>
<button class="btn btn-success" type="button">成功按钮</button>
<button class="btn btn-warning" type="button">提示按钮</button>
```
:::


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo
```html
<button class="btn btn-default btn-lg" type="button">主题按钮</button>
<button class="btn btn-default" type="button">主要按钮</button>
<button class="btn btn-default btn-sm" type="button">成功按钮</button>
```
:::
