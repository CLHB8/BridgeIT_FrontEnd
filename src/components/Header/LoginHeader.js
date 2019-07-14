import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    gap: {
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

export default function LoginHeader() {
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

                    <div className={classes.gap}/>

                    {/*Neil: enter here path when clicked it will be redirected to this path*/}
                    <Link to={`/`} style={{height: 35}}>
                        <button color="inherit" type="button" className="HomeButton">
                            Home
                        </button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}