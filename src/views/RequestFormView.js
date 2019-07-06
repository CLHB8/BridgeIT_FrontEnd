"use strict";

import React from 'react';

import MovieService from "../services/MovieService";
import RequestForm from "../components/b_RequestForm";

export class RequestFormView extends React.Component {

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
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <RequestForm data={this.state.data} />
        );
    }
}