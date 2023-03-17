import React from "react";
import "./css/NavMenuLink.css";

function NavLinkMenu({ children }) {
  return (
    <a
      className="dropdown-item navmenulink w-100 text-center"
      href={`#${children}`}
    >
      {children}
    </a>
  );
}

export default NavLinkMenu;
