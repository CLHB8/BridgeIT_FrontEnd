"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'

const OfferPopup = (props) => {
    
    if(props.visibility==true){
        return(

        <div className="popuplayer">
            <div className="popup">
            <div className="">
                
                <div className="popupHead"><h3>Send Offer</h3>{props.children}</div>
            </div>
            {/* <button onClick={props.closePopup}>{props.children}</button> */}
            
            <div className="popupContainer">
                <h2>{props.offerName}</h2>
                <p>{props.description}</p>
            </div>
            <form>
                    <textarea type="text" name="offerText" placeholder="Write a short introductory message.."></textarea>
                    <input type="submit" value="Submit"></input>
            </form>
            


            {console.log('It works!')}
            </div>
        </div>

    )}
    else {return(
        <div></div>
    )}
    
}


export default withRouter(OfferPopup);