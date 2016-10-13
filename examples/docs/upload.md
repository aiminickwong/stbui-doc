<style>
  .upload-tip {
    color: #8492a6;
    font-size: 12px;
    margin-top: 7px;
  }
  .demo-box {
    margin-bottom: 24px;
  }
</style>
<script>
  export default {
    methods: {
      handleChange(file, fileList, event) {
        console.log(file, fileList, event);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      beforeUpload(file) {
        if (file.size > 40000000) {
          console.warn(file.name + ' is too large!');
          return false;
        }
        return true;
      },
      handlePreview(file) {
        console.log(file);
      },
      handleSuccess(file, fileList) {
        console.log(file, fileList);
      },
      handleError(err, file, fileList) {
        console.log(err);
      }
    }
  }
</script>

## Upload 上传

通过点击或者拖拽上传文件


