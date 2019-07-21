"use strict";

import React from 'react';
import {Card, Button, TextField, FontIcon, Grid, Subheader} from 'react-md';
import {withRouter, Link} from 'react-router-dom';

import {AlertMessage} from './AlertMessage';
import StartPage from './Page';
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import CardActions from "react-md/lib/Cards/CardActions";
import {IoMdArrowRoundForward} from "react-icons/io";
import {IoMdCash, IoMdHammer, IoMdLock, IoLogoEuro, IoIosTimer} from "react-icons/io";
import {GoThumbsup,  GoRocket, GoVerified } from "react-icons/go";
import ImageCarousel from "../components/ImageCarousel";



const style = {
    maxWidth: 750,
    "margin-top": 20,
};
const style2 = {
    
    "margin-top": 20,
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
                                title={<div><h1>Seniors</h1><h5>You need an easy and inexpensive solution for your
                                    technical problems?</h5></div>}
                                avatar={<img className="StartPageImage"
                                             src="https://www.spanishgurus.com/wp-content/uploads/2018/07/senior-student.jpg"
                                             alt="Image of Senior"/>}/>
                            <CardText>
                                <div id="splitscreenList">

                                    <ul>
                                        <h2>Our Services & Benefits</h2>
                                        <li>
                                            <h3><GoThumbsup id="splitscreenIcons"/> Easy Usability</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                                euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                                                Nam quis justo in augue auctor imperdiet.</p>
                                        </li>

                                        <li>

                                            <h3><GoRocket id="splitscreenIcons"/> Quick Sucess</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                                euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                                                Nam quis justo in augue auctor imperdiet.</p>
                                        </li>

                                        <li>
                                            <h3><GoVerified id="splitscreenIcons"/> Verified Students</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                                euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                                                Nam quis justo in augue auctor imperdiet.</p>
                                        </li>

                                    </ul>
                                </div>

                            </CardText>
                            <div className="wrapper_continue">
                                <Link to={`/sen/register`}>
                                    <button type="button" className="RegisterButton">
                                        Register as Senior<IoMdArrowRoundForward/>
                                    </button>
                                </Link>
                            </div>
                        </Card>

                        <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>Students</h1><h5>You need an easy and inexpensive solution for your
                                    technical problems?</h5></div>}
                                avatar={<img className="StartPageImage"
                                             src="https://fee.org/media/32732/econ.jpg?anchor=center&mode=crop&width=1920&rnd=131971368770000000"
                                             alt="Image of Student"/>}/>
                            <CardText>
                                    <div id="splitscreenList">

                                        <ul>
                                            <h2>Our Services & Benefits</h2>
                                            <li>
                                                <h3><IoMdCash id="splitscreenIcons"/> Save Money</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                                    euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                                                    Nam quis justo in augue auctor imperdiet.</p>
                                            </li>

                                            <li>

                                                <h3><IoMdLock id="splitscreenIcons"/> Secure</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                                    euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                                                    Nam quis justo in augue auctor imperdiet.</p>
                                            </li>

                                            <li>
                                                <h3><IoIosTimer id="splitscreenIcons"/> Money</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                                    euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                                                    Nam quis justo in augue auctor imperdiet.</p>
                                            </li>

                                        </ul>
                                    </div>
                            </CardText>
                            <div className="wrapper_continue">
                                <Link to={`/stu/register`}>
                                    <button type="button" className="RegisterButton">
                                        Register as Student<IoMdArrowRoundForward/>
                                    </button>
                                </Link>
                            </div>
                        </Card>
                    </Grid>
                    <Grid container>
                        <Card style={style2} className="md-cell--12 md-paper md-paper--1"> 
                            <CardTitle
                                title={<div><h2>Here's what our customers have to say about us:</h2></div>}>
                            </CardTitle>
                            <CardText>
                                <ImageCarousel></ImageCarousel>

                            </CardText>
                        </Card>
                    </Grid>
                </div>
            </StartPage>
        );
    }
};

export default withRouter(SplitScreen);
