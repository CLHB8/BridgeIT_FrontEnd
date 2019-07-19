"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    FontIcon,
    AccessibleFakeButton,
    IconSeparator,
    DropdownMenu, ListItem, MenuButton,
} from 'react-md';
import {IoIosLogOut} from "react-icons/io";
import {withRouter} from 'react-router-dom'
import UserService from '../services/UserService';


class AccountMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    logout() {
        UserService.logout();
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        };
        if (this.props.location.pathname != '/') {
            this.props.history.push('/');
        } else {
            window.location.reload();
        }
    }

    render() {
        return (

            <DropdownMenu
                id="HeaderDropdownMenu"
                menuItems={[
                    <ListItem id="AccountMenu" key={1} leftAvatar={<Avatar icon={<FontIcon>account_circle</FontIcon>}/>}
                              primaryText={this.state.user.username} onClick={() => {
                        UserService.isSenior() ? this.props.history.push('/sen/WelcomePage') : this.props.history.push('/stu/WelcomePage')
                    }}/>,
                    // TODO: needs to be implemented --> Edit View
                    <ListItem id="AccountMenu" key={2} leftAvatar={<Avatar icon={<FontIcon>mode_edit</FontIcon>}/>}
                              primaryText="Edit Profile" onClick={() => {
                        UserService.isSenior() ? this.props.history.push('/sen/WelcomePage') : this.props.history.push('/stu/WelcomePage')
                    }}/>,
                    , {divider: true},
                    <ListItem id="AccountMenu" key={3} leftAvatar={<Avatar icon={<IoIosLogOut/>}/>} primaryText="Logout"
                              onClick={() => this.logout()}/>,
                    {divider: true},

                    <ListItem id="AccountMenu" key={4} style={
                        UserService.isPremium() ? {display: "none"} : {display: "list-item"}
                    } leftAvatar={<Avatar icon={<FontIcon>star</FontIcon>}/>}
                              primaryText="Go Premium" onClick={() => {
                        UserService.isPremium() ? this.props.history.push('/sen/WelcomePage') : this.props.history.push('/stu/WelcomePage')
                    }}/>,
                ]}
                anchor={{
                    x: DropdownMenu.HorizontalAnchors.CENTER,
                    y: DropdownMenu.VerticalAnchors.OVERLAP,
                }}
                position={DropdownMenu.Positions.TOP_LEFT}
                animationPosition="below"
                sameWidth
            >
                <AccessibleFakeButton
                    component={IconSeparator}
                    iconBefore
                    label={
                        <IconSeparator label={this.state.user.username} style={{color: "black"}}>
                            <FontIcon>arrow_drop_down</FontIcon>
                        </IconSeparator>
                    }
                >
                    <Avatar style={{background: "darkblue"}}>{this.state.user.username.charAt(0)}</Avatar>
                </AccessibleFakeButton>
            </DropdownMenu>
        );
    }
}


AccountMenu.propTypes = {
    className: PropTypes.string,
    menuItems: PropTypes.array
};

export default withRouter(AccountMenu);