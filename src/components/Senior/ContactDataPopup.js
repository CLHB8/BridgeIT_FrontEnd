"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom'
//import StuOfferService from "../services/StuOfferService";
//import {AlertMessage} from "./AlertMessage";
import ContactData from "./ContactData";
import SenRequestFormView from "../../views/SenRequestFormView";


const ContactDataPopup = (props) => {

    if(props.visibility==true){
        return(
            <div className="popuplayer">
                <div className="popup">
                    <ContactData theChoosenFirstName={props.theChoosenFirstName} theChoosenLastName={props.theChoosenLastName} theChoosenPhone={props.theChoosenPhone} theChoosenMail={props.theChoosenMail} theChoosenOne={props.theChoosenOne} request={props.request}>{console.log('It works!')}</ContactData>
                </div>
            </div>

        )}
    else {return(
        <div></div>
    )}

}

export default withRouter(ContactDataPopup);