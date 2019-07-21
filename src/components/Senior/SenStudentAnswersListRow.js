"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';
import DisplayRating from '../DisplayRating';

import UserService from '../../services/UserService';
import RatingsService from "../../services/RatingsService";
import RequestService from  "../../services/RequestService";


export class SenStudentAnswersListRow extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.stuOffer)
    }

    updateRequest() {
        console.log(this.props.stuOffer.studentId)
        let updateRquest = {
            assignedStudent: this.props.stuOffer.studentId,
            isAssigned: true,
        }
        RequestService.updateRequestAssigned(this.props.stuOffer.requestId, updateRquest).then((data) => {
            console.log(data);
        }).catch((e) => {
            console.error(e);
            this.setState(Object.assign({}, this.state, {error: 'Error while assigning student to request'}));
        });
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><FontIcon>user</FontIcon></TableColumn>
                <TableColumn>{this.props.stuOffer.studentUsername}</TableColumn>
                <TableColumn>{this.props.stuOffer.introMsg}</TableColumn>
                <TableColumn className="md-cell md-cell--3"><DisplayRating studentId={this.props.stuOffer.studentId}/></TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.updateRequest()} icon>check_circle</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}