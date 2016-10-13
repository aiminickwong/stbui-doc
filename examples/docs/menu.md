<style>
  .demo-box.demo-menu {
    .el-menu-demo {
      padding-left: 55px;
    }
    .el-menu-vertical-demo {
      width: 200px;
      height: 400px;
    }
    .line {
      height: 1px;
      background-color: #e0e6ed;
      margin: 35px -24px;
    }
    h5 {
      font-size: 14px;
      color: #8492a6;
      margin-top: 10px;
    }
    .tac {
      text-align: center;

      .el-menu-vertical-demo {
        display: inline-block;
        text-align: left;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        search: '',
        search2: ''
      };
    },
    methods: {
      handleopen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleclose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleselect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

## NavMenu 导航菜单

为网站提供导航功能的菜单。


