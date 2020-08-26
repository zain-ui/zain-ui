import './TitleBar.less';
import React, { Component, ReactNode } from 'react';

interface TitleBarProps {
    /** 组件根元素新增 className */
    className?: string;
    /** 标题栏文本 */
    titleText?: string;
    /** title 图标组件 */
    titleIcon?: ReactNode;
    /** 是否显示最小化按钮 */
    showMinimizeButton?: boolean;
    /** 是否显示最大化或还原按钮 */
    showMaxRestore?: boolean;
    /** 窗口是否是最大化状态（1. 用来切换最大化和取消最大化按钮。2.调整 ZuiTitleBar-drag 的样式，防止窗口最大化情况下，周围 4px 无法拖拽使窗口变小） */
    isMaximized?: boolean;
    /** 菜单栏部位组件 */
    children?: ReactNode;
    /** 监听单击最小化按钮 */
    onMinimize?: () => void;
    /** 监听单击最大化和重置按钮 */
    onMaxRestore?: () => void;
    /** 监听单击关闭按钮 */
    onClose?: () => void;
}

/**
 * 主页面程序入口组件
 */
class TitleBar extends Component<TitleBarProps> {
    render(): JSX.Element {
        return (
            <div className={`ZuiTitleBar-root${this.props.className ? ` ${this.props.className}` : ''}`}>
                <div className={`${this.props.isMaximized ? 'ZuiTitleBar-drag-maximize' : 'ZuiTitleBar-drag'}`} />
                <div className="ZuiTitleBar-icon">
                    {this.props.titleIcon}
                </div>
                <div className="ZuiTitleBar-menu">
                    {this.props.children}
                </div>
                <div className="ZuiTitleBar-info">
                    {this.props.titleText}
                </div>
                <div className="ZuiTitleBar-controls">
                    {
                        this.props.showMinimizeButton !== false &&
                        <div
                            className="ZuiTitleBar-button"
                            onClick={() => { this.props.onMinimize(); }}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path d="M14 8v1H3V8h11z"/>
                            </svg>
                        </div>
                    }
                    {
                        this.props.showMaxRestore !== false &&
                        <div
                            className="ZuiTitleBar-button"
                            onClick={() => { this.props.onMaxRestore(); }}
                        >
                            {
                                this.props.isMaximized ?
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                        <path d="M3 5v9h9V5H3zm8 8H4V6h7v7z"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 5h1V4h7v7h-1v1h2V3H5v2z"/>
                                    </svg> :
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                        <path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/>
                                    </svg>
                            }
                        </div>
                    }
                    <div
                        className="ZuiTitleBar-button ZuiTitleBar-close"
                        onClick={() => { this.props.onClose(); }}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            {/* eslint-disable-next-line max-len */}
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleBar;
