import React, { Component } from 'react';
import { Popper, Grow, Paper, ClickAwayListener, MenuItem, MenuList as MuMenuList } from '@material-ui/core';
import './MenuList.less';
import { MenuListPlacementEnum, MenuListItem, OpenMenuMouseEventEnum } from './';

interface MenuListProps {
    /** 组件根元素新增 className */
    className?: string;
    /** 触发显示菜单列表的元素，通过子元素传递 */
    children?: React.ReactNode;
    /** 是否可以显示菜单列表组件（默认：true；值为 false 才会不显示） */
    open?: boolean;
    /** 菜单列表项具体内容 */
    menuListItems?: MenuListItem[];
    /** 菜单列表放置位置（默认：MenuListPlacementEnum.BOTTOM_START） */
    placement?: MenuListPlacementEnum;
    /** 打开菜单列表的鼠标事件（默认：OpenMenuMouseEventEnum.ON_MOUSE_DOWN） */
    openMenuMouseEvent?: OpenMenuMouseEventEnum;
    /** 菜单列表渲染到指定 DOM 元素内 */
    container?: Element | React.Component | (() => React.ReactInstance);
    /** 显示父组件的子菜单列表状态 */
    handleOpenParentSubMenuList?: () => void;
    /** 监听菜单列表（打开/关闭） */
    onMenuListOpenClose?: (open: boolean) => void;
    /** 监听单击每个菜单项 */
    onClickMenuListItem?: (menuListItemReturn: MenuListItem) => void;
}

interface WindowMenuBarState {
    /** 标记是否显示菜单列表 */
    open: boolean;
    /** 是否显示子菜单列表 */
    mapOpenSubMenuList: Map<string, boolean>;
    /** 控制含有子菜单的菜单项，具体某项 hover 状态 */
    menuItemHasSubHoverkey: string | undefined;
    /** ref 关联触发显示按钮和菜单列表 */
    anchorRef: React.RefObject<HTMLDivElement>;
}

/**
 * 菜单列表组件
 */
class MenuList extends Component<MenuListProps, WindowMenuBarState> {
    constructor(props: MenuListProps) {
        super(props);
        this.state = {
            open: false,
            mapOpenSubMenuList: new Map<string, boolean>(),
            anchorRef: React.createRef(),
            menuItemHasSubHoverkey: undefined
        };
    }

    /** 显示子菜单列表，延时器 */
    private openSubMenuListTimeOut: NodeJS.Timeout;

    /** 隐藏子菜单列表，延时器 */
    private closeSubMenuListTimeOut: NodeJS.Timeout;

    /** 打开子菜单延时（ms） */
    // eslint-disable-next-line no-magic-numbers
    private readonly openSubTime = 300;

    /** 关闭子菜单延时（ms） */
    // eslint-disable-next-line no-magic-numbers
    private readonly closeSubTime = 300;

    /**
     * 组件更新后会被立即调用。首次渲染不会执行此方法
     * @param prevProps 组件更新前的 props
     */
    componentDidUpdate(prevProps: MenuListProps): void {
        // 典型用法（不要忘记比较 props）：
        if (this.props.open !== prevProps.open) {
            if (this.props.open === false) {
                /** 取消含有子菜单的菜单项，hover 状态 */
                this.setState({ menuItemHasSubHoverkey: undefined });
            }
            this.setState({ open: this.props.open });
        }
    }

    /**
     * 组件从 DOM 移出前立刻掉用
     */
    componentWillUnmount(): void {
        // 清除延时操作
        clearTimeout(this.openSubMenuListTimeOut);
        clearTimeout(this.closeSubMenuListTimeOut);
    }

    /**
     * 切换菜单列表显隐
     */
    private handleToggle(): void {
        if (this.state.open) {
            this.handleClose();
        } else {
            this.handleOpen();
        }
    }

    /**
     * 鼠标按下，切换菜单列表显隐
     */
    private handleToggleMouseDown(): void {
        // 菜单列表已显示情况下，按下菜单按钮，隐藏菜单列表
        if (this.state.open === true) {
            this.handleClose();
        }
        if (!this.props.openMenuMouseEvent || this.props.openMenuMouseEvent === OpenMenuMouseEventEnum.ON_MOUSE_DOWN) {
            this.handleToggle();
        }
    }

    /**
     * 鼠标抬起，切换菜单显隐
     */
    private handleToggleMouseUp(): void {
        if (this.props.openMenuMouseEvent === OpenMenuMouseEventEnum.ON_MOUSE_UP) {
            this.handleToggle();
        }
    }

    /**
     * 鼠标单击，切换菜单显隐
     */
    private handleToggleClick(): void {
        if (this.props.openMenuMouseEvent === OpenMenuMouseEventEnum.ON_CLICK) {
            this.handleToggle();
        }
    }

    /**
     * 鼠标移入，显示菜单列表
     */
    private handleOpenMouseEnter(): void {
        if (this.props.openMenuMouseEvent === OpenMenuMouseEventEnum.ON_MOUSE_ENTER) {
            this.handleOpen();
        }
    }

    /**
     * 显示子菜单列表
     */
    private handleOpenSubMenuList(subMenuKey: string): void {
        /** 含有子菜单的菜单项，key 为 subMenuKey 的 hover 状态设置为 hover 中 */
        this.setState({ menuItemHasSubHoverkey: subMenuKey });
        clearTimeout(this.closeSubMenuListTimeOut);
        clearTimeout(this.openSubMenuListTimeOut);
        this.openSubMenuListTimeOut = setTimeout(() => {
            const newMapOpenSubMenuList = new Map([[subMenuKey, true]]);
            this.state.mapOpenSubMenuList.forEach((value: boolean, key: string) => {
                newMapOpenSubMenuList.set(key, key === subMenuKey);
            });
            this.setState({ mapOpenSubMenuList: newMapOpenSubMenuList });
            clearTimeout(this.openSubMenuListTimeOut);
        }, this.openSubTime);
    }

    /**
     * 显示父组件的子菜单列表
     */
    private handleOpenParentSubMenu(): void {
        if (this.props.handleOpenParentSubMenuList) {
            this.props.handleOpenParentSubMenuList();
        }
    }


    /**
     * 关闭子菜单列表
     */
    private handleCloseSubMenuList(): void {
        /** 取消含有子菜单的菜单项，hover 状态 */
        this.setState({ menuItemHasSubHoverkey: undefined });
        clearTimeout(this.openSubMenuListTimeOut);
        clearTimeout(this.closeSubMenuListTimeOut);
        this.closeSubMenuListTimeOut = setTimeout(() => {
            const newMapOpenSubMenuList = new Map();
            this.setState({ mapOpenSubMenuList: newMapOpenSubMenuList });
            clearTimeout(this.closeSubMenuListTimeOut);
        }, this.closeSubTime);
    }

    /**
     * （关闭/隐藏）菜单列表
     * @param event 当前单击到的元素（ClickAwayListener 组件传递，用来排除触发显示按钮的元素，防止按钮切换显隐和关闭逻辑冲突）
     */
    private handleClose(event?: React.MouseEvent<Document, MouseEvent>): void {
        /** 取消含有子菜单的菜单项，hover 状态 */
        this.setState({ menuItemHasSubHoverkey: undefined });
        if (event && this.state.anchorRef && this.state.anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        this.setState({ open: false }, () => {
            if (this.props.onMenuListOpenClose) {
                this.props.onMenuListOpenClose(this.state.open);
            }
        });
    }

    /**
     * （打开/显示）菜单列表
     */
    private handleOpen(): void {
        this.setState({ open: true }, () => {
            if (this.props.onMenuListOpenClose) {
                this.props.onMenuListOpenClose(this.state.open);
            }
        });
    }

    /**
     * 单击到菜单的每一项触发
     */
    private handleMenuItem(menuListItem: MenuListItem): void {
        let menuListItemReturn = new MenuListItem();
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
    private renderMenuItem(item: MenuListItem): JSX.Element {
        return (
            <MenuItem
                key={`ZuiMenuItem-${item.key}`}
                onMouseUp={() => { this.handleMenuItem(item); }}
                onMouseEnter={ () => { this.handleCloseSubMenuList(); }}
            >
                {item.leftText && <div className={`${item.rightText ? 'ZuiMenuList-left-text' : ''}`}>{item.leftText}</div>}
                {item.rightText && <div className="ZuiMenuList-right-text">{item.rightText}</div>}
            </MenuItem>
        );
    }

    /**
     * 渲染包含子菜单的菜单项
     * @param item 菜单项内容
     */
    private renderMenuSubItem(item: MenuListItem): JSX.Element {
        return (
            <MenuList
                key={`ZuiMenuList-${item.key}`}
                className={`ZuiMenuList-sub-list ${
                    this.state.menuItemHasSubHoverkey === item.key ? 'ZuiMenuList-button-hover' : 'ZuiMenuList-sub-list'
                }`}
                open={this.state.mapOpenSubMenuList.get(item.key) === true}
                menuListItems={item.menuListItems}
                placement={MenuListPlacementEnum.RIGHT_START}
                openMenuMouseEvent={OpenMenuMouseEventEnum.ON_MOUSE_ENTER}
                container={this.props.container ? this.props.container : this.state.anchorRef.current}
                handleOpenParentSubMenuList={() => { return this.handleOpenSubMenuList(item.key); }}
                onClickMenuListItem={(menuListItemReturn: MenuListItem) => { this.handleMenuItem(menuListItemReturn); }}
            >
                <MenuItem
                    onMouseEnter={() => { this.handleOpenSubMenuList(item.key); }}
                    onMouseLeave={ () => { this.handleCloseSubMenuList(); }}
                >
                    {item.leftText && <div className={`${item.rightText ? 'ZuiMenuList-left-text' : ''}`}>{item.leftText}</div>}
                    {item.rightText && <div className="ZuiMenuList-right-text">{item.rightText}</div>}
                    <div className="ZuiMenuList-sub-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            {/* eslint-disable-next-line max-len */}
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"/>
                        </svg>
                    </div>
                </MenuItem>
            </MenuList>
        );
    }

    public render(): JSX.Element {
        return (
            <div className={`ZuiMenuList-root${this.props.className ? ` ${this.props.className}` : ''}`}>
                <div
                    className="ZuiMenuList-button"
                    ref={this.state.anchorRef}
                    aria-controls={(this.state.open && this.props.open !== false) ? 'ZuiMenuList-grow' : undefined}
                    aria-haspopup="true"
                    onMouseDown={() => { this.handleToggleMouseDown(); }}
                    onMouseEnter={() => { this.handleOpenMouseEnter(); }}
                    onClick={() => { this.handleToggleClick(); }}
                    onMouseUp={() => { this.handleToggleMouseUp(); }}
                >
                    {this.props.children}
                </div>
                <Popper
                    className="ZuiMenuList-popper"
                    open={this.state.open && this.props.open !== false}
                    anchorEl={this.state.anchorRef.current}
                    role={undefined}
                    container={this.props.container ? this.props.container : this.state.anchorRef.current}
                    placement={this.props.placement ? this.props.placement : MenuListPlacementEnum.BOTTOM_START}
                    onMouseEnter={() => { this.handleOpenParentSubMenu(); }}
                >
                    {({ TransitionProps, placement }) => {
                        return (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper className="ZuiMenuList-paper" square>
                                    <ClickAwayListener
                                        mouseEvent="onMouseDown"
                                        onClickAway={(event: React.MouseEvent<Document, MouseEvent>) => {
                                            this.handleClose(event);
                                        }}
                                    >
                                        <MuMenuList
                                            id="ZuiMenuList-grow"
                                            autoFocusItem={this.state.open && this.props.open !== false}
                                        >
                                            {
                                                this.props.menuListItems &&
                                                this.props.menuListItems.map((item: MenuListItem, index: number) => {
                                                    if (item.splitLine) {
                                                        return (
                                                            <div
                                                                key={`ZuiMenuList-split-${index}`}
                                                                className="ZuiMenuList-split-line"
                                                            ></div>
                                                        );
                                                    }
                                                    if (item.menuListItems) {
                                                        return this.renderMenuSubItem(item);
                                                    }
                                                    return this.renderMenuItem(item);
                                                })
                                            }
                                        </MuMenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        );
                    }}
                </Popper>
            </div>
        );
    }
}

export default MenuList;
