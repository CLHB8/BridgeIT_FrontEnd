"use strict";

import React from 'react';
import {Card, Button, TextField, FontIcon, Grid, Subheader} from 'react-md';
import {withRouter, Link} from 'react-router-dom';

import {AlertMessage} from './AlertMessage';
import Page from './Page';
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import CardActions from "react-md/lib/Cards/CardActions";

const style = {margin: "40px"};


class Faq extends React.Component {

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
                                    title={<div><h1>What is BridgeIT?</h1></div>}/>
                                <CardText>
                                    <h4>BridgeIT is an online platform that wants to bridge the technological gap
                                        between today’s seniors and students. The platform will help our senior citizens
                                        to seek help from university students regarding their everyday technological
                                        needs. This also gives students the opportunity to help our elderly as well as
                                        earn some money.
                                    </h4>

                                </CardText>
                            </Card>
                        </Grid>
                        <Grid item xs={3}> <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>Is BridgeIT free?</h1></div>}/>
                            <CardText>
                                <h4>BridgeIT is completely free platform for seniors. For students though, we have a
                                    subscription model. But students can still use it and offer help upto 3 times each
                                    month without any restrictions.</h4>

                            </CardText>
                        </Card>
                        </Grid>
                        <Grid item xs={3}> <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>How do I know someone is actually student?</h1></div>}/>
                            <CardText>
                                <h4>Students are required to verify their identity using their student email and
                                    matriculation document when they sign up. This ensures only authentic students can
                                    use the platform.</h4>

                            </CardText>
                        </Card>
                        </Grid>
                        <Grid item xs={3}> <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>How to meet seniors in person?</h1></div>}/>
                            <CardText>
                                <h4>Once a senior accepts your request, you can contact them via phone and arrange a
                                    meeting with them. Usually, you have to go to their home and provide hands-on
                                    teaching experience.</h4>

                            </CardText>
                        </Card>
                        </Grid>
                        <Grid item xs={8}> <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>What are the subscription benefits?</h1></div>}/>
                            <CardText>
                                <h4>Students can purchase a monthly subscription plan - this will remove 3 offers/month
                                    restriction and also ads from their dashboard. Moreover, students will gain the
                                    ability to see their ratings.
                                </h4>
                            </CardText>
                        </Card>
                        </Grid>
                        <Grid item xs={4}> <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={<div><h1>Are my data safe?</h1></div>}/>
                            <CardText>
                                <h4>BridgeIT complies with standard data compliance and privacy regulations. Your data
                                    stays in the system and not sold to third parties. The ads on the website are
                                    generic for the user base.</h4>

                            </CardText>
                        </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Page>
        );
    }
};

export default withRouter(Faq);
