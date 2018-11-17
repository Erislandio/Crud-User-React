import React, { Component } from 'react';
import './Main.css'
import Header from '../header/Header'


class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header {...this.props} />
                <main className="content container-fluid">
                    <div className="p-3 mt-3">
                        {this.props.children}
                        <p className="mt-3">
                            {this.props.subtitle}
                        </p>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}



export default Main;