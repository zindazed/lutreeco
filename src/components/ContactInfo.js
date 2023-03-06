import React from "react";
import "./css/ContactInfo.css";

function ContactInfo({ title, children }) {
  return (
    <div className={`contactInfo-div`}>
      <div className="contactInfo-title">{title}</div>
      <span className=" pe-2">{children}</span>
    </div>
  );
}

export default ContactInfo;
