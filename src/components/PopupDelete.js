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
        this.props.delete(this.props.id);
    }
    handleClickRep(){
        this.props.delete(this.props.id)
    }

    render(){
    return(
        <Popup trigger={<FontIcon>delete</FontIcon>} position="right center">
            <Grid >
                <Card style={style}><h5>Do you really want to delete this request?</h5></Card>
                <Card style={style}>
                    <Button id="Popup" onClick={() => this.handleClick()}><FontIcon style={{color: 'white'}}  className='material-icons'>delete</FontIcon>Delete</Button>
                </Card>
            </Grid>
        </Popup>
    );
}
}
export default withRouter(PopupDelete);