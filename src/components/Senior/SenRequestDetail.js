"use strict";

import React from 'react';
import { Link } from 'react-router-dom'
import { Avatar, Card, CardTitle, CardText, CardActions, Media, MediaOverlay, Grid, Cell, Button, FontIcon } from 'react-md';

import SeniorPage from './SeniorPage';

import RequestService from '../../services/RequestService';

const style = { maxWidth: 900 };

export class SenRequestDetail extends React.Component {

    constructor(props) {
        super(props);
    }

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
                            <Card style={{maxWidth: 800}} className="md-block-centered">
                                <CardTitle title={this.props.request.title} subtitle={this.props.request.category} />
                            </Card>
                        </Cell>
                    </Grid>


                </Card>
            </SeniorPage>
        );
    }
}