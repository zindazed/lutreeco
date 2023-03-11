import React, { Component } from "react";
import "./css/CardImageInfo.css";

class CardImageInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: "1em",
      circlePadding: "7px",
    };
  }

  flexFont = () => {
    var refDivs = document.getElementById("widthRef");
    this.setState({
      fontSize: refDivs.offsetWidth * 0.07,
      circlePadding: refDivs.offsetWidth * 0.027,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.flexFont());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.flexFont());
  }

  render() {
    return (
      <div
        id="widthRef"
        className=" shadow-sm bg-white d-flex justify-content-center flex-row p-2"
        style={{ width: "100%", minWidth: "100%", borderRadius: "15px" }}
      >
        <div className="" style={{ width: "80%" }}>
          <div
            className="rounded-circle"
            style={{
              border: "3px solid rgb(104, 168, 7)",
              padding: `${this.state.circlePadding}px`,
            }}
          >
            <div
              className="rounded-circle mx-auto p-1 ratio ratio-1x1"
              style={{
                backgroundImage: `url(${this.props.image})`,
                width: "100%",

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div
            className="d-flex justify-content-center flex-column"
            style={{ aspectRatio: "2.5/1" }}
          >
            <h5
              className="text-center"
              style={{
                fontSize: `${this.state.fontSize}px`,
                height: "fit-content",
              }}
            >
              {this.props.children}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default CardImageInfo;
