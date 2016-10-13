<style>
  .leaf {
    width: 20px;
    background: #ddd;
  }

  .folder {
    width: 20px;
    background: #888;
  }
</style>

<script>
  var data = [{
    label: '一级 1',
    children: [{
      label: '二级 1-1'
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1'
    }, {
      label: '二级 2-2'
    }]
  }, {
    label: '一级 3',
    children: [{
      label: '二级 3-1'
    }, {
      label: '二级 3-2'
    }]
  }];

  var regions = [{
    'name': 'region1'
  }, {
    'name': 'region2'
  }];

  var count = 1;

  var props = {
    label: 'name',
    children: 'zones',
    icon(data, node) {
      if (node.isLeaf) {
        return 'el-icon-close';
      }
      return 'el-icon-search';
    }
  };

  var defaultProps = {
    children: 'children',
    label: 'label'
  };

  export default {
    methods: {
      loadNode(node, resolve) {
        console.log(node);
        if (node.level === -1) {
          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
        }
        if (node.level > 4) return resolve([]);
        var hasChild;
        if (node.data.name === 'Root1') {
          hasChild = true;
        } else if (node.data.name === 'Root2') {
          hasChild = false;          
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(function() {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + count++
            }, {
              name: 'zone' + count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    },

    data() {
      return {
        data,
        regions,
        defaultProps,
        props
      };
    }
  };
</script>

## Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。


