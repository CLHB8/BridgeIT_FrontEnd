"use strict";

import React from 'react';

import StudentSignup from '../components/Student/StudentRegister';

import UserService from '../services/UserService';


export class StudentSignupView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    register(user) {
        UserService.register(user).then((data) => {
            this.props.history.push('/stu/WelcomePage');
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        })
    }

    render() {
        return (
            <StudentSignup onSubmit={(user) => this.register(user)} error={this.state.error}></StudentSignup>
        );
    }
}