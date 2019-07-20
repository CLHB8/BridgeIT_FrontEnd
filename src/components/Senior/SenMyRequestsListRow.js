"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button, SVGIcon } from 'react-md';
import {Link, withRouter} from 'react-router-dom';

import PopupDelete from '../PopupDelete';
import { SimpleLink } from '../SimpleLink';

import UserService from '../../services/UserService';

export class SenMyRequestsListRow extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(value){
        this.props.onDelete(value)
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>image</FontIcon></Link></TableColumn>
                <TableColumn><SimpleLink to={`/show/${this.props.request._id}`}>{this.props.request.title}</SimpleLink></TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Link to={`/edit/${this.props.request._id}`}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                }
                {UserService.isAuthenticated() ?
                    <TableColumn><PopupDelete delete={this.delete} id={this.props.request._id}></PopupDelete></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }
            </TableRow>
        );
    }
}

export default withRouter(SenMyRequestsListRow);