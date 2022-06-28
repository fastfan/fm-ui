"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _packages = _interopRequireDefault(require("../packages"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: fastfan
 * @Date: 2022-05-23 19:57:15
 * @LastEditors: fastfan
 * @LastEditTime: 2022-05-24 15:32:58
 * @Description: your description
 */
// 导入组件库

_vue["default"].config.productionTip = false;

_vue["default"].use(_packages["default"]);

_vue["default"].use(_elementUi["default"]);

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');