import React, { Component, Fragment } from 'react';
import { AppContainer } from 'react-hot-loader';
import { HotRootLoader } from 'src/HotRoot/HotRootLoader';

const HotContainer = process.env.PLAIN_HMR ? Fragment : AppContainer;

export class HotRoot extends Component {
    render(): JSX.Element {
        return (
            <HotContainer>
                <HotRootLoader />
            </HotContainer>
        );
    }
}
