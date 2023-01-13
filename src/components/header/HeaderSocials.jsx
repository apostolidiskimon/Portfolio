import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/apostolidiskimon/"
        className="iconss"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/apostolidiskimon "
        className="iconss"
        rel="noreferrer"
        target="_blank"
      >
        <GoMarkGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
