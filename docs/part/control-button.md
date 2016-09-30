section: control
id: button
description: 按钮和按钮组
icon: icon-bold
filter: anniu an
---

# 按钮

按钮是用来触发一些动作。通常用在表单、对话框、菜单上面。好的按钮设计能够引导用户高效的达到目的。

## 按钮的类型

按钮根据表现形式有如下类型：

<table class="table table-responsive">
  <tbody>
    <tr>
      <th class="col-md-4">按钮</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><button class="btn btn-primary">主要按钮</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-primary&quot; type="button"&gt;主要按钮&lt;/button&gt;
&lt;a class=&quot;btn btn-primary&quot; href=&quot;your/url/&quot;&gt;主要按钮&lt;/a&gt;</code></pre>
        <p>指示用户完成当前页面主要操作，例如提交表单，搜索，确认选择等。通常在一个页面里面仅包含一个主要按钮。</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-default">标准按钮</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn&quot; type=&quot;button&quot;&gt;标准按钮&lt;/button&gt;</code></pre>
        <p>页面上的普通按钮，例如取消表单、重置输入等。</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-link">链接按钮</button></td>
      <td>
      <pre><code>&lt;button class=&quot;btn btn-link&quot; type=&quot;button&quot;&gt;链接按钮&lt;/button&gt;</code></pre>
      <p>链接按钮的外观和超链接一样，所不同的是用户点击时不是导向超链接指示的地址，而是触发一个操作。链接按钮通常用于页面上的次要操作，例如取消表单。</p></td>
    </tr>
  </tbody>
</table>

## 按钮的大小

<table class="table">
  <tbody>
    <tr>
      <th class="col-md-4">实例</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><button class="btn btn-lg btn-primary" type="button">大尺寸按钮</button>
      <button class="btn btn-lg" type="button">大尺寸按钮</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-lg&quot; type=&quot;button&quot;&gt;大尺寸按钮&lt;/button&gt;</code></pre>
        <p>大尺寸按钮。</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-primary" type="button">默认大小</button>
      <button class="btn btn-default" type="button">默认大小</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn&quot; type=&quot;button&quot;&gt;默认大小按钮&lt;/button&gt;</code></pre>
        <p>默认大小。</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-sm btn-primary" type="button">较小的按钮</button>
      <button class="btn btn-sm" type="button">较小的按钮</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-sm &quot; type=&quot;button&quot;&gt;较小的按钮&lt;/button&gt;</code></pre>
        <p>较小的按钮。</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-mini btn-primary" type="button">迷你按钮</button>
      <button class="btn btn-mini" type="button">迷你按钮</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-mini &quot; type=&quot;button&quot;&gt;迷你按钮&lt;/button&gt;</code></pre>
        <p>迷你按钮。</p>
      </td>
    </tr>
    <tr>
      <td><button class="btn btn-large btn-block btn-primary" type=
      "button">块状按钮</button> <button class=
      "btn btn-large btn-block btn-default" type="button">块状按钮</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-block &quot; type=&quot;button&quot;&gt;迷你按钮&lt;/button&gt;</code></pre>
        <p>块状按钮会占据整个水平宽度，适合较窄面板中的重要操作。</p>
      </td>
    </tr>
  </tbody>
</table>

## 按钮的不同状态

<table class="table">
  <tbody>
    <tr>
      <th class="col-md-4">实例</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><button class="btn btn-default"><i class="icon icon-star"></i> 带图标的按钮</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn &quot; type=&quot;button&quot;&gt;&lt;i class=&quot;icon icon-star&quot;&gt;&lt;/i&gt; 带图标的按钮&lt;/button&gt;</code></pre>
        在按钮上使用图标有时能起到点睛之笔的效果。
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-primary active" data-toggle=
      "button">状态切换按钮</button></td>
      <td>
        <pre><code>&lt;button data-toggle=&quot;button&quot; class=&quot;btn &quot; type=&quot;button&quot;&gt;状态切换按钮&lt;/button&gt;</code></pre>
        <p>状态切换按钮提供一个类似复选框的机制，当点击后切换为选中状态（为按钮增加Class <code>.active</code>），再次点击取消选中状态。</p>
      </td>
    </tr>
    <tr>
      <td>
        <a disabled href="#" class="btn btn-primary disabled">已禁用的操作</a> <a disabled href="#" class="btn disabled">禁用的操作</a>
      </td>
      <td>
        <pre><code>&lt;a disabled href=&quot;your/url/&quot; class=&quot;btn disabled&quot;&gt;禁用的操作&lt;/a&gt;</code></pre>
        <p>当按钮指代的操作在某些情景下不可用时这时就要给按钮切换到禁用状态，让用户知道按钮不可点击。</p>
        <p>为按钮增加CLASS `.disabled` 即可让一个按钮使用被禁用的外观。你或许还需要为按钮增加 `disabled` 属性来禁用用户点击等操作。</p>
      </td>
    </tr>
  </tbody>
</table>

## 按钮的颜色

按钮的颜色赋予按钮以感情色彩能够在视觉上首当其冲的体现按钮的功能意向。例如重要按钮和标准按钮的颜色不同而体现其重要程度。使用更多的颜色来使得目的更加明确，与用户期望一致。

<table class="table">
  <tbody>
    <tr>
      <th class="col-md-4">实例</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><button type="button" class="btn">默认</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn &quot; type=&quot;button&quot;&gt;默认&lt;/button&gt;</code></pre>
        <p>默认外观按钮</p>
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-primary">主要</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-primary &quot; type=&quot;button&quot;&gt;主要&lt;/button&gt;</code></pre>
        <p>提供额外的视觉感, 可在一系列的按钮中指出主要操作</p>
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-info">信息</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-info &quot; type=&quot;button&quot;&gt;信息&lt;/button&gt;</code></pre>
        <p>默认样式的替代样式</p>
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-success">成功</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-success &quot; type=&quot;button&quot;&gt;成功&lt;/button&gt;</code></pre>
        <p>表示成功或积极的动作</p>
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-warning">警告</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-warning &quot; type=&quot;button&quot;&gt;警告&lt;/button&gt;</code></pre>
        <p>提醒应该谨慎采取这个动作</p>
      </td>
    </tr>
    <tr>
      <td><button type="button" class="btn btn-danger">危险</button></td>
      <td>
        <pre><code>&lt;button class=&quot;btn btn-danger &quot; type=&quot;button&quot;&gt;危险&lt;/button&gt;</code></pre>
        <p>表示这个动作危险或存在危险</p>
      </td>
    </tr>
  </tbody>
</table>

<script>
function afterPageLoad() {
    $('#loadingBtnExample').on('click', function() {
        var $btn = $(this);
        $btn.button('loading');

        // 此处使用 setTimeout 来模拟你的复杂功能逻辑
        setTimeout(function() {
            $btn.button('reset');
        }, 2000);
    });
}
</script>
