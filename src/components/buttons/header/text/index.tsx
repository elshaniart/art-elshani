import React from "react";
import "./headerTextButton.css";

type Props = {
  text?: string;
  onClick: () => void;
};

const HeaderTextButton = ({ text, onClick }: Props) => {
  return (
    <button className="header-text-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default HeaderTextButton;
