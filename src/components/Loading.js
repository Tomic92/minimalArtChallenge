import React from "react";
import logo from "../images/logo.png";

export default function Loading({ setLoading }) {
  return (
    <>
      <div className="Loading d-flex">
        <div className="container">
          <div className="row min-vh-100">
            <div className="col-6 m-auto">
              <img src={logo} className="Loading-logo" alt="logo"/>
              <br />
              <h3>Loading...</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div hidden>
        {setTimeout(() => {
          setLoading(false);
        }, 1500)}
      </div> */}
    </>
  );
}
