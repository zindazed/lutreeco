import React from "react";
import "./css/logo.css";

function Logo({ image }) {
  return (
    <div className=" ps-lg-4  d-flex justify-content-center flex-column">
      <div className=" d-none d-sm-block">
        <img src={image} alt="logo" className="logo-lg" />
      </div>
      <div className="d-sm-none">
        <img src={image} alt="logo" className="logo-sm" />
      </div>
    </div>
  );
}

export default Logo;
