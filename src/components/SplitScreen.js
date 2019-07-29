"use strict";

import React from 'react';
import {Card, TextField, FontIcon, Grid, Subheader} from 'react-md';
import {withRouter, Link} from 'react-router-dom';
import {Button, Icon, Divider, Typography} from '@material-ui/core';

import {AlertMessage} from './AlertMessage';
import StartPage from './Page';
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import CardActions from "react-md/lib/Cards/CardActions";
import {IoMdArrowRoundForward} from "react-icons/io";
import {IoMdCash, IoMdHammer, IoMdLock, IoLogoEuro, IoIosTimer} from "react-icons/io";
import {GoThumbsup, GoRocket, GoVerified} from "react-icons/go";
import ImageCarousel from "../components/ImageCarousel";


const style = {
    maxWidth: 650,
    marginTop: 20,


};
const style2 = {

    marginTop: 20,
    // "margin-left":40,
    // "margin-right": 40,
    maxWidth: 1580,

};


class SplitScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <StartPage>
                <div style={{"margin-top": "10px"}}>
                    <Grid container spacing={2}>
                        <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>Seniors</h1><h5>Do you want easy and personal solutions for technical
                                    challenges? Lets us help you connect with the new technologies!</h5></div>}
                                avatar={<img className="StartPageImage"
                                             src="https://www.spanishgurus.com/wp-content/uploads/2018/07/senior-student.jpg"
                                             alt="Image of Senior"/>}/>
                            <CardText>
                                <div id="splitscreenList">

                                    <ul>
                                        <Typography gutterBottom variant="h4">Seniors benefit from:</Typography>
                                        <li>
                                            <h3><GoThumbsup id="splitscreenIcons"/> Easy Usability</h3>
                                            <Typography gutterBottom variant="p">
                                                BridgeIT has been designed with usability in mind.
                                                We have customized designs for our audience groups.
                                                Seniors and students alike will feel at home using our site from day 1.
                                            </Typography>
                                        </li>

                                        <li>

                                            <h3><GoRocket id="splitscreenIcons"/> Quick Sucess</h3>
                                            <Typography gutterBottom variant="p">
                                                We have hundreds of students waiting to help you with your needs.
                                                You can get an offer from students as soon as 1 hour after posting a
                                                request.
                                            </Typography>
                                        </li>

                                        <li>
                                            <h3><GoVerified id="splitscreenIcons"/> Verified Students</h3>
                                            <Typography gutterBottom variant="p">
                                                Students are required to verify their identity using their student email
                                                and matriculation document when they sign up.
                                                This ensures only authentic students can use the platform.
                                            </Typography>
                                        </li>

                                    </ul>
                                </div>

                            </CardText>
                            <Divider/>
                            <div className="wrapper_continue">
                                <Link to={`/sen/register`}>
                                    <Button variant="contained" color="primary" className="md-cell md-cell--5">
                                        Register as Senior
                                        <Icon>arrow_forward</Icon>
                                    </Button>
                                </Link>
                            </div>
                        </Card>

                        <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>Students</h1><h5>Are you a student who wants to earn extra money while
                                    helping seniors take advantage of the digital world?</h5></div>}
                                avatar={<img className="StartPageImage"
                                             src="https://fee.org/media/32732/econ.jpg?anchor=center&mode=crop&width=1920&rnd=131971368770000000"
                                             alt="Image of Student"/>}/>
                            <CardText>
                                <div id="splitscreenList">

                                    <ul>
                                        <Typography gutterBottom variant="h4">Students benefit from:</Typography>
                                        <li>
                                            <h3><IoMdCash id="splitscreenIcons"/> Money</h3>
                                            <Typography gutterBottom variant="p">
                                                Students can earn extra money while spending their time on a good cause
                                                like helping seniors.
                                                Seniors usually pay more than typical part-time jobs.
                                            </Typography>
                                        </li>

                                        <li>

                                            <h3><IoMdLock id="splitscreenIcons"/> Security</h3>
                                            <Typography gutterBottom variant="p">
                                                BridgeIT never discloses your data to anyone. We comply with industry
                                                standard data and privacy regulations.
                                                Your data is safe with us.
                                            </Typography>
                                        </li>

                                        <li>
                                            <h3><IoIosTimer id="splitscreenIcons"/> Flexibility</h3>
                                            <Typography gutterBottom variant="p">
                                                You can manage your time any way you want. The meeting is held at a time
                                                of both parties' convenience.
                                            </Typography>
                                        </li>

                                    </ul>
                                </div>
                            </CardText>
                            <Divider/>
                            <div className="wrapper_continue">
                                <Link to={`/stu/register`}>
                                    <Button variant="contained" color="primary" className="md-cell md-cell--5">
                                        Register as Student
                                        <Icon>arrow_forward</Icon>
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </Grid>
                    <Grid container>
                        <Card style={style2} className="md-block-centered">
                            <CardTitle
                                title={<div><h2>Here's what our customers have to say about us:</h2></div>}>
                            </CardTitle>
                            <CardText>

                                <ImageCarousel className="md-block-centered"></ImageCarousel>

                            </CardText>
                        </Card>
                    </Grid>
                </div>
            </StartPage>
        );
    }
};

export default withRouter(SplitScreen);
