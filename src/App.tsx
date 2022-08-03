import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { userAPI } from "./dall/api";
import { useDispatch, useSelector } from "react-redux";
import { userAC } from "./bll/userReducer";

function App() {
  const users = useSelector<any, any>((state) => {
    return state.users;
  });
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    userAPI.getUsers().then((res) => {
      const users = res.data;
      dispatch(userAC(users));
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
