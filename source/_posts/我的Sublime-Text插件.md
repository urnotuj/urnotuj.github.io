---
title: 我的Sublime Text插件
date: 2017-10-14 19:41:59
tags:
- 工具
---
摘要：
使用hexo、github pages搭建博客，在GoDaddy购买域名。
<!--more-->


## 安装Package Control
自动安装很方便，网上代码很多。我用的是Sublime Text3，通过View–Show Console调出控制台，然后将下边的代码复制粘贴：

    import urllib.request,os; pf = 'Package Control.sublime-package'; ipp =   sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

顺便贴一下sublime text2的代码：

     import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation') 

如果前边自动安装总是不行，那就手动安装。

**前边有一篇文章讲了安装packagecontrol，这里就不做赘述了，需要的朋友移步到这篇文章：[ Sublime Text安装package control ](http://blog.csdn.net/Ivy_ZW/article/details/70225979)**

**安装插件方法：**通过preferencs--Package Control或者快捷键ctrl+shift+P，然后找到install Package，搜索插件，安装即可。

**卸载插件方法：**通过preferencs--Package Control或者快捷键ctrl+shift+P，然后找到remove Package，找到要卸载的插件。

**下边直接说我安装了哪些插件**

--------------------
## Alignment
代码对齐
**对应的快捷键：** Ctrl+Alt+A

## BracketHighlighter
提供行数高亮的各种配对的语法符号。也就是可以匹配[ ]、{ }等，高亮标记，便于查看起始和结束标记。

## Color Highlighter
可以展示当前所选择的颜色代码的真正颜色

## ColorPicker
使用一个取色器改变颜色

**对应的快捷键：** Ctrl+Shift+C

##ConvertToUTF8
曾经遇到过打开一个文件，里边的中文乱码的情况。

修改文件编码什么的都不行，然后网上有人说安装这个插件和GBK Support。不过发现安装完这个插件就已经解决了。不知道为什么我安装完GBK Support后打开html文件会出现一个相应的html.dump文件。

<font color=red size=4>**注意 :**</font> 这里，要说一下，ConvertToUTF8和ColorPicker的默认快捷键是一样的，都是 Ctrl+Shift+C。所以要去修改一下快捷键的设置，修改哪一个的都可以。

我修改的是ConvertToUTF8的快捷键，进到相应的插件安装的目录（菜单栏Preferences —— Browse Packages），找到 ConvertToUTF8文件夹，进入，可以看到有linux、mac和windows的快捷键设置文件，根据自己的操作系统，打开相应文件修改。这里我修改的是windows，如图：

![这里写图片描述](http://img.blog.csdn.net/20180103174507519?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


我改成了 ctrl+shift+u

![这里写图片描述](http://img.blog.csdn.net/20180103174753364?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## DocBlockr
可以添加注释块
输入/**，按回车键就可以了

## Emmet

这个真的超级好用！

使用仿CSS选择器的语法来生成代码，大大提高了HTML/CSS代码编写的速度。

这里不详细讲用法了，可以网上搜一下。

**对应的快捷键：** Ctrl+Alt+Enter

## HTML Beautify
功能如其名，HTML格式化

## HTML-CSS-JS Prettify

格式化HTML-CSS-JS代码

安装完后要修改一下配置文件：
preference--Package Settings--HTML/CSS/JS Prettify--Plugin Options-Default

![这里写图片描述](http://img.blog.csdn.net/20171121172405984?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

修改nodejs的安装路径（Windows用户在命令行输入where node即可查看）

![这里写图片描述](http://img.blog.csdn.net/20171121172835198?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
## Sidebar Enhancements
增强右键菜单文件操作功能。
在侧边栏的文件上右击时，这个插件提供了大量更多的选择。打开，查找，复制和粘贴，等等。


## View in Browser
通过默认浏览器打开当前文件

## JavaScript Completions
支持JavaScript原生语法提示

## SublimeCodeIntel

设置JavaScript代码自动补全



## sublimeLinter和sublimeLinter-jshint

&nbsp;&nbsp;&nbsp;&nbsp;写JavaScript时候能够提示代码问题。这个装好之后可以去修改一下.jshintrc文件，安装完成后有一些默认设置的。

![这里写图片描述](http://img.blog.csdn.net/20171121165348150?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

这里粘一下我目前的设置，以后有新的再补充。关于这个，可以网上搜一下，很多资料。

    "browser": true,
    "esnext": true,
    "globals": {
       "$": false
    },
    /**
    * 是否必须用"use strict"
    */
    "strict": false,
    "undef": true,
    "unused": true,
    /**
    * 是否强制使用严格等号
    */
    "eqeqeq": false,
    /**
    * 使用js保留字时提出警告
    */
     "futurehostile":true


## markdownEditing和markdownLivePreview

&nbsp;&nbsp;&nbsp;&nbsp;安装这两个的时候搞了很久，主要是因为安装markdownEditing这个插件的时候遇到了一个问题，最后在官网上找到了答案。如下图：

![这里写图片描述](http://img.blog.csdn.net/20171121165508329?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSXZ5X1pX/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

我安装完之后弹出了一个对话框是error loading syntax files，卸载重新安装也不对。其实是因为我安装这个插件的时候打开了之前写的md文件。关掉这些文件重新安装就好了。

&nbsp;&nbsp;&nbsp;&nbsp;第二点就是，markdown的主题设置。sublime text刚装好的时候就换了主题，然后markdown这里默认的是白色背景，有时候从js文件切换到md文件觉得画风转换太快不适应，所以就修改了一下。
方法是：在preference-package settings--Markdown Editing--Markdown GFM Settings - user文件中添加以下设置：


    {
    "color_scheme": "Packages/MarkdownEditing/MarkdownEditor-Dark.tmTheme"
    }


&nbsp;&nbsp;&nbsp;&nbsp;第三点，安装完后发现始终有那么一部分区域啥都没有，就只是占着地方。原来是因为default中有设置Layout，所以这里也是要修改设置，还是在上一步中的文件，添加以下：


    "draw_centered": false,//default中为true
    "word_wrap": true,
    "wrap_width": 80,
    "rulers": []


## 浏览器快捷键
除了这些插件外，我还配置了文件在IE、FireFox、Chrome中打开的快捷键，方法如下：

修改快捷键设置，但是注意不要跟默认设置中的冲突

    //ie
    { "keys": ["ctrl+f12"], "command": "side_bar_files_open_with", "args": { "paths": [], "application": "C:/Program Files/Internet Explorer/iexplore.exe", "extensions": ".*" } },
    //chorme
    { "keys": ["alt+f12"], "command": "side_bar_files_open_with", "args": { "paths": [], "application": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", "extensions": ".*" } },
    //firefox
    { "keys": ["f12"], "command": "side_bar_files_open_with", "args": { "paths": [], "application": "D:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe", "extensions": ".*" } }

keys为相应的快捷键，path对应浏览器的安装路径
