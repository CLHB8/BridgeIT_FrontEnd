"use strict";

import React from 'react';

import { SenRequestDetail } from '../components/Senior/SenRequestDetail';

import RequestService from '../services/RequestService';
import StuOfferService from "../services/StuOfferService";

export class SenRequestDetailView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        let id = this.props.match.params.id;

        RequestService.getRequest(id).then((reqData) => {
            this.setState({
                request: reqData
            });
        }).catch((e) => {
            console.error(e);
        });
        console.log("gotRequest success");

        StuOfferService.getStuOffersToRequest(id).then((offersData) => {
            this.setState({
                stuOffers: [...offersData],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        })
        console.log("getStuOffersToRequest success");
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
            <SenRequestDetail stuOffers={this.state.stuOffers} request={this.state.request} onDelete={(id) => this.deleteRequest(id)}/>
        );
    }
}
