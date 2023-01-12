import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience" className="responsive">
      <h5>The Skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsFillCheckCircleFill ClassName="experience__icons" />
              <h4>HTML</h4>
              <small ClassName="text-light">Competent</small>
            </article>

            <article className="experience_details">
              <BsFillCheckCircleFill ClassName="experience__icons" />
              <h4>CSS</h4>
              <small ClassName="text-light">Competent</small>
            </article>

            <article className="experience_details">
              <BsFillCheckCircleFill ClassName="experience__icons" />
              <h4>JavaScript</h4>
              <small ClassName="text-light">Competent</small>
            </article>

            <article className="experience_details">
              <BsFillCheckCircleFill ClassName="experience__icons" />
              <h4>React</h4>
              <small ClassName="text-light">Competent</small>
            </article>

            <article className="experience_details">
              <BsFillCheckCircleFill ClassName="experience__icons" />
              <h4>Bootstrap</h4>
              <small ClassName="text-light">Competent</small>
            </article>
          </div>
        </div>
        {/* FRONT END END */}
        <div className="Experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsFillCheckCircleFill ClassName="experience__icons" />
              <h4>SQL </h4>
              <small ClassName="text-light">Competent</small>
            </article>

            <article className="experience_details">
              <BsFillCheckCircleFill ClassName="experience__icons" />
              <h4>Node Js </h4>
              <small ClassName="text-light">Advanced Begginer</small>
            </article>

            <article className="experience_details">
              <BsFillCheckCircleFill ClassName="experience__icons" />
              <h4>Python</h4>
              <small ClassName="text-light">Competent</small>
            </article>

            <article className="experience_details">
              <BsFillCheckCircleFill ClassName="experience__icons" />
              <h4>Django</h4>
              <small ClassName="text-light">Competent</small>
            </article>

            <article className="experience_details">
              <BsFillCheckCircleFill ClassName="experience__icons" />
              <h4>Git</h4>
              <small ClassName="text-light">Advanced Begginer</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
