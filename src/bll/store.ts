import { combineReducers, createStore } from "redux";
import { usersReducer } from "../bll/userReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});
export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
