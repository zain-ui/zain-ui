import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export { default } from './menuList';
export { default as MenuList } from './menuList';
/**
 * 菜单列表，每项具体内容
 */

export var MenuListItem = function MenuListItem() {
  _classCallCheck(this, MenuListItem);

  _defineProperty(this, "splitLine", void 0);

  _defineProperty(this, "key", void 0);

  _defineProperty(this, "leftText", void 0);

  _defineProperty(this, "rightText", void 0);

  _defineProperty(this, "menuListItems", void 0);
};
/**
 * 菜单列表放置位置（相对包含的子元素）
 * @prompt 枚举值，只能是固定字符串
 */

export var MenuListPlacementEnum;
/**
 * 打开菜单列表的鼠标事件
 */

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
})(MenuListPlacementEnum || (MenuListPlacementEnum = {}));

export var OpenMenuMouseEventEnum;

(function (OpenMenuMouseEventEnum) {
  OpenMenuMouseEventEnum["ON_MOUSE_DOWN"] = "onMouseDown";
  OpenMenuMouseEventEnum["ON_MOUSE_ENTER"] = "onMouseEnter";
  OpenMenuMouseEventEnum["ON_CLICK"] = "onClick";
  OpenMenuMouseEventEnum["ON_MOUSE_UP"] = "onMouseUp";
})(OpenMenuMouseEventEnum || (OpenMenuMouseEventEnum = {}));