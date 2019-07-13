"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from './SimpleLink';
import OfferPopup from './c_SendOfferPopup';

import UserService from '../services/UserService';
import MovieForm from "./MovieForm";

var details = "";
var requestTitle = "";

export class TaskListRow extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showPopup:false
            
        };
        
    }
    

    popupHandler() {
        this.setState({
            showPopup: !this.state.showPopup
        }

            );
            details=this.props.request.specification;
            requestTitle=this.props.request.title;
            
    }


    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><Link to={`/stu/addOffer/${this.props.request._id}`}><FontIcon>image</FontIcon></Link></TableColumn>
                <TableColumn><SimpleLink to={`/stu/addOffer/${this.props.request._id}`}>{this.props.request.title}</SimpleLink>
                
                </TableColumn>
                <TableColumn>{this.props.request.senUserName}

                </TableColumn>

                <TableColumn>
                    <button onClick={this.popupHandler.bind(this)}><i className="material-icons">send</i>Send Offer</button>
                </TableColumn>
                <OfferPopup stuOffer={this.state.stuOffer} onSubmit={(stuOffer) => this.updateStuOffer(stuOffer)} error={this.state.error} visibility={this.state.showPopup} description={details} requestTitle={requestTitle}><button  className="closeButton" onClick={this.popupHandler.bind(this)}><i class="material-icons">close</i></button> </OfferPopup>

            </TableRow>
        );
    }
}