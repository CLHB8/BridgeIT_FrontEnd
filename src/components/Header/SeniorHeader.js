import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
//import {IconButton} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Link, withRouter} from "react-router-dom";
import UserService from "../../services/UserService";
import {Button, Cell, FontIcon, TableColumn, TableRow, SVGIcon} from "react-md";
import KebabMenu from "../KebabMenu";
import {IoIosLogIn, IoIosLogOut, IoMdHome} from "react-icons/io";
import {makeStyles} from "@material-ui/core";
import AccountMenu from "../AccountMenu";

const style = {"margin-bottom": 0};

const classes = makeStyles(theme => ({
    gap: {
        flexGrow: 1,
    },
    smallGap: {
        flexGrow: 0.01,
    },
    playButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

}));

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user: this.props.user};
    }

    render() {

        {/*Just for debugging, text shows whether you are logged off, or logged in as Student or Senior*/
        }
        {/*
        let textLoggedInAs;
        if (UserService.isAuthenticated()) {
            if (UserService.isSenior()) {
                textLoggedInAs = "Logged in as SENIOR";
            } else {
                textLoggedInAs = "Logged in as STUDENT";
            }
        } else {
            textLoggedInAs = "not logged in";
        }
        */
        }

        let aboutUsButton =
            <Link to={'/help'} class="link">
                <IconButton
                    edge="middle"
                    className={classes.playButton}
                    color="inherit"
                    aria-label="Open drawer"
                >
                    <i className="material-icons" style={{color: "black"}}>group</i>
                    <Typography className={classes.title} variant="h6" noWrap>
                        About Us
                    </Typography>
                </IconButton>
            </Link>;

        let faqButton =
            <Link to={'/help'} class="link">
                <IconButton
                    edge="middle"
                    className={classes.playButton}
                    color="inherit"
                    aria-label="Open drawer"
                >
                    <i className="material-icons" style={{color: "black"}}>help</i>
                    <Typography className={classes.title} variant="h6" noWrap>
                        FAQ
                    </Typography>
                </IconButton>
            </Link>;


        let homeButtonShow = !UserService.isAuthenticated() && !(this.props.location.pathname === "/");
        let homeButton;
        let homeButtonDiv;
        let headerText;
        let loginOrKebabMenue;
        let landingPageWelcomeText;

        if (this.props.location.pathname === "/") {
            landingPageWelcomeText = "Welcome to " + this.props.title
        } else {
            landingPageWelcomeText = ""
        }


        if (UserService.isAuthenticated()) {
            if (UserService.isSenior()) {
                loginOrKebabMenue = <AccountMenu user={this.state.user}/>;
            } else {
                loginOrKebabMenue = <AccountMenu user={this.state.user}/>;
            }
        } else {
            if (!(this.props.location.pathname === "/login"))
                loginOrKebabMenue =
                    <Link to={`/login`} style={{height: 35}}>
                        <button type="button" className="signButtonGreen">
                            <b>Login</b><IoIosLogIn id="middleXLargeIcons"/>
                        </button>
                    </Link>
        }

        if (homeButtonShow) {
            homeButton =
                <Link to={'/'} class="link">
                    <IconButton
                        edge="middle"
                        className={classes.playButton}
                        color="inherit"
                        aria-label="Open drawer"
                    >
                        <i className="material-icons" style={{color: "black"}}>home</i>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Home
                        </Typography>
                    </IconButton>
                </Link>
        }

        if (homeButtonShow) {
            homeButtonDiv =
                <div style={{flexGrow: "0.05"}}/>
        }


        return (
            <div style={{flexGrow: "1"}}>
                <AppBar position="static" style={{background: "white"}}>
                    <Toolbar>
                        {/*Neil: enter here path when clicked it will be redirected to this path*/}
                        <Link to={UserService.isAuthenticated() ?  '/sen/WelcomePage' : '/'}>
                            <img src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 143, height: 44}}/>
                        </Link>
                        <div style={{flexGrow: "1"}}/>

                        {/*Remove Comments if you want to show if you are logged in as Student or Senior*/}
                        {/*<h1>{textLoggedInAs}</h1>*/}


                        {/*Neil: Remove false, if read out loud is implemented*/}
                        {(this.props.location.pathname === "/" || this.props.location.pathname === "/sen/register") & false ?
                            <IconButton
                                edge="middle"
                                color="inherit"
                                aria-label="Open drawer"
                            >
                                <button className="SHButton">
                                    <i className="material-icons">play_circle_filled</i>
                                </button>
                                <Typography variant="h6" noWrap>
                                    Have this read aloud.
                                </Typography>
                            </IconButton> : <h1 style={style}>{landingPageWelcomeText}</h1>}

                        <div style={{flexGrow: "1"}}/>
                        <div className="secondLine">
                            <span><Button flat primary iconChildren="arrow_back" onClick={() => this.props.history.goBack()}>Back</Button></span>
                            <span><Button flat primary iconChildren="home" onClick={() => this.props.history.push('/sen/WelcomePage')}>Start Page</Button></span>
                            <span><Button flat primary iconChildren="library_add" onClick={() => this.props.history.push('/sen/add')}>Add a new Request</Button></span>
                            <span><Button flat primary iconChildren="view_list" onClick={() => this.props.history.push('/sen/myRequests')}>View my Requests</Button></span>
                            <span><Button flat primary iconChildren="help_outline" onClick={() => this.props.history.push('/help')}>Help</Button></span>
                        </div>

                        {homeButton}
                        {homeButtonDiv}
                        {loginOrKebabMenue}
                        


                    </Toolbar>
                </AppBar>
                {/* <AppBar position="static" style={{background: "white", boxShadow: "none", borderBottom: "2px solid black"}}>
                    <Toolbar>
                        <div className="secondLine">
                            <span><Button flat primary iconChildren="arrow_back" onClick={() => this.props.history.goBack()}>Back</Button></span>
                            <span><Button flat primary iconChildren="home" onClick={() => this.props.history.push('/sen/WelcomePage')}>Start Page</Button></span>
                            <span><Button flat primary iconChildren="library_add" onClick={() => this.props.history.push('/sen/add')}>Add a new Request</Button></span>
                            <span><Button flat primary iconChildren="view_list" onClick={() => this.props.history.push('/sen/myRequests')}>View my Requests</Button></span>
                            <span><Button flat primary iconChildren="help_outline" onClick={() => this.props.history.push('/help')}>Help</Button></span>
                        </div>

                    </Toolbar>
                </AppBar> */}
            </div>

        );
    }
};

export default withRouter(Header);