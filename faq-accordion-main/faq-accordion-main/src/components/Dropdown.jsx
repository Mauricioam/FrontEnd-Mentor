import React from "react";
import Button from "./Button";

function Dropdown({ title, text }) {
  return (
    <div>
      <div>{title}</div>
      <div>{text}</div>
      <Button isOpen />
    </div>
  );
}

export default Dropdown;
