"use strict";

import React from 'react';
import { Card, Button, FontIcon, TextField, CardTitle, CardText } from 'react-md';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';
import SeniorPage from './SeniorPage';

const style = { maxWidth: 500 };

class RequestForm extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.SeniorRequest != undefined) {
            this.state = {
                title: props.SeniorRequest.title,
                category: props.SeniorRequest.category,
                specification: props.SeniorRequest.specification
            };
        } else {
            this.state = {
                title: '',
                category: '',
                specification: ''
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

        let SeniorRequest = this.props.SeniorRequest;
        if(SeniorRequest == undefined) {
            SeniorRequest = {};
        }

        SeniorRequest.title = this.state.title;
        SeniorRequest.category = this.state.category;
        SeniorRequest.specification = this.state.specification;

        this.props.onSubmit(SeniorRequest);
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