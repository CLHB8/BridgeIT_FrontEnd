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
                    <ContactData >{console.log('It works!')}</ContactData>
                </div>
            </div>

        )}
    else {return(
        <div></div>
    )}

}

export default withRouter(ContactDataPopup);