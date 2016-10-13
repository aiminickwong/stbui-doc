## 快速上手

Stbui 是一套 xxx，它能够帮助你更轻松更快速地开发项目。

### 安装 stbui

```bash
$ npm install stbui -g
```

如果安装很慢的话，可以尝试使用taobao的源进行安装。具体如下：
```bash
npm install -g stbui --registry=https://registry.npm.taobao.org --verbose
```
安装完成后，可以通过 `stbui -v` 命名查看安装的版本


### 创建项目

stbui 安装完成后，就可以通过下面的命令创建项目：
```bash
stbui project demo
```
注：demo为项目存放的目录


### 构建项目
```bash
stbui release dev -w
```
项目中有文件修改就会自动构建了。

如果要查看构建后的代码执行命令：
```bash
stbui server open
```


### 启动服务

在项目目录下执行命令

```bash
stbui server start
```

### 访问项目
打开浏览器访问:
```bash
http://127.0.0.1:8080
```
