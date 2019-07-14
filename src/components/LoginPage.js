"use strict";

import React from 'react';

import Header from './Header/LoginHeader';
import Footer from './Footer';


export default class LoginPage extends React.Component {

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
                {<Header title={this.state.title} />}
                {this.props.children}
                {<Footer />}
            </section>
        );
    }
}