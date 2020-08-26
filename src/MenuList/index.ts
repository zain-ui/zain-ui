/**
 * 防止 import 引用组件需要 '*\MenuList\MenuList'
 */
export { default } from './MenuList';

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
