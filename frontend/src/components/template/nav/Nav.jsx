import './Nav.css'

import React, { Component } from 'react';
import NavItem from './NavItem';

class Nav extends Component {
    render() {
        return (
            <aside className="menu-ares">
                <nav className="menu">
                    <NavItem title="Início" icon="home" link="/" />
                    <NavItem title="Users" icon="users" link="/users" />
                </nav>
            </aside>
        );
    }
}

export default Nav;