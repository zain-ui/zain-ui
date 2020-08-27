import React, { Component } from 'react';
import { Home } from 'src/components/Home';

export class Root extends Component {
    render(): JSX.Element {
        return (
            <div className="Zui-root">
                <Home />
            </div>
        );
    }
}
