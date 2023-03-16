import React from "react";
// import "./css/CardIconInfo.css";

function CardIconInfo({ icon, children }) {
  return (
    <div
      className=" py-2 py-sm-2 py-xl-3 rounded border border-1 align-content-center flex-wrap d-flex justify-content-center flex-row"
      style={{ width: "100%", backgroundColor: "#FAFAFA" }}
    >
      <div className="" style={{ width: "80%" }}>
        <div
          className="mx-auto d-flex justify-content-center flex-column"
          style={{ width: "100%", aspectRatio: "1.5/1" }}
        >
          <div className="mx-auto" style={{ width: "fit-content" }}>
            <img src={icon} alt="CardImage" />
          </div>
        </div>
        <div
          className="d-flex justify-content-center flex-column"
          style={{ aspectRatio: "4/1" }}
        >
          <h5
            className="text-center"
            style={{ color: "orange", fontWeight: "bolder" }}
          >
            {children}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default CardIconInfo;
