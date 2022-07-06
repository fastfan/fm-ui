---
title: 表格组件
date:
sidebar: "auto"

publish: false
---

## 基本用法

适用于 PC 的基于 element-ui 二次封装表单
可根据需要传入 slot: searchPanel ( 搜索 ) , slot:toolPanel ( 工具栏 ) , Pagination ( 分页 )
fields 内所有属性都兼容 element-ui 对应 table 组件属性，请参考 element-ui 组件库文档设置。

::: demo

```html
<template>
  <fm-table
    ref="table"
    :total="total"
    :data="data"
    empty-column-text="88888"
    :fields="columns"
    :selection-col="true"
    @row-dblclick="handleRowClick"
    @selection-change="handleSelectionChange"
  >
    <div slot="searchPanel">
      <p>searchPanel</p>
    </div>
    <!-- <div slot="empty" class="empty">
          <p>null null</p>
        </div> -->
    <div slot="append" class="empty">
      <p>append text.....</p>
    </div>
    <el-row slot="toolPanel" class="toolPanel"> toolPanel </el-row>
    <el-table-column prop="date" label="日期" width="180" />
  </fm-table>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        total: 16,
        data: [
          {
            date: "2016-05-02",
            name: "",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
            address: "上海市普陀区金沙江路 1517 弄",
          },
        ],
        columns: [
          {
            group: [{ label: "t1", "header-align": "center" }],
            prop: "name",
            label: "姓名",
            width: "180",
            formatter: (row, col, val) => val || "--",
            "show-overflow-tooltip": true,
          },
          {
            group: ["t1"],
            prop: "address",
            label: "地址",
          },
          {
            prop: "add",
            label: "add",
          },
          {
            label: "头像",
            prop: "src",
            scopedSlots: {
              default: (scope) => (
                <img props-model={scope.row} width="40px" src={scope.row.src} />
              ),
            },
          },
        ],
        page: 1,
        limit: 10,
        sizes: [10, 20, 30, 40],
      };
    },
    computed: {},
    watch: {},
    methods: {
      handleRowClick(row) {
        console.log("demo:handleRowClick", row);
      },
      handleSelectionChange(list) {
        console.log("demo:handleSelectionChange", list);
      },
    },
    created() {},
    mounted() {},
  };
</script>
```

:::

### Attributes

|       参数       |     说明     |  类型   | 可选值 |                    默认值                     |
| :--------------: | :----------: | :-----: | :----: | :-------------------------------------------: |
| paginationLayout | 下方分页表现 | String  |   --   | "total, sizes, ->, prev, pager, next, jumper" |
|      fields      | 表格行配置项 | Number  |   --   |                      —-                       |
|      border      |    边框线    | Boolean |   --   |                     true                      |
|    pagination    |     分页     | Boolean |   --   |                     true                      |
|      total       |     总数     | Number  |   --   |                      —-                       |
|     limitNum     |  每页的数据  | Number  |   --   |                      10                       |
|     indexCol     |     序列     | Boolean |   --   |                     true                      |
|   selectionCol   |     勾选     | Boolean |   --   |                     true                      |

### Events

| 事件名称       | 说明                                         | 回调参数                   |
| -------------- | -------------------------------------------- | -------------------------- |
| size-change    | 改变每页显示数时触发,并派发 size-change 事件 | value 表明每页显示几条记录 |
| current-change | 改变当前页时触发,并且派发 page-change 事件   | value 表明跳转到第几页     |
