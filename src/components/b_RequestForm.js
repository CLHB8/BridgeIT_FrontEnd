"use strict";

import React from 'react';
import { Card, Button, FontIcon, TextField, CardTitle, CardText } from 'react-md';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';
import SeniorPage from './SeniorPage';
import UserService from "../services/UserService";

const style = { maxWidth: 500 };

class RequestForm extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.request != undefined) {
            this.state = {
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
                title: props.request.title,
                category: props.request.category,
                specification: props.request.specification,
                byUser: props.request.byUser
            };
        } else {
            this.state = {
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
                title: '',
                category: '',
                specification: '',
                byUser: ''
            };
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeSpecification = this.handleChangeSpecification.bind(this);
        this.handleChangeByUser = this.handleChangeByUser.bind(this);

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

    handleChangeByUser(value) {
        this.setState(Object.assign({}, this.state, {byUser: value}));
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
        request.byUser = this.state.user.username;

        this.props.onSubmit(request);
    }

    render() {
        return (
            <SeniorPage>
                <Card style={style} className="md-block-right">
                    <CardTitle title="PC/Laptop Coaching"/>
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
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
                                disabled={this.state.title == undefined || this.state.title == '' || this.state.category == undefined || this.state.category == '' || this.state.specification == undefined || this.state.specification == ''}
                                raised primary className="md-cell md-cell--2">Save</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </Card>
            </SeniorPage>
        );
    }
}

export default withRouter(RequestForm);