/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const link = (colorMode) => {
    return {
        py: 2,
        display: 'block',
        color: 'sidebar.navGroup',
        textDecoration: 'none',
        fontSize: 2,
        '&.active': {
            color: 'sidebar.navLinkActive'
        },
        '&:hover': {
            backgroundColor: colorMode === 'dark' ? '#13161F' : 'rgba(0, 0, 0, 0.04)'
        }
    };
};

export const smallLink = (colorMode) => {
    return {
        ...link(colorMode),
        ml: 3,
        fontSize: 1,
        position: 'relative',
        color: 'sidebar.tocLink',
        '&.active': {
            color: 'sidebar.tocLinkActive'
        },
        '&.active::before': {
            content: '""',
            position: 'absolute',
            display: 'block',
            top: '10px',
            left: -2,
            height: '1rem',
            backgroundColor: 'primary',
            transition: 'width 200ms ease 0s',
            width: '2px',
            borderRadius: 1
        }
    };
};
