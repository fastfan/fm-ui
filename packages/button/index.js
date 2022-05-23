import FmButton from "./src/button.vue";
// 为组件提供 install 安装方法，供按需引入
FmButton.install = function(Vue) {
  Vue.component(FmButton.name, FmButton);
};
export default FmButton;
