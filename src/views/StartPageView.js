"use strict";

import React from 'react';

import SplitScreen from '../components/SplitScreen';
import UserService from "../services/UserService";
import {Redirect} from "react-router-dom";

export class StartPageView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (UserService.isAuthenticated()) {
            if(UserService.isSenior()){
                return (<Redirect to={'/sen/WelcomePage'}/>)
            }else{
                return (<Redirect to={'/stu/WelcomePage'}/>)
            }
        }else{
            return (
                <SplitScreen/>
            );
        }
    }
}