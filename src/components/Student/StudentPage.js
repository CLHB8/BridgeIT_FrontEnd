"use strict";

import React from 'react';

import StudentHeader from '../Header/StudentHeader';
import Footer from '../Footer';


export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            user: this.props.user
        };
        this.handlePremiumChange = this.handlePremiumChange.bind(this);
    }

    handlePremiumChange() {
        this.props.onPremiumChange();
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
                <StudentHeader title={this.state.title} user={this.state.user} onPremiumChange={this.handlePremiumChange}/>
                {this.props.children}
                {<Footer />}
            </section>
            </div>
        );
    }
}