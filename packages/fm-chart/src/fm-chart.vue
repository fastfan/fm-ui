<!--
 * @Author: fastfan
 * @Date: 2022-06-02 13:47:44
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-02 13:55:53
 * @Description: your description
-->
<template>
  <div class="chart"></div>
</template>
<script>
//引入echart样式模板
import walden from "./walden.js";
import Vue from "vue";
export default {
  name: "FmChart",
  props: {
    option: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    option: {
      handler(option) {
        this.chart.setOption(option, true);
        let _this = this;
        _this.chart.getZr().on("click", function (params) {
			  // _this.$emit("blockClick2", params);
          //为echarts添加点击事件
          // 没有 target 意味着鼠标/指针不在任何一个图形元素上，它是从“空白处”触发的。
          if (!params.target) {
            // 点击在了空白处，做些什么。
          } else {//折线图定制点击
            _this.$emit("blockClick", params);
          }
        });
		   _this.chart.on("click", function (params) {//其他chart点击（非空白处点击）
          _this.$emit("blockClick2", params);
        });
      },
      deep: true,
    },
  },
  mounted() {
    // console.log(this.$echarts)
    this.chart = this.$echarts.init(this.$el, walden);
    Vue.prototype.$myChart = this.chart;
    this.chart.setOption(this.option);
    this.$emit("init", this.chart);
  },
};
</script>
<style lang="scss">
.chart {
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
