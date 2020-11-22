import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";

const initialState = {
  offer: {},
  activeId: null,
  nearby: [],
  isLoading: false,
  isSending: false,
  error: null,
  favorites: [],
  isFavorite: false
};


export const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER:
      return extend(state, {
        offer: action.payload,
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
    case ActionType.IS_SENDING_OFFER:
      return extend(state, {
        isSending: action.payload,
      });
    case ActionType.GET_ERROR_OFFER:
      return extend(state, {
        error: action.payload,
      });
    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favorites: action.payload,
      });
    case ActionType.SET_FAVORITE:
      return extend(state, {
        isFavorite: action.payload,
      });
  }
  return state;
};
