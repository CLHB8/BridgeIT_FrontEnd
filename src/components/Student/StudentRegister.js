"use strict";

import React from 'react';
import {Card, Button, TextField, Grid} from 'react-md';
import {Link, withRouter} from 'react-router-dom';

import {AlertMessage} from '../AlertMessage';
import Page from '../Page';
import CardTitle from "react-md/lib/Cards/CardTitle";
import {IoMdArrowRoundForward, IoIosArrowBack, IoMdArrowRoundBack} from "react-icons/io";


const style = {maxWidth: 800};


class StudentRegiser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            reentered_password: '',
            student_mail: '',
            phone_number: '',
            streetname: '',
            streetnumber: '',
            cityname: '',
            postalcode: '',
            error: '',
        };

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleCheckReenteredPassword = this.handleCheckReenteredPassword.bind(this);
        this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
        this.handleChangeStreetname = this.handleChangeStreetname.bind(this);
        this.handleChangeStreetnumber = this.handleChangeStreetnumber.bind(this);
        this.handleChangeCityname = this.handleChangeCityname.bind(this);
        this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangePassword(value) {
        this.setState(Object.assign({}, this.state, {password: value}));
    }

    handleCheckReenteredPassword(value) {
        this.setState(Object.assign({}, this.state, {error: ""}));
        this.setState(Object.assign({}, this.state, {reentered_password: value}));
    }

    handleChangeFirstname(value) {
        this.setState(Object.assign({}, this.state, {firstname: value}));
    }

    handleChangeLastname(value) {
        this.setState(Object.assign({}, this.state, {lastname: value}));
    }

    handleChangeEmail(value) {
        this.setState(Object.assign({}, this.state, {mail: value}));
    }

    handleChangePhoneNumber(value) {
        this.setState(Object.assign({}, this.state, {phone_number: value}));
    }

    handleChangeStreetname(value) {
        this.setState(Object.assign({}, this.state, {streetname: value}));
    }

    handleChangeStreetnumber(value) {
        this.setState(Object.assign({}, this.state, {streetnumber: value}));
    }

    handleChangeCityname(value) {
        this.setState(Object.assign({}, this.state, {cityname: value}));
    }

    handleChangePostalCode(value) {
        this.setState(Object.assign({}, this.state, {postalcode: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

        // check if entered password matches the reentered_password, throw error and dont send form if they don't match
        if (this.state.password !== this.state.reentered_password) {
            this.setState(Object.assign({}, this.state, {reentered_password: ''}));
            this.setState(Object.assign({}, this.state, {error: "Passwords don't match! Please re-enter your password"}));
        } else {
            this.setState(Object.assign({}, this.state, {error: ''}));
            let user = {
                password: this.state.password,
                reentered_password: this.state.reentered_password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                mail: this.state.mail,
                phone_number: this.state.phone_number,
                streetname: this.state.streetname,
                streetnumber: this.state.streetnumber,
                cityname: this.state.cityname,
                postalcode: this.state.postalcode,
                isSenior: false,
                isPremium: false,

            };

            this.props.onSubmit(user);
        }
    }


    render() {
        return (
            <Page>
                <Grid container spacing={1}>
                    <Card style={style} className="md-block-centered">
                        <CardTitle
                            title={<div><h1>Create a New Account</h1><h5>Place two requests a month for free.</h5>
                            </div>}
                            avatar={<img className="SignupPageImage"
                                         src="https://www.gesundheitsstadt-berlin.de/fileadmin/_processed_/9/2/csm_student-kopfschmerz_5f65cc65e2.jpg"
                                         alt="Image of Student"/>}/>
                        <form className="md-grid" onSubmit={this.handleSubmit}
                              onReset={() => this.props.history.goBack()}>
                            <h4 className="md-cell md-cell--12">Personal Information</h4>
                            <TextField
                                className="md-cell md-cell--6"
                                label="First name"
                                id="FirstNameField"
                                type="text"
                                required={true}
                                value={this.state.firstname}
                                onChange={this.handleChangeFirstname}
                                errorText="First Name is required"
                                placeholder="Prename"
                            />

                            <TextField
                                className="md-cell md-cell--6"
                                label="Last name"
                                id="LastNameField"
                                type="text"
                                required={true}
                                value={this.state.lastname}
                                onChange={this.handleChangeLastname}
                                errorText="Last Name is required"
                                placeholder="Surname"/>

                            <TextField
                                className="md-cell md-cell--6"
                                label="Email"
                                id="EmailField"
                                type="email"
                                required={true}
                                value={this.state.mail}
                                onChange={this.handleChangeEmail}
                                errorText="Mail is required"
                                placeholder="jane.doe@example.com"/>

                            <TextField
                                className="md-cell md-cell--6"
                                label="Phone number"
                                id="NumberField"
                                type="tel"
                                required={false}
                                value={this.state.phone_number}
                                onChange={this.handleChangePhoneNumber}
                                placeholder="017646699119"/>


                            <h4 className="md-cell md-cell--12">Password</h4>


                            <TextField
                                className="md-cell md-cell--6"
                                label="Password"
                                id="PasswordField"
                                type="password"
                                required={true}
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                                errorText="Password is required"/>

                            <TextField
                                className="md-cell md-cell--6"
                                label="Re-enter Password"
                                id="ReenterPasswordField"
                                type="password"
                                required={true}
                                value={this.state.reentered_password}
                                onChange={this.handleCheckReenteredPassword}
                                errorText="Please re-enter your password"/>

                            <h4 className="md-cell md-cell--12">Address</h4>
                            <TextField
                                className="md-cell md-cell--6"
                                label="Street name"
                                id="StreetNameField"
                                type="text"
                                required={true}
                                value={this.state.streetname}
                                onChange={this.handleChangeStreetname}
                                errorText="Street Name is required"
                                placeholder="Jump Street"/>

                            <TextField
                                className="md-cell md-cell--6"
                                label="Street number"
                                id="StreetNumberField"
                                type="number"
                                required={true}
                                value={this.state.streetnumber}
                                onChange={this.handleChangeStreetnumber}
                                errorText="Street Number is required"
                                placeholder="21"/>

                            <TextField
                                className="md-cell md-cell--6"
                                label="City name"
                                id="CityNameField"
                                type="text"
                                required={true}
                                value={this.state.cityname}
                                onChange={this.handleChangeCityname}
                                errorText="City Name is required"
                                placeholder="Osgiliath"/>

                            <TextField
                                className="md-cell md-cell--6"
                                label="Postal code"
                                id="PostalCodeField"
                                type="text"
                                required={true}
                                value={this.state.postalcode}
                                onChange={this.handleChangePostalCode}
                                errorText="Postal code is required"
                                placeholder="66981"/>


                            <div className="md-cell--6" style={{
                                "text-align": "center",
                                "align-items": "center"
                            }}>
                                <Button id="submit" type="submit" style={{background: "darkblue", margin: 0}}
                                        disabled={this.state.firstname == undefined || this.state.firstname == ''
                                        || this.state.password == undefined || this.state.password == ''
                                        || this.state.reentered_password == undefined || this.state.reentered_password == ''
                                        || this.state.lastname == undefined || this.state.lastname == ''
                                        || this.state.mail == undefined || this.state.mail == ''
                                        || this.state.streetname == undefined || this.state.streetname == ''
                                        || this.state.streetnumber == undefined || this.state.streetnumber == ''
                                        || this.state.cityname == undefined || this.state.cityname == ''
                                        || this.state.postalcode == undefined || this.state.postalcode == ''
                                        || this.state.password == undefined || this.state.password == '' ? true : false}
                                        className="RegisterButton"><b>Register</b><IoMdArrowRoundForward
                                    id="middleXLargeIcons"/></Button>
                            </div>


                            <div className="md-cell--6" style={{
                                "text-align": "center",
                                "align-items": "center"
                            }}>
                                <Button id="reset" type="reset" style={{background: "darkred", margin: 0}}
                                        className="RegisterButton"><b>Back</b></Button>
                            </div>
                            <Link to={'/login'} className="md-cell md-cell--6" style={{"text-align": "center", "margin-top": 20}}>Are you already registered?</Link>
                            <AlertMessage
                                className="md-row md-full-width">{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                            <AlertMessage
                                className="md-row md-full-width">{this.state.error ? `${this.state.error}` : ''}</AlertMessage>
                        </form>
                    </Card>
                </Grid>
            </Page>
        );
    }
};

export default withRouter(StudentRegiser);