import React from "react";
import "./css/InfoTitle.css";

function InfoTitle({ black, green }) {
  return (
    <div>
      <h1 className="infotitle text-center d-none d-md-block">
        <span className="infotitle-black">{black} </span>
        <span className="infotitle-green">{green}</span>
        <div className="mx-auto my-2"></div>
      </h1>
      <h4 className="infotitle-sm text-center d-md-none">
        <span className="infotitle-black">{black} </span>
        <span className="infotitle-green">{green}</span>
        <div className="mx-auto my-2"></div>
      </h4>
    </div>
  );
}

export default InfoTitle;
