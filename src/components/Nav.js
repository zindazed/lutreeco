import React from "react";
import NavLink from "./NavLink.js";
import "./css/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" d-none d-lg-block Nav">
      <NavLink>HOME</NavLink>
      <NavLink>ABOUT US</NavLink>
      <NavLink>NEWS</NavLink>
      <NavLink>SERVICES</NavLink>
      <NavLink>COMMUNITY</NavLink>
      <NavLink>PUBLIC ADVOCACY</NavLink>
      <NavLink>CONTACT US</NavLink>
    </div>
  );
}

export default Nav;
