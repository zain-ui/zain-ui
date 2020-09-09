import React from 'react';
import { ButtonProps } from '@material-ui/core';
export interface ZuiButtonProps extends ButtonProps {
}
interface ZuiButtonComponent extends React.ForwardRefExoticComponent<ZuiButtonProps & React.RefAttributes<HTMLElement>> {
}
declare const ZuiButton: ZuiButtonComponent;
export default ZuiButton;
