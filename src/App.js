"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { UserLoginView } from "./views/UserLoginView";
import { SenRequestFormView } from "./views/SenRequestFormView";
import { WelcomePageStudentView } from "./views/WelcomePageStudentView";
import { WelcomePageSeniorView } from "./views/WelcomePageSeniorView";
import { SenMyRequestsListView } from "./views/SenMyRequestsListView";
import { SenRequestDetailView } from "./views/SenRequestDetailView";
import { StuOfferFormView } from "./views/StuOfferFormView";
import { StuMyOffersView } from "./views/StuMyOffersView";

import { TaskListView} from "./views/TaskListView"

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
                { component: StartPageView , path: '/', exact: true},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<SenRequestFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/edit/:id'},
                { component: SenRequestFormView, path: '/sen/add'},
                { component: UserLoginView, path: '/login'},

                { component: SeniorSignupView, path: '/sen/register'},
                { component: StudentSignupView, path: '/stu/register'},

                { component: WelcomePageStudentView, path: '/stu/WelcomePage'},
                { component: WelcomePageSeniorView, path: '/sen/WelcomePage'},

                { component: FAQView, path: '/help'},
                { component: FAQView, path: '/faq'},

                { component: SenMyRequestsListView, path: '/sen/myRequests'},
                { component: SenRequestDetailView, path: '/show/:id'},


                { component: TaskListView, path: '/stu/TaskListView'},
                { component: StuOfferFormView, path: '/stu/addOffer/:id'},
                { component: StuMyOffersView, path: '/stu/myOffers'},

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

