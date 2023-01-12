import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Projects.png";
import WIP from "../../assets/wip.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio" className="responsive">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/apostolidiskimon/" className="btn">
              Github Portfolio
            </a>
            <a
              href="https://github.com/apostolidiskimon/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* PROJECT 2 /////////////////// */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WIP} alt="" />
          </div>
          <h3>WORK IN PROGRESS</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/apostolidiskimon/" className="btn">
              WORK IN PROGRESS
            </a>
            <a
              href="https://github.com/apostolidiskimon/"
              className="btn btn-primary"
              target="_blank"
            >
              N/A
            </a>
          </div>
        </article>

        {/* PROJECT 3 /////////////////// */}
      </div>
    </section>
  );
};

export default Portfolio;
