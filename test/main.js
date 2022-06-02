/*
 * @Author: fastfan
 * @Date: 2022-05-23 19:57:15
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-02 14:16:37
 * @Description: your description
 */
import Vue from 'vue';
import App from './App.vue';
// 导入组件库
import FmUI from '../packages';
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import {
  PullRefresh,
  RadioGroup,
  Radio,
  Swipe,
  Rate,
  SwipeItem,
  Cell,
  Picker,
  Tab,
  Tabs,
  Uploader,
  List,
  DropdownMenu,
  DropdownItem,
  Lazyload,
  Toast,
  Dialog,
  Sidebar,
  SidebarItem,
  Button,
  Popup,
  NoticeBar,
  ImagePreview,
  Loading,
  Collapse,
  CollapseItem,
  DatetimePicker,
  Checkbox,
  CheckboxGroup,
  Image,
  Icon,
  Field,
  Step,
  Steps,
  Progress,
  Circle,
} from 'vant';
Vue.use(PullRefresh)
  .use(List)
  .use(Toast)
  .use(Dialog)
  .use(Popup)
  .use(Cell)
  .use(Rate)
  .use(ImagePreview)
  .use(Collapse)
  .use(CollapseItem)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Button)
  .use(DatetimePicker)
  .use(Lazyload)
  .use(Swipe)
  .use(SwipeItem)
  .use(NoticeBar)
  .use(Picker)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Uploader)
  .use(Tab)
  .use(Tabs)
  .use(RadioGroup)
  .use(Radio)
  .use(Loading)
  .use(Image)
  .use(Icon)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Field)
  .use(Step)
  .use(Steps)
  .use(Progress)
  .use(Circle);
Vue.config.productionTip = false;
Vue.use(FmUI);
Vue.use(ElementUi)
Vue.prototype.$echarts = echarts

new Vue({
  render: (h) => h(App),
}).$mount('#app');