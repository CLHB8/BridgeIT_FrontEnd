"use strict";

import React from 'react';

import Header from '../Header/SeniorHeader';
import Footer from '../Footer';


export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            user: this.props.user
        }

    }

    componentDidMount() {
        this.setState({
            title: document.title
        });
    }

    render() {
        return (
            <div className="main-container">
                <Header title={this.state.title} user={this.state.user}/>
                {this.props.children}
                {<Footer/>}
            </div>
        );
    }
}