import * as React from "react";
import AboutMe from "../components/about";
import ContactMe from "../components/contact";
import HeroBanner from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";

export default function Home() {
  const heroRef = React.useRef<null | HTMLDivElement>(null);
  const aboutRef = React.useRef<null | HTMLDivElement>(null);
  const projectsRef = React.useRef<null | HTMLDivElement>(null);
  const contactRef = React.useRef<null | HTMLDivElement>(null);

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
      <main>
        <HeroBanner ref={heroRef} />
        <AboutMe ref={aboutRef} />
        <Projects ref={projectsRef} />
        <ContactMe ref={contactRef} />
      </main>
    </Layout>
  );
}
