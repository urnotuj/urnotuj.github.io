---
title: 《深入理解Bootstrap》读书笔记（二）
date: 2017-10-18 20:22:59
tags:
- Bootstrap
---
摘要：
Bootstrap基础的CSS布局语法，包括排版、代码、表格、表单、按钮、图片等。
<!--more-->

###  1、列表

####  1.1普通列表

普通列表的使用没有什么变化，只是在原本的基础上对margin和行间距做了一些调整。

####  1.2 有序列表

有序列表的使用也是没有什么变化，只是在原本的基础上对margin和行间距做了一些调整。

#### 1.3 去点列表

class为 <mark>list-unstyled</mark>

移除默认的列表样式，列表项中左对齐 ( &lt;ul&gt; 和 &lt;ol&gt; 中)。 

<b>注意：</b>这个类仅适用于直接子列表项。


    <h4>去点列表</h4>
    <ul class="list-unstyled">
      <li>Item1
        <ul>
          <!--这个列表就是一个普通列表-->
          <li>Item1-1</li>
          <li>Item1-2</li>
        </ul>
      </li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>


![这里写图片描述](http://img.blog.csdn.net/20171123105922326?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 1.4 内联列表

class为 <mark>list-inline</mark>，CSS样式如下：


    ul,
    ol {
      margin-top: 0;
      margin-bottom: 10px;
    }
    ul ul,
    ol ul,
    ul ol,
    ol ol {
      margin-bottom: 0;
    }
    .list-unstyled {
      padding-left: 0;
      list-style: none;
    }
    .list-inline {
      padding-left: 0;
      margin-left: -5px;
      list-style: none;
    }
    .list-inline > li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
    }

#### 1.5 定义列表

定义列表的使用没有变化，只是对行间距和字体粗细做了调整。

#### 1.6 水平定义列表

class为 <mark>dl-horizontal</mark>，在dl元素上使用该class。

效果如下图：

![这里写图片描述](http://img.blog.csdn.net/20171123144754183?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### 2、 代码

#### 2.1 内联代码

单行的内联代码使用&lt;code&gt;标签

#### 2.2 用户输入代码

#### 2.3 多行代码块
代码需要被显示为一个独立的块元素或者代码有多行，使用  &lt;pre&gt; 标签。
在标签添加 <mark>pre-scrollable</mark> 类，则可以滚动

注意：使用  &lt;pre&gt;和 &lt;code&gt; 标签时，开始和结束标签都要使用unicode变体： &amp;lt; 和 &amp;gt; 。

### 3、 表格

#### 3.1 基础样式

在table标签上添加class为 <mark>table</mark>，就是一个只带有内边距（padding）和水平分割线的基本表。

    .table {
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
    }
    .table > thead > tr > th,
    .table > tbody > tr > th,
    .table > tfoot > tr > th,
    .table > thead > tr > td,
    .table > tbody > tr > td,
    .table > tfoot > tr > td {
      padding: 8px;
      line-height: 1.42857143;
      vertical-align: top;
      border-top: 1px solid #ddd;
    }
    .table > thead > tr > th {
      vertical-align: bottom;
      border-bottom: 2px solid #ddd;
    }


#### 3.2 带背景条纹的表格

除了添加table，还可以通过添加 <mark>.table-striped</mark>，得到一个 &lt;tbody&gt; 内的行有条纹的表格。

这个类给奇数行修改了背景色

    .table-striped > tbody > tr:nth-of-type(odd) {
      background-color: #f9f9f9;
    }

例如：

    <table class="table table-striped">
      <caption>带背景条纹的表格</caption>
      <thead>
        <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>电话</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>张三</td>
          <td>男</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td>李四</td>
          <td>男</td>
          <td>9874561230</td>
        </tr>
        <tr>
          <td>王五</td>
          <td>男</td>
          <td>4563219870</td>
        </tr>
      </tbody>
    </table>

![这里写图片描述](http://img.blog.csdn.net/20171124112218532?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 3.3 带边框的表格

除了添加table，还可以添加 <mark> .table-bordered</mark>，表格的所有单元格都有了一个1像素的边框。

#### 3.4 鼠标悬停高亮的表格

除了添加table，还可以添加 <mark>.table-hover</mark>，表格的所有单元格都有了一个1像素的边框。

    .table-hover > tbody > tr:hover {
      background-color: #f5f5f5;
    }

如下图：张三一行是鼠标悬停高亮效果的

![这里写图片描述](http://img.blog.csdn.net/20171124112628591?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
#### 3.5 紧凑型表格

添加<mark> .table-condensed </mark>，行内边距（padding）减少，以便让表看起来更紧凑。

#### 3.6 行级元素样式
以下这些类可以用于改变表格某一行或者某个单元格的背景色，这些类可被应用到 &lt;tr&gt;、&lt;td&gt; 或 &lt;th&gt;。


    <table class="table">
      <caption>单行单个单元格变化背景色的表格</caption>
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>电话</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="success">张三</td>
          <td class="active">男</td>
          <td>1234567890</td>
        </tr>
        <tr class="warning">
          <td>李四</td>
          <td>男</td>
          <td>9874561230</td>
        </tr>
        <tr class="danger">
          <td>王五</td>
          <td>男</td>
          <td>4563219870</td>
        </tr>
      </tbody>
    </table>

![这里写图片描述](http://img.blog.csdn.net/20171124112820280?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
#### 3.7 响应式表格

通过把任意的 <mark>.table</mark> 包在 <mark>.table-responsive</mark>内，就可以让表格水平滚动以适应小型设备（小于 768px）。当在大于 768px 宽的大型设备上查看时，是没有变化的。

### 4、 表单

#### 4.1 垂直或基本表单

基本的表单结构是 Bootstrap 自带的。

把标签和控件放在一个带有 class为 <mark>form-group</mark> 的 &lt;div&gt; 中。这个form-group类有一个15px的底部外边距。

向所有的文本元素 &lt;input&gt;、&lt;textarea&gt; 和 &lt;select&gt; 添加 class ="form-control" 。

#### 4.2 内联表单

给&lt;form&gt;添加一个<mark>form-inline</mark>的class，可以创建一个所有控件内联、在一行的表单。

    <form class="form-inline">
      <div class="form-group">
        <!--为内联表单的label设置.sr-only样式将其隐藏-->
        <label class="sr-only" for="name">名称</label>
        <input type="text" name="usrname" id="name" class="form-control" placeholder="请输入名称">
      </div>
      <div class="form-group">
        <label class="sr-only" for="inputfile">文件</label>
        <input type="file" id="inputfile">
      </div>
      <div class="checkbox">
        <label><input type="checkbox">请打勾</label>  
      </div>
      <button type="submit" class="btn btn-default">提交</button>
    </form>

![这里写图片描述](http://img.blog.csdn.net/20171124112910738?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
#### 4.3 水平表单

给&lt;form&gt;添加一个<mark>form-horizontal</mark>的class，

此外，再结合上一篇中讲到的栅格类，将label和控件实现水平布局。


    <div class="container">
    <h4>水平表单</h4>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="name" class="col-lg-2 col-sm-2 col-xs-2">用户名</label>
        <input class="col-lg-10 col-sm-10 col-xs-10" type="text" name="usrname" id="name" placeholder="输入用户名">
      </div>
      <div class="form-group">
        <label class="col-lg-2 col-sm-2 col-xs-2" for="password">密码</label>
        <input class="col-lg-10 col-sm-10 col-xs-10" type="text" name="pw" id="password" placeholder="输入密码">
      </div>
      <div class="checkbox">
        <label><input type="checkbox">记住密码</label>
      </div>
      <button type="submit" class="btn btn-default">登录</button>
    </form>
    </div>


如下图：

这张图是在1080px的屏幕中：

![这里写图片描述](http://img.blog.csdn.net/20171124113126814?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

这张是在iphone 6 plus下的效果：

![这里写图片描述](http://img.blog.csdn.net/20171124113547657?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 4.4 表单控件

Bootstrap支持input、select、checkbox、radio、textarea等。

input、select、textarea元素与HTML中使用没有太大差别

radio和checkbox在使用的时候，要用label标签包住，并且最外层要用class为相应的名称的div包住，例如：

    <div class="checkbox">
      <label><input type="checkbox">请打勾</label>  
    </div>
    <div class="radio">
      <label><input type="radio">请打勾</label>  
    </div>

#### 4.5 控件状态
除了 <mark>:focus</mark> 状态（即，用户点击 input 或使用 tab 键聚焦到 input 上），Bootstrap 还为禁用的输入框定义了样式，并提供了表单验证的 class。

##### 1）输入框焦点

当输入框 input 接收到 <mark>:focus</mark> 时，输入框的轮廓会被移除，同时应用 box-shadow。

##### 2）禁用的输入框 input

如果您想要禁用一个输入框 input，只需要简单地添加 disabled 属性，这不仅会禁用输入框，还会改变输入框的样式以及当鼠标的指针悬停在元素上时鼠标指针的样式。

禁用的字段集 fieldset

对 &lt;fieldset&gt; 添加 disabled 属性来禁用 &lt;fieldset&gt; 内的所有控件。

##### 3）验证状态

Bootstrap 包含了错误、警告和成功消息的验证样式。只需要对父元素简单地添加适当的 class（.has-warning、 .has-error 或 .has-success）即可使用验证状态。

#### 4.6 控件大小

通过给input输入框设置不同的padding、font-size、border-radius实现了大小不同的输入框，分别为<mark>.input-lg</mark> 和 <mark>.input-sm</mark>。

#### 4.7 表单帮助文本

表单控件可以在输入框 input 上有一个块级帮助文本，添加 <mark>.help-block</mark> 即可。

### 5、按钮

#### 5.1 按钮样式

任何带有 class为 <mark>.btn</mark> 的元素都会继承圆角灰色按钮的默认外观。此外，还有一些选项来定义按钮的样式，具体如下表所示：

![这里写图片描述](http://img.blog.csdn.net/20171121201711578?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

<mark>.btn</mark>定义了一些基础的样式（字体大小粗细、margin、padding值、边框、圆角等）以及相关的hover、focus、active等行为特效。

然后，<mark>.btn-*</mark> （.btn-default等）定义一些特殊的样式（背景色、边框颜色以及各种变化状态下的颜色等）。


    <button>普通按钮</button>
    <!--基本button-->
    <button type="button" class="btn">基本按钮</button>
    <!--标准按钮-->
    <button type="button" class="btn btn-default">标准按钮</button>
    <!-- 提供额外的视觉效果，标识一组按钮中的原始动作 -->
    <button type="button" class="btn btn-primary">原始按钮</button>
    <!-- 表示一个成功的或积极的动作 -->
    <button type="button" class="btn btn-success">成功按钮</button>
    <!-- 信息警告消息的上下文按钮 -->
    <button type="button" class="btn btn-info">信息按钮</button>
    <!-- 表示应谨慎采取的动作 -->
    <button type="button" class="btn btn-warning">警告按钮</button>
    <!-- 表示一个危险的或潜在的负面动作 -->
    <button type="button" class="btn btn-danger">危险按钮</button>
    <!-- 并不强调是一个按钮，看起来像一个链接，但同时保持按钮的行为 -->
    <button type="button" class="btn btn-link">链接按钮</button>

![这里写图片描述](http://img.blog.csdn.net/20171124112420611?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
#### 5.2 按钮大小

<mark>.btn-lg</mark> 是比较大的按钮， <mark>.btn-sm</mark> 是比较大小的按钮， <mark>.btn-xs</mark> 是超小的按钮。这几个都是根据文本的长短来决定宽度。还有一个是<mark>.btn-block</mark> ，它是一个块级的，充满父容器，并不根据文本自动伸缩。

    <!--大的-->
    <button type="button" class="btn btn-primary btn-lg">大的原始按钮</button>
    <button type="button" class="btn btn-default btn-lg">大的按钮</button>
    <!--默认大小-->
    <button type="button" class="btn btn-primary">默认大小的原始按钮</button>
    <button type="button" class="btn btn-default">默认大小的按钮</button>
    <!--较小的-->
    <button type="button" class="btn btn-primary btn-sm">小的原始按钮</button>
    <button type="button" class="btn btn-default btn-sm">小的按钮</button>
    <!--超小的-->
    <button type="button" class="btn btn-primary btn-xs">特别小的原始按钮</button>
    <button type="button" class="btn btn-default btn-xs">特别小的按钮</button>
    <!--块级的-->
    <button type="button" class="btn btn-primary btn-lg btn-block">块级的原始按钮</button>
    <button type="button" class="btn btn-default btn-lg btn-block">块级的按钮</button>


![这里写图片描述](http://img.blog.csdn.net/20171124112356830?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
#### 5.3 按钮状态

提供了活动状态和禁用状态。活动状态背景颜色、边框颜色、阴影都更深，禁用状态则是更浅。

活动状态的实现是通过在默认的 <mark>.btn</mark> 增加 <mark>:acitve</mark> 和 <mark>.active</mark>样式改变阴影，在 <mark>.btn-*</mark> 的样式上定义不同的文字颜色、背景颜色、边框颜色。

这里我为了方便展示效果，添加了<mark>.active</mark>样式，可以在页面加载时就有活动状态的效果。


    <button type="button" class="btn btn-primary">初始状态的原始按钮</button>
    <!--活动状态的按钮-->
    <button type="button" class="btn btn-primary active">活动状态的原始按钮</button>
    <!--活动状态的链接-->
    <a href="" class="btn btn-primary active">活动状态的原始链接</a>
    <!--禁用状态的按钮-->
    <button type="button" class="btn btn-primary disabled">禁用状态的原始按钮</button>
    <!--禁用状态的链接-->
    <a href="" class="btn btn-primary disabled">禁用状态的原始链接</a>

![这里写图片描述](http://img.blog.csdn.net/20171124112334050?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
###6、图片

Bootstrap 提供了三个可对图片应用简单样式的 class：

 - .<mark>img-rounded：</mark>添加 border-radius:6px 来获得图片圆角。 

 -  <mark>.img-circle：</mark>添加 border-radius:50% 来让整个图片变成圆形。 
 
 - <mark>.img-thumbnail：</mark>添加一些内边距（padding）和一个灰色的边框。

此外， 添加 <mark>.img-responsive</mark> 类来让图片支持响应式设计。<mark>.img-responsive</mark> 类将 max-width: 100%; 和 height: auto; 样式应用在图片上，图片将很好地扩展到父元素。