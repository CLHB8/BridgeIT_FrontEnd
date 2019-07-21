import Popup from "reactjs-popup";
import {Button, FontIcon} from "react-md";
import React from "react";
import {withRouter} from "react-router-dom";
import {Grid, Card} from "@material-ui/core";

const style = {  "display": "flex",
    "align-items": "center",
    "justify-content": "center",
    "box-shadow": 0,
    "border-radius":0}

class PopupDelete extends React.Component{
    constructor(props) {
        super(props);
    }
    handleClick(){
        this.props.updateRequest();
    }

    render(){
        return(
            <Popup trigger={<FontIcon className='material-icons'>check_circle</FontIcon>} position="left center">
                <Grid >
                    <Card style={style}><h5>Do you really want to select this student?</h5></Card>
                    <Card style={style}>
                        <Button id="Popup" onClick={() => this.handleClick()}><FontIcon style={{color: 'white'}} className='material-icons'>check_circle</FontIcon>Choose</Button>
                    </Card>
                </Grid>
            </Popup>
        );
    }
}
export default withRouter(PopupDelete);