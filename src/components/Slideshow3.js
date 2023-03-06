import React, { Component } from "react";
import "./css/Slideshow3.css";

class Slideshow3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentSlide: (prevState.currentSlide + 1) % this.props.images.length,
      }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentSlide: (prevState.currentSlide + 1) % this.props.images.length,
      }));
    }, 5000);
  }

  render() {
    const { images } = this.props;
    const { currentSlide } = this.state;

    return (
      <div className="slide3-slideshow">
        <div className="slide3-slider">
          {[
            images[currentSlide],
            images[(currentSlide + 1) % images.length],
            images[(currentSlide + 2) % images.length],
          ].map((image, index) => (
            <img
              key={index}
              className="slide3-slide"
              src={image}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
        <button
          className="slide3-control slide3-prev"
          onClick={() =>
            this.setState({
              currentSlide: (currentSlide - 1 + images.length) % images.length,
            })
          }
        >
          &#10094;
        </button>
        <button
          className="slide3-control slide3-next"
          onClick={() =>
            this.setState({
              currentSlide: (currentSlide + 1) % images.length,
            })
          }
        >
          &#10095;
        </button>
      </div>
    );
  }
}

export default Slideshow3;
