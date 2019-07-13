"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'

import KebabMenu from './KebabMenu';


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="GenericHeader">
                <div className="logo">
                    <img onClick={() => this.props.history.push('/')} src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 143, height: 44}}/>
                </div>
                <div className="HeaderReadOut">
                    <button className="SHButton"><i className="material-icons">play_circle_filled</i> Have this read aloud!</button>
                </div>
                <div className="HeaderLogIn">
                    <button className="SignInButton"><i className="material-icons">input</i> Log In</button>
                </div>
            </div>
        );
    }
};


export default withRouter(Header);