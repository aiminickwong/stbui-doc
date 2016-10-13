<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.7
      };
    },
    mounted() {
      this.$nextTick(() => {
        let firstDemo = document.querySelector('.source');
        firstDemo.style.padding = '0';
        firstDemo.style.display = 'flex';
      });
    }
  }
</script>
<style>
  .demo-rate .block {
    display: inline-block;
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    flex: 1;
    &:last-child {
      border-right: none;
    }
  }
  
  .demo-rate .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

## Rate 评分

评分组件
 


