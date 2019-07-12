"use strict";

import React from 'react';

import { SenRequestDetail } from '../components/SenRequestDetail';

import RequestService from '../services/RequestService';


export class SenRequestDetailView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        let id = this.props.match.params.id;

        RequestService.getRequest(id).then((data) => {
            this.setState({
                request: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    deleteRequest(id) {
        RequestService.deleteRequest(id).then((message) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <SenRequestDetail request={this.state.request} onDelete={(id) => this.deleteRequest(id)}/>
        );
    }
}
