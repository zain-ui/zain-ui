import { createStyles, makeStyles } from '@material-ui/core/styles';
export var useStyles = makeStyles(function (theme) {
  return createStyles({
    root: {
      borderRadius: '0px',
      textTransform: 'none' // '&': {
      //     '& .MuiButton-label': {
      //     }
      // }

    } // label: {
    //     '&': {
    //         textTransform: 'none'
    //     }
    // }

  });
}, {
  // name 用 Mui 开头，可以防止编译成 .jss* {}
  name: 'MuiZuiButton'
});