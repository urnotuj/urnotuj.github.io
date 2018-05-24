---
title: ECMAScript6笔记（一）
date: 2018-2-1 11:11:11
tags: 
 - js
---

<!--more-->

## 1、let

#### 1.1 描述
ES6新增的let命令类似于var，用于声明变量。但是let声明的变量只在let命令所在的代码块有效。例如：


    function test(){
        let a = 10;
        var b = 6;
    }
    alert(a);//ReferenceError: a is not defined
    alert(b);//6


再来看下边这段代码，输出结果为10

    var a = [];
    for (var i = 0; i < 10; i++) {
      a[i] = function () {
        console.log(i);
      };
    }
    a[6]();

如果把var改成let，则结果为6。
这是因为var声明的变量i，在全局范围内都有效。所以console.log(i)的i指向的是全局的i。所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是10。

而let声明的变量仅在块级作用域内有效，也就是只在本轮循环中有效。

#### 1.2 不存在变量提升
let与var不同，不存在变量提升现象。也就是说，变量必须在声明后使用。


    //无参数传递，为GET方式
    $("#resText").load("test.php",function(){
        // body...
    });
    //有参数传递，为POST方式
    $("#resText").load("test.php",{name:"rain", age:"22"},function () {
        // body...
    });


