"use strict";

import React from 'react';
import {Card, Button, FontIcon, TextField, CardTitle, CardText, Grid, Cell, Avatar, CardActions} from 'react-md';
import { withRouter } from 'react-router-dom';

import { AlertMessage } from '../AlertMessage';
import StudentPage from './StudentPage';
import UserService from "../../services/UserService";

const style = { maxWidth: 900 };

export class StuOfferForm extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.stuOffer != undefined) {
            this.state = {
                requestId: props.stuOffer.requestId,
                requestTitle: props.stuOffer.requestTitle,
                seniorId: props.stuOffer.seniorId,
                studentId: props.stuOffer.studentId,
                introMsg: props.stuOffer.introMsg,
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
            };
            console.log('stuOffer not undefined');
        } else {
            this.state = {
                requestId: '',
                requestTitle: '',
                seniorId: '',
                studentId: '',
                introMsg: '',
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
            };
            console.log('stuOffer undefined');
        }

        this.handleChangeIntroMsg = this.handleChangeIntroMsg.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeIntroMsg(value) {
        this.setState(Object.assign({}, this.state, {introMsg: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

        let stuOffer = this.props.stuOffer;
        if(stuOffer == undefined) {
            stuOffer = {};
        }

        stuOffer.requestId = this.props.request._id;
        stuOffer.requestTitle = this.props.request.title;
        stuOffer.seniorId = this.props.request.userId;
        stuOffer.studentId = this.state.user.id;
        stuOffer.introMsg = this.state.introMsg;

        this.props.onSubmit(stuOffer);
    }


    render() {
        return (
            <StudentPage>
                <Card style={style} className="md-block-centered">
                    <Grid className="grid-example" >
                        <Cell size={12}>
                            <h3>This request was posted by {this.props.request.senUserName}.</h3>
                            <h3>Send an offer by submitting the form below!</h3>
                        </Cell>
                        <Cell size={12}>
                            <Card style={{maxWidth: 800}} className="md-block-centered">
                                <CardTitle
                                    title={this.props.request.title}
                                    subtitle={this.props.request.category}
                                    avatar={<Avatar src={"https://s3.euronics.ee/UserFiles/Products/Images/147086-iphone7-plus-gold-1.png"} role="presentation" />}
                                />
                            </Card>
                        </Cell>

                        <Cell size={12}>
                            <Card style={{maxWidth: 800}} className="md-block-centered">
                                <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                                    <TextField
                                        label="Your Message"
                                        id="introMsgField"
                                        type="text"
                                        className="md-row"
                                        required={true}
                                        value={this.state.introMsg}
                                        onChange={this.handleChangeIntroMsg}
                                        errorText="Please write a short message introducing yourself."/>
                                    <Button id="submit" type="submit"
                                            disabled={this.state.introMsg == undefined || this.state.introMsg == ''}
                                            raised primary className="md-cell md-cell--2">Send</Button>
                                    <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                                    <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                                </form>
                            </Card>
                        </Cell>
                    </Grid>


                </Card>
            </StudentPage>
        );
    }
}

export default withRouter(StuOfferForm);