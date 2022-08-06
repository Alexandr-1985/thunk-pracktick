import { Dispatch } from "redux";
import { userAPI } from "../dall/api";

const initionalState = {
  users: [] as UserType[],
};
type InitialStateType = typeof initionalState;
export const usersReducer = (
  state: InitialStateType = initionalState,
  action: UsersAT
): InitialStateType => {
  switch (action.type) {
    case "SET-USERS":
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
  }
  return state;
};

export const usersAC = (users: Array<UserType>) => {
  return {
    type: "SET-USERS",
    users: users,
  };
};

export const usersTC = () => {
  return (dispatch: Dispatch) => {
    userAPI.getUsers().then((res) => {
      const users = res.data;
      dispatch(usersAC(users));
    });
  };
};

//type
export type UsersAT = {
  type: "SET-USERS";
  users: Array<UserType>;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
