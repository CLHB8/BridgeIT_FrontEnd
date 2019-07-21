"use strict";

import React from 'react';

import {StuMyOffers} from '../components/Student/StuMyOffers';

import StuOfferService from '../services/StuOfferService';
import UserService from "../services/UserService";
import {Redirect} from "react-router-dom";


export class StuMyOffersView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    handlePremiumChange() {
        console.log("HANDLECHANGE STATE BEFOR", this.props.user);
        if(!(this.state.loading)){
            this.setState({user:{
                    isPremium: true,
                    username: this.state.user.username,
                    id: this.state.user.id,
                }});
        }
        console.log("HANDLECHANGE STATE AFTER", this.state.user);
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        StuOfferService.getMyStuOffers().then((data) => {
            this.setState({
                data: [...data]
            });
            UserService.getUserInfo().then((userInfo) => {
                console.log("USERINFO", userInfo);
                let user = {
                    isPremium: userInfo.isPremium,
                    firstname: userInfo.firstname,
                    lastname: userInfo.lastname,
                    id: userInfo.id,
                    username: userInfo.username
                };
                console.log(user);
                this.setState({
                    user: user,
                    loading: false
                });
            }).catch((e) => {
                console.error(e);
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
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        if (UserService.isAuthenticated()) {
            return (
                <StuMyOffers user={this.state.user} data={this.state.data} onDelete={(id) => this.deleteStuOffer(id)}/>
            );
        } else {
            return (<Redirect to={'../login'}/>)
        }
    }
}