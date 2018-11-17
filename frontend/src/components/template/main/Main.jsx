import React, { Component } from 'react';
import './Main.css'
import Header from '../header/Header'


class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="content">
                    Main
                </main>
            </React.Fragment>
        );
    }
}



export default Main;