import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/NavLink.css";
import NavLinkMenu from "./NavMenuLink.js";
import { Link, useNavigate } from "react-router-dom";


function NavLink({ children, onclick }) {
  const navigate = useNavigate();


  return children === "SERVICES" ? (
    <span className="dropdown">
      <a
        href={`#${children}`}
        className="btn navlink navlinks"
        data-bs-toggle="dropdown"
      >
        {children}
      </a>
      <ul className="dropdown-menu navlink-dropdown">
        <li
          onClick={()=>{
              if (window.location.href.includes("news")) {
                navigate("/");
              }
            }}
          >
          <NavLinkMenu>OOTSI</NavLinkMenu>
        </li>
        <li
          onClick={()=>{
              if (window.location.href.includes("news")) {
                navigate("/");
              }
            }}
          >
          <NavLinkMenu>NATIVE-NURSERY</NavLinkMenu>
        </li>
        <li
        onClick={()=>{
        if (window.location.href.includes("news")) {
          navigate("/");
        }
      }}
      >
          <NavLinkMenu>NATIVE-FOREST</NavLinkMenu>
        </li>
        <li
        onClick={()=>{
        if (window.location.href.includes("news")) {
          navigate("/");
        }
      }}
      >
          <NavLinkMenu>APIARY</NavLinkMenu>
        </li>
      </ul>
    </span>
  ) : (children === "HOME")?(
    <Link 
    to="/"
    className="btn navlink"
    >
      {children}
    </Link>
  ):(children === "NEWS")?(
      <Link
      to="/news"
      className="btn navlink"
      >
        {children}
      </Link>
    ):<a onClick={()=>{
        if (window.location.href.includes("news")) {
          navigate("/");
        }
      }} href={`#${children}`} className="btn navlink">
        {children}
      </a>;
}

export default NavLink;
