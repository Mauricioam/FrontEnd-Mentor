import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: ${(props) => props.fontSize || "15px"};
  letter-spacing: ${(props) => props.spacing || ""};
  color: ${(props) =>
    props.error ? "var(--font-error)" : "var(--font-placeholder)"};
`;

function LabelInput({ children, fontSize, color, spacing, error }) {
  return (
    <StyledLabel
      fontSize={fontSize}
      color={color}
      spacing={spacing}
      error={error}
    >
      {children}
    </StyledLabel>
  );
}

export default LabelInput;
