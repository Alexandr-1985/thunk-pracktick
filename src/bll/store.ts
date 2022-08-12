import {
  combineReducers,
  createStore,
  applyMiddleware,
  AnyAction,
} from "redux";
import { usersReducer } from "../bll/userReducer";
import thunk, { ThunkDispatch } from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;

//type
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
