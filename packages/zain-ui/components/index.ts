export { default as Button } from './button';
export * from './button';

/**
 * Menu 和 MenuList 是同一个组件
 * Menu: 用 class 实现，样式用 js 生成，不依赖 css 文件
 * MenuList: 用 class 实现，样式用 less 生成，依赖 css 文件
 * 启用 MenuList:
 * export { default as MenuList } from './menuList';
 * export * from './menuList';
 */
export { default as Menu } from './menu';
export * from './menu';
