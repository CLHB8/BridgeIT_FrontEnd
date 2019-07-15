"use strict";

import React from 'react';
import { Toolbar, Button, TextField } from 'react-md';
import { withRouter } from 'react-router-dom'
import StuOfferService from "../services/StuOfferService";
import {AlertMessage} from "./AlertMessage";



const OfferPopup = (props) => {

    function updateStuOffer(stuOffer) {
        if(this.state.stuOffer == undefined) {
            StuOfferService.createStuOffer(stuOffer).then((data) => {
                this.props.history.push('/stu/TaskListView');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating stu Offer'}));
            });
        } else {
            StuOfferService.updateStuOffer(stuOffer).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while updating movie'}));
            });
        }
    }

    function handleChangeIntroMsg(value) {
        this.setState(Object.assign({}, this.state, {introMsg: value}));
    }

    function handleSubmit(event) {
        event.preventDefault();

        let stuOffer = this.props.stuOffer;
        if(stuOffer == undefined) {
            stuOffer = {};
        }

        stuOffer.requestId = '';
        stuOffer.seniorId = '';
        stuOffer.studentId = '';
        stuOffer.introMsg = this.state.introMsg;

        this.props.onSubmit(stuOffer);
    }

    if(props.visibility==true){
        return(

        <div className="popuplayer">
            <div className="popup">
            <div className="">

                <div className="popupHead"><h3>Send Offer</h3>{props.children}</div>
            </div>
            {/* <button onClick={props.closePopup}>{props.children}</button> */}

            <div className="popupContainer">
                <h2>{props.requestTitle}</h2>
                <p>{props.description}</p>
                <p>{props.id}</p>
            </div>
            <form onSubmit={this.handleSubmit} >
                <TextField
                    label="introMsg"
                    id="introMsgField"
                    type="text"
                    className="md-row"
                    rows={5}
                    required={true}
                    value={this.state.introMsg}
                    onChange={this.handleChangeIntroMsg}
                    errorText="IntroMsg is required"/>
                    <Button id="submit" type="submit"
                        disabled={this.state.introMsg == undefined || this.state.introMsg == ''}
                        raised primary className="md-cell md-cell--2">Submit</Button>
                    <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
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