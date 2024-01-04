import React from "react";

function Button({ isOpen }) {
  return isOpen ? <button>+</button> : <button>-</button>;
}

export default Button;
