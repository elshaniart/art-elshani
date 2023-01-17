import React from "react";
import Footer from "../footer";
import Header from "../header";
import "./layout.css";

type Props = {
  children?: JSX.Element;
  scrollFunction: (location: string) => void;
};

const Layout = ({ children, scrollFunction }: Props) => {
  return (
    <>
      <Header scrollFunction={scrollFunction} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
