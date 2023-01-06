import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            {/* <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
          Junior Web Developer with 1 plus years of experience building web applications from the ground up - information gathering, planning, design, development, testing and delivery and maintenance. Extremely passionate towards software architecture and design combined with sensitivity to serve the needs of the business balanced with the delivery of high quality solutions.</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
