/** @jsx jsx */
import React, { useEffect } from 'react';
import { useCurrentDoc } from 'docz';
import { Link } from 'gatsby';
import { createGlobalState } from 'react-hooks-global-state';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { jsx } from 'theme-ui';

import { useStyles } from './style';

export const localesGlobalState = createGlobalState({ languageGlobal: 'English' });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Locales = () => {
    const classes = useStyles();
    const currentDoc = useCurrentDoc();
    const [open, setOpen] = React.useState(false);
    const [route, setRoute] = React.useState({ english: '/', chinese: '/home/home.cn', japanese: '/home/home.jp' });
    const [language, setLanguage] = localesGlobalState.useGlobalState('languageGlobal');

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    /**
     * 切换多语言
     */
    const handleLocales = (event) => {
        setLanguage(event.target.value);
        // console.log('zain>>>>>languageGlobal', event.target.value);
    };

    useEffect(() => {
        // 组件第一次渲染后，设置当前页面语言
        if (currentDoc && currentDoc.locales) {
            setLanguage(currentDoc.locales);
        }
        // 计算所有语言下次切换的路由 route
        if (currentDoc && currentDoc.route) {
            if (currentDoc.route === '/' || currentDoc.route.indexOf('/home') === 0) {
                setRoute({
                    english: '/',
                    chinese: '/home/home.cn',
                    japanese: '/home/home.jp'
                });
            } else {
                const index = currentDoc.route.lastIndexOf('.');
                const routePart = currentDoc.route.substring(0, index);
                setRoute({
                    english: `${routePart}.en`,
                    chinese: `${routePart}.cn`,
                    japanese: `${routePart}.jp`
                });
            }
        }
    }, [currentDoc, setLanguage]);

    return (
        <FormControl className={classes.root}>
            <InputLabel
                id="demo-controlled-open-select-label"
                defaultChecked={true}
                defaultValue="English"
            >Locales</InputLabel>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={language}
                onChange={handleLocales}
            >
                <MenuItem className={classes.menuItem} value="English">
                    <Link className={classes.link} to={route.english}>English</Link>
                </MenuItem>
                <MenuItem className={classes.menuItem} value="Chinese">
                    <Link className={classes.link} to={route.chinese}>中文</Link>
                </MenuItem>
                <MenuItem className={classes.menuItem} value="Japanese">
                    <Link className={classes.link} to={route.japanese}>日本語</Link>
                </MenuItem>
            </Select>
        </FormControl>
    );
};
