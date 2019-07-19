"use strict";

import React from 'react';
import {Card, Button, FontIcon, TextField, CardTitle, CardText, ListItem, Avatar, DropdownMenu} from 'react-md';
import { withRouter } from 'react-router-dom';

import { AlertMessage } from '../AlertMessage';
import SeniorPage from './SeniorPage';
import UserService from "../../services/UserService";


const style = { maxWidth: 500 };

class RequestForm extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.request != undefined) {
            this.state = {
                title: props.request.title,
                category: props.request.category,
                specification: props.request.specification,
                userId: props.request.userId,
                senUserName: props.request.senUserName,
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
            };
        } else {
            this.state = {
                title: '56',
                category: '',
                specification: '',
                userId: '',
                senUserName:'',
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
                title1: 'Smartphone Coaching',
                title2: 'Pc/Laptop Coaching',
                title3: 'Printer Problems',
                title4: 'Individual task',
            };
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeSpecification = this.handleChangeSpecification.bind(this);

        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
        this.handleSubmit4 = this.handleSubmit4.bind(this);
    }

    handleChangeTitle(value) {
        this.setState(Object.assign({}, this.state, {title: value}));
    }

    handleChangeCategory(value) {
        this.setState(Object.assign({}, this.state, {category: value}));
    }

    handleChangeSpecification(value) {
        this.setState(Object.assign({}, this.state, {specification: value}));
    }

    handleSubmit1(event) {
        event.preventDefault();

        let request = this.props.request;
        if(request == undefined) {
            request = {};
        }

        request.title = this.state.title1;
        request.category = '';
        request.specification = 'Affe';
        request.userId = '';
        request.senUserName = this.state.user.username;

        if(request.category==''){
            this.state.category2= 'Fisch';
            request.category = this.state.category2;
        }
        this.props.onSubmit(request);
    }
    handleSubmit2(event) {
        event.preventDefault();}
    handleSubmit3(event) {
        event.preventDefault();}
    handleSubmit4(event) {
        event.preventDefault();}

    render() {
        return (
            <SeniorPage>
                <Card style={style} className="md-block-right">
                    <CardTitle title={this.state.title1}/>
                    <form className="md-grid" onSubmit={this.handleSubmit1} onReset={() => this.props.history.goBack()}>
                        <CardText>Do you need help with your Smartphone? Than choose a category and Submit your Request.</CardText>

                        <Button id="submit" type="submit"
                                raised primary className="md-cell md-cell--2">Choose</Button>
                    </form>
                </Card>
                <Card style={style} className="md-block-right">
                    <CardTitle title={this.state.title2}/>
                    <form className="md-grid" onSubmit={this.handleSubmit2} onReset={() => this.props.history.goBack()}>
                        <CardText>Do you need help with your Smartphone? Than choose a category and Submit your Request.</CardText>

                        <Button id="submit" type="submit"
                                raised primary className="md-cell md-cell--2">Choose</Button>
                    </form>
                </Card>
                <Card style={style} className="md-block-right">
                    <CardTitle title={this.state.title3}/>
                    <form className="md-grid" onSubmit={this.handleSubmit3} onReset={() => this.props.history.goBack()}>
                        <CardText>Do you need help with your Smartphone? Than choose a category and Submit your Request.</CardText>

                        <Button id="submit" type="submit"
                                raised primary className="md-cell md-cell--2">Choose</Button>
                    </form>
                </Card>
                <Card style={style} className="md-block-right">
                    <CardTitle title={this.state.title4}/>
                    <form className="md-grid" onSubmit={this.handleSubmit4} onReset={() => this.props.history.goBack()}>
                        <CardText>Do you need help with your Smartphone? Than choose a category and Submit your Request.</CardText>

                        <Button id="submit" type="submit"
                                raised primary className="md-cell md-cell--2">Choose</Button>
                    </form>
                </Card>
            </SeniorPage>
        );
    }
}
export default withRouter(RequestForm);