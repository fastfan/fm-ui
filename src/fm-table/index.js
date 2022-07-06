/*
 * @Author: fastfan
 * @Date: 2022-07-06 10:31:30
 * @LastEditors: fastfan
 * @LastEditTime: 2022-07-06 10:31:33
 * @Description: your description
 */
import FmTable from "./src/fm-table.vue";
// 为组件提供 install 安装方法，供按需引入
FmTable.install = function(Vue) {
  Vue.component(FmTable.name, FmTable);
};
export default FmTable;