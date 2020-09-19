/** @jsx jsx */
import { jsx, Box, Flex, useColorMode } from 'theme-ui';
import { useConfig, useCurrentDoc } from 'docz';

import { Edit, Menu, Sun, Github } from 'gatsby-theme-docz/src/components/Icons';

import { Logo } from '../Logo';
import { Locales } from '../Locales';
import * as styles from './styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Header = (props) => {
    // eslint-disable-next-line react/prop-types
    const { onOpen } = props;
    const {
        repository,
        themeConfig: { showDarkModeSwitch, showMarkdownEditButton }
    } = useConfig();
    const { edit = true, ...doc } = useCurrentDoc();
    const [colorMode, setColorMode] = useColorMode();

    const toggleColorMode = () => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
    };

    return (
        <div sx={styles.wrapper} data-testid="header">
            <Box sx={styles.menuIcon}>
                <button sx={styles.menuButton} onClick={onOpen}>
                    <Menu size={25} />
                </button>
            </Box>
            <div sx={styles.innerContainer}>
                <Logo />
                <Flex>
                    <Locales />
                    {repository && (
                        <Box sx={{ mr: 2 }}>
                            <a
                                href={repository}
                                sx={styles.headerButton}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={15} />
                            </a>
                        </Box>
                    )}
                    {showDarkModeSwitch && (
                        <button
                            sx={styles.headerButton}
                            onClick={toggleColorMode}
                            aria-label={`Switch to ${colorMode} mode`}
                        >
                            <Sun size={15} />
                        </button>
                    )}
                </Flex>
                {showMarkdownEditButton && edit && doc.link && (
                    <a
                        sx={styles.editButton}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Edit width={14} />
                        <Box sx={{ pl: 2 }}>Edit page</Box>
                    </a>
                )}
            </div>
        </div>
    );
};
