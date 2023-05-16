import React from "react";
import styled from "styled-components";

const StyledHr = styled.hr`
  width: 100%;
  border: 1px solid var(--background-color);
`;

function Separator() {
  return <StyledHr />;
}

export default Separator;
