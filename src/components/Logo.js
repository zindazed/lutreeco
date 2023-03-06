import React from "react";
import "./css/logo.css";

function Logo({ image }) {
  return (
    <div className=" ps-4">
      <div className=" d-none d-lg-block">
        <img src={image} alt="logo" className="logo-lg" />
      </div>
      <div className=" d-lg-none">
        <img src={image} alt="logo" className="logo-sm" />
      </div>
    </div>
  );
}

export default Logo;
