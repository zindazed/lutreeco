import React from "react";
import "./css/IconTitledInfo.css";

function IconTitledInfo({ icon, title, children }) {
  return (
    <div className="IconTitledInfo-div d-flex py-2">
      <img src={icon} alt="" />
      <div>
        <div>{title}</div>
        {children}
      </div>
    </div>
  );
}

export default IconTitledInfo;
