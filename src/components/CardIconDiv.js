import React from "react";
// import "./css/CardIconDiv.css";
import CardIconInfo from "./CardIconInfo";

const cards = [
  {
    image: require("../images/icons/bullseye.png"),
    text: "Focus",
  },
  {
    image: require("../images/icons/joyfulpeople.png"),
    text: "community",
  },
  {
    image: require("../images/icons/educated.png"),
    text: "Education",
  },
  {
    image: require("../images/icons/personsound.png"),
    text: "Public advocacy",
  },
  {
    image: require("../images/icons/handleaf.png"),
    text: "Conservation leadership",
  },
  {
    image: require("../images/icons/circlepeople.png"),
    text: "Diversity",
  },
  {
    image: require("../images/icons/hopehand.png"),
    text: "Resilience",
  },
  {
    image: require("../images/icons/handpeople.png"),
    text: "Inclusivity",
  },
  {
    image: require("../images/icons/leafcycle.png"),
    text: "Sustainability",
  },
];

function CardIconDiv() {
  return (
    <div>
      <div className="row d-flex justify-content-center px-3 px-sm-5 px-lg-5 mx-lg-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col-6 col-md-4 col-xl-3 col-xxl-2 p-1 d-flex justify-content-center"
          >
            <CardIconInfo icon={card.image}>{card.text}</CardIconInfo>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardIconDiv;
