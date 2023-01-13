import React from "react";
import "./about.css";
import ME from "../../assets/tools.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" className="responsive">
      <h5>Get To Know</h5>
      <h2>Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} className="image-resize" alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 Year Working Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Business Sectors</h5>
              <small>Experience In 3 Diffrent Business Sectors</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+Years Of Working In Projects</small>
            </article>
          </div>

          <p>
            Hello there. Thank you for visiting my portfolio. My name is Kimon
            Apostolidis and right now I'm located in Greece. I have worked on
            roles across 3 different business sectors including : <b>Sales </b>,
            <b>Call Centers</b>, and <b>Project Management</b>. I have a
            <b> Bachelor's Degree</b> in :{" "}
            <b>Applied Informatics In Administration And Economy</b> and a
            strong passion for creating multimedia projects.I have acquired
            experience in working with teams as much as guiding team members to
            a particular goal.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
