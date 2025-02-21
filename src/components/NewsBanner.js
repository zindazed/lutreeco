import React, { Component } from "react";
import "./css/Slideshow1.css";
import { Icon } from '@iconify/react';


class NewsBanner extends Component {
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
      height = "300px";
      paddingTop = "210px";
      paddingLeft = "200px";
      paddingRight = "200px";
    }
    return (
      <div className="w-100" style={{ height: height }}>
        <div
            style={{ backgroundImage: `url(${this.props.image})`, 
            height: height,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
           }}
            className="d-flex justify-content-start align-items-center"
        >
        <h3 style={{fontSize: "25px", fontWeight: 'bold'}} className="my-4 mx-5 text-white" data-aos="fade-up" data-aos-duration="1500">
           <span className="me-3"><Icon icon="fluent:news-20-regular" color="white" fontSize={100} /></span> NEWS
        </h3>
        </div>
      </div>
    );
  }
}

export default NewsBanner;
