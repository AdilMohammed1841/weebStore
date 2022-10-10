import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function onChangeHandler(e) {
    e.preventDefault();
    switch (e.target.name) {
      case "username":
        setUserName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  }

  function loginHandler() {
        props.setToken("bsakjfabskfbasljfiewlbfjlewfkweiylfhkwehfbbsdf");
  }


  return (
    <div className="login-form">
      <input
        name="username"
        value={userName}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <input 
        name="password"
        type="password"
        value={password}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <div className="login-btns" > 
        <button onClick={loginHandler}> sign in </button>
        <button> sign up </button>
      </div>
    </div>
  );
};

export default Login;
