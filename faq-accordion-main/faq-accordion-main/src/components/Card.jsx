import React from "react";
import TitleIcon from "./TitleIcon";
import Dropdown from "./Dropdown";

let firstTitle = "What is Frontend Mentor adn how it will help me?";
let text = "What is Frontend Mentor adn how it will help me?";

function Card() {
  return (
    <div>
      <TitleIcon />
      <Dropdown title={firstTitle} text={text} />
      <Dropdown title={firstTitle} text={text} />
      <Dropdown title={firstTitle} text={text} />
      <Dropdown title={firstTitle} text={text} />
    </div>
  );
}

export default Card;
