import React from 'react';
import ReviewCard from './ReviewCard'

const ReviewList = (props) => {
    const reviewList = props.reviews.map(review => {
        return <ReviewCard key = {review._id} review = {review}/>
    })
    return <div> {reviewList} </div>
};

export default ReviewList;