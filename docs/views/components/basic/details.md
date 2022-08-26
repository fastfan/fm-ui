---
title: 详情组件(新)
date: 2022-08-27
sidebar: "auto"

publish: false
---

## 基本用法

适用 PC 端通用详情页面（新）基于栅格开发的带边框详情页，页面分 n 行，每行分为 24 份，每行设有 col 属性，每行的 col 属性相加等于 24，内置了 xtype 属性，为了页面灵活，目前只设置了 xtype 为 slot,每个 slot 对应配置项数据有 slotName 属性，可根据 slotName 判断属于哪一项， 内容高度自定义。

::: demo

```html
<template>
  <fm-common-details :list="baseInfo" :detailData="detailData">
    <template v-for="slot in slotList" v-slot:[slot.slotName]>
      <div :key="slot.slotName">
        <div class="slot-viwer" v-show="slot.slotName === 'ImgViwer'">
          <img
            v-for="(item, index) in detailData[slot.prop]"
            :key="index"
            class="slot-img"
            :src="item"
          />
        </div>
        <div
          class="slot-viwer slot-viwer2"
          v-show="slot.slotName === 'ImgViwer2'"
        >
          <img
            v-for="(item, index) in detailData[slot.prop]"
            :key="index"
            class="slot-img"
            :src="item"
          />
        </div>
      </div>
    </template>
  </fm-common-details>
</template>

<script>
  export default {
    component: {},
    data() {
      return {
        detailData: {
          lableNo: 11111,
        },
        baseInfo: {
          data: [
            {
              rowData: [
                {
                  label: "气瓶标签号",
                  col: 12,
                  labelColor: "",
                  valueColor: "",
                  prop: "lableNo",
                },
                {
                  label: "权属企业",
                  col: 12,
                  labelColor: "",
                  valueColor: "",
                  prop: "enterpriseName",
                },
              ],
            },
            {
              rowData: [
                {
                  label: "标签安装时间",
                  col: 12,
                  labelColor: "",
                  valueColor: "",
                  prop: "signInstallTime",
                },
                {
                  label: "气瓶钢码编号",
                  col: 12,
                  labelColor: "",
                  valueColor: "",
                  prop: "steelNo",
                },
              ],
            },
            {
              rowData: [
                {
                  label: "出厂编号",
                  col: 12,
                  labelColor: "",
                  valueColor: "",
                  prop: "makeNo",
                },
                {
                  label: "生产厂家",
                  col: 12,
                  labelColor: "",
                  valueColor: "",
                  prop: "manufacturer",
                },
              ],
            },
            {
              rowData: [
                {
                  label: "出厂日期",
                  col: 12,
                  labelColor: "",
                  valueColor: "",
                  prop: "productionDate",
                },
                {
                  label: "瓶体自重(kg)",
                  col: 12,
                  labelColor: "",
                  valueColor: "",
                  prop: "weight",
                },
              ],
            },
            {
              rowData: [
                {
                  label: "气瓶型号",
                  col: 12,
                  labelColor: "",
                  valueColor: "",
                  prop: "bottleModel",
                },
                {
                  label: "气瓶规格(kg)",
                  col: 12,
                  labelColor: "",
                  valueColor: "",
                  prop: "specification",
                },
              ],
            },
            {
              rowData: [
                {
                  label: "气瓶图片",
                  col: 24,
                  labelColor: "",
                  valueColor: "",
                  prop: "coverPicture",
                  xType: "Slot",
                  slotName: "ImgViwer",
                },
              ],
            },
          ],
        },
        headTitles: "测试标题",
      };
    },
    computed: {
      slotList2() {
        const arr = this.baseInfo2.data.map((x) =>
          x.rowData.filter((y) => y.slotName)
        );
        const arr2 = arr.filter((x) => x.length > 0).flat();
        return arr2;
      },
    },
  };
</script>
```

:::

### Attributes

|     参数     |          说明           |     类型      |   可选值   | 默认值 |
| :----------: | :---------------------: | :-----------: | :--------: | :----: |
|     list     |        数据列表         |     array     |            |   []   |
|    xType     |          类型           |    string     | Slot/ null |   —    |
|    label     |         行标题          |    string     |     —      |   —    |
|    value     |           值            | string/number |     —      |   —    |
|  labelColor  |       行标题颜色        |    string     |     —      |   -    |
|  valueColor  |         值颜色          |    string     |     —      |   -    |
|     prop     |       行唯一标识        |    string     |     —      |   -    |
|   slotName   |      具名插槽名字       |    string     |     —      |   -    |
|  extraData   |        额外参数         |      any      |     —      |   -    |
|   rowData    |      每行数据列表       |     array     |            |   []   |
|  detailData  |         值集合          |    object     |     —      |   {}   |
| rowClassName | 每行自定义 className 名 |    string     |            |   ''   |

### Events

| 事件名称  | 说明         | 参数               |
| --------- | ------------ | ------------------ |
| linkValue | 值点击时触发 | data(返回整行数据) |
