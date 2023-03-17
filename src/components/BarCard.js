import React from "react";
import "./css/BarCard.css";

function BarCard({ title, height, children, direction }) {
  return (
    <div
      data-aos={`fade-${direction}`}
      data-aos-duration="1500"
      className={`barCard-div barCard-${height}`}
    >
      <div className="barCard-title">{title}</div>
      <div className={`barCard-body`}>{children}</div>
    </div>
  );
}

export default BarCard;
