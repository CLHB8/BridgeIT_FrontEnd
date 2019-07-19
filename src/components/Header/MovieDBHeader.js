"use strict";

import React from 'react';
import {Toolbar, Button, Grid} from 'react-md';
import { withRouter } from 'react-router-dom'

import KebabMenu from '../KebabMenu';
import StartPage from "../Page";


class MovieDBHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toolbar
                colored
                nav={<Grid container spacing={2}><Button onClick={() => this.props.history.push('/')} icon>home</Button>;
                    <img onClick={() => this.props.history.push('/')} src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 143, height: 44}}/></Grid>}
                title={this.props.title}
                actions={<KebabMenu id="toolbar-colored-kebab-menu" />}>
            </Toolbar>
        );
    }
};

export default withRouter(MovieDBHeader);