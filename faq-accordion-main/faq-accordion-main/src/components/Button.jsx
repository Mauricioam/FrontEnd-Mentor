import React from "react";

function Button({ isOpen }) {
  return isOpen ? (
    <button type="button">
      <img src="../assets/images/icon-minus.svg" />
    </button>
  ) : (
    <button>
      <img src="../assets/images/icon-plus.svg" />
    </button>
  );
}

export default Button;
