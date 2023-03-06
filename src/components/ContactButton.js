import React from "react";
import "./css/ContactButton.css";

function ContactButton({ children }) {
  return (
    <div>
      <div className="contactButton-div mx-1 d-sm-block d-none">
        <button className="btn contactButton-md">{children}</button>
      </div>
      <div className="contactButton-div mt-3 mx-1 d-sm-none">
        <button className="btn contactButton-sm">{children}</button>
      </div>
    </div>
  );
}

export default ContactButton;
