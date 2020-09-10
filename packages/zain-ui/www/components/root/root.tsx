import React, { Component } from 'react';
import { ButtonDev } from 'www/components/buttonDev';
import { MenuDev } from 'www/components/MenuDev';
import { MenuListDev } from 'www/components/menuListDev';

export class Root extends Component {
    render(): JSX.Element {
        return (
            <div>
                <MenuDev />
                <MenuListDev />
                <ButtonDev />
            </div>
        );
    }
}
