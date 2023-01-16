import * as React from "react";
import AboutMe from "../components/about";
import ContactMe from "../components/contact";
import HeroBanner from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroBanner />
        <AboutMe />
        <Projects />
        <ContactMe />
      </main>
    </Layout>
  );
}
