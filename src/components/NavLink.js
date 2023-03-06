import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/NavLink.css";
import NavLinkMenu from "./NavMenuLink.js";

function NavLink({ children }) {
  return children === "SERVICES" ? (
    <span className="dropdown">
      <a
        href={`#${children}`}
        className="btn navlink"
        data-bs-toggle="dropdown"
      >
        {children}
      </a>
      <ul className="dropdown-menu navlink-dropdown">
        <li>
          <NavLinkMenu>NATIVE-NURSERY</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu>NATIVE-FOREST</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu>APIARY</NavLinkMenu>
        </li>
      </ul>
    </span>
  ) : (
    <a href={`#${children}`} className="btn navlink">
      {children}
    </a>
  );
}

export default NavLink;
