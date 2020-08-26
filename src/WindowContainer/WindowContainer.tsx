import React, { Component } from 'react';
import './WindowContainer.less';

interface WindowContainerProps {
    children?: React.ReactNode
}

/**
 * 窗口容器组件
 */
class WindowContainer extends Component<WindowContainerProps> {
    render(): JSX.Element {
        return (
            <div className="ZuiWindowContainer-root">
                {this.props.children}
            </div>
        );
    }
}

export default WindowContainer;
