import React from "react";
import Nav from "./Nav.js";
import Logo from "./Logo.js";
import ContactButton from "./ContactButton.js";
import NavMenu from "./NavMenu.js";
import NavLink from "./NavLink.js";

const handleNavLinkClick = () => {
  // Close the navbar
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  navbarToggler.classList.add('collapsed');
  navbarCollapse.classList.remove('show');
}

function Dashboard() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-white">
      <div className="container-fluid d-flex justify-content-between ">
        {/* <div className="d-flex justify-content-between"> */}
        <Logo image={require("../images/logo.png")} />
        <div className="d-flex ">
          <Nav />
          <ContactButton>+257854412563</ContactButton>
          {/* <div className="bg-warning" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01">
              <i className="fa fa-bars" style={{ fontSize: "45px" }}></i>
            </div> */}

          <button className="ms-2 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="fa fa-bars" style={{ fontSize: "30px" }}></i>
          </button>
        </div>
        {/* </div> */}

        <div className=" collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav bg-dark mt-2">
            <NavLink onclick={() => handleNavLinkClick()} >HOME</NavLink>
            <NavLink >ABOUT US</NavLink>
            <NavLink >SERVICES</NavLink>
            <NavLink >COMMUNITY</NavLink>
            <NavLink >PUBLIC ADVOCACY</NavLink>
            <NavLink >CONTACT US</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Dashboard;


{/* <div className="sticky-top bg-light shadow">
      <div className=" position-relative">
        <div className="d-none justify-content-between d-lg-flex">
          <Logo image={require("../images/logo.png")} />
          <div className=" d-flex py-2">
            <Nav />
            <ContactButton>+257854412563</ContactButton>
          </div>
        </div>
        <div
          className="d-lg-none d-flex justify-content-sm-between py-3 me-5 pe-5"
          style={{ width: "95%" }}
        >
          <Logo image={require("../images/logo.png")} />
          <ContactButton>+257854412563</ContactButton>
        </div>
        <NavMenu />
      </div>
    </div> */}