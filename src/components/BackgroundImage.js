import React from "react";
import "./css/BackgroundImage.css";

function BackgroundImage({ image, children }) {
  return (
    <div className="Background-div">
      <img src={image} alt="background" />
      <div className="Background-color py-4">
        <div className="d-flex row justify-content-center mx-2">{children}</div>
      </div>
    </div>
  );
}

export default BackgroundImage;
