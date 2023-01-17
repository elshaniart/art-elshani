import React from "react";
import HeaderHomeButton from "../buttons/header/home";
import HeaderTextButton from "../buttons/header/text";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";

type Props = {
  scrollFunction: (location: string) => void;
  handleClick: () => void;
};

const Header = ({ scrollFunction, handleClick }: Props) => {
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
      <button className="header-burger" onClick={handleClick}>
        <GiHamburgerMenu className="h-10 w-10 rounded-full p-1.5 bg-gray-50" />
      </button>
    </nav>
  );
};

export default Header;
