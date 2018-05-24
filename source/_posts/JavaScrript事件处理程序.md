---
title: JavaScript事件处理程序
date: 2017-10-14 19:07:53
tags: 
 - js
---
摘要：
为事件指定处理程序的方式有HTML事件处理程序、DOM0级、DOM2级、IE事件处理程序。
<!--more-->

# 事件处理程序

事件是用户或浏览器自身执行的某种动作，如click、load，这些是事件的名字。响应某个事件的函数叫做**事件处理程序**，事件处理程序的名字以“on”开头。

为事件指定处理程序的方式有以下几种：

-------------------

## HTML事件处理程序

使用一个与相应事件处理程序同名的HTML特性来指定，也就是说事件直接加在HTML元素上。
1、可以在HTML中定义的事件处理程序包含要执行的具体动作，例如

    <input type="button" value="点击" onclick="alert('clicked')" />


2、可以调用在页面其他地方定义的脚本，例如：

    <script type="text/javascript">
    function showMessage() {
        alert("clicked");
    }
    </script>
    <input type="button" value="点击" onclick="showMessage()" />

这样指定事件处理程序，会创建一个封装着元素属性值的函数。这个函数中有一个局部变量event。通过event变量可以直接访问事件本身，比如onclick="alert(event.type)"会弹出click事件。

**<font size=4>缺点</font>**：HTML与JavaScript紧密耦合，修改的时候要修改HTML和JavaScript两部分


## DOM0级事件处理程序

将一个函数赋值给一个事件处理程序属性。

每个元素都有自己的事件处理程序属性，例如onclick。将这个属性设置为一个函数，就可以指定事件处理程序，例如：


    <input type="button" value="点击" id="myBtn">
    <script type="text/javascript">
	   var btn = document.getElementById("myBtn");
	   btn.onclick = function () {
		  alert("clicked");
	   }
    </script>

使用此种方法定义的事件处理程序被认为是元素的方法，程序中的this引用当前元素。例如下边结果会弹出“myBtn”。


    <input type="button" value="点击" id="myBtn">
    <script type="text/javascript">
	   var btn = document.getElementById("myBtn");
	   btn.onclick = function () {
		  alert(this.id);
	   }
    </script>

<font color=red>注意</font>：DOM0级事件处理程序对每个时间只支持一个事件处理程序。

## DOM2级事件处理程序

定义了两个方法用于处理指定和删除事件处理程序的操作：addEventListener()和removeEventListener()。

所有的DOM节点中都包含这两个方法。
两个方法都接受3个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。布尔值为true表示在捕获阶段调用事件处理程序，false表示在冒泡阶段调用。例如：


    <input type="button" id="myBtn" value="Click Me" />
    <p>This example won't work in Internet Explorer8.</p>
    <script type="text/javascript">
        var btn = document.getElementById("myBtn");
        btn.addEventListener("click", function(){
            alert(this.id);    //"myBtn"
        }, false);
        btn.addEventListener("click", function(){
            alert("Hello world!");
        }, false);
    </script>

这里为按钮添加了两个事件处理程序，按照它们的顺序触发。

通过addEventListener添加的事件处理程序必须通过removeEventListener删除，删除时传入的参数必须与添加时一致。通过addEventListener添加的匿名函数将无法删除。例如，下边这段代码中removeEventListener不起作用


    <input type="button" id="myBtn" value="Click Me" />
    <input type="button" id="myRemoveBtn" value="Remove Event Handler" />
    <script type="text/javascript">
        var btn = document.getElementById("myBtn");
        btn.addEventListener("click",function(){
            alert(this.id);
        },false);
        
        var removeBtn = document.getElementById("myRemoveBtn");
        removeBtn.removeEventListener("click",function(){
            alert(this.id); 
        },false);
     </script>


这样写起作用：


    <input type="button" id="myBtn" value="Click Me" />
    <input type="button" id="myRemoveBtn" value="Remove Event Handler" />
    <script type="text/javascript">
        var btn = document.getElementById("myBtn");
        var handler = function(){
            alert(this.id);
        };
        btn.addEventListener("click", handler, false); 
        
        var removeBtn = document.getElementById("myRemoveBtn");
        removeBtn.onclick = function(){
            btn.removeEventListener("click", handler, false);  //works!
        };
       </script>


<font color=red>注意：</font>IE8及以下版本不支持addEventListener，IE9和IE10支持addEventListener，IE11只支持addEventListener
 
## IE事件处理程序
IE实现了与DOM中类似的两个方法：attachEvent()和detachEvent()。

这两个方法接受相同的两个参数：事件处理程序名称和事件处理程序函数。由于IE8及更早版本只支持事件冒泡，所以通过attachEvent()添加的事件处理程序都会被添加到冒泡阶段。
<font color=red>注意：</font>
1、这里的参数是事件处理程序名称而不是事件名称，所以要加上on。
2、在这种方法下，事件处理程序会在**全局作用域**中运行，this等于window。
3、为同一个按钮添加两个事件处理程序时，**IE8及以下版本**和DOM中事件触发顺序**相反**，**IE9及以上版本**浏览器和DOM中事件触发顺序**相同**。例如：


    <input type="button" id="myBtn" value="Click Me" />
    <p>This example works only in Internet Explorer.</p>
    <script type="text/javascript">
        var btn = document.getElementById("myBtn");
        btn.attachEvent("onclick", function(){
            alert("Clicked");
        });
        btn.attachEvent("onclick", function(){
            alert("Hello world!");
        });
    </script>


这段代码在IE8及以下版本运行先弹出"Hello world!"，再弹出"Clicked"。在IE9及以上版本运行先弹出"Clicked"，再弹出"Hello world!"。

使用attachEvent添加的事件处理程序必须通过detachEvent方法删除，且参数一致。和DOM方法一样，添加的匿名函数将无法删除。