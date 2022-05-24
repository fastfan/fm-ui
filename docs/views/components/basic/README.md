---
title: 通用详情组件
date: 2022-05-17
sidebar: "auto"

publish: false
---

## 基本用法

适用 PC 端通用详情页面

::: demo

```html
<template>
  <fm-common-detail :list="baseInfo" :headTitle="headTitles">
    <template v-slot:[slot.slotName] v-for="slot in slotList">
      <div :key="slot.slotName">
        <el-button
          class="slot-button"
          type="primary"
          v-if="slot.slotName==='Button'"
          style="margin:16px 0 0 0;"
          >111</el-button
        >
        <span
          v-else-if="slot.slotName==='ImgViwer'"
          v-for="(item,index) in slot.extraData"
          :key="index"
        >
          <img style="margin:16px 0 0 0;" class="slot-img" :src="$withBase(item)" />
        </span>
        <span v-else-if="slot.slotName==='Link'" :style="{color:slot.valueColor}"
          >文字链接</span
        >
      </div>
    </template>
  </fm-common-detail>
</template>

<script>
  export default {
    component: {},
    data() {
      return {
        baseInfo: {
          data: [
            {
              label: "报警类型：",
              value: "11",
              col: 24,
              labelColor: "",
              valueColor: "",
              prop: "bigType",
            },
            {
              label: "报警时间：",
              value: "22",
              col: 12,
              labelColor: "",
              valueColor: "",
              prop: "alarmTime",
            },
            {
              label: "报警地点：",
              value: "33",
              col: 12,
              labelColor: "",
              valueColor: "",
              prop: "alarmTime2",
            },
            {
              label: "报警照片：",
              value: "",
              col: 12,
              labelColor: "",
              valueColor: "",
              prop: "alarmTime3",
              xType: "Slot",
              slotName: "ImgViwer",
              extraData: ["/fastfan.jpg"],
            },
            {
              label: "报警链接：",
              value: "",
              col: 12,
              labelColor: "",
              valueColor: "#5faee3",
              prop: "alarmTime4",
              xType: "Slot",
              slotName: "Link",
            },
            {
              label: "报警按钮：",
              value: "",
              col: 24,
              labelColor: "",
              valueColor: "",
              prop: "alarmTime5",
              xType: "Slot",
              slotName: "Button",
            },
          ],
        },
        headTitles: "测试标题",
      };
    },
    computed: {
      slotList() {
        return this.baseInfo.data.filter((x) => x.slotName);
      },
    },
  };
</script>
```

:::

### Attributes

|    参数    |     说明     |     类型      |   可选值   | 默认值 |
| :--------: | :----------: | :-----------: | :--------: | :----: |
|    list    |   数据列表   |     array     |            |   []   |
|   xType    |     类型     |    string     | Slot/ null |   —    |
|   label    |    行标题    |    string     |     —      |   —    |
|   value    |      值      | string/number |     —      |   —    |
| labelColor |  行标题颜色  |    string     |     —      |   -    |
| valueColor |    值颜色    |    string     |     —      |   -    |
|    prop    |  行唯一标识  |    string     |     —      |   -    |
|  slotName  | 具名插槽名字 |    string     |     —      |   -    |
| extraData  |   额外参数   |      any      |     —      |   -    |

### Events

| 事件名称  | 说明         | 参数               |
| --------- | ------------ | ------------------ |
| linkValue | 值点击时触发 | data(返回整行数据) |
