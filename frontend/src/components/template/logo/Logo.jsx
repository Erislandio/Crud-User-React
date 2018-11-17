import './Logo.css'
import logo from '../../../assets/img/logo.png'

import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <aside className="logo">
                <img src={logo} alt="logo" />
            </aside>
        );
    }
}

export default Logo;