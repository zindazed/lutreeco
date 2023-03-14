import React from "react";
import "./css/BackgroundImage.css";

function BackgroundImage({ image, children }) {
  return (
    <div
      className="bg-general"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="py-4">
        <div className="d-flex row justify-content-center">{children}</div>
      </div>
    </div >
  );
}

export default BackgroundImage;
