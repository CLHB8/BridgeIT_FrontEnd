"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { MovieListView } from './views/MovieListView';
import { MovieDetailView }   from './views/MovieDetailView';
import { MovieFormView }   from './views/MovieFormView';
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import { RequestFormView } from "./views/RequestFormView";
import { WelcomePageStudentView } from "./views/WelcomePageStudentView";
import { WelcomePageSeniorView } from "./views/WelcomePageSeniorView";
import { SenMyRequestsListView } from "./views/SenMyRequestsListView";


import UserService from "./services/UserService";
import {StartPageView} from "./views/StartPageView";
import {SeniorSignupView} from "./views/SeniorSignupView";
import {StudentSignupView} from "./views/StudentSignupView";
import {FAQView} from "./views/FAQView";


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'BridgeIT',
            routes: [
                /*{ component: MovieListView , path: '/', exact: true},*/
                /*{ component: StartPageView , path: '/', exact: true},*/
                { component: StartPageView , path: '/', exact: true},
                { component: MovieDetailView , path: '/show/:id'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<RequestFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/edit/:id'},
                { component: RequestFormView, path: '/sen/add'},
                { component: UserLoginView, path: '/login'},
                { component: UserSignupView, path: '/register'},

                { component: SeniorSignupView, path: '/sen/register'},
                { component: StudentSignupView, path: '/stu/register'},


                { component: WelcomePageStudentView, path: '/stu'},
                { component: WelcomePageSeniorView, path: '/sen'},

                { component: WelcomePageStudentView, path: '/stu/WelcomePage'},
                { component: WelcomePageSeniorView, path: '/sen/WelcomePage'},
                { component: SenMyRequestsListView, path: '/sen/myRequests'},

                { component: FAQView, path: '/help'},
                { component: FAQView, path: '/faq'}
            ]
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

