---
title: jQuery的Ajax方法
date: 2018-2-1 11：11：11
tags: 
 - js
---
摘要：
jQuery对Ajax操作进行了封装，$.ajax()方法属于最底层的方法，第2层是load()、$.get()、$.post()方法，第3层是$.getScript()和$.getJSON()方法。
<!--more-->


**$.get()**方法和**$.post()**方法是jQuery中的全局函数。

-------------------

## 1、load()方法

#### 1.1 描述
可以载入远程HTML代码并插入DOM中。

    load(url, [data], [callback])

url为请求HTML页面的URL地址，data为发送至服务器的key/value数据，callback为请求完成时的回调函数，无论请求成功或失败。

还可以筛选载入的HTML文档：为URL参数指定选择符。

load()方法的URL参数的语法结构为**<font size="4">"url selector"</font>**。如果URL参数的字符串中包含一个或多个空格，那么第一个空格后面的内容，会被当成是jQuery 的选择器，从而决定应该加载返回结果中的哪部分内容。

#### 1.2 传递方式
load()方法的传递方式根据参数data来自动指定。默认采用GET方式传递；如果有参数传递，则会自动转换为POST方式。

    //无参数传递，为GET方式
    $("#resText").load("test.php",function(){
        // body...
    });
    //有参数传递，为POST方式
    $("#resText").load("test.php",{name:"rain", age:"22"},function () {
        // body...
    });

#### 1.3 回调函数
对于必须在加载完成后才能继续的操作

    callback(responseText, textStatus, XMLHttpRequest)

responseText为请求返回的内容，textStatus为请求状态（success、error、notmodified、timeout4种），XMLHttpRequest为一个XMLHttpRequest对象。

<font color="red">注意：</font>在load()方法中，无论Ajax请求是否成功，只要当请求完成（complete）后，回调函数就被触发。

## 2、$.get()方法和$.post()方法
load()方法通常用来从Web服务器上货去静态的数据文件。如果需要传递一些参数给服务器中的页面，就可以使用$.get()和$.post()方法（或者$.ajax()）。

### 2.1 $.get()方法
$.get()方法使用GETR方式来进行异步请求。

    $.get(url, [data], [callback(data, textStatus, jqXHR)], [dataType])
    \\url:  请求HTML页面的URL地址
    \\data: 发送至服务器的key/value数据
    \\callback(): 载入成功时的回调函数
    \\dataType:服务器端返回内容的格式，包括xml、html、script、json、text和_default
回调函数callback(data,textStatus,jqXHR)中，data为返回的内容，可以是XML文档、JSON文件、HTML片段等等，textStatus为请求状态（success、error、notmodified、timeout）。

#### 2.2 $.post()方法

用ajax传递一个表单并把结果在一个div中

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <script type="text/javascript" src="jquery.js"></script>
    </head>
    <body>
        <form action="#" id="usrForm">
            <input type="text" name="usrname" placeholder="请输入用户名">
            <input type="submit" value="OK">
        </form>
        <div id="result">
            
        </div>
        <script type="text/javascript">
            $(funciton(){
                $("#usrForm").submit(function(event){
                    //防止重复点提交按钮
                    event.preventDefault();
                    var url = $("#usrForm").attr("action");
                    $.post(url,{
                        usrname: $(this).find("input[name=usrname]").val();
                    },function(data,textStatus){
                        var content = $( data ).find("#content");
                        $("#result").empty().append(content);
                    }
                });
            });
        </script>
    </body>
    </html>


## 3、$.getScript()方法和$.getJson()方法

#### 3.1 $.getScript()方法
使用一个HTTP GET请求从服务器加载并执行一段JavaScript代码。

    $.getScript( url [, success(script, textStatus, jqXHR) ] )

success()为回调函数，在JavaScript文件成功载入后运行。

#### 3.2 $.getJson()方法
使用一个HTTP GET请求从服务器加载JSON编码的数据。

    jQuery.getJSON( url [, data ] [, success(data, textStatus, jqXHR) ] )


如果URL包含字符串“callback=?”（或类似的参数，取决于服务器端 API 是如何定义的），这个请求被视为JSONP形式请求。

## 4、$.ajax()方法