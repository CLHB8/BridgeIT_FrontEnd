"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'

/* class Popup extends React.Component{


    constructor(props) {
        super(props);
        this.state= {showPopup:false};
    }
    render(){
        return(
            <div className="popup">
                



            </div>
        );
    }
} */


const OfferPopup = (props) => {
    
    if(props.visibility==true){
        return(

        <div>
            <p>This is a generic popup </p>
            
            <button>close</button>
            {console.log('It works!')}
        </div>

    )}
    else {return(
        <div></div>
    )}
    
}


export default withRouter(OfferPopup);