/** @jsx jsx */
import React, { useEffect } from 'react';
import { useCurrentDoc } from 'docz';
import { Link } from 'gatsby';
import { createGlobalState } from 'react-hooks-global-state';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import { jsx, useThemeUI } from 'theme-ui';

/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */

import { useStyles } from './style';

export const localesGlobalState = createGlobalState({ languageGlobal: 'English' });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Locales = () => {
    const classes = useStyles();
    const { colorMode } = useThemeUI();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const currentDoc = useCurrentDoc();
    const [route, setRoute] = React.useState({ english: '/', chinese: '/home/home.cn', japanese: '/home/home.jp' });
    const [language, setLanguage] = localesGlobalState.useGlobalState('languageGlobal');

    const handleToggle = () => {
        setOpen((prevOpen) => {
            return !prevOpen;
        });
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    /**
     * 切换多语言
     */
    const handleLocales = (lang) => {
        setLanguage(lang);
        // console.log('zain>>>>>languageGlobal', language);
    };

    /**
     * 获取语言缩写
     */
    const languageAbbreviation = () => {
        const lang = {
            English: 'EN',
            Chinese: 'CN',
            Japanese: 'JP'
        };
        return lang[language];
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            if (anchorRef && anchorRef.current) {
                anchorRef.current.focus();
            }
        }
        prevOpen.current = open;

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
    }, [currentDoc, open, setLanguage]);

    return (
        <div className={classes.root}>
            <Button
                className={`${classes.button}${colorMode === 'dark' ? ` ${classes.buttonDark}` : ''}`}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >{languageAbbreviation()}</Button>
            <Popper
                className={classes.popper}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                disablePortal
                // placement="left-start"
            >
                {({ TransitionProps, placement }) => {
                    return (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper className={`${classes.paper}${colorMode === 'dark' ? ` ${classes.paperDark}` : ''}`}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem
                                            className={`${classes.menuItem}${colorMode === 'dark' ? ` ${classes.menuItemDark}` : ''}`}
                                            onClick={(event) => {
                                                handleClose(event);
                                                handleLocales('English');
                                            }}
                                        >
                                            <Link
                                                className={`${classes.link}${colorMode === 'dark' ? ` ${classes.linkDark}` : ''}`}
                                                to={route.english}
                                            >English</Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.menuItem}${colorMode === 'dark' ? ` ${classes.menuItemDark}` : ''}`}
                                            onClick={(event) => {
                                                handleClose(event);
                                                handleLocales('Chinese');
                                            }}
                                        >
                                            <Link
                                                className={`${classes.link}${colorMode === 'dark' ? ` ${classes.linkDark}` : ''}`}
                                                to={route.chinese}
                                            >中文</Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.menuItem}${colorMode === 'dark' ? ` ${classes.menuItemDark}` : ''}`}
                                            onClick={(event) => {
                                                handleClose(event);
                                                handleLocales('Japanese');
                                            }}
                                        >
                                            <Link
                                                className={`${classes.link}${colorMode === 'dark' ? ` ${classes.linkDark}` : ''}`}
                                                to={route.japanese}
                                            >日本語</Link>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    );
                }}
            </Popper>
        </div>
    );
};
