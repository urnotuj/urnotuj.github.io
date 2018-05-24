---
title: js操作DOM元素
date: 2018-03-20 10:17:17
tags:
- 工具
---
摘要：
DOM操作：创建元素、查找元素、添加新元素、替换、移除、复制、移动
<!--more-->


## 创建

document.createElement()

## 查找

**document.getElementById()** &nbsp;&nbsp;返回对拥有指定 id 的第一个对象的引用。

**document.getElementByName()** &nbsp;&nbsp;返回带有指定名称的对象集合。

**document.getElementByTagName()** &nbsp;&nbsp;返回带有指定标签名的对象集合。

**document.getElementsByClassName()** &nbsp;&nbsp;返回文档中所有指定类名的元素集合。存在兼容性问题，IE6/7/8不支持

 这里，重新实现一个函数myGetElementsByClassName，兼容IE6/7/8

        function myGetElementByClassName(classname) {
        var ele = [];
        if (!document.getElementsByClassName) {
            console.log("这是IE6/7/8吧");
            var dom = document.all ? document.all : document.getElementsByTagName('*');
            for (var i = 0; i < dom.length; i++) {
               // if (dom[i].className == classname)
                 //   ele.push(dom[i]);
                var reg=new RegExp('\\b'+classname+'\\b','g');
                if (reg.test(dom[i].className)) {
                    ele.push(dom[i]);
                }
            }   
        } else {
            ele = document.getElementsByClassName(classname);
            console.log('不是IE6/7/8 bro');
        }
        return ele;
    }


## 添加

**appendChild()**，返回新增的节点

&nbsp;&nbsp;&nbsp;&nbsp;如果传入到appendChild中的已经是文档的一部分，则把该节点移动到新的位置

还有一种是**insertBefore()**，这种方法可以插入到指定位置。接收两个参数，第一个是要插入的节点，第二个是作为参照的元素。要插入的节点会成为作为参照的节点的previousSibling。

## 替换

**replaceChild()** &nbsp;&nbsp;接收两个参数，第一个是要插入的节点，第二个是要替换的节点。

在使用replaceChild()插入一个节点时，该节点的关系指针都会从被它替换的节点复制过来。

## 移除

**removeChild()** &nbsp;&nbsp;接收一个参数，要移除的节点。

## 复制

**cloneNode()** 用于创建调用这个方法的节点的一个完全相同的副本。

接收一个布尔值参数，如果为true则执行深复制，也就是复制节点以及整个子节点树；如果为false则执行浅复制，也就是只复制节点本身。

复制后返回的节点副本属于文档所有，但是并没有为它指定父节点，需要其他方法来添加到文档中。

## 移动

移动元素一般是移动有的节点，三种方法：

第一种，使用appendChild()

第二种，使用insertBefore()

第三种，先复制要移动的节点，移除原来这个节点，然后把新得到的节点添加到文档中。


    <div id="div1">11111111</div>
    <div id="div2">22222222</div>
    <div id="div3">33333333</div>
    <script type="text/javascript">
        var div1 = document.getElementById('div1');
        var div2 = document.getElementById('div2');
        var div3 = document.getElementById('div3');
        //第一种方法
        document.body.appendChild(div1);
        //第二种方法
        document.body.insertBefore(div1,div3);
        //第三种方法
        var newNode = div1.cloneNode(true);
        document.body.removeChild(div1);
        document.body.insertBefore(newNode,div3);     
    </script>
