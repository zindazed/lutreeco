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
    const { currentIndex } = this.state;
    return (
      <div
        className="slide1-slideshow"
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        style={{ height: this.props.height }}
      >
        <img
          src={this.props.images[currentIndex]}
          style={{ height: this.props.height }}
          alt="Slideshow"
          className="kenburns-top"
        />
        <div className={`slide1-caption ${this.props.display}`}>
          <h2 className=" my-4">
            Building a Comprehensive Flora Conservation Organisation for
            Tropical Africa, in Tropical Africa
          </h2>
          <button>Our Services</button>
        </div>
        <button className="slide1-prev" onClick={this.handlePrevClick}>
          &#10094;
        </button>
        <button className="slide1-next" onClick={this.handleNextClick}>
          &#10095;
        </button>
      </div>
    );
  }
}

export default Slideshow1;
