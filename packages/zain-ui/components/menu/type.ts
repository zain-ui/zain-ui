/**
 * 菜单列表，每项具体内容
 */
export class MenuListItem {
    /** 当前项是否是分隔线，如果是分隔线，下面的内容属性都无效（默认：false） */
    splitLine?: boolean;
    /** 菜单列表每项的 key（唯一的） */
    key?: string;
    /** 左侧文本（默认空） */
    leftText?: string;
    /** 右侧文本（默认空） */
    rightText?: string;
    /** 子菜单列表项 */
    menuListItems?: MenuListItem[];
}

/**
 * 菜单列表放置位置（相对包含的子元素）
 * @prompt 枚举值，只能是固定字符串
 */
export enum MenuListPlacementEnum {
    BOTTOM_END = 'bottom-end',
    BOTTOM_START = 'bottom-start',
    BOTTOM = 'bottom',
    LEFT_END = 'left-end',
    LEFT_START = 'left-start',
    LEFT = 'left',
    RIGHT_END = 'right-end',
    RIGHT_START = 'right-start',
    RIGHT = 'right',
    TOP_END = 'top-end',
    TOP_START = 'top-start',
    TOP = 'top'
}

/**
 * 打开菜单列表的鼠标事件
 */
export enum OpenMenuMouseEventEnum {
    ON_MOUSE_DOWN = 'onMouseDown',
    ON_MOUSE_ENTER = 'onMouseEnter',
    ON_CLICK = 'onClick',
    ON_MOUSE_UP = 'onMouseUp'
}
/**
 * 菜单组件，所有属性
 */
export interface ZuiMenuProps {
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

/**
 * 菜单组件类型
 */
export type ZuiMenuComponent = React.ForwardRefExoticComponent<ZuiMenuProps & React.RefAttributes<HTMLElement>>;
