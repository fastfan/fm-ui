"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commonDetail = _interopRequireDefault(require("./src/common-detail.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 为组件提供 install 安装方法，供按需引入
_commonDetail["default"].install = function (Vue) {
  Vue.component(_commonDetail["default"].name, _commonDetail["default"]);
};

var _default = _commonDetail["default"];
exports["default"] = _default;