import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link, withRouter} from "react-router-dom";
import UserService from "../../services/UserService";
import {Button, Cell, FontIcon, TableColumn, TableRow, SVGIcon} from "react-md";
import KebabMenu from "../KebabMenu";
import {IoIosLogIn, IoIosLogOut, IoMdHome} from "react-icons/io";
import {makeStyles} from "@material-ui/core";
import AccountMenu from "../AccountMenu";

const style = {"marginBottom": 0};

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

class StudentHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        };
        this.handlePremiumChange = this.handlePremiumChange.bind(this);
    }

    handlePremiumChange() {
        this.props.onPremiumChange();
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
        }else {
            landingPageWelcomeText = ""
        }


        if (UserService.isAuthenticated()) {
            if (UserService.isSenior()) {
                loginOrKebabMenue = <AccountMenu user={this.props.user} onPremiumChange={this.handlePremiumChange}/>;
            } else {
                loginOrKebabMenue = <AccountMenu user={this.props.user} onPremiumChange={this.handlePremiumChange}/>;
            }
        } else {
            if (!(this.props.location.pathname === "/login"))
                loginOrKebabMenue =
                    <Link to={`/login`} style={{height: 35}}>
                        <button type="button" className="signButtonGreen">
                            Login<IoIosLogIn/>
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
                        <Link to={'/stu/WelcomePage'}>
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

                        <Button flat primary iconChildren="home" onClick={() => this.props.history.push('/stu/WelcomePage')}>Home
                        </Button>
                        <Button flat primary iconChildren="list" onClick={() => this.props.history.push('/stu/TaskListView')}>All Requests
                        </Button>
                        <Button flat primary iconChildren="assignment" onClick={() => this.props.history.push('/stu/myOffers')}>My offers
                        </Button>
                        <div style={{flexGrow: "0.05"}}/>
                        {homeButton}
                        {homeButtonDiv}
                        {loginOrKebabMenue}

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};

export default withRouter(StudentHeader);