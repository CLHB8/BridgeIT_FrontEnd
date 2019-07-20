"use strict";

import React from 'react';
import { Link } from 'react-router-dom'
// import { Avatar, Card, CardTitle, CardText, CardActions, Media, MediaOverlay, Grid, Cell, Button, FontIcon } from 'react-md';
import {Card, CardActions, Icon, CardActionArea, CardContent, CardMedia, Typography, Divider, Button, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary} from '@material-ui/core';
//import {CardText} from 'react-md';
import SeniorPage from './SeniorPage';
import { SenStudentAnswersList } from './SenStudentAnswersList';

import RequestService from '../../services/RequestService';
import StuOfferService from "../../services/StuOfferService";

const style = { maxWidth: 900 };

export class SenRequestDetail extends React.Component {

    constructor(props) {
        super(props);
    }
/*
    deleteStuOffer(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        StuOfferService.deleteStuOffer(id).then((message) => {

            let stuOfferIndex = this.state.data.map(stuOffer => stuOffer['_id']).indexOf(id);
            let stuOffers = this.state.data;
            stuOffers.splice(stuOfferIndex, 1);
            this.setState({
                data: [...stuOffers],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }
*/

    render() {
        return (
            <SeniorPage>


<Card className="genericCard">
                        <CardActionArea>
                            <CardMedia
                            className="cardMedia"
                            image="https://i.imgur.com/dv1LM2R.jpg"
                            title="Smartphones"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.request.title}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h3">
                                Category: {this.props.request.category}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.request.specification}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <div className="md-cell md-cell--12">
                            
                            <div className="formButton">
                                    <Link to={`/edit/${this.props.request._id}`}><Button className="md-cell md-cell--3" color="primary" variant="contained">Edit</Button></Link>
                                    <Button className="md-cell md-cell--3" color="secondary" variant="contained">Delete</Button>
                                    </div></div>
                        </CardActions>

                        <CardContent>
                        <Divider/>

                            <Typography gutterBottom variant="h6" component="h3">
                                Our recommended Student is: {/* Enter Best Student Name and option to choose him*/}
                            </Typography>
                        

                        <ExpansionPanel>
                            <ExpansionPanelSummary
                            expandIcon={<Icon>arrow_drop_down_circle</Icon>}
                            >
                                Don't like it?<br/>
                                View offers from other students below:

                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>

                            <SenStudentAnswersList stuOffers={this.props.stuOffers} />

                            </ExpansionPanelDetails>

                        

                        </ExpansionPanel>

                            
                            
                        </CardContent>    



                        </Card>





                {/* <Card style={style} className="md-block-centered">
                    <Grid className="grid-example" >
                        <Cell size={12}>
                            <h3>Here is the request you posted.</h3>
                            <h3>You can now choose between all the students that replied to your request.</h3>
                        </Cell>
                        <Cell size={12}>
                            <Card style={{maxWidth: 800}} className="md-block-centered">
                                <CardTitle
                                    title={this.props.request.title}
                                    subtitle={this.props.request.category}
                                    avatar={<Avatar src={"https://s3.euronics.ee/UserFiles/Products/Images/147086-iphone7-plus-gold-1.png"} role="presentation" />}
                                />
                                <CardActions expander>
                                    <Button flat>Edit</Button>
                                    <Button flat>Delete</Button>
                                </CardActions>
                                <CardText expandable>
                                    <p>
                                        {this.props.request.specification}
                                    </p>
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell size={3}>
                            <h3>Our recommended students:</h3>
                        </Cell>
                        <Cell size={12}>
                            <SenStudentAnswersList stuOffers={this.props.stuOffers} />
                        </Cell>
                    </Grid> */}


                {/* </Card> */}
            </SeniorPage>
        );
    }
}