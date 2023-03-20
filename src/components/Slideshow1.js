import React, { Component } from "react";
import "./css/Slideshow1.css";

class Slideshow1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
      }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidUpdate() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
      }));
    }, 5000);
  }

  handlePrevClick = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.props.images.length) %
        this.props.images.length,
    }));
  };

  handleNextClick = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
    }));
  };

  handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        this.handlePrevClick();
        break;
      case "ArrowRight":
        this.handleNextClick();
        break;
      default:
        break;
    }
  };

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
    const { currentIndex } = this.state;
    return (
      <div className="w-100" style={{ height: height }}>
        <div
          id={this.props.id}
          className="carousel slide"
          style={{ height: height }}
        >
          <div className="carousel-inner " style={{ height: height }}>
            {this.props.images.map((image, index) => (
              <div
                style={{ backgroundImage: `url(${image})`, height: height }}
                key={index}
                className={
                  "top-slider carousel-item " + (index === 0 ? "active" : "bro")
                }
              >
                {/* <img src={image} className="" alt="..."></img> */}
              </div>
            ))}
            <div
              style={{
                paddingTop: paddingTop,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
              }}
              className={`slide1-caption ${this.props.display}`}
            >
              <h3 className="my-4" data-aos="fade-up" data-aos-duration="1500">
                Building a Comprehensive Flora Conservation Organisation for
                Tropical Africa, in Tropical Africa.
              </h3>
              <div
                className="text-center"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <a
                  href="#SERVICES"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  Our Services
                </a>
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
              <i class="me-1 fa fa-chevron-left"></i>
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
              <i class="ms-1 fa fa-chevron-right"></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Slideshow1;
