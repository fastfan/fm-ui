---
title: vuepress1.x安装echarts5.3.x版本以及vue-echarts6.x版本报错
date: 2022-06-05
sidebar: "auto"
categories:
  - 框架
tags:
  - vuepress报错
---

# 前要

在尝试写可视化组件时，需要用到 echarts，但是在安装过程中遇到了一些错误，整理如下。

## 问题描述

安装 echarts5.3.x 报错，如下：

```js

[!] Uncaught ReferenceError: global is not defined
2:    at eval (index.js?b639:43:1)
3:    at ./node_modules/buffer/index.js (app.js:3612:1)
4:    at __webpack_require__ (app.js:833:30)
5:    at fn (app.js:130:20)
6:    at eval (helper.js:180:41)
7:    at ./node_modules/zrender/lib/svg/helper.js (app.js:18914:1)
8:    at __webpack_require__ (app.js:833:30)
9:    at fn (app.js:130:20)
10:   at eval (Animator.js?06ad:1:1)
11:   at ./node_modules/zrender/lib/animation/Animator.js (app.js:17990:1)

```

## 问题猜测

可能 echarts5.3.x 版本某些插件和 vuepress1.x 版本有冲突，所以安装 echarts 低版本。

## 解决方法

安装 echarts5.3.x 以下版本未发现报错

## 问题描述

vue-echarts6.x 版本报错

## 问题猜测

vue-echarts6.x版本基于 echarts5.3.x 版本，所以也不兼容vue1.x版本，所以安装低版本。

## 解决方法

安装 vue-echarts6.x 以下版本未发现报错
