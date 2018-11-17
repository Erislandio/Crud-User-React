import './App.css'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


import Footer from '../template/footer/Footer';
import Nav from '../template/nav/Nav';
import Main from '../template/main/Main'
import Logo from '../template/logo/Logo';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Logo />
                <Nav />
                <Main icon='home' title="Início" />
                <Footer />
            </div>
        );
    }
}

export default App;