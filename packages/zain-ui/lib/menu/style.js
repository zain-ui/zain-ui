"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles = require("@material-ui/core/styles");

var styles = (0, _styles.createStyles)({
  root: {
    display: 'inline-block',
    '& :focus': {
      outline: '0px'
    },
    '& .MuiZuiMenu-button': {
      display: 'inline-block'
    }
  },
  popper: {
    zIndex: 9999
  },
  paper: {
    /**
     * 依赖包 bug;
     * csstype 需要支持 string;
     * 可手动修改 node_modules/csstype/index.d.ts 文件: export type VisibilityProperty = Globals | "collapse" | "hidden" | "visible" | string;
     */
    visibility: 'unset !important',
    opacity: '1 !important',
    transform: 'none !important',
    color: '#9da5b4',
    backgroundColor: '#21252b',
    '& .MuiListItem-button': {
      lineHeight: 1,
      paddingLeft: '28px',
      paddingRight: '28px',
      fontSize: '13px',
      transition: 'none',
      cursor: 'default'
    },
    '& .MuiListItem-button:hover': {
      backgroundColor: '#2c313a'
    }
  },
  leftText: {
    marginRight: '50px'
  },
  rightText: {
    width: '100%',
    textAlign: 'right'
  },
  subList: {
    width: '100%',
    '& .MuiZuiMenu-button': {
      width: '100%'
    }
  },
  subIcon: {
    position: 'absolute',
    right: '10px'
  },
  buttonHover: {
    backgroundColor: '#2c313a'
  },
  splitLine: {
    height: '1px',
    margin: '5px 15px',
    background: '#777'
  }
});
exports.styles = styles;