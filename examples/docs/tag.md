<script>
  export default {
    data() {
      return {
        tags: [
          { key: 1, name: '标签一', type: '' },
          { key: 2, name: '标签二', type: 'gray' },
          { key: 5, name: '标签三', type: 'primary' },
          { key: 3, name: '标签四', type: 'success' },
          { key: 4, name: '标签五', type: 'warning' },
          { key: 6, name: '标签六', type: 'danger' }
        ]
      };
    },
    methods: {
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      }
    }
  }
</script>

<style>
  .demo-box.demo-tag {
    .el-tag + .el-tag {
      margin-left: 10px;
    }
  }
</style>

## Tag 标签

用于标记和选择。


