---
title: element-ui框架遇到问题整理（长期更新）
date: 2022-03-05
sidebar: "auto"
categories:
  - 框架
tags:
  - element-ui问题整理
---

# 概述

记录element-ui组件库在使用过程中遇到的问题整理（长期更新）。

## 1 table表格内操作按钮popover形式展示内容

注意点：**ref不重复**，若内有操作按钮可以关闭弹窗，而点击关闭弹窗，弹窗关闭时效，可用 **document.body.click()** 模拟关闭

```html

<template>
  <el-popover
    placement="left"
    title="编辑权限"
    width="332"
    popper-class="popover-class"
    trigger="click"
    v-show="hasRole"
    :ref="`popover-${scope.row.id}`"
  >
  <div>11111</div>
  <el-button
      type="text"
      slot="reference"
      @click="
        () => {
          clickJus(scope.row, `popover-${scope.row.id}-tree`)
        }
      "
      >编辑</-button
    >
  </el-popover>
</template>

```

## 2 table--column--type=expand数据格式答疑

当table的column设置了 **type=expand** 后，会出现展开收起按钮，但有时候会渲染错误，如下图：
![这里写图片描述](/table-expand.png)

是因为展开行内的数据结构内有 **children** element-ui默认 **children** 字段结构为tree结构，所以导致样式混乱，我们只要把 **children** 字段改掉就好
