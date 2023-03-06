import React from "react";
import "./css/NavMenuLink.css";

function NavLinkMenu({ children }) {
  return (
    <a className="dropdown-item navmenulink" href={`#${children}`}>
      {children}
    </a>
  );
}

export default NavLinkMenu;
