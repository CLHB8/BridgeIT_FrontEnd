"use strict";

import React from 'react';
import SeniorPage from './SeniorPage';
import SenReq from '../../views/SenMyRequestsListView'
import UserService from "../../services/UserService";
import {makeStyles, Drawer, Container, Divider, Tab, Tabs, Paper, Fab} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {Avatar, FontIcon, List, ListItem, Subheader, Button,} from 'react-md';
import SenAddOfferPopup from "../Senior/SenAddOfferPopup";

const style = { maxWidth: 900 };
const StarIcon = () => <FontIcon>star</FontIcon>;

// const drawerWidth = 240;

const classes = makeStyles(theme => ({
    tabs: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
      },
      rightIcon: {
        marginLeft: theme.spacing(1),
      },
      fab: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },

}));

export class WelcomePageSenior extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
            showPopup: false
        }
    }

    componentDidMount(){
        this.setState({
            title: document.title
        });
    }
    popupHandler() {
        this.setState({
            showPopup: !this.state.showPopup},
            );
    }
    render() {
        return (
            <SeniorPage>
                

                    <div className="gridContainer">

                        <div className="catSideBar" border="none">

                                <div className="seniorProfile">
                                <h3>Welcome to the dashboard</h3>
                                <img src="https://imgur.com/4XCz8ij.png" width="100px" height="100px"/>
                                <h4>{this.state.user.username}</h4>
                                {/* <Rating value={3.5} precision={0.5} readOnly /> */}
                                <h5>Your rating: 4.5/5 stars</h5>
                                <Divider />
                                <br/>
                                <Fab variant="extended" color="primary" aria-label="Add" onClick={this.popupHandler.bind(this)} className={classes.fab}>
                                    <AddIcon className={classes.extendedIcon}/> Add Request
                                </Fab>
                                <br/>
                                <br/>
                                <h4 align="center"><Button raised primary swapTheming onClick={() => this.props.history.push('/sen/add')}>Log out</Button></h4>
                                
                                <SenAddOfferPopup visibility={this.state.showPopup}><button className="closeButton" onClick={this.popupHandler.bind(this)}><i class="material-icons">close</i></button> </SenAddOfferPopup>
                                
                                </div>


                        </div>
                        <div className="taskList">
                        <Container fixed>
                        <div className="ongoingTasks">
                            
                            <h4>Here You can view all of your ongoing Tasks:</h4>
                            
                            <br></br>
                            
                            
                            
                        </div>
                        <div className="currentRequests">
                            <h4 >If you already posted one or more requests and want to check on their status, see below:</h4>
                            <SenReq></SenReq>


                        </div>

                        <div className="previousTasks">
                        <h4 >Here is your task history. Don't forget to rate the students!</h4>

                            <List className="md-cell--6 md-paper md-paper--1">
                                        <Subheader primaryText="Task History" primary />
                                        <ListItem
                                            leftAvatar={<Avatar suffix="deep-purple">AC</Avatar>}
                                            rightIcon={<StarIcon />}
                                            primaryText="PC/Laptop Coaching"
                                            secondaryText={'Ali Connors\n3 days ago'}
                                            threeLines
                                        />
                                        <ListItem
                                            leftAvatar={<Avatar suffix="green">AS</Avatar>}
                                            rightIcon={<StarIcon />}
                                            primaryText="Smartphone coaching"
                                            secondaryText={'Alex Scott\n1 week ago'}
                                            threeLines
                                        />
                                        <ListItem
                                            leftAvatar={<Avatar suffix="orange">SA</Avatar>}
                                            rightIcon={<StarIcon />}
                                            primaryText="Printer Coaching"
                                            secondaryText={'Sandra Adams \n 2 months ago'}
                                            threeLines
                                        />
                                        </List>

                        </div>

                            {/* <Paper className={classes.tabs}>
                                <Tabs
                                    
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    <Tab label="Ongoing Tasks" />
                                    <Tab label="Current Requests" />
                                    <Tab label="Previous tasks" />
                                </Tabs>
                                </Paper> */}

                        </Container></div>
                    </div>

            </SeniorPage>
        );
    }
}
