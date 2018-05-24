---
title: 《深入理解Bootstrap》读书笔记（一）
date: 2017-10-14 19:07:53
tags: 
 - Bootstrap
---
摘要：
Bootstrap包含了一个响应式的、移动设备优先的、不固定的网格系统，可以随着设备或视口大小的增加而适当地扩展到12列。
<!--more-->



## 栅格系统

### 实现原理

通过定义容器大小，平分12份，再调整内外边距，最后结合媒体查询。

通过一系列包含内容的行和列来创建页面布局。下面列出了 Bootstrap 栅格系统是如何工作的：
    1、行必须放置在 .container class 内，以便获得适当的对齐（alignment）和内边距（padding）。
    2、使用行来创建列的水平组。
    3、内容应该放置在列内，且唯有列可以是行的直接子元素。
    4、预定义的网格类，比如 .row 和 .col-xs-4，可用于快速创建网格布局。LESS 混合类可用于更多语义布局。
    5、列通过内边距（padding）来创建列内容之间的间隙。该内边距是通过 .rows 上的外边距（margin）取负，表示第一列和最后一列的行偏移。
    6、网格系统是通过指定想要横跨的十二个可用的列来创建的。例如，要创建三个相等的列，则使用三个 .col-xs-4。
媒体查询是非常别致的"有条件的 CSS 规则"。它只适用于一些基于某些规定条件的 CSS。如果满足那些条件，则应用相应的样式。

Bootstrap 中的媒体查询允许您基于视口大小移动、显示并隐藏内容。下面的媒体查询在 LESS 文件中使用，用来创建 Bootstrap 网格系统中的关键的分界点阈值。

    /* 超小设备（手机，小于 768px） */
    /* Bootstrap 中默认情况下没有媒体查询 */
    /* 小型设备（平板电脑，768px 起） */
    @media (min-width: @screen-sm-min) { ... }
    /* 中型设备（台式电脑，992px 起） */
    @media (min-width: @screen-md-min) { ... }
    /* 大型设备（大台式电脑，1200px 起） */
    @media (min-width: @screen-lg-min) { ... }


我们有时候也会在媒体查询代码中包含 max-width，从而将 CSS 的影响限制在更小范围的屏幕大小之内。

    @media (max-width: @screen-xs-max) { ... }
    @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }
    @media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }
    @media (min-width: @screen-lg-min) { ... }


媒体查询有两个部分，先是一个设备规范，然后是一个大小规则。在上面的案例中，设置了下列的规则：
让我们来看下面这行代码：

    @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }


对于所有带有 min-width: @screen-sm-min 的设备，如果屏幕的宽度小于 @screen-sm-max，则会进行一些处理。

### 基本用法
#### 列组合

可以通过更改数字来合并列。

      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-md-4"></div>
      </div>
它的实现是通过左浮动和宽度百分比，源码如下：

    .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
      float: left;
    }
    .col-md-12 {
      width: 100%;
    }
    .col-md-11 {
      width: 91.66666667%;
    }
    .col-md-10 {
      width: 83.33333333%;
    }
    .col-md-9 {
      width: 75%;
    }
    .col-md-8 {
      width: 66.66666667%;
    }
    .col-md-7 {
      width: 58.33333333%;
    }
    .col-md-6 {
      width: 50%;
    }
    .col-md-5 {
      width: 41.66666667%;
    }
    .col-md-4 {
      width: 33.33333333%;
    }
    .col-md-3 {
      width: 25%;
    }
    .col-md-2 {
      width: 16.66666667%;
    }
    .col-md-1 {
      width: 8.33333333%;
    }

#### 列偏移

使用.col-md-offset-\*就可以实现将列偏移到右侧，这些类会把一个列的左外边距（margin-left）增加 \* 列，其中 \* 范围是从 1 到 11。
但是，.col-xs-\* 类不支持偏移，但是它们可以简单地通过使用一个空的单元格来实现该效果。


#### 列嵌套

为了在内容中嵌套默认的网格，请添加一个新的 .row，并在一个已有的 .col-md-* 列内添加一组 .col-md-* 列。被嵌套的行应包含一组列，这组列个数不能超过12（其实，没有要求你必须占满12列）。

在下面的实例中，布局有两个列，第一列又嵌套了一个新行，并且偏移到了中间位置。
    <div class="container">
      <div class="row">
        <div class="col-md-8" style="background-color: lavender">第一层第一列：col-md-8
            <div class="row" >
                <div class="col-md-6 col-md-offset-3" style="background-color: lavenderblush">第二层col-md-6并且偏移至中间</div>
            </div>
        </div>
        <div class="col-md-4" style="background-color: yellow">第一层第二列：col-md-4</div>
      </div>
    </div>


#### 列排序

列排序就是改变列的方向，改变左右浮动然后设置浮动的距离。使得我们可以很容易地以一种顺序编写列，然后以另一种顺序显示列。

可以通过.col-md-push-\* 和 .col-md-pull-\* 来实现，其中 \* 范围是从 1 到 11。

列排序运行效果如图：

![这里写图片描述](http://img.blog.csdn.net/20171110150730306?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

可以理解为：人是在网页的最左边，然后要把col-md-3拉（pull）过来，把col-md-9推（push）过去。

### 响应式栅格
下表总结了栅格系统如何跨多个设备工作：

![这里写图片描述](http://img.blog.csdn.net/20171110150815355?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
#### 跨设备组合定义

我们会遇到一种样式在其他尺寸的设备中是不起作用的。所以要在一个元素上应用不同类型的样式，也就是给一个元素添加多个类名，以适配不同尺寸的屏幕。

    <div class="row">
        <div class="col-sm-12 col-md-8" style="background-color: lavenderblush">col-sm-12 col-md-8</div>
        <div class="col-sm-6 col-md-4" style="background-color: lavenderblush">col-sm-6 col-md-4</div>
    </div>
    <br>
    <div class="row">
        <div class="col-sm-6 col-md-4" style="background-color: lavenderblush">col-sm-6 col-md-4</div>
        <div class="col-sm-6 col-md-4" style="background-color: lavenderblush">col-sm-6 col-md-4</div>
        <div class="col-sm-6 col-md-4" style="background-color: lavenderblush">col-sm-6 col-md-4</div>
    </div>
    <br>
    <div class="row">
        <div class="col-sm-6" style="background-color: lavenderblush">col-sm-6</div>
        <div class="col-sm-6" style="background-color: lavenderblush">col-sm-6</div>
    </div>

#### 清除浮动


    <div class="row">
        <div class="col-sm-3 col-xs-6" style="background-color: red">div1:col-sm-3 col-xs-6 div1:col-sm-3 col-xs-6 div1:col-sm-3 col-xs-6</div>
        <div class="col-sm-3 col-xs-6" style="background-color: red">div2:col-sm-3 col-xs-6</div>
        <div class="col-sm-3 col-xs-6" style="background-color: green">div3:col-sm-3 col-xs-6</div>
        <div class="col-sm-3 col-xs-6" style="background-color: green">div4:col-sm-3 col-xs-6</div>
    </div>

上述代码在超小型设备中并没有显示出我们想要的每行两个div的效果。这是因为所有的col-样式都是左浮动的，第三个div开始换行的时候，由于第一个div高度过高，所以第三个就在右边紧挨着显示了。
为了解决这个问题，就要用到clearfix样式。
源码中clearfix如下：

    .clearfix:before,
    .clearfix:after{
        isplay: table;
        content: " ";
    }
    .clearfix:after{
        clear:both;
    }

此外，Bootstrap 提供了一些辅助类，以便更快地实现对移动设备友好的开发。这些可以通过媒体查询结合大型、小型和中型设备，实现内容对设备的显示和隐藏。

![这里写图片描述](http://img.blog.csdn.net/20171110151036617?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

利用clearfix清除浮动后，再添加一个visible-xs样式，使得只有在超小型屏幕中才有这种效果。

    <div class="row">
        <div class="col-sm-3 col-xs-6" style="background-color: red">div1:col-sm-3 col-xs-6 div1:col-sm-3 col-xs-6 div1:col-sm-3 col-xs-6</div>
        <div class="col-sm-3 col-xs-6" style="background-color: red">div2:col-sm-3 col-xs-6</div>
        <div class="clearfix visible-xs">清除浮动，设置额外的小设备可见</div>
        <div class="col-sm-3 col-xs-6" style="background-color: green">div3:col-sm-3 col-xs-6</div>
        <div class="col-sm-3 col-xs-6" style="background-color: green">div4:col-sm-3 col-xs-6</div>
    </div>

