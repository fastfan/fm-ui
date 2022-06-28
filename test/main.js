/*
 * @Author: fastfan
 * @Date: 2022-05-23 19:57:15
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-28 18:05:27
 * @Description: your description
 */
import Vue from 'vue';
import App from './App.vue';
// 导入组件库
import FmUI from '../packages';
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
Vue.config.productionTip = false;
Vue.use(FmUI);
Vue.use(ElementUi)
Vue.prototype.$echarts = echarts

new Vue({
  render: (h) => h(App),
}).$mount('#app');