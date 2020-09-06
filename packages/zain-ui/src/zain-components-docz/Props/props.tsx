import React from 'react';
import { useThemeUI } from 'theme-ui'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './style';

interface UseThemeUIType {
    colorMode: string;
    emotionVersion: string;
    theme: any;
    components: Object;
    setColorMode: Function;
}

/**
 * 菜单列表，每项具体内容
 */
export class PropsItems {
    name: string;
    type: string;
    default: string;
    description: string;
}

export interface ZuiPropsProps {
    /** props具体内容 */
    propsItems?: PropsItems[];
}

interface ZuiPropsComponent extends React.ForwardRefExoticComponent<ZuiPropsProps & React.RefAttributes<HTMLElement>> {
}

const ZuiPropsInternal: React.ForwardRefRenderFunction<unknown, ZuiPropsProps> = (props, ref) => {
    const {
        propsItems
    } = props;

    const classes = useStyles();

    const propsRef = (ref as any) || React.createRef<HTMLElement>();

    const useTheme = useThemeUI() as UseThemeUIType;

    return (
        <div
            className={`${useTheme.colorMode === 'dark' ? classes.dark : ''} ${classes.root}`}
            ref={propsRef}
        >
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Default</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {propsItems && propsItems.map((value: PropsItems, index: number) => (
                            <TableRow key={index} hover={true}>
                                <TableCell component="th" scope="row">
                                    {value.name}
                                </TableCell>
                                <TableCell>{value.type}</TableCell>
                                <TableCell>{value.default}</TableCell>
                                <TableCell>{value.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const ZuiProps = React.forwardRef<unknown, ZuiPropsProps>(ZuiPropsInternal) as ZuiPropsComponent;

ZuiProps.displayName = 'ZuiProps';

ZuiProps.defaultProps = {
};

export default ZuiProps;
