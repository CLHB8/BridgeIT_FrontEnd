"use strict";

import React, { Component } from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom';


class G_SeniorHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toolbar>

                <div className="media-left">
                    <img src="https://i.imgur.com/0ig5Y7g.png" className="media-object" style={{width: 246, height: 66}}/>
                </div>

                <span flex></span>

                <div className="media-right">
                    <Button onClick={() => this.props.history.push('/')} icon>home</Button>
                    <h2>Your Profile</h2>
                </div>

            </Toolbar>
        );
    }
};

export default withRouter(G_SeniorHeader);