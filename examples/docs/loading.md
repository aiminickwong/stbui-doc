<style>
  .el-loading-demo {
    border: solid 1px #999;
    border-radius: 4px;
    height: 100px;
  }
</style>

<script>
  export default {
    data() {
      return {
        loading: true,
        loading2: false,
        fullscreenLoading: false
      }
    },

    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      }
    }
  }
</script>
## Loading 加载

加载数据时显示动效。


