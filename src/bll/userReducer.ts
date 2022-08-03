type UserType = {
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

const initionalState = {
  users: [],
};

export const userReducer = (state: any = initionalState, action: UserAT) => {
  switch (action.type) {
    case "SET-USERS":
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
  }
  return state;
};

export type UserAT = {
  type: "SET-USERS";
  users: Array<UserType>;
};

export const userAC = (users: Array<UserType>) => {
  return {
    type: "SET-USERS",
    users: users,
  };
};
