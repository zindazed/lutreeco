import React, { Component } from "react";
import "./css/Slideshow3.css";


class NurserySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }


  render() {

    const small_screen = [
      require("../images/IMG_1316.JPG"),
      require("../images/IMG_1319.JPG"),
      require("../images/IMG_1320.JPG"),
    ];

    const mediam_screen = [
      {
        "active": [
          require("../images/IMG_1316.JPG"),
          require("../images/IMG_1319.JPG"),
        ]
      },
      {
        "others_1": [
          require("../images/IMG_1316.JPG"),
          require("../images/IMG_1319.JPG"),
        ]
      },
      {
        "others_2": [
          require("../images/IMG_1316.JPG"),
          require("../images/IMG_1319.JPG"),
        ]
      },
      {
        "others_3": [
          require("../images/IMG_1316.JPG"),
          require("../images/IMG_1319.JPG"),
        ]
      },
    ]

    const large_screens = [
      {
        "active": [
          require("../images/IMG_1316.JPG"),
          require("../images/IMG_1319.JPG"),
          require("../images/IMG_1319.JPG"),
        ]
      },
      {
        "others_1": [
          require("../images/IMG_1316.JPG"),
          require("../images/IMG_1319.JPG"),
          require("../images/IMG_1319.JPG"),
        ]
      },
      {
        "others_2": [
          require("../images/IMG_1316.JPG"),
          require("../images/IMG_1319.JPG"),
          require("../images/IMG_1319.JPG"),
        ]
      },
      {
        "others_3": [
          require("../images/IMG_1316.JPG"),
          require("../images/IMG_1319.JPG"),
          require("../images/IMG_1319.JPG"),
        ]
      },
    ]

    return (
      <div className="w-100  px-3 py-4 me-5" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
        <div id={this.props.id} className="carousel slide">
          {(window.innerWidth <= 576) ?
            <div className="carousel-inner ">
              {small_screen.map((image, index) => (
                <div key={index} className={"carousel-item " + ((index === 0) ? "active" : "bro")} style={{ backgroundColor: "transparent" }}>
                  <img src={image} className=" w-100" alt="..."></img>
                </div>
              ))}
            </div> :
            (window.innerWidth <= 768) ?
              <div className="carousel-inner ">
                <div className="carousel-item active" style={{ backgroundColor: "transparent" }}>
                  <div className="row">
                    {mediam_screen[0]["active"].map((image, index) => (
                      <div className="col-12 col-sm-6 col-lg-4" key={index}>
                        <img src={image} className="d-block w-100" alt="..."></img>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-item" style={{ backgroundColor: "transparent" }}>
                  <div className="row">
                    {mediam_screen[1]["others_1"].map((image, index) => (
                      <div className="col-12 col-sm-6 col-lg-4" key={index}>
                        <img src={image} className="d-block w-100" alt="..."></img>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-item" style={{ backgroundColor: "transparent" }}>
                  <div className="row">
                    {mediam_screen[2]["others_2"].map((image, index) => (
                      <div className="col-12 col-sm-6 col-lg-4" key={index}>
                        <img src={image} className="d-block w-100" alt="..."></img>
                      </div>
                    ))}
                  </div>
                </div>
              </div> :
              <div className="carousel-inner ">
                <div className="carousel-item active" style={{ backgroundColor: "transparent" }}>
                  <div className="row">
                    {large_screens[0]["active"].map((image, index) => (
                      <div className="col-12 col-sm-6 col-lg-4" key={index}>
                        <img src={image} className="d-block w-100" alt="..."></img>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-item" style={{ backgroundColor: "transparent" }}>
                  <div className="row">
                    {large_screens[1]["others_1"].map((image, index) => (
                      <div className="col-12 col-sm-6 col-lg-4" key={index}>
                        <img src={image} className="d-block w-100" alt="..."></img>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-item" style={{ backgroundColor: "transparent" }}>
                  <div className="row">
                    {large_screens[2]["others_2"].map((image, index) => (
                      <div className="col-12 col-sm-6 col-lg-4" key={index}>
                        <img src={image} className="d-block w-100" alt="..."></img>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          }
          <button className="carousel-control-prev" type="button" data-bs-target={"#" + this.props.id} data-bs-slide="prev">
            <span className="d-icon" aria-hidden="true"><i class="me-1 fa fa-chevron-left"></i></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={"#" + this.props.id} data-bs-slide="next">
            <span className="d-icon" aria-hidden="true"><i class="ms-1 fa fa-chevron-right"></i></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );


  }
}

export default NurserySlider;

