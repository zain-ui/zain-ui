import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        borderRadius: '0px',
        textTransform: 'none',
        // '&': {
        //     '& .MuiButton-label': {
        //     }
        // }
    },
    // label: {
    //     '&': {
    //         textTransform: 'none'
    //     }
    // }
}), {
    // name 用 Mui 开头，可以防止编译成 .jss* {}
    name: 'MuiZuiButton'
});
