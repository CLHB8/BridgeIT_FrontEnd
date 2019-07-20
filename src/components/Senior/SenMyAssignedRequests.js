"use strict";

import React from 'react';

import {SenMyAssignedRequestsList} from './SenMyAssignedRequestsList';

import RequestService from '../../services/RequestService';
import UserService from "../../services/UserService";
import {Redirect} from "react-router-dom";


export class SenMyAssignedRequests extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            user: this.props.user
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        RequestService.getMyRequests().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        })
    }

    render() {
        if (UserService.isAuthenticated()) {
            return (
                <SenMyAssignedRequestsList data={this.state.data} user={this.state.user}/>
            );
        }
        else
        {
            return (<Redirect to={'../login'}/>)
        }
    }
}