import * as mixins from 'gatsby-theme-docz/src/utils/mixins'

export const editor = theme => ({
    p: 2,
    background: theme.plain.backgroundColor,
    borderTop: 0,
    fontFamily: 'monospace',
    fontSize: 16,
    '* > textarea:focus': {
        outline: 'none',
    },
    maxHeight: 300,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        // 滚动条整体样式
        // 定义纵向滚动条宽度
        width: 10,
        // 定义横向滚动条高度
        height: 10
    },
    '&::-webkit-scrollbar-thumb': {
        // 动条内部滑块
        borderRadius: 8,
        backgroundColor: 'hsla(220, 4%, 58%, 0.3)',
        transition: '0.3s'
    },
    '&::-webkit-scrollbar-thumb:hover': {
        // 鼠标悬停滚动条内部滑块
        background: '#bbb'
    },
    '&::-webkit-scrollbar-track': {
        // 滚动条内部轨道
        borderRadius: 8,
        background: theme.plain.backgroundColor
    }
})

export const error = {
    m: 0,
    py: 2,
    px: 3,
    bg: '#FF4757',
    fontSize: 1,
    color: 'white',
    whiteSpace: 'pre-wrap',
}

export const previewWrapper = {
    position: 'relative',
}

export const wrapper = () => ({
    height: 'auto',
    display: 'block',
    minHeight: '100%',
    width: 'calc(100% - 2px)',
    bg: 'playground.bg',
})

export const wrapperBorder = (content, showingCode) => {
    let borderRadius = 4
    if (showingCode) {
        borderRadius = content === 'preview' ? '4px 4px 0 0' : '0 0 4px 4px'
    }

    return {
        border: t => `1px solid ${t.colors.playground.border}`,
        borderTop: content === 'editor' ? 0 : undefined,
        borderRadius,
    }
}

export const preview = {
    margin: 0,
    padding: '20px',
    '& > .MuiZuiButton-root': {
        mr: 3,
        mb: 3
    }
}

export const buttons = {
    zIndex: 9,
    display: 'flex',
    position: 'absolute',
    bottom: -26,
    right: 3,
}

export const button = {
    ...mixins.ghostButton,
    display: 'flex',
    alignItems: 'center',
    py: 1,
    p: 2,
    bg: 'border',
    color: 'muted',
    borderRadius: '0 0 3px 3px',
    '& ~ &': {
        ml: 2
    },
}

export const link = {
    py: 0,
    ml: 1,
    height: 22,
}
