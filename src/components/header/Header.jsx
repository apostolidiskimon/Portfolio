import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/placeholder1.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h2>Kimon Apostolidis</h2>
        <h5 className="textlight">FullStack Developer</h5>
        <h1>THIS SITE IS WIP</h1>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
