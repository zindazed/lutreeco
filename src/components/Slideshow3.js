import React, { Component } from "react";
import "./css/Slideshow3.css";

class Slideshow3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="w-100  px-3 py-4 me-5"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      >
        <div id={this.props.id} className="carousel slide">
          {window.innerWidth <= 768 ? (
            <div className="carousel-inner ">
              {this.props.images.map((image, index) => (
                <div
                  key={index}
                  className={
                    "carousel-item " + (index === 0 ? "active" : "bro")
                  }
                  style={{ backgroundColor: "transparent" }}
                >
                  {/* <img src={image} className=" w-100" alt="..."></img> */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1.5/1",
                      backgroundImage: `url(${image})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          ) : window.innerWidth <= 992 ? (
            <div className="carousel-inner ">
              {Array.apply(
                0,
                Array(Math.ceil(this.props.images.length / 2))
              ).map((none, index1) => (
                <div
                  key={index1}
                  className={"carousel-item " + (index1 === 0 ? "active" : "")}
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="row">
                    {[
                      this.props.images[index1 * 2],
                      this.props.images[
                        (index1 * 2 + 1) % this.props.images.length
                      ],
                    ].map((image, index) => (
                      <div className="col-6" key={index}>
                        <div
                          style={{
                            width: "100%",
                            aspectRatio: "1.5/1",
                            backgroundImage: `url(${image})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="carousel-inner ">
              {Array.apply(
                0,
                Array(Math.ceil(this.props.images.length / 3))
              ).map((none, index1) => (
                <div
                  key={index1}
                  className={"carousel-item " + (index1 === 0 ? "active" : "")}
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="row">
                    {[
                      this.props.images[index1 * 3],
                      this.props.images[
                        (index1 * 3 + 1) % this.props.images.length
                      ],
                      this.props.images[
                        (index1 * 3 + 2) % this.props.images.length
                      ],
                    ].map((image, index) => (
                      <div className="col-4" key={index}>
                        <div
                          style={{
                            width: "100%",
                            aspectRatio: "1.5/1",
                            backgroundImage: `url(${image})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={"#" + this.props.id}
            data-bs-slide="prev"
          >
            <span className="d-icon" aria-hidden="true">
              <i className="me-1 fa fa-chevron-left"></i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={"#" + this.props.id}
            data-bs-slide="next"
          >
            <span className="d-icon" aria-hidden="true">
              <i className="ms-1 fa fa-chevron-right"></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Slideshow3;
