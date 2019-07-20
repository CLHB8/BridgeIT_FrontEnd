"use strict";

import React from 'react';

import { TaskListMini } from '../components/Student/TaskListMini';

import RequestService from '../services/RequestService';
import UserService from "../services/UserService";
import {Redirect, withRouter} from "react-router-dom";


export class TaskListMiniView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        RequestService.getRequests().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    deleteRequest(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        RequestService.deleteRequest(id).then((message) => {

            let requestIndex = this.state.data.map(request => request['_id']).indexOf(id);
            let requests = this.state.data;
            requests.splice(requestIndex, 1);
            this.setState({
                data: [...requests],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>
                
                );
            
        }
return(                 
            <TaskListMini data={this.state.data.reverse().slice(0,5)} onDelete={(id) => this.deleteRequest(id)}/>
            
        );
    }
}

export default withRouter(TaskListMiniView);
