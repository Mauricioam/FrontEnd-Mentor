import React from "react";
import Button from "./Button";

function Dropdown({ title, text }) {
  return (
    <div className="dropdown">
      <div>{title}</div>
      <Button isOpen />
    </div>
  );
}

export default Dropdown;
