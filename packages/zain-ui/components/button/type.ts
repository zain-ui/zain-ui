import { ButtonProps } from '@material-ui/core';

/**
 * 按钮组件，所有属性
 */
// export type ZuiButtonProps = ButtonProps;

export type ZuiButtonProps = ButtonProps & {
    /** 是否启用按钮立体效果 */
    elevation?: boolean;
};

// 用 interface, 编辑器 stackblitz 提示属性异常
// export interface ZuiButtonProps extends ButtonProps {
//     /** 是否启用按钮立体效果 */
//     elevation?: boolean;
// }

/**
 * 按钮组件类型
 */
export type ZuiButtonComponent = React.ForwardRefExoticComponent<ZuiButtonProps & React.RefAttributes<HTMLElement>>;
