"use strict";

import React, { Component } from 'react';
import { Toolbar, Button, Grid } from 'react-md';
import { withRouter } from 'react-router-dom';


class SeniorHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SeniorHeader">

                <div className="firstLine">
                    <span><img onClick={() => this.props.history.push('/sen/WelcomePage')} src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 143, height: 44}}/></span>
                    <span><button className="SHButton"><i className="material-icons">play_circle_filled</i>Have this read aloud!</button></span>
                    <span><button className="SHButton"><i className="material-icons">account_circle</i>Your Profile</button></span>
                </div>

                <div className="secondLine">
                    <span><button className="SHButton" onClick={() => this.props.history.goBack()}><i className="material-icons">keyboard_backspace</i>Back</button></span>
                    <span><button className="SHButton" onClick={() => this.props.history.push('/sen/WelcomePage')}><i className="material-icons">home</i>Start Page</button></span>
                    <span><button className="SHButton" onClick={() => this.props.history.push('/sen/add')}><i className="material-icons">library_add</i>Add a new Request</button></span>
                    <span><button className="SHButton" onClick={() => this.props.history.push('/sen/myRequests')}><i className="material-icons">view_list</i>View my Requests</button></span>
                    <span><button className="SHButton"><i className="material-icons">view_list</i>Help</button></span>
                </div>

            </div>
        );
    }
};

export default withRouter(SeniorHeader);


{/*                    <Grid spacing={3} alignItems="flex-start" justify="flex-start">
                    <Grid>
                        <img onClick={() => this.props.history.push('/')} src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 143, height: 44}}/>
                    </Grid>
                    <Grid>
                        <Button className="SHButton" HorizontalAlignment="left" ><i className="material-icons">play_circle_filled</i>Have this read aloud!</Button>
                    </Grid>
                    <Grid>
                        <Button className="SHButton"><i className="material-icons">account_circle</i>Your Profile</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <button className="SHButton"><i className="material-icons">home</i>Back</button>
                    <button className="SHButton"><i className="material-icons">home</i>Start Page</button>
                    <button className="SHButton"><i className="material-icons">view_list</i>Add a new Request</button>
                    <button className="SHButton"><i className="material-icons">view_list</i>View my Requests</button>
                    <button className="SHButton"><i className="material-icons">view_list</i>Help</button>
                </Grid>     <div className="firstLine">
                <span><img onClick={() => this.props.history.push('/')} src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 143, height: 44}}/></span>
                <span><button className="SHButton"><i className="material-icons">play_circle_filled</i>Have this read aloud!</button></span>
                <span><button className="SHButton"><i className="material-icons">account_circle</i>Your Profile</button></span>
                 </div>
            <div className="secondLine">
                <span><button className="SHButton"><i className="material-icons">home</i>Back</button></span>
                <span><button className="SHButton"><i className="material-icons">home</i>Start Page</button></span>
                <span><button className="SHButton"><i className="material-icons">view_list</i>Add a new Request</button></span>
                <span><button className="SHButton"><i className="material-icons">view_list</i>View my Requests</button></span>
                <span><button className="SHButton"><i className="material-icons">view_list</i>Help</button></span>
            </div> */}
