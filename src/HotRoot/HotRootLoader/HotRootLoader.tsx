import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Root from 'src/Root';

class RootLoader extends Component {
    render(): JSX.Element {
        return (
            <Root />
        );
    }
}

export const HotRootLoader = hot(RootLoader);
