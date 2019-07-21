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
        this.validateEmail = this.validateEmail.bind(this);
        this.passwordsMatch = this.passwordsMatch.bind(this);
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


    validateEmail(){
        // Neil: Gets the current state (current mail text) and checks if it fullfills the requirements (regex) if not false is returned and error text is shown
        let currentMailValue = this.state.mail;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (currentMailValue == undefined || currentMailValue == ""){
            return true;
        }
        if (reg.test(currentMailValue) == false)
        {
            return false;
        }
        return true;
    }

    validateCityName() {
        // Neil: Gets the current state (current cityname text) and checks if it fullfills the requirements (regex) if not false is returned and error text is shown
        let currentCitynameValue = this.state.cityname;
        var reg = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

        if (currentCitynameValue == undefined || currentCitynameValue == "") {
            return true;
        }
        if (reg.test(currentCitynameValue) == false) {
            return false;
        }
        return true;
    }

    validatePostalcode() {
        // Neil: Gets the current state (current postalcode text) and checks if it fullfills the requirements (regex) if not false is returned and error text is shown
        let currentPostalcodeValue = this.state.postalcode;
        var reg = /^\d{5}$/;

        if (currentPostalcodeValue == undefined || currentPostalcodeValue == "") {
            return true;
        }
        if (reg.test(currentPostalcodeValue) == false) {

            return false;
        }
        return true;
    }

    passwordsMatch(){
        // Neil: Gets the current state (current mail text) and checks if it fullfills the requirements (regex) if not false is returned and error text is shown
        let currentPassword = this.state.password;
        let currentReenteredPassword = this.state.reentered_password;



        if (currentReenteredPassword == undefined || currentReenteredPassword == "" || currentPassword == undefined || currentPassword == ""){
            return true;
        }

        // TODO: Neil: I uncommented regex due to testing purposes, no password requirements
        if(currentPassword === currentReenteredPassword)/*&& /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])/.test(currentPassword))*/{
            return true;
        }else{
            return false;
        }
    }

    passwordErrorText(){
        if(!(this.passwordsMatch())){
            console.log("Passwords dont Match")
            return("Passwords don't match")
        }else{
            console.log("Password is required")
            return("Passwords is required")
        }
    }

    handleChangePhoneNumber(value) {
        if (/^\d+$/.test(value) || value === "") {
            this.setState(Object.assign({}, this.state, {phone_number: value}));
        }
    }

    handleChangeStreetname(value) {
        this.setState(Object.assign({}, this.state, {streetname: value}));
    }

    handleChangeStreetnumber(value) {
        if (/^\d+$/.test(value) || value === "") {
            this.setState(Object.assign({}, this.state, {streetnumber: value}));
        }
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
                                         src="https://fee.org/media/32732/econ.jpg?anchor=center&mode=crop&width=1920&rnd=131971368770000000"
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
                                type="text"
                                required={true}
                                value={this.state.mail}
                                onChange={this.handleChangeEmail}
                                error={!(this.validateEmail())}
                                errorText="Not a valid mail address (required)"
                                placeholder="jane.doe@example.com"/>

                            <TextField
                                className="md-cell md-cell--6"
                                label="Phone number"
                                id="NumberField"
                                type="text"
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
                                error={!(this.passwordsMatch())}
                                onChange={this.handleCheckReenteredPassword}
                                errorText={this.passwordErrorText()}/>

                            <h4 className="md-cell md-cell--12">Address</h4>
                            <TextField
                                className="md-cell md-cell--6"
                                label="Street name"
                                id="StreetNameField"
                                type="text"
                                required={true}
                                value={this.state.streetname}
                                onChange={this.handleChangeStreetname}
                                errorText="Not a valid Streetname (required)"
                                placeholder="Jump Street"/>

                            <TextField
                                className="md-cell md-cell--6"
                                label="Street number"
                                id="StreetNumberField"
                                type="text"
                                required={true}
                                value={this.state.streetnumber}
                                onChange={this.handleChangeStreetnumber}
                                errorText="Not a valid Street number (required)"
                                placeholder="21"/>

                            <TextField
                                className="md-cell md-cell--6"
                                label="City name"
                                id="CityNameField"
                                type="text"
                                required={true}
                                value={this.state.cityname}
                                error={!(this.validateCityName())}
                                onChange={this.handleChangeCityname}
                                errorText="Not a valid City Name (required)"
                                placeholder="Osgiliath"/>

                            <TextField
                                className="md-cell md-cell--6"
                                label="Postal code"
                                id="PostalCodeField"
                                type="text"
                                required={true}
                                value={this.state.postalcode}
                                error={!(this.validatePostalcode())}
                                onChange={this.handleChangePostalCode}
                                errorText="Not a valid Postal code (required)"
                                placeholder="66981"/>


                            <div className="md-cell--6" style={{
                                "text-align": "center",
                                "align-items": "center"
                            }}>
                                <Button id="submit" type="submit" style={{background: "darkblue", margin: 0}}
                                        disabled={!(this.validateCityName()) ||!(this.validatePostalcode()) ||!(this.passwordsMatch()) || !(this.validateEmail()) || this.state.firstname == undefined || this.state.firstname == ''
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
                            <Link to={'/login'} className="md-cell md-cell--6"
                                  style={{"text-align": "center", "margin-top": 20}}>Are you already registered?</Link>
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