import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        RAUNAK BAG
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        
        <li>
          <a href="#experience">Technology</a>
        </li>
        <li>
          <a href="#testimonials">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/raunak.bag1" target="blank">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/raunakbag" target="blank">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
