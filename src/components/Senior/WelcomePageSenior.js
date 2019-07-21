"use strict";

import React from 'react';
import SeniorPage from './SeniorPage';
import SenReq from '../../views/SenRequestsMiniView'
import {makeStyles, Container, Divider, Fab} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {Avatar, FontIcon, List, ListItem, Subheader, Button,} from 'react-md';
import {SenTaskHistoryListView} from "../../views/SenTaskHistoryListView";
import { SimpleLink } from '../SimpleLink';
import {withRouter} from 'react-router-dom';

import UserService from '../../services/UserService'
import {SenMyAssignedRequests} from "./SenMyAssignedRequests";

const style = {maxWidth: 900};
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

const dataTableStyle = {
    'margin-bottom': '40px',
    'margin-top': '40px',
};


export class WelcomePageSenior extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            showPopup: false
        }
    }

    componentDidMount() {
        this.setState({
            title: document.title
        });
    }
    render() {
    console.log(this.state.user);
        return (
            <SeniorPage user={this.state.user}>


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
                                <SimpleLink to={'add'}><Fab variant="extended" color="primary" aria-label="Add" className={classes.fab}>
                                    <AddIcon className={classes.extendedIcon}/> Add Request
                                </Fab></SimpleLink>
                                <br/>
                                <br/>
                                <h4 align="center"><SimpleLink to={'WelcomePage'}><Button raised primary swapTheming onClick={() => UserService.logout()}>Log out</Button></SimpleLink></h4>

                        </div>


                    </div>
                    <div className="taskList">

                        <h4>If you already posted one or more requests and want to check on their
                            status, see below:</h4>
                        <SenReq></SenReq>
                        <Divider style={dataTableStyle}/>
                        <h4>Here is your task history. Don't forget to rate the students!</h4>
                        <SenMyAssignedRequests user={this.state.user}></SenMyAssignedRequests>


                    </div>
                </div>

            </SeniorPage>
        );
    }
}
