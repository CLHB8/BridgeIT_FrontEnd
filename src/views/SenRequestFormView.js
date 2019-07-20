"use strict";

import React from 'react';

import SenRequestForm from "../components/Senior/SenRequestForm";



import RequestService from "../services/RequestService";
import {withRouter} from 'react-router-dom';

export class SenRequestFormView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        if(this.props.history.location.pathname == '/sen/add') {
            this.setState({
                loading: false,
                request: undefined,
                error: undefined
            });
            console.log('1');
        }

        else if (this.props.history.location.pathname == '/sen/WelcomePage') {
            this.setState({
                loading: false,
                request: undefined,
                error: undefined
            });
            console.log('4');
        }
        else if(this.props.location.state != undefined && this.props.location.state.request != undefined) {
            this.setState({
                loading: false,
                request: this.props.location.state.request,
                error: undefined
            });
            console.log('2');
        }
        else {
            this.setState({
                loading: true,
                error: undefined
            });
            console.log('3');

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

        return (<SenRequestForm request={this.state.request} onSubmit={(request) => this.updateRequest(request)} error={this.state.error} />);
    }
}

export default withRouter(RequestFormView);