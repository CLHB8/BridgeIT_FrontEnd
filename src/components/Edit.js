"use strict";

import React from 'react';
import {Card, Button, TextField, Grid, FontIcon} from 'react-md';
import {Link, withRouter} from 'react-router-dom';

import {AlertMessage} from './AlertMessage';
import Page from './Page';
import CardTitle from "react-md/lib/Cards/CardTitle";
import {IoMdArrowRoundForward, IoIosArrowBack, IoMdArrowRoundBack} from "react-icons/io";
import UserService from "../services/UserService";


const style = {maxWidth: 800};


class EditProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            reentered_password: '',
            mail: '',
            phone_number: '',
            streetname: '',
            streetnumber: '',
            cityname: '',
            postalcode: '',
            error: '',
        };

        this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
        this.handleChangeStreetname = this.handleChangeStreetname.bind(this);
        this.handleChangeStreetnumber = this.handleChangeStreetnumber.bind(this);
        this.handleChangeCityname = this.handleChangeCityname.bind(this);
        this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.setState({
            loading: true,
        });
        let id = UserService.getCurrentUser().id;

        UserService.getUserById(id).then((studentData) => {
            console.log("USER", studentData);
            this.setState({
                firstname: studentData.firstname,
                lastname: studentData.lastname,
                phone_number: studentData.phone_number,
                streetname: studentData.streetname,
                streetnumber: studentData.streetnumber,
                cityname: studentData.cityname,
                postalcode: studentData.postalcode,
                loading: false
            });

        }).catch((e) => {
            console.error(e);
        })
    }

    handleChangeFirstname(value) {
        this.setState(Object.assign({}, this.state, {firstname: value}));
    }

    handleChangeLastname(value) {
        this.setState(Object.assign({}, this.state, {lastname: value}));
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
            this.setState(Object.assign({}, this.state, {error: ''}));
            let user = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                phone_number: this.state.phone_number,
                streetname: this.state.streetname,
                streetnumber: this.state.streetnumber,
                cityname: this.state.cityname,
                postalcode: this.state.postalcode,

            };

            this.props.onSubmit(user);
            this.props.history.push("/sen/WelcomePage")
    }


    render() {
        return (
            <Page>
                <Grid container spacing={1}>
                    <Card style={style} className="md-block-centered">
                        <CardTitle
                            title={<div><h1>Edit Profile</h1>
                            </div>}
                            avatar={<img className="SignupPageImage"
                                         src={UserService.isSenior() ? "https://www.spanishgurus.com/wp-content/uploads/2018/07/senior-student.jpg" : "https://fee.org/media/32732/econ.jpg?anchor=center&mode=crop&width=1920&rnd=131971368770000000"}
                                         alt="Image of Senior"/>}/>
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
                                label="Phone number"
                                id="NumberField"
                                type="text"
                                required={false}
                                value={this.state.phone_number}
                                onChange={this.handleChangePhoneNumber}
                                placeholder="017646699119"/>



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
                                        disabled={!(this.validateCityName()) ||!(this.validatePostalcode()) || this.state.firstname == undefined || this.state.firstname == ''
                                        || this.state.lastname == undefined || this.state.lastname == ''
                                        || this.state.streetname == undefined || this.state.streetname == ''
                                        || this.state.streetnumber == undefined || this.state.streetnumber == ''
                                        || this.state.cityname == undefined || this.state.cityname == ''
                                        || this.state.postalcode == undefined || this.state.postalcode == ''}
                                        className="RegisterButton"><b>Update</b></Button>
                            </div>

                            <div className="md-cell--6" style={{
                                "text-align": "center",
                                "align-items": "center"
                            }}>
                                <Button id="reset" type="reset" style={{background: "darkred", margin: 0}}
                                        className="RegisterButton"><b>Back</b></Button>
                            </div>
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

export default withRouter(EditProfile);