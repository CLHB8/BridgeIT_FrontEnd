"use strict";

import React from 'react';

import SeniorSignup from '../components/Senior/SeniorRegister';

import UserService from '../services/UserService';


export class SeniorSignupView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    register(user) {
        UserService.register(user).then((data) => {
            this.props.history.push('/sen/WelcomePage');
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        })
    }

    render() {
        return (
            <SeniorSignup onSubmit={(user) => this.register(user)} error={this.state.error}></SeniorSignup>
        );
    }
}