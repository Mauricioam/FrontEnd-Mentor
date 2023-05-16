import React from "react";
import TextField from "./TextField";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import Separator from "./Separator";
import styled from "styled-components";

const InputsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const WrapperContainer = styled.div`
  background-color: var(--white);
  width: 40%;
  padding: 2.2rem;
  border-radius: 15px 12px 130px 15px;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Wrapper() {
  return (
    <WrapperContainer>
      <InputsContainer>
        <InputField labelText={"DAY"} placeholder="DD" />
        <InputField labelText={"MONTH"} placeholder="MM" />
        <InputField labelText={"YEAR"} placeholder="YYYY" />
      </InputsContainer>
      <SubmitButtonContainer>
        <Separator />
        <SubmitButton />
      </SubmitButtonContainer>
      <TextFieldContainer>
        <TextField date={"years"} />
        <TextField date={"months"} />
        <TextField date={"days"} />
      </TextFieldContainer>
    </WrapperContainer>
  );
}

export default Wrapper;
