import React, { Component } from "react";
import "./css/ContactForm.css";
import "../gmail";
import axios from "axios";

// ({ title })

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    subject: "",
    msg: "",
    sent: false,
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  handleSubject = (e) => {
    this.setState({
      subject: e.target.value,
    });
  };

  handleMsg = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      number: this.state.number,
      subject: this.state.subject,
      msg: this.state.msg,
    };

    axios
      .post("/api/forma", data)
      .then((res) =>
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        )
      )
      .catch(() => {
        console.log("message not sent");
      });
  };

  //for reseting
  resetForm = () => {
    this.setState({
      name: "",
      number: "",
      subject: "",
      msg: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <div className="contactForm-div bg-light">
        <div className="contactForm-title">{this.props.title}</div>
        <div className="contactForm-formdiv border border-1 ">
          <form onSubmit={this.formSubmit} className="contactForm-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={this.state.name}
              onChange={this.handleName}
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number*"
              value={this.state.number}
              onChange={this.handleNumber}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={this.state.subject}
              onChange={this.handleSubject}
            />
            <textarea
              name="msg"
              cols="30"
              rows="7"
              required
              value={this.state.msg}
              onChange={this.handleMsg}
            ></textarea>
            <p className={this.state.sent ? "d-block text-success" : "d-none"}>
              Message Sent
            </p>
            <button type="submit" className="d-block contactForm-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
