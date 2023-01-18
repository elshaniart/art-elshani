import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./projects.css";

type ProjectsProps = {
  projectData: Array<{
    name: string;
    childImageSharp: { gatsbyImageData: object };
    title?: string;
    text?: string;
    url?: string;
  }>;
};

const Projects = React.forwardRef<HTMLDivElement | null, ProjectsProps>(
  (props, ref) => {
    const { projectData } = props;
    return (
      <>
        <div className="projects-gap" ref={ref}></div>
        <div className="projects">
          <h1 className="projects-header">PROJECTS</h1>
          <div className="projects-header-bottom-line"></div>
          <p className="about-text">
            Here you will find some of the projects I've developed using React
            and React-based Frameworks
          </p>
          <div className="projects-text-bottom-line"></div>
          <div className="projects-container">
            {projectData.map((project, index) => {
              const { name, text, title, url, childImageSharp } = project;

              return (
                <div className="project-container" key={index}>
                  <div className="projects-image-container">
                    <GatsbyImage
                      image={childImageSharp?.gatsbyImageData}
                      alt={name}
                      className={"projects-image"}
                    />
                  </div>
                  <div className="projects-text-container">
                    <h2 className="project-header">{title}</h2>
                    <p className="project-text">{text}</p>
                    <a href={url} className="project-button">
                      Visit Site
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
);

export default Projects;
