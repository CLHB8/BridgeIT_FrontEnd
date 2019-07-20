"use strict";

import React from 'react';

import StuOfferForm  from "../components/Student/StuOfferForm";

import RequestService from "../services/RequestService";
import RequestForm from "../components/Senior/SenRequestForm";

import StuOfferService from "../services/StuOfferService";
import UserService from "../services/UserService";

export class StuOfferFormView extends React.Component {

    constructor(props) {
        super(props);
        }


    componentWillMount(){
            this.setState({
                loading: true,
                stuOffer: undefined,
                error: undefined,
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
            });
            console.log('setState');

            let id = this.props.match.params.id;

            RequestService.getRequest(id).then((data) => {
                this.setState({
                    request: data,
                    loading: false,
                    error: undefined
                });
            }).catch((e) => {
                console.error(e);
            });
            console.log('gotRequest');
    }

    updateStuOffer(stuOffer) {
        if(this.state.stuOffer == undefined) {
            StuOfferService.createStuOffer(stuOffer).then((data) => {
                this.props.history.push('/stu/WelcomePage');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating stuOffer'}));
            });
        } else {
            StuOfferService.updateStuOffer(stuOffer).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while updating stuOffer'}));
            });
        }
    }


    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <StuOfferForm user={this.props.user} stuOffer={this.state.stuOffer} request={this.state.request} onSubmit={(stuOffer) => this.updateStuOffer(stuOffer)} error={this.state.error} />
        );
    }
}