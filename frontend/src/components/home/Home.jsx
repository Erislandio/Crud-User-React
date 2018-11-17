import React, { Component } from 'react';
import Main from '../template/main/Main';



class Home extends Component {
    render() {
        return (
            <Main icon='home' title="Início">
                <div className="display-4">
                    Bem Vindo
                </div>
                <hr />
                <p className="mb-0">
                    Sistema de cadastro desenvolvido em React.js
                </p>
            </Main>
        );
    }
}

export default Home;