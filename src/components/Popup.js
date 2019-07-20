import Popup from "reactjs-popup";
import {Button, FontIcon} from "react-md";
import React from "react";
import {withRouter} from "react-router-dom";

class PopupExample extends React.Component{
    constructor(props) {
        super(props);
    }
    handleClick(){
        this.props.history.push(`/show/${this.props.id}`)
    }

    render(){
    return(
    <Popup trigger={<FontIcon>mode_edit</FontIcon>} position="right center">
        <div>Are you sure you want to delete?
            <Button onClick={() => this.handleClick()}>YES</Button>
        </div>
    </Popup>
    );
    }
}
export default withRouter(PopupExample);