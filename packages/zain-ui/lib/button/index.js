"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Button: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _button.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button.default;
  }
});

var _button = _interopRequireWildcard(require("./button"));

Object.keys(_button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _button[key];
    }
  });
});