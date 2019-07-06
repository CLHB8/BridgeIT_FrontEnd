"use strict";

import React from 'react';

import StudentHeader from './g_StudentHeader';
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
                <StudentHeader title={this.state.title} />
                {this.props.children}
                <Footer />
            </section>
        );
    }
}