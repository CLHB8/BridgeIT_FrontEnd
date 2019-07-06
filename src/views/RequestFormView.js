"use strict";

import React from 'react';

import RequestForm from "../components/b_RequestForm";

import RequestService from "../services/RequestService";

export class RequestFormView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        if(this.props.history.location.pathname == '/add') {
            this.setState({
                loading: false,
                request: undefined,
                error: undefined
            });
        }
        else if(this.props.location.state != undefined && this.props.location.state.request != undefined) {
            this.setState({
                loading: false,
                request: this.props.location.state.request,
                error: undefined
            });
        }
        else {
            this.setState({
                loading: true,
                error: undefined
            });

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
        }
    }

    updateRequest(request) {
        if(this.state.request == undefined) {
            RequestService.createRequest(request).then((data) => {
                this.props.history.push('/');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating request'}));
            });
        } else {
            RequestService.updateRequest(request).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating request'}));
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (<RequestForm request={this.state.request} onSubmit={(request) => this.updateRequest(request)} error={this.state.error} />);
    }
}