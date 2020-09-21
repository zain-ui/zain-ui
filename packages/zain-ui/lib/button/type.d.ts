/// <reference types="react" />
import { ButtonProps } from '@material-ui/core';
/**
 * 按钮组件，所有属性
 */
export declare type ZuiButtonProps = ButtonProps & {
    /** 是否启用按钮立体效果 */
    elevation?: boolean;
};
/**
 * 按钮组件类型
 */
export declare type ZuiButtonComponent = React.ForwardRefExoticComponent<ZuiButtonProps & React.RefAttributes<HTMLElement>>;
