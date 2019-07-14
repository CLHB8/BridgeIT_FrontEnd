"use strict";

import React from 'react';

import StuOfferForm  from "../components/Student/StuOfferForm";

import RequestService from "../services/RequestService";
import RequestForm from "../components/b_RequestForm";

import StuOfferService from "../services/StuOfferService";

export class StuOfferFormView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.setState({
            stuOffer: undefined,
            loading: true,
        });
        console.log('1.1');

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
        console.log('1.2');
    }

    updateStuOffer(stuOffer) {
        if(this.state.stuOffer == undefined) {
            StuOfferService.createStuOffer(stuOffer).then((data) => {
                this.props.history.push('/');
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
            <StuOfferForm stuOffer={this.state.stuOffer} request={this.state.request} onSubmit={(stuOffer) => this.updateStuOffer(stuOffer)} error={this.state.error} />
        );
    }
}