import React from "react";
import Footer from "../footer";
import Header from "../header";
import "./layout.css";

type Props = {
  children?: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
