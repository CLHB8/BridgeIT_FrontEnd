"use strict";

import React from 'react';
import { Card, Button, TextField } from 'react-md';
import { withRouter } from 'react-router-dom';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { AlertMessage } from '../AlertMessage';
import MoviePage from './MoviePage';


const style = { maxWidth: 500 };


class UserSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : ''
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(value) {
        this.setState(Object.assign({}, this.state, {username: value}));
    }

    handleChangePassword(value) {
        this.setState(Object.assign({}, this.state, {password: value}));
    }

   handleSubmit(event) {
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.onSubmit(user);
    }

    render() {
        return (
            <MoviePage>
                <Card style={style} className="md-block-centered">
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                        <TextField
                            label="Username"
                            id="UsernameField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.username}
                            onChange={this.handleChangeUsername}
                            errorText="Username is required"/>
                        <TextField
                            label="Password"
                            id="PasswordField"
                            type="password"
                            className="md-row"
                            required={true}
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            errorText="Password is required"/>
{/*
                        <FormControl className="md-row">
                            <InputLabel shrink htmlFor="isSenior-label-placeholder">
                                isSenior
                            </InputLabel>
                            <Select
                                value={this.state.isSenior}
                                onChange={this.handleChangeIsSenior}

                                displayEmpty
                                name="isSenior"
                                className="md-row"
                                type="isSenior"
                            >
                                <MenuItem value="">
                                    <em>Please select</em>
                                </MenuItem>
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                            <FormHelperText>Are you a senior?</FormHelperText>
                        </FormControl>
*/}
                        <Button id="submit" type="submit"
                                disabled={this.state.username == undefined || this.state.username == '' || this.state.password == undefined || this.state.password == '' ? true : false}
                                raised primary className="md-cell md-cell--2">Register</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </Card>
            </MoviePage>
        );
    }
};

export default withRouter(UserSignup);