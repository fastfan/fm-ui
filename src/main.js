/*
 * @Author: fastfan
 * @Date: 2022-05-23 19:57:15
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-30 17:52:29
 * @Description: your description
 */
import Vue from 'vue';
import App from './App.vue';
// 导入组件库
import FmUI from '../src/index.js';
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../lib/index.css'
import * as echarts from 'echarts'
Vue.config.productionTip = false;
Vue.use(FmUI);
Vue.use(ElementUi)
Vue.prototype.$echarts = echarts

new Vue({
  render: (h) => h(App),
}).$mount('#app');


 // "main": "lib/fwm-ui.common.js",