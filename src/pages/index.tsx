import * as React from "react";
import AboutMe from "../components/about";
import ContactMe from "../components/contact";
import HeroBanner from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../components/SEO";

const query = graphql`
  query {
    allFile(
      filter: { name: { in: ["amazon-clone", "simply-recipes", "tauto"] } }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default function Home() {
  const heroRef = React.useRef<null | HTMLDivElement>(null);
  const aboutRef = React.useRef<null | HTMLDivElement>(null);
  const projectsRef = React.useRef<null | HTMLDivElement>(null);
  const contactRef = React.useRef<null | HTMLDivElement>(null);

  const {
    allFile: { nodes: images },
  } = useStaticQuery(query);
  console.log({ images });

  const projectData: Array<object> = [];

  images.forEach((image) => {
    const project: {
      name?: string;
      childImageSharp?: object;
      title?: string;
      text?: string;
      url?: string;
    } = {};

    project.name = image.name;
    project.childImageSharp = image.childImageSharp;
    switch (image.name) {
      case "amazon-clone":
        console.log("here");
        project.title = "Amazon Clone";
        project.text =
          "This is an Amazon front page clone which I made using React, styled with Tailwind. The data displayed on the app is fetched from the fake store API. I created this app in order to strengthen my understanding of fetching data from an API.";
        project.url = "https://amazon-ten-ivory.vercel.app/";
        break;
      case "simply-recipes":
        project.title = "Simply Recipes";
        project.text =
          "This is a web application I created while learning Gatsby. The data displayed on the app (recipes, images, tags), are all fetched from Contentful. The routing for the recipes is made programmatically using the folder structure.";
        project.url = "https://simply-recipes-gatsby-esh.netlify.app/";
        break;
      case "tauto":
        project.title = "TAUTO Web Page";
        project.text =
          "This is the Tauto Web Page which I created with React. It features a Home Page, About Page, Blog, Services, and Solutions tabs. The client portal, through which Tauto's clients will be able to submit tickets is currently in the works!";
        project.url = "https://www.tauto.com/";
        break;
    }

    projectData.push(project);
  });

  const scrollControl = (location: string) => {
    switch (location) {
      case "hero":
        heroRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        heroRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout scrollFunction={scrollControl}>
      <SEO />
      <main>
        <HeroBanner ref={heroRef} />
        <AboutMe ref={aboutRef} />
        <Projects ref={projectsRef} projectData={projectData} />
        <ContactMe ref={contactRef} />
      </main>
    </Layout>
  );
}
