"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'
import OfferPopup from '../c_SendOfferPopup'
class StudentHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showPopup:false
        };
    }
    
    popupHandler() {
        this.setState({
            showPopup: !this.state.showPopup}
            );
    }
    render(){
        return(
                <div className="StudentHeader">
                <div className="logo">
                    <img onClick={() => this.props.history.push('/stu/WelcomePage')} src={"https://i.imgur.com/0ig5Y7g.png"} height={"60em"}/>
                </div>
                <div className="HeaderNav">
                        <button className="SHButton" onClick={this.popupHandler.bind(this)}><i class="material-icons">send</i>Test</button>
                        
                        <button className="SHButton" onClick={() => this.props.history.push('/stu/WelcomePage')}><i class="material-icons">home</i>Home</button>
                        <button className="SHButton"><i class="material-icons">view_list</i>All Requests</button>
                        <button className="SHButton"><i class="material-icons">view_list</i>My offers</button>
                        <button className="SHButton"><i class="material-icons">account_circle</i>My Account</button>
                
                
                </div>
                <OfferPopup visibility={this.state.showPopup}></OfferPopup>
                </div>
                );
        }
        

};





export default withRouter(StudentHeader);