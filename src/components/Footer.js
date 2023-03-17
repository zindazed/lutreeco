import React from "react";
import Logo from "./Logo";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-row row mx-auto">
        <div className=" col-lg-4 footer-col">
          <Logo image={require("../images/logo.png")} />
          <div className=" mt-3 paragraph2">
            LuTreeCo is a native African for profit social enterprise that
            conserves trees and shrubs that are native to tropical Africa
            (Native), with emphasis on threatened species.{" "}
          </div>
        </div>
        <div className=" col-lg-4 footer-col">
          <h3>Our Services</h3>
          <div className="footer-line"></div>
          <ul className="list1">
            {/* <li>All Services</li> */}
            <li>
              <a href="#NATIVE-NURSERY">Native nursery</a>
            </li>
            <li>
              <a href="#NATIVE-FOREST">Native forest</a>
            </li>
            <li>
              <a href="#APIARY">Apiary</a>
            </li>
          </ul>
        </div>
        <div className=" col-lg-4 footer-col">
          <h3>Contact Us</h3>
          <div className="footer-line"></div>
          <ul className="list2">
            <li>
              Bunjakko island, in Uganda, approximately 60 miles from Kampala by
              road.
            </li>
            <li>+ 256412253584</li>
            <li>info@lutreeCo.com</li>
            <li>Mon-Sun - 9am until 6pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
