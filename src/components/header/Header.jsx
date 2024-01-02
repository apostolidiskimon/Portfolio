import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/placeholder1.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>My Name Is</h3>
        <h1>Kimon Apostolidis</h1>
        <h2 className="textlight">
          BSc in Applied Informatics In Administration And Economy
        </h2>
        <h2>FullStack Development | Project Management</h2>
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
