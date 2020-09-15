import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {
    return createStyles({
        dark: {
            '& .MuiTableCell-root': {
                color: '#F5F6F7',
                background: 'rgb(19, 22, 31)'
            }
        },
        root: {
        },
        table: {
            minWidth: 650
        },
        head: {
            '& .MuiTableCell-head': {
                fontWeight: 600
            }
        }
    });
}, {
    // name 用 Mui 开头，可以防止编译成 .jss* {}
    name: 'MuiZuiProps'
});
