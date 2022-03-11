import React from "react";
import Login from "./Login";
import "./styles/header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header__flag Header__flag--small-gray"></div>
      <div className="Header__flag Header__flag--medium-blue">
        <div className="Header__logo-wrapper">
          <img
            src="https://portal.essilorpro.com/assets/images/EssilorPRO_Logo_rgb.svg"
            alt="essilor logo"
            className="Header__logo"
          />
        </div>
      </div>
      <div className="Header__flag Header__flag--large-gray">
        <Login />
      </div>
    </div>
  );
}
