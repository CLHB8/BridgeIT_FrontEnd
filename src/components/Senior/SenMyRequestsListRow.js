"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button, SVGIcon } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from '../SimpleLink';

import UserService from '../../services/UserService';


export class SenMyRequestsListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>image</FontIcon></Link></TableColumn>
                <TableColumn><SimpleLink to={`/show/${this.props.request._id}`}>{this.props.request.category}</SimpleLink></TableColumn>
                <TableColumn><SimpleLink to={`/show/${this.props.request._id}`}>{this.props.request.specification}</SimpleLink></TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Link to={`/edit/${this.props.request._id}`}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                }
                {UserService.isAuthenticated() ?
                    <TableColumn><Button secondary onClick={() => this.props.onDelete(this.props.request._id)} icon>delete</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}