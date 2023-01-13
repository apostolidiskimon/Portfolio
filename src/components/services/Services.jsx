import React from "react";
import "./services.css";
import { RiChatCheckLine } from "react-icons/ri";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Can Do</h5>
      <h2>Services</h2>
      <div className="services__container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Certified Graphic Designer</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Responsive UI</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Material Design</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>2D/3D Animations</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Audio Effects</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX*/}
        <article className="service">
          <div className="service_head">
            <h3>Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Certified Web Designer</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Certified Python Fullstack Developer</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Develop Apps with Unity Engine/Unreal Engine/Android Studio</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>SQL Databases</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Deployment/Hosting</p>
            </li>
          </ul>
        </article>
        {/* END Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Management</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Time Managment</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Working And Communicating With Teams</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Supervising Teams</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>Project Management</p>
            </li>
            <li>
              <RiChatCheckLine className="service__list-icon" />
              <p>A people-first approach </p>
            </li>
          </ul>
        </article>
        {/* END Creation */}
      </div>
    </section>
  );
};

export default Services;
