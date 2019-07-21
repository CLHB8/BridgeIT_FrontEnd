"use strict";

import React from 'react';
import {Card, Button, TextField, Grid} from 'react-md';
import {withRouter, Link} from 'react-router-dom';

import {AlertMessage} from './AlertMessage';
import Page from './Page';
import StartPage from "./Page";
import {IoIosLogIn, IoMdArrowRoundBack} from "react-icons/io";
import { CardContent, Typography } from '@material-ui/core';


const style = {maxWidth: 500};


class UserLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(value) {
        this.setState(Object.assign({}, this.state, {username: value}));
    }

    handleChangePassword(value) {
        this.setState(Object.assign({}, this.state, {password: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.onSubmit(user);
    }

    render() {
        return (
            <Page>
                <Grid container spacing={1}>
                    <Card style={style} className="md-block-centered">
                        <CardContent>
                            <Typography variant="h5">
                                Please enter your email address and password to login.
                            </Typography>
                        </CardContent>

                        <CardContent>
                        <form className="md-grid" onSubmit={this.handleSubmit}
                              onReset={() => this.props.history.goBack()}>
                            <TextField
                                label="Email Address"
                                id="LoginField"
                                type="text"
                                className="md-row"
                                
                                required={true}
                                value={this.state.username}
                                onChange={this.handleChangeUsername}
                                errorText="Email is required"/>
                            <TextField
                                label="Password"
                                id="PasswordField"
                                type="password"
                                className="md-row"
                                required={true}
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                                errorText="Password is required"/>


                                <Button id="submit" type="submit" style={{background: "#3F51B5"}}
                                        disabled={this.state.username == undefined || this.state.username == '' || this.state.password == undefined || this.state.password == '' ? true : false}
                                        className="BackAndLoginButtonLoginView"><b>Login</b><IoIosLogIn id="middleXLargeIcons"/></Button>


                            <Button id="reset" type="reset" style={{background: "#D32F2F"}}
                                    className="BackAndLoginButtonLoginView"><b>Back</b></Button>


                            <Link to={'/'} className="md-cell">Not registered yet?</Link>
                            <AlertMessage
                                className="md-row md-full-width">{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                        </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Page>
        );
    }
};

export default withRouter(UserLogin);