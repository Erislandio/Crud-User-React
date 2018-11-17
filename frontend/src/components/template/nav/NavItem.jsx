import React, { Component } from 'react';

class NavItem extends Component {
    render() {
        return (
           <a href={this.props.link} >
                <i className={`fa fa-${this.props.icon}`}>
                </i>
                {this.props.title}
           </a> 
        );
    }
}

export default NavItem;