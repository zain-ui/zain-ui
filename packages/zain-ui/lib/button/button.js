"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button2 = _interopRequireDefault(require("@material-ui/core/Button"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var ZuiButtonInternal = function ZuiButtonInternal(props, ref) {
  var elevation = props.elevation,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["elevation", "variant"]);
  var classes = (0, _style.useStyles)();

  var buttonRef = ref || /*#__PURE__*/_react.default.createRef();

  return (
    /*#__PURE__*/

    /**
     * 默认情况下，在页面中注入的 style会被插入到 <head> 元素的最后。 因此，相比其他样式表单，它们能够表现地更为具体。 如果您想要覆盖 Material-UI 的样式，请设置此属性。
     * 设置了 injectFirst 后，style 会被插入到 <head> 元素的最前面。
     * 这里不能加，只能在组件使用的时候加，统一设置 <StylesProvider injectFirst></StylesProvider>
     */
    _react.default.createElement(_Button2.default, (0, _extends2.default)({
      /**
       * className={classes.zain}
       * classes 属性可以定位到组件内部的样式，进行针对性修改
       */
      classes: {
        root: classes.root
      },
      ref: buttonRef,
      variant: elevation ? 'contained' : variant,
      disableElevation: !elevation
    }, other))
  );
};

var ZuiButton = /*#__PURE__*/_react.default.forwardRef(ZuiButtonInternal);

ZuiButton.displayName = 'ZuiButton';
ZuiButton.defaultProps = {};
var _default = ZuiButton;
exports.default = _default;