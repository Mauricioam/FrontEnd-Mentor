import React from "react";

function Button({ isOpen }) {
  return isOpen ? <div>+</div> : <div>-</div>;
}

export default Button;
