import {AuthorizationStatus} from "../../const";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  email: ``,
  avatar: ``,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_EMAIL:
      return Object.assign({}, state, {
        email: action.payload,
      });
    case ActionType.LOAD_AVATAR:
      return Object.assign({}, state, {
        avatar: action.payload,
      });
  }

  return state;
};

export {user};
