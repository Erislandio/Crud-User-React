import React, { Component } from 'react';
import Main from '../template/main/Main'


class UserCrud extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const headerProps = {
            icon: 'users',
            title: "Usuários",
            subtitle: "Cadastro de usuários {CRUD}"
        }

        return (
            <Main {...headerProps}>
                Cadastro de usuários
           </Main>
        );
    }
}

export default UserCrud;