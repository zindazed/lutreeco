import React from "react";
import "./css/Slideshow.css"; // Import your custom CSS file here

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    const { autoplay, interval } = this.props;
    if (autoplay) {
      this.intervalId = setInterval(this.handleNext, interval);
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  handlePrev() {
    const { slides } = this.props;
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: (activeIndex - 1 + slides.length) % slides.length,
    });
  }

  handleNext() {
    const { slides } = this.props;
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: (activeIndex + 1) % slides.length,
    });
  }

  render() {
    const { slides } = this.props;
    const { activeIndex } = this.state;
    return (
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.caption} />
            <div className="caption">{slide.caption}</div>
          </div>
        ))}
        <button className="prev" onClick={this.handlePrev}>
          &#10094;
        </button>
        <button className="next" onClick={this.handleNext}>
          &#10095;
        </button>
      </div>
    );
  }
}

export default Slideshow;
