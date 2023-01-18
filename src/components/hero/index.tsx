import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./heroBanner.css";

type HeroProps = {
  scrollFunction: (location: string) => void;
};

const HeroBanner = React.forwardRef<HTMLDivElement | null, HeroProps>(
  (props, ref) => {
    const { scrollFunction } = props;
    return (
      <>
        <div className="hero-gap" ref={ref}></div>
        <div className="hero">
          <StaticImage
            src="../../assets/images/hero-image.jpg"
            alt="hero"
            placeholder="blurred"
            layout="fullWidth"
            className="hero"
          />
          <div className="w-full flex justify-center">
            <div className="hero-text-container">
              <h1 className="hero-text-header">HEY, I'M ART ELSHANI</h1>
              <p className="hero-text">
                A Fullstack Web Developer specializing in the React.js Framework
              </p>
              {/* learn more will open my resume */}
              <button className="hero-button" onClick={scrollFunction}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default HeroBanner;
