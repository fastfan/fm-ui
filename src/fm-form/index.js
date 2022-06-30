/*
 * @Author: fastfan
 * @Date: 2022-06-28 15:41:00
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-28 16:55:47
 * @Description: your description
 */
import FmForm from "./src/fm-form.vue";
// 为组件提供 install 安装方法，供按需引入
FmForm.install = function(Vue) {
  Vue.component(FmForm.name, FmForm);
};
export default FmForm;