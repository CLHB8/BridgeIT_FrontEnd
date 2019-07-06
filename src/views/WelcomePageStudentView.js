"use strict";

import React from 'react';

import { WelcomePageStudent } from '../components/WelcomePageStudent';

export class WelcomePageStudentView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        //tbd: was soll er laden? Eigentlich gar nix... dann return... xyz
    }

//tbd: export
}