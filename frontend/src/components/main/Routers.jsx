import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from '../home/Home';
import UserCrud from '../user/UserCrud';

class Routers extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={UserCrud} />
                <Redirect from="*" to="/" />
            </Switch>
        );
    }
}

export default Routers;