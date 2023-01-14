import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Projects.png";
import WIP from "../../assets/wip.jpg";
import MF from "../..//assets/musicfinder2.png";
import APK from "../../assets/musicfinderbeta.apk";
import PRESEN from "../../assets/presentation.pptx";
import MS from "../../assets/logo2.png";
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
            <a
              href="https://github.com/apostolidiskimon/"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="ostolidiskimon.github.io/Portfolio/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>

        {/* PROJECT 2 /////////////////// */}
        <article className="portfolio__item">
          <div className="item-image">
            <img src={MS} alt="" />
          </div>
          <h3>
            Microsoft Store <h5>WIP</h5>
          </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/apostolidiskimon/msstore"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://apostolidiskimon.github.io/msstore/"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>
        {/* PROJECT 2 /////////////////// */}
        <article className="portfolio__item">
          <div className="item-image">
            <img src={MF} alt="" />
          </div>
          <h3>
            Music finder<h5>2016 beta</h5>
          </h3>
          <div className="portfolio__item-cta">
            <a href={PRESEN} download className="btn">
              PDF
            </a>
            <a href={APK} download className="btn btn-primary">
              .Apk
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
