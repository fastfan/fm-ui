<!--
 * @Author: fastfan
 * @Date: 2022-07-06 15:16:03
 * @LastEditors: fastfan
 * @LastEditTime: 2022-07-06 15:30:14
 * @Description: your description
-->
<template>
  <div>
    <FmTable
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
      <el-table-column prop="date" label="日期" width="180" />
    </FmTable>
  </div>
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
          date: "2016-05-01",
          name: "王小虎",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2OcQ1m8yoX77cmT9tj4UlO4M8VMYvoMQCTzd1W-x5h6fhBUruA",
          address: "上海市普陀区金沙江路 1516 弄",
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
<style scoped>
</style>