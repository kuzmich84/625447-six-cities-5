import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";

const initialState = {
  reviews: [],
  isLoading: false,
  isSending: false,
  error: null,
  isSend: false,
};

export const reviewsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.IS_LOADING:
      return extend(state, {
        isLoading: action.payload,
      });
    case ActionType.IS_SENDING_REVIEW:
      return extend(state, {
        isSending: action.payload,
      });
    case ActionType.SET_ERROR_REVIEWS:
      return extend(state, {
        error: action.payload,
      });
    case ActionType.IS_SEND_REVIEW:
      return extend(state, {
        isSend: action.payload,
      });
  }
  return state;
};
