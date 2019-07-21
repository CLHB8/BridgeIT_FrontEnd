"use strict";

import React from 'react';

import Edit from '../components/Edit';

import UserService from '../services/UserService';


export class UserEditProfileView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    edit(user) {
        UserService.updateEdit(user)
    }

    render() {
        return (
            <Edit onSubmit={(user) => this.edit(user)} error={this.state.error}></Edit>
        );
    }
}