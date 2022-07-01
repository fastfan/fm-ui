---
title: 通用表单组件
date:
sidebar: "auto"

publish: false
---

## 基本用法

适用于 PC 的二次封装表单
Form 只提供了基础的 input 类型；包括：**文本输入框** 、**文本下拉框**、 **时间选择器**、 **自定义**等，
items和fields 表单域内所有属性都兼容 element-ui 对应组件属性，请参考 element-ui 组件库文档设置。

::: demo

```html
<template>
  <fm-form :items="searchFields" :inline="true" :model="searchModel" :rules="addRules" >
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
        addRules: {
        funId: [
          { required: true, message: '请输入功能编号', trigger: 'blur' }
        ],
        funName: [
          { required: true, message: '请输入功能名称', trigger: 'blur' }
        ],
        funType: [
          { required: true, message: '请选择功能类型', trigger: 'blur' }
        ]
      },
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
            anchor: 8,
          },
          {
            label: "本环节开始时间",
            prop: "orderNo",
            placeholder: "输入排序号",
            anchor: 8,
            xType: "SelectTimeRange.datetimerange",
            format: "yyyy-MM-dd HH:mm:ss",
            clearable:true
          },
          {
            label: "记日志",
            prop: "logFlag",
            xType: "switch",
            anchor: 12,
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

|     参数      |                                说明                                |  类型   |     可选值     | 默认值 |
| :-----------: | :----------------------------------------------------------------: | :-----: | :------------: | :----: |
|    inline     |                            是否行内表单                            | boolean |   true/false   |  true  |
|  labelWidth   |                             文本项宽度                             | number  |       --       |   —-   |
| labelPosition |                             文本项位置                             | number  | top/left/right | right  |
|     rules     |                              校验规则                              |  array  |       --       |   []   |
|     model     | 表单 model 项（与 items 里的 prop 属性相结合实现 v-model）数据对象 | object  |       --       |   —-   |
|     items     |                             表单配置项                             |  array  |       --       |   []   |

### fields 表单域

|    参数     |     说明     |   类型   |                                可选值                                 | 默认值 |
| :---------: | :----------: | :------: | :-------------------------------------------------------------------: | :----: |
|    label    |   标签文本   |  string  |                                  --                                   |   --   |
|    prop     | 数据对象来源 |  string  |                                  --                                   |   --  |
|    xType    |  表单项类型  |  string  | cascader/switch/selsect/SelectTimeRange.datetimerange/SelectTime.datetime/slot | input  |
|   anchor    |     长度     |  number  |                                  —-                                   |
| placeholder |    占位符    |  string  |                                  --                                   |   []   |
|   xStore    |  下拉框数组  | function |                                  --                                   | ()=>{} |
