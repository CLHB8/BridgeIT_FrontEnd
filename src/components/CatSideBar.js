"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'
import { Divider } from '@material-ui/core';

const CatSideBar = (props) => {

        return(

            <div>

                <div className="categories">
                    <h2>Categories: </h2>
                    <ul>
                    <li><button>All Categories</button></li>
                    <li><button>Smartphone Coaching</button></li>
                    <li><button>PC/Laptop Coaching</button></li>
                    <li><button>TV Coaching</button></li>
                    <li><button>Others</button></li>
                    </ul>
 

                </div>
                <Divider />


                <div className="subscriptionAd">
                    <p>You have {props.ad} free offers remaining this month.<br/> Want to do more? Join our monthly subcription.</p>
                </div>




                </div>
        )

   
}

export default withRouter(CatSideBar);