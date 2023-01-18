import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./projects.css";

const Projects = React.forwardRef<HTMLDivElement | null>((props, ref) => {
  return (
    <>
      <div className="projects-gap" ref={ref}></div>
      <div className="projects">
        <h1 className="projects-header">PROJECTS</h1>
        <div className="projects-header-bottom-line"></div>
        <p className="about-text">
          Here you will find some of the projects I've developed using React and
          React-based Frameworks
        </p>
        <div className="projects-text-bottom-line"></div>
        <div className="projects-container">
          <div className="project-container">
            <div className="projects-image-container">
              <StaticImage
                src={"../../assets/images/tauto.PNG"}
                alt="tauto page"
                className={"projects-image"}
              />
            </div>
            <div className="projects-text-container">
              <h2 className="project-header">TAUTO Web Page</h2>
              <p className="project-text">
                This is the Tauto Web Page which I created with React. It
                features a Home Page, About Page, Blog, Services, and Solutions
                tabs. The client portal, through which Tauto's clients will be
                able to submit tickets is currently in the works!
              </p>
              <a href="https://www.tauto.com/" className="project-button">
                Visit Site
              </a>
            </div>
          </div>
          <div className="project-container">
            <div className="projects-image-container">
              <StaticImage
                src={"../../assets/images/simply-recipes.PNG"}
                alt="tauto page"
                className={"projects-image"}
              />
            </div>
            <div className="projects-text-container">
              <h2 className="project-header">Simply Recipes</h2>
              <p className="project-text">
                This is a web application I created while learning Gatsby. The
                data displayed on the app (recipes, images, tags), are all
                fetched from Contentful. The routing for the recipes is made
                programmatically using the folder structure
              </p>
              <a
                href="https://simply-recipes-gatsby-esh.netlify.app/"
                className="project-button"
              >
                Visit Site
              </a>
            </div>
          </div>
          <div className="project-container">
            <div className="projects-image-container">
              <StaticImage
                src={"../../assets/images/amazon-clone.PNG"}
                alt="tauto page"
                className={"projects-image"}
              />
            </div>
            <div className="projects-text-container">
              <h2 className="project-header">Amazon Clone</h2>
              <p className="project-text">
                This is an Amazon front page clone which I made using React,
                styled with Tailwind. The data displayed on the app is fetched
                from the fake store API. I created this app in order to
                strengthen my understanding of fetching data from an API.
              </p>
              <a
                href="https://amazon-ten-ivory.vercel.app/"
                className="project-button"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Projects;
