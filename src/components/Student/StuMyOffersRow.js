"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from '../SimpleLink';

import UserService from '../../services/UserService';


export class StuMyOffersRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                {(this.props.stuOffer.requestCategory === "Mobile Phone Coaching") ?
                    ( <TableColumn><Link to={`/stu/addOffer/${this.props.stuOffer.requestId}`}><FontIcon>phone_iphone</FontIcon></Link></TableColumn>)
                    : ((this.props.stuOffer.requestCategory === "Computer Coaching") ? (<TableColumn><Link to={`/stu/addOffer/${this.props.stuOffer.requestId}`}><FontIcon>computer</FontIcon></Link></TableColumn>)
                            : ((this.props.stuOffer.requestCategory === "TV Coaching") ?
                                    (<TableColumn><Link to={`/stu/addOffer/${this.props.stuOffer.requestId}`}><FontIcon>tv</FontIcon></Link></TableColumn>)
                                    : ((this.props.stuOffer.requestCategory === "Printer Coaching") ?
                                            (<TableColumn><Link to={`/stu/addOffer/${this.props.stuOffer.requestId}`}><FontIcon>print</FontIcon></Link></TableColumn>)
                                            : ((this.props.stuOffer.requestCategory === "Purchase Advice") ?
                                                    (<TableColumn><Link to={`/stu/addOffer/${this.props.stuOffer.requestId}`}><FontIcon>shopping_cart</FontIcon></Link></TableColumn>)
                                                    : ((this.props.stuOffer.requestCategory === "Purchase Advice") ?
                                                            (<TableColumn><Link to={`/stu/addOffer/${this.props.stuOffer.requestId}`}><FontIcon>shopping_cart</FontIcon></Link></TableColumn>)
                                                            : (<TableColumn><Link to={`/stu/addOffer/${this.props.stuOffer.requestId}`}><FontIcon>person_add</FontIcon></Link></TableColumn>)
                                                    )
                                            )
                                    )
                            )
                    )
                }
                <TableColumn><SimpleLink to={`/stu/addOffer/${this.props.stuOffer.requestId}`}>{this.props.stuOffer.requestCategory}</SimpleLink></TableColumn>
                <TableColumn>{this.props.stuOffer.seniorUsername}</TableColumn>
                <TableColumn>{this.props.stuOffer.introMsg}</TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.stuOffer._id)} icon>delete</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}