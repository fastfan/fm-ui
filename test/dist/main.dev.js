"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _packages = _interopRequireDefault(require("../packages"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _vant = require("vant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: fastfan
 * @Date: 2022-05-23 19:57:15
 * @LastEditors: fastfan
 * @LastEditTime: 2022-05-24 15:32:58
 * @Description: your description
 */
// 导入组件库
_vue["default"].use(_vant.PullRefresh).use(_vant.List).use(_vant.Toast).use(_vant.Dialog).use(_vant.Popup).use(_vant.Cell).use(_vant.Rate).use(_vant.ImagePreview).use(_vant.Collapse).use(_vant.CollapseItem).use(_vant.Checkbox).use(_vant.CheckboxGroup).use(_vant.Button).use(_vant.DatetimePicker).use(_vant.Lazyload).use(_vant.Swipe).use(_vant.SwipeItem).use(_vant.NoticeBar).use(_vant.Picker).use(_vant.DropdownMenu).use(_vant.DropdownItem).use(_vant.Uploader).use(_vant.Tab).use(_vant.Tabs).use(_vant.RadioGroup).use(_vant.Radio).use(_vant.Loading).use(_vant.Image).use(_vant.Icon).use(_vant.Sidebar).use(_vant.SidebarItem).use(_vant.Field).use(_vant.Step).use(_vant.Steps).use(_vant.Progress).use(_vant.Circle);

_vue["default"].config.productionTip = false;

_vue["default"].use(_packages["default"]);

_vue["default"].use(_elementUi["default"]);

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');