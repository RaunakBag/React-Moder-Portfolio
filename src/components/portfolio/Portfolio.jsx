import React from "react";
import "./portfolio.css";
import game from "../../assets/2048.png";
import amz from "../../assets/AMAZON.png";
import net from "../../assets/NETFLIX.png";
import qr from "../../assets/QR-CODE.png";
import su from "../../assets/SUDOKU.png";
import todo from "../../assets/TODO.png";

const data = [
  {
    id: 1,
    image: net,
    title: "Netflix Clone using React",
    github: "https://github.com/RaunakBag/NetflixClone",
    demo: "https://netflix-clone-483f9.web.app/",
  },
  {
    id: 2,
    image: amz,
    title: "Amazon Clone using React",
    github: "https://github.com/RaunakBag/AmazonClone",
    demo: "https://fir-b70c3.web.app/",
  },
  {
    id: 3,
    image: game,
    title: "2048 Game",
    github: "https://github.com/RaunakBag/2048",
    demo: "https://raunakbag.github.io/2048/",
  },
  {
    id: 4,
    image: qr,
    title: "QR Code Generator",
    github: "https://github.com/RaunakBag/QR-Code-Generator",
    demo: "https://qrcode-generator-raunak.netlify.app/",
  },
  {
    id: 5,
    image: su,
    title: "Sudoku",
    github: "https://github.com/RaunakBag/SudokuGame",
    demo: "https://raunakbag.github.io/SudokuGame/",
  },
  {
    id: 6,
    image: todo,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com/RaunakBag/React-TODO",
    demo: "https://raunakbag.github.io/React-TODO/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
