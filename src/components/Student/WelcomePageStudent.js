"use strict";

import React from 'react';
import StudentPage from './StudentPage';
import OfferPopup from '../c_SendOfferPopup';
import {Button, Divider, Cell, DataTable, FontIcon, Grid, Media, TableBody, TableColumn, TableHeader, TableRow} from "react-md";
import UserService from "../../services/UserService";
import {Link} from "react-router-dom";
import Rating from "../RateStudent"
import TaskListMiniView from "../../views/TaskListMiniView";
import { SimpleLink } from '../SimpleLink';
import StuSendOfferPopup from './StuSendOfferPopup';
import DisplayRating from "../DisplayRating";

const style = { maxWidth: 500 };

export class WelcomePageStudent extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showPopup:false,
            user: this.props.user
        };
        this.handlePremiumChange = this.handlePremiumChange.bind(this);
    }

    handlePremiumChange() {
        this.props.onPremiumChange();
    }

    popupHandler() {
        this.setState({
            showPopup: !this.state.showPopup},

        );
    }

    render() {
        return (
            <StudentPage user = {this.props.user} onPremiumChange={this.handlePremiumChange}>
                <div className="gridContainer">

                    <div className="catSideBar" border="none">

                        <div className="seniorProfile">
                            <h4>Welcome to the dashboard</h4>
                            <img src="https://imgur.com/4XCz8ij.png" width="100px" height="100px"/>
                            <h4>{this.state.user.username}</h4>
                            {/* <Rating value={3.5} precision={0.5} readOnly /> */}
                            <h5>Your rating:</h5><DisplayRating user={this.state.user}/>
                            <Divider />
                            <br/>
                            {/* <Fab variant="extended" color="primary" aria-label="Add" onClick={this.popupHandler.bind(this)} className={classes.fab}>
                                    <AddIcon className={classes.extendedIcon}/> Add Request
                                </Fab> */}
                            <br/>
                            <div>
                                <div className="subscriptionAd">
                                    <p>You have 1 free offers remaining this month.<br/> Want to do more? Join our monthly subcription.</p>
                                </div>
                                <div><img width="200px" height="" src="https://i.imgur.com/bGmZS0T.jpg"/></div>

                            </div>
                            <br/>
                            <Divider />
                            <h4 align="center"><Button raised primary swapTheming onClick={() => this.props.history.push('/sen/add')}>Log out</Button></h4>

                            {/* <StuSendOfferPopup visibility={this.state.showPopup}><button className="closeButton" onClick={this.popupHandler.bind(this)}><i class="material-icons">close</i></button> </StuSendOfferPopup> */}

                        </div>




                    </div>

                    <div className="taskList">
                        {/* main area  */}

                        <div className="ongoingTasks">
                            <h4>You have 6 Tasks ongoing:</h4>


                        </div>
                        <Divider />
                        <div className="requestsSummary">
                            <h4>Here are the top 5 recent requests posted by seniors:</h4>

                            <TaskListMiniView></TaskListMiniView>
                            <h6>You can also view all of the requests {<SimpleLink to={'/stu/TaskListView'}>here.</SimpleLink>}</h6>

                        </div>
                        <Divider />
                        <div className="ratingSummary">

                            <h4>Don't forget to rate your recent experience with the seniors:</h4>


                        </div>



                    </div>



                </div>
            </StudentPage>
        );
    }
}