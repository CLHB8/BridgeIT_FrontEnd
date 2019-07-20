"use strict";

import React from 'react';

import StartPageHeader from './Header/Header'
import Footer from './Footer';


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
            <div className="main-container" style={{background: "whitesmoke"}}>
                {<StartPageHeader title={this.state.title} />}
                {this.props.children}
                {<Footer style={{background: "white"}}/>}
            </div>
        );
    }
}