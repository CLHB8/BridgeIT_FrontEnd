"use strict";

import React from 'react';

import { SenTaskHistoryList } from '../components/Senior/SenTaskHistoryList';

import RequestService from '../services/RequestService';
import UserService from "../services/UserService";
import {Redirect, withRouter} from "react-router-dom";


export class SenTaskHistoryListView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        RequestService.getMyTaskHistory().then((data) => {
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
                <SenTaskHistoryList data={this.state.data}/>
            );
        }
        else
        {
            return (<Redirect to={'../login'}/>)
        }
    }
}

export default withRouter(SenTaskHistoryListView);