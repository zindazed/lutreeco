import React from "react";
import "./css/CardIconInfo.css";

function CardIconInfo({ icon, children }) {
  return (
    <div className="CardIcon-invisible mx-auto">
      <div className="CardIcon-div bg-light rounded card mx-auto mx-xl-0 my-3">
        <img src={icon} alt="CardImage" className="CardIcon mx-auto" />
        <h5 className=" text-center cardIconInfo">{children}</h5>
      </div>
    </div>
  );
}

export default CardIconInfo;
