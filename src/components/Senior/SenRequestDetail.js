"use strict";

import React from 'react';
import { Link } from 'react-router-dom'
import { Avatar, Card, CardTitle, CardText, CardActions, Media, MediaOverlay, Grid, Cell, Button, FontIcon } from 'react-md';

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
                <Card style={style} className="md-block-centered">
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
                    </Grid>


                </Card>
            </SeniorPage>
        );
    }
}