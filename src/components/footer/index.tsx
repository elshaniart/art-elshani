import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-center">
        <div className="footer-info">
          <h2 className="footer-header">Art Elshani</h2>
          <p className="footer-text">
            A Fullstack Web Developer specializing in the React.js Framework
          </p>
        </div>
        <div className="footer-socials">
          <div>
            <h2 className="footer-header">Socials</h2>
            <div className="footer-icons-container">
              <a href="https://www.linkedin.com/in/art-elshani-5aa99618a/">
                <FaLinkedin color="white" className="footer-icon" />
              </a>
              <a href="https://github.com/elshaniart">
                <FaGithub color="white" className="footer-icon" />
              </a>
              <a href="https://www.instagram.com/elshaniart/">
                <FaInstagram color="white" className="footer-icon" />
              </a>
              <a href="https://twitter.com/elshaniart01">
                <FaTwitter color="white" className="footer-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-copyright-text">
          &copy; {new Date().getFullYear()}, Made by{" "}
          <strong>Art Elshani</strong> with <strong>Gatsby</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
