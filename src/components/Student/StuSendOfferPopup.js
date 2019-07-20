"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom'
import StuOfferFormView from "../../views/StuOfferFormView";


const StuSendOfferPopup = (props) => {
  
    if(props.visibility==true){
        return(
            <div className="popuplayer">
            <div className="popup">
                <StuOfferFormView>{console.log('It works!')}</StuOfferFormView>
            </div>
            </div>

    )}
    else {return(
        <div></div>
    )}

}

export default withRouter(StuSendOfferPopup);