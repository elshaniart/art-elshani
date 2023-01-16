import React from "react";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="about">
      <h1 className="about-header">ABOUT ME</h1>
      <div className="about-header-bottom-line"></div>
      <p className="about-text">
        Here you will find information about my work experience, as well as my
        skills in terms of programming and tech
      </p>
      <div className="about-text-bottom-line"></div>

      <div className="about-info-container">
        <div className="about-experience">
          <h2 className="about-info-header">My Experience</h2>
          <div>
            <p className="about-info-text">
              1. <strong>Full-Stack </strong>Developer at KuBIT
            </p>
            <p className="about-info-text">March 2021 - March 2022</p>
            <p className="about-info-text">
              Technologies used:{" "}
              <strong>
                Javascript, HTML, CSS, React.js, React-Native, ASP.NET, SQL, C#,
                Springboot, Java, Tailwind
              </strong>
            </p>
          </div>
          <div className="about-text-bottom-line"></div>

          <div>
            <p className="about-info-text">
              2. <strong>Front-End </strong>Developer at TAUTO
            </p>
            <p className="about-info-text">March 2022 - Present</p>
            <p className="about-info-text">
              Technologies used:{" "}
              <strong>Javascript, HTML, CSS, React.js, Tailwind</strong>
            </p>
          </div>
        </div>
        <div className="about-skills">
          <h2 className="about-info-header">My Skills</h2>
          <div className="about-skills-container">
            <div className="about-skills-box">
              <h4>HTML</h4>
            </div>
            <div className="about-skills-box">
              <h4>CSS</h4>
            </div>
            <div className="about-skills-box">
              <h4>JavaScript</h4>
            </div>
            <div className="about-skills-box">
              <h4>React.js</h4>
            </div>
            <div className="about-skills-box">
              <h4>React Native</h4>
            </div>
            <div className="about-skills-box">
              <h4>Node.js</h4>
            </div>
            <div className="about-skills-box">
              <h4>Express.js</h4>
            </div>
            <div className="about-skills-box">
              <h4>Next.js</h4>
            </div>
            <div className="about-skills-box">
              <h4>Gatsby</h4>
            </div>
            <div className="about-skills-box">
              <h4>Tailwind</h4>
            </div>
            <div className="about-skills-box">
              <h4>C#</h4>
            </div>
            <div className="about-skills-box">
              <h4>Java</h4>
            </div>
            <div className="about-skills-box">
              <h4>Springboot</h4>
            </div>
            <div className="about-skills-box">
              <h4>ASP.NET</h4>
            </div>
            <div className="about-skills-box">
              <h4>Headless CMS</h4>
            </div>
            <div className="about-skills-box">
              <h4>Responsive Design</h4>
            </div>
            <div className="about-skills-box">
              <h4>SEO</h4>
            </div>
            <div className="about-skills-box">
              <h4>SQL</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
