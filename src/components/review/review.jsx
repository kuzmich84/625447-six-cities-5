import React from "react";
import {setDateToString, transferRatingToPercent} from "../../utils/utils";
import {reviewsPropTypes} from "../../custom-prop-types/custom-prop-types";


const Review = (props) => {
  const {review} = props;
  return (<li className="reviews__item" key={review.id}>
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.userAvatar} width="54" height="54"
          alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">
        {review.userName}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${transferRatingToPercent(review.userRating)}%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.textReview}
      </p>
      <time className="reviews__time" dateTime={review.date}>{setDateToString(review.date)}</time>
    </div>
  </li>);
};

Review.propTypes = reviewsPropTypes;

export default Review;
