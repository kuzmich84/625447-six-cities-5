import {combineReducers} from "redux";
import {loadData} from "./load-data/load-data";
import {appProcess} from "./app-process/app-process";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.APP]: appProcess,
  [NameSpace.USER]: user,
});

