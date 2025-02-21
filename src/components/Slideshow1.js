import React, { Component } from "react";
import "./css/Slideshow1.css";
import 'animate.css/animate.min.css';


class Slideshow1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var height = "";
    var paddingTop = "";
    var paddingLeft = "";
    var paddingRight = "";
    if (window.innerWidth <= 576) {
      height = "400px";
      paddingTop = "100px";
      paddingLeft = "50px";
      paddingRight = "50px";
    } else if (window.innerWidth <= 768) {
      height = "500px";
      paddingTop = "130px";
      paddingLeft = "100px";
      paddingRight = "100px";
    } else {
      height = "600px";
      paddingTop = "210px";
      paddingLeft = "200px";
      paddingRight = "200px";
    }
    return (
      <div className="w-100" style={{ height: height }}>
        <div
          id={this.props.id}
          className="carousel slide" data-bs-ride="carousel"
          // data-bs-pause="false"
          style={{ height: height }}
        >
          <div className="carousel-inner " style={{ height: height }}>
          <div style={{ backgroundImage: `url(${require("../images/Home/IMG_2734.JPG")})`, height: height }}
              className="top-slider carousel-item active"
              >
                <div
                  // style={{
                  //   paddingTop: paddingTop,
                  //   paddingLeft: paddingLeft,
                  //   paddingRight: paddingRight,
                  // }}
                  className={`d-flex justify-content-center align-items-center text-center slide1-caption ${this.props.display}`}
                 >
                    <div className="mb-4 animate__animated animate__bounceInDown">
                      <div className="px-3 py-3" style={{backgroundColor: "rgba(0,0,0,0.5)"}} >
                        <h3 className="popin animate__animated animate__bounceInDown animate__slow">
                          Building a Comprehensive Flora Conservation Organisation for
                        </h3>
                        <h3 className="popin animate__animated animate__bounceInDown animate__slow animate__delay-1s">
                          Tropical Africa, in Tropical Africa.
                        </h3>
                        <div className="mt-4 mb-3 animate__animated animate__bounceInUp animate__slow animate__delay-2s">
                          <a
                            href="#SERVICES"
                            className="popin"
                          >
                            Our Services
                          </a>
                        </div>
                      </div>
                    
                  </div>
                </div>
          </div>
          <div style={{ backgroundImage: `url(${require("../images/Home/IMG_3290.JPG")})`, height: height }}
              className="top-slider carousel-item"
              >
                <div
                  // style={{
                  //   paddingTop: paddingTop,
                  //   paddingLeft: paddingLeft,
                  //   paddingRight: paddingRight,
                  // }}
                  className={`d-flex justify-content-center align-items-center text-center slide1-caption ${this.props.display}`}
                >
                  <div className="mb-4 animate__animated animate__bounceInDown">
                      <div className="px-3 py-3" style={{backgroundColor: "rgba(0,0,0,0.5)"}} >
                        <h3 className="popin animate__animated animate__bounceInRight animate__slow">
                          LuTreeCo recognizes the crucial role of bees as a keystone species in 
                        </h3>
                        <h3 className="popin animate__animated animate__bounceInRight animate__slow animate__delay-1s">
                          maintaining a thriving forest ecosystem.
                        </h3>
                        <div
                          className="mt-4 mb-3 text-center animate__animated animate__bounceInUp animate__slow"
                        >
                          <a
                            href="#APIARY"
                            className="popin"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
          </div>
          <div style={{ backgroundImage: `url(${require("../images/Home/IMG_7312.JPG")})`, height: height }}
              className="top-slider carousel-item"
              >
                <div
                  // style={{
                  //   paddingTop: paddingTop,
                  //   paddingLeft: paddingLeft,
                  //   paddingRight: paddingRight,
                  // }}
                  className={`d-flex justify-content-center align-items-center text-center slide1-caption ${this.props.display}`}
                >
                  <div className="mb-4 animate__animated animate__bounceInDown">
                    <div className="px-3 py-3" style={{backgroundColor: "rgba(0,0,0,0.5)"}} >
                      <h3 className="popin animate__animated animate__zoomInDown animate__slow">
                        A dedicated Non-Retail Native Nursery. 
                      </h3>
                      {/* <h3 className="popin mb-4 animate__animated animate__bounceInLeft animate__slow animate__delay-1s">
                        maintaining a thriving forest ecosystem.
                      </h3> */}
                      <div
                        className="mt-4 mb-3 text-center animate__animated animate__zoomInUp animate__slow"
                        >
                        <a
                          href="#NATIVE-NURSERY"
                          className="popin"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          <div style={{ backgroundImage: `url(${require("../images/Home/27.jpg")})`, height: height }}
              className="top-slider carousel-item"
              >
                <div
                  // style={{
                  //   paddingTop: paddingTop,
                  //   paddingLeft: paddingLeft,
                  //   paddingRight: paddingRight,
                  // }}
                  className={`d-flex justify-content-center align-items-center text-center slide1-caption ${this.props.display}`}
                 >
                    <div className="mb-4 animate__animated animate__bounceInDown">
                      <div className="px-3 py-3" style={{backgroundColor: "rgba(0,0,0,0.5)"}} >
                        <h3 className="popin animate__animated animate__zoomIn animate__slow">
                        LuTreeCo launched OOTSI in Ugandan schools to nurture
                        </h3>
                        <h3 className="popin animate__animated animate__zoomIn animate__slow animate__delay-1s">
                        conservation skills, knowledge, and revive native trees.
                        </h3>
                        <div className="mt-4 mb-3 animate__animated animate__zoomInUp animate__slow animate__delay-2s">
                          <a
                            href="#OOTSI"
                            className="popin"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    
                  </div>
                </div>
          </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={"#" + this.props.id}
            data-bs-slide="prev"
            data-aos="slide-right"
            data-aos-duration="1500"
          >
            <span className="top-icon" aria-hidden="true">
              <i className="me-1 fa fa-chevron-left"></i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={"#" + this.props.id}
            data-bs-slide="next"
            data-aos="slide-left"
            data-aos-duration="1500"
          >
            <span className="top-icon" aria-hidden="true">
              <i className="ms-1 fa fa-chevron-right"></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Slideshow1;
