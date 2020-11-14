import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {defaultCity, defaultFilter} from "../../const";

const initialState = {
  city: defaultCity,
  offersOfCity: [],
  value: defaultFilter,
};


export const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.LOAD_OFFERS_OF_CITY:
      return extend(state, {
        offersOfCity: action.payload,
      });
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        value: action.payload,
      });
  }
  return state;
};


