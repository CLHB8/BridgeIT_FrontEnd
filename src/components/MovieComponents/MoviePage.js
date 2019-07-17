"use strict";

import React from 'react';

import Header from '../Header/MovieDBHeader';
import Footer from '../Footer';


export default class MoviePage extends React.Component {

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
            <div className="main-container">
            <section>
                {<Header title={this.state.title} />}
                {this.props.children}
                {<Footer />}
            </section>
            </div>
        );
    }
}