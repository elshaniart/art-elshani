import React from "react";
import "./headerHomeButton.css";
import favicon from "../../../../assets/images/favicon.ico";

type Props = {
  onClick: (location) => void;
};

const HeaderHomeButton = ({ onClick }: Props) => {
  return (
    <button className="header-button" onClick={onClick}>
      <img src={favicon} alt="logo" className="header-button-image" />
      <p>ART ELSHANI</p>
    </button>
  );
};

export default HeaderHomeButton;
