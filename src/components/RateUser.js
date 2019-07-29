"use strict";

import React from 'react';
import {withRouter} from 'react-router-dom';
import Rating from 'material-ui-rating'

import RatingsService from '../services/RatingsService'
import UserService from '../services/UserService'
import StuOfferService from "../services/StuOfferService";

class RatingStudent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            user: this.props.user,
            isSenior: UserService.isSenior()
        }
    }

    componentWillMount() {
        let id = this.props.request._id;
        if (this.state.isSenior) {
            RatingsService.getRatingById(id).then((ratingsData) => {
                console.log("WILL MOUNT", ratingsData[0]);
                this.setState({
                    rating: ratingsData[0].RatingBySenior,
                    loading: false
                });
            }).catch((e) => {

                this.setState({
                    rating: 0,
                    loading: false
                });
                console.error(e);
            })
        } else {
            RatingsService.getRatingById(id).then((ratingsData) => {
                console.log("WILL MOUNT", ratingsData[0]);
                this.setState({
                    rating: ratingsData[0].RatingByStudent,
                    loading: false
                });
            }).catch((e) => {
                this.setState({
                    rating: 0,
                    loading: false
                });
                console.error(e);
            })
        }
    }


    updateRating(value) {
        const requestId = this.props.request._id;
        let rating;
        if (this.state.isSenior) {
            rating = {
                RatingBySenior: value
            }
        } else {
            rating = {
                RatingByStudent: value
            }
        }

        RatingsService.updateRating(requestId, rating).then((data) => {
            if (this.state.isSenior) {
                this.setState({rating: data.RatingBySenior})
            } else {
                this.setState({rating: data.RatingByStudent})
            }
        }).catch((e) => {
            console.error(e);
            this.setState(Object.assign({}, this.state, {error: 'Error while updating rating'}));
        });
    }


    render() {
        if (this.state.loading) {
            return (<h5>Loading Rating...</h5>);
        }


        return (
            //Neil: Negate (this.state.isPremium) in order to activate, deactivated for testing purposes
            <Rating
                value={this.state.rating}
                max={5}
                disabled={false}
                onChange={(value) => this.updateRating(value)}
            />
        );
    }
}

export default withRouter(RatingStudent);