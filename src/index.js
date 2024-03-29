
import KeepAlive from './keep-alive';
import CommonDetail from './common-detail';
import CommonDetails from './common-details';
import Chart from './fm-chart';
import Form from './fm-form';
import Table from './fm-table';
import SubmitForm from './fm-submit-form';
import SelectTimeRange from './fm-form/src/select/SelectTimeRange.vue';

import './style/index.scss';
// 存储组件列表
const components = [CommonDetail,CommonDetails,Chart,Form,SelectTimeRange,Table,SubmitForm];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue, options = { key: '', router: {} }) {
  const { key = 'cacheTo', router } = options;
  // 遍历注册全局组件
  components.forEach(function(item) {
    if (item.install) {
      console.log(item)
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
  Vue.use(KeepAlive, { key, router });
};
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export {  KeepAlive,CommonDetail,CommonDetails,Chart,Form,SelectTimeRange,Table,SubmitForm };
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  version: '1.0.6',
  install,
};
