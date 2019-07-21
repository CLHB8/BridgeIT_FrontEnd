"use strict";

import React from 'react';
import {withRouter} from 'react-router-dom';
import Rating from 'material-ui-rating'

import RatingsService from '../services/RatingsService'
import UserService from "../services/UserService";

class DisplayRating extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            studentRating: 0,
            countOfValidRatings: 0,
            user: this.props.user,
        }
    }

    static calculateRating(ratingsData) {
        let ratingsArray = ratingsData;
        let arrayLength = ratingsArray.length;
        let sumOfRatings = 0;
        let countOfValidRatings = 0;
        let ratingRange = [1, 2, 3, 4, 5];
        console.log("SUM1", sumOfRatings);
        console.log("SUM1", countOfValidRatings);
        if (arrayLength !== 0) {
            if (UserService.isSenior()) {
                for (let i = 0; i < arrayLength; i++) {
                    let rating = ratingsArray[i]['RatingByStudent'];
                    if (ratingRange.includes(rating)) {
                        sumOfRatings += rating;
                        countOfValidRatings += 1;
                    }
                }
            } else {
                for (let i = 0; i < arrayLength; i++) {
                    let rating = ratingsArray[i]['RatingBySenior'];
                    if (ratingRange.includes(rating)) {
                        sumOfRatings += rating;
                        countOfValidRatings += 1;
                    }
                }
            }
            console.log("SUM", sumOfRatings);
            console.log("SUM", countOfValidRatings);
            return [sumOfRatings / countOfValidRatings, countOfValidRatings];
        }
        return 0;
    }

    componentWillMount() {
        this.setState({
            loading: true,
        });

        let id = this.state.user.id;

        if (UserService.isSenior()) {
            RatingsService.getSenRatings(id).then((ratingsData) => {
                this.setState({
                    studentRating: DisplayRating.calculateRating(ratingsData)[0],
                    countOfValidRatings: DisplayRating.calculateRating(ratingsData)[1],
                    loading: false
                });

            }).catch((e) => {
                console.error(e);
            })
        } else {
            RatingsService.getStuRatings(id).then((ratingsData) => {
                this.setState({
                    studentRating: DisplayRating.calculateRating(ratingsData)[0],
                    countOfValidRatings: DisplayRating.calculateRating(ratingsData)[1],
                    loading: false
                });

            }).catch((e) => {
                console.error(e);
            })
        }

    }

    render() {
        if (this.state.loading) {
            return (<h5>Loading Rating...</h5>);
        }

        return (
            <div>

                <Rating
                    value={this.state.studentRating}
                    max={5}
                    readOnly={true}
                    /*onChange={(value) => console.log(`Rated with value ${value}`)}*/
                />
                <p>({this.state.countOfValidRatings} Ratings)</p>
            </div>

        );
    }
}

export default withRouter(DisplayRating);