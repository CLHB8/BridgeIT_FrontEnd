"use strict";

import React from 'react';
import SeniorPage from './SeniorPage';
import {Card, Cell, Grid, Media, Button, FontIcon} from "react-md";
import UserService from "../../services/UserService";
import { withRouter } from 'react-router-dom';

const style = { maxWidth: 900 };

export class WelcomePageSenior extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    componentDidMount(){
        this.setState({
            title: document.title
        });
    }

    render() {
        return (
            <SeniorPage>
                <Card style={style} className="md-block-centered">
                    <Grid className="grid-example">
                        <Cell size={12}>
                            <h2>Dear {this.state.user.username},</h2>
                            <h2>Welcome to the BridgeIT-Website!</h2>
                            <br></br>
                            <h4 align="center">If you need help with your computer, smartphone, etc. and want to post a request for support, click on the button below</h4>
                            <h4 align="center"><Button raised primary swapTheming onClick={() => this.props.history.push('/sen/add')}>I want to add a new Request</Button></h4>
                            <br></br>
                            <h4 align="center">If you need already posted one or more requests and want to check on their status, click on the button below</h4>
                            <h4 align="center"><Button raised primary swapTheming onClick={() => this.props.history.push('/sen/add')}>I want to view my request(s)</Button></h4>
                        </Cell>
                    </Grid>
                </Card>
            </SeniorPage>
        );
    }
}