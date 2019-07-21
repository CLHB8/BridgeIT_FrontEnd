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
            studentsRating: 0,
            seniorsRating: 0,
            countOfValidRatingsStudent: 0,
            countOfValidRatingsSenior: 0,
            user: this.props.user,
        }
    }

    static calculateRatingSen(ratingsData) {
        let ratingsArray = ratingsData;
        let arrayLength = ratingsArray.length;
        let sumOfRatings = 0;
        let countOfValidRatings = 0;
        let ratingRange = [1, 2, 3, 4, 5];
        console.log("SUM1", ratingsData);
        console.log("SUM1", sumOfRatings);
        console.log("SUM1", countOfValidRatings);
        if (arrayLength !== 0) {
            for (let i = 0; i < arrayLength; i++) {
                let rating = ratingsArray[i]['RatingByStudent'];
                if (ratingRange.includes(rating)) {
                    sumOfRatings += rating;
                    countOfValidRatings += 1;
                }
            }

            console.log("SUM", sumOfRatings);
            console.log("SUM", countOfValidRatings);
            return [sumOfRatings / countOfValidRatings, countOfValidRatings];
        }
        return 0;
    }

    static calculateRatingStu(ratingsData) {
        let ratingsArray = ratingsData;
        let arrayLength = ratingsArray.length;
        let sumOfRatings = 0;
        let countOfValidRatings = 0;
        let ratingRange = [1, 2, 3, 4, 5];
        console.log("SUM1", ratingsData);
        console.log("SUM1", sumOfRatings);
        console.log("SUM1", countOfValidRatings);
        if (arrayLength !== 0) {
            for (let i = 0; i < arrayLength; i++) {
                let rating = ratingsArray[i]['RatingBySenior'];
                if (ratingRange.includes(rating)) {
                    sumOfRatings += rating;
                    countOfValidRatings += 1;
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




        if (UserService.isSenior() && this.props.displayStudentRating) {
            console.log("SENIOR BUT DISPLAY STUDENT");
            RatingsService.getStuRatings(this.props.studentId).then((ratingsDataStu) => {
                this.setState({
                    studentsRating: DisplayRating.calculateRatingStu(ratingsDataStu)[0],
                    countOfValidRatingsStudent: DisplayRating.calculateRatingStu(ratingsDataStu)[1],
                    loading: false
                });

            }).catch((e) => {
                console.error(e);
            })
        } else {
            let id = UserService.getCurrentUser().id;
            if (this.props.displayStudentRating) {
                RatingsService.getStuRatings(id).then((ratingsDataStu) => {
                    this.setState({
                        studentsRating: DisplayRating.calculateRatingStu(ratingsDataStu)[0],
                        countOfValidRatingsStudent: DisplayRating.calculateRatingStu(ratingsDataStu)[1],
                        loading: false
                    });

                }).catch((e) => {
                    console.error(e);
                })
            } else {
                RatingsService.getSenRatings(id).then((ratingsDataSen) => {
                    this.setState({
                        seniorsRating: DisplayRating.calculateRatingSen(ratingsDataSen)[0],
                        countOfValidRatingsSenior: DisplayRating.calculateRatingSen(ratingsDataSen)[1],
                        loading: false
                    });


                }).catch((e) => {
                    console.error(e);
                })
            }
        }

    }

    render() {
        if (this.state.loading) {
            return (<h5>Loading Rating...</h5>);
        }

        console.log("RATINGRATINGSTU", this.state.studentsRating, "RATINGRATINGSEN", this.state.seniorsRating);
        console.log("RATINGRATINGSTU", this.state.countOfValidRatingsStudent, "RATINGRATINGSEN", this.state.countOfValidRatingsSenior);

        return (
            <div>

                <Rating
                    value={this.props.displayStudentRating ? this.state.studentsRating : this.state.seniorsRating}
                    max={5}
                    readOnly={true}
                    /*onChange={(value) => console.log(`Rated with value ${value}`)}*/
                />
                <p>({this.props.displayStudentRating ? this.state.countOfValidRatingsStudent : this.state.countOfValidRatingsSenior} Ratings)</p>
            </div>

        );
    }
}

export default withRouter(DisplayRating);