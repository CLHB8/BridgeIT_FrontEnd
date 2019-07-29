"use strict";

import React from 'react';
import {Toolbar, Button} from 'react-md';
import {withRouter} from 'react-router-dom'
import {Divider, Card} from '@material-ui/core';

const cardstyle = {
    marginTop: 20,
    marginLeft: 15,
};

const CatSideBar = (props) => {

    return (

        <div>

            <Card style={cardstyle}>

                <div className="categories">
                    <h2>Categories: </h2>
                    <Divider/>
                    <ul>
                        <li>
                            <button>All Categories</button>
                        </li>
                        <li>
                            <button>Smartphone Coaching</button>
                        </li>
                        <li>
                            <button>PC/Laptop Coaching</button>
                        </li>
                        <li>
                            <button>TV Coaching</button>
                        </li>
                        <li>
                            <button>Others</button>
                        </li>
                    </ul>
                </div>
                <Divider/>


                {props.user.isPremium ?
                    <div className="premiumShow">
                        <p>Thank you for being a Premium Member on our Platform.</p>
                    </div> : <div style={{"text-align":"center"}}>
                        <div className="subscriptionAd">
                            <p style={{"margin-bottom": "0"}}>You want unlimited offers? Join our monthly subscription.</p>

                        </div>
                        <div>
                            <img width="200px" height=""
                                 src="https://cdna.artstation.com/p/assets/images/images/012/644/826/large/brandon-moore-redbullnorm.jpg?1535804427"/>
                            <p style={{"font-style": "italic"}}>Advertising</p>
                        </div>
                    </div>}


            </Card>
        </div>
    )


}

export default withRouter(CatSideBar);