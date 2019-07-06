"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { MovieListView } from './views/MovieListView';
import { MovieDetailView }   from './views/MovieDetailView';
import { MovieFormView }   from './views/MovieFormView';
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import WelcomePageStudentView from "./views/WelcomePageStudentView";

import UserService from "./services/UserService";
import UserLogin from "./components/UserLogin";




export default class App2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'BridgeIT',
            routes: [

                { component: LandingPageView , path: '/', exact: true},

                {
                    render: (props) => {
                        if (UserService.isAuthenticated() && UserService.isSenior() == true) {
                            return (<WelcomePageSeniorView {...props} />)
                        } else {
                            return (<Redirect to={'/login'}/>)
                        }
                    }, path: '/sen'
                },

                {
                    render: (props) => {
                        if (UserService.isAuthenticated() && UserService.isSenior() == false) {
                            return (<WelcomePageStudentView {...props} />)
                        } else {
                            return (<Redirect to={'/login'}/>)
                        }
                    }, path: '/stu'
                },

                {
                    render: (props) => {
                        if (UserService.isAuthenticated()) {
                            return (<SeniorRequestFormView {...props} />)
                        } else {
                            return (<Redirect to={'/login'}/>)
                        }
                    }, path: '/sen/add'
                },

                {
                    render: (props) => {
                        if (UserService.isAuthenticated()) {
                            return (<SeniorRequestDetailView {...props} />)
                        } else {
                            return (<Redirect to={'/login'}/>)
                        }
                    }, path: '/sen/show/:id'
                },


                { component: UserLoginView, path: '/login'},
                { component: SeniorSignupView, path: '/sen/register'},
                { component: StudentSignupView, path: '/stu/register'},

            ]
        };
    }

}