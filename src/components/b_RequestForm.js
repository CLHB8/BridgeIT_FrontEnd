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

        if (this.props.request != undefined) {
            this.state = {
                title: props.request.title,
                category: props.request.category,
                specification: props.request.specification
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

        let request = this.props.request;
        if(request == undefined) {
            request = {};
        }

        request.title = this.state.title;
        request.category = this.state.category;
        request.specification = this.state.specification;

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
                <Card style={style} className="md-block-right">
                    <CardTitle title="PC/Laptop Coaching"/>
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                        <TextField
                            label="Title"
                            id="TitleField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.props.title}
                            onChange={this.handleChangeTitle}
                            errorText="Title is required"/>
                        <TextField
                            label="Category"
                            id="CategoryField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.props.category}
                            onChange={this.handleChangeCategory}
                            errorText="Category is required"/>
                        <TextField
                            label="Specification"
                            id="SpecificationField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.props.specification}
                            onChange={this.handleChangeSpecification}
                            errorText="Specification is required"/>

                        <Button id="submit" type="submit"
                                disabled={this.props.title == undefined || this.props.title == '' || this.props.category == undefined || this.props.category == '' || this.props.specification == undefined || this.props.specification == ''}
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