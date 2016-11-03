<style>
  .page-guide {
    padding: 55px 10px 95px;
    background-color:#fff;

    .content {
      padding-left: 25px;
      margin-left: -1px;

      h3 {
        font-size: 22px;
        font-weight: normal;
        margin: 0 0 30px;
        color: #1f2d3d;
      }
      p {
        font-size: 14px;
        color: #5e6d82;
      }
      ul {
        margin-bottom: 50px;
        padding-left: 0;
      }
      li {
        font-size: 14px;
        margin-bottom: 10px;
        color: #99a9bf;
        list-style: none;

        &:before {
          content: '';
          display: inline-block;
          width: 4px;
          height: @width;
          border-radius: 50%;
          vertical-align: middle;
          background-color: #5e6d82;
          margin-right: 5px;
        }

        strong {
          color: #5e6d82;
          font-weight: 400;
        }
      }
    }
  }
</style>
<template>
  <div class="page-container page-guide">
    <el-row>
      <el-col :span="5">
        <side-nav :data="navsData" base="/modules"></side-nav>
      </el-col>
      <el-col :span="19">
        <router-view class="content"></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navsData: [
          {
            path: '/comment',
            name: '评论'
          },
          {
            path: '/search',
            name: '搜索'
          },
          {
            path: '/share',
            name: '分享'
          },
          {
            path: '/footer',
            name: '页脚'
          },
          {
            path: '/header',
            name: '页头'
          },
          {
            path: '/menu',
            name: '菜单'
          },
          {
            path: '/passport',
            name: '通行证'
          },
          {
            path: '/chart',
            name: '图表'
          },
          {
            path: '/list',
            name: '列表'
          },
          {
            path: '/article',
            name: '文章'
          }
        ]
      };
    }
  };
</script>
