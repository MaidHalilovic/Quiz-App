import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className='container'>
      <h1>About Us</h1>
      <a href='https://github.com/MaidHalilovic' target='_blank'>
        <FaGithub size={35} color='black' />
      </a>
      <a>Gmail: maidhaliloviccc@gmail.com</a>
    </div>
  );
};

export default Footer;
