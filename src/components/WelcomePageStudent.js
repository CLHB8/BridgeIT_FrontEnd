"use strict";

import React from 'react';
import StudentPage from './StudentPage';
import OfferPopup from './c_SendOfferPopup';
import {Card, Cell, DataTable, FontIcon, Grid, Media, TableBody, TableColumn, TableHeader, TableRow} from "react-md";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import {Link} from "react-router-dom";

const style = { maxWidth: 500 };

export class WelcomePageStudent extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showPopup:false
        };
    }
    popupHandler() {
        this.setState({
            showPopup: !this.state.showPopup}
        );
    }

    render() {
        return (
            <StudentPage>
                <Card style={style} className="md-block-centered">
                    <Grid className="grid-example">
                        <img src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 286, height: 88}}/>
                            <h5>Welcome to the website of BridgeIT!</h5>
                    </Grid>
                </Card>
                <Grid container spacing={2}>
                    <Card style={style} className="md-block-centered">
                        <CardTitle
                            title={<div><h1>Further tasks!</h1><h5>Here are some tasks you are probably interested in.</h5></div>}
                        avatar={<img className="StartPageImage" src="https://www.noventiz.de/wp-content/uploads/2018/01/Aufgaben_Zentrale_Stelle.png" alt="Task list"/>}/>
                        <div className="wrapper_continue">
                            <Link to={'/sen/myRequests'}>
                                <button type="button" className="ContinueButton" style={{backgroundColor: "blue"}}>
                                    Got to Requests
                                </button>
                            </Link>
                        </div>
                    </Card>
                    <Card style={style} className="md-block-centered">
                        <CardTitle
                            title={<div><h1>Rating</h1><h5>Here are some of your completed tasks. When you have finished, you can rate them here.</h5></div>}
                            avatar={<img className="StartPageImage" src="https://www.e-recht24.de/images/stories/categories/ecommerce/ecommerce2.jpg" alt="Rating Image"/>}/>
                        <CardText>
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
                                <button type="button" className="ContinueButton" style={{backgroundColor: "blue"}} onClick={this.popupHandler.bind(this)}>
                                    Rate
                                </button>
                            <OfferPopup visibility={this.state.showPopup}></OfferPopup>
                        </div>
                    </Card>
                </Grid>
            </StudentPage>
        );
    }
}