import React from "react";
import "./css/ContactButton.css";

function ContactButton({ children }) {
  return (
    <div className="" style={{ marginTop: "3px" }}>
      <div className="contactButton-div mx-1 d-sm-block d-none">
        <a href={`tel:${children}`} className="btn contactButton-md">
          {children}
        </a>
      </div>
      <div className="contactButton-div mx-1 d-sm-none">
        <a href={`tel:${children}`} className="btn contactButton-sm">
          {children}
        </a>
      </div>
    </div>
  );
}

export default ContactButton;
