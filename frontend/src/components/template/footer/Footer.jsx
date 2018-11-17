import React, { Component } from 'react';
import './footer.css'


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span>
                    Desenvolvido com 
                    <i className="fa fa-heart text-danger"></i>
                    por <strong>
                        Erislandio Soares
                    </strong>
                </span>
            </footer >
        );
    }
}

export default Footer;