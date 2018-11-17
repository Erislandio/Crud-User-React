import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { HashRouter, Router } from 'react-router-dom';


import Footer from '../template/footer/Footer';
import Nav from '../template/nav/Nav';
import Logo from '../template/logo/Logo';
import Routers from './Routers';
import './App.css'



class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="app">
                    <Logo />
                    <Nav />
                    <Routers />
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

export default App;