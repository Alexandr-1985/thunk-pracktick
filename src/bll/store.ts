import { combineReducers, createStore, applyMiddleware } from "redux";
import { usersReducer } from "../bll/userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;
