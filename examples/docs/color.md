<style>
  .demo-color-box {
    border-radius: 4px;
    padding: 20px;
    height: 74px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;

    & .value {
      font-size: 12px;
      opacity: 0.69;
      line-height: 24px;
    }
  }
  .demo-color-box-group {
    .demo-color-box {
      border-radius: 0;
    }
    .demo-color-box:first-child {
      border-radius: 4px 4px 0 0;
    }
    .demo-color-box:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
  .bg-blue-light {
    background-color: rgba(48, 88, 149, 0.8);;
  }
  .bg-blue,
  .bg-info {
    background-color: #305895;
  }
  .bg-blue-dark {
    background-color: #2a4d82;
  }

  .bg-success {
    background-color: #008000;
  }
  .bg-warning {
    background-color: #ff9212;
  }
  .bg-danger {
    background-color: #ff4802;
  }

  .bg-black {
    background-color: #1f2d3d;
  }
  .bg-black-light {
    background-color: #324057;
  }
  .bg-black-lighter {
    background-color: #475669;
  }

  .bg-silver {
    background-color: #8492a6;
  }
  .bg-silver-light {
    background-color: #99a9bf;
  }
  .bg-silver-lighter {
    background-color: #c0ccda;
  }

  .bg-gray {
    background-color: #d3dce6;
  }
  .bg-gray-light {
    background-color: #e5e9f2;
  }
  .bg-gray-lighter {
    background-color: #eff2f7;
  }

  .bg-white-dark {
    background-color: #f9fafc;
  }

  .color-gray {
    color: #5e6d82;
  }
</style>

## Color 色彩

Stbui 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主色

Stbui 主要品牌颜色是鲜艳、友好的蓝色。

<el-row :gutter="12">
  <el-col :span="8">
    <div class="demo-color-box bg-blue-light">Light Blue<div class="value">#5979AA</div></div>
  </el-col>
  <el-col :span="8">
    <div class="demo-color-box bg-blue">Blue<div class="value">#305895</div></div>
  </el-col>
  <el-col :span="8">
    <div class="demo-color-box bg-blue-dark">Dark Blue<div class="value">#2A4D82</div></div>
  </el-col>
</el-row>

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box bg-info">Blue<div class="value">#305895</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-success">Success<div class="value">#008000</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-warning">Warning<div class="value">#FF9212</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-danger">Danger<div class="value">#FF4802</div></div>
  </el-col>
</el-row>

### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-black">Black<div class="value">#1F2D3D</div></div>
      <div class="demo-color-box bg-black-light">Light Black<div class="value">#324057</div></div>
      <div class="demo-color-box bg-black-lighter">Extra Light Black<div class="value">#475669</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-silver">Silver<div class="value">#8492A6</div></div>
      <div class="demo-color-box bg-silver-light">Light Silver<div class="value">#99A9BF</div></div>
      <div class="demo-color-box bg-silver-lighter">Extra Light Silver<div class="value">#C0CCDA</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box color-gray bg-gray">Gray<div class="value">#D3DCE6</div></div>
      <div class="demo-color-box color-gray bg-gray-light">Light Gray<div class="value">#E5E9F2</div></div>
      <div class="demo-color-box color-gray bg-gray-lighter">Extra Light Gray<div class="value">#EFF2F7</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group" style="border: 1px solid #e0e6ed;border-radius: 4px;">
      <div class="demo-color-box color-gray bg-white-dark">Dark White<div class="value">#F9FAFC</div></div>
      <div class="demo-color-box color-gray bg-white">White<div class="value">#FFFFFF</div></div>
    </div>
  </el-col>
</el-row>
