"use strict";

import React from 'react';

import { WelcomePageSenior } from '../components/Senior/WelcomePageSenior';
import MovieService from "../services/MovieService";
import UserService from "../services/UserService";
import {StuMyOffers} from "../components/Student/StuMyOffers";
import {Redirect} from "react-router-dom";

export class WelcomePageSeniorView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: []
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });


        UserService.getUserInfo().then((userInfo) => {
            console.log("USERINFO", userInfo);
            let user = {
                isPremium: userInfo.isPremium,
                firstname: userInfo.firstname,
                lastname: userInfo.lastname,
                id: userInfo.id,
                username: userInfo.username
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
        if (UserService.isAuthenticated()) {
            console.log("WelcomPAGESENIOR isSENIOR?", UserService.isSenior());
            if(UserService.isSenior()){
                return (
                    <WelcomePageSenior user={this.state.user}/>
                );
            }else{
                return (<Redirect to={'/stu/WelcomePage'}/>)
            }
        }
        else
        {
            return (<Redirect to={'/login'}/>)
        }
    }
}