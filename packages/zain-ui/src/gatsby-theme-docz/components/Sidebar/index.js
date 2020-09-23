/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React, { useState, useRef, useEffect } from 'react';
import { Global } from '@emotion/core';
import { jsx, Box } from 'theme-ui';
import { useMenus, useCurrentDoc } from 'docz';

import { NavSearch } from 'gatsby-theme-docz/src/components/NavSearch';

import { NavLink } from '../NavLink';
import { NavGroup } from '../NavGroup';
import { localesGlobalState } from '../Locales';
import * as styles from './styles';

export const Sidebar = React.forwardRef((props, ref) => {
    const [query, setQuery] = useState('');
    const menus = useMenus({ query });
    const currentDoc = useCurrentDoc();
    const currentDocRef = useRef();
    const handleChange = (ev) => {
        setQuery(ev.target.value);
    };

    const [language, setLanguage] = localesGlobalState.useGlobalState('languageGlobal');

    useEffect(() => {
        if (ref.current && currentDocRef.current) {
            ref.current.scrollTo(0, currentDocRef.current.offsetTop);
        }
    }, []);

    return (
        <>
            <Box onClick={props.onClick} sx={styles.overlay(props)}>
                {props.open && <Global styles={styles.global} />}
            </Box>
            <Box ref={ref} sx={styles.wrapper(props)} data-testid="sidebar">
                <NavSearch
                    placeholder="Type to search..."
                    value={query}
                    onChange={handleChange}
                />
                {/* {console.log('zain>>>>>language, menus', language, menus)} */}
                {/* {console.log('zain>>>>>currentDoc', currentDoc)} */}
                {menus &&
                    menus.map((menu) => {
                        // eslint-disable-next-line multiline-comment-style
                        // 不显示 README.md 文件，Home 文件作为替代
                        // README.md 文件，直接显示, 通过路由判断 (route: "/readme")
                        // if (menu.route && menu.route === '/readme') {
                        //     return (
                        //         <NavLink key={menu.id} item={menu}>
                        //             {menu.name}
                        //         </NavLink>
                        //     );
                        // }
                        if (!menu.route) {
                            // 包含子菜单的目录，判断子菜单语言，非当前语言的菜单不显示
                            if (menu && menu.menu && menu.menu.length > 0 && menu.menu[0].locales !== language) {
                                return null;
                            }
                            return <NavGroup key={menu.id} item={menu} sidebarRef={ref} />;
                        }
                        // 判断菜单语言，非当前语言的菜单不显示
                        if (menu.locales !== language) {
                            return null;
                        }
                        if (menu.route === currentDoc.route) {
                            return (
                                <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                                    {menu.name}
                                </NavLink>
                            );
                        }
                        return (
                            <NavLink key={menu.id} item={menu}>
                                {menu.name}
                            </NavLink>
                        );
                    })}
            </Box>
        </>
    );
});
