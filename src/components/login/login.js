import React, { useState } from "react";
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
    localStorage.setItem('token',"bsakjfabskfbasljfiewlbfjlewfkweiylfhkwehfbbsdf");
    props.setIsAuth(true)
  }

  return (
    <div className="login-form">
      <div className="login-fields" >
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
        <div className="login-btns">
          <button onClick={loginHandler}> sign in </button>
          <button> sign up </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
