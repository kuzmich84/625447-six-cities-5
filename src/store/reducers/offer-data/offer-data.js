import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";

const initialState = {
  offer: {},
  activeId: null,
  reviews: [],
  nearby: [],
  isLoading: false,
  isSending: false,
};


export const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER:
      return extend(state, {
        offer: action.payload,
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_NEAR_BY:
      return extend(state, {
        nearby: action.payload,
      });
    case ActionType.IS_LOADING:
      return extend(state, {
        isLoading: action.payload,
      });
    case ActionType.ACTIVE_ID:
      return extend(state, {
        activeId: action.payload,
      });
    case ActionType.IS_SENDING:
      return extend(state, {
        isSending: action.payload,
      });
  }
  return state;
};
