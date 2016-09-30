section: basic
id: theme
description: 自定义主题风格
icon: icon-leaf
filter: zhuti zt
---

# 主题

<style>
.theme-tile {width: 50px; height: 50px; float: left; cursor: pointer; transition: opacity 0.2s; position: relative; padding: 10px; margin-right: 10px;}
.theme-tile:hover {opacity: 0.9}
.theme-tile > .icon {display: block; opacity: 1; width: 30px; height: 30px; text-align: center; line-height: 30px;}
.theme-tile > .icon:before {opacity: 0; display: block;}
.theme-tile.active > .icon:before {opacity: 1}
body.theme-changing .theme-tile.active > .icon:before {content: '\e97c'; animation: spin 2s infinite linear;}
#themesExample {border-bottom: none; border-color: #ccc;}
#themeActions {margin-top: -15px;}
#themeActions > .toolbar {padding: 5px 10px 10px; border: 1px solid #ccc; border-top: none}
body.lte-ie-9 #themeActions > .toolbar {display: none}
#themeVariablesLess {border-radius: 0}
</style>

stbui外观风格力求简洁悦目，不过你可能仍然需要进行个性化设置，这时你可以充分利用ZUI提供的主题样式表来个大换装。

## 体验主题

点击以下主题来更改文档外观：

<div class="example themes clearfix hl-primary" id="themesExample">
</div>

<div id="themeActions" class="hl-primary copyable">
  <textarea name="themeVariablesLess" id="themeVariablesLess" rows="7" class="form-control copyable-target"></textarea>
  <div class="toolbar">
    <h5>主题：<span id="currentThemeName">default</span></h5>
    <button type="button" class="btn btn-primary" id="downloadThemeCss">编译下载 stbui-theme.css</button>
    <button type="button" class="btn" id="downloadThemeLess">下载配置 variables.theme.less</button>
  </div>
</div>

## 重新编译stbui

你可以通过重新编译stbui来更改stbui组件的外观。

### stbui外观配置文件

外观配置文件存放在`src/less/basic/variables.less`。

通过修改less变量来更改外观配置。

### 导入额外的配置

创建一个新的LESS文件，并存放在`src/less/basic/setting.less`。

此文件中的配置会覆盖`src/less/basic/variables.less`中官方设置。

### 编译Less

使用`gulp dist`命令来编译stbui，编译后的CSS样式表存放在`dist/css/`目录下。

## 开始定制主题

### 主题配置文件

主题配置文件存放在`src/less/basic/variables.theme.less`。

通过修改less变量来更改外观配置。

### 主题文件

主题文件存放在`src/less/theme.less`。

修改主题文件来定制主题外观。

### 编译Less

使用`gulp theme`命令来编译主题，编译后的CSS样式表存放在`dist/css/stbui-theme.css`。导入生成的样式表即可应用主题外观效果。
