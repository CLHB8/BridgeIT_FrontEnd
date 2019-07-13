import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {MDBCol} from "mdbreact";

const useStyles = makeStyles(theme => ({
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

export default function StudentRegisterHeader() {
    const classes = useStyles();

    return (
        <div className={classes.gap}>
            <AppBar position="static" style={{background: "white"}}>
                <Toolbar>
                    {/*Neil: enter here path when clicked it will be redirected to this path*/}
                    <Link to={`/`}>
                        <img src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 143, height: 44}}/>
                    </Link>

                    <div className={classes.gap}/>


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
                    </Link>


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
                    </Link>


                    <Link to={'/'} class="link" >
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

                    <div className={classes.smallGap}/>

                    {/*Neil: enter here path when clicked it will be redirected to this path*/}
                    <Link to={'/login'}  >
                        <IconButton
                            edge="middle"
                            className={classes.playButton}
                            color="inherit"
                            aria-label="Open drawer"
                            class="SignInButton"
                        >
                            <i className="material-icons" style={{color: "white"}}>arrow_forward</i>
                            <Typography className={classes.title} variant="h6" noWrap style={{color: "white"}}>
                                Login
                            </Typography>
                        </IconButton>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}