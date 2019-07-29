"use strict";

import React from 'react';
import SeniorPage from './SeniorPage';
import SenReq from '../../views/SenRequestsMiniView'
import {makeStyles, Container, Divider, Fab, Card, CardContent, CardActionArea, CardMedia, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

import {FontIcon, Button} from 'react-md';
import {SenMyAssignedRequests} from "./SenMyAssignedRequests";
import DisplayRating from "../DisplayRating";
import {SimpleLink} from '../SimpleLink';
import UserService from "../../services/UserService";

const style = {maxWidth: 900};

const cardstyle = {
    marginTop: 25,
    marginLeft: 15,
};
const card2 = {
    marginTop: 10,
      
};

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

        return (
            <SeniorPage user={this.state.user}>


                <div className="gridContainer">

                    <div className="catSideBar" border="none">

                    <Card style={cardstyle}>

                        <div className="seniorProfile">
                            <h4>Welcome to the dashboard</h4>
                            <img src="https://imgur.com/4XCz8ij.png" width="100px" height="100px"/>
                            <h4>{this.state.user.firstname} {this.state.user.lastname}</h4>
                            {/* <Rating value={3.5} precision={0.5} readOnly /> */}
                            <h5>Your rating:</h5><DisplayRating user={this.state.user} displayStudentRating={false}/>
                            <Divider/>
                            <br/>
                            <SimpleLink to={'add'}><Fab variant="extended" color="primary" aria-label="Add"
                                                        className={classes.fab}>
                                <AddIcon className={classes.extendedIcon}/> Add Request
                            </Fab></SimpleLink>
                            <br/>
                            <br/>
                            <br/>
                            <br/>


                            <SimpleLink to={'WelcomePage'}>
                                <Button 
                            raised 
                            secondary
                            
                            onClick={() => UserService.logout()}>
                                Logout</Button></SimpleLink>
                                
                        </div>
                        <br/>

                        </Card>
                    </div>

                    <div className="taskList">

                        <Card className="md-cell md-cell--12">
                            <CardContent>
                            <Typography gutterBottom variant="h4">
                                Here is the list of your assigned students.
                            </Typography>
                            <Typography variant="h5"> Please contact them via phone and arrange a meeting.</Typography>
                            </CardContent>

                            <SenMyAssignedRequests user={this.state.user}></SenMyAssignedRequests>

                        </Card>
                        <br/>

                        <Divider light/>
                        <br/>

                        <Card style={card2} className="md-cell md-cell--12">
                            <CardContent>
                            <Typography gutterBottom variant="h4">
                            If you already posted one or more requests and want to check on their
                            status, see below:
                            </Typography>
                            {/* <Typography variant="h5"> Please contact them via phone and arrange a meeting.</Typography> */}
                            </CardContent>

                            <SenReq user={this.state.user}></SenReq>

                        </Card>

                        {/* <h4></h4>
                        
                        <Divider style={dataTableStyle}/>
                        <h4>Here is your task history. Don't forget to rate the students!</h4>
                         */}


                    </div>
                </div>

            </SeniorPage>
        );
    }
}
