---
title: 通用表单组件
date: 2022-06-28
sidebar: "auto"

publish: false
---

## 基本用法

适用于 PC 的二次封装表单
items内所有属性都兼容element-ui对应组件属性，请参考element-ui组件库文档设置。

::: demo

```html
<template>
  <fm-form :items="searchFields" :inline="true" :model="searchModel">
    <div
      class="reviewBtn"
      style="position: absolute;right: 20px;bottom: 30px;z-index: 4;"
    >
      <el-button type="primary">查询</el-button>
      <el-button class="secondBtn">重置</el-button>
    </div>
  </fm-form>
</template>

<script>
  export default {
    component: {},
    data() {
      return {
        xStore: [
          { label: "美食/餐厅线上活动", value: 0 },
          { label: "地推活动", value: 1111 },
          { label: "线下主题活动", value: 2 },
          { label: "单纯品牌曝光", value: 3 },
        ],
        searchModel: {
          funId: "",
          funName: "",
          location: "",
          pid: "",
          orderNo: "",
          funType: "",
          funType1: 2,
          logFlag: 1,
          icon: "",
          version: "",
        },
        searchFields: [
          {
            label: "任务编号",
            prop: "funId",
            placeholder: "请输入任务编号",
            anchor: 8,
            focus: true,
          },
          {
            label: "任务类型",
            prop: "funType1",
            xType: "select",
            xStore: () => {
              return this.xStore;
            },
            on: {
              change: () => {
                console.log("hehehhe", arguments);
              },
            },
            relatedFields: ["funId"],
            anchor: 8,
          },
          {
            label: "审批类别",
            prop: "funId",
            placeholder: "请输入审批类别",
            anchor: 8,
            focus: true,
            on: {
              "el.form.update": (a, b, c, d) => {
                this.searchModel.funId = "adfadfa";
                console.log("ab", a, b, c, d);
              },
            },
          },
          {
            label: "广告设置人",
            prop: "funName",
            placeholder: "输入广告设置人",
            anchor: 12,
          },
          {
            label: "本环节开始时间",
            prop: "orderNo",
            placeholder: "输入排序号",
            anchor: 12,
          },
          {
            label: "记日志",
            prop: "logFlag",
            xType: "switch",
            anchor: 24,
            "active-value": 1,
            "inactive-value": 0,
          },
        ],
      };
    },
  };
</script>
```

:::

### Attributes

| 参数  |                            说明                            |  类型  | 可选值 | 默认值 |
| :---: | :--------------------------------------------------------: | :----: | :----: | :----: |
| items |                         表单配置项                         | array  |        |   []   |
| model | 表单 model 项（与 items 里的 prop 属性相结合实现 v-model） | OBject |   -    |   —    |


