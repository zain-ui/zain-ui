import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {
    return createStyles({
        root: {
        },
        button: {
            minWidth: '39px',
            height: '39px',
            marginRight: '8px',
            borderRadius: '9999px',
            transition: '0s',
            color: '#FFFFFF',
            background: '#0B5FFF',
            '&:hover': {
                background: '#0B5FFF'
            }
        },
        buttonDark: {
            color: '#FFFFFF',
            background: '#1FB6FF',
            '&:hover': {
                background: '#1FB6FF'
            }
        },
        popper: {
            zIndex: '999'
        },
        paper: {
            opacity: '1 !important',
            transform: 'none !important',
            visibility: 'unset !important',
            borderRadius: 0
        },
        paperDark: {
            background: '#1D2330'
        },
        menuItem: {
            padding: 0
        },
        menuItemDark: {
            '&:hover': {
                background: '#13161F'
            }
        },
        link: {
            width: '80px',
            padding: '4px 16px',
            textDecoration: 'none',
            color: '#000'
        },
        linkDark: {
            color: '#67788A'
        }
    });
}, {
    name: 'MuiZuiLocales'
});
