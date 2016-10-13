<style>
  .demo-box {
    .el-dropdown {
      vertical-align: top;

      & .el-button-group {
        margin-bottom: 0;
      }
      & + .el-dropdown {
        margin-left: 15px;
      }
    }
  }

  .demo-dropdown .block {
    display: inline-block;
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    flex: 1;
    &:last-child {
      border-right: none;
    }
  }

 .demo-dropdown .demonstration {
   display: block;
   color: #8492a6;
   font-size: 14px;
   margin-bottom: 20px;
 }
</style>

<script>
  export default {
    methods: {
      handleMainClick() {
        alert('click main button');
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let lastDemo = demos[demos.length - 1];
        lastDemo.style.padding = '0';
        lastDemo.style.display = 'flex';
      });
    }
  }
</script>
## Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

### 基础用法

移动到下拉菜单上，展开更多操作。


