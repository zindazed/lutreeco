import React from "react";
import "./css/BarCard.css";

function BarCard({ title, height, children }) {
  return (
    <div className={`barCard-div barCard-${height}`}>
      <div className="barCard-title">{title}</div>
      {children}
    </div>
  );
}

export default BarCard;
