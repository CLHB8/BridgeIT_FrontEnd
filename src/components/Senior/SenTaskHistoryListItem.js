"use strict";

import React from 'react';
import {FontIcon, Avatar, ListItem } from 'react-md';


import UserService from '../../services/UserService';

export class SenTaskHistoryListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                leftAvatar={<Avatar suffix="deep-purple">{(this.props.request.category).slice(0,2)}</Avatar>}
                rightIcon={<FontIcon>star</FontIcon>}
                primaryText={this.props.request.category}
                secondaryText={this.props.request.createdAt}
                threeLines
            />
        )

    }

}