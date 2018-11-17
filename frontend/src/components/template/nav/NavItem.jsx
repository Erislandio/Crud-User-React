import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NavItem extends Component {
    render() {
        return (
           <Link to={this.props.link} >
                <i className={`fa fa-${this.props.icon}`}>
                </i>
                {this.props.title}
           </Link> 
        );
    }
}

export default NavItem;