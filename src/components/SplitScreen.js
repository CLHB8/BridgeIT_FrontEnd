"use strict";

import React from 'react';
import {Card, Button, TextField, FontIcon, Grid, Subheader} from 'react-md';
import { withRouter, Link } from 'react-router-dom';

import { AlertMessage } from './AlertMessage';
import StartPage from './StartPage';
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import CardActions from "react-md/lib/Cards/CardActions";

const style = { maxWidth: 500 };



class SplitScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <StartPage>
                <Grid container spacing={2}>
                    <Card style={style} className="md-block-centered">
                        <CardTitle
                            title={<div><h1>Seniors</h1><h5>You need an easy and inex-<br />pensive solution for your<br />technical problems?</h5></div>}
                            avatar={<img className="StartPageImage" src="https://www.manitobaseniorcentres.com/wp-content/uploads/2012/05/strengths.jpg" alt="Image of Senior"/>}/>
                        <CardText>
                            <h5>More Information</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                                Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                                cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
                                lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
                                in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
                                sodales, et gravida augue faucibus. Maecenas quis porttitor nunc. Suspendisse congue
                                ipsum arcu, id aliquam ante dignissim non. Donec maximus, sapien in faucibus molestie,
                                eros nisi ornare neque, et vulputate augue velit vel ante. Phasellus rhoncus, elit
                                cursus accumsan viverra, mi lectus dictum elit, non vehicula diam nunc non lectus.
                                Sed elementum, risus eget fermentum accumsan, nunc ante commodo diam, eget pulvinar
                                risus velit eu sapien. Nunc vitae pellentesque nisl.
                            </p>

                        </CardText>
                        <div className="wrapper_continue">
                            <Link to={`/login`}>
                                <button type="button" className="ContinueButton">
                                    Continue as Senior<FontIcon>arrow_forward_ios</FontIcon>
                                </button>
                            </Link>
                        </div>
                    </Card>

                    <Card style={style} className="md-block-centered">
                        <CardTitle
                            title={<div><h1>Students</h1><h5>You need an easy and inex-<br />pensive solution for your<br />technical problems?</h5></div>}
                            avatar={<img className="StartPageImage" src="https://www.gesundheitsstadt-berlin.de/fileadmin/_processed_/9/2/csm_student-kopfschmerz_5f65cc65e2.jpg" alt="Image of Student"/>}/>
                        <CardText>
                            <h5>More Information</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                                Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                                cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
                                lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
                                in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
                                sodales, et gravida augue faucibus. Maecenas quis porttitor nunc. Suspendisse congue
                                ipsum arcu, id aliquam ante dignissim non. Donec maximus, sapien in faucibus molestie,
                                eros nisi ornare neque, et vulputate augue velit vel ante. Phasellus rhoncus, elit
                                cursus accumsan viverra, mi lectus dictum elit, non vehicula diam nunc non lectus.
                                Sed elementum, risus eget fermentum accumsan, nunc ante commodo diam, eget pulvinar
                                risus velit eu sapien. Nunc vitae pellentesque nisl.
                            </p>

                        </CardText>
                        <div className="wrapper_continue">
                            <Link to={`/login`}>
                                <button type="button" className="ContinueButton">
                                    Continue as Senior<FontIcon>arrow_forward_ios</FontIcon>
                                </button>
                            </Link>
                        </div>
                    </Card>
                </Grid>
            </StartPage>
        );
    }
};

export default withRouter(SplitScreen);


/*
<div className="image_senior">

    <div>
        <img onClick={() => this.props.history.push('/')} src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 143, height: 44}}/>
        <h1>Seniors</h1>
    </div>

</div>


<p>You need an easy and inexpensive solution for your technical problems?</p>
<Link to={`/login`}>Continue as Student<FontIcon>arrow_forward_ios</FontIcon></Link>
*/