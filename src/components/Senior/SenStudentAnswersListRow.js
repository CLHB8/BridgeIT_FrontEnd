"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';
import DisplayRating from '../DisplayRating';

import UserService from '../../services/UserService';


export class SenStudentAnswersListRow extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.stuOffer)
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><FontIcon>user</FontIcon></TableColumn>
                <TableColumn>{this.props.stuOffer.studentUsername}</TableColumn>
                <TableColumn>{this.props.stuOffer.introMsg}</TableColumn>
                <TableColumn><DisplayRating studentId={this.props.stuOffer.studentId}/></TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.stuOffer._id)} icon>check_circle</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}