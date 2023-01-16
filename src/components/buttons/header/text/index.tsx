import React from "react";
import "./headerTextButton.css";

type Props = {
  text?: string;
};

const HeaderTextButton = ({ text }: Props) => {
  return <p className="header-text-button">{text}</p>;
};

export default HeaderTextButton;
