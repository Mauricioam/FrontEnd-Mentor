import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  font-size: var(--main-size);
  font-weight: var(--bold);
  font-style: var(--italic);
  word-spacing: -10px;
`;

const StyledNumber = styled.span`
  color: var(--font-secondary);
`;

function TextField({ number, date }) {
  return (
    <Paragraph>
      <StyledNumber>{number ?? "--"}</StyledNumber> {date ?? "date"}
    </Paragraph>
  );
}

export default TextField;
