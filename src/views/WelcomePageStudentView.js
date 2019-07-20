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
            loading: true,
            data: [],
            isHandled: false,
        };
        this.handlePremiumChange = this.handlePremiumChange.bind(this);
    }

    handlePremiumChange() {
        if(!(this.state.loading)){
            this.setState({user:{
                    isPremium: true,
                    username: this.state.user.username,
                    id: this.state.user.id,
                }});
        }
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        MovieService.getMovies().then((data) => {
            this.setState({
                data: [...data]
            });
        }).catch((e) => {
            console.error(e);
        });
        RequestService.getRequests().then((data) => {
            this.setState({
                data: [...data]
            });
        }).catch((e) => {
            console.error(e);
        });
        UserService.isPremium().then((isPremium) => {
            let tmpUser = UserService.getCurrentUser();
            let user = {
                isPremium: isPremium,
                id: tmpUser.id,
                username: tmpUser.username
            };
            console.log(user);
            this.setState({
                user: user,
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

        console.log("WELCOMEPAGESTUDENT", this.state.user)

        if (UserService.isAuthenticated()) {
            if(UserService.isSenior()){
                return (<Redirect to={'/sen/WelcomePage'}/>)
            }else{
                return (
                    <WelcomePageStudent data={this.state.data} user={this.state.user} onPremiumChange={this.handlePremiumChange}/>
                );
            }
        }
        else
        {
            return (<Redirect to={'/login'}/>)
        }
    }
}