<script>
  export default {
    data() {
      return {
        activeName: 'first',
        activeName2: ''
      }
    },
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
## Tabs 标签页
分隔内容上有关联但属于不同类别的数据集合。


