"use strict";

import React from 'react';

import { WelcomePageSenior } from '../components/WelcomePageSenior';
import MovieService from "../services/MovieService";

export class WelcomePageSeniorView extends React.Component {

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
    /* MovieService has to be deleted at some point here!! */
        MovieService.getMovies().then((data) => {
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
            <WelcomePageSenior data={this.state.data} />
        );
    }
}