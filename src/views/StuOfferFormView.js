"use strict";

import React from 'react';

import { StuOfferForm } from "../components/StuOfferForm";

import RequestService from "../services/RequestService";

export class StuOfferFormView extends React.Component {

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


    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <StuOfferForm request={this.state.request}/>
        );
    }
}