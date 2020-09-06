/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import React from 'react'
import { useConfig } from 'docz'
import { LiveProvider, LiveError, LivePreview, LiveEditor } from 'react-live'
import { Resizable } from 're-resizable'
import copy from 'copy-text-to-clipboard'

import { Wrapper } from 'gatsby-theme-docz/src/components/Playground/Wrapper'
import * as Icons from 'gatsby-theme-docz/src/components/Icons'
import * as styles from './styles'

import { usePrismTheme } from '~utils/theme'

// import themeDark from 'prism-react-renderer/themes/dracula'
// import themeDark from 'prism-react-renderer/themes/duotoneDark'
// import themeLight from 'prism-react-renderer/themes/duotoneLight'
// import themeLight from 'prism-react-renderer/themes/github'
// import themeDark from 'prism-react-renderer/themes/nightOwl'
// import themeLight from 'prism-react-renderer/themes/nightOwlLight'
// import themeDark from 'prism-react-renderer/themes/oceanicNext'
// import themeDark from 'prism-react-renderer/themes/palenight'
// import themeDark from 'prism-react-renderer/themes/shadesOfPurple'
// import themeDark from 'prism-react-renderer/themes/synthwave84'
// import themeDark from 'prism-react-renderer/themes/ultramin'
// import themeDark from 'prism-react-renderer/themes/vsDark'

const getResizableProps = (width, setWidth) => ({
    minWidth: 260,
    maxWidth: '100%',
    size: {
        width: width,
        height: 'auto',
    },
    style: {
        margin: 0,
        marginRight: 'auto',
    },
    enable: {
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
    },
    onResizeStop: (e, direction, ref) => {
        setWidth(ref.style.width)
    },
})

const transformCode = code => {
    if (code.startsWith('()') || code.startsWith('class')) return code
    return `<React.Fragment>${code}</React.Fragment>`
}

export const Playground = ({ code, scope, language, wrapper, useScoping = false }) => {
    const {
        themeConfig: { showPlaygroundEditor, showLiveError, showLivePreview },
    } = useConfig()

    // Makes sure scope is only given on mount to avoid infinite re-render on hot reloads
    const [scopeOnMount] = React.useState(scope)
    const [showingCode, setShowingCode] = React.useState(showPlaygroundEditor)
    const [width, setWidth] = React.useState('100%')
    const resizableProps = getResizableProps(width, setWidth)

    const copyCode = () => {
        copy(code)
    }
    const toggleCode = () => setShowingCode(s => !s)

    const openUrl = (type) => {
        if (wrapper) {
            const urls = wrapper.split('|')
            if (type === 'stackblitz') {
                if (urls.length > 1) {
                    window.open(urls[1]);
                }
            } else if (type === 'codesandbox') {
                if (urls.length > 0) {
                    window.open(urls[0]);
                }
            }
        }
    }

    // 当前主题类型
    const { colorMode } = useThemeUI()
    const themeDocz = usePrismTheme()
    // const theme = colorMode === 'light' ? themeLight : themeDark
    const theme = colorMode === 'light' ? themeDocz : themeDocz

    return (
        <Resizable {...resizableProps} data-testid="playground">
            <LiveProvider
                code={code}
                scope={scopeOnMount}
                transformCode={transformCode}
                language={language}
                theme={theme}
            >
                <div sx={styles.previewWrapper}>
                    <Wrapper
                        content="preview"
                        useScoping={useScoping}
                        showingCode={showingCode}
                    >
                        {showLivePreview && (
                            <LivePreview sx={styles.preview} data-testid="live-preview" />
                        )}
                    </Wrapper>
                    <div sx={styles.buttons}>
                        <button sx={styles.button} onClick={toggleCode}>
                            <Icons.Code size={18} />
                        </button>
                        <button sx={styles.button} onClick={() => openUrl('codesandbox')}>
                            <svg aria-label="CodeSandbox" role="presentation" x="0px" y="0px" width="18" height="18" viewBox="0 0 452 452">
                                <path fill="#67788A" fillRule="evenodd" clipRule="evenodd" d="M226 228.286V447.293C229.813 447.293 232.319 446.466 235.742 444.51L411.107 344.302C418.031 340.333 420.855 334.19 420.855 326.208V123.008C420.855 119.004 420.011 116.609 418.066 113.266L231.61 218.619C228.141 220.601 226 224.29 226 228.286ZM323.425 354.044C323.425 359.611 321.337 362.395 316.466 365.178L258.011 398.581C253.836 401.365 248.269 399.973 248.269 394.406V245.485C248.269 241.501 251.775 236.338 255.227 234.351L388.839 157.803C392.55 155.667 395.797 159.088 395.797 163.37V242.701C395.797 246.814 393.859 250.509 390.23 252.444L330.384 284.455C326.755 286.39 323.425 290.085 323.425 294.197V354.044Z"></path>
                                <path fill="#67788A" fillRule="evenodd" clipRule="evenodd" d="M31.1505 326.208V123.008C31.1505 115.017 35.3465 107.488 42.2848 103.523L212.082 7.49014C215.74 5.55143 221.825 4.7066 226 4.7066C230.175 4.7066 236.617 5.74065 239.918 7.49017L408.324 103.523C411.656 105.492 416.181 110.027 418.066 113.266L231.567 219.041C228.098 221.023 226 224.788 226 228.784V447.293C222.187 447.293 218.289 446.466 214.866 444.51L43.6766 345.693C36.7382 341.729 31.1505 334.2 31.1505 326.208ZM56.2026 163.37V242.701C56.2026 248.269 57.5944 251.052 63.1615 253.836L121.616 287.238C127.184 290.022 128.575 294.197 128.575 298.373V354.044C128.575 359.611 129.967 362.395 135.534 365.178L193.989 398.581C199.556 401.364 203.732 399.973 203.732 394.406V245.485C203.732 241.31 202.34 237.134 196.773 234.351L65.9451 159.194C61.7697 156.411 56.2026 157.803 56.2026 163.37ZM284.455 68.7286L232.959 97.956C228.784 100.74 223.217 100.74 219.041 97.956L167.545 68.7286C164.155 66.8127 159.806 66.8225 156.411 68.7286L92.3889 104.915C86.8218 107.699 86.8218 113.266 92.3889 116.049L220.433 189.814C223.86 191.776 228.14 191.776 231.567 189.814L359.611 116.049C363.787 113.266 365.178 107.699 359.611 104.915L295.589 68.7286C292.194 66.8225 287.845 66.8127 284.455 68.7286Z"></path>
                            </svg>
                        </button>
                        <button sx={styles.button} onClick={() => openUrl('stackblitz')}>
                            <svg width="18" height="18" viewBox="0 0 23 34">
                                <path fill="#67788A" fillRule="nonzero" stroke="none" strokeWidth="1" d="M0 19.9187087L9.87007874 19.9187087 4.12007874 34 23 13.9612393 13.0846457 13.9612393 18.7893701 0z"></path>
                            </svg>
                        </button>
                        <button title="复制代码" sx={styles.button} onClick={copyCode}>
                            <Icons.Clipboard size={18}/>
                        </button>
                    </div>
                </div>
                {showingCode && (
                    <Wrapper
                        content="editor"
                        useScoping={useScoping}
                        showingCode={showingCode}
                    >
                        <div sx={styles.editor(theme)}>
                            <LiveEditor data-testid="live-editor" />
                        </div>
                    </Wrapper>
                )}
                {showLiveError && (
                    <LiveError sx={styles.error} data-testid="live-error" />
                )}
            </LiveProvider>
        </Resizable>
    )
}
