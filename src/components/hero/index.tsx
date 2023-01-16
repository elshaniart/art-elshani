import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./heroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero">
      <StaticImage
        src="../../assets/images/hero-image.jpg"
        alt="hero"
        placeholder="blurred"
        layout="fullWidth"
        className="hero"
      />
      <div className="hero-text-container">
        <h1 className="hero-text-header">HEY, I'M ART ELSHANI</h1>
        <p className="hero-text">
          A Fullstack Web Developer specializing in the React.js Framework
        </p>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroBanner;
