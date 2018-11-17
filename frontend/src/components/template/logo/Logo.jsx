import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import './Logo.css'
import logo from '../../../assets/img/logo.png'


class Logo extends Component {
    render() {
        return (
            <aside className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </aside>
        );
    }
}

export default Logo;