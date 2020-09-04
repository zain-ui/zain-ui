import React from 'react';
import { Button } from 'zain-ui/button';
import 'zain-ui/button/style';
import './buttonDev.less';

/**
 * 按钮组件开发
 */
export function ButtonDev(): JSX.Element {
    return (
        <div className="ZuiButton-dev-root">
            <Button>zain</Button>
            <Button>primary</Button>
            <Button disabled>disabled</Button>
            <Button size='small'>small</Button>
            <Button size='medium'>medium</Button>
            <Button size='large'>large</Button>
        </div>
    )
}
