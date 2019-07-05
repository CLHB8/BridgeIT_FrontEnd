//tbd

"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'


    var homeicon="";
    var requesticon="";
    var offericon="";

class StudentHeader extends React.Component {

    constructor(props) {
        super(props);
    }
render(){
        return(
                <div className="StudentHeader">
                <div className="logo">
                    <img onClick={() => this.props.history.push('/')} src={"https://i.imgur.com/0ig5Y7g.png"}/>
                </div>
                <div className="HeaderNav">
                        <button className="SHButton"><i class="material-icons">home</i>Home</button>
                        <button className="SHButton"><i class="material-icons">view_list</i>All Requests</button>
                        <button className="SHButton"><i class="material-icons">view_list</i>My offers</button>
                        <img src={this.props.imagesrc}/><button className="SHButton">{this.props.title}</button>
                
                </div>
                
                </div>
                );
        }

};


export default withRouter(StudentHeader);