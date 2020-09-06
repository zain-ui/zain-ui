import React from 'react';
import { Button } from 'zain-ui/button';
import './buttonDev.less';

/**
 * 按钮组件开发
 */
export function ButtonDev(): JSX.Element {
    return (
        <div className="ZuiButton-dev-root">
            <Button>Zain</Button>
            <Button>primary</Button>
            <Button disabled>disabled</Button>
            <Button size='small'>small</Button>
            <Button size='medium'>medium</Button>
            <Button size='large'>large</Button>
            <Button variant="outlined">outlined</Button>
        </div>
    )
}
