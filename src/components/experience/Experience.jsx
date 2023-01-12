import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend"></div>
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience_details">
            <BsFillCheckCircleFill />
            <h4>HTML</h4>
            <small ClassName="text-light">Competent</small>
          </article>

          <article className="experience_details">
            <BsFillCheckCircleFill />
            <h4>CSS</h4>
            <small ClassName="text-light">Competent</small>
          </article>

          <article className="experience_details">
            <BsFillCheckCircleFill />
            <h4>JavaScript</h4>
            <small ClassName="text-light">Competent</small>
          </article>

          <article className="experience_details">
            <BsFillCheckCircleFill />
            <h4>React</h4>
            <small ClassName="text-light">Competent</small>
          </article>

          <article className="experience_details">
            <BsFillCheckCircleFill />
            <h4>Bootstrap</h4>
            <small ClassName="text-light">Competent</small>
          </article>
        </div>
        <div className="Experience__backend"></div>
      </div>
    </section>
  );
};

export default Experience;
