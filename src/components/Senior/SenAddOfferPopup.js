"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom'
import RequestFormView from "../../views/RequestFormView";


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