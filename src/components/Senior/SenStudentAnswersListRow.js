"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';
import DisplayRating from '../DisplayRating';

import UserService from '../../services/UserService';
import RatingsService from "../../services/RatingsService";
import RequestService from  "../../services/RequestService";
import SelectPopup from "../SelectPopup";



export class SenStudentAnswersListRow extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.stuOffer);
    }
    componentWillMount() {
        this.setState({
            loading: true,
        });

        let id = this.props.stuOffer.studentId;

        UserService.getUserById(id).then((studentData) => {
            console.log(studentData);
            this.setState({
                student: studentData,
                studentFirstname: studentData.firstname,
                studentLastname: studentData.lastname,
                studentFullname: studentData.firstname + " " + studentData.lastname,
                studentIsPremium: studentData.isPremium,
                loading: false
            });

        }).catch((e) => {
            console.error(e);
        })
    }

    updateRequest() {
        console.log(this.props.stuOffer.studentId);
        let updateRequest = {
            assignedStudent: (this.props.stuOffer.studentId),
            isAssigned: true
        }
        RequestService.updateRequestAssigned(this.props.stuOffer.requestId, updateRequest).then((data) => {
            console.log(data);
            let rating = {
                requestId: data._id,
                seniorId: data.userId,
                studentId: data.assignedStudent,
            };
            RatingsService.createRating(rating)
        }).catch((e) => {
            console.error(e);
            this.setState(Object.assign({}, this.state, {error: 'Error while assigning student to request'}));
        });
        this.props.onChoosenOneChange(this.props.stuOffer.studentId);
        window.location.reload();
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                {this.state.studentIsPremium ?
                    <TableColumn><FontIcon>star</FontIcon></TableColumn>
                    :<TableColumn></TableColumn>}

                <TableColumn>{this.props.stuOffer.wage} €</TableColumn>
                <TableColumn>{this.state.studentFullname}</TableColumn>
                <TableColumn>{this.props.stuOffer.introMsg}</TableColumn>
                {this.state.studentIsPremium ?
                    <TableColumn className="md-cell md-cell--3"><DisplayRating studentId={this.props.stuOffer.studentId} displayStudentRating={true}/></TableColumn>
                    :<TableColumn/>}
                {UserService.isAuthenticated() ?
                    <TableColumn><SelectPopup updateRequest={() => this.updateRequest()}></SelectPopup></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}