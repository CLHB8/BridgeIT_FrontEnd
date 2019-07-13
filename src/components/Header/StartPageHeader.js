import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
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

export default function StartPageHeader() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{background: "white"}}>
                <Toolbar>
                    {/*Neil: enter here path when clicked it will be redirected to this path*/}
                    <Link to={`/`}>
                        <img src={"https://i.imgur.com/0ig5Y7g.png"} style={{width: 143, height: 44}}/>
                    </Link>
                    <div className={classes.grow}/>


                    <IconButton
                        edge="middle"
                        className={classes.playButton}
                        color="inherit"
                        aria-label="Open drawer"
                    >
                        <button className="SHButton">
                            <i className="material-icons">play_circle_filled</i>
                        </button>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Have this read aloud.
                        </Typography>
                    </IconButton>

                    <div className={classes.grow}/>

                    {/*Neil: enter here path when clicked it will be redirected to this path*/}
                    <Link to={`/login`} style={{height: 35}}>
                        <button color="inherit" type="button" className="SignInButton">
                            sign in
                        </button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}