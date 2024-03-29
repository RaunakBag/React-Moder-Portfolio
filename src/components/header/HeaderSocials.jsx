import React from "react";
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/raunakbag/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/RaunakBag" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      {/* <a href="https://dribbble.com" target="_blank" rel="noreferrer">
        <BsDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
