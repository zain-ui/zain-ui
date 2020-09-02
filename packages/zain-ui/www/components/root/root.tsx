import React, { Component } from 'react';
import { MenuListDev } from 'www/components/menuListDev';

export class Root extends Component {
    render(): JSX.Element {
        return (
            <div>
                <MenuListDev />
            </div>
        );
    }
}
