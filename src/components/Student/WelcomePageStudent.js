"use strict";

import React from 'react';
import StudentPage from './StudentPage';
import OfferPopup from '../c_SendOfferPopup';
import {
    Button,

    Cell,
    DataTable,
    FontIcon,
    Grid,
    Media,
    TableBody,
    TableColumn,
    TableHeader,
    TableRow
} from "react-md";
import UserService from "../../services/UserService";
import TaskListMiniView from "../../views/TaskListMiniView";
import {SimpleLink} from '../SimpleLink';
import StuSendOfferPopup from './StuSendOfferPopup';
import DisplayRating from "../DisplayRating";
import StuMyAssignedRequest from "../Student/StuMyAssignedRequests";
import BlurredRating from 'material-ui-rating'
import {
    makeStyles,
    Container,
    Divider,
    Fab,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography
} from "@material-ui/core";


const cardstyle = {
    marginTop: 25,
    marginLeft: 15,

};

export class WelcomePageStudent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            user: this.props.user
        };
        this.handlePremiumChange = this.handlePremiumChange.bind(this);
    }

    handlePremiumChange() {
        this.props.onPremiumChange();
    }

    popupHandler() {
        this.setState({
                showPopup: !this.state.showPopup
            },
        );
    }

    onClickHandler() {
        UserService.logout();
    }


    render() {
        return (
            <StudentPage user={this.state.user} onPremiumChange={this.handlePremiumChange}>
                <div className="gridContainer">

                    <div className="catSideBar" border="none">

                        <Card style={cardstyle}>

                            <div className="seniorProfile">
                                <h4>Welcome to the dashboard</h4>
                                <img src="https://imgur.com/4XCz8ij.png" width="100px" height="100px"/>
                                <br/>
                                <h4>{this.state.user.firstname} {this.state.user.lastname}</h4>
                                {/* <Rating value={3.5} precision={0.5} readOnly /> */}
                                <br/>

                                {!this.props.user.isPremium ?
                                    <div>
                                        <h5>Go Premium to see Your Rating:</h5>
                                        <BlurredRating
                                            value={0}
                                            max={5}
                                            disabled={true}
                                            onChange={(value) => console.log(`Rated with value ${value}`)}
                                        />
                                    </div> :
                                    <div>
                                        <h5>Your Rating:</h5>
                                        <DisplayRating user={this.state.user} displayStudentRating={true}/>
                                    </div>}


                                <Divider/>

                                {!this.props.user.isPremium ?
                                    <div>
                                        <div className="subscriptionAd">
                                            <p style={{"margin-bottom": "0"}}>You do not want to see this Advertisement?<br/> Join our
                                                monthly subscription.</p>
                                        </div>
                                        <div><img width="200px" height=""
                                                  src="https://cdna.artstation.com/p/assets/images/images/012/644/826/large/brandon-moore-redbullnorm.jpg?1535804427"/>
                                            <p style={{"font-style": "italic"}}>Advertising</p>
                                        </div>

                                    </div> : <div className="premiumShow">
                                        <p>Thank you for being a Premium Member on our Platform.</p>
                                    </div>}


                                <Divider/>
                                <br/>
                                <h4 align="center"><SimpleLink to={'/'}><Button raised secondary swapTheming
                                                                                onClick={() => this.onClickHandler()}>Log
                                    out</Button></SimpleLink></h4>

                                {/* <StuSendOfferPopup visibility={this.state.showPopup}><button className="closeButton" onClick={this.popupHandler.bind(this)}><i class="material-icons">close</i></button> </StuSendOfferPopup> */}

                            </div>


                        </Card>


                    </div>

                    <div className="taskList">
                        {/* main area  */}


                        <Card className="md-cell md-cell--12">
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    Here is your current task list.
                                </Typography>
                                <Typography variant="h5"> Please contact the seniors via phone to arrange a
                                    meeting.</Typography>
                            </CardContent>

                            <StuMyAssignedRequest user={this.props.user}></StuMyAssignedRequest>


                        </Card>


                        <br/>

                        <Divider/>
                        <br/>

                        <Card className="md-cell md-cell--12">
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    Here are some of the most recent Task requests posted by the seniors.
                                </Typography>
                                <Typography variant="h5"> You can also view all of the requests {<SimpleLink
                                    to={'/stu/TaskListView'}>here.</SimpleLink>}</Typography>
                            </CardContent>

                            <TaskListMiniView user={this.props.user}></TaskListMiniView>

                        </Card>


                    </div>


                </div>
            </StudentPage>
        );
    }
}