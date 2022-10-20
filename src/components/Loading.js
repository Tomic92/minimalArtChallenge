import React from "react";
import logo from "../images/logo.png";

export default function Loading() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <br/>
      Loading...
    </div>
  );
}
