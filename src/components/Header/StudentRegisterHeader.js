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

export default function StudentRegisterHeader() {
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