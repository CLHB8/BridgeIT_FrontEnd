"use strict";

import React from 'react';
import { Card, Button, FontIcon, TextField, CardTitle, CardText } from 'react-md';
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
                title: '',
                category: '',
                specification: '',
                userId: '',
                senUserName:'',
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
            };
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeSpecification = this.handleChangeSpecification.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();

        let request = this.props.request;
        if(request == undefined) {
            request = {};
        }

        request.title = this.state.title;
        request.category = this.state.category;
        request.specification = this.state.specification;
        request.userId = '';
        request.senUserName = this.state.user.username;

        this.props.onSubmit(request);
    }

    render() {
        return (
            <SeniorPage>
                <h2>Here you can choose the task you need help for!</h2>
                <h2>Submit your request by filling out the corresponding form!</h2>
                <div className="md-grid">
                    <Card style={style} className="md-block-right">
                        <CardTitle title="Smartphone Coaching"/>
                        <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                            <CardText>
                                You need help with your mobilephone or have general questions about it?
                            </CardText>
                            <TextField
                                label="Title"
                                id="TitleField"
                                type="text"
                                className="md-row"
                                required={true}
                                value={this.state.title}
                                onChange={this.handleChangeTitle}
                                errorText="Title is required"/>
                            <TextField
                                label="Category"
                                id="CategoryField"
                                type="text"
                                className="md-row"
                                required={true}
                                value={this.state.category}
                                onChange={this.handleChangeCategory}
                                errorText="Category is required"/>
                            <TextField
                                label="Specification"
                                id="SpecificationField"
                                type="text"
                                className="md-row"
                                required={true}
                                value={this.state.specification}
                                onChange={this.handleChangeSpecification}
                                errorText="Specification is required"/>

                            <Button id="submit" type="submit"
                                    disabled={this.state.title == undefined || this.state.title == ''}
                                    value = {'Smartphone Coaching'}
                                    raised primary className="md-cell md-cell--2"
                                    onClick={() => this.history.push('/')}>Choose</Button>
                            <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                            <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                        </form>
                    </Card>
                </div>
            </SeniorPage>
        );
    }
}

export default withRouter(RequestForm);