import React from 'react';
import clsx from 'clsx';
import { Button as MuButton } from '@material-ui/core';

export type SizeType = "small" | "medium" | "large" | undefined;

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    size?: SizeType;
}

const ButtonInternal: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props: React.PropsWithChildren<ButtonProps>, ref) => {
    const { children, className, disabled, size } = props;

    const classes = clsx(className, 'ZuiButton-initial', {
        ['ZuiButton-size-small']: size === 'small',
        ['ZuiButton-size-middle']: size === 'medium',
        ['ZuiButton-size-large']: size === 'large'
    });

    return (
        <div className="ZuiButton-root">
            <MuButton
                className={classes}
                disabled={disabled}
                size={size}
                variant="contained"
            >
                {children}
            </MuButton>
        </div>
    )
}

const Button = React.forwardRef<unknown, ButtonProps>(ButtonInternal);

Button.displayName = 'ButtonZain';

Button.defaultProps = {
    children: undefined,
    className: '',
    disabled: false,
    size: undefined
};

export default Button;
