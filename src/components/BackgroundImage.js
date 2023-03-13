import React from "react";
import "./css/BackgroundImage.css";

function BackgroundImage({ image, children }) {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "rgb(51, 51, 51)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="py-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <div className="d-flex row justify-content-center mx-2">{children}</div>
      </div>
    </div>
  );
}

export default BackgroundImage;
