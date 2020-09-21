import { createStyles } from '@material-ui/core/styles';
export var styles = createStyles({
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
     * 依赖包 bug;（visibility: 'unset !important'）
     * csstype 需要支持 string;
     * 需要手动修改 node_modules/csstype/index.d.ts 文件: export type VisibilityProperty = Globals | "collapse" | "hidden" | "visible" | string;
     * 所以，这条样式卸写在组件 style 中
     */
    // visibility: 'unset !important',
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