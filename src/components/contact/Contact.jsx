import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section id="contact" className="responsive">
      <h5>Feel Free To</h5>
      <h2> Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>apostolidiskimon@gmail.com</h5>
            <a href="mailto:apostolidiskimon@gmail.com">Send A Message</a>
          </article>

          <article className="contact__option">
            <MdEmail />
            <h4>Facebook Messenger</h4>
            <h5>apostolidiskimon@gmail.com</h5>
            <a href="mailto:apostolidiskimon@gmail.com">Send A Message</a>
          </article>
        </div>
        {/*contact end*/}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name "
            requred
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="messsage"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
