import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],

};


export const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }
  return state;
};


