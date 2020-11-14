import React from "react";
import Review from "../review/review";
import propTypes from "prop-types";


const ListReviews = (props) => {
  const {reviews} = props;


  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        return <Review review={review} key={review.id}/>;
      })}

    </ul>
  );
};


ListReviews.propTypes = {
  reviews: propTypes.array.isRequired,
};


export default ListReviews;
