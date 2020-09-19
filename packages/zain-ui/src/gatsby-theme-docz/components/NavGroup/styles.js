export const wrapper = {
    my: 3
};

export const sublinkWrapper = {
    ml: 2
};

export const title = (colorMode) => {
    return {
        mb: 1,
        fontSize: 2,
        fontWeight: 500,
        color: 'sidebar.navGroup',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: colorMode === 'dark' ? '#13161F' : 'rgba(0, 0, 0, 0.04)'
        }
    };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const chevron = ({ active }) => {
    return {
        ml: 1,
        flexShrink: 0,
        alignSelf: 'baseline',
        transform: `rotateX(${active ? 180 : 0}deg)`,
        transformOrigin: 'center',
        transition: 'transform .3s ease-in-out'
    };
};
