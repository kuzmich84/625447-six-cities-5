import {createSelector} from "reselect";
import {Index} from "../const";


export const getReviews = (state) => state.REVIEWS.reviews;
export const getIsSendingOfReviews = (state) => state.REVIEWS.isSending;
export const getErrorOfReviews = (state) => state.REVIEWS.error;
export const getIsSendReview = (state) => state.REVIEWS.isSend;

export const getSortedReviewsOfDate = createSelector(getReviews, (reviews) => {
  return reviews.sort((prev, next) => Date.parse(next.date) - Date.parse(prev.date)).slice(Index.start, Index.end);
});
