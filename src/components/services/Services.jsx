import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Where do I work</h5>
      <h2>Organisation</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
          <div className="client__avatar">
                <img src="data:image/png;base64,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 "alt= ""/>
              </div>
            <h2>Research Analyst</h2>
            <h3>Globsyn AI Workspace</h3>
            <h5>03/2020 - 09/2020</h5>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Worked On AI and Machine Learning Project on Amazon Sagemaker.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Worked on data annotations for a project based on Voice Assistant.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Worked on video labeling for a project based on Artificial Intelligence.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Worked on data annotations for a sports based software.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
          <div className="services__avatar">
                <img src="https://logosandtypes.com/wp-content/uploads/2022/03/Cognizant.png" alt=" " />
              </div>
            <h2>Programmer Analyst</h2>
            <h3>Cognizant Technology Solutions</h3>
            <h5>02/2022 - present</h5>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working on Oracle SOA Middleware integrating new code changes in Spring Boot services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitoring client applications on AWS and Kafka.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintaining and Monitoring critical work flows for inbound and outbound services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating and maintaining reports and documents for critical incidents and their solutions.</p>
            </li>
            {/*<li>
              <BiCheck className="service__list-icon" />
              <p>The website uses Node, Express and MongoDb for ServerSide.</p>
            </li>*/}
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>Features like signup, login, add to cart, order, payment.</p>
            </li> */}
          </ul>
        </article>
        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;
