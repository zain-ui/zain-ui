/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { createGlobalState } from 'react-hooks-global-state';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { jsx } from 'theme-ui';

import { useStyles } from './style';

export const { useGlobalState } = createGlobalState({ languageGlobal: 'English' });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Locales = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [language, setLanguage] = useGlobalState('languageGlobal');

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
                    <Link className={classes.link} to="/">English</Link>
                </MenuItem>
                <MenuItem className={classes.menuItem} value="Chinese">
                    <Link className={classes.link} to="/home/home.cn">中文</Link>
                </MenuItem>
                <MenuItem className={classes.menuItem} value="Japanese">
                    <Link className={classes.link} to="/home/home.jp">日本語</Link>
                </MenuItem>
            </Select>
        </FormControl>
    );
};
