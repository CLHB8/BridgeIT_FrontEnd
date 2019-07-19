"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { MenuButton, ListItem, Avatar, FontIcon } from 'react-md';
import { withRouter } from 'react-router-dom'

import UserService from  '../services/UserService';
import {IoIosLogOut} from "react-icons/io";

class KebabMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
        console.log(this.state.user.isSenior)
        console.log(this.state.user.isSenior)
        console.log(this.state.user)
    }

    logout() {
        UserService.logout();
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        };
        if(this.props.location.pathname != '/') {
            this.props.history.push('/');
        }
        else {
            window.location.reload();
        }
    }

    render() {
        return (
            <MenuButton
                id={this.props.id}
                icon
                className={this.props.className}
                menu
                menuItems={[
                    <ListItem key={1} leftAvatar={<Avatar icon={<FontIcon>account_circle</FontIcon>}/>} primaryText={this.state.user.username} onClick={() => this.props.history.push('/')}/>,
                    // TODO: needs to be implemented
                    <ListItem key={2} leftAvatar={<Avatar icon={<FontIcon>mode_edit</FontIcon>}/>} primaryText="Edit Profile" onClick={() => this.props.history.push('/sen/WelcomePage')}/>,
                    <ListItem key={3} leftAvatar={<Avatar icon={<IoIosLogOut/>}/>} primaryText="Logout" onClick={() => this.logout()}/>
                ]}
            >
                account_circle
            </MenuButton>
        );
    }
}

KebabMenu.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    menuItems: PropTypes.array
};

export default withRouter(KebabMenu);