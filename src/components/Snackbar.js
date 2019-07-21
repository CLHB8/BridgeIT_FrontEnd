
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {withRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class Snackbar extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler(){
        toast("Wow so easy!");
    }

    render(){
        return (
            <div>
                <button onClick={() => this.onClickHandler()}>Notify !</button>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
            </div>
        );
    }
}

export default withRouter(Snackbar);