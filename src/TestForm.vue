<!--
 * @Author: fastfan
 * @Date: 2022-06-30 17:15:04
 * @LastEditors: fastfan
 * @LastEditTime: 2022-07-01 12:24:40
 * @Description: your description
-->
<!--
 * @Author: fastfan
 * @Date: 2022-06-28 17:20:05
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-30 14:22:14
 * @Description: your description
-->
<template>
  <div>
    <fm-form :items="searchFields" :inline="true" :model="searchModel" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
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
        eventTime:[]
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
          label: "自定义jsx内容",
          prop: "",
          anchor: 8,
          xType: "slot",
          on: {
            click: () => {
              console.log("slot click");
            },
          },
          template: () => {
            return <el-button type="success">aaaa</el-button>;
          },
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
          prop: "eventTime",
          placeholder: "输入排序号",
          anchor: 12,
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
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>