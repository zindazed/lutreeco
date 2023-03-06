import React from "react";
import Nav from "./Nav.js";
import Logo from "./Logo.js";
import ContactButton from "./ContactButton.js";
import NavMenu from "./NavMenu.js";

function Dashboard() {
  return (
    <div className="sticky-top bg-light shadow">
      <div className=" position-relative">
        <div className="d-none justify-content-between d-lg-flex">
          <Logo image={require("../images/logo.png")} />
          <div className=" d-flex py-3">
            <Nav />
            <ContactButton>+257854412563</ContactButton>
          </div>
        </div>
        <div
          className="d-lg-none d-flex justify-content-sm-between py-3"
          style={{ width: "95%" }}
        >
          <Logo image={require("../images/logo.png")} />
          <ContactButton>+257854412563</ContactButton>
        </div>
        <NavMenu />
      </div>
    </div>
  );
}

export default Dashboard;
