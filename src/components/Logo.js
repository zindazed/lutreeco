import React from "react";
import "./css/logo.css";

function Logo({ image }) {
  return (
    <div className=" ps-lg-4  d-flex justify-content-center flex-column">
      <div className=" d-none d-sm-block">
        <a href="#HOME">
          <img src={image} alt="logo" className="logo-lg" />
        </a>
      </div>
      <div className="d-sm-none">
        <a href="#HOME">
          <img src={image} alt="logo" className="logo-sm" />
        </a>
      </div>
    </div>
  );
}

export default Logo;
