"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  MenuList: true
};
Object.defineProperty(exports, "MenuList", {
  enumerable: true,
  get: function get() {
    return _menuList.default;
  }
});

var _menuList = _interopRequireWildcard(require("./menuList"));

Object.keys(_menuList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _menuList[key];
    }
  });
});