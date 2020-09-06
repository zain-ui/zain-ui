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
            <Button variant="outlined">outlined</Button>
            <Button variant="contained" size='small'>small</Button>
            <Button variant="contained" size='medium'>medium</Button>
            <Button variant="contained" size='large'>large</Button>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
        </div>
    )
}
