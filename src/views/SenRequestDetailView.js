"use strict";

import React from 'react';

import { SenRequestDetail } from '../components/Senior/SenRequestDetail';

import RequestService from '../services/RequestService';
import StuOfferService from "../services/StuOfferService";
import UserService from "../services/UserService";

export class SenRequestDetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state={
          theChoosenOne: '',
        };
        this.handleChoosenOneChange = this.handleChoosenOneChange.bind(this);
    }

    componentWillMount(props){
        this.setState({
            loading: true,
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
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

    handleChoosenOneChange(anakin){
        this.setState({theChoosenOne: anakin});
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
            <SenRequestDetail onChoosenOneChange={(anakin) => this.handleChoosenOneChange(anakin)} user={this.state.user} stuOffers={this.state.stuOffers} request={this.state.request} onDelete={(id) => this.deleteRequest(id)}/>
        );
    }
}
