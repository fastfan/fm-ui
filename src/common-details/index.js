import FmCommonDetails from "./src/common-details.vue";
// 为组件提供 install 安装方法，供按需引入
FmCommonDetails.install = function(Vue) {
  Vue.component(FmCommonDetails.name, FmCommonDetails);
};
export default FmCommonDetails;
