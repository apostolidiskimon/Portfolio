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
          <div className="item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Personal Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/apostolidiskimon/" className="btn">
              Github
            </a>
            <a
              href="https://github.com/apostolidiskimon/"
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>

        {/* PROJECT 2 /////////////////// */}
        <article className="portfolio__item">
          <div className="item-image">
            <img src={WIP} alt="" />
          </div>
          <h3>WIP</h3>
          <div className="portfolio__item-cta">
            <a href="#portfolio" className="btn">
              N/A
            </a>
            <a href="#portfolio" className="btn">
              N/A
            </a>
          </div>
        </article>
        {/* PROJECT 3 /////////////////// */}
        <article className="portfolio__item">
          <div className="item-image">
            <img src={WIP} alt="" />
          </div>
          <h3>WIP</h3>
          <div className="portfolio__item-cta">
            <a href="#portfolio" className="btn">
              N/A
            </a>
            <a href="#portfolio" className="btn">
              N/A
            </a>
          </div>
        </article>
        {/* PROJECT 4 /////////////////// */}
        <article className="portfolio__item">
          <div className="item-image">
            <img src={WIP} alt="" />
          </div>
          <h3>WIP</h3>
          <div className="portfolio__item-cta">
            <a href="#portfolio" className="btn">
              N/A
            </a>
            <a href="#portfolio" className="btn">
              N/A
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
