/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link, useConfig } from 'docz'
import * as styles from './styles'
import logoImg from './zain-ui-blue-1.png'

export const Logo = () => {
    const config = useConfig()
    return (
        <Flex sx={styles.logo} alignItems="center" data-testid="logo">
            <Link sx={styles.link} to="/">
                <img sx={styles.img} src={logoImg} alt="Zain UI Logo"/>
                <span sx={styles.span}>{config.title}</span>
            </Link>
        </Flex>
    )
}
