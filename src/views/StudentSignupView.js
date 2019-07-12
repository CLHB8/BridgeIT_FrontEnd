"use strict";

import React from 'react';

import StudentSignup from '../components/StudentSignup';

import UserService from '../services/UserService';


export class StudentSignupView extends React.Component {

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
            <StudentSignup onSubmit={(user) => this.signup(user)} error={this.state.error}></StudentSignup>
        );
    }
}