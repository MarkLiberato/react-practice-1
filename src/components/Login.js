import React from "react";
import "./styles/login.css";

export default function Login() {
  return (
    <div className="Login-wrapper">
      <div className="Login__input-group-wrapper">
        <div className="Login__input-group Login__input-group--padding">
          <label className="Login__label">Email Address*</label>
          <input type="text" className="Login__input-box" />
          <small className="Login__small">or Request Access</small>
        </div>
        <div className="Login__input-group">
          <label className="Login__label">Password*</label>
          <input type="password" className="Login__input-box" />
          <small className="Login__small">Forgot Username or Password?</small>
        </div>
        <div className="Login__button-wrapper">
          <button className="Button">Login</button>
        </div>
      </div>
    </div>
  );
}
