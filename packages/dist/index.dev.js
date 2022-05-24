"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "KeepAlive", {
  enumerable: true,
  get: function get() {
    return _keepAlive["default"];
  }
});
Object.defineProperty(exports, "CommonDetail", {
  enumerable: true,
  get: function get() {
    return _commonDetail["default"];
  }
});
exports["default"] = void 0;

var _keepAlive = _interopRequireDefault(require("./keep-alive"));

var _commonDetail = _interopRequireDefault(require("./common-detail"));

require("./fonts/font.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 存储组件列表
var components = [_commonDetail["default"]]; // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

var install = function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    key: '',
    router: {}
  };
  var _options$key = options.key,
      key = _options$key === void 0 ? 'cacheTo' : _options$key,
      router = options.router; // 遍历注册全局组件

  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
  Vue.use(_keepAlive["default"], {
    key: key,
    router: router
  });
}; // 判断是否是直接引入文件


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  version: '0.1.0',
  install: install
};
exports["default"] = _default;