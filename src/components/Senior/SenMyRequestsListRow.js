"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button, SVGIcon, Avatar } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from '../SimpleLink';

import UserService from '../../services/UserService';

export class SenMyRequestsListRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            daysSince: '',
        }
        this.timedifference(this.props.request.createdAt);
    }

     timedifference(value) {
        let createdDate = value.slice(8,10);
        let todayDate = new Date().toString().slice(8,10);
        console.log(createdDate);
        console.log(todayDate);

        let differenceDate = createdDate - todayDate;
        if(differenceDate == '0'){
            this.state.daysSince = 'today';
        } if(differenceDate == '-1'){
            this.state.daysSince = 'yesterday';
        } else {
            this.state.daysSince = '2 days ago';
        }
        console.log(differenceDate);

    }

    render() {
        return (
            <TableRow key={this.props.key}>

                {(this.props.request.category === "Mobile Phone Coaching") ?
                    (<TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>phone_iphone</FontIcon></Link></TableColumn>)
                    : ( (this.props.request.category === "Computer Coaching") ?
                        (<TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>computer</FontIcon></Link></TableColumn>)
                        : ( (this.props.request.category === "TV Coaching") ?
                                (<TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>tv</FontIcon></Link></TableColumn>)
                                : ( (this.props.request.category === "Printer Coaching") ?
                                    (<TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>print</FontIcon></Link></TableColumn>)
                                    : ( (this.props.request.category === "Purchase Advice") ?
                                        (<TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>shopping_cart</FontIcon></Link></TableColumn>)
                                        : ((  this.props.request.category === "Purchase Advice") ?
                                            (<TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>shopping_cart</FontIcon></Link></TableColumn>)
                                            : (<TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>person_add</FontIcon></Link></TableColumn>)
                                    )
                                )
                            )
                        )
                    )
                }
                <TableColumn><SimpleLink to={`/show/${this.props.request._id}`}>{this.props.request.category}</SimpleLink></TableColumn>
                <TableColumn><SimpleLink to={`/show/${this.props.request._id}`}>{this.props.request.specification}</SimpleLink></TableColumn>
                <TableColumn>{this.state.daysSince}</TableColumn>
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