import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section id="contact" className="responsive">
      <h5>Feel Free To</h5>
      <h2> Contact Me</h2>
      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>apostolidiskimon@gmail.com</h5>
            <a href="mailto:apostolidiskimon@gmail.com">Send A Message</a>
          </article>
        </div>
        {/*contact end*/}
      </div>
    </section>
  );
};

export default Contact;
