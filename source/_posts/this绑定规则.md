---
title: JavaScript中的this
date: 2018-2-1 11：11：11
tags: 
 - js
---
摘要：
<!--more-->



### 1、默认绑定

最常用的函数调用类型：独立函数调用。可以把这条规则看成是无法应用其他规则时的默认规则。

对于直接使用不带任何修饰的函数。

但是如果使用严格模式，则无法绑定到全局对象。

    function foo(){
        console.log(this.a);
    }
    var a = 2;
    foo();


### 2、隐式绑定

看调用位置是否有上下文，或者说是否被某个对象拥有或者包含。


    functin foo(){

    }
    var obj={
        a:2,
        foo:foo
    };
    obj.foo();

调用位置会使用obj上下文来引用函数，可以理解为函数被调用时候obj拥有或者包含。

foo被调用时，落脚点是指向obj对象。

当函数引用有上下文对象时，隐式绑定规则会把函数调用的this绑定到这个上下文对象。
这里this被绑定到obj，所以thi.a就是obj.a。

对象属性引用链中只有最顶层或者是最后一层会影响调用位置。

        function foo(){
            var a = 1;
            console.log(this.a);//42
            console.log(a);//1
        }
    
        var obj2 = {
            a:42,
            foo:foo
        };
    
        var obj1 = {
            a:2,
            obj2: obj2
        };
    
        obj1.obj2.foo();

隐式丢失

被隐式绑定的函数会丢失绑定对象，也就是会应用默认绑定。

    function foo(){
        (this.a);
    }
    var obj={
        a:2;
        foo:foo
    };
    var bar = obj.foo;
    var a = "global";
    bar();//global  这里bar是obj.foo的一个引用，引用的是foo函数本身。


还有一种，发生在传入回调函数时。

    function foo(){

    }
    function doFoo(fn){
        fn();
    }
    var obj = {
        a:1,
        foo:foo
    };
    var a = "global";
    doFoo(obj.foo);  //global


参数传递是隐式赋值。

### 3、显式绑定
apply和call方法

硬绑定

创建一个包裹函数，传入所有的参数并返回接收到的所有值。

### 4、new绑定


判断this

根据优先级来判断函数在某个调用位置应用的是哪条规则。

1）函数是否在new中调用   new绑定
   
   是的话则this绑定的是新创建的对象

2）函数是否apply call或者硬绑定
   
   是的话则this绑定的是指定的对象

3）函数是否隐式绑定
   
   是的话则this绑定的是那个上下文对象

4）默认绑定  但是严格模式绑定到undefined


