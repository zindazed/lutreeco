import React from "react";
import "./css/CardIconDiv.css";
import CardIconInfo from "./CardIconInfo";

function CardIconDiv() {
  return (
    <div>
      <div className="mx-auto row d-xl-none">
        <CardIconInfo icon={require("../images/icons/educated.png")}>
          Education
        </CardIconInfo>
        <CardIconInfo icon={require("../images/icons/educated.png")}>
          Education
        </CardIconInfo>
        <CardIconInfo icon={require("../images/icons/educated.png")}>
          Education
        </CardIconInfo>
        <CardIconInfo icon={require("../images/icons/educated.png")}>
          Education
        </CardIconInfo>
        <CardIconInfo icon={require("../images/icons/educated.png")}>
          Education
        </CardIconInfo>
        <CardIconInfo icon={require("../images/icons/educated.png")}>
          Education
        </CardIconInfo>
        <CardIconInfo icon={require("../images/icons/educated.png")}>
          Education
        </CardIconInfo>
        <CardIconInfo icon={require("../images/icons/educated.png")}>
          Education
        </CardIconInfo>
        <CardIconInfo icon={require("../images/icons/educated.png")}>
          Education
        </CardIconInfo>
      </div>
      <div className="mx-auto card-div row d-none d-xl-block">
        <div className="mx-auto row1 row">
          <CardIconInfo icon={require("../images/icons/educated.png")}>
            Education
          </CardIconInfo>
          <CardIconInfo icon={require("../images/icons/educated.png")}>
            Education
          </CardIconInfo>
          <CardIconInfo icon={require("../images/icons/educated.png")}>
            Education
          </CardIconInfo>
          <CardIconInfo icon={require("../images/icons/educated.png")}>
            Education
          </CardIconInfo>
        </div>
        <div className="mx-auto row2 row">
          <CardIconInfo icon={require("../images/icons/educated.png")}>
            Education
          </CardIconInfo>
          <CardIconInfo icon={require("../images/icons/educated.png")}>
            Education
          </CardIconInfo>
          <CardIconInfo icon={require("../images/icons/educated.png")}>
            Education
          </CardIconInfo>
          <CardIconInfo icon={require("../images/icons/educated.png")}>
            Education
          </CardIconInfo>
        </div>
        <div className="mx-auto row2 row">
          <CardIconInfo icon={require("../images/icons/educated.png")}>
            Education
          </CardIconInfo>
        </div>
      </div>
    </div>
  );
}

export default CardIconDiv;
