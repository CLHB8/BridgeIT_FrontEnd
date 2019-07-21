"use strict";

import React from 'react';
import {withRouter} from 'react-router-dom';
import Rating from 'material-ui-rating';

import RatingsService from '../services/RatingsService'

class DisplayRating extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            loading: true,
            studentRating: 0,
        }
    }

    static calculateRating(ratingsData){
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
    }

    render() {
        if (this.state.loading) {
            return (<h5>Loading Rating...</h5>);
        }

        return (
            <Rating 
                value={this.state.studentRating}
                max={5}
                readOnly={true}
                /*onChange={(value) => console.log(`Rated with value ${value}`)}*/
                
            />
        );
    }
}

export default withRouter(DisplayRating);