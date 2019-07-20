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

        this.state={
            loading: true,
            user: this.props.user,
            isSenior: UserService.isSenior()
        }
    }

    componentWillMount() {
        let id = this.props.request._id;
        if(this.state.isSenior){
            RatingsService.getRatingById(id).then((ratingsData) => {
                console.log("WILL MOUNT", ratingsData[0]);
                this.setState({
                    rating: ratingsData[0].RatingBySenior,
                    loading: false
                });
            }).catch((e) => {

                this.setState({
                    rating: 0,
                    loading: false});
                console.error(e);
            })
        }else{
            RatingsService.getRatingById(id).then((ratingsData) => {
                console.log("WILL MOUNT", ratingsData[0]);
                this.setState({
                    rating: ratingsData[0].RatingByStudent,
                    loading: false
                });
            }).catch((e) => {
                this.setState({
                    rating: 0,
                    loading: false});
                console.error(e);
            })
        }
    }


    updateRating(value) {
        const requestId = this.props.request._id;
        let rating;
        if(this.state.isSenior){
            rating = {
                RatingBySenior: value
            }
        }else{
            rating = {
                RatingByStudent: value
            }
        }

        RatingsService.updateRating(requestId, rating).then((data) => {
            console.log(data);
            console.log(data.RatingBySenior);
            if(this.state.isSenior){
                this.setState({rating: data.RatingBySenior})
            }else{
                this.setState({rating: data.RatingByStudent})
            }
            console.log(this.state.rating);
        }).catch((e) => {
            console.error(e);
            this.setState(Object.assign({}, this.state, {error: 'Error while updating rating'}));
        });
    }


/*    static calculateRating(ratingsData){
        let ratingsArray = ratingsData;
        let arrayLength = ratingsArray.length;
        let sumOfRatings = 0;
        let countOfValidRatings = 0;
        let ratingRange = [1, 2, 3, 4, 5];
        if(arrayLength !== 0){
            for (let i = 0; i < arrayLength; i++) {
                let rating = ratingsArray[i]['RatingBySenior'];
                if(ratingRange.includes(rating)){
                    sumOfRatings += rating;
                    countOfValidRatings += 1;
                }
            }
        }
        console.log(sumOfRatings/countOfValidRatings);
        return sumOfRatings/countOfValidRatings;
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        let id = this.props.studentId;

        RatingsService.getStuRatings(id).then((ratingsData) => {
            this.setState({
                studentRating: DisplayRating.calculateRating(ratingsData),
                loading: false
            });

        }).catch((e) => {
            console.error(e);
        })
    }*/

    render() {
        if (this.state.loading) {
            return (<h5>Loading Rating...</h5>);
        }


        return (
            //Neil: Negate (this.state.isPremium) in order to activate, deactivated for testing purposes
            <Rating
                value={this.state.rating}
                max={5}
                disabled={!(this.state.user.isPremium)}
                onChange={(value) => this.updateRating(value)}
            />
        );
    }
}

export default withRouter(RatingStudent);