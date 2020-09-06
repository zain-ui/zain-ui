"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
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
exports.useStyles = useStyles;