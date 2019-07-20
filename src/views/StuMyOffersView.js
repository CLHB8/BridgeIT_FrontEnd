"use strict";

import React from 'react';

import { StuMyOffers } from '../components/Student/StuMyOffers';

import StuOfferService from '../services/StuOfferService';
import UserService from "../services/UserService";
import {Redirect} from "react-router-dom";


export class StuMyOffersView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        StuOfferService.getMyStuOffers().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        })
    }

    deleteStuOffer(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        StuOfferService.deleteStuOffer(id).then((message) => {

            let stuOfferIndex = this.state.data.map(stuOffer => stuOffer['_id']).indexOf(id);
            let stuOffers = this.state.data;
            stuOffers.splice(stuOfferIndex, 1);
            this.setState({
                data: [...stuOffers],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        if (UserService.isAuthenticated()) {
            return (
                <StuMyOffers user={this.state.user} data={this.state.data} onDelete={(id) => this.deleteStuOffer(id)}/>
            );
        }
        else
        {
            return (<Redirect to={'../login'}/>)
        }
    }
}