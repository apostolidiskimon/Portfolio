import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" className="responsive">
      <div className="container "></div>
      <div className="containerinfo">
        {/* Two divisions with the classes leftDivision and rightDivision */}
        <div className="leftDivision">
          <div className="about_general">
            <div className="container about_container left">
              <p>
                Below you may find more information regarding my academic
                eeducation as well as certifications and training.
                <br></br>
                <br></br>
                <br></br>
              </p>
            </div>
            <div className="about__cardsleft">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Ionian University</h5>
                <h4>B.A</h4>
                <br></br>

                <h4>Applied Informatics In Administration And Economy</h4>
              </article>

              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Work Early</h5>
                <h4>Certificate</h4>
                <br></br>
                <h3>FullStack Developer</h3>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Google</h5>
                <h4>Certificate</h4>
                <br></br>
                <h3>Foundations Of Project Management</h3>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Microsoft</h5>
                <h4>Certificate</h4>
                <br></br>
                <h4>Azure Fundamentals AZ-900</h4>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>LRN</h5>
                <h4>Certificate</h4>
                <br></br>
                <h4>C2 Level Of Proficiency In English</h4>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Deutche Telekom</h5>
                <h4>Certificate</h4>
                <br></br>
                <h4>GDPR-Data Protection</h4>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>VELLUM GLOBAL</h5>
                <h4>Certificate</h4>
                <br></br>
                <h3>Certified Unity Developer</h3>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Microsoft</h5>
                <h4>Certificate</h4>
                <br></br>
                <h4>Developing Solutions for Microsoft Azure AZ-204</h4>
              </article>
            </div>

            <p>
              <p>
                <p>
                  <br></br>
                  <h3> Training and Upskilling</h3>
                  <br></br>• FULL STACK DEVELOPER | Reatcode-Workearly, IT
                  Consulting Services | Athens, Greece <br></br>• Learn JIRA
                  with real-world examples (+Confluence bonus), Udemy
                  <br></br>• Docker & Kubernetes: The Practical Guide [2023
                  Edition], Udemy
                  <br></br>• Git Complete: The definitive, step-by-step guide to
                  Git, Udemy <br></br>• Modern HTML & CSS From The Beginning
                  (Including Sass), Udemy<br></br>• Certified Game Developer
                  with Unity, VELLUM Global Educational Services <br></br>•
                  Foundations of Project Management, Google <br></br>• GDPR -
                  Data Protection, Deutsche Telekom <br></br>• Additional
                  short-term courses via LinkedIn Soft Skills <br></br>• Complex
                  Problem Solving
                  <br></br>• Critical Thinking <br></br>• Coordinating with
                  others Consistency <br></br>• “Can do” attitude <br></br>•
                  Ability to work under pressure <br></br>
                  •Self-Discipline Work Ethic
                  <br></br>
                </p>
              </p>
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="rightDivision">
          <div class="child"></div>
          <div className="about__cardsright">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Developer</h5>
              <small>Effective software products and systems</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Project Managment</h5>
              <small>From Initiation To Closure</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Business Sectors</h5>
              <small>Experience In Three Business Sectors</small>
            </article>
          </div>
          <div className="Info">
            <br></br> <br></br>
            <br></br> <br></br>
            <br></br>
            <br></br>
            <br></br> <br></br>
            <br></br>
            <br></br>
            <br></br> <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Work Experience</h2>
            <br></br>
            <br></br>
            <p>
              I am a <strong>Full Stack Developer</strong> who can create and
              integrate software solutions for various industries and domains.
            </p>
            <p>
              I work at Accenture, a leading global consulting firm, where I{" "}
              <strong>collaborate with stakeholders</strong> and other teams to
              translate business requirements into{" "}
              <strong>effective software products or systems.</strong> I have
              extensive knowledge and experience in various technologies,
              including
              <strong>
                {" "}
                CSS, HTML, Python, JavaScript, Django, React, Java, C#, and SQL
                databases.
              </strong>{" "}
              I also have valuable customer service and sales order processing
              skills, which I developed as a sales consultant-advisor at Cosmote
              for three years. I am adept at
              <strong>
                {" "}
                problem-solving and program/project management,
              </strong>{" "}
              and I constantly update myself with the latest technology trends
              and developments. I am passionate about leveraging my skills to
              make a positive <strong>impact in the world</strong> and improve
              the human experience.
              <br></br>
              <br></br>
              <strong> As a Developer,</strong>{" "}
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
