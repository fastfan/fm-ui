
import FmSubmitForm from "./src/index.vue";
// 为组件提供 install 安装方法，供按需引入
FmSubmitForm.install = function(Vue) {
  Vue.component(FmSubmitForm.name, FmSubmitForm);
};
export default FmSubmitForm;