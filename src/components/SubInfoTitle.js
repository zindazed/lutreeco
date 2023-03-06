import React from "react";
import "./css/SubInfoTitle.css";

function SubInfoTitle({ children }) {
  return (
    <div className="SubTitle-div mt-5">
      <h5>{children}</h5>
    </div>
  );
}

export default SubInfoTitle;
