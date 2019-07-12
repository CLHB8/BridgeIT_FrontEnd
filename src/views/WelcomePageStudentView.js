"use strict";

import React from 'react';

import { WelcomePageStudent } from '../components/WelcomePageStudent';
import MovieService from "../services/MovieService";
import RequestService from "../services/RequestService";
import {SenMyRequestsList} from "../components/SenMyRequestsList";

export class WelcomePageStudentView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        MovieService.getMovies().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
        RequestService.getRequests().then((data) => {
            this.setState({
                data: [...data],
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
            <WelcomePageStudent data={this.state.data}>
            </WelcomePageStudent>
        );
    }
}