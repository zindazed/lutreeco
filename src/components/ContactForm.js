import React from "react";
import "./css/ContactForm.css";
import "../gmail";

function ContactForm({ title }) {
  return (
    <div className="contactForm-div bg-light">
      <div className="contactForm-title">{title}</div>
      <div className="contactForm-formdiv border border-1 ">
        <form className="contactForm-form">
          <input type="text" placeholder="Your Name*" />
          <input type="text" placeholder="Phone Number*" />
          <input type="text" placeholder="Subject" />
          <textarea cols="30" rows="7"></textarea>
          <button
            className="d-block contactForm-button"
            onClick={() => {
              sendMail()
                .then((result) => console.log("Email sent...", result))
                .catch((error) => console.log(error.message));
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
