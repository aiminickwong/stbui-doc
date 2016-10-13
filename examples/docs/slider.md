<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 0,
        value4: 0,
        value5: 0
      };
    }
  }
</script>

<style>
  .demo-box.demo-slider .source {
    padding: 0;
  }
  
  .demo-box.demo-slider .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;      
    }
  }
  
  .demo-box.demo-slider .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }
  
  .demo-box.demo-slider .demonstration + .el-slider {
    float: right;
    width: 70%;
    margin-right: 20px;
  }
</style>

## Slider 滑块

通过拖动滑块在一个固定区间内进行选择


