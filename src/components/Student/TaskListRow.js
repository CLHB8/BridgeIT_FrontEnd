"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button} from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from '../SimpleLink';
import UserService from "../../services/UserService";
import DisplayRating from "../DisplayRating";
import BlurredRating from "material-ui-rating";


var details = "";
var requestTitle = "";

export class TaskListRow extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showPopup:false,
            user:this.props.user

        };

    }

    componentWillMount() {
        this.setState({
            loading: true,
        });

        let id = this.props.request.userId;

        UserService.getUserById(id).then((seniorData) => {
            this.setState({
                senior: seniorData,
                seniorFirstname: seniorData.firstname,
                seniorLastname: seniorData.lastname,
                seniorFullname: seniorData.firstname + " " + seniorData.lastname,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        })
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
                {(this.props.request.category === "Mobile Phone Coaching") ?
                    (<TableColumn><Link to={`/stu/addOffer/${this.props.request._id}`}><FontIcon>phone_iphone</FontIcon></Link></TableColumn>)
                    : ( (this.props.request.category === "Computer Coaching") ?
                            (<TableColumn><Link to={`/stu/addOffer/${this.props.request._id}`}><FontIcon>computer</FontIcon></Link></TableColumn>)
                            : ( (this.props.request.category === "TV Coaching") ?
                                    (<TableColumn><Link to={`/stu/addOffer/${this.props.request._id}`}><FontIcon>tv</FontIcon></Link></TableColumn>)
                                    : ( (this.props.request.category === "Printer Coaching") ?
                                            (<TableColumn><Link to={`/stu/addOffer/${this.props.request._id}`}><FontIcon>print</FontIcon></Link></TableColumn>)
                                            : ( (this.props.request.category === "Purchase Advice") ?
                                                    (<TableColumn><Link to={`/stu/addOffer/${this.props.request._id}`}><FontIcon>shopping_cart</FontIcon></Link></TableColumn>)
                                                    : ((  this.props.request.category === "Purchase Advice") ?
                                                            (<TableColumn><Link to={`/stu/addOffer/${this.props.request._id}`}><FontIcon>shopping_cart</FontIcon></Link></TableColumn>)
                                                            : (<TableColumn><Link to={`/stu/addOffer/${this.props.request._id}`}><FontIcon>person_add</FontIcon></Link></TableColumn>)
                                                    )
                                            )
                                    )
                            )
                    )
                }
                <TableColumn><SimpleLink to={`/stu/addOffer/${this.props.request._id}`}>{this.props.request.category}</SimpleLink>

                </TableColumn>
                <TableColumn>{this.state.seniorFullname}</TableColumn>




                {this.props.user.isPremium ?
                    <TableColumn><DisplayRating user={this.state.user} request={this.props.request} displayStudentRating={false}/></TableColumn>
                   :
                    <div>
                        <BlurredRating
                            value={0}
                            max={5}
                            disabled={true}
                        />
                        <h6>Visible only for Preemium User</h6>
                    </div>}


                <TableColumn><SimpleLink to={`/stu/addOffer/${this.props.request._id}`}>
                    <Button flat primary onClick={this.popupHandler.bind(this)} iconChildren="send">Send Offer</Button></SimpleLink>
                </TableColumn>


            </TableRow>
        );
    }
}