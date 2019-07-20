"use strict";

import React from 'react';
import { Toolbar, Button, TextField } from 'react-md';
import { withRouter } from 'react-router-dom'
//import StuOfferService from "../services/StuOfferService";
//import {AlertMessage} from "./AlertMessage";
import RequestFormView from "../../views/SenRequestFormView";


const SenAddOfferPopup = (props) => {

    

    if(props.visibility==true){
        return(
            <div className="popuplayer">
            <div className="popup">
                <RequestFormView >{console.log('It works!')}</RequestFormView>
            </div>
            </div>


            
            

    )}
    else {return(
        <div></div>
    )}











}

export default withRouter(SenAddOfferPopup);