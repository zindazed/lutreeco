import React from "react";
import CardImageInfo from "./CardImageInfo";
import "./css/CardImageDiv.css";

const cards = [
  {
    image: require("../images/1.png"),
    text: "A seed procurement network",
  },
  {
    image: require("../images/2.png"),
    text: "A seed bank, including freezing capacity (off site)",
  },
  {
    image: require("../images/3.png"),
    text: "Dedicated non-retail native tree nursery",
  },
  {
    image: require("../images/4.png"),
    text: "Species-rich native forest",
  },
  {
    image: require("../images/5.png"),
    text: "An apiary",
  },
  {
    image: require("../images/6.png"),
    text: "Research",
  },
];

function CardImageDiv() {
  return (
    <div style={{ width: "fit-content" }}>
      <div className="row d-flex justify-content-center px-4 px-sm-3 px-md-5 mx-lg-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-4 d-flex justify-content-center"
          >
            <CardImageInfo image={card.image}>{card.text}</CardImageInfo>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardImageDiv;
