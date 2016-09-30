section: control
id: icon
description: 使用和查找图标
icon: icon-star
filter: tubiao tb
---

# 图标

<style>
#iconsExample ul {padding: 0;}
#iconsExample li {
  cursor: pointer;
  float: left;
  width: 150px;
  line-height: 25px;
  list-style: none;
  padding: 2px 10px;
  white-space: nowrap;
  transition: all .3s;
}
#iconsExample li a {color: #333}
#iconsExample li a:hover {text-decoration: none}
#iconsExample li a > i {display: inline-block; width: 20px}
#iconsExample li:hover {background-color: #d5f1d7; transform: scale(1.2);}

.table-icons-example td {vertical-align: middle;}
.table-icons-example td pre {margin-bottom: 0;}

</style>

图标能在视觉上简洁有效的指引用户操作。特殊情况下，使用图标能够代替文本。

## 何时使用图标？

同一个应用程序中的图标应该具有一致的外观及用户行为响应，应该将整个图标集作为用户界面中的重要部分。一般图标用于如下情况：

*   用于应用程序头部，便于用户识别正在使用的应用；
*   用于按钮，对于一些常用的按钮可以使用图标取代按钮中的文本，使得界面更加简洁；
*   用于提示消息，图标能指明消息类型，便于用户无需仔细阅读消息内容就可以迅速做出决策；
*   用于一些简单但重要列表，在列表项目前面加上合适的图标能大大增强列表识别程度；
*   等同与标签，图标能简明表达项目或信息类型。

## stbui中的图标


## 如何使用图标？

### 用法

使用一个单独的`<span>`标签或者`<i>`并增加对应的CSS类名即可，用来作为图标的标签不需要包含任何文本也不应该如此。

```
<i class="icon icon-star"></i>
```


### 预设的图标尺寸

<div class="example">
  <table class="table table-icons-example">
    <tbody><tr>
      <td>正常大小</td>
      <td><i class="icon icon-star"></i></td>
      <td><pre><code>&lt;i class="icon icon-star"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-2x</code></td>
      <td><i class="icon icon-star icon-2x"></i></td>
      <td><pre><code>&lt;i class="icon icon-star <em>icon-2x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-3x</code></td>
      <td><i class="icon icon-star icon-3x"></i></td>
      <td><pre><code>&lt;i class="icon icon-star <em>icon-3x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-4x</code></td>
      <td><i class="icon icon-star icon-4x"></i></td>
      <td><pre><code>&lt;i class="icon icon-star <em>icon-4x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-5x</code></td>
      <td><i class="icon icon-star icon-5x"></i></td>
      <td><pre><code>&lt;i class="icon icon-star <em>icon-5x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
  </tbody></table>
</div>
