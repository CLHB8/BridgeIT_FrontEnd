"use strict";

import React from 'react';

import { WelcomePageStudent } from '../components/Student/WelcomePageStudent';
import MovieService from "../services/MovieService";
import RequestService from "../services/RequestService";
import {SenMyRequestsList} from "../components/Senior/SenMyRequestsList";
import UserService from "../services/UserService";
import {WelcomePageSenior} from "../components/Senior/WelcomePageSenior";
import {Redirect} from "react-router-dom";

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

        if (UserService.isAuthenticated()) {
            if(UserService.isSenior()){
                return (<Redirect to={'/sen/WelcomePage'}/>)
            }else{
                return (
                    <WelcomePageStudent data={this.state.data}/>
                );
            }
        }
        else
        {
            return (<Redirect to={'/login'}/>)
        }
    }
}