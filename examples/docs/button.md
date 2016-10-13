<script>
  export default {
    data() {
      return {
        isLoading: false,
        isLoading2: false
      };
    },
    methods: {
      handleClick(event) {
        console.log(event);
        alert('button clicked!');
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let thirdDemo = demos[2];
        thirdDemo.classList.add('intro-block');
      });
    }
  }
</script>
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
</style>

## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。


### 禁用状态

按钮不可用状态。



### 有颜色倾向

不同的颜色倾向代表不同的提示



### 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。



### 按钮组

以按钮组的方式出现，常用于多项类似操作。



### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。



### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。


