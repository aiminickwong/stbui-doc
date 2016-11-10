## 高级使用

基于map.json的前后端架构设计指导

### stbui 静态资源管理方案

#### 让stbui帮你产出静态资源表
在项目中添加map.json的文件，加入适当的配置，对这个项目编译后会得到一个map.json的文件

```
{
    "res": {
        "framework/common/stbui.less": {
            "uri": "/framework/common/stbui_7491085.css",
            "type": "css",
            "pkg": "p1"
        },
        "autocomplete": {
            "uri": "/framework/autocomplete/autocomplete_a8d4cb8.js",
            "type": "js",
            "deps": [
                "request/index"
            ],
            "pkg": "p0"
        },
        "index/images/play.png": {
            "uri": "/pkg/page/index/images/play_d12e838.png",
            "type": "png",
            "cssspritePkg": "pkg/app_index_z.png"
        },
        "index/index.less": {
            "uri": "/page/index/index_fcb94aa.css",
            "type": "css",
            "pkg": "p2"
        },
        "index/index.html": {
            "uri": "/index.html",
            "type": "html",
            "deps": [
                "index/index.js"
            ]
        },
        "index/index.js": {
            "uri": "/page/index/index_c7f018e.js",
            "type": "js",
            "extras": {
                "moduleId": "index/index"
            },
            "deps": [
                "search",
                "index/swipe.js"
            ],
            "pkg": "p3"
        }
    },
    "pkg": {
        "p0": {
            "uri": "/pkg/framework_22132b8.js",
            "type": "js",
            "has": [
                "autocomplete"
            ]
        },
        "p1": {
            "uri": "/pkg/framework_a6dabb4.css",
            "type": "css",
            "has": [
                "framework/common/stbui.less"
            ]
        },
        "p2": {
            "uri": "/pkg/app_index_cd4b50a.css",
            "type": "css",
            "has": [
                "index/index.less"
            ]
        },
        "p3": {
            "uri": "/pkg/app_index_6b5dbe5.js",
            "type": "js",
            "has": [
                "index/index.js"
            ],
            "deps": [
                "search"
            ]
        }
    }
}
```

### 静态资源管理系统

1. 准备两个数据结构：
    * uris = []，数组，顺序存放要输出资源的uri
    * has = {}，hash表，存放已收集的静态资源，防止重复加载
1. 加载资源表 **map.json**
1. 通过后台模板处理我们得到：

    ```
    uris = [
        '/pkg/framework_22132b8.js',
        '/pkg/app_index_6b5dbe5.js',
    ];
    has = {
        'autocomplete' : true,
        'request/index' : true
    };
    ```
1. 在要输出的html前面，我们读取 uris数组 的数据，生成静态资源外链，我们得到最终的html结果：
```
<html>
    <link rel="stylesheet" href="/pkg/framework_a6dabb4.css" />
    <link rel="stylesheet" href="/pkg/app_index_cd4b50a.css" />
    <div>html of A</div>
    <div>html of B</div>
    <div>html of C</div>
    <script type="text/javascript" src="/pkg/framework_22132b8.js"></script>
    <script type="text/javascript" src="/pkg/app_index_6b5dbe5.js"></script>
</html>
```
看到了么！！！，我们不但可以让资源按需加载，还能全部映射到正确的md5戳哦，这全依赖stbui的表生成技术！

### 这样做的好处
* 工程师不用关心资源在哪，怎么来的，怎么没的，所有 资源定位 的事情，都交给stbui好了。
* 静态资源路径都带md5戳，这个值只跟内容有关，静态资源服务器从此可以放心开启强缓存了！还能实现静态资源的分级发布，回滚神马的超方便哦！
