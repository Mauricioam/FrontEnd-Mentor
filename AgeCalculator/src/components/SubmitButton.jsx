import React from "react";
import styled from "styled-components";
import submitIcon from "../assets/images/icon-arrow.svg";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  box-sizing: border-box;
  border: none;
  background-color: var(--font-secondary);
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background-color: var(--font-primary);
    cursor: pointer;
    transition-duration: 0.5s;
  }
`;

function SubmitButton({ handleSubmit }) {
  return (
    <Button onSubmit={handleSubmit}>
      <img src={submitIcon} alt="Arrow pointing down, submit button" />
    </Button>
  );
}

export default SubmitButton;
