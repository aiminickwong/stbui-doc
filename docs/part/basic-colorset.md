section: basic
id: colorset
description: 默认配色方案
icon: icon-dashboard
filter: peise ps
---

# 配色

<style>
.colorset > div.copyable:after {display: none}
.colorset > div.copyable .copyable-target {position: absolute; right: 5px; top: 4px; font-size: 12px; opacity: 0.6; transition: opacity .2s;}
.colorset > div.copyable:hover .copyable-target {opacity: 1}
.colorset > div > .btn-copy-code {border: none; display: block; width: 158px; height: 158px; position: absolute; top: 0; left: 0; background: transparent;}
.colorset > div > .btn-copy-code > .icon {opacity: 0; display: block; width: 40px; height: 40px; border-radius: 20px; background: rgba(0,0,0,.15); color: #fff; line-height: 40px; margin: 0 auto; text-shadow: none; transform: scale(0.2); transition: transform .5s cubic-bezier(.175,.885,.32,1), opacity .5s cubic-bezier(.175,.885,.32,1);}
.colorset > div > .btn-copy-code:hover > .icon {transform: scale(1); opacity: 1;}
</style>

stbui的配色表包含三部分：主要颜色，灰度颜色及额外颜色。

## 主要颜色

包含3～5种颜色，决定了stbui界面整体色调。主要颜色会用在菜单、导航、链接、高亮选项等。

在ZUI的默认配色方案中，包含以下主要颜色：

<div class="colorset">
  <div class="color-primary" data-color="primary"></div>
  <div class="color-secondary" data-color="secondary"></div>
  <div class="color-pale" data-color="pale"></div>
  <div class="color-fore" data-color="fore"></div>
  <div class="color-back" data-color="back"></div>
</div>

## 灰度颜色

灰度颜色强制使用同一色调不同亮度的一组颜色。在无特别需求的情况下，一般使用黑色灰度。灰度颜色会用在块的背景，边框，次要的文本上。灰度颜色为界面创建了层次感，加深了内容与内容间的边界，更易于体现内容的重要程度。

<div class="colorset">
  <div class="color-gray-darker" data-color="grayDarker"></div>
  <div class="color-gray-dark" data-color="grayDark"></div>
  <div class="color-gray" data-color="gray"></div>
  <div class="color-gray-light" data-color="grayLight"></div>
  <div class="color-gray-lighter" data-color="grayLighter"></div>
  <div class="color-gray-pale" data-color="grayPale"></div>
</div>

<div class="colorset">
  <div class="color-white" data-color="white"></div>
  <div class="color-black" data-color="black"></div>
</div>

<div class="colorset">
  <div class="color-light" data-color="light"></div>
  <div class="color-dark" data-color="dark"></div>
</div>

## 额外颜色

额外的颜色为特殊控件提供的更多的色彩选择。例如各种级别的消息框，特殊作用的按钮，特殊文本等。

<div class="colorset">
  <div class="color-red" data-color="red"></div>
  <div class="color-yellow" data-color="yellow"></div>
  <div class="color-green" data-color="green"></div>
  <div class="color-blue" data-color="blue"></div>
  <div class="color-brown" data-color="brown"></div>
  <div class="color-purple" data-color="purple"></div>
</div>

<div class="colorset">
  <div class="color-danger" data-color="danger"></div>
  <div class="color-warning" data-color="warning"></div>
  <div class="color-success" data-color="success"></div>
  <div class="color-info" data-color="info"></div>
  <div class="color-important" data-color="important"></div>
  <div class="color-special" data-color="special"></div>
</div>

<div class="colorset">
  <div class="color-danger-pale" data-color="dangerPale"></div>
  <div class="color-warning-pale" data-color="warningPale"></div>
  <div class="color-success-pale" data-color="successPale"></div>
  <div class="color-info-pale" data-color="infoPale"></div>
  <div class="color-important-pale" data-color="importantPale"></div>
  <div class="color-special-pale" data-color="specialPale"></div>
</div>
