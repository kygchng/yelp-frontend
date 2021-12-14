import React from 'react';

const ReviewCard = (props) => {
    return (
        <div className = "ui card">
            <div className = "content">
                <div className = "header"> {props.review.header} </div>
                <div className = "meta"> {props.review.customer_name} </div>
                <div className = "meta"> {props.review.restaurant_name} </div>
                <div className = "meta"> {props.review.date} </div>
                <div className = "description"> {props.review.text} </div>
            </div>

            <div className = "extra content"> {props.review.stars} stars </div>
        </div>
    )
};

export default ReviewCard;