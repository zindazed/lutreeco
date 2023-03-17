import React from "react";
import "./css/IconInfo.css";

function IconInfo({ icon, weight, children }) {
  return (
    <div className="IconInfo-div d-flex">
      <img src={icon} alt="" />
      <div className={`IconInfo-${weight}`}>{children}</div>
    </div>
  );
}

export default IconInfo;
