"use strict";

import React from 'react';
import {TableRow, TableColumn, FontIcon, Button, SVGIcon, Avatar} from 'react-md';
import {Link} from 'react-router-dom';

import PopupDelete from '../PopupDelete';
import {SimpleLink} from '../SimpleLink';

import UserService from '../../services/UserService';
import RateStudent from '../RateStudent'
import RatingsService from "../../services/RatingsService";

export class SenMyAssignedRequestsListRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            daysSince: '',
            studentFirstname: "loading...",
            studentLastname: "loading...",
            studentFullanem: "loading...",
            user: this.props.user

        };
        this.delete = this.delete.bind(this);
        this.timedifference(this.props.request.createdAt);
    }

    delete(value) {
        this.props.onDelete(value);
    }

    componentWillMount() {
        this.setState({
            loading: true,
        });

        let id = this.props.request.assignedStudent;

        UserService.getUserById(id).then((studentData) => {
            this.setState({
                student: studentData,
                studentFirstname: studentData.firstname,
                studentLastname: studentData.lastname,
                studentFullname: studentData.firstname + " " + studentData.lastname,
                loading: false
            });

        }).catch((e) => {
            console.error(e);
        })
    }

    timedifference(value) {
        let createdDate = value.slice(8, 10);
        let todayDate = new Date().toString().slice(8, 10);
        console.log(createdDate);
        console.log(todayDate);

        let differenceDate = createdDate - todayDate;
        if (differenceDate == '0') {
            this.state.daysSince = 'today';
        }
        if (differenceDate == '-1') {
            this.state.daysSince = 'yesterday';
        } else {
            this.state.daysSince = '2 days ago';
        }
        console.log(differenceDate);

    }

    render() {
        if (this.state.loading) {
            return (<h5>Loading Student Name...</h5>);
        }

        if (!((this.props.request == null || this.props.request == undefined || this.props.request == "undefined") || !this.props.request.isAssigned)) {
            return (
                <TableRow key={this.props.key}>

                    {(this.props.request.category === "Mobile Phone Coaching") ?
                        (
                            <TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>phone_iphone</FontIcon></Link></TableColumn>)
                        : ((this.props.request.category === "Computer Coaching") ?
                                (<TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>computer</FontIcon></Link></TableColumn>)
                                : ((this.props.request.category === "TV Coaching") ?
                                        (<TableColumn><Link
                                            to={`/show/${this.props.request._id}`}><FontIcon>tv</FontIcon></Link></TableColumn>)
                                        : ((this.props.request.category === "Printer Coaching") ?
                                                (<TableColumn><Link
                                                    to={`/show/${this.props.request._id}`}><FontIcon>print</FontIcon></Link></TableColumn>)
                                                : ((this.props.request.category === "Purchase Advice") ?
                                                        (<TableColumn><Link
                                                            to={`/show/${this.props.request._id}`}><FontIcon>shopping_cart</FontIcon></Link></TableColumn>)
                                                        : ((this.props.request.category === "Purchase Advice") ?
                                                                (<TableColumn><Link
                                                                    to={`/show/${this.props.request._id}`}><FontIcon>shopping_cart</FontIcon></Link></TableColumn>)
                                                                : (<TableColumn><Link
                                                                    to={`/show/${this.props.request._id}`}><FontIcon>person_add</FontIcon></Link></TableColumn>)
                                                        )
                                                )
                                        )
                                )
                        )
                    }
                    <TableColumn><SimpleLink
                        to={`/show/${this.props.request._id}`}>{this.props.request.category}</SimpleLink></TableColumn>
                    <TableColumn><SimpleLink
                        to={`/show/${this.props.request._id}`}>{this.state.studentFullname}</SimpleLink></TableColumn>
                    <TableColumn>{this.state.daysSince}</TableColumn>
                    <TableColumn><RateStudent user={this.state.user} request={this.props.request}/></TableColumn>
                </TableRow>
            );

        } else {
            return (console.log("TEST", this.props.request));
        }
    }
}