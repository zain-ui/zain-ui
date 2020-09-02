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
        console.log('zain>>>>>language', language, theme, wrapper.split('|'))
    }
    const toggleCode = () => setShowingCode(s => !s)

    const openUrl = () => {
        const urls = wrapper.split('|')
        if (urls.length > 0) {
            window.open(urls[0]);
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
                        <button sx={styles.button} onClick={openUrl}>
                            <svg width="18" height="18" viewBox="0 0 23 34">
                                <path fill="#67788A" fillRule="nonzero" stroke="none" strokeWidth="1" d="M0 19.9187087L9.87007874 19.9187087 4.12007874 34 23 13.9612393 13.0846457 13.9612393 18.7893701 0z"></path>
                            </svg>
                        </button>
                        <button sx={styles.button} onClick={copyCode}>
                            <Icons.Clipboard size={18} />
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
