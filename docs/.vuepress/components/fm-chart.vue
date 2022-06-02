<!--
 * @Author: fastfan
 * @Date: 2022-06-02 11:47:30
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-02 12:04:39
 * @Description: your description
-->
<template>
  <div class='chart'></div>
</template>
<script>
export default {
  name: 'fmChart',
  props: {
    option: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  watch: {
    option: {
      handler(option) {
        this.chart.setOption(option, true);
        this.$emit('initChart', this.chart.getDataURL());
        let _this=this;
        _this.chart.getZr().on('click',function(params){//为echarts添加点击事件
          // 没有 target 意味着鼠标/指针不在任何一个图形元素上，它是从“空白处”触发的。
          if (!params.target) {
              // 点击在了空白处，做些什么。
          }else{
            _this.$emit('blockClicks', params);
          }
        });
      },
      deep: true
    }
  },
  mounted() {
    this.chart = this.$echarts.init(this.$el, 'walden');
    this.chart.setOption(this.option);
    this.$emit('init', this.chart);
    this.chart.on('mouseover', (params)=>{this.$emit("mouseover",params)})
    this.chart.on('mouseout', (params)=>{this.$emit("mouseout",params)})
    this.chart.on('click',(params)=>{this.$emit("blockClick",params)});//适用于一般的图形选中、点击等事件
  },
  methods: {

  }
};
</script>
<style lang='scss'>
.chart {
  width: 100%;
  height: 100%;
}
</style>
