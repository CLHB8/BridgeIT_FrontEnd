"use strict";

import React from 'react';

import UserLogin from '../components/UserLogin';

import UserService from '../services/UserService';


export class UserLoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        UserService.login(user.username, user.password).then((data) => {
            if(UserService.isSenior()){
                this.props.history.push('/sen/WelcomePage');
            }else{
                this.props.history.push('/stu/WelcomePage');
            }
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });
    }

    render() {
        return (
          <UserLogin onSubmit={(user) => this.login(user)} error={this.state.error}></UserLogin>
        );
    }
}