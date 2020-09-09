"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var styles = (0, _styles.createStyles)({
  root: {
    borderRadius: '0px',
    textTransform: 'none'
  }
});
var useStyles = (0, _styles.makeStyles)(styles, {
  // name 用 Mui 开头，可以防止编译成 .jss* {}
  name: 'MuiZuiButton'
}); // eslint-disable-next-line multiline-comment-style
// 用法示例1：
// function setStyles(theme: Theme) {
//     console.log('zain>>>>>theme', theme);
//     return createStyles({
//         root: {
//             borderRadius: '0px',
//             textTransform: 'none'
//         }
//     });
// }
// export const useStyles = makeStyles((theme: Theme) => {
//     return setStyles(theme);
// }, {
//     // name 用 Mui 开头，可以防止编译成 .jss* {}
//     name: 'MuiZuiButton'
// });
// eslint-disable-next-line multiline-comment-style
// 用法示例2：
// export const useStyles = makeStyles((theme: Theme) => createStyles({
//     root: {
//         borderRadius: '0px',
//         textTransform: 'none',
//         // '&': {
//         //     '& .MuiButton-label': {
//         //     }
//         // }
//     },
//     // label: {
//     //     '&': {
//     //         textTransform: 'none'
//     //     }
//     // }
// }), {
//     // name 用 Mui 开头，可以防止编译成 .jss* {}
//     name: 'MuiZuiButton'
// });

exports.useStyles = useStyles;