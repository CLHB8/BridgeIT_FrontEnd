"use strict";

import React from 'react';

import StudentRegisterHeader from '../Header/StudentRegisterHeader'
import Footer from '../Footer';


export default class StudentRegisterPage extends React.Component {

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
                {<StudentRegisterHeader title={this.state.title} />}
                {this.props.children}
                {<Footer />}
            </section>
        );
    }
}