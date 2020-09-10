import React from 'react';
import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
import { MenuListItem, MenuListPlacementEnum, OpenMenuMouseEventEnum, ZuiMenuComponent, ZuiMenuProps } from './type';
import { useStyles } from './style';

/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */

const ZuiMenuInternal: React.ForwardRefRenderFunction<unknown, ZuiMenuProps> = (props: React.PropsWithChildren<ZuiMenuProps>, ref) => {
    const classes = useStyles();
    const menuRef = (ref as any) || React.createRef<HTMLElement>();
    const [anchorRef, setAnchorRef] = React.useState<React.RefObject<HTMLDivElement>>(React.createRef());
    const [stateOpen, setStateOpen] = React.useState<boolean>(true);
    const [menuItemHasSubHoverkey, setMenuItemHasSubHoverkey] = React.useState<string | undefined>(undefined);
    const [mapOpenSubMenuList, setMapOpenSubMenuList] = React.useState<Map<string, boolean>>(new Map<string, boolean>());

    /** 显示子菜单列表，延时器 */
    let openSubMenuListTimeOut: NodeJS.Timeout;

    /** 隐藏子菜单列表，延时器 */
    let closeSubMenuListTimeOut: NodeJS.Timeout;

    /** 打开子菜单延时（ms） */
    const openSubTime = 300;

    /** 关闭子菜单延时（ms） */
    const closeSubTime = 300;

    /**
     * （打开/显示）菜单列表
     */
    const handleOpen = (): void => {
        setStateOpen(true);
        if (props.onMenuListOpenClose) {
            props.onMenuListOpenClose(stateOpen);
        }
    };

    /**
     * （关闭/隐藏）菜单列表
     * @param event 当前单击到的元素（ClickAwayListener 组件传递，用来排除触发显示按钮的元素，防止按钮切换显隐和关闭逻辑冲突）
     */
    const handleClose = (event?: React.MouseEvent<Document, MouseEvent>): void => {
        console.log('zain>>>>>anchorRef.current', anchorRef.current);
        /** 取消含有子菜单的菜单项，hover 状态 */
        setMenuItemHasSubHoverkey(undefined);
        if (event && anchorRef && anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setStateOpen(false);
        if (props.onMenuListOpenClose) {
            props.onMenuListOpenClose(stateOpen);
        }
    };

    /**
     * 切换菜单列表显隐
     */
    const handleToggle = (): void => {
        if (stateOpen) {
            handleClose();
        } else {
            handleOpen();
        }
    };

    /**
     * 鼠标按下，切换菜单列表显隐
     */
    const handleToggleMouseDown = (): void => {
        // 菜单列表已显示情况下，按下菜单按钮，隐藏菜单列表
        if (stateOpen === true) {
            handleClose();
        }
        if (!props.openMenuMouseEvent || props.openMenuMouseEvent === OpenMenuMouseEventEnum.ON_MOUSE_DOWN) {
            handleToggle();
        }
    };

    /**
     * 鼠标移入，显示菜单列表
     */
    const handleOpenMouseEnter = (): void => {
        if (props.openMenuMouseEvent === OpenMenuMouseEventEnum.ON_MOUSE_ENTER) {
            handleOpen();
        }
    };

    /**
     * 鼠标单击，切换菜单显隐
     */
    const handleToggleClick = (): void => {
        if (props.openMenuMouseEvent === OpenMenuMouseEventEnum.ON_CLICK) {
            handleToggle();
        }
    };

    /**
     * 鼠标抬起，切换菜单显隐
     */
    const handleToggleMouseUp = (): void => {
        if (props.openMenuMouseEvent === OpenMenuMouseEventEnum.ON_MOUSE_UP) {
            handleToggle();
        }
    };

    /**
     * 显示父组件的子菜单列表
     */
    const handleOpenParentSubMenu = (): void => {
        if (props.handleOpenParentSubMenuList) {
            props.handleOpenParentSubMenuList();
        }
    };

    /**
     * 单击到菜单的每一项触发
     */
    const handleMenuItem = (menuListItem: MenuListItem): void => {
        let menuListItemReturn = new MenuListItem();
        menuListItemReturn = menuListItem;
        if (props.onClickMenuListItem) {
            props.onClickMenuListItem(menuListItemReturn);
        }
        handleClose();
    };

    /**
     * 显示子菜单列表
     */
    const handleOpenSubMenuList = (subMenuKey: string): void => {
        /** 含有子菜单的菜单项，key 为 subMenuKey 的 hover 状态设置为 hover 中 */
        setMenuItemHasSubHoverkey(subMenuKey);
        clearTimeout(closeSubMenuListTimeOut);
        clearTimeout(openSubMenuListTimeOut);
        openSubMenuListTimeOut = setTimeout(() => {
            const newMapOpenSubMenuList = new Map([[subMenuKey, true]]);
            mapOpenSubMenuList.forEach((value: boolean, key: string) => {
                newMapOpenSubMenuList.set(key, key === subMenuKey);
            });
            setMapOpenSubMenuList(newMapOpenSubMenuList);
            clearTimeout(openSubMenuListTimeOut);
        }, openSubTime);
    };

    /**
     * 关闭子菜单列表
     */
    const handleCloseSubMenuList = (): void => {
        /** 取消含有子菜单的菜单项，hover 状态 */
        setMenuItemHasSubHoverkey(undefined);
        clearTimeout(openSubMenuListTimeOut);
        clearTimeout(closeSubMenuListTimeOut);
        closeSubMenuListTimeOut = setTimeout(() => {
            const newMapOpenSubMenuList = new Map();
            setMapOpenSubMenuList(newMapOpenSubMenuList);
            clearTimeout(closeSubMenuListTimeOut);
        }, closeSubTime);
    };

    /**
     * 渲染普通菜单项
     * @param item 菜单项内容
     */
    const renderMenuItem = (item: MenuListItem): JSX.Element => {
        return (
            <MenuItem
                key={`ZuiMenuItem-${item.key}`}
                onMouseUp={() => { handleMenuItem(item); }}
                onMouseEnter={ () => { handleCloseSubMenuList(); }}
            >
                {item.leftText && <div className={`${item.rightText ? 'ZuiMenuList-left-text' : ''}`}>{item.leftText}</div>}
                {item.rightText && <div className="ZuiMenuList-right-text">{item.rightText}</div>}
            </MenuItem>
        );
    };

    /**
     * 渲染包含子菜单的菜单项
     * @param item 菜单项内容
     */
    const renderMenuSubItem = (item: MenuListItem): JSX.Element => {
        return (
            <ZuiMenu
                key={`ZuiMenuList-${item.key}`}
                className={`ZuiMenuList-sub-list ${
                    menuItemHasSubHoverkey === item.key ? 'ZuiMenuList-button-hover' : 'ZuiMenuList-sub-list'
                }`}
                open={mapOpenSubMenuList.get(item.key) === true}
                menuListItems={item.menuListItems}
                placement={MenuListPlacementEnum.RIGHT_START}
                openMenuMouseEvent={OpenMenuMouseEventEnum.ON_MOUSE_ENTER}
                container={props.container ? props.container : anchorRef.current}
                handleOpenParentSubMenuList={() => { return handleOpenSubMenuList(item.key); }}
                onClickMenuListItem={(menuListItemReturn: MenuListItem) => { handleMenuItem(menuListItemReturn); }}
            >
                <MenuItem
                    onMouseEnter={() => { handleOpenSubMenuList(item.key); }}
                    onMouseLeave={ () => { handleCloseSubMenuList(); }}
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
            </ZuiMenu>
        );
    };

    return (
        <div
            className={`ZuiMenuList-root${props.className ? ` ${props.className}` : ''}`}
            ref={menuRef}
        >
            <div
                className="ZuiMenuList-button"
                ref={anchorRef}
                aria-controls={(stateOpen && props.open !== false) ? 'ZuiMenuList-grow' : undefined}
                aria-haspopup="true"
                onMouseDown={() => { handleToggleMouseDown(); }}
                onMouseEnter={() => { handleOpenMouseEnter(); }}
                onClick={() => { handleToggleClick(); }}
                onMouseUp={() => { handleToggleMouseUp(); }}
            >
                {props.children}
            </div>
            <Popper
                className="ZuiMenuList-popper"
                open={stateOpen && props.open !== false}
                anchorEl={anchorRef.current}
                role={undefined}
                container={props.container ? props.container : anchorRef.current}
                placement={props.placement ? props.placement : MenuListPlacementEnum.BOTTOM_START}
                onMouseEnter={() => { handleOpenParentSubMenu(); }}
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
                                        handleClose(event);
                                    }}
                                >
                                    <MenuList
                                        id="ZuiMenuList-grow"
                                        autoFocusItem={stateOpen && props.open !== false}
                                    >
                                        {
                                            props.menuListItems &&
                                            props.menuListItems.map((item: MenuListItem, index: number) => {
                                                if (item.splitLine) {
                                                    return (
                                                        <div
                                                            key={`ZuiMenuList-split-${index}`}
                                                            className="ZuiMenuList-split-line"
                                                        ></div>
                                                    );
                                                }
                                                if (item.menuListItems) {
                                                    return renderMenuSubItem(item);
                                                }
                                                return renderMenuItem(item);
                                            })
                                        }
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    );
                }}
            </Popper>
        </div>
    );
};

const ZuiMenu = React.forwardRef<unknown, ZuiMenuProps>(ZuiMenuInternal) as ZuiMenuComponent;

ZuiMenu.displayName = 'ZuiMenu';

ZuiMenu.defaultProps = {
};

export default ZuiMenu;
