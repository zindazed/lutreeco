import React from "react";
import "./css/CardImageInfo.css";

function CardImageInfo({ image, children }) {
  return (
    <div className="CardImage-invisible mx-auto">
      <div className="CardImage-div card shadow mx-auto mx-xl-0 my-3">
        <img
          src={image}
          alt="CardImage"
          className="CardImage img-thumbnail rounded-circle mx-auto"
        />
        <h5 className=" text-center">{children}</h5>
      </div>
    </div>
  );
}

export default CardImageInfo;
