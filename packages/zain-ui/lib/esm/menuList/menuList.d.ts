import React, { Component } from 'react';
import { MenuListPlacementEnum, MenuListItem, OpenMenuMouseEventEnum } from '.';
interface MenuListProps {
    /** 组件根元素新增 className */
    className?: string;
    /** 触发显示菜单列表的元素，通过子元素传递 */
    children?: React.ReactNode;
    /** 是否可以显示菜单列表组件（默认：true；值为 false 才会不显示） */
    open?: boolean | undefined;
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
    onMenuListOpenClose?: (open: boolean | undefined) => void;
    /** 监听单击每个菜单项 */
    onClickMenuListItem?: (menuListItemReturn: MenuListItem) => void;
}
interface WindowMenuBarState {
    /** 标记是否显示菜单列表 */
    open: boolean | undefined;
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
declare class MenuList extends Component<MenuListProps, WindowMenuBarState> {
    constructor(props: MenuListProps);
    /** 显示子菜单列表，延时器 */
    private openSubMenuListTimeOut;
    /** 隐藏子菜单列表，延时器 */
    private closeSubMenuListTimeOut;
    /** 打开子菜单延时（ms） */
    private readonly openSubTime;
    /** 关闭子菜单延时（ms） */
    private readonly closeSubTime;
    /**
     * 组件更新后会被立即调用。首次渲染不会执行此方法
     * @param prevProps 组件更新前的 props
     */
    componentDidUpdate(prevProps: MenuListProps): void;
    /**
     * 组件从 DOM 移出前立刻掉用
     */
    componentWillUnmount(): void;
    /**
     * 切换菜单列表显隐
     */
    private handleToggle;
    /**
     * 鼠标按下，切换菜单列表显隐
     */
    private handleToggleMouseDown;
    /**
     * 鼠标抬起，切换菜单显隐
     */
    private handleToggleMouseUp;
    /**
     * 鼠标单击，切换菜单显隐
     */
    private handleToggleClick;
    /**
     * 鼠标移入，显示菜单列表
     */
    private handleOpenMouseEnter;
    /**
     * 显示子菜单列表
     */
    private handleOpenSubMenuList;
    /**
     * 显示父组件的子菜单列表
     */
    private handleOpenParentSubMenu;
    /**
     * 关闭子菜单列表
     */
    private handleCloseSubMenuList;
    /**
     * （关闭/隐藏）菜单列表
     * @param event 当前单击到的元素（ClickAwayListener 组件传递，用来排除触发显示按钮的元素，防止按钮切换显隐和关闭逻辑冲突）
     */
    private handleClose;
    /**
     * （打开/显示）菜单列表
     */
    private handleOpen;
    /**
     * 单击到菜单的每一项触发
     */
    private handleMenuItem;
    /**
     * 渲染普通菜单项
     * @param item 菜单项内容
     */
    private renderMenuItem;
    /**
     * 渲染包含子菜单的菜单项
     * @param item 菜单项内容
     */
    private renderMenuSubItem;
    render(): JSX.Element;
}
export default MenuList;
