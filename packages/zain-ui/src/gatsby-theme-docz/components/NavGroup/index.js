/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useCurrentDoc } from 'docz';

import { NavLink } from 'gatsby-theme-docz/src/components/NavLink';
import { ChevronDown } from 'gatsby-theme-docz/src/components/Icons';

import * as styles from './styles';

/* eslint-disable react/prop-types */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const NavGroup = ({ item, sidebarRef }) => {
    const currentDoc = useCurrentDoc();
    const currentDocRef = React.useRef();
    const { name, menu } = item;
    const [subheadingsVisible, setShowsubheadings] = React.useState(currentDoc.menu === name);
    const toggleSubheadings = () => {
        return setShowsubheadings(!subheadingsVisible);
    };
    React.useEffect(() => {
        if (sidebarRef.current && currentDocRef.current) {
            sidebarRef.current.scrollTo(0, currentDocRef.current.offsetTop);
        }
    }, []);
    return (
        <div sx={styles.wrapper} data-testid="nav-group">
            <div sx={styles.title} onClick={toggleSubheadings}>
                {item.name}
                <ChevronDown sx={styles.chevron({ active: subheadingsVisible })} />
            </div>
            <div sx={styles.sublinkWrapper} data-testid="nav-group-links">
                {menu &&
                    subheadingsVisible &&
                    menu.map((menuItem) => {
                        if (currentDoc.route === menuItem.route) {
                            return (
                                <NavLink key={menuItem.id} item={menuItem} ref={currentDocRef}>
                                    {menuItem.name}
                                </NavLink>
                            );
                        }
                        return (
                            <NavLink key={menuItem.id} item={menuItem}>
                                {menuItem.name}
                            </NavLink>
                        );
                    })}
            </div>
        </div>
    );
};
