<style>
  .demo-layout {
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      height: 36px;
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      height: 100%;
      border-radius: 4px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }

  .grid {
    margin-left: -10px;
    margin-right: -10px;
    height: auto;
    overflow: hidden;
    clear: both;
    *zoom: 1;
  }
  .g-1 {
    width: 22.5px;
  }
  .g-2 {
    width: 65px;
  }
  .g-3 {
    width: 107.5px;
  }
  .g-4 {
    width: 150px;
  }
  .g-5 {
    width: 192.5px;
  }
  .g-6 {
    width: 235px;
  }
  .g-7 {
    width: 277.5px;
  }
  .g-8 {
    width: 320px;
  }
  .g-9 {
    width: 362.5px;
  }
  .g-10 {
    width: 405px;
  }
  .g-11 {
    width: 447.5px;
  }
  .g-12 {
    width: 490px;
  }
  .g-13 {
    width: 532.5px;
  }
  .g-14 {
    width: 575px;
  }
  .g-15 {
    width: 617.5px;
  }
  .g-16 {
    width: 660px;
  }
  .g-17 {
    width: 702.5px;
  }
  .g-18 {
    width: 745px;
  }
  .g-19 {
    width: 787.5px;
  }
  .g-20 {
    width: 830px;
  }
  .g-21 {
    width: 872.5px;
  }
  .g-22 {
    width: 915px;
  }
  .g-23 {
    width: 957.5px;
  }
  .g-24 {
    width: 1000px;
  }
  .g-1, .g-2, .g-3, .g-4, .g-5, .g-6, .g-7, .g-8, .g-9, .g-10, .g-11, .g-12, .g-13, .g-14, .g-15, .g-16, .g-17, .g-18, .g-19, .g-20, .g-21, .g-22, .g-23, .g-24 {
    position: relative;
    min-height: 1px;
    margin-left: 10px;
    margin-right: 10px;
    *zoom: 1;
  }
  .grid-offset-0 {
    margin-bottom: 0px;
  }
  .grid-offset-1 {
    margin-bottom: 2px;
  }
  .grid-offset-2 {
    margin-bottom: 4px;
  }
  .grid-offset-3 {
    margin-bottom: 6px;
  }
  .grid-offset-4 {
    margin-bottom: 8px;
  }
  .grid-offset-5 {
    margin-bottom: 10px;
  }
  .grid-offset-6 {
    margin-bottom: 12px;
  }
  .grid-offset-7 {
    margin-bottom: 14px;
  }
  .grid-offset-8 {
    margin-bottom: 16px;
  }
  .grid-offset-9 {
    margin-bottom: 18px;
  }
  .grid-offset-10 {
    margin-bottom: 20px;
  }

  .g {
    background:#ddd;
    color:#fff;
  }
</style>

## Layout 布局

基于1000px进行 24 分栏设计，迅速简便地创建布局。

### 分栏尺寸

分栏计算公式：(1000+20)/24*n-20

### 基础布局

使用单一分栏创建基础的栅格布局。
::: demo
```html
<div class="g">
<div class="g-1" style="background:#f00">22.5px</div>
<div class="g-2" style="background:#f00">65px</div>
<div class="g-3" style="background:#f00">107.5px</div>
<div class="g-4" style="background:#f00">150px</div>
<div class="g-5" style="background:#f00">192.5px</div>
<div class="g-6" style="background:#f00">235px</div>
<div class="g-7" style="background:#f00">277.5px</div>
<div class="g-8" style="background:#f00">320px</div>
<div class="g-9" style="background:#f00">362.5px</div>
<div class="g-10" style="background:#f00">405px</div>
</div>
```
:::

### 分栏间隔

分栏之间存在间隔。



### 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。



### 分栏偏移

支持偏移指定的栏数。



### 对齐方式

对分栏进行灵活的对齐。

<script>
</script>