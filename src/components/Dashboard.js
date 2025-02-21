import React from "react";
import Nav from "./Nav.js";
import Logo from "./Logo.js";
import ContactButton from "./ContactButton.js";
import NavMenu from "./NavMenu.js";
import NavLink from "./NavLink.js";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";


function Dashboard() {

  const handleNavLinkClick = (e) => {
    // Prevent the default behavior of the anchor tag
    // e.preventDefault();
  
    console.log("we have been clicked!!!")
  
    // Close the navbar
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarToggler.classList.add('collapsed');
    navbarCollapse.classList.remove('show');
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-white">
      <div className="container-fluid d-flex justify-content-between ">
        {/* <div className="d-flex justify-content-between"> */}
        <Logo image={require("../images/logo.png")} />
        <div className="d-flex ">
          <Nav />
          <ContactButton>+256702979791</ContactButton>
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
            <NavLink  >HOME</NavLink>
            <NavLink >ABOUT US</NavLink>
            <NavLink >NEWS</NavLink>
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

<div className="bg-transparent w-100" style={{marginTop: "-40px", position: "absolute", zIndex: 999}}>
  <nav  id="navbar_top" className=" navbar navbar-expand-lg navbar-dark  w-100">
      <div id="navContainer" className="container-fluid col-12 col-lg-11 col-xl-9 themeBg">
        <a className="navbar-brand d-block d-lg-none NexaBold mt-1" href="#">MUSLIM CHANNEL</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center themeBg" id="main_nav">
          <ul className="navbar-nav">
          <li className="nav-item mx-0 mx-lg-4  my-2 text-center">
              <Link className="nav-link resNavLink" to={"/"}>HOME</Link>
          </li>
          <li className="nav-item mx-4 my-2 text-center">
              <Link 
                className="nav-link resNavLink"
                to={"about"}
                style={{whiteSpace: "nowrap"}}
              >
                  ABOUT US
              </Link>
          </li>
          {/* <div className="dropdown">
            <li className="nav-item mx-4 my-2 text-center  d-flex align-items-center" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <a className="nav-link" href="#"> ABOUT US <Icon className="drop mb-1" icon="raphael:arrowdown"  /></a>
            </li>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Muslim Channel Objective</a></li>
              <li><a className="dropdown-item" href="#">Our Team</a></li>
            </ul>
          </div> */}
          
          <div className="dropdown">
            <li className="nav-item mx-0 mx-lg-4  h-100 text-center  d-flex align-items-center" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <a className="nav-link resNavLink" href="#"> OUR DA'AWAH <Icon className="drop mb-1" icon="raphael:arrowdown"  /></a>
            </li>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Muslimc Channel App</a></li>
              <li><a className="dropdown-item" href="#">Islamic Content Production</a></li>
              <li><a className="dropdown-item" href="#">Jumah | Darus Live Coverage</a></li>
              <li><a className="dropdown-item" href="#">Schools Visit</a></li>
              <li><a className="dropdown-item" href="#">Community Outreach</a></li>
              <li><a className="dropdown-item" href="#">Islamic Trade and Culture Dev. Model</a></li>
            </ul>
          </div>

          <div className="dropdown">
            <li className="nav-item mx-0 mx-lg-4  h-100 text-center  d-flex align-items-center" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <a className="nav-link resNavLink" href="#"> SERVICES | BUSINESS <Icon className="drop mb-1" icon="raphael:arrowdown"  /></a>
            </li>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Events: Video | Sound & Large Screens</a></li>
              <li><a className="dropdown-item" href="#">Events Ticketing System</a></li>
              <li><a className="dropdown-item" href="#">Digital Marketing</a></li>
              <li><a className="dropdown-item" href="#">Islamic Apps Development</a></li>
              <li><a className="dropdown-item" href="#">Islamic Fintech Solutions</a></li>
              <li><a className="dropdown-item" href="#">Payment Gateways</a></li>
              <li><a className="dropdown-item" href="#">Business Advertisement</a></li>
              <li><a className="dropdown-item" href="#">Ads, Short Films & Documentaries</a></li>
            </ul>
          </div>
          <div className="dropdown ">
            <li className="nav-item  mx-0 mx-lg-4 h-100  text-center  d-flex align-items-center" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <a className="nav-link resNavLink" href="#"> PAYMENTS & DONATIONS <Icon className="drop mb-1" icon="raphael:arrowdown"  /></a>
            </li>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><Link className="dropdown-item" to={"/suppport_us"}>Support Us</Link></li>
              <li><Link className="dropdown-item" to={"/service_payment"}>Pay for Service</Link></li>
            </ul>
          </div>
          {/* <div className="dropdown">
            <li className="nav-item mx-4 my-2 text-center  d-flex align-items-center" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <a className="nav-link" href="#"> AWARDS <Icon className="drop mb-1" icon="raphael:arrowdown"  /></a>
            </li>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Award Categories</a></li>
              <li><a className="dropdown-item" href="#">Upcoming 2025</a></li>
              <li><a className="dropdown-item" href="#">2024</a></li>
            </ul>
          </div> */}
          {/* <li className="nav-item mx-4 my-2 text-center"><a className="nav-link" target="_blank" href="awards/"> AWARDS </a></li> */}
          <li style={{backgroundColor: "white" }} className="awardNavBtn nav-item  mx-0 mx-lg-4  my-2 text-center"><a style={{color:"black"}} className="nav-link resNavLink" href="awards/"> AWARDS </a></li>
          <li  className="nav-item mx-0 mx-lg-4  my-2 text-center">
            <Link className="nav-link resNavLink" to={"/gallery"}> GALLERY </Link>
          </li>
          </ul>
        </div> 
      </div> 
  </nav>
</div>

