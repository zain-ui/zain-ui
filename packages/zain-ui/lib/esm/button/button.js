import _Button from "@material-ui/core/Button";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { useStyles } from './style';

var ZuiButtonInternal = function ZuiButtonInternal(props, ref) {
  var other = _extends({}, props);

  var classes = useStyles();
  var buttonRef = ref || /*#__PURE__*/React.createRef();
  return (
    /*#__PURE__*/

    /**
     * 默认情况下，在页面中注入的 style会被插入到 <head> 元素的最后。 因此，相比其他样式表单，它们能够表现地更为具体。 如果您想要覆盖 Material-UI 的样式，请设置此属性。
     * 设置了 injectFirst 后，style 会被插入到 <head> 元素的最前面。
     * 这里不能加，只能在组件使用的时候加，统一设置 <StylesProvider injectFirst></StylesProvider>
     */
    React.createElement(_Button, _extends({
      /**
       * className={classes.zain}
       * classes 属性可以定位到组件内部的样式，进行针对性修改
       */
      classes: {
        root: classes.root
      },
      ref: buttonRef
    }, other))
  );
};

var ZuiButton = /*#__PURE__*/React.forwardRef(ZuiButtonInternal);
ZuiButton.displayName = 'ZuiButton';
ZuiButton.defaultProps = {
  disableElevation: true
};
export default ZuiButton;