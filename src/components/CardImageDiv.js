import React from "react";
import CardImageInfo from "./CardImageInfo";
import "./css/CardImageDiv.css";

const list = [{ icon: "", text: "ashraf" }];

function CardImageDiv() {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="p-3 h-20 bg-danger">
            <p>nicw</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="p-3 h-20 bg-success">
            <p>nicw</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="p-3 h-20 bg-warning">
            <p>nicw</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="p-3 h-20 bg-secondary">
            <p>nicw</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="p-3 h-20 bg-primary">
            <p>nicw</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="p-3 h-20 bg-info">
            <p>nicw</p>
          </div>
        </div>
      </div>
      <div className="mx-auto card-div row d-xl-none">
        <CardImageInfo image={require("../images/IMG_1310.JPG")}>
          A seed Procurement Network
        </CardImageInfo>
        <CardImageInfo image={require("../images/IMG_1310.JPG")}>
          A seed Procurement Network
        </CardImageInfo>
        <CardImageInfo image={require("../images/IMG_1310.JPG")}>
          A seed Procurement Network
        </CardImageInfo>
        <CardImageInfo image={require("../images/IMG_1310.JPG")}>
          A seed Procurement Network
        </CardImageInfo>
        <CardImageInfo image={require("../images/IMG_1310.JPG")}>
          A seed Procurement Network
        </CardImageInfo>
        <CardImageInfo image={require("../images/IMG_1310.JPG")}>
          A seed Procurement Network
        </CardImageInfo>
      </div>
      <div className="mx-auto card-div row d-none d-xl-block">
        <div className="mx-auto row1 row">
          <CardImageInfo image={require("../images/IMG_1310.JPG")}>
            A seed Procurement Network
          </CardImageInfo>
          <CardImageInfo image={require("../images/IMG_1310.JPG")}>
            A seed Procurement Network
          </CardImageInfo>
          <CardImageInfo image={require("../images/IMG_1310.JPG")}>
            A seed Procurement Network
          </CardImageInfo>
          <CardImageInfo image={require("../images/IMG_1310.JPG")}>
            A seed Procurement Network
          </CardImageInfo>
        </div>
        <div className="mx-auto row2 row">
          <CardImageInfo image={require("../images/IMG_1310.JPG")}>
            A seed Procurement Network
          </CardImageInfo>
          <CardImageInfo image={require("../images/IMG_1310.JPG")}>
            A seed Procurement Network
          </CardImageInfo>
        </div>
      </div>
    </div>
  );
}

export default CardImageDiv;
