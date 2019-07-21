"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from '../SimpleLink';

import UserService from '../../services/UserService';


export class StuMyOffersRow extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showPopup:false,
            user:this.props.user
        };
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><FontIcon>image</FontIcon></TableColumn>
                <TableColumn><SimpleLink to={`/stu/addOffer/${this.props.stuOffer.requestId}`}>{this.props.stuOffer.seniorUsername}</SimpleLink></TableColumn>
                <TableColumn>{this.props.stuOffer.introMsg}</TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.stuOffer._id)} icon>delete</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}