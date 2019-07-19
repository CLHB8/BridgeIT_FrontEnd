"use strict";

import React from 'react';
import StudentPage from './StudentPage';
import UserService from "../../services/UserService";
import {Card, Cell, DataTable, FontIcon, Grid, Media, TableBody, TableColumn, TableHeader, TableRow, Divider, Button} from "react-md";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import {Link} from "react-router-dom";
import TaskListMiniView from "../../views/TaskListMiniView";
import { SimpleLink } from '../SimpleLink';
import StuSendOfferPopup from './StuSendOfferPopup';

const style = { maxWidth: 500 };

export class WelcomePageStudent extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
            showPopup: false

        };
    }
    popupHandler() {
        this.setState({
            showPopup: !this.state.showPopup},
            
        );
    }

    render() {
        return (
            <StudentPage>

                <div className="gridContainer">

                <div className="catSideBar" border="none">
                    
                <div className="seniorProfile">
                                <h4>Welcome to the dashboard</h4>
                                <img src="https://imgur.com/4XCz8ij.png" width="100px" height="100px"/>
                                <h4>{this.state.user.username}</h4>
                                {/* <Rating value={3.5} precision={0.5} readOnly /> */}
                                <h5>Your rating: 4.5/5 stars</h5>
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









                {/* <Card style={style} className="md-block-centered">
                    <Grid className="grid-example">
                        <img src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 286, height: 88}}/>
                            <h5>Welcome to the website of BridgeIT!</h5>
                    </Grid>
                </Card>
                <Grid container spacing={2}>
                    <Card style={style} className="md-block-centered">
                        <CardTitle
                            title={<div><h1>Further tasks!</h1><h5>Here are some tasks you are probably interested in.</h5></div>}
                        avatar={<img className="StartPageImage" src="https://www.noventiz.de/wp-content/uploads/2018/01/Aufgaben_Zentrale_Stelle.png" alt="Task list"/>}/>
                        <div className="wrapper_continue">
                            <Link to={'/sen/myRequests'}>
                                <button type="button" className="RegisterButton" style={{backgroundColor: "blue"}}>
                                    Got to Requests
                                </button>
                            </Link>
                        </div>
                    </Card>
                    <Card style={style} className="md-block-centered">
                        <CardTitle
                            title={<div><h1>Rating</h1><h5>Here are some of your completed tasks. When you have finished, you can rate them here.</h5></div>}
                            avatar={<img className="StartPageImage" src="https://www.e-recht24.de/images/stories/categories/ecommerce/ecommerce2.jpg" alt="Rating Image"/>}/>
                        <CardText>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                                Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                                cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
                                lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
                                in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
                                sodales, et gravida augue faucibus. Maecenas quis porttitor nunc. Suspendisse congue
                                ipsum arcu, id aliquam ante dignissim non. Donec maximus, sapien in faucibus molestie,
                                eros nisi ornare neque, et vulputate augue velit vel ante. Phasellus rhoncus, elit
                                cursus accumsan viverra, mi lectus dictum elit, non vehicula diam nunc non lectus.
                                Sed elementum, risus eget fermentum accumsan, nunc ante commodo diam, eget pulvinar
                                risus velit eu sapien. Nunc vitae pellentesque nisl.
                            </p>

                        </CardText>
                        <div className="wrapper_continue">
                                <button type="button" className="RegisterButton" style={{backgroundColor: "blue"}} onClick={this.popupHandler.bind(this)}>
                                    Rate
                                </button>
                            <OfferPopup visibility={this.state.showPopup}></OfferPopup>
                        </div>
                    </Card>
                </Grid> */}
            </StudentPage>
        );
    }
}