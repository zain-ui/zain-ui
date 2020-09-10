import { createStyles, makeStyles } from '@material-ui/core/styles';

const styles = createStyles({
    root: {
        borderRadius: '0px',
        textTransform: 'none'
    }
});

export const useStyles = makeStyles(styles, {
    // name 用 Mui 开头，可以防止编译成 .jss* {}
    name: 'MuiZuiMenu'
});
