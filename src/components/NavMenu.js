import React from "react";
import "./css/NavMenu.css";
import NavLinkMenu from "./NavMenuLink";

function NavMenu() {
  return (
    <div className="navmenu d-lg-none">
      <div className="dropdown">
        <button
          type="button"
          className="navmenu-btn"
          data-bs-toggle="dropdown"
          style={{ position: "absolute", top: "-10px", right: "0px" }}
        >
          <i className="fa fa-bars fa-2x" />
        </button>
        <ul className="dropdown-menu navmenu-dropdown">
          <li>
            <NavLinkMenu>HOME</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu>ABOUT US</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu>SERVICES</NavLinkMenu>
            <ul>
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
          </li>
          <li>
            <NavLinkMenu>COMMUNITY</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu>PUBLIC ADVOCACY</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu>CONTACT US</NavLinkMenu>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
