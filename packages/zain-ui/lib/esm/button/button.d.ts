import React from 'react';
import { ButtonProps } from '@material-ui/core';
export interface ZuiButtonProps extends ButtonProps {
}
interface CompoundedComponent extends React.ForwardRefExoticComponent<ZuiButtonProps & React.RefAttributes<HTMLElement>> {
}
declare const ZuiButton: CompoundedComponent;
export default ZuiButton;
