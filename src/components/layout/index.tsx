import React, { useState } from "react";
import Footer from "../footer";
import Header from "../header";
import "./layout.css";

type Props = {
  children?: JSX.Element;
  scrollFunction: (location: string) => void;
};

const Layout = ({ children, scrollFunction }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const onBurgerClick = () => {
    setShowMenu((prevShow) => !prevShow);
  };

  return (
    <>
      <Header scrollFunction={scrollFunction} handleClick={onBurgerClick} />
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col md:hidden h-60 sticky top-24 z-50 bg-white`}
      >
        <button
          className="menu-button"
          onClick={() => {
            scrollFunction("about");
            setShowMenu(false);
          }}
        >
          About
        </button>
        <button
          className="menu-button"
          onClick={() => {
            scrollFunction("projects");
            setShowMenu(false);
          }}
        >
          Projects
        </button>
        <button
          className="menu-button"
          onClick={() => {
            scrollFunction("contact");
            setShowMenu(false);
          }}
        >
          Contact
        </button>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
