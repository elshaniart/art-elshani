import React from "react";
import { Link } from "gatsby";
import "./headerHomeButton.css";
import favicon from "../../../../assets/images/favicon.ico";

const HeaderHomeButton = () => {
  return (
    <Link to="/" className="header-button">
      <img src={favicon} alt="logo" className="header-button-image" />
      <p>ART ELSHANI</p>
    </Link>
  );
};

export default HeaderHomeButton;
