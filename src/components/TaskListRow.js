"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from './SimpleLink';
import OfferPopup from './c_SendOfferPopup'

import UserService from '../services/UserService';

var details = "";
var offerName = "";

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
            offerName=this.props.request.title;
            
    }


    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><Link to={`/show/${this.props.request._id}`}><FontIcon>image</FontIcon></Link></TableColumn>
                <TableColumn><SimpleLink to={`/show/${this.props.request._id}`}>{this.props.request.title}</SimpleLink>
                <br/><button onClick={this.popupHandler.bind(this)}><i class="material-icons">send</i>Send Offer</button>
                
                </TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Link to={`/edit/${this.props.request._id}`}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                }
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.request._id)} icon>delete</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }
                <OfferPopup visibility={this.state.showPopup} description={details} offerName={offerName}><button  className="closeButton" onClick={this.popupHandler.bind(this)}><i class="material-icons">close</i></button> </OfferPopup>

            </TableRow>
        );
    }
}