import React from "react";
import HeaderHomeButton from "../buttons/header/home";
import HeaderTextButton from "../buttons/header/text";
import "./header.css";

type Props = {
  scrollFunction: (location: string) => void;
};

const Header = ({ scrollFunction }: Props) => {
  return (
    <nav className="header">
      <div className="header-center">
        <HeaderHomeButton onClick={() => scrollFunction("hero")} />
      </div>
      <div className="header-links">
        <HeaderTextButton
          text="about"
          onClick={() => scrollFunction("about")}
        />
        <HeaderTextButton
          text="projects"
          onClick={() => scrollFunction("projects")}
        />
        <HeaderTextButton
          text="contact"
          onClick={() => scrollFunction("contact")}
        />
      </div>
    </nav>
  );
};

export default Header;
