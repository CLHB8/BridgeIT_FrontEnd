import Popup from "reactjs-popup";
import {Button, FontIcon} from "react-md";
import React from "react";
import {withRouter} from "react-router-dom";

class PopupDelete extends React.Component{
    constructor(props) {
        super(props);
    }
    handleClick(){
        this.props.delete(this.props.id)
    }

    render(){
        return(
            <Popup trigger={<FontIcon>delete</FontIcon>} position="right center">
                <div>Are you sure you want to delete?
                    <Button onClick={() => this.handleClick() }>Delete</Button>
                </div>
            </Popup>
        );
    }
}
export default withRouter(PopupDelete);