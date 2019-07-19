"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button, SVGIcon } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from '../SimpleLink';


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

                <TableColumn><SimpleLink to={`/stu/addOffer/${this.props.request._id}`}>
                    <Button flat primary onClick={this.popupHandler.bind(this)} iconChildren="send">Send Offer</Button></SimpleLink>
                </TableColumn>
                

            </TableRow>
        );
    }
}