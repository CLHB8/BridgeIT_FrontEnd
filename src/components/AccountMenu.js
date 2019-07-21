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
            user: UserService.getCurrentUser()
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
    editProfile() {
        UserService.editProfile();
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        };
        if (this.props.location.pathname != '/') {
            this.props.history.push('/');
        } else {
            window.location.reload();
        }
    }

    goPremium(){
        UserService.goPremium(this.state.user.id).then((response) => {
            this.setState({
                user: {
                    username: response.username,
                    id: response.id,
                    isPremium: response.isPremium,
                }
            })
            this.state.onPremiumChange();
        }).catch((e) => {
            console.error(e);
            this.setState(Object.assign({}, this.state, {error: 'Error while going Premium'}));
        });
    }

render()
{

    console.log("ISSENIOR", UserService.isSenior());
    console.log("ISPREMIUM", this.state.user.isPremium);
    console.log("USERNAME", this.state.user.username);
    if (UserService.isSenior() || this.state.user.isPremium) {
        return (
            <DropdownMenu
                id="HeaderDropdownMenu"
                menuItems={[
                    <ListItem id="AccountMenu" key={1}
                              leftAvatar={<Avatar icon={<FontIcon>account_circle</FontIcon>}/>}
                              primaryText={this.state.user.username} onClick={() => {
                        UserService.isSenior() ? this.props.history.push('/sen/WelcomePage') : this.props.history.push('/stu/WelcomePage')
                    }}/>,
                    // TODO: needs to be implemented --> Edit View
                    <ListItem id="AccountMenu" key={2} leftAvatar={<Avatar icon={<FontIcon>mode_edit</FontIcon>}/>}
                              primaryText="Edit Profile" onClick={() => {this.props.history.push('/edit')}}/>,
                    , {divider: true},
                    <ListItem id="AccountMenu" key={3} leftAvatar={<Avatar icon={<IoIosLogOut/>}/>}
                              primaryText="Logout"
                              onClick={() => this.logout()}/>,
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
    } else {
        return (
            <DropdownMenu
                id="HeaderDropdownMenu"
                menuItems={[
                    <ListItem id="AccountMenu" key={1}
                              leftAvatar={<Avatar icon={<FontIcon>account_circle</FontIcon>}/>}
                              primaryText={this.state.user.username} onClick={() => {
                        UserService.isSenior() ? this.props.history.push('/sen/WelcomePage') : this.props.history.push('/stu/WelcomePage')
                    }}/>,


                    // TODO: needs to be implemented --> Edit View
                    <ListItem id="AccountMenu" key={2} leftAvatar={<Avatar icon={<FontIcon>mode_edit</FontIcon>}/>}
                              primaryText="Edit Profile" onClick={() => this.props.history.push('/edit')
                    }/>,


                    <ListItem id="AccountMenu" key={3} leftAvatar={<Avatar icon={<IoIosLogOut/>}/>}
                              primaryText="Logout"
                              onClick={() => this.logout()}/>,


                    this.state.user.isPremium ? {display: "none"} : {divider: true},

                    <ListItem id="AccountMenu" key={4} style={
                        this.state.user.isPremium ? {display: "none"} : {display: "list-item"}
                    } leftAvatar={<Avatar icon={<FontIcon>star</FontIcon>}/>}
                              primaryText="Go Premium" onClick={
                                  ()=>
                        this.goPremium()
                    }/>,
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
                </AccessibleFakeButton >
            </DropdownMenu>
        );
    }

}
}


AccountMenu.propTypes = {
    className: PropTypes.string,
    menuItems: PropTypes.array
};

export default withRouter(AccountMenu);