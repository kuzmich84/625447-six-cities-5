import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";

const initialState = {
  offer: {},
  activeId: 0,
  reviews: [],
  nearby: [],
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
        isLoading: true,
      });
    case ActionType.ACTIVE_ID:
      return extend(state, {
        activeId: action.payload,
      });
  }
  return state;
};
