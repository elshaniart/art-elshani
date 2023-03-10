import React from "react";
import "./contactMe.css";

const ContactMe = React.forwardRef<HTMLDivElement | null>((props, ref) => {
  return (
    <>
      <div className="contact-gap" ref={ref}></div>
      <div className="contact-me">
        <h1 className="contact-header">CONTACT</h1>
        <div className="contact-header-bottom-line"></div>
        <form
          className="contact-form"
          action="https://formspree.io/f/xzbqzvkj"
          method="POST"
        >
          <div className="form-row">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              className="contact-me-input"
              id="name"
              name="name"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              className="contact-me-input"
              id="email"
              name="email"
              required
              placeholder="Enter your Email"
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Your Name</label>
            <textarea
              className="contact-me-textarea"
              name="message"
              id="message"
              placeholder="Leave a Message!"
            />
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
});

export default ContactMe;
