import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { usersTC, UserType } from "./bll/userReducer";
import { AppRootStateType } from "./bll/store";

function App() {
  const users = useSelector<AppRootStateType, Array<UserType>>((state) => {
    return state.users.users;
  });
  console.log(users);
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(usersTC());
  }, [dispatch]);

  return (
    <div className="app">
      {users.map((u) => {
        return <div key={u.id}>{u.username}</div>;
      })}
    </div>
  );
}

export default App;
