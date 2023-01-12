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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            totam accusantium at dicta hic non perferendis qui odio eaque
            architecto. Fugiat, repellat cupiditate cum accusamus magni quia
            facere, quam neque cumque laborum rem voluptas, illum sapiente aut
            ipsum reiciendis alias! Voluptatem perspiciatis iste exercitationem
            eaque!
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
