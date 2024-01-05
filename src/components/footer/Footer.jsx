import React from "react";
import "./footer.css";
import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <br></br>
      <a href="#" className="footer__logo">
        Home
      </a>
      <ul>
        {/*<li>
          <a href="#">Home</a>
          <a href="about">About</a>
          <a href="experience">Experience</a>
          <a href="services">Services</a>
          <a href="portfolio">Portfolio</a>
          <a href="contact">Contact</a>
  </li>*/}
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/apostolidiskimon/"
          className="iconss"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/apostolidiskimon/"
          className="iconss"
          rel="noreferrer"
          target="_blank"
        >
          <GrGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;2023 Kimon Apostolidis . All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
