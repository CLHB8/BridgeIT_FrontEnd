"use strict";

import React from 'react';

import G_SeniorHeader  from './g_SeniorHeader';
import { Footer } from './Footer';


export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    componentDidMount(){
       this.setState({
           title: document.title
       });
    }

    render() {
        return (
            <section>
                <G_SeniorHeader />
                {this.props.children}
                <Footer />
            </section>
        );
    }
}