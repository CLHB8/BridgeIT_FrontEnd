"use strict";

import React from 'react';

import {StuMyAssignedRequestsList} from './StuMyAssignedRequestsList';

import RequestService from '../../services/RequestService';
import UserService from "../../services/UserService";
import {Redirect} from "react-router-dom";


export default class StuMyAssignedRequests extends React.Component {

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
        RequestService.getRequestsWhereStuIsAssigned().then((data) => {
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
                <StuMyAssignedRequestsList data={this.state.data} user={this.props.user}/>
            );
        }
        else
        {
            return (<Redirect to={'../login'}/>)
        }
    }
}