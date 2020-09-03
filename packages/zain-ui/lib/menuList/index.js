"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _menuList.default;
  }
});
Object.defineProperty(exports, "MenuList", {
  enumerable: true,
  get: function get() {
    return _menuList.default;
  }
});
exports.OpenMenuMouseEventEnum = exports.MenuListPlacementEnum = exports.MenuListItem = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _menuList = _interopRequireDefault(require("./menuList"));

/**
 * 菜单列表，每项具体内容
 */
var MenuListItem = function MenuListItem() {
  (0, _classCallCheck2.default)(this, MenuListItem);
  (0, _defineProperty2.default)(this, "splitLine", void 0);
  (0, _defineProperty2.default)(this, "key", void 0);
  (0, _defineProperty2.default)(this, "leftText", void 0);
  (0, _defineProperty2.default)(this, "rightText", void 0);
  (0, _defineProperty2.default)(this, "menuListItems", void 0);
};
/**
 * 菜单列表放置位置（相对包含的子元素）
 * @prompt 枚举值，只能是固定字符串
 */


exports.MenuListItem = MenuListItem;
var MenuListPlacementEnum;
/**
 * 打开菜单列表的鼠标事件
 */

exports.MenuListPlacementEnum = MenuListPlacementEnum;

(function (MenuListPlacementEnum) {
  MenuListPlacementEnum["BOTTOM_END"] = "bottom-end";
  MenuListPlacementEnum["BOTTOM_START"] = "bottom-start";
  MenuListPlacementEnum["BOTTOM"] = "bottom";
  MenuListPlacementEnum["LEFT_END"] = "left-end";
  MenuListPlacementEnum["LEFT_START"] = "left-start";
  MenuListPlacementEnum["LEFT"] = "left";
  MenuListPlacementEnum["RIGHT_END"] = "right-end";
  MenuListPlacementEnum["RIGHT_START"] = "right-start";
  MenuListPlacementEnum["RIGHT"] = "right";
  MenuListPlacementEnum["TOP_END"] = "top-end";
  MenuListPlacementEnum["TOP_START"] = "top-start";
  MenuListPlacementEnum["TOP"] = "top";
})(MenuListPlacementEnum || (exports.MenuListPlacementEnum = MenuListPlacementEnum = {}));

var OpenMenuMouseEventEnum;
exports.OpenMenuMouseEventEnum = OpenMenuMouseEventEnum;

(function (OpenMenuMouseEventEnum) {
  OpenMenuMouseEventEnum["ON_MOUSE_DOWN"] = "onMouseDown";
  OpenMenuMouseEventEnum["ON_MOUSE_ENTER"] = "onMouseEnter";
  OpenMenuMouseEventEnum["ON_CLICK"] = "onClick";
  OpenMenuMouseEventEnum["ON_MOUSE_UP"] = "onMouseUp";
})(OpenMenuMouseEventEnum || (exports.OpenMenuMouseEventEnum = OpenMenuMouseEventEnum = {}));