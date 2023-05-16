import React from "react";
import styled from "styled-components";
import submitIcon from "../assets/images/icon-arrow.svg";

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  box-sizing: border-box;
  background-color: var(--font-secondary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

function SubmitButton() {
  return (
    <ImageContainer>
      <img src={submitIcon} alt="Arrow pointing down, submit button" />
    </ImageContainer>
  );
}

export default SubmitButton;
