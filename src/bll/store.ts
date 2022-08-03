import { combineReducers, createStore } from "redux";
import { userReducer } from "../bll/userReducer";

const rootReducer = combineReducers({
  users: userReducer,
});
export const store = createStore(rootReducer);
