import React, { Component } from 'react';
import { ButtonDev } from 'www/components/buttonDev';
import { MenuListDev } from 'www/components/menuListDev';

export class Root extends Component {
    render(): JSX.Element {
        return (
            <div>
                <MenuListDev />
                <ButtonDev />
            </div>
        );
    }
}
