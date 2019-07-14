"use strict";

import React from 'react';
import {Card, Button, TextField, FontIcon, Grid, Subheader} from 'react-md';
import {withRouter, Link} from 'react-router-dom';

import {AlertMessage} from './AlertMessage';
import Page from './LoginPage';
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import CardActions from "react-md/lib/Cards/CardActions";

const style = {margin: "40px"};


class SplitScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Page>
                <Card style={style}>
                    <CardTitle
                        title={<h1>Frequently Asked Questions</h1>}/>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Card style={style} className="md-block-centered">
                                <CardTitle
                                    title={<div><h1>1. Question 1</h1><h5>Is BridgeIt for free?</h5></div>}/>
                                <CardText>
                                    <h5>1. Answer</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                                        Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                                        cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
                                        lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
                                        in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
                                        sodales, et gravida augue faucibus.
                                    </p>
                                </CardText>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>                    <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>1. Question 1</h1><h5>Is BridgeIt for free?</h5></div>}/>
                            <CardText>
                                <h5>1. Answer</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                                    Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                                    cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
                                    lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
                                    in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
                                    sodales, et gravida augue faucibus.
                                </p>
                            </CardText>
                        </Card>
                        </Grid>
                        <Grid item xs={3}>                    <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>1. Question 1</h1><h5>Is BridgeIt for free?</h5></div>}/>
                            <CardText>
                                <h5>1. Answer</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                                    Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                                    cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
                                    lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
                                    in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
                                    sodales, et gravida augue faucibus.
                                </p>
                            </CardText>
                        </Card>
                        </Grid>
                        <Grid item xs={3}>                    <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>1. Question 1</h1><h5>Is BridgeIt for free?</h5></div>}/>
                            <CardText>
                                <h5>1. Answer</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                                    Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                                    cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
                                    lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
                                    in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
                                    sodales, et gravida augue faucibus.
                                </p>
                            </CardText>
                        </Card>
                        </Grid>
                        <Grid item xs={8}>                    <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>1. Question 1</h1><h5>Is BridgeIt for free?</h5></div>}/>
                            <CardText>
                                <h5>1. Answer</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                                    Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                                    cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
                                    lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
                                    in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
                                    sodales, et gravida augue faucibus.
                                </p>
                            </CardText>
                        </Card>
                        </Grid>
                        <Grid item xs={4}>                    <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>1. Question 1</h1><h5>Is BridgeIt for free?</h5></div>}/>
                            <CardText>
                                <h5>1. Answer</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                                    Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                                    cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
                                    lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
                                    in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
                                    sodales, et gravida augue faucibus.
                                </p>
                            </CardText>
                        </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Page>
        );
    }
};

export default withRouter(SplitScreen);
