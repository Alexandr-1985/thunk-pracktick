import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { userAPI } from "./dall/api";
import { useDispatch, useSelector } from "react-redux";
import { usersAC, UserType } from "./bll/userReducer";
import { AppRootStateType } from "./bll/store";

function App() {
  const users = useSelector<AppRootStateType, Array<UserType>>((state) => {
    return state.users.users;
  });
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    userAPI.getUsers().then((res) => {
      const users = res.data;
      dispatch(usersAC(users));
    });
  }, [dispatch]);

  return (
    <div className="app">
      {users.map((e) => {
        return <div key={e.id}>{e.username}</div>;
      })}
    </div>
  );
}

export default App;
