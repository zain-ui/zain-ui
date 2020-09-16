import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {
    return createStyles({
        root: {
            top: '-5px',
            height: '10px',
            marginRight: '8px'
        },
        menuItem: {
            padding: 0
        },
        link: {
            width: '100px',
            padding: '5px 0',
            paddingLeft: '16px',
            textDecoration: 'none',
            color: 'rgba(0, 0, 0, 0.87)'
        }
    });
}, {
    name: 'MuiZuiLocales'
});
