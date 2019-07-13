"use strict";

import React from 'react';

import SeniorSignup from '../components/SeniorSignup';

import UserService from '../services/UserService';


export class SeniorSignupView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    signup(user) {
        UserService.register(user.username, user.password).then((data) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        })
    }

    render() {
        return (
            <SeniorSignup onSubmit={(user) => this.signup(user)} error={this.state.error}></SeniorSignup>
        );
    }
}