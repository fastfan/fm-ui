---
title: echart基本组件
date: 2022-05-17
sidebar: "auto"

publish: false
---

## 基本用法

通用echarts组件，只需传入**option**即可，option同**echarts**的option，此例传入的是一个**柱状图**。

::: demo

```html
<template>
  <fm-chart :option="option" style="height:500px;"/>
</template>

<script>
  export default {
    component: {},
    data() {
      return {
       option:{
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
       }
      };
    },
    computed: {
     
    },
  };
</script>
```

:::

### Attributes

|    参数    |     说明     |     类型      |   可选值   | 默认值 |
| :--------: | :----------: | :-----------: | :--------: | :----: |
|    option    |   配置项   |     Object     |            |   {}   |

### Events

| 事件名称  | 说明         | 参数               |
| --------- | ------------ | ------------------ |
| click | 值点击时触发,意味着鼠标/指针不在任何一个图形元素上，它是从“空白处”触发的 | -- |
| blockClick | 值点击时触发,折线图定制点击| -- |
| blockClick2 | 除折线图外其他chart点击（非空白处点击） | -- |
