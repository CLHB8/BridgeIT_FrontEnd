"use strict";

import React from 'react';
import SeniorPage from './SeniorPage';
import {Card, Cell, Grid, Media} from "react-md";

const style = { maxWidth: 500 };

export class WelcomePageSenior extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SeniorPage>
                <Card style={style} className="md-block-centered">
                    <Grid className="grid-example">
                        <Cell size={3}>
                            <Media aspectRatio="1-1">
                                <img src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 143, height: 44}}/>
                            </Media>
                        </Cell>
                        <Cell size={7}/>
                        <Cell size={3}>
                            Welcome to the Senior Homepage!
                        </Cell>
                    </Grid>
                </Card>
            </SeniorPage>
        );
    }
}