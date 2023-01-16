import React from "react";
import HeaderHomeButton from "../buttons/header/home";
import HeaderTextButton from "../buttons/header/text";
import "./header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-center">
        <HeaderHomeButton />
      </div>
      <div className="header-links">
        <HeaderTextButton text="about" />
        <HeaderTextButton text="projects" />
        <HeaderTextButton text="contact" />
      </div>
      {/* home button */}
    </nav>
  );
};

export default Header;
