"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Popper2 = _interopRequireDefault(require("@material-ui/core/Popper"));

var _Grow2 = _interopRequireDefault(require("@material-ui/core/Grow"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Paper2 = _interopRequireDefault(require("@material-ui/core/Paper"));

var _ClickAwayListener2 = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _MenuList2 = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _MenuItem2 = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _ = require(".");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * 菜单列表组件
 */
var MenuList = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MenuList, _Component);

  var _super = _createSuper(MenuList);

  function MenuList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MenuList);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "openSubMenuListTimeOut", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeSubMenuListTimeOut", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "openSubTime", 300);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeSubTime", 300);
    _this.state = {
      open: false,
      mapOpenSubMenuList: new Map(),
      anchorRef: /*#__PURE__*/_react.default.createRef(),
      menuItemHasSubHoverkey: undefined
    };
    return _this;
  }
  /** 显示子菜单列表，延时器 */


  (0, _createClass2.default)(MenuList, [{
    key: "componentDidUpdate",

    /**
     * 组件更新后会被立即调用。首次渲染不会执行此方法
     * @param prevProps 组件更新前的 props
     */
    value: function componentDidUpdate(prevProps) {
      // 典型用法（不要忘记比较 props）：
      if (this.props.open !== prevProps.open) {
        if (this.props.open === false) {
          /** 取消含有子菜单的菜单项，hover 状态 */
          this.setState({
            menuItemHasSubHoverkey: undefined
          });
        }

        this.setState({
          open: this.props.open
        });
      }
    }
    /**
     * 组件从 DOM 移出前立刻掉用
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 清除延时操作
      clearTimeout(this.openSubMenuListTimeOut);
      clearTimeout(this.closeSubMenuListTimeOut);
    }
    /**
     * 切换菜单列表显隐
     */

  }, {
    key: "handleToggle",
    value: function handleToggle() {
      if (this.state.open) {
        this.handleClose();
      } else {
        this.handleOpen();
      }
    }
    /**
     * 鼠标按下，切换菜单列表显隐
     */

  }, {
    key: "handleToggleMouseDown",
    value: function handleToggleMouseDown() {
      // 菜单列表已显示情况下，按下菜单按钮，隐藏菜单列表
      if (this.state.open === true) {
        this.handleClose();
      }

      if (!this.props.openMenuMouseEvent || this.props.openMenuMouseEvent === _.OpenMenuMouseEventEnum.ON_MOUSE_DOWN) {
        this.handleToggle();
      }
    }
    /**
     * 鼠标抬起，切换菜单显隐
     */

  }, {
    key: "handleToggleMouseUp",
    value: function handleToggleMouseUp() {
      if (this.props.openMenuMouseEvent === _.OpenMenuMouseEventEnum.ON_MOUSE_UP) {
        this.handleToggle();
      }
    }
    /**
     * 鼠标单击，切换菜单显隐
     */

  }, {
    key: "handleToggleClick",
    value: function handleToggleClick() {
      if (this.props.openMenuMouseEvent === _.OpenMenuMouseEventEnum.ON_CLICK) {
        this.handleToggle();
      }
    }
    /**
     * 鼠标移入，显示菜单列表
     */

  }, {
    key: "handleOpenMouseEnter",
    value: function handleOpenMouseEnter() {
      if (this.props.openMenuMouseEvent === _.OpenMenuMouseEventEnum.ON_MOUSE_ENTER) {
        this.handleOpen();
      }
    }
    /**
     * 显示子菜单列表
     */

  }, {
    key: "handleOpenSubMenuList",
    value: function handleOpenSubMenuList(subMenuKey) {
      var _this2 = this;

      /** 含有子菜单的菜单项，key 为 subMenuKey 的 hover 状态设置为 hover 中 */
      this.setState({
        menuItemHasSubHoverkey: subMenuKey
      });
      clearTimeout(this.closeSubMenuListTimeOut);
      clearTimeout(this.openSubMenuListTimeOut);
      this.openSubMenuListTimeOut = setTimeout(function () {
        var newMapOpenSubMenuList = new Map([[subMenuKey, true]]);

        _this2.state.mapOpenSubMenuList.forEach(function (value, key) {
          newMapOpenSubMenuList.set(key, key === subMenuKey);
        });

        _this2.setState({
          mapOpenSubMenuList: newMapOpenSubMenuList
        });

        clearTimeout(_this2.openSubMenuListTimeOut);
      }, this.openSubTime);
    }
    /**
     * 显示父组件的子菜单列表
     */

  }, {
    key: "handleOpenParentSubMenu",
    value: function handleOpenParentSubMenu() {
      if (this.props.handleOpenParentSubMenuList) {
        this.props.handleOpenParentSubMenuList();
      }
    }
    /**
     * 关闭子菜单列表
     */

  }, {
    key: "handleCloseSubMenuList",
    value: function handleCloseSubMenuList() {
      var _this3 = this;

      /** 取消含有子菜单的菜单项，hover 状态 */
      this.setState({
        menuItemHasSubHoverkey: undefined
      });
      clearTimeout(this.openSubMenuListTimeOut);
      clearTimeout(this.closeSubMenuListTimeOut);
      this.closeSubMenuListTimeOut = setTimeout(function () {
        var newMapOpenSubMenuList = new Map();

        _this3.setState({
          mapOpenSubMenuList: newMapOpenSubMenuList
        });

        clearTimeout(_this3.closeSubMenuListTimeOut);
      }, this.closeSubTime);
    }
    /**
     * （关闭/隐藏）菜单列表
     * @param event 当前单击到的元素（ClickAwayListener 组件传递，用来排除触发显示按钮的元素，防止按钮切换显隐和关闭逻辑冲突）
     */

  }, {
    key: "handleClose",
    value: function handleClose(event) {
      var _this4 = this;

      /** 取消含有子菜单的菜单项，hover 状态 */
      this.setState({
        menuItemHasSubHoverkey: undefined
      });

      if (event && this.state.anchorRef && this.state.anchorRef.current && this.state.anchorRef.current.contains(event.target)) {
        return;
      }

      this.setState({
        open: false
      }, function () {
        if (_this4.props.onMenuListOpenClose) {
          _this4.props.onMenuListOpenClose(_this4.state.open);
        }
      });
    }
    /**
     * （打开/显示）菜单列表
     */

  }, {
    key: "handleOpen",
    value: function handleOpen() {
      var _this5 = this;

      this.setState({
        open: true
      }, function () {
        if (_this5.props.onMenuListOpenClose) {
          _this5.props.onMenuListOpenClose(_this5.state.open);
        }
      });
    }
    /**
     * 单击到菜单的每一项触发
     */

  }, {
    key: "handleMenuItem",
    value: function handleMenuItem(menuListItem) {
      var menuListItemReturn = new _.MenuListItem();
      menuListItemReturn = menuListItem;

      if (this.props.onClickMenuListItem) {
        this.props.onClickMenuListItem(menuListItemReturn);
      }

      this.handleClose();
    }
    /**
     * 渲染普通菜单项
     * @param item 菜单项内容
     */

  }, {
    key: "renderMenuItem",
    value: function renderMenuItem(item) {
      var _this6 = this;

      return /*#__PURE__*/_react.default.createElement(_MenuItem2.default, {
        key: "ZuiMenuItem-".concat(item.key),
        onMouseUp: function onMouseUp() {
          _this6.handleMenuItem(item);
        },
        onMouseEnter: function onMouseEnter() {
          _this6.handleCloseSubMenuList();
        }
      }, item.leftText && /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(item.rightText ? 'ZuiMenuList-left-text' : '')
      }, item.leftText), item.rightText && /*#__PURE__*/_react.default.createElement("div", {
        className: "ZuiMenuList-right-text"
      }, item.rightText));
    }
    /**
     * 渲染包含子菜单的菜单项
     * @param item 菜单项内容
     */

  }, {
    key: "renderMenuSubItem",
    value: function renderMenuSubItem(item) {
      var _this7 = this;

      return /*#__PURE__*/_react.default.createElement(MenuList, {
        key: "ZuiMenuList-".concat(item.key),
        className: "ZuiMenuList-sub-list ".concat(this.state.menuItemHasSubHoverkey === item.key ? 'ZuiMenuList-button-hover' : 'ZuiMenuList-sub-list'),
        open: this.state.mapOpenSubMenuList.get(item.key) === true,
        menuListItems: item.menuListItems,
        placement: _.MenuListPlacementEnum.RIGHT_START,
        openMenuMouseEvent: _.OpenMenuMouseEventEnum.ON_MOUSE_ENTER,
        container: this.props.container ? this.props.container : this.state.anchorRef.current,
        handleOpenParentSubMenuList: function handleOpenParentSubMenuList() {
          return _this7.handleOpenSubMenuList(item.key);
        },
        onClickMenuListItem: function onClickMenuListItem(menuListItemReturn) {
          _this7.handleMenuItem(menuListItemReturn);
        }
      }, /*#__PURE__*/_react.default.createElement(_MenuItem2.default, {
        onMouseEnter: function onMouseEnter() {
          _this7.handleOpenSubMenuList(item.key);
        },
        onMouseLeave: function onMouseLeave() {
          _this7.handleCloseSubMenuList();
        }
      }, item.leftText && /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(item.rightText ? 'ZuiMenuList-left-text' : '')
      }, item.leftText), item.rightText && /*#__PURE__*/_react.default.createElement("div", {
        className: "ZuiMenuList-right-text"
      }, item.rightText), /*#__PURE__*/_react.default.createElement("div", {
        className: "ZuiMenuList-sub-icon"
      }, /*#__PURE__*/_react.default.createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor"
      }, /*#__PURE__*/_react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ZuiMenuList-root".concat(this.props.className ? " ".concat(this.props.className) : '')
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ZuiMenuList-button",
        ref: this.state.anchorRef,
        "aria-controls": this.state.open && this.props.open !== false ? 'ZuiMenuList-grow' : undefined,
        "aria-haspopup": "true",
        onMouseDown: function onMouseDown() {
          _this8.handleToggleMouseDown();
        },
        onMouseEnter: function onMouseEnter() {
          _this8.handleOpenMouseEnter();
        },
        onClick: function onClick() {
          _this8.handleToggleClick();
        },
        onMouseUp: function onMouseUp() {
          _this8.handleToggleMouseUp();
        }
      }, this.props.children), /*#__PURE__*/_react.default.createElement(_Popper2.default, {
        className: "ZuiMenuList-popper",
        open: this.state.open && this.props.open !== false,
        anchorEl: this.state.anchorRef.current,
        role: undefined,
        container: this.props.container ? this.props.container : this.state.anchorRef.current,
        placement: this.props.placement ? this.props.placement : _.MenuListPlacementEnum.BOTTOM_START,
        onMouseEnter: function onMouseEnter() {
          _this8.handleOpenParentSubMenu();
        }
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
            placement = _ref.placement;
        return /*#__PURE__*/_react.default.createElement(_Grow2.default, (0, _extends2.default)({}, TransitionProps, {
          style: {
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
          }
        }), /*#__PURE__*/_react.default.createElement(_Paper2.default, {
          className: "ZuiMenuList-paper",
          square: true
        }, /*#__PURE__*/_react.default.createElement(_ClickAwayListener2.default, {
          mouseEvent: "onMouseDown",
          onClickAway: function onClickAway(event) {
            _this8.handleClose(event);
          }
        }, /*#__PURE__*/_react.default.createElement(_MenuList2.default, {
          id: "ZuiMenuList-grow",
          autoFocusItem: _this8.state.open && _this8.props.open !== false
        }, _this8.props.menuListItems && _this8.props.menuListItems.map(function (item, index) {
          if (item.splitLine) {
            return /*#__PURE__*/_react.default.createElement("div", {
              key: "ZuiMenuList-split-".concat(index),
              className: "ZuiMenuList-split-line"
            });
          }

          if (item.menuListItems) {
            return _this8.renderMenuSubItem(item);
          }

          return _this8.renderMenuItem(item);
        })))));
      }));
    }
  }]);
  return MenuList;
}(_react.Component);

var _default = MenuList;
exports.default = _default;