import { ButtonProps } from '@material-ui/core';

/**
 * 按钮组件，所有属性
 */
export type ZuiButtonProps = ButtonProps;

/**
 * 按钮组件类型
 */
export type ZuiButtonComponent = React.ForwardRefExoticComponent<ZuiButtonProps & React.RefAttributes<HTMLElement>>;
