import FmCommonDetail from "./src/common-detail.vue";
// 为组件提供 install 安装方法，供按需引入
FmCommonDetail.install = function(Vue) {
  Vue.component(FmCommonDetail.name, FmCommonDetail);
};
export default FmCommonDetail;
