/** @jsx jsx */
import React from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import { Link } from 'gatsby';
import { useDocs, useCurrentDoc } from 'docz';
import { get } from 'lodash/fp';

import * as styles from './styles';

const getHeadings = (route, docs) => {
    const doc = docs.find((docItem) => {
        return docItem.route === route;
    });
    const headings = get('headings', doc);
    return headings ? headings.filter((heading) => {
        return heading.depth === 2;
    }) : [];
};

const getCurrentHash = () => {
    if (typeof window === 'undefined') {
        return '';
    }
    return window.location ? decodeURI(window.location.hash) : '';
};

export const NavLink = React.forwardRef(({ item, ...props }, ref) => {
    const { colorMode } = useThemeUI();
    const docs = useDocs();
    const current = useCurrentDoc();

    if (item.hidden) {
        return null;
    }

    const to = item.route;
    const headings = docs && getHeadings(to, docs);
    const isCurrent = item.route === current.route;
    const showHeadings = isCurrent && headings && headings.length > 0;
    const currentHash = getCurrentHash();
    return (
        <React.Fragment>
            <Link
                {...props}
                to={to}
                sx={styles.link(colorMode)}
                activeClassName="active"
                ref={ref}
            />
            {showHeadings &&
                headings.map((heading) => {
                    return (
                        <Link
                            key={heading.slug}
                            to={`${to}#${heading.slug}`}
                            sx={styles.smallLink(colorMode)}
                            className={currentHash === `#${heading.slug}` ? 'active' : ''}
                        >
                            {heading.value}
                        </Link>
                    );
                })}
        </React.Fragment>
    );
});
