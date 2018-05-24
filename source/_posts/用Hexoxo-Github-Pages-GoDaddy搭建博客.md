---
title: 用Hexo+Github Pages+GoDaddy搭建博客
date: 2017-08-09 21:05:22
tags: 
 - Hexo
 - GitHub
---
摘要：
使用hexo、github pages搭建博客，在GoDaddy购买域名。
<!--more-->

正文：
1、安装Git
--------
在Git官网https://git-scm.com/下载安装包并安装。
	安装完成后打开Git Bash或者在桌面右键——Git Bash Here，输入**git --version**，返回版本号则证明Git安装成功，如下图所示：
	![图片加载失败](/1-1.PNG)
2、安装node.js
-----------
3、安装Hexo
---------
  安装hexo：右键—Git Bash Here，输入npm install hexo-cli -g以及npm install hexo --save
  如果不可以的话使用taobao的npm：npm install -g cnpm --registry=http://registry.npm.taobao/org
   安装完成后，使用hexo -v，来检测是否安装正确
   本地运行hexo  新建文件夹Blog\Hexo
   初始化：$ hexo init   安装生成器：$ npm install
   运行hexo $hexo s -g
   打开浏览器，输入localhost:4000,就可以在本地看到你的个人博客了
Hexo部署到Github
-----------------
域名
-----