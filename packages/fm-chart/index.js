/*
 * @Author: fastfan
 * @Date: 2022-06-02 13:47:19
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-02 13:48:37
 * @Description: your description
 */
import FmChart from "./src/fm-chart.vue";
// 为组件提供 install 安装方法，供按需引入
FmChart.install = function(Vue) {
  Vue.component(FmChart.name, FmChart);
};
export default FmChart;