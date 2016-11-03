## 开发指南

开发之前需要配置好 Node.js 和 npm 环境，其中 npm 需要 3.0 或以上版本。

### 项目结构
```text
├── dist
│   ├── xxx.zip
│
├── framework
│   ├── framework
│       ├── images
│       ├── index.less
│       ├── index.js
│       ├── index.html
│
├── page
│   ├── page
│       ├── images
│       ├── index.less
│       ├── index.js
│       ├── index.html
├──
│
└──  stbui-conf.js
```


### npm scripts
```bash
npm run start   # 启动开发环境
npm run dev     # 构建开发代码
npm run bulid   # 打包产线代码
```

### stbui scripts
你可以通过 `stbui -h` 帮助查看相关命令

```bash
stbui release <name>    # 构建代码
stbui server <name>     # 本地服务
stubi project <name>    # 创建项目
stbui framework <name>  # 添加公共模块
stbui page <name>       # 添加业务模块
```
### 配置文件

默认配置文件为 `stbui-conf.js`，stbui 编译的整个流程都是通过配置来控制的。

### 贡献代码

参考 [贡献者文档](https://github.com/stbui/stbui/blob/master/.github/CONTRIBUTING.md)。
